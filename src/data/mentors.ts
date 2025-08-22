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
}

export const mentors: Mentor[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Senior Product Manager",
    company: "TechCorp",
    expertise: ["Product Strategy", "User Experience", "Team Leadership"],
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    available: true,
    bio: "Experienced product manager with 8+ years in tech startups and Fortune 500 companies.",
    rating: 4.9,
    sessions: 127,
    tags: ["Product", "UX", "Leadership"],
    badges: [
      { label: "Top Rated", variant: "default" },
      { label: "Expert", variant: "secondary" }
    ],
    reviewCount: 89,
    availableTimes: "Weekdays 9AM-5PM PST"
  },
  {
    id: "2",
    name: "Marcus Johnson",
    role: "Startup Founder & CEO",
    company: "InnovateLab",
    expertise: ["Entrepreneurship", "Fundraising", "Business Strategy"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    available: true,
    bio: "Serial entrepreneur with 3 successful exits. Expert in scaling startups from idea to IPO.",
    rating: 4.8,
    sessions: 203,
    tags: ["Startup", "Fundraising", "Strategy"],
    badges: [
      { label: "Entrepreneur", variant: "default" },
      { label: "Investor", variant: "outline" }
    ],
    reviewCount: 156,
    availableTimes: "Flexible schedule"
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    role: "Head of Engineering",
    company: "CloudTech Solutions",
    expertise: ["Software Engineering", "System Architecture", "Technical Leadership"],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    available: true,
    bio: "Engineering leader with expertise in cloud infrastructure and distributed systems.",
    rating: 4.9,
    sessions: 94,
    tags: ["Engineering", "Architecture", "Cloud"],
    badges: [
      { label: "Technical Expert", variant: "secondary" }
    ],
    reviewCount: 72,
    availableTimes: "Evenings 6PM-9PM EST"
  },
  {
    id: "4",
    name: "Alex Thompson",
    role: "Marketing Director",
    company: "GrowthHive",
    expertise: ["Digital Marketing", "Growth Hacking", "Brand Strategy"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    available: false,
    bio: "Growth marketing expert who has helped 50+ startups achieve sustainable growth.",
    rating: 4.7,
    sessions: 178,
    tags: ["Marketing", "Growth", "Branding"],
    badges: [
      { label: "Growth Expert", variant: "default" }
    ],
    reviewCount: 134,
    availableTimes: "Currently unavailable"
  },
  {
    id: "5",
    name: "Lisa Wang",
    role: "VP of Sales",
    company: "SalesForce Pro",
    expertise: ["Sales Strategy", "Team Building", "Customer Success"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    available: true,
    bio: "Sales leader with proven track record of building and scaling sales teams.",
    rating: 4.8,
    sessions: 112,
    tags: ["Sales", "Leadership", "Customer Success"],
    badges: [
      { label: "Sales Expert", variant: "default" },
      { label: "Team Builder", variant: "secondary" }
    ],
    reviewCount: 87,
    availableTimes: "Mon-Fri 10AM-4PM CST"
  }
];

export const getMentorById = (id: string): Mentor | undefined => {
  return mentors.find(mentor => mentor.id === id);
};

export const getAvailableMentors = (): Mentor[] => {
  return mentors.filter(mentor => mentor.available);
};