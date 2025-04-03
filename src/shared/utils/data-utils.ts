
// Moving the data utilities to shared utils since they can be used by both frontend and backend
import { useQuery } from '@tanstack/react-query';
import { fetchMentors, fetchMentorById, fetchStartups } from '../../backend/services/api';

/**
 * Custom hook for fetching all mentors with caching
 */
export const useMentorsData = () => {
  return useQuery({
    queryKey: ['mentors'],
    queryFn: fetchMentors,
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
    queryFn: () => fetchMentorById(id),
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
    queryFn: fetchStartups,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false
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
