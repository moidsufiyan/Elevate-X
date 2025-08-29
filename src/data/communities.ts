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

export const communityCategories: CommunityCategory[] = [
  {
    id: "1",
    name: "Startup Funding",
    description:
      "Discuss fundraising strategies, investor relations, and funding rounds",
    icon: "💰",
    discussionCount: 234,
    color: "bg-green-100 text-green-800",
  },
  {
    id: "2",
    name: "Product Development",
    description:
      "Share insights on building products, MVP development, and user feedback",
    icon: "🚀",
    discussionCount: 189,
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: "3",
    name: "Marketing & Growth",
    description:
      "Growth hacking, digital marketing, and customer acquisition strategies",
    icon: "📈",
    discussionCount: 156,
    color: "bg-purple-100 text-purple-800",
  },
  {
    id: "4",
    name: "Legal & Compliance",
    description:
      "Navigate Indian regulations, compliance, and legal requirements",
    icon: "⚖️",
    discussionCount: 87,
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    id: "5",
    name: "Technology",
    description:
      "Tech stack discussions, development challenges, and solutions",
    icon: "💻",
    discussionCount: 201,
    color: "bg-indigo-100 text-indigo-800",
  },
  {
    id: "6",
    name: "Networking",
    description:
      "Connect with fellow entrepreneurs, find co-founders, and build networks",
    icon: "🤝",
    discussionCount: 143,
    color: "bg-pink-100 text-pink-800",
  },
];

export const discussions: Discussion[] = [
  {
    id: "1",
    title: "How to approach VCs in India for Series A funding?",
    content: `I'm running a B2B SaaS startup with ₹2Cr ARR and looking to raise Series A. What's the best approach to reach out to VCs like Sequoia, Accel, and Matrix Partners? 

Our metrics:
- 40% YoY growth
- 15+ enterprise customers
- Team of 25 people
- Based in Bangalore

Any tips on preparing the pitch deck and what VCs look for in Series A companies?`,
    author: {
      id: "1",
      name: "Rahul Gupta",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      role: "Founder & CEO",
      company: "TechFlow Solutions",
    },
    category: "Startup Funding",
    tags: ["Series A", "VC", "Fundraising", "B2B SaaS"],
    createdAt: "2024-01-20T10:30:00Z",
    updatedAt: "2024-01-20T15:45:00Z",
    views: 342,
    likes: 28,
    replies: 12,
    isPinned: true,
    isSolved: false,
  },
  {
    id: "2",
    title: "Building MVP for Indian market - Key considerations?",
    content: `I'm building an EdTech platform for tier-2 cities. What are the key considerations for MVP development in the Indian context?

Specific challenges I'm thinking about:
- Regional language support
- Low-bandwidth optimization
- Offline functionality
- Payment integration (UPI, wallets)

Would love to hear from founders who've built for Bharat!`,
    author: {
      id: "2",
      name: "Priya Sharma",
      avatar:
        "https://images.unsplash.com/photo-1594824388853-2c5e95564b2a?w=100&h=100&fit=crop&crop=face",
      role: "Product Manager",
      company: "EduVerse",
    },
    category: "Product Development",
    tags: ["MVP", "EdTech", "Tier-2", "Localization"],
    createdAt: "2024-01-19T14:20:00Z",
    updatedAt: "2024-01-19T18:35:00Z",
    views: 189,
    likes: 15,
    replies: 8,
    isPinned: false,
    isSolved: true,
  },
  {
    id: "3",
    title: "Digital marketing strategies that work in India",
    content: `What digital marketing channels have worked best for Indian startups? I'm seeing mixed results with Facebook and Google ads.

Our target: Small business owners in tier-2/3 cities
Budget: ₹5L per month
Current CAC: ₹1200 (too high!)

What channels should we focus on? WhatsApp marketing? Regional influencers? Content in regional languages?`,
    author: {
      id: "3",
      name: "Arjun Patel",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      role: "Growth Lead",
      company: "BusinessConnect",
    },
    category: "Marketing & Growth",
    tags: ["Digital Marketing", "CAC", "SMB", "Tier-2"],
    createdAt: "2024-01-18T09:15:00Z",
    updatedAt: "2024-01-18T16:20:00Z",
    views: 267,
    likes: 22,
    replies: 15,
    isPinned: false,
    isSolved: false,
  },
  {
    id: "4",
    title: "GST compliance for startups - Complete guide needed",
    content: `Can someone share a comprehensive guide on GST compliance for startups? 

We're a SaaS company and confused about:
- When to register for GST
- How to handle interstate sales
- Input tax credit for software licenses
- Monthly vs quarterly filing

Also, any recommendations for good CA firms that specialize in startups?`,
    author: {
      id: "4",
      name: "Kavya Reddy",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
      role: "Co-founder",
      company: "DataInsights",
    },
    category: "Legal & Compliance",
    tags: ["GST", "Compliance", "SaaS", "Taxation"],
    createdAt: "2024-01-17T11:45:00Z",
    updatedAt: "2024-01-17T14:30:00Z",
    views: 156,
    likes: 18,
    replies: 6,
    isPinned: false,
    isSolved: true,
  },
  {
    id: "5",
    title: "Choosing tech stack for Indian startup - React vs Angular?",
    content: `We're building a fintech platform and debating between React and Angular for the frontend. 

Considerations:
- Team has experience with both
- Need to hire developers in India (availability/cost)
- Performance on low-end devices
- Long-term maintenance

What would you recommend and why? Also open to other suggestions like Vue.js.`,
    author: {
      id: "5",
      name: "Vikram Singh",
      avatar:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face",
      role: "CTO",
      company: "PaySecure",
    },
    category: "Technology",
    tags: ["React", "Angular", "Frontend", "FinTech"],
    createdAt: "2024-01-16T16:00:00Z",
    updatedAt: "2024-01-16T20:15:00Z",
    views: 298,
    likes: 31,
    replies: 19,
    isPinned: false,
    isSolved: false,
  },
  {
    id: "6",
    title: "Looking for technical co-founder in Bangalore",
    content: `I'm a business-focused founder with a validated idea in the logistics space. Looking for a technical co-founder to join as CTO.

About the opportunity:
- B2B logistics optimization platform
- Already have 3 pilot customers
- Pre-seed funding secured
- Based in Bangalore

Looking for someone with:
- 5+ years experience in backend development
- Experience with scalable systems
- Passion for solving Indian logistics challenges

DM me if interested!`,
    author: {
      id: "6",
      name: "Sneha Agarwal",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
      role: "Founder",
      company: "LogiFlow",
    },
    category: "Networking",
    tags: ["Co-founder", "CTO", "Bangalore", "Logistics"],
    createdAt: "2024-01-15T13:30:00Z",
    updatedAt: "2024-01-15T17:45:00Z",
    views: 445,
    likes: 24,
    replies: 11,
    isPinned: false,
    isSolved: false,
  },
];

export const replies: Reply[] = [
  {
    id: "1",
    discussionId: "1",
    content: `Great metrics! For Series A in India, focus on these key points:

1. **Warm introductions** - VCs prefer introductions from portfolio founders or other VCs
2. **Market size** - Clearly articulate the TAM in India
3. **Unit economics** - Show clear path to profitability
4. **Team** - Highlight domain expertise and previous experience

I'd recommend starting with tier-2 VCs first to practice your pitch, then approach tier-1 firms. Happy to make some introductions if your metrics check out!`,
    author: {
      id: "7",
      name: "Rajesh Mehta",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      role: "Angel Investor",
      company: "Former Flipkart",
    },
    createdAt: "2024-01-20T11:15:00Z",
    likes: 12,
    isAccepted: true,
    parentReplyId: undefined,
  },
  {
    id: "2",
    discussionId: "2",
    content: `For tier-2 cities, these are absolutely critical:

**Technical considerations:**
- Progressive Web App (PWA) for app-like experience without app store friction
- Aggressive caching and offline-first approach
- Image compression and lazy loading
- Support for Hindi/regional languages from day 1

**Payment integration:**
- UPI is a must - integrate with multiple providers
- Support for low-value transactions
- Consider cash-on-delivery for physical products

**User experience:**
- Simple, intuitive UI (many users are first-time internet users)
- Voice-based interactions where possible
- WhatsApp integration for support

Built 2 products for Bharat - happy to share more specific insights!`,
    author: {
      id: "8",
      name: "Amit Kumar",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      role: "Product Lead",
      company: "ShareChat",
    },
    createdAt: "2024-01-19T15:30:00Z",
    likes: 8,
    isAccepted: true,
    parentReplyId: undefined,
  },
];

export const getDiscussionById = (id: string): Discussion | undefined => {
  return discussions.find((discussion) => discussion.id === id);
};

export const getDiscussionsByCategory = (category: string): Discussion[] => {
  return discussions.filter((discussion) => discussion.category === category);
};

export const getRepliesByDiscussionId = (discussionId: string): Reply[] => {
  return replies.filter((reply) => reply.discussionId === discussionId);
};

export const getPinnedDiscussions = (): Discussion[] => {
  return discussions.filter((discussion) => discussion.isPinned);
};

export const getTrendingDiscussions = (): Discussion[] => {
  return discussions.sort((a, b) => b.views - a.views).slice(0, 5);
};
