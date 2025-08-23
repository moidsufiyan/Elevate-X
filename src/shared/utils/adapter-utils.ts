// Adapter utilities for converting and ensuring data compatibility

import { Mentor, UserPreferences } from "@/shared/types/models";

// Ensure user preferences have all required fields with defaults
export const ensureCompletePreferences = (
  preferences: Partial<UserPreferences>
): UserPreferences => {
  return {
    expertise: preferences.expertise || [],
    industry: preferences.industry || [],
    fundingStage: preferences.fundingStage || [],
    location: preferences.location || [],
    availability: preferences.availability || [],
    sessionType: preferences.sessionType || [],
  };
};

// Adapt mentor data from API format to frontend format
export const adaptMentorFromApi = (apiMentor: any): Mentor => {
  return {
    id: apiMentor.id || "",
    name: apiMentor.name || "",
    role: apiMentor.role || "",
    company: apiMentor.company || "",
    expertise: apiMentor.expertise || [],
    image: apiMentor.image || apiMentor.avatar || "",
    available: apiMentor.available ?? true,
    bio: apiMentor.bio || apiMentor.description,
    rating: apiMentor.rating || 0,
    sessions: apiMentor.sessions || apiMentor.sessionCount || 0,
    tags: apiMentor.tags || [],
    badges: apiMentor.badges || [],
    reviewCount: apiMentor.reviewCount || apiMentor.reviews?.length || 0,
    availableTimes: apiMentor.availableTimes || apiMentor.availability,
  };
};

// Adapt startup data from API format
export const adaptStartupFromApi = (apiStartup: any) => {
  return {
    id: apiStartup.id || "",
    name: apiStartup.name || "",
    logo: apiStartup.logo || "",
    industry: apiStartup.industry || "",
    location: apiStartup.location || "",
    fundingStage: apiStartup.fundingStage || apiStartup.stage || "",
    shortPitch: apiStartup.shortPitch || apiStartup.description || "",
    interestedCount: apiStartup.interestedCount || 0,
    tags: apiStartup.tags || [],
  };
};

// Convert frontend preferences to API format
export const adaptPreferencesToApi = (preferences: UserPreferences) => {
  return {
    skills_needed: preferences.expertise,
    industries: preferences.industry,
    funding_stages: preferences.fundingStage,
    locations: preferences.location,
    availability: preferences.availability,
    session_types: preferences.sessionType,
  };
};

// Convert API preferences to frontend format
export const adaptPreferencesFromApi = (
  apiPreferences: any
): UserPreferences => {
  return {
    expertise: apiPreferences.skills_needed || apiPreferences.expertise || [],
    industry: apiPreferences.industries || apiPreferences.industry || [],
    fundingStage:
      apiPreferences.funding_stages || apiPreferences.fundingStage || [],
    location: apiPreferences.locations || apiPreferences.location || [],
    availability: apiPreferences.availability || [],
    sessionType:
      apiPreferences.session_types || apiPreferences.sessionType || [],
  };
};
