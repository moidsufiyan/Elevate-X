// Static mentor data for frontend-only app
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
  hourlyRate?: number;
  location?: string;
  experience?: number;
  industries?: string[];
  languages?: string[];
  specialties?: string[];
  achievements?: string[];
  education?: {
    degree: string;
    school: string;
    year: string;
  }[];
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  successStories?: {
    startup: string;
    description: string;
  }[];
}

export const mentors: Mentor[] = [
  {
    id: "1",
    name: "Dr. Priya Sharma",
    role: "Founder & CEO",
    company: "HealthTech Innovations",
    expertise: ["Healthcare Technology", "Product Strategy", "Team Leadership"],
    image:
      "https://images.unsplash.com/photo-1594824388853-2c5e95564b2a?w=400&h=400&fit=crop&crop=face",
    available: true,
    bio: "Former McKinsey consultant with 12+ years of experience in healthcare technology and strategic consulting. Founded HealthTech Innovations in 2019, which has become India's leading AI-powered diagnostic platform serving over 2 million patients across 15 states.",
    rating: 4.9,
    sessions: 187,
    tags: ["HealthTech", "AI", "Leadership"],
    badges: [
      { label: "Top Rated", variant: "default" },
      { label: "Healthcare Expert", variant: "secondary" },
    ],
    reviewCount: 142,
    availableTimes: "Weekdays 10AM-6PM IST",
    location: "Bangalore, Karnataka",
    experience: 12,
    industries: ["Healthcare", "Technology", "AI/ML"],
    languages: ["English", "Hindi", "Kannada"],
    achievements: [
      "Built AI diagnostic platform serving 2M+ patients",
      "Featured in Forbes 30 Under 30 Healthcare",
      "Raised $15M in Series A funding",
      "Speaker at Global Health Innovation Summit",
    ],
    education: [
      {
        degree: "MD in Internal Medicine",
        school: "AIIMS Delhi",
        year: "2015",
      },
      {
        degree: "MBA",
        school: "IIM Bangalore",
        year: "2018",
      },
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/in/drpriyasharma",
      twitter: "https://twitter.com/drpriyasharma",
      website: "https://healthtechinnovations.in",
    },
    successStories: [
      {
        startup: "MedAssist",
        description:
          "Guided rural healthcare startup to achieve 300% growth in 18 months and secure Series A funding of ₹25 crores.",
      },
      {
        startup: "DiagnoAI",
        description:
          "Mentored AI-based diagnostic tool startup that now serves 500+ hospitals across India.",
      },
      {
        startup: "HealthBridge",
        description:
          "Helped telemedicine platform expand to 8 states and achieve 1M+ user registrations.",
      },
    ],
    specialties: [
      "Healthcare Technology Strategy",
      "AI/ML in Medical Diagnostics",
      "Regulatory Compliance in Healthcare",
      "Team Building & Leadership",
      "Fundraising for HealthTech",
    ],
  },
  {
    id: "2",
    name: "Arjun Mehta",
    role: "Serial Entrepreneur",
    company: "Mehta Ventures",
    expertise: ["Fintech", "Fundraising", "Business Strategy"],
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    available: true,
    bio: "Built and sold 3 fintech startups including India's largest P2P lending platform. Angel investor in 40+ startups with combined valuation of ₹2000+ crores.",
    rating: 4.8,
    sessions: 234,
    tags: ["Fintech", "Fundraising", "Angel Investing"],
    badges: [
      { label: "Serial Entrepreneur", variant: "default" },
      { label: "Angel Investor", variant: "outline" },
    ],
    reviewCount: 189,
    availableTimes: "Flexible schedule",
    location: "Mumbai, Maharashtra",
    experience: 15,
    industries: ["Fintech", "Banking", "Blockchain"],
    languages: ["English", "Hindi", "Gujarati"],
  },
  {
    id: "3",
    name: "Kavya Reddy",
    role: "CTO",
    company: "AgriTech Solutions",
    expertise: ["Agricultural Technology", "IoT", "Data Science"],
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    available: true,
    bio: "IIT Delhi alumna leading India's agricultural revolution through technology. Her IoT solutions help 50,000+ farmers increase crop yield by 35%.",
    rating: 4.9,
    sessions: 156,
    tags: ["AgriTech", "IoT", "Data Science"],
    badges: [
      { label: "Technical Expert", variant: "secondary" },
      { label: "AgriTech Pioneer", variant: "default" },
    ],
    reviewCount: 124,
    availableTimes: "Evenings 7PM-10PM IST",
    location: "Hyderabad, Telangana",
    experience: 10,
    industries: ["Agriculture", "IoT", "Data Analytics"],
    languages: ["English", "Telugu", "Hindi"],
  },
  {
    id: "4",
    name: "Rajesh Kumar",
    role: "Growth Marketing Head",
    company: "EduTech India",
    expertise: ["EdTech Marketing", "Growth Hacking", "Digital Strategy"],
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    available: true,
    bio: "Scaled India's largest online learning platform from 10K to 10M users. Expert in growth marketing for consumer tech products in Indian market.",
    rating: 4.7,
    sessions: 198,
    tags: ["EdTech", "Growth Marketing", "Consumer Tech"],
    badges: [
      { label: "Growth Expert", variant: "default" },
      { label: "EdTech Specialist", variant: "secondary" },
    ],
    reviewCount: 167,
    availableTimes: "Weekends & Evenings",
    location: "Delhi, NCR",
    experience: 8,
    industries: ["Education", "Consumer Tech", "Digital Marketing"],
    languages: ["English", "Hindi", "Punjabi"],
  },
  {
    id: "5",
    name: "Sneha Agarwal",
    role: "VP of Operations",
    company: "LogiTech Supply Chain",
    expertise: ["Supply Chain", "Operations", "E-commerce"],
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    available: true,
    bio: "Built supply chain operations for India's top e-commerce platforms. Expertise in scaling operations from startup to unicorn stage with focus on tier-2/3 cities.",
    rating: 4.8,
    sessions: 143,
    tags: ["Operations", "Supply Chain", "E-commerce"],
    badges: [
      { label: "Operations Expert", variant: "default" },
      { label: "E-commerce Specialist", variant: "secondary" },
    ],
    reviewCount: 118,
    availableTimes: "Mon-Fri 9AM-5PM IST",
    location: "Pune, Maharashtra",
    experience: 11,
    industries: ["E-commerce", "Logistics", "Supply Chain"],
    languages: ["English", "Hindi", "Marathi"],
  },
  {
    id: "6",
    name: "Vikram Singh",
    role: "Venture Partner",
    company: "India Growth Fund",
    expertise: ["Venture Capital", "Due Diligence", "Startup Scaling"],
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face",
    available: true,
    bio: "Former investment banker turned VC. Led investments in 25+ Indian startups including 3 unicorns. Deep expertise in SaaS, fintech, and consumer internet.",
    rating: 4.9,
    sessions: 89,
    tags: ["Venture Capital", "Investment", "Due Diligence"],
    badges: [
      { label: "VC Partner", variant: "default" },
      { label: "Unicorn Builder", variant: "outline" },
    ],
    reviewCount: 67,
    availableTimes: "By Appointment",
    location: "Bangalore, Karnataka",
    experience: 14,
    industries: ["Venture Capital", "SaaS", "Fintech"],
    languages: ["English", "Hindi"],
  },
];

export const getMentorById = (id: string): Mentor | undefined => {
  return mentors.find((mentor) => mentor.id === id);
};

export const getMentorsByExpertise = (expertise: string): Mentor[] => {
  return mentors.filter((mentor) =>
    mentor.expertise.some((skill) =>
      skill.toLowerCase().includes(expertise.toLowerCase())
    )
  );
};

export const getAvailableMentors = (): Mentor[] => {
  return mentors.filter((mentor) => mentor.available);
};
