
import { useQuery } from '@tanstack/react-query';
import { fetchMentors, fetchMentorById, fetchStartups } from '@/services/api';
import { Mentor, Startup, MentorshipSession, UserPreferences } from '@/shared/types/models';
import { getRecommendedMentors } from './matching-utils';
import { adaptMentorFromApi, ensureCompletePreferences } from './adapter-utils';

/**
 * Custom hook for fetching all mentors with caching
 */
export const useMentorsData = () => {
  return useQuery({
    queryKey: ['mentors'],
    queryFn: async () => {
      const apiMentors = await fetchMentors();
      // Map API mentors to our model format
      return apiMentors.map(adaptMentorFromApi);
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false
  });
};

/**
 * Custom hook for fetching a mentor by ID with caching
 */
export const useMentorData = (id: string) => {
  return useQuery({
    queryKey: ['mentor', id],
    queryFn: async () => {
      const apiMentor = await fetchMentorById(id);
      // Convert API mentor to our model format
      return adaptMentorFromApi(apiMentor);
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
    enabled: !!id
  });
};

/**
 * Custom hook for fetching all startups with caching
 */
export const useStartupsData = () => {
  return useQuery({
    queryKey: ['startups'],
    queryFn: async () => {
      const startups = await fetchStartups();
      // In a real app, you would adapt these startups to match your model
      // For now, we'll return an empty array to simulate no data being available yet
      return [] as Startup[];
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false
  });
};

/**
 * Custom hook for getting recommended mentors based on startup profile and preferences
 */
export const useRecommendedMentors = (startupId: string, preferences: Partial<UserPreferences>) => {
  const { data: mentors, isLoading: mentorsLoading } = useMentorsData();
  const { data: startups, isLoading: startupsLoading } = useStartupsData();
  
  return useQuery({
    queryKey: ['recommended-mentors', startupId, preferences],
    queryFn: () => {
      const startup = startups?.find(s => s.id === startupId);
      if (!startup || !mentors) return [];
      
      // Ensure we have complete preferences
      const completePreferences = ensureCompletePreferences(preferences);
      return getRecommendedMentors(mentors, startup, completePreferences);
    },
    enabled: !!startupId && !!mentors && !!startups && !mentorsLoading && !startupsLoading,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

/**
 * Format a number with k for thousands
 */
export const formatNumber = (num: number): string => {
  return num >= 1000 ? `${(num / 1000).toFixed(1)}k` : num.toString();
};

/**
 * Truncate text with ellipsis
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

/**
 * Get random items from an array
 */
export const getRandomItems = <T>(array: T[], count: number): T[] => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

/**
 * Format date to readable string
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

/**
 * Calculate time difference from now
 */
export const timeFromNow = (dateString: string): string => {
  const now = new Date();
  const date = new Date(dateString);
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} days ago`;
  return `${Math.floor(diffInSeconds / 2592000)} months ago`;
};

/**
 * Format duration in minutes to hours and minutes
 */
export const formatDuration = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  
  if (hours === 0) return `${mins} min`;
  if (mins === 0) return `${hours} hr`;
  return `${hours} hr ${mins} min`;
};

/**
 * Get session history for a user (either mentor or founder)
 */
export const useSessionHistory = (userId: string, role: 'mentor' | 'founder') => {
  return useQuery({
    queryKey: ['sessions', userId, role],
    queryFn: () => fetchSessionHistory(userId, role),
    staleTime: 5 * 60 * 1000, // 5 minutes
    enabled: !!userId
  });
};

// Mock function for fetching session history (to be replaced with actual API call)
const fetchSessionHistory = async (userId: string, role: 'mentor' | 'founder'): Promise<MentorshipSession[]> => {
  // This would be an API call in production
  // For now, we'll return empty data in a production environment
  console.log(`Fetching session history for ${role} with ID: ${userId}`);
  
  // In production, return empty array as we wait for real data
  return [];
};
