
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

// Mock data for mentors with Indian names and companies
const mentors: ApiMentor[] = [
  {
    id: "1",
    name: "Rajiv Kumar",
    role: "Startup Advisor",
    expertise: ["Business Development", "Product Strategy", "Venture Capital"],
    company: "Nexus Ventures",
    bio: "Experienced startup advisor with 15+ years in the tech industry across Bangalore and Mumbai. Previously led growth at TechMahindra and advised over 50 startups.",
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
    bio: "Serial entrepreneur with 3 successful exits in the SaaS space. IIT Delhi alumna and passionate about helping first-time founders navigate the Indian startup ecosystem.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 4.8,
    reviewCount: 98,
    sessions: 165,
    availableTimes: "Tuesday, Thursday, Saturday",
    badges: [{ label: "Featured" }]
  },
  {
    id: "3",
    name: "Vikram Mehta",
    role: "Product Manager",
    expertise: ["Product Development", "UX Research", "Market Analysis"],
    company: "Flipkart",
    bio: "Product leader with experience at Flipkart, Paytm, and early-stage startups. Specializes in consumer tech for the Indian market and frugal innovation approaches.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 4.7,
    reviewCount: 87,
    sessions: 120,
    availableTimes: "Monday, Tuesday, Friday",
    badges: []
  },
  {
    id: "4",
    name: "Ananya Patel",
    role: "Growth Marketer",
    expertise: ["Digital Marketing", "GTM Strategy", "Content Marketing"],
    company: "Zomato",
    bio: "Growth specialist who helped scale Zomato across 100+ Indian cities. Expert in localization strategy and building community in tier 2/3 Indian markets.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    rating: 4.6,
    reviewCount: 65,
    sessions: 95,
    availableTimes: "Wednesday, Thursday, Friday",
    badges: []
  },
  {
    id: "5",
    name: "Arjun Reddy",
    role: "Angel Investor",
    expertise: ["Seed Funding", "Pitch Coaching", "Financial Modeling"],
    company: "Blume Ventures",
    bio: "Angel investor with portfolio of 30+ Indian startups. Previously founded and exited an edtech startup. Passionate about democratizing education across India.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    rating: 4.9,
    reviewCount: 110,
    sessions: 180,
    availableTimes: "Monday, Wednesday, Saturday",
    badges: [{ label: "Featured" }]
  },
  {
    id: "6",
    name: "Kavita Iyer",
    role: "Legal Advisor",
    expertise: ["IP Law", "Startup Compliance", "Fundraising"],
    company: "LegalEdge Consultants",
    bio: "Specialized in Indian startup law, DPIIT compliance, and fundraising legalities. Has helped 100+ startups navigate the evolving regulatory landscape in India.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    rating: 4.7,
    reviewCount: 72,
    sessions: 105,
    availableTimes: "Tuesday, Thursday",
    badges: []
  }
];

// Mock data for Indian startups
const startups: ApiStartup[] = [
  {
    id: "1",
    name: "EcoTech Solutions",
    shortPitch: "Sustainable technology for smart waste management in urban India",
    industry: "CleanTech",
    fundingStage: "Seed",
    location: "Bangalore, India",
    logo: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    name: "HealthFirst AI",
    shortPitch: "AI-driven healthcare diagnostics platform for rural India",
    industry: "HealthTech",
    fundingStage: "Series A",
    location: "Delhi, India",
    logo: "https://via.placeholder.com/150",
  },
  {
    id: "3",
    name: "KisanVaani",
    shortPitch: "Connecting farmers directly to markets through local language voice AI",
    industry: "AgriTech",
    fundingStage: "Pre-seed",
    location: "Pune, India",
    logo: "https://via.placeholder.com/150",
  },
  {
    id: "4",
    name: "RuPay Lending",
    shortPitch: "Microfinance platform for small businesses in tier 2/3 Indian cities",
    industry: "FinTech",
    fundingStage: "Seed",
    location: "Mumbai, India",
    logo: "https://via.placeholder.com/150",
  },
  {
    id: "5",
    name: "EdVersa",
    shortPitch: "Vernacular education platform teaching coding to children in 8 Indian languages",
    industry: "EdTech",
    fundingStage: "Series A",
    location: "Hyderabad, India",
    logo: "https://via.placeholder.com/150",
  },
  {
    id: "6",
    name: "LogiTech Express",
    shortPitch: "Last-mile delivery optimization for e-commerce in complex Indian urban environments",
    industry: "LogisticsTech",
    fundingStage: "Seed",
    location: "Chennai, India",
    logo: "https://via.placeholder.com/150",
  },
  {
    id: "7",
    name: "VyaparSathi",
    shortPitch: "Digital bookkeeping and GST compliance app for small Indian businesses",
    industry: "FinTech",
    fundingStage: "Series B",
    location: "Ahmedabad, India",
    logo: "https://via.placeholder.com/150",
  },
  {
    id: "8",
    name: "Dhaba Delivery",
    shortPitch: "Platform connecting highway eateries with travelers for authentic Indian food",
    industry: "FoodTech",
    fundingStage: "Pre-seed",
    location: "Jaipur, India",
    logo: "https://via.placeholder.com/150",
  }
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
