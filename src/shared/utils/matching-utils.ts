// Utilities for mentor-startup matching logic

import { Mentor, UserPreferences, Startup } from "@/shared/types/models";

// Calculate match score between a mentor and user preferences
export const calculateMatchScore = (
  mentor: Mentor,
  preferences: UserPreferences
): number => {
  let score = 0;
  let totalWeights = 0;

  // Expertise matching (highest weight)
  if (preferences.expertise.length > 0) {
    const expertiseMatches = mentor.expertise.filter((exp) =>
      preferences.expertise.some(
        (pref) =>
          exp.toLowerCase().includes(pref.toLowerCase()) ||
          pref.toLowerCase().includes(exp.toLowerCase())
      )
    ).length;
    const expertiseScore =
      (expertiseMatches / preferences.expertise.length) * 100;
    score += expertiseScore * 0.4;
    totalWeights += 0.4;
  }

  // Industry matching (medium weight)
  if (preferences.industry.length > 0 && mentor.tags) {
    const industryMatches = mentor.tags.filter((tag) =>
      preferences.industry.some((ind) =>
        tag.toLowerCase().includes(ind.toLowerCase())
      )
    ).length;
    const industryScore = (industryMatches / preferences.industry.length) * 100;
    score += industryScore * 0.3;
    totalWeights += 0.3;
  }

  // Availability (low weight)
  if (mentor.available) {
    score += 100 * 0.2;
    totalWeights += 0.2;
  }

  // Rating (low weight)
  if (mentor.rating) {
    const ratingScore = (mentor.rating / 5) * 100;
    score += ratingScore * 0.1;
    totalWeights += 0.1;
  }

  return totalWeights > 0 ? score / totalWeights : 0;
};

// Get recommended mentors based on preferences
export const getRecommendedMentors = (
  mentors: Mentor[],
  preferences: UserPreferences,
  limit: number = 5
): Array<Mentor & { matchScore: number }> => {
  return mentors
    .map((mentor) => ({
      ...mentor,
      matchScore: calculateMatchScore(mentor, preferences),
    }))
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, limit);
};

// Generate match recommendation message
export const getMatchRecommendationMessage = (
  matchScore: number,
  mentor: Mentor,
  preferences: UserPreferences
): string => {
  if (matchScore >= 80) {
    return `Excellent match! ${
      mentor.name
    } has strong expertise in ${preferences.expertise
      .slice(0, 2)
      .join(" and ")}.`;
  } else if (matchScore >= 60) {
    return `Good match! ${mentor.name} has relevant experience that aligns with your needs.`;
  } else if (matchScore >= 40) {
    return `Potential match! ${mentor.name} has some relevant skills that could be helpful.`;
  } else {
    return `Consider this mentor! ${mentor.name} brings unique perspectives to your journey.`;
  }
};

// Filter mentors by specific criteria
export const filterMentorsByCriteria = (
  mentors: Mentor[],
  criteria: {
    expertise?: string[];
    minRating?: number;
    availability?: boolean;
    minSessions?: number;
  }
): Mentor[] => {
  return mentors.filter((mentor) => {
    // Expertise filter
    if (criteria.expertise && criteria.expertise.length > 0) {
      const hasExpertise = criteria.expertise.some((exp) =>
        mentor.expertise.some((mentorExp) =>
          mentorExp.toLowerCase().includes(exp.toLowerCase())
        )
      );
      if (!hasExpertise) return false;
    }

    // Rating filter
    if (
      criteria.minRating &&
      mentor.rating &&
      mentor.rating < criteria.minRating
    ) {
      return false;
    }

    // Availability filter
    if (
      criteria.availability !== undefined &&
      mentor.available !== criteria.availability
    ) {
      return false;
    }

    // Session count filter
    if (
      criteria.minSessions &&
      mentor.sessions &&
      mentor.sessions < criteria.minSessions
    ) {
      return false;
    }

    return true;
  });
};

// Get matching statistics
export const getMatchingStatistics = (
  mentors: Mentor[],
  preferences: UserPreferences
) => {
  const scores = mentors.map((mentor) =>
    calculateMatchScore(mentor, preferences)
  );
  const highMatches = scores.filter((score) => score >= 70).length;
  const mediumMatches = scores.filter(
    (score) => score >= 40 && score < 70
  ).length;
  const lowMatches = scores.filter((score) => score < 40).length;

  return {
    total: mentors.length,
    highMatches,
    mediumMatches,
    lowMatches,
    averageScore:
      scores.length > 0 ? scores.reduce((a, b) => a + b, 0) / scores.length : 0,
  };
};
