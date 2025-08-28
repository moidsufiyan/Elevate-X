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
}

export const resources: Resource[] = [
  {
    id: "1",
    title: "Complete Business Plan Template",
    description:
      "A comprehensive business plan template that covers all essential sections including market analysis, financial projections, and marketing strategy.",
    category: "Business Planning",
    type: "template",
    image:
      "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=300&fit=crop",
    fileUrl: "/resources/business-plan-template.pdf",
    downloadCount: 1250,
    tags: ["Business Plan", "Template", "Strategy", "Planning"],
    author: {
      name: "Michael Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      role: "Business Strategist",
    },
    publishedAt: "2024-01-15",
    difficulty: "Intermediate",
  },
  {
    id: "2",
    title: "Startup Funding Guide 2024",
    description:
      "Everything you need to know about raising capital for your startup, from angel investors to venture capital.",
    category: "Funding",
    type: "guide",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop",
    fileUrl: "/resources/funding-guide-2024.pdf",
    downloadCount: 890,
    tags: ["Funding", "Investment", "Venture Capital", "Angel Investors"],
    author: {
      name: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      role: "Investment Advisor",
    },
    publishedAt: "2024-02-01",
    estimatedReadTime: 45,
    difficulty: "Advanced",
  },
  {
    id: "3",
    title: "Digital Marketing for Startups",
    description:
      "Learn how to build a strong online presence and attract customers through digital marketing channels.",
    category: "Marketing",
    type: "video",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    fileUrl: "https://www.youtube.com/watch?v=example",
    downloadCount: 2100,
    tags: ["Marketing", "Digital", "SEO", "Social Media"],
    author: {
      name: "Alex Chen",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      role: "Marketing Specialist",
    },
    publishedAt: "2024-01-20",
    estimatedReadTime: 60,
    difficulty: "Beginner",
  },
  {
    id: "4",
    title: "Legal Basics for Entrepreneurs",
    description:
      "Essential legal knowledge every entrepreneur should have, including business structures, contracts, and intellectual property.",
    category: "Legal",
    type: "article",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
    downloadCount: 765,
    tags: ["Legal", "Contracts", "IP", "Business Structure"],
    author: {
      name: "Jennifer Lee",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      role: "Business Attorney",
    },
    publishedAt: "2024-01-10",
    estimatedReadTime: 25,
    difficulty: "Intermediate",
  },
  {
    id: "5",
    title: "Financial Modeling Spreadsheet",
    description:
      "A comprehensive Excel template for creating financial models and projections for your startup.",
    category: "Finance",
    type: "template",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    fileUrl: "/resources/financial-model-template.xlsx",
    downloadCount: 1450,
    tags: ["Finance", "Modeling", "Projections", "Excel"],
    author: {
      name: "David Park",
      avatar:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face",
      role: "Financial Analyst",
    },
    publishedAt: "2024-02-05",
    difficulty: "Advanced",
  },
  {
    id: "6",
    title: "Product Development Methodology",
    description:
      "Learn agile product development practices and how to build products that customers actually want.",
    category: "Product",
    type: "guide",
    image:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=300&fit=crop",
    downloadCount: 980,
    tags: ["Product", "Development", "Agile", "MVP"],
    author: {
      name: "Emily Zhang",
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
      role: "Product Manager",
    },
    publishedAt: "2024-01-25",
    estimatedReadTime: 35,
    difficulty: "Intermediate",
  },
];

export const resourceCategories = [
  "All Categories",
  "Business Planning",
  "Funding",
  "Marketing",
  "Legal",
  "Finance",
  "Product",
  "Technology",
  "Operations",
];
