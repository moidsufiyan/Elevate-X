// Static home page data for frontend-only app

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface Statistic {
  label: string;
  value: string;
  description: string;
  icon: string;
}

export interface SuccessStory {
  id: string;
  startupName: string;
  mentorName: string;
  outcome: string;
  description: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Jessica Wang",
    role: "CEO & Founder",
    company: "TechFlow",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    content:
      "Elevate-X connected me with an incredible mentor who helped me navigate the challenges of scaling my SaaS startup. The personalized guidance was invaluable in securing our Series A funding.",
    rating: 5,
  },
  {
    id: "2",
    name: "Marcus Johnson",
    role: "Co-founder",
    company: "GreenTech Solutions",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content:
      "The mentor matching system is phenomenal. I was paired with someone who had direct experience in my industry and stage. Their insights helped us avoid costly mistakes and accelerate growth.",
    rating: 5,
  },
  {
    id: "3",
    name: "Sarah Kim",
    role: "Founder",
    company: "HealthTech Innovations",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content:
      "As a first-time founder, I was overwhelmed by all the decisions I had to make. My mentor provided clear guidance and actionable advice that helped me focus on what really matters.",
    rating: 5,
  },
  {
    id: "4",
    name: "David Chen",
    role: "CEO",
    company: "FinTech Pro",
    avatar:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face",
    content:
      "The quality of mentors on Elevate-X is exceptional. I've had sessions with industry veterans who provided insights I couldn't find anywhere else. It's like having a personal board of advisors.",
    rating: 5,
  },
  {
    id: "5",
    name: "Emily Rodriguez",
    role: "Founder & CTO",
    company: "AI Dynamics",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
    content:
      "The community aspect of Elevate-X is amazing. Not only did I find great mentors, but I also connected with other founders facing similar challenges. The peer support has been invaluable.",
    rating: 5,
  },
];

export const statistics: Statistic[] = [
  {
    label: "Active Mentors",
    value: "500+",
    description: "Industry experts ready to guide your journey",
    icon: "users",
  },
  {
    label: "Startups Helped",
    value: "1,200+",
    description: "Companies that have accelerated their growth",
    icon: "rocket",
  },
  {
    label: "Success Rate",
    value: "87%",
    description: "Of mentees achieve their goals within 6 months",
    icon: "trending-up",
  },
  {
    label: "Countries",
    value: "25+",
    description: "Global network of entrepreneurs and mentors",
    icon: "globe",
  },
  {
    label: "Mentoring Hours",
    value: "10,000+",
    description: "One-on-one guidance sessions completed",
    icon: "clock",
  },
  {
    label: "Funding Raised",
    value: "$50M+",
    description: "Total capital raised by our portfolio companies",
    icon: "dollar-sign",
  },
];

export const successStories: SuccessStory[] = [
  {
    id: "1",
    startupName: "CloudSync",
    mentorName: "Sarah Chen",
    outcome: "Raised $2M Series A",
    description:
      "CloudSync's founder worked with Sarah to refine their go-to-market strategy and investor pitch, ultimately securing a successful Series A round.",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
  },
  {
    id: "2",
    startupName: "EcoDelivery",
    mentorName: "Michael Rodriguez",
    outcome: "Expanded to 5 cities",
    description:
      "With Michael's guidance on operations and scaling, EcoDelivery successfully expanded their sustainable delivery service to five major metropolitan areas.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  },
  {
    id: "3",
    startupName: "MedTech Solutions",
    mentorName: "Dr. Jennifer Park",
    outcome: "FDA Approval",
    description:
      "Dr. Park's expertise in regulatory affairs helped MedTech Solutions navigate the complex FDA approval process for their innovative medical device.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
  },
];

export const features = [
  {
    id: "1",
    title: "Expert Mentor Matching",
    description:
      "Get matched with industry veterans who have been in your shoes and can provide personalized guidance.",
    icon: "users",
    benefits: [
      "AI-powered matching algorithm",
      "Industry-specific expertise",
      "Personalized recommendations",
      "Continuous mentor support",
    ],
  },
  {
    id: "2",
    title: "Structured Learning Paths",
    description:
      "Follow proven frameworks and methodologies to accelerate your startup's growth and success.",
    icon: "book-open",
    benefits: [
      "Step-by-step guidance",
      "Milestone tracking",
      "Resource library access",
      "Progress monitoring",
    ],
  },
  {
    id: "3",
    title: "Vibrant Community",
    description:
      "Connect with like-minded entrepreneurs, share experiences, and learn from each other's journeys.",
    icon: "message-circle",
    benefits: [
      "Peer networking events",
      "Discussion forums",
      "Knowledge sharing",
      "Collaborative learning",
    ],
  },
];

export const platformBenefits = [
  {
    title: "For Founders",
    description:
      "Access experienced mentors, proven frameworks, and a supportive community to accelerate your startup journey.",
    benefits: [
      "1-on-1 mentoring sessions",
      "Industry-specific guidance",
      "Investor introductions",
      "Product development support",
      "Go-to-market strategies",
    ],
    cta: "Find Your Mentor",
  },
  {
    title: "For Mentors",
    description:
      "Share your expertise, give back to the community, and help shape the next generation of successful startups.",
    benefits: [
      "Flexible scheduling",
      "Choose your mentees",
      "Earn supplemental income",
      "Build your personal brand",
      "Access to exclusive events",
    ],
    cta: "Become a Mentor",
  },
];
