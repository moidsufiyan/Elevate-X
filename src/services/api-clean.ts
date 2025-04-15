
import { toast } from "sonner";

// Base URL for API requests - update this with your production API URL
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? "https://api.elevatex.com/v1" 
  : "https://api-staging.elevatex.com/v1";

// Types
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

// Startup interface
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

// Error handling
const handleApiError = (error: unknown, fallbackMessage: string) => {
  if (error instanceof Error) {
    console.error(`API Error: ${error.message}`);
    toast.error(error.message);
  } else {
    console.error(`API Error: ${fallbackMessage}`);
    toast.error(fallbackMessage);
  }
  throw error;
};

// API functions

// Fetch all mentors
export const fetchMentors = async (): Promise<Mentor[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/mentors`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch mentors: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    // In production, return empty array instead of mock data
    console.error("Error fetching mentors:", error);
    
    if (process.env.NODE_ENV === 'development') {
      console.log("Development mode: Would connect to API in production");
    }
    
    // Return empty array to indicate no data is available yet
    return [];
  }
};

// Fetch a single mentor by ID
export const fetchMentorById = async (id: string): Promise<Mentor> => {
  try {
    const response = await fetch(`${API_BASE_URL}/mentors/${id}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch mentor: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    handleApiError(error, `Failed to fetch mentor with ID: ${id}`);
    
    // Return a minimal placeholder mentor object in development
    if (process.env.NODE_ENV === 'development') {
      return {
        id,
        name: "Mentor information unavailable",
        role: "Unknown",
        company: "Unknown",
        expertise: [],
        image: "https://via.placeholder.com/150?text=Mentor",
        available: false
      };
    }
    
    throw error;
  }
};

// Fetch all startups
export const fetchStartups = async (): Promise<Startup[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/startups`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch startups: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error fetching startups:", error);
    
    // In production, return empty array
    return [];
  }
};

// Create a booking
export interface BookingData {
  mentorId: string;
  userId: string;
  date: string;
  timeSlot: string;
  meetingMode: string;
  topic?: string;
}

export const createBooking = async (bookingData: BookingData): Promise<{ success: boolean; id: string }> => {
  try {
    const response = await fetch(`${API_BASE_URL}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
      },
      body: JSON.stringify(bookingData)
    });
    
    if (!response.ok) {
      throw new Error(`Failed to create booking: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    handleApiError(error, "Failed to create booking. Please try again later.");
    throw error;
  }
};

// Get available slots for a mentor
export interface AvailabilitySlot {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  isBooked: boolean;
}

export const fetchMentorAvailability = async (mentorId: string, month: number, year: number): Promise<AvailabilitySlot[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/mentors/${mentorId}/availability?month=${month}&year=${year}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch mentor availability: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error fetching mentor availability:", error);
    return [];
  }
};

// User-related API calls
export const fetchUserProfile = async (userId: string): Promise<any> => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
      }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch user profile: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    handleApiError(error, "Failed to load user profile. Please try again later.");
    throw error;
  }
};
