// Simple utility functions to replace shared utils

export const formatDate = (date: string | Date): string => {
  return new Date(date).toLocaleDateString();
};

export const formatDuration = (minutes: number): string => {
  if (minutes < 60) {
    return `${minutes} min`;
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`;
};

export const timeFromNow = (date: string | Date): string => {
  const now = new Date();
  const targetDate = new Date(date);
  const diffInMinutes = Math.floor(
    (now.getTime() - targetDate.getTime()) / (1000 * 60)
  );

  if (diffInMinutes < 1) return "just now";
  if (diffInMinutes < 60) return `${diffInMinutes} min ago`;
  if (diffInMinutes < 1440)
    return `${Math.floor(diffInMinutes / 60)} hours ago`;
  return `${Math.floor(diffInMinutes / 1440)} days ago`;
};

export const useSessionHistory = (userId: string, userType: string) => {
  // Mock session history hook
  return {
    data: {
      upcomingSessions: [
        {
          id: "1",
          mentorName: "Dr. Priya Sharma",
          founderName: "Rahul Gupta",
          scheduledDate: "2024-01-25T10:00:00Z",
          duration: 60,
          status: "confirmed",
          topic: "Product Strategy",
        },
      ],
      completedSessions: [
        {
          id: "2",
          mentorName: "Arjun Mehta",
          founderName: "Priya Sharma",
          scheduledDate: "2024-01-20T14:00:00Z",
          duration: 45,
          status: "completed",
          topic: "Fundraising",
        },
      ],
    },
  };
};

export const ensureCompletePreferences = (preferences: any) => {
  return {
    industries: preferences?.industries || [],
    experience: preferences?.experience || "Any",
    location: preferences?.location || "Any",
    availability: preferences?.availability || "Flexible",
    ...preferences,
  };
};

export const getRecommendedMentors = (preferences: any, mentors: any[]) => {
  // Simple recommendation logic
  return mentors.slice(0, 3);
};

export const getMatchRecommendationMessage = (score: number) => {
  if (score > 80) return "Excellent match based on your preferences!";
  if (score > 60) return "Good match - worth connecting!";
  return "Potential match - consider reaching out!";
};

export const adaptMentorFromApi = (mentor: any) => {
  return mentor; // No adaptation needed for static data
};
