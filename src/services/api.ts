
// API service for data fetching

// Base URL for API requests - replace with your actual API URL when ready
const API_BASE_URL = "https://jsonplaceholder.typicode.com"; // Using a placeholder API for now

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

// Mock data (will be removed when connecting to real API)
const mentorsData: Mentor[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechVentures",
    expertise: ["SaaS", "Leadership", "Funding"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    available: true,
    tags: ["Marketing Expert", "Tech Founder"],
    badges: [{ label: "Top Mentor", variant: "default" }],
    rating: 4.9,
    reviewCount: 128,
    availableTimes: "Mon, Wed, Fri",
    bio: "15+ years experience in digital marketing with a focus on SaaS and B2B businesses. Previously led marketing at two successful startups that reached IPO."
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "CTO",
    company: "InnovateLabs",
    expertise: ["AI", "Machine Learning", "Product Strategy"],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    available: false,
    tags: ["AI Expert", "Product Specialist"],
    rating: 4.8,
    reviewCount: 95,
    availableTimes: "Tue, Thu, Sat",
    bio: "Former CTO of multiple startups and enterprise companies. Specialized in helping early-stage founders build scalable technical foundations."
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    role: "Venture Partner",
    company: "Summit Capital",
    expertise: ["Investment", "Scaling", "Market Analysis"],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    available: true,
    tags: ["Angel Investor", "Growth Strategy"],
    badges: [{ label: "Featured", variant: "secondary" }],
    rating: 4.7,
    reviewCount: 87,
    availableTimes: "Available next week",
    bio: "Investment banker turned startup advisor. Helped companies raise over $50M in funding across seed to Series B rounds."
  },
  {
    id: "4",
    name: "David Park",
    role: "Marketing Director",
    company: "Growth Accelerator",
    expertise: ["Growth Marketing", "Brand Strategy", "Digital Ads"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    available: true,
    tags: ["Marketing Expert", "Growth Hacker"],
    rating: 4.9,
    reviewCount: 112, 
    availableTimes: "Daily, 2-6 PM",
    bio: "Operations leader who specializes in helping startups scale efficiently. Expert in building systems that grow with your business."
  },
  {
    id: "5",
    name: "Priya Sharma",
    role: "UX/UI Design Mentor",
    company: "DesignFirst Studio",
    expertise: ["User Experience", "Product Design", "Design Systems"],
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    rating: 4.8,
    reviewCount: 75,
    available: true,
    availableTimes: "Mon-Thu, Afternoons",
    tags: ["UX Expert", "Design Specialist"],
    bio: "Award-winning designer with experience at top tech companies. Specializes in helping startups create intuitive user experiences that drive growth."
  },
  {
    id: "6",
    name: "James Wilson",
    role: "Sales Strategy Coach",
    company: "Revenue Architects",
    expertise: ["B2B Sales", "Sales Process", "Revenue Operations"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    rating: 4.7,
    reviewCount: 91,
    available: false,
    availableTimes: "Available next week",
    tags: ["Sales Expert", "Revenue Growth"],
    bio: "Sales leader who has built and scaled teams from 0 to $100M ARR. Expert in designing scalable sales processes for B2B startups."
  },
  {
    id: "7",
    name: "Ananya Mehta",
    role: "Product Manager",
    company: "InnoTech Solutions",
    expertise: ["Product Strategy", "User Research", "Agile Methodologies"],
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    available: true,
    tags: ["Product Expert", "Tech Enthusiast"],
    badges: [{ label: "Rising Star", variant: "secondary" }],
    rating: 4.8,
    reviewCount: 63,
    availableTimes: "Weekday evenings",
    bio: "Product manager with experience in building consumer and enterprise products. Passionate about creating solutions that solve real user problems."
  },
  {
    id: "8",
    name: "Rahul Verma",
    role: "Growth Consultant",
    company: "Scale Metrics",
    expertise: ["Growth Hacking", "Analytics", "Customer Acquisition"],
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    available: true,
    tags: ["Data-Driven", "Growth Specialist"],
    badges: [{ label: "Analytics Whiz", variant: "default" }],
    rating: 4.7,
    reviewCount: 89,
    availableTimes: "Flexible hours",
    bio: "Helped 50+ startups optimize their customer acquisition strategies. Specializes in data-driven approaches to sustainable growth."
  },
  {
    id: "9",
    name: "Divya Kapoor",
    role: "Finance Advisor",
    company: "Venture Matrix",
    expertise: ["Startup Finance", "Fundraising", "Valuation"],
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    available: true,
    tags: ["Finance Expert", "Investment Advisor"],
    badges: [{ label: "Funding Pro", variant: "outline" }],
    rating: 4.9,
    reviewCount: 104,
    availableTimes: "By appointment",
    bio: "Former investment banker who now helps startups navigate fundraising and financial planning. Has advised on deals worth over $200M collectively."
  },
  {
    id: "10",
    name: "Arjun Nair",
    role: "Tech Lead",
    company: "CloudStack Technologies",
    expertise: ["Cloud Architecture", "DevOps", "Scalable Systems"],
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    available: false,
    tags: ["Tech Architect", "Cloud Expert"],
    badges: [{ label: "Infrastructure Guru", variant: "default" }],
    rating: 4.8,
    reviewCount: 71,
    availableTimes: "Weekends only",
    bio: "Experienced in building scalable cloud infrastructures for startups and enterprises. Specializes in AWS and DevOps best practices."
  },
  {
    id: "11",
    name: "Neha Sharma",
    role: "Marketing Strategist",
    company: "Digital Bloom",
    expertise: ["Digital Marketing", "Content Strategy", "SEO"],
    image: "https://images.unsplash.com/photo-1567532900872-f4e99432c8ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    available: true,
    tags: ["Digital Marketer", "Content Creator"],
    badges: [{ label: "SEO Master", variant: "secondary" }],
    rating: 4.6,
    reviewCount: 82,
    availableTimes: "Mondays and Wednesdays",
    bio: "Specializes in helping tech startups build their online presence through strategic content marketing and SEO optimization."
  },
  {
    id: "12",
    name: "Vikram Singh",
    role: "Business Development",
    company: "Nexus Partnerships",
    expertise: ["Strategic Partnerships", "Sales", "Market Expansion"],
    image: "https://images.unsplash.com/photo-1563452965085-2e77e5bf2669?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    available: true,
    tags: ["BD Expert", "Sales Strategist"],
    badges: [{ label: "Partnership Pro", variant: "default" }],
    rating: 4.7,
    reviewCount: 95,
    availableTimes: "Tuesday through Friday",
    bio: "Expert in building strategic partnerships that accelerate growth. Has helped startups expand into new markets and secure key business relationships."
  }
];

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

// Mock data for startups
export const startupsData: Startup[] = [
  {
    id: "1",
    name: "EcoHarvest",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    industry: "AgTech",
    location: "California, USA",
    fundingStage: "Seed",
    shortPitch: "Sustainable farming solutions using IoT and AI to optimize crop yields while reducing environmental impact.",
    interestedCount: 24,
    tags: ["Sustainability", "AgTech", "IoT"],
  },
  {
    id: "4",
    name: "UrbanMobility",
    logo: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    industry: "Transportation",
    location: "Berlin, Germany",
    fundingStage: "Series B",
    shortPitch: "Electric micromobility solutions for urban environments to reduce congestion and emissions.",
    interestedCount: 52,
    tags: ["Transportation", "Electric", "Sustainable"],
  },
  {
    id: "2",
    name: "MindfulAI",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    industry: "HealthTech",
    location: "Boston, USA",
    fundingStage: "Series A",
    shortPitch: "Mental health platform using AI to provide personalized therapy and wellness recommendations.",
    interestedCount: 41,
    tags: ["Mental Health", "AI", "Healthcare"],
  },
  {
    id: "3",
    name: "QuantumEdge",
    logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    industry: "Quantum Computing",
    location: "Toronto, Canada",
    fundingStage: "Pre-seed",
    shortPitch: "Making quantum computing accessible to businesses through user-friendly APIs and development tools.",
    interestedCount: 18,
    tags: ["Quantum", "API", "Developer Tools"],
  },
  {
    id: "5",
    name: "NutriScan",
    logo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    industry: "FoodTech",
    location: "Singapore",
    fundingStage: "Seed",
    shortPitch: "Portable device that scans food items to detect allergens, nutritional content, and food safety issues.",
    interestedCount: 37,
    tags: ["FoodTech", "Hardware", "Health"],
  },
];

// API functions

// Fetch all mentors
export const fetchMentors = async (): Promise<Mentor[]> => {
  // In a real app, this would be an API call:
  // const response = await fetch(`${API_BASE_URL}/mentors`);
  // if (!response.ok) throw new Error('Failed to fetch mentors');
  // return response.json();
  
  // For now, return mock data
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      resolve(mentorsData);
    }, 800);
  });
};

// Fetch a single mentor by ID
export const fetchMentorById = async (id: string): Promise<Mentor> => {
  // In a real app:
  // const response = await fetch(`${API_BASE_URL}/mentors/${id}`);
  // if (!response.ok) throw new Error('Failed to fetch mentor');
  // return response.json();
  
  // For now, use mock data
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const mentor = mentorsData.find(m => m.id === id);
      if (mentor) {
        resolve(mentor);
      } else {
        reject(new Error('Mentor not found'));
      }
    }, 600);
  });
};

// Fetch all startups
export const fetchStartups = async (): Promise<Startup[]> => {
  // In a real app:
  // const response = await fetch(`${API_BASE_URL}/startups`);
  // if (!response.ok) throw new Error('Failed to fetch startups');
  // return response.json();
  
  // For now, return mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(startupsData);
    }, 800);
  });
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
  // In a real app:
  // const response = await fetch(`${API_BASE_URL}/bookings`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(bookingData)
  // });
  // if (!response.ok) throw new Error('Failed to create booking');
  // return response.json();
  
  // For now, simulate a successful booking creation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        id: `booking-${Date.now()}`
      });
    }, 1000);
  });
};
