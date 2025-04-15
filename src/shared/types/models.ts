
// Creating a shared types file for models used across the application

export interface Mentor {
  id: string;
  name: string;
  role: string;
  expertise: string[];
  company: string;
  bio: string;
  avatar: string;
  rating: number;
  reviews: number;
  sessions: number;
  availability: string[];
  hourlyRate: number;
  featured?: boolean;
  // New fields for enhanced matching
  industries?: string[];
  startupStage?: string[];
  languages?: string[];
  mentorshipStyle?: string[];
  maxStartups?: number;
  // Add any additional fields that might be needed from API
}

export interface Startup {
  id: string;
  name: string;
  description: string;
  industry: string;
  stage: string;
  foundingYear: number;
  logo: string;
  founders: Founder[];
  location: string;
  funding: string;
  employees: number;
  website: string;
  featured?: boolean;
}

export interface Founder {
  name: string;
  role: string;
  avatar: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'founder' | 'mentor' | 'admin';
  createdAt: string;
}

// New interfaces for messaging system
export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  read: boolean;
  attachments?: Attachment[];
}

export interface Attachment {
  id: string;
  type: 'image' | 'document' | 'link';
  url: string;
  name: string;
  size?: number;
}

export interface Conversation {
  id: string;
  participants: string[]; // User IDs
  lastMessageId: string;
  lastMessageTimestamp: string;
  unreadCount: number;
}

// New interfaces for session history tracking
export interface MentorshipSession {
  id: string;
  mentorId: string;
  founderId: string;
  startupId?: string;
  title: string;
  date: string;
  duration: number; // In minutes
  status: 'scheduled' | 'completed' | 'cancelled';
  summary?: string;
  founderNotes?: string;
  mentorNotes?: string;
  founderFeedback?: SessionFeedback;
}

export interface SessionFeedback {
  rating: number; // 1-5
  comments?: string;
  areasOfImprovement?: string;
  willRecommend?: boolean;
}

// Enhanced user preferences for matching algorithm
export interface UserPreferences {
  skillsNeeded: string[];
  goals: string[];
  availability: string[];
  industries: string[];
  startupStage?: string;
  preferredLanguages?: string[];
  preferredMentorshipStyle?: string[];
  locationPreference?: 'local' | 'remote' | 'any';
  sessionFrequency?: 'weekly' | 'biweekly' | 'monthly';
  budgetRange?: {
    min: number;
    max: number;
  };
}

// New interfaces for booking system
export interface AvailabilitySlot {
  id: string;
  mentorId: string;
  date: string;
  startTime: string;
  endTime: string;
  isBooked: boolean;
  sessionId?: string;
  recurrence?: 'once' | 'weekly' | 'biweekly' | 'monthly';
}

export interface Booking {
  id: string;
  slotId: string;
  mentorId: string;
  founderId: string;
  startupId?: string;
  date: string;
  startTime: string;
  endTime: string;
  status: 'confirmed' | 'cancelled' | 'rescheduled' | 'completed';
  topic?: string;
  notes?: string;
  meetingLink?: string;
  meetingType: 'video' | 'audio' | 'in-person';
  createdAt: string;
  updatedAt: string;
}
