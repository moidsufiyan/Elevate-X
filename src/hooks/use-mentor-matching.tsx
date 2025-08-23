// Hook for mentor matching functionality

import { useState, useEffect, useMemo } from "react";
import { Mentor, UserPreferences } from "@/shared/types/models";
import {
  getRecommendedMentors,
  calculateMatchScore,
} from "@/shared/utils/matching-utils";
import { useMentors } from "./use-mentors";

interface MatchingResult {
  mentor: Mentor;
  matchScore: number;
  reasons: string[];
}

interface UseMentorMatchingReturn {
  matchedMentors: MatchingResult[];
  isLoading: boolean;
  error: string | null;
  updatePreferences: (preferences: UserPreferences) => void;
  refreshMatches: () => void;
  preferences: UserPreferences;
}

export const useMentorMatching = (
  initialPreferences?: Partial<UserPreferences>
): UseMentorMatchingReturn => {
  const { mentors, loading, error: mentorsError } = useMentors();
  const [preferences, setPreferences] = useState<UserPreferences>({
    expertise: initialPreferences?.expertise || [],
    industry: initialPreferences?.industry || [],
    fundingStage: initialPreferences?.fundingStage || [],
    location: initialPreferences?.location || [],
    availability: initialPreferences?.availability || [],
    sessionType: initialPreferences?.sessionType || [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Calculate matched mentors based on preferences
  const matchedMentors = useMemo(() => {
    if (!mentors || mentors.length === 0) return [];

    try {
      const recommendedMentors = getRecommendedMentors(
        mentors,
        preferences,
        10
      );

      return recommendedMentors.map((mentor) => ({
        mentor,
        matchScore: mentor.matchScore,
        reasons: generateMatchReasons(mentor, preferences),
      }));
    } catch (err) {
      console.error("Error calculating mentor matches:", err);
      setError("Failed to calculate mentor matches");
      return [];
    }
  }, [mentors, preferences]);

  // Generate reasons for why a mentor matches
  const generateMatchReasons = (
    mentor: Mentor,
    prefs: UserPreferences
  ): string[] => {
    const reasons: string[] = [];

    // Check expertise matches
    const expertiseMatches = mentor.expertise.filter((exp) =>
      prefs.expertise.some(
        (pref) =>
          exp.toLowerCase().includes(pref.toLowerCase()) ||
          pref.toLowerCase().includes(exp.toLowerCase())
      )
    );

    if (expertiseMatches.length > 0) {
      reasons.push(`Expert in ${expertiseMatches.slice(0, 2).join(", ")}`);
    }

    // Check industry matches
    if (mentor.tags && prefs.industry.length > 0) {
      const industryMatches = mentor.tags.filter((tag) =>
        prefs.industry.some((ind) =>
          tag.toLowerCase().includes(ind.toLowerCase())
        )
      );

      if (industryMatches.length > 0) {
        reasons.push(`Experience in ${industryMatches[0]} industry`);
      }
    }

    // Check rating
    if (mentor.rating && mentor.rating >= 4.0) {
      reasons.push(`Highly rated (${mentor.rating}/5)`);
    }

    // Check session count
    if (mentor.sessions && mentor.sessions >= 10) {
      reasons.push(`Experienced mentor (${mentor.sessions}+ sessions)`);
    }

    // Check availability
    if (mentor.available) {
      reasons.push("Currently available");
    }

    return reasons.slice(0, 3); // Limit to top 3 reasons
  };

  const updatePreferences = (newPreferences: UserPreferences) => {
    setPreferences(newPreferences);
  };

  const refreshMatches = () => {
    setIsLoading(true);
    // Simulate refresh delay
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    if (mentorsError) {
      setError(mentorsError);
    }
  }, [mentorsError]);

  return {
    matchedMentors,
    isLoading: loading || isLoading,
    error: error || mentorsError,
    updatePreferences,
    refreshMatches,
    preferences,
  };
};
