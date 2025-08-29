// Static resource data for frontend-only app

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  type: "pdf" | "video" | "article" | "template" | "guide";
  image?: string;
  fileUrl?: string;
  downloadCount: number;
  tags: string[];
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  publishedAt: string;
  estimatedReadTime?: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  fullContent?: string;
  sections?: {
    title: string;
    content: string;
  }[];
  keyTakeaways?: string[];
  relatedLinks?: {
    title: string;
    url: string;
    description: string;
  }[];
}

export const resourceCategories = [
  "All",
  "Business Planning",
  "Funding",
  "Legal & Compliance",
  "Marketing",
  "Technology",
  "Operations",
  "HR & Talent",
];

export const resources: Resource[] = [
  {
    id: "1",
    title: "Indian Startup Business Plan Template",
    description:
      "Comprehensive business plan template tailored for Indian startups, including sections on regulatory compliance, local market analysis, and funding landscape.",
    category: "Business Planning",
    type: "template",
    image:
      "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=300&fit=crop",
    fileUrl: "/resources/indian-business-plan-template.pdf",
    downloadCount: 2340,
    tags: ["Business Plan", "Template", "India", "Strategy"],
    author: {
      name: "Dr. Priya Sharma",
      avatar:
        "https://images.unsplash.com/photo-1594824388853-2c5e95564b2a?w=100&h=100&fit=crop&crop=face",
      role: "Startup Mentor & Former McKinsey Consultant",
    },
    publishedAt: "2024-01-20",
    difficulty: "Intermediate",
    estimatedReadTime: 25,
    fullContent: `Creating a comprehensive business plan is crucial for Indian startups seeking funding, partnerships, and strategic direction. This template has been specifically designed keeping in mind the unique challenges and opportunities in the Indian market.`,
    sections: [
      {
        title: "Executive Summary",
        content:
          "The executive summary is your elevator pitch on paper. It should concisely present your business idea, target market, competitive advantage, financial projections, and funding requirements. For Indian startups, highlight how your solution addresses specific Indian market needs and your understanding of local consumer behavior.",
      },
      {
        title: "Market Analysis",
        content:
          "Conduct thorough research on the Indian market size, growth trends, and customer segments. Include analysis of tier-1, tier-2, and tier-3 cities if relevant. Address regulatory environment, cultural factors, and economic indicators that impact your business. Use credible sources like NASSCOM reports, government data, and industry studies.",
      },
      {
        title: "Business Model & Revenue Streams",
        content:
          "Clearly define how your startup will make money. Consider subscription models, freemium approaches, or marketplace commissions that work well in the Indian context. Address pricing strategies for different market segments and explain how you'll achieve unit economics profitability.",
      },
      {
        title: "Regulatory Compliance",
        content:
          "Detail all regulatory requirements including company registration, GST compliance, labor laws, data protection (if applicable), and industry-specific regulations. Include timelines and costs for obtaining necessary licenses and approvals.",
      },
      {
        title: "Financial Projections",
        content:
          "Provide 3-5 year financial projections including P&L, cash flow, and balance sheet. Use conservative assumptions and explain your methodology. Include break-even analysis, customer acquisition costs, and lifetime value calculations.",
      },
      {
        title: "Funding Requirements",
        content:
          "Clearly state how much funding you need, how you'll use it, and your preferred funding sources (angel investors, VCs, government schemes). Include milestones you'll achieve with the funding and potential exit strategies for investors.",
      },
    ],
    keyTakeaways: [
      "Focus on solving real Indian problems with scalable solutions",
      "Demonstrate deep understanding of local market dynamics",
      "Include regulatory compliance as a key section",
      "Show clear path to profitability with realistic projections",
      "Address how you'll compete with established players",
    ],
    relatedLinks: [
      {
        title: "Startup India Registration Portal",
        url: "https://www.startupindia.gov.in",
        description:
          "Official government portal for startup registration and benefits",
      },
      {
        title: "GST Registration Guide",
        url: "#",
        description: "Step-by-step guide for GST registration for startups",
      },
      {
        title: "NASSCOM Startup Reports",
        url: "#",
        description:
          "Industry reports and market data for Indian tech startups",
      },
    ],
  },
  {
    id: "2",
    title: "Complete Guide to Raising Funds in India",
    description:
      "Step-by-step guide covering the entire funding journey from angel investors to Series A, with specific focus on the Indian ecosystem.",
    category: "Funding",
    type: "guide",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
    fileUrl: "/resources/funding-guide-india.pdf",
    downloadCount: 1890,
    tags: ["Funding", "VC", "Angel Investors", "Series A", "India"],
    author: {
      name: "Arjun Mehta",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      role: "Serial Entrepreneur & Angel Investor",
    },
    publishedAt: "2024-01-18",
    estimatedReadTime: 45,
    difficulty: "Advanced",
  },
  {
    id: "3",
    title: "GST Registration and Compliance for Startups",
    description:
      "Complete guide to GST registration, filing, and compliance requirements specifically designed for Indian startups and small businesses.",
    category: "Legal & Compliance",
    type: "guide",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop",
    fileUrl: "/resources/gst-compliance-guide.pdf",
    downloadCount: 1567,
    tags: ["GST", "Compliance", "Legal", "Taxation", "India"],
    author: {
      name: "CA Rajesh Kumar",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      role: "Chartered Accountant & Tax Expert",
    },
    publishedAt: "2024-01-15",
    estimatedReadTime: 30,
    difficulty: "Intermediate",
  },
  {
    id: "4",
    title: "Digital Marketing Playbook for Indian Startups",
    description:
      "Comprehensive digital marketing strategies that work in the Indian market, including regional language content, tier-2 city targeting, and cost-effective channels.",
    category: "Marketing",
    type: "guide",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    fileUrl: "/resources/digital-marketing-playbook-india.pdf",
    downloadCount: 2156,
    tags: ["Digital Marketing", "Growth", "India", "Tier-2", "Regional"],
    author: {
      name: "Kavya Reddy",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
      role: "Growth Marketing Expert",
    },
    publishedAt: "2024-01-12",
    estimatedReadTime: 35,
    difficulty: "Intermediate",
  },
  {
    id: "5",
    title: "Tech Stack Decisions for Indian Startups",
    description:
      "Guide to choosing the right technology stack considering Indian market conditions, talent availability, cost factors, and scalability requirements.",
    category: "Technology",
    type: "article",
    image:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=300&fit=crop",
    fileUrl: "/resources/tech-stack-guide-india.pdf",
    downloadCount: 1823,
    tags: ["Technology", "Tech Stack", "Development", "Scalability"],
    author: {
      name: "Vikram Singh",
      avatar:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face",
      role: "CTO & Technical Advisor",
    },
    publishedAt: "2024-01-10",
    estimatedReadTime: 25,
    difficulty: "Advanced",
  },
  {
    id: "6",
    title: "Startup Operations Manual for India",
    description:
      "Essential operational processes for Indian startups including vendor management, supply chain, customer support, and quality control systems.",
    category: "Operations",
    type: "template",
    image:
      "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=400&h=300&fit=crop",
    fileUrl: "/resources/operations-manual-india.pdf",
    downloadCount: 1234,
    tags: ["Operations", "Processes", "Supply Chain", "Quality"],
    author: {
      name: "Sneha Agarwal",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
      role: "Operations Expert & Former Flipkart",
    },
    publishedAt: "2024-01-08",
    estimatedReadTime: 40,
    difficulty: "Intermediate",
  },
  {
    id: "7",
    title: "Hiring and HR Policies for Indian Startups",
    description:
      "Complete HR toolkit including job descriptions, interview processes, compensation benchmarks, and employee policies compliant with Indian labor laws.",
    category: "HR & Talent",
    type: "template",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop",
    fileUrl: "/resources/hr-policies-india.pdf",
    downloadCount: 1678,
    tags: ["HR", "Hiring", "Policies", "Compensation", "Labor Laws"],
    author: {
      name: "Ravi Sharma",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      role: "HR Director & People Operations Expert",
    },
    publishedAt: "2024-01-05",
    estimatedReadTime: 50,
    difficulty: "Beginner",
  },
  {
    id: "8",
    title: "Building for Bharat: Product Strategy Guide",
    description:
      "Strategic framework for building products that succeed in tier-2 and tier-3 Indian markets, including localization, pricing, and distribution strategies.",
    category: "Business Planning",
    type: "guide",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=300&fit=crop",
    fileUrl: "/resources/building-for-bharat-guide.pdf",
    downloadCount: 2067,
    tags: ["Bharat", "Tier-2", "Product Strategy", "Localization"],
    author: {
      name: "Amit Jain",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      role: "Product Strategy Consultant",
    },
    publishedAt: "2024-01-03",
    estimatedReadTime: 55,
    difficulty: "Advanced",
  },
  {
    id: "9",
    title: "Financial Modeling Template for Indian Startups",
    description:
      "Excel-based financial model template with Indian accounting standards, tax calculations, and funding scenario planning for startups.",
    category: "Funding",
    type: "template",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400&h=300&fit=crop",
    fileUrl: "/resources/financial-model-template-india.xlsx",
    downloadCount: 1445,
    tags: ["Financial Model", "Excel", "Accounting", "Projections"],
    author: {
      name: "CA Meera Patel",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
      role: "Financial Consultant & CA",
    },
    publishedAt: "2024-01-01",
    estimatedReadTime: 20,
    difficulty: "Advanced",
  },
  {
    id: "10",
    title: "Customer Support Excellence for Indian Startups",
    description:
      "Best practices for setting up customer support operations in India, including multilingual support, regional preferences, and cost-effective solutions.",
    category: "Operations",
    type: "guide",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    fileUrl: "/resources/customer-support-guide-india.pdf",
    downloadCount: 987,
    tags: ["Customer Support", "Multilingual", "Operations", "Service"],
    author: {
      name: "Pooja Gupta",
      avatar:
        "https://images.unsplash.com/photo-1594824388853-2c5e95564b2a?w=100&h=100&fit=crop&crop=face",
      role: "Customer Experience Lead",
    },
    publishedAt: "2023-12-28",
    estimatedReadTime: 30,
    difficulty: "Beginner",
  },
];

export const getResourceById = (id: string): Resource | undefined => {
  return resources.find((resource) => resource.id === id);
};

export const getResourcesByCategory = (category: string): Resource[] => {
  if (category === "All") return resources;
  return resources.filter((resource) => resource.category === category);
};

export const getResourcesByType = (type: string): Resource[] => {
  return resources.filter((resource) => resource.type === type);
};

export const getPopularResources = (limit: number = 5): Resource[] => {
  return resources
    .sort((a, b) => b.downloadCount - a.downloadCount)
    .slice(0, limit);
};

export const searchResources = (query: string): Resource[] => {
  const lowercaseQuery = query.toLowerCase();
  return resources.filter(
    (resource) =>
      resource.title.toLowerCase().includes(lowercaseQuery) ||
      resource.description.toLowerCase().includes(lowercaseQuery) ||
      resource.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
};
