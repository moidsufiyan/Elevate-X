
import { Mentor as ApiMentor } from "@/services/api";
import { Mentor, Startup, UserPreferences } from "@/shared/types/models";

/**
 * Converts API mentor format to the application's internal Mentor model
 */
export const adaptMentorFromApi = (apiMentor: ApiMentor): Mentor => {
  return {
    id: apiMentor.id,
    name: apiMentor.name,
    role: apiMentor.role,
    expertise: apiMentor.expertise || [],
    company: apiMentor.company,
    bio: apiMentor.bio || '',
    avatar: apiMentor.image || 'https://via.placeholder.com/150',
    rating: apiMentor.rating || 0,
    reviews: apiMentor.reviewCount || 0,
    sessions: apiMentor.sessions || 0,
    availability: apiMentor.availableTimes ? [apiMentor.availableTimes] : ['Flexible'],
    hourlyRate: 100, // Default hourly rate if not provided by API
    featured: apiMentor.badges?.some(b => b.label === 'Featured') || false,
    // Additional fields with default values
    industries: ['Technology'],
    startupStage: ['Seed', 'Early Stage'],
    languages: ['English'],
    mentorshipStyle: ['One-on-one'],
    maxStartups: 5
  };
};

/**
 * Ensures UserPreferences always has required fields even when partial
 */
export const ensureCompletePreferences = (
  partialPreferences: Partial<UserPreferences>
): UserPreferences => {
  return {
    skillsNeeded: partialPreferences.skillsNeeded || [],
    goals: partialPreferences.goals || [],
    availability: partialPreferences.availability || [],
    industries: partialPreferences.industries || [],
    startupStage: partialPreferences.startupStage || 'Seed',
    preferredLanguages: partialPreferences.preferredLanguages || [],
    preferredMentorshipStyle: partialPreferences.preferredMentorshipStyle || [],
    locationPreference: partialPreferences.locationPreference || 'any',
    sessionFrequency: partialPreferences.sessionFrequency || 'monthly',
    budgetRange: partialPreferences.budgetRange || { min: 0, max: 1000 }
  };
};
