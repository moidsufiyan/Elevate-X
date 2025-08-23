// Shared types and models for the Elevate-X application

export interface Mentor {
  id: string;
  name: string;
  role: string;
  company: string;
  expertise: string[];
  image: string;
  available: boolean;
  bio?: string;
  rating?: number;
  sessions?: number;
  tags?: string[];
  badges?: {
    label: string;
    variant?: "default" | "secondary" | "destructive" | "outline";
  }[];
  reviewCount?: number;
  availableTimes?: string;
}

export interface Startup {
  id: string;
  name: string;
  logo: string;
  industry: string;
  location: string;
  fundingStage: string;
  shortPitch: string;
  interestedCount: number;
  tags: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "mentor" | "founder" | "admin";
  avatar?: string;
  company?: string;
  position?: string;
  bio?: string;
}

export interface Message {
  id: string;
  content: string;
  timestamp: Date;
  senderId: string;
  sender: User;
  type: "text" | "file" | "image";
  fileUrl?: string;
  fileName?: string;
}

export interface Conversation {
  id: string;
  participants: User[];
  lastMessage: Message;
  lastMessageTimestamp: Date;
  unreadCount: number;
  messages: Message[];
}

export interface MentorshipSession {
  id: string;
  mentorId: string;
  founderId: string;
  title: string;
  description: string;
  scheduledDate: Date;
  duration: number; // in minutes
  status: "scheduled" | "in-progress" | "completed" | "cancelled";
  notes?: string;
  rating?: number;
  feedback?: string;
  tags?: string[];
  type: "1-on-1" | "group" | "workshop";
}

export interface UserPreferences {
  expertise: string[];
  industry: string[];
  fundingStage: string[];
  location: string[];
  availability: string[];
  sessionType: string[];
}

export interface MatchCriteria {
  expertise: string[];
  industry: string[];
  experience: string;
  availability: string[];
  sessionType: string;
}

export interface SessionHistory {
  sessions: MentorshipSession[];
  totalSessions: number;
  upcomingSessions: MentorshipSession[];
  completedSessions: MentorshipSession[];
}

export type UserRole = "mentor" | "founder" | "admin";

export interface EmptyStateConfig {
  title: string;
  description: string;
  actionLabel?: string;
  icon?: React.ReactNode;
}
