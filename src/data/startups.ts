// Static startup data for frontend-only app
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

export const startups: Startup[] = [
  {
    id: "1",
    name: "EcoTech Solutions",
    logo: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=100&h=100&fit=crop",
    industry: "Clean Technology",
    location: "San Francisco, CA",
    fundingStage: "Series A",
    shortPitch: "Developing sustainable energy solutions for urban environments using AI and IoT.",
    interestedCount: 45,
    tags: ["CleanTech", "AI", "IoT", "Sustainability"]
  },
  {
    id: "2",
    name: "HealthAI",
    logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=100&h=100&fit=crop",
    industry: "Healthcare",
    location: "Boston, MA",
    fundingStage: "Seed",
    shortPitch: "AI-powered diagnostic tools to revolutionize early disease detection.",
    interestedCount: 72,
    tags: ["HealthTech", "AI", "Diagnostics", "Medical"]
  },
  {
    id: "3",
    name: "EduSpace",
    logo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=100&h=100&fit=crop",
    industry: "Education Technology",
    location: "Austin, TX",
    fundingStage: "Pre-Seed",
    shortPitch: "Virtual reality platform for immersive educational experiences.",
    interestedCount: 28,
    tags: ["EdTech", "VR", "Education", "Immersive"]
  },
  {
    id: "4",
    name: "FinFlow",
    logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=100&h=100&fit=crop",
    industry: "Financial Technology",
    location: "New York, NY",
    fundingStage: "Series B",
    shortPitch: "Next-generation payment processing for small businesses and freelancers.",
    interestedCount: 63,
    tags: ["FinTech", "Payments", "SMB", "API"]
  },
  {
    id: "5",
    name: "FoodieMatch",
    logo: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=100&h=100&fit=crop",
    industry: "Food & Beverage",
    location: "Los Angeles, CA",
    fundingStage: "Seed",
    shortPitch: "AI-powered meal planning and grocery delivery matching personal preferences.",
    interestedCount: 39,
    tags: ["FoodTech", "AI", "Delivery", "Personalization"]
  },
  {
    id: "6",
    name: "CyberShield",
    logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=100&h=100&fit=crop",
    industry: "Cybersecurity",
    location: "Seattle, WA",
    fundingStage: "Series A",
    shortPitch: "Advanced threat detection and response for enterprise security.",
    interestedCount: 51,
    tags: ["Cybersecurity", "Enterprise", "Threat Detection", "SaaS"]
  }
];

export const getStartupById = (id: string): Startup | undefined => {
  return startups.find(startup => startup.id === id);
};

export const getStartupsByIndustry = (industry: string): Startup[] => {
  return startups.filter(startup => 
    startup.industry.toLowerCase().includes(industry.toLowerCase())
  );
};