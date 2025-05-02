
// Moving the API service to the backend directory
import { Mentor as MentorModel, Startup as StartupModel } from '../../shared/types/models';

// Define API response types
export interface ApiMentor {
  id: string;
  name: string;
  role: string;
  expertise?: string[];
  company: string;
  bio?: string;
  image?: string;
  rating?: number;
  reviewCount?: number;
  sessions?: number;
  availableTimes?: string;
  badges?: { label: string }[];
}

export interface ApiStartup {
  id: string;
  name: string;
  logo?: string;
  industry: string;
  location: string;
  fundingStage: string;
  shortPitch?: string;
}

// Mock data for mentors
const mentors: ApiMentor[] = [
  {
    id: "1",
    name: "Rajiv Kumar",
    role: "Startup Advisor",
    expertise: ["Business Development", "Product Strategy", "Venture Capital"],
    company: "Nexus Ventures",
    bio: "Experienced startup advisor with 15+ years in the tech industry",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 4.9,
    reviewCount: 124,
    sessions: 210,
    availableTimes: "Monday, Wednesday, Friday",
    badges: [{ label: "Featured" }]
  },
  {
    id: "2",
    name: "Priya Sharma",
    role: "Tech Entrepreneur",
    expertise: ["AI/ML", "SaaS", "Growth Strategy"],
    company: "TechSprint Solutions",
    bio: "Serial entrepreneur with 3 successful exits in the SaaS space",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 4.8,
    reviewCount: 98,
    sessions: 165,
    availableTimes: "Tuesday, Thursday, Saturday",
    badges: [{ label: "Featured" }]
  },
  // More generic Indian mentors would be added here
];

// Mock data for startups
const startups: ApiStartup[] = [
  {
    id: "1",
    name: "EcoTech Solutions",
    shortPitch: "Sustainable technology for smart waste management",
    industry: "CleanTech",
    fundingStage: "Seed",
    location: "Bangalore, India",
    logo: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    name: "HealthFirst AI",
    shortPitch: "AI-driven healthcare diagnostics platform",
    industry: "HealthTech",
    fundingStage: "Series A",
    location: "Delhi, India",
    logo: "https://via.placeholder.com/150",
  },
  // More generic Indian startups would be added here
];

// Fetch all mentors
export const fetchMentors = async (): Promise<ApiMentor[]> => {
  // In a real app, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mentors);
    }, 500);
  });
};

// Fetch a mentor by ID
export const fetchMentorById = async (id: string): Promise<ApiMentor | undefined> => {
  // In a real app, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mentors.find(mentor => mentor.id === id));
    }, 500);
  });
};

// Fetch all startups
export const fetchStartups = async (): Promise<ApiStartup[]> => {
  // In a real app, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(startups);
    }, 500);
  });
};
