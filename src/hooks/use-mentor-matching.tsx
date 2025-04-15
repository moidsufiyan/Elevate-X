
import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Mentor, Startup, UserPreferences } from "@/shared/types/models";
import { findMentorMatches } from "@/shared/utils/matching-utils";
import { toast } from "sonner";

const STORAGE_KEY = "elevate-x-matching-preferences";

// Mock function to save preferences to a backend (in a real app)
const savePreferencesToApi = async (userId: string, preferences: UserPreferences): Promise<UserPreferences> => {
  // This would be an API call in a real app
  console.log("Saving preferences for user", userId, preferences);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // For now, just save to localStorage
  localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  
  return preferences;
};

// Mock function to get preferences from backend (in a real app)
const getPreferencesFromApi = async (userId: string): Promise<UserPreferences | null> => {
  // This would be an API call in a real app
  console.log("Fetching preferences for user", userId);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // For now, just get from localStorage
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    return JSON.parse(saved);
  }
  
  return null;
};

interface UseMentorMatchingOptions {
  userId: string;
  startup?: Startup | null;
  mentors?: Mentor[];
}

export const useMentorMatching = ({ userId, startup, mentors = [] }: UseMentorMatchingOptions) => {
  const queryClient = useQueryClient();
  const [matchingResults, setMatchingResults] = useState<{ mentor: Mentor, matchScore: number }[]>([]);
  
  // Fetch user preferences
  const { data: preferences, isLoading: preferencesLoading } = useQuery({
    queryKey: ['matching-preferences', userId],
    queryFn: () => getPreferencesFromApi(userId),
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
  
  // Save user preferences mutation
  const { mutate: savePreferences, isPending: isSaving } = useMutation({
    mutationFn: (newPreferences: UserPreferences) => savePreferencesToApi(userId, newPreferences),
    onSuccess: (savedPreferences) => {
      queryClient.setQueryData(['matching-preferences', userId], savedPreferences);
      toast.success("Preferences saved successfully");
      
      // Recalculate matches when preferences change
      if (startup && mentors.length > 0) {
        const newMatches = findMentorMatches(mentors, startup, savedPreferences);
        setMatchingResults(newMatches);
      }
    },
    onError: () => {
      toast.error("Failed to save preferences. Please try again.");
    },
  });
  
  // Calculate matches when dependencies change
  useEffect(() => {
    if (startup && mentors.length > 0 && preferences) {
      const newMatches = findMentorMatches(mentors, startup, preferences);
      setMatchingResults(newMatches);
    }
  }, [startup, mentors, preferences]);
  
  return {
    preferences,
    matchingResults,
    savePreferences,
    isLoading: preferencesLoading,
    isSaving,
  };
};
