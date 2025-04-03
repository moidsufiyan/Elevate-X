
// Moving the API service to the backend directory
import { Mentor, Startup } from '../../shared/types/models';

// Mock data for mentors
const mentors: Mentor[] = [
  {
    id: "1",
    name: "Rajiv Kumar",
    role: "Startup Advisor",
    expertise: ["Business Development", "Product Strategy", "Venture Capital"],
    company: "Nexus Ventures",
    bio: "Experienced startup advisor with 15+ years in the tech industry",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 4.9,
    reviews: 124,
    sessions: 210,
    availability: ["Monday", "Wednesday", "Friday"],
    hourlyRate: 150,
    featured: true
  },
  {
    id: "2",
    name: "Priya Sharma",
    role: "Tech Entrepreneur",
    expertise: ["AI/ML", "SaaS", "Growth Strategy"],
    company: "TechSprint Solutions",
    bio: "Serial entrepreneur with 3 successful exits in the SaaS space",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 4.8,
    reviews: 98,
    sessions: 165,
    availability: ["Tuesday", "Thursday", "Saturday"],
    hourlyRate: 180,
    featured: true
  },
  // More generic Indian mentors would be added here
];

// Mock data for startups
const startups: Startup[] = [
  {
    id: "1",
    name: "EcoTech Solutions",
    description: "Sustainable technology for smart waste management",
    industry: "CleanTech",
    stage: "Seed",
    foundingYear: 2021,
    logo: "https://via.placeholder.com/150",
    founders: [
      {
        name: "Arjun Mehta",
        role: "CEO",
        avatar: "https://randomuser.me/api/portraits/men/11.jpg"
      },
      {
        name: "Sanya Joshi",
        role: "CTO",
        avatar: "https://randomuser.me/api/portraits/women/12.jpg"
      }
    ],
    location: "Bangalore, India",
    funding: "$500K",
    employees: 12,
    website: "https://ecotechsolutions.example.com",
    featured: true
  },
  {
    id: "2",
    name: "HealthFirst AI",
    description: "AI-driven healthcare diagnostics platform",
    industry: "HealthTech",
    stage: "Series A",
    foundingYear: 2019,
    logo: "https://via.placeholder.com/150",
    founders: [
      {
        name: "Vikram Singh",
        role: "CEO",
        avatar: "https://randomuser.me/api/portraits/men/13.jpg"
      },
      {
        name: "Divya Patel",
        role: "COO",
        avatar: "https://randomuser.me/api/portraits/women/14.jpg"
      }
    ],
    location: "Delhi, India",
    funding: "$2.5M",
    employees: 28,
    website: "https://healthfirstai.example.com",
    featured: true
  },
  // More generic Indian startups would be added here
];

// Fetch all mentors
export const fetchMentors = async (): Promise<Mentor[]> => {
  // In a real app, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mentors);
    }, 500);
  });
};

// Fetch a mentor by ID
export const fetchMentorById = async (id: string): Promise<Mentor | undefined> => {
  // In a real app, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mentors.find(mentor => mentor.id === id));
    }, 500);
  });
};

// Fetch all startups
export const fetchStartups = async (): Promise<Startup[]> => {
  // In a real app, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(startups);
    }, 500);
  });
};
