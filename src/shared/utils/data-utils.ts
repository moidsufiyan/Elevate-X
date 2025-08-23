// Data utility functions and hooks for the Elevate-X application

import { useState, useEffect } from "react";
import {
  MentorshipSession,
  SessionHistory,
  UserRole,
} from "@/shared/types/models";

// Time formatting utility
export const timeFromNow = (date: Date | string): string => {
  const now = new Date();
  const target = typeof date === "string" ? new Date(date) : date;
  const diffInSeconds = Math.floor((now.getTime() - target.getTime()) / 1000);

  // Future dates
  if (diffInSeconds < 0) {
    const futureSeconds = Math.abs(diffInSeconds);
    if (futureSeconds < 60) return "in a few seconds";
    if (futureSeconds < 3600)
      return `in ${Math.floor(futureSeconds / 60)} minutes`;
    if (futureSeconds < 86400)
      return `in ${Math.floor(futureSeconds / 3600)} hours`;
    if (futureSeconds < 2592000)
      return `in ${Math.floor(futureSeconds / 86400)} days`;
    return target.toLocaleDateString();
  }

  // Past dates
  if (diffInSeconds < 60) return "just now";
  if (diffInSeconds < 3600)
    return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400)
    return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 2592000)
    return `${Math.floor(diffInSeconds / 86400)} days ago`;
  if (diffInSeconds < 31536000)
    return `${Math.floor(diffInSeconds / 2592000)} months ago`;
  return `${Math.floor(diffInSeconds / 31536000)} years ago`;
};

// Mock session data for development
const mockSessions: MentorshipSession[] = [
  {
    id: "session-1",
    mentorId: "mentor-1",
    founderId: "founder-1",
    title: "Product Strategy Session",
    description: "Discussing go-to-market strategy and product roadmap",
    scheduledDate: new Date(Date.now() + 86400000), // Tomorrow
    duration: 60,
    status: "scheduled",
    type: "1-on-1",
    tags: ["Product", "Strategy", "GTM"],
  },
  {
    id: "session-2",
    mentorId: "mentor-2",
    founderId: "founder-1",
    title: "Fundraising Workshop",
    description: "Learning about Series A fundraising process",
    scheduledDate: new Date(Date.now() - 604800000), // Last week
    duration: 90,
    status: "completed",
    type: "workshop",
    rating: 5,
    feedback: "Excellent session with practical insights",
    tags: ["Fundraising", "Series A", "Investors"],
  },
  {
    id: "session-3",
    mentorId: "mentor-1",
    founderId: "founder-2",
    title: "Technical Architecture Review",
    description: "Reviewing technical decisions and scalability",
    scheduledDate: new Date(Date.now() - 259200000), // 3 days ago
    duration: 45,
    status: "completed",
    type: "1-on-1",
    rating: 4,
    feedback: "Good technical guidance",
    tags: ["Technical", "Architecture", "Scalability"],
  },
  {
    id: "session-4",
    mentorId: "mentor-3",
    founderId: "founder-1",
    title: "Marketing Strategy Call",
    description: "Developing digital marketing strategy",
    scheduledDate: new Date(Date.now() + 259200000), // In 3 days
    duration: 60,
    status: "scheduled",
    type: "1-on-1",
    tags: ["Marketing", "Digital", "Strategy"],
  },
];

// Hook to fetch session history for a user
export const useSessionHistory = (userId: string, userRole: UserRole) => {
  const [data, setData] = useState<SessionHistory | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSessionHistory = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Filter sessions based on user role and ID
        let userSessions: MentorshipSession[] = [];

        if (userRole === "mentor") {
          userSessions = mockSessions.filter(
            (session) => session.mentorId === userId
          );
        } else if (userRole === "founder") {
          userSessions = mockSessions.filter(
            (session) => session.founderId === userId
          );
        } else {
          // Admin can see all sessions
          userSessions = mockSessions;
        }

        const upcomingSessions = userSessions.filter(
          (session) =>
            session.status === "scheduled" && session.scheduledDate > new Date()
        );

        const completedSessions = userSessions.filter(
          (session) => session.status === "completed"
        );

        const sessionHistory: SessionHistory = {
          sessions: userSessions,
          totalSessions: userSessions.length,
          upcomingSessions,
          completedSessions,
        };

        setData(sessionHistory);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch session history"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchSessionHistory();
  }, [userId, userRole]);

  return { data, isLoading, error };
};

// Utility to format duration
export const formatDuration = (minutes: number): string => {
  if (minutes < 60) {
    return `${minutes} min`;
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`;
};

// Utility to format a single date
export const formatDate = (date: Date | string): string => {
  const target = typeof date === "string" ? new Date(date) : date;
  return target.toLocaleDateString();
};

// Utility to format date ranges
export const formatDateRange = (startDate: Date, endDate?: Date): string => {
  const start = startDate.toLocaleDateString();
  if (!endDate) return start;
  const end = endDate.toLocaleDateString();
  return start === end ? start : `${start} - ${end}`;
};

// Utility to get session status badge variant
export const getSessionStatusVariant = (
  status: MentorshipSession["status"]
) => {
  switch (status) {
    case "scheduled":
      return "default";
    case "in-progress":
      return "secondary";
    case "completed":
      return "outline";
    case "cancelled":
      return "destructive";
    default:
      return "default";
  }
};

// Utility to calculate session statistics
export const calculateSessionStats = (sessions: MentorshipSession[]) => {
  const total = sessions.length;
  const completed = sessions.filter((s) => s.status === "completed").length;
  const upcoming = sessions.filter(
    (s) => s.status === "scheduled" && s.scheduledDate > new Date()
  ).length;
  const averageRating =
    sessions
      .filter((s) => s.rating)
      .reduce((sum, s) => sum + (s.rating || 0), 0) /
      sessions.filter((s) => s.rating).length || 0;

  const totalHours =
    sessions
      .filter((s) => s.status === "completed")
      .reduce((sum, s) => sum + s.duration, 0) / 60;

  return {
    total,
    completed,
    upcoming,
    averageRating: Math.round(averageRating * 10) / 10,
    totalHours: Math.round(totalHours * 10) / 10,
  };
};
