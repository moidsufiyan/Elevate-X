
// API service for data fetching
import { toast } from "sonner";
import { Mentor as MentorModel, Startup as StartupModel } from "@/shared/types/models";

// Base URL for API requests - update this with your production API URL
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? "https://api.elevatex.com/v1" 
  : "https://api-staging.elevatex.com/v1";

// API Types that match the incoming data format
export interface ApiMentor {
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

// API Startup interface
export interface ApiStartup {
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

// Error handling with proper user feedback
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
export const fetchMentors = async (): Promise<ApiMentor[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/mentors`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch mentors: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error fetching mentors:", error);
    
    // Return empty array for empty state handling
    return [];
  }
};

// Fetch a single mentor by ID
export const fetchMentorById = async (id: string): Promise<ApiMentor | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/mentors/${id}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch mentor: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    handleApiError(error, `Failed to fetch mentor with ID: ${id}`);
    return null;
  }
};

// Fetch all startups
export const fetchStartups = async (): Promise<ApiStartup[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/startups`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch startups: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error fetching startups:", error);
    
    // Return empty array for empty state handling
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

// Authentication API functions
interface AuthCredentials {
  email: string;
  password: string;
}

interface SignupData extends AuthCredentials {
  name: string;
  accountType: 'founder' | 'mentor' | 'investor';
}

interface AuthResponse {
  user: any;
  token: string;
  success: boolean;
  message?: string;
}

export const loginUser = async (credentials: AuthCredentials): Promise<AuthResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `Login failed: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    
    // Store auth token in localStorage
    if (data.token) {
      localStorage.setItem('auth_token', data.token);
    }
    
    return data;
  } catch (error) {
    handleApiError(error, "Login failed. Please check your credentials and try again.");
    throw error;
  }
};

export const signupUser = async (userData: SignupData): Promise<AuthResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `Signup failed: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    
    // Store auth token in localStorage
    if (data.token) {
      localStorage.setItem('auth_token', data.token);
    }
    
    return data;
  } catch (error) {
    handleApiError(error, "Signup failed. Please try again later.");
    throw error;
  }
};

export const logoutUser = (): void => {
  localStorage.removeItem('auth_token');
  // Redirect to home or login page if needed
  window.location.href = '/';
};

export const checkAuth = (): boolean => {
  return !!localStorage.getItem('auth_token');
};

export const getCurrentUser = async (): Promise<any | null> => {
  try {
    const token = localStorage.getItem('auth_token');
    if (!token) return null;
    
    const response = await fetch(`${API_BASE_URL}/auth/me`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    
    if (!response.ok) {
      if (response.status === 401) {
        // Token expired or invalid
        localStorage.removeItem('auth_token');
        return null;
      }
      throw new Error(`Failed to fetch current user: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error fetching current user:", error);
    return null;
  }
};
