// Basic types for the application

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: "founder" | "mentor" | "admin";
  company?: string;
}

export interface Message {
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
  timestamp: string;
  attachments?: {
    type: "image" | "file" | "link";
    url: string;
    name: string;
  }[];
}

export interface Conversation {
  id: string;
  participants: User[];
  lastMessage?: Message;
  updatedAt: string;
}

export interface MentorshipSession {
  id: string;
  mentorName: string;
  founderName: string;
  scheduledDate: string;
  duration: number;
  status: "scheduled" | "confirmed" | "completed" | "cancelled";
  topic: string;
}

export interface UserPreferences {
  industries: string[];
  experience: string;
  location: string;
  availability: string;
  skillsNeeded?: string[];
  mentorshipGoals?: string[];
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
  description?: string;
  website?: string;
  foundingYear?: number;
  employees?: number;
  funding?: string;
  founders?: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
  }[];
}
