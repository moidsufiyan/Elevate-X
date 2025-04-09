
// Moving the data utilities to shared utils since they can be used by both frontend and backend
import { useQuery } from '@tanstack/react-query';
import { fetchMentors, fetchMentorById, fetchStartups } from '@/services/api';
import { Mentor, Startup, MentorshipSession, UserPreferences } from '@/shared/types/models';
import { getRecommendedMentors } from './matching-utils';

/**
 * Adapter function to convert API Mentor to Model Mentor
 */
const adaptMentorFromApi = (apiMentor: any): Mentor => {
  return {
    id: apiMentor.id,
    name: apiMentor.name,
    role: apiMentor.role,
    expertise: apiMentor.expertise || [],
    company: apiMentor.company,
    bio: apiMentor.bio || '',
    avatar: apiMentor.image || apiMentor.avatar || 'https://via.placeholder.com/150',
    rating: apiMentor.rating || 0,
    reviews: apiMentor.reviewCount || 0,
    sessions: apiMentor.sessions || 0,
    availability: apiMentor.availableTimes ? [apiMentor.availableTimes] : ['Flexible'],
    hourlyRate: 100, // Default value if not provided by API
    featured: apiMentor.badges?.some((b: any) => b.label === 'Featured') || false
  };
};

/**
 * Adapter function to convert API Startup to Model Startup
 */
const adaptStartupFromApi = (apiStartup: any): Startup => {
  return {
    id: apiStartup.id,
    name: apiStartup.name,
    description: apiStartup.shortPitch || apiStartup.description || '',
    industry: apiStartup.industry,
    stage: apiStartup.fundingStage || 'Seed',
    foundingYear: new Date().getFullYear() - 1, // Default if not provided
    logo: apiStartup.logo,
    founders: [
      {
        name: 'Founder', // Default values since API doesn't provide founder details
        role: 'CEO',
        avatar: 'https://via.placeholder.com/150'
      }
    ],
    location: apiStartup.location || 'Global',
    funding: apiStartup.funding || 'Bootstrapped',
    employees: apiStartup.employees || 1,
    website: apiStartup.website || `https://${apiStartup.name.toLowerCase().replace(/\s/g, '')}.com`,
    featured: apiStartup.featured || false
  };
};

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
      const apiStartups = await fetchStartups();
      // Map API startups to our model format
      return apiStartups.map(adaptStartupFromApi);
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
      
      return getRecommendedMentors(mentors, startup, preferences);
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
  // For now, we'll return mock data
  console.log(`Fetching session history for ${role} with ID: ${userId}`);
  
  // Mock data - would come from the API
  const mockSessions: MentorshipSession[] = [
    {
      id: '1',
      mentorId: role === 'mentor' ? userId : 'mentor-1',
      founderId: role === 'founder' ? userId : 'founder-1',
      startupId: 'startup-1',
      title: 'Initial Business Strategy Session',
      date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 1 week ago
      duration: 60,
      status: 'completed',
      summary: 'Discussed business model and go-to-market strategy',
      founderNotes: 'Need to refine customer acquisition strategy',
      mentorNotes: 'Founder should focus on validating core assumptions',
      founderFeedback: {
        rating: 5,
        comments: 'Very insightful session, helped clarify our direction',
        willRecommend: true
      }
    },
    {
      id: '2',
      mentorId: role === 'mentor' ? userId : 'mentor-2',
      founderId: role === 'founder' ? userId : 'founder-1',
      startupId: 'startup-1',
      title: 'Fundraising Preparation',
      date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
      duration: 90,
      status: 'completed',
      summary: 'Reviewed pitch deck and fundraising strategy',
      founderNotes: 'Need to strengthen the financial projections section',
      founderFeedback: {
        rating: 4,
        comments: 'Great feedback on the pitch deck',
        willRecommend: true
      }
    },
    {
      id: '3',
      mentorId: role === 'mentor' ? userId : 'mentor-1',
      founderId: role === 'founder' ? userId : 'founder-1',
      startupId: 'startup-1',
      title: 'Technical Architecture Review',
      date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days in future
      duration: 60,
      status: 'scheduled'
    }
  ];
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return mockSessions;
};
