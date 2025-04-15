
/**
 * Advanced utility functions for mentor matching algorithm
 */

import { Mentor, Startup, UserPreferences, AvailabilitySlot } from "@/shared/types/models";

// Enhanced matching weights for different criteria
const MATCHING_WEIGHTS = {
  industry: 0.25,          // Industry match importance
  expertise: 0.30,         // Skills/expertise importance
  availability: 0.15,      // Schedule compatibility importance
  goals: 0.10,             // Alignment with founder goals
  startupStage: 0.10,      // Experience with startups at this stage
  mentorshipStyle: 0.05,   // Matching mentorship approach
  language: 0.05,          // Communication language match
};

/**
 * Calculate match score between a mentor and a startup/founder
 * Higher score = better match (0-100)
 */
export const calculateMatchScore = (
  mentor: Mentor,
  startup: Startup,
  preferences: UserPreferences = {
    skillsNeeded: [],
    goals: [],
    availability: [],
    industries: []
  }
): number => {
  const {
    skillsNeeded = [],
    goals = [],
    availability = [],
    industries = [],
    startupStage,
    preferredLanguages = [],
    preferredMentorshipStyle = [],
    budgetRange
  } = preferences;
  
  // Industry match - check if mentor has experience in startup's industry
  const industryScore = calculateIndustryScore(mentor, startup, industries);
  
  // Expertise match - calculate overlap between mentor expertise and founder needed skills
  const expertiseScore = calculateExpertiseScore(mentor, skillsNeeded);
  
  // Availability match - check overlap in availability
  const availabilityScore = calculateAvailabilityScore(mentor.availability, availability);
  
  // Goals match - check if mentor expertise aligns with founder goals
  const goalsScore = calculateGoalsScore(mentor, goals);
  
  // Startup stage match - check if mentor has experience with startups at this stage
  const stageScore = calculateStageScore(mentor, startup);
  
  // Mentorship style match
  const styleScore = calculateStyleScore(mentor, preferredMentorshipStyle);
  
  // Language match
  const languageScore = calculateLanguageScore(mentor, preferredLanguages);
  
  // Budget compatibility (if budget range is specified)
  let budgetScore = 1;
  if (budgetRange && mentor.hourlyRate) {
    budgetScore = mentor.hourlyRate >= budgetRange.min && mentor.hourlyRate <= budgetRange.max ? 1 : 0;
  }
  
  // Calculate weighted score considering all factors
  const weightedScore = (
    MATCHING_WEIGHTS.industry * industryScore +
    MATCHING_WEIGHTS.expertise * expertiseScore +
    MATCHING_WEIGHTS.availability * availabilityScore +
    MATCHING_WEIGHTS.goals * goalsScore +
    MATCHING_WEIGHTS.startupStage * stageScore +
    MATCHING_WEIGHTS.mentorshipStyle * styleScore +
    MATCHING_WEIGHTS.language * languageScore
  );
  
  // Apply budget filter (if not within budget, score is significantly reduced)
  const finalScore = budgetScore === 0 ? weightedScore * 0.3 : weightedScore;
  
  // Convert to percentage (0-100)
  return Math.round(finalScore * 100);
};

/**
 * Calculate industry matching score
 */
const calculateIndustryScore = (
  mentor: Mentor,
  startup: Startup,
  preferredIndustries: string[]
): number => {
  // Check direct match with startup industry
  const directMatch = mentor.industries?.includes(startup.industry) || 
                      mentor.expertise.some(exp => exp.toLowerCase() === startup.industry.toLowerCase());
  
  // Check match with preferred industries
  let preferredMatch = 0;
  if (preferredIndustries.length > 0 && mentor.industries) {
    const matchingIndustries = mentor.industries.filter(ind => 
      preferredIndustries.some(pref => pref.toLowerCase() === ind.toLowerCase())
    );
    preferredMatch = matchingIndustries.length / Math.min(mentor.industries.length, preferredIndustries.length);
  }
  
  // Return higher of the two scores, with direct match given priority
  return directMatch ? 1 : (preferredMatch > 0 ? preferredMatch * 0.8 : 0);
};

/**
 * Calculate expertise matching score
 */
const calculateExpertiseScore = (
  mentor: Mentor,
  founderSkillsNeeded: string[]
): number => {
  if (!founderSkillsNeeded.length || !mentor.expertise.length) return 0;
  
  const matchingSkills = mentor.expertise.filter(exp => 
    founderSkillsNeeded.some(skill => skill.toLowerCase() === exp.toLowerCase())
  );
  
  return matchingSkills.length / Math.min(mentor.expertise.length, founderSkillsNeeded.length);
};

/**
 * Calculate availability matching score
 */
const calculateAvailabilityScore = (
  mentorAvailability: string[] = [],
  founderAvailability: string[] = []
): number => {
  if (!mentorAvailability.length || !founderAvailability.length) return 0;
  
  const matchingSlots = mentorAvailability.filter(slot => 
    founderAvailability.includes(slot)
  );
  
  return matchingSlots.length / Math.min(mentorAvailability.length, founderAvailability.length);
};

/**
 * Calculate goals matching score
 */
const calculateGoalsScore = (
  mentor: Mentor,
  founderGoals: string[]
): number => {
  if (!founderGoals.length) return 0;
  
  // Check if any mentor expertise aligns with founder goals
  const matchingGoals = mentor.expertise.filter(exp => 
    founderGoals.some(goal => goal.toLowerCase().includes(exp.toLowerCase()))
  );
  
  return matchingGoals.length > 0 ? matchingGoals.length / founderGoals.length : 0;
};

/**
 * Calculate startup stage matching score
 */
const calculateStageScore = (
  mentor: Mentor,
  startup: Startup
): number => {
  if (!mentor.startupStage) return 0.5; // Neutral score if no preference
  
  return mentor.startupStage.includes(startup.stage) ? 1 : 0;
};

/**
 * Calculate mentorship style matching score
 */
const calculateStyleScore = (
  mentor: Mentor,
  preferredStyles: string[]
): number => {
  if (!preferredStyles.length || !mentor.mentorshipStyle) return 0.5; // Neutral score
  
  const matchingStyles = mentor.mentorshipStyle.filter(style => 
    preferredStyles.includes(style)
  );
  
  return matchingStyles.length > 0 ? matchingStyles.length / preferredStyles.length : 0;
};

/**
 * Calculate language matching score
 */
const calculateLanguageScore = (
  mentor: Mentor,
  preferredLanguages: string[]
): number => {
  if (!preferredLanguages.length || !mentor.languages) return 1; // Perfect score if no preference
  
  const matchingLanguages = mentor.languages.filter(lang => 
    preferredLanguages.includes(lang)
  );
  
  return matchingLanguages.length > 0 ? 1 : 0; // Binary score for language match
};

/**
 * Find best mentor matches for a startup/founder
 */
export const findMentorMatches = (
  mentors: Mentor[],
  startup: Startup,
  preferences: UserPreferences = {
    skillsNeeded: [],
    goals: [],
    availability: [],
    industries: []
  },
  minMatchScore: number = 60,
  limit: number = 10
): { mentor: Mentor, matchScore: number }[] => {
  // Calculate match scores for all mentors
  const scoredMentors = mentors.map(mentor => ({
    mentor,
    matchScore: calculateMatchScore(mentor, startup, preferences)
  }));
  
  // Filter by minimum match score and sort by highest score
  return scoredMentors
    .filter(match => match.matchScore >= minMatchScore)
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, limit);
};

/**
 * Get recommended mentors based on startup profile and founder preferences
 */
export const getRecommendedMentors = (
  mentors: Mentor[],
  startup: Startup | null,
  preferences: UserPreferences = {
    skillsNeeded: [],
    goals: [],
    availability: [],
    industries: []
  }
): { mentor: Mentor, matchScore: number }[] => {
  // If no startup data, return empty array
  if (!startup) return [];
  
  return findMentorMatches(
    mentors,
    startup,
    preferences
  );
};

/**
 * Check if mentor has available slots for booking
 */
export const hasMentorAvailability = (
  mentor: Mentor,
  availabilitySlots: AvailabilitySlot[],
  preferredTimeframe: 'upcoming-week' | 'upcoming-month' | 'any' = 'any'
): boolean => {
  // Filter slots by mentor ID
  const mentorSlots = availabilitySlots.filter(slot => 
    slot.mentorId === mentor.id && !slot.isBooked
  );
  
  if (mentorSlots.length === 0) return false;
  
  if (preferredTimeframe === 'any') return true;
  
  // Get current date and date one week/month from now
  const now = new Date();
  const oneWeekFromNow = new Date(now);
  oneWeekFromNow.setDate(now.getDate() + 7);
  
  const oneMonthFromNow = new Date(now);
  oneMonthFromNow.setMonth(now.getMonth() + 1);
  
  // Check if slots match preferred timeframe
  return mentorSlots.some(slot => {
    const slotDate = new Date(slot.date);
    if (preferredTimeframe === 'upcoming-week') {
      return slotDate >= now && slotDate <= oneWeekFromNow;
    } else { // upcoming-month
      return slotDate >= now && slotDate <= oneMonthFromNow;
    }
  });
};

/**
 * Create a personalized recommendation message based on match score
 */
export const getMatchRecommendationMessage = (matchScore: number): string => {
  if (matchScore >= 85) {
    return "Perfect Match! This mentor's expertise aligns exceptionally well with your needs.";
  } else if (matchScore >= 70) {
    return "Strong Match! This mentor has significant expertise in your areas of interest.";
  } else if (matchScore >= 50) {
    return "Good Match! This mentor has relevant experience that could benefit your startup.";
  } else {
    return "Potential Match. While not specialized in your specific needs, this mentor may offer valuable general insights.";
  }
};
