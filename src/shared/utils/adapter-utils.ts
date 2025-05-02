
import { ApiMentor, ApiStartup } from "@/backend/services/api";
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
    hourlyRate: apiMentor.role.includes("Investor") ? 150 : 100, // Higher rate for investors
    featured: apiMentor.badges?.some(b => b.label === 'Featured') || false,
    // Additional fields with India-specific values
    industries: ['Technology', 'E-commerce', 'EdTech', 'FinTech'],
    startupStage: ['Seed', 'Early Stage', 'Growth'],
    languages: ['English', 'Hindi', 'Tamil', 'Marathi', 'Telugu'].slice(0, 2 + Math.floor(Math.random() * 3)), // Random selection of Indian languages
    mentorshipStyle: ['One-on-one', 'Group Sessions', 'Workshops'],
    maxStartups: 5
  };
};

/**
 * Converts API startup format to the application's internal Startup model
 */
export const adaptStartupFromApi = (apiStartup: ApiStartup): Startup => {
  // Add some Indian-specific details
  const foundingYear = 2018 + Math.floor(Math.random() * 5); // Random recent year
  const employeeCount = 5 + Math.floor(Math.random() * 45); // Random team size
  const fundingAmounts = ["₹25 Lakhs", "₹50 Lakhs", "₹1.2 Crore", "₹4.5 Crore", "₹12 Crore", "Bootstrapped"];
  
  return {
    id: apiStartup.id,
    name: apiStartup.name,
    description: apiStartup.shortPitch || '',
    industry: apiStartup.industry,
    stage: apiStartup.fundingStage,
    foundingYear: foundingYear,
    logo: apiStartup.logo || 'https://via.placeholder.com/150',
    founders: [],
    location: apiStartup.location,
    funding: fundingAmounts[Math.floor(Math.random() * fundingAmounts.length)],
    employees: employeeCount,
    website: `https://${apiStartup.name.toLowerCase().replace(/\s+/g, '')}.in`,
    featured: Math.random() > 0.7 // 30% chance of being featured
  };
};

/**
 * Ensures UserPreferences always has required fields even when partial
 */
export const ensureCompletePreferences = (
  partialPreferences: Partial<UserPreferences>
): UserPreferences => {
  return {
    skillsNeeded: partialPreferences.skillsNeeded || ['Business Strategy', 'Marketing', 'Technology'],
    goals: partialPreferences.goals || ['Fundraising', 'Product Development', 'Market Expansion'],
    availability: partialPreferences.availability || ['Weekdays', 'Evenings'],
    industries: partialPreferences.industries || ['Technology', 'E-commerce', 'FinTech'],
    startupStage: partialPreferences.startupStage || 'Seed',
    preferredLanguages: partialPreferences.preferredLanguages || ['English', 'Hindi'],
    preferredMentorshipStyle: partialPreferences.preferredMentorshipStyle || ['One-on-one'],
    locationPreference: partialPreferences.locationPreference || 'any',
    sessionFrequency: partialPreferences.sessionFrequency || 'monthly',
    budgetRange: partialPreferences.budgetRange || { min: 5000, max: 15000 } // In rupees
  };
};
