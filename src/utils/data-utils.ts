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
  const mockSessions = [
    {
      id: "1",
      title: "Product Strategy Discussion",
      mentorName: "Dr. Priya Sharma",
      founderName: "Rahul Gupta",
      date: "2024-01-25T10:00:00Z",
      scheduledDate: "2024-01-25T10:00:00Z",
      duration: 60,
      status: "scheduled",
      topic: "Product Strategy",
      summary: "Discuss product roadmap and strategy for initial launch.",
      founderNotes: "Need to ask about pricing strategy.",
      mentorNotes: "Review their user onboarding flow before the session.",
    },
    {
      id: "2",
      title: "Fundraising & Pitching",
      mentorName: "Arjun Mehta",
      founderName: "Priya Sharma",
      date: "2024-01-20T14:00:00Z",
      scheduledDate: "2024-01-20T14:00:00Z",
      duration: 45,
      status: "completed",
      topic: "Fundraising",
      summary: "Review pitch deck and discuss potential investor targets.",
      founderNotes: "Pitch deck draft is ready.",
      mentorNotes: "Founder needs to refine their valuation slide.",
    },
  ];

  const data = [...mockSessions] as any;
  data.sessions = mockSessions;
  data.upcomingSessions = mockSessions.filter(s => s.status === "scheduled" || s.status === "confirmed");
  data.completedSessions = mockSessions.filter(s => s.status === "completed");

  return {
    data,
    isLoading: false,
    error: null,
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
