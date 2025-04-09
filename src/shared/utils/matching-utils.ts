
/**
 * Utility functions for mentor matching algorithm
 */

import { Mentor, Startup } from "@/shared/types/models";

// Scoring weights for different matching criteria
const MATCHING_WEIGHTS = {
  industry: 0.35,
  expertise: 0.4, 
  availability: 0.15,
  goals: 0.1
};

/**
 * Calculate match score between a mentor and a startup/founder
 * Higher score = better match (0-100)
 */
export const calculateMatchScore = (
  mentor: Mentor,
  startup: Startup,
  founderSkillsNeeded: string[] = [],
  founderGoals: string[] = [],
  founderAvailability: string[] = []
): number => {
  // Industry match - check if mentor has experience in startup's industry
  const industryScore = mentor.expertise.some(exp => 
    exp.toLowerCase() === startup.industry.toLowerCase()
  ) ? 1 : 0;
  
  // Expertise match - calculate overlap between mentor expertise and founder needed skills
  let expertiseScore = 0;
  if (founderSkillsNeeded.length > 0) {
    const matchingSkills = mentor.expertise.filter(exp => 
      founderSkillsNeeded.some(skill => skill.toLowerCase() === exp.toLowerCase())
    );
    expertiseScore = matchingSkills.length / Math.min(mentor.expertise.length, founderSkillsNeeded.length);
  }
  
  // Availability match - check overlap in availability
  let availabilityScore = 0;
  if (mentor.availability && mentor.availability.length > 0 && founderAvailability.length > 0) {
    const matchingSlots = mentor.availability.filter(slot => 
      founderAvailability.includes(slot)
    );
    availabilityScore = matchingSlots.length / Math.min(mentor.availability.length, founderAvailability.length);
  }
  
  // Goals match - simplified implementation for now
  let goalsScore = 0;
  if (mentor.expertise && founderGoals.length > 0) {
    // Check if any mentor expertise aligns with founder goals
    const matchingGoals = mentor.expertise.filter(exp => 
      founderGoals.some(goal => goal.toLowerCase().includes(exp.toLowerCase()))
    );
    goalsScore = matchingGoals.length > 0 ? 1 : 0;
  }
  
  // Calculate weighted score
  const weightedScore = (
    MATCHING_WEIGHTS.industry * industryScore +
    MATCHING_WEIGHTS.expertise * expertiseScore +
    MATCHING_WEIGHTS.availability * availabilityScore +
    MATCHING_WEIGHTS.goals * goalsScore
  );
  
  // Convert to percentage (0-100)
  return Math.round(weightedScore * 100);
};

/**
 * Find best mentor matches for a startup/founder
 */
export const findMentorMatches = (
  mentors: Mentor[],
  startup: Startup,
  founderSkillsNeeded: string[] = [],
  founderGoals: string[] = [],
  founderAvailability: string[] = [],
  minMatchScore: number = 60,
  limit: number = 10
): { mentor: Mentor, matchScore: number }[] => {
  // Calculate match scores for all mentors
  const scoredMentors = mentors.map(mentor => ({
    mentor,
    matchScore: calculateMatchScore(
      mentor, 
      startup, 
      founderSkillsNeeded, 
      founderGoals, 
      founderAvailability
    )
  }));
  
  // Filter by minimum match score and sort by highest score
  return scoredMentors
    .filter(match => match.matchScore >= minMatchScore)
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, limit);
};

/**
 * Get recommended mentors based on startup profile and founder preferences
 * This is a simplified algorithm that will be enhanced over time
 */
export const getRecommendedMentors = (
  mentors: Mentor[],
  startup: Startup | null,
  preferences: {
    skillsNeeded?: string[];
    goals?: string[];
    availability?: string[];
  } = {}
): { mentor: Mentor, matchScore: number }[] => {
  // If no startup data, return empty array
  if (!startup) return [];
  
  const { skillsNeeded = [], goals = [], availability = [] } = preferences;
  
  return findMentorMatches(
    mentors,
    startup,
    skillsNeeded,
    goals,
    availability
  );
};
