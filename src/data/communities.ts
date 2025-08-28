// Static community data for frontend-only app

export interface Discussion {
  id: string;
  title: string;
  content: string;
  author: {
    id: string;
    name: string;
    avatar: string;
    role: string;
    company?: string;
  };
  category: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  views: number;
  likes: number;
  replies: number;
  isPinned: boolean;
  isSolved: boolean;
}

export interface CommunityCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  discussionCount: number;
  color: string;
}

export interface Reply {
  id: string;
  discussionId: string;
  content: string;
  author: {
    id: string;
    name: string;
    avatar: string;
    role: string;
    company?: string;
  };
  createdAt: string;
  likes: number;
  isAccepted: boolean;
  parentReplyId?: string;
}

export const discussions: Discussion[] = [
  {
    id: "1",
    title: "How to validate your startup idea effectively?",
    content:
      "I have a SaaS idea that I think could work, but I'm not sure how to validate it properly before building anything. What are the best methods to test market demand without spending too much time or money?",
    author: {
      id: "user1",
      name: "Alex Chen",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      role: "Aspiring Founder",
      company: "Stealth Startup",
    },
    category: "Startup Basics",
    tags: ["validation", "market-research", "saas", "mvp"],
    createdAt: "2024-02-10T14:30:00Z",
    updatedAt: "2024-02-12T09:15:00Z",
    views: 245,
    likes: 18,
    replies: 12,
    isPinned: false,
    isSolved: true,
  },
  {
    id: "2",
    title: "Best practices for technical co-founder equity splits",
    content:
      "I'm a non-technical founder looking to bring on a technical co-founder. What's the standard equity split? How do I structure vesting schedules and what happens if someone leaves early?",
    author: {
      id: "user2",
      name: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      role: "Founder",
      company: "HealthTech Pro",
    },
    category: "Legal & Finance",
    tags: ["equity", "co-founder", "legal", "vesting"],
    createdAt: "2024-02-09T16:45:00Z",
    updatedAt: "2024-02-11T11:20:00Z",
    views: 189,
    likes: 25,
    replies: 8,
    isPinned: true,
    isSolved: false,
  },
  {
    id: "3",
    title: "Fundraising timeline: When to start and how long does it take?",
    content:
      "Currently bootstrapping my startup and wondering when I should start the fundraising process. How long does it typically take from start to close? Should I hire a consultant or do it myself?",
    author: {
      id: "user3",
      name: "Marcus Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face",
      role: "CEO",
      company: "GreenTech Solutions",
    },
    category: "Fundraising",
    tags: ["fundraising", "timeline", "venture-capital", "bootstrapping"],
    createdAt: "2024-02-08T13:20:00Z",
    updatedAt: "2024-02-10T15:30:00Z",
    views: 156,
    likes: 14,
    replies: 6,
    isPinned: false,
    isSolved: false,
  },
  {
    id: "4",
    title: "Product-market fit metrics: What should I track?",
    content:
      "My product is live and getting some traction, but I'm not sure if I've achieved product-market fit. What metrics should I be tracking? How do I know when I've really found it?",
    author: {
      id: "user4",
      name: "Emily Zhang",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      role: "Product Manager",
      company: "AI Innovations",
    },
    category: "Product Development",
    tags: ["product-market-fit", "metrics", "analytics", "growth"],
    createdAt: "2024-02-07T10:15:00Z",
    updatedAt: "2024-02-09T14:45:00Z",
    views: 203,
    likes: 31,
    replies: 15,
    isPinned: false,
    isSolved: true,
  },
  {
    id: "5",
    title: "Remote team management tools and best practices",
    content:
      "We've grown to 8 people all working remotely. What tools and practices do you recommend for managing a distributed team effectively? Struggling with communication and project coordination.",
    author: {
      id: "user5",
      name: "David Park",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      role: "Co-founder",
      company: "DevTools Inc",
    },
    category: "Team & Culture",
    tags: ["remote-work", "team-management", "tools", "communication"],
    createdAt: "2024-02-06T09:30:00Z",
    updatedAt: "2024-02-08T16:20:00Z",
    views: 178,
    likes: 22,
    replies: 11,
    isPinned: false,
    isSolved: false,
  },
  {
    id: "6",
    title: "Content marketing strategy for B2B SaaS",
    content:
      "Looking to build a content marketing strategy for our B2B SaaS product. What types of content work best? How do you measure ROI? Any recommendations for content creation tools?",
    author: {
      id: "user6",
      name: "Lisa Kim",
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
      role: "Marketing Lead",
      company: "CloudSync",
    },
    category: "Marketing & Growth",
    tags: ["content-marketing", "b2b", "saas", "roi"],
    createdAt: "2024-02-05T14:45:00Z",
    updatedAt: "2024-02-07T12:30:00Z",
    views: 134,
    likes: 16,
    replies: 7,
    isPinned: false,
    isSolved: false,
  },
];

export const categories: CommunityCategory[] = [
  {
    id: "all",
    name: "All Discussions",
    description: "Browse all community discussions",
    icon: "message-square",
    discussionCount: discussions.length,
    color: "blue",
  },
  {
    id: "startup-basics",
    name: "Startup Basics",
    description: "Fundamental questions about starting a business",
    icon: "lightbulb",
    discussionCount: discussions.filter((d) => d.category === "Startup Basics")
      .length,
    color: "green",
  },
  {
    id: "fundraising",
    name: "Fundraising",
    description: "Investment, funding rounds, and investor relations",
    icon: "dollar-sign",
    discussionCount: discussions.filter((d) => d.category === "Fundraising")
      .length,
    color: "yellow",
  },
  {
    id: "product-development",
    name: "Product Development",
    description: "Building products, feature planning, and user feedback",
    icon: "code",
    discussionCount: discussions.filter(
      (d) => d.category === "Product Development"
    ).length,
    color: "purple",
  },
  {
    id: "marketing-growth",
    name: "Marketing & Growth",
    description:
      "Customer acquisition, marketing strategies, and growth hacking",
    icon: "trending-up",
    discussionCount: discussions.filter(
      (d) => d.category === "Marketing & Growth"
    ).length,
    color: "red",
  },
  {
    id: "team-culture",
    name: "Team & Culture",
    description: "Hiring, team building, and company culture",
    icon: "users",
    discussionCount: discussions.filter((d) => d.category === "Team & Culture")
      .length,
    color: "indigo",
  },
  {
    id: "legal-finance",
    name: "Legal & Finance",
    description: "Legal issues, accounting, and financial planning",
    icon: "briefcase",
    discussionCount: discussions.filter((d) => d.category === "Legal & Finance")
      .length,
    color: "gray",
  },
];

export const replies: Reply[] = [
  {
    id: "1",
    discussionId: "1",
    content:
      "Great question! I'd recommend starting with customer interviews. Reach out to 20-30 potential customers and ask about their current pain points. Don't pitch your solution yet - just listen to understand their problems deeply.",
    author: {
      id: "mentor1",
      name: "Sarah Chen",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      role: "Senior Product Manager",
      company: "TechCorp",
    },
    createdAt: "2024-02-10T15:20:00Z",
    likes: 8,
    isAccepted: true,
  },
  {
    id: "2",
    discussionId: "1",
    content:
      "Building on Sarah's point, you should also create a simple landing page describing your solution and track conversion rates. Tools like Unbounce or even a simple WordPress site can work.",
    author: {
      id: "founder1",
      name: "Mike Johnson",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      role: "Founder",
      company: "ValidateThis",
    },
    createdAt: "2024-02-10T16:45:00Z",
    likes: 5,
    isAccepted: false,
  },
  {
    id: "3",
    discussionId: "2",
    content:
      "Equity splits depend on many factors, but 50/50 is common for true co-founders who are both there from the beginning. Make sure to implement a 4-year vesting schedule with a 1-year cliff to protect against early departures.",
    author: {
      id: "lawyer1",
      name: "Jennifer Martinez",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      role: "Startup Attorney",
      company: "Legal Partners",
    },
    createdAt: "2024-02-09T17:30:00Z",
    likes: 12,
    isAccepted: false,
  },
  {
    id: "4",
    discussionId: "4",
    content:
      "The Sean Ellis test is a good starting point - if 40% or more of your users would be 'very disappointed' if your product disappeared, you're likely close to PMF. Also track retention cohorts and NPS scores.",
    author: {
      id: "growth1",
      name: "Alex Rivera",
      avatar:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face",
      role: "Growth Lead",
      company: "ScaleUp",
    },
    createdAt: "2024-02-07T14:20:00Z",
    likes: 15,
    isAccepted: true,
  },
];

export const trendingTags = [
  "fundraising",
  "product-market-fit",
  "remote-work",
  "saas",
  "validation",
  "equity",
  "mvp",
  "growth-hacking",
  "b2b",
  "team-building",
];

export const featuredDiscussions = discussions.filter(
  (d) => d.isPinned || d.likes > 20
);
