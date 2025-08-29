// Static investor data for frontend-only app

export interface Investor {
  id: string;
  name: string;
  type:
    | "VC Fund"
    | "Angel Investor"
    | "Corporate VC"
    | "Family Office"
    | "Government Fund";
  logo: string;
  location: string;
  description: string;
  sectors: string[];
  stagePreference: string[];
  investmentRange: {
    min: string;
    max: string;
  };
  portfolioCompanies: string[];
  notableInvestments: {
    company: string;
    round: string;
    amount?: string;
  }[];
  website?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
  };
  keyPersonnel: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
  }[];
  investmentPhilosophy: string;
  valueAdd: string[];
  contactInfo: {
    email: string;
    phone?: string;
    address: string;
  };
  stats: {
    totalInvestments: number;
    activePortfolio: number;
    exits: number;
    averageInvestment: string;
  };
  recentNews?: {
    title: string;
    date: string;
    summary: string;
  }[];
}

export const investorTypes = [
  "All",
  "VC Fund",
  "Angel Investor",
  "Corporate VC",
  "Family Office",
  "Government Fund",
];

export const investmentStages = [
  "All",
  "Pre-Seed",
  "Seed",
  "Series A",
  "Series B",
  "Series C+",
  "Growth Stage",
];

export const sectors = [
  "All",
  "Fintech",
  "E-commerce",
  "Healthcare",
  "Education",
  "Enterprise Software",
  "Consumer Tech",
  "Deep Tech",
  "Climate Tech",
  "Agriculture",
  "Logistics",
  "Gaming",
];

export const investors: Investor[] = [
  {
    id: "1",
    name: "Sequoia Capital India",
    type: "VC Fund",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop",
    location: "Bengaluru, India",
    description:
      "One of India's most prominent venture capital firms, backing exceptional founders building transformative companies across all sectors and stages.",
    sectors: [
      "Fintech",
      "E-commerce",
      "Enterprise Software",
      "Healthcare",
      "Consumer Tech",
    ],
    stagePreference: ["Seed", "Series A", "Series B", "Series C+"],
    investmentRange: {
      min: "$500K",
      max: "$50M",
    },
    portfolioCompanies: [
      "Byju's",
      "Zomato",
      "Pine Labs",
      "Freshworks",
      "Razorpay",
    ],
    notableInvestments: [
      { company: "Byju's", round: "Series F", amount: "$150M" },
      { company: "Zomato", round: "Series I", amount: "$150M" },
      { company: "Pine Labs", round: "Series J", amount: "$100M" },
    ],
    website: "https://www.sequoiacap.com/india/",
    socialLinks: {
      linkedin: "https://linkedin.com/company/sequoia-capital-india",
      twitter: "https://twitter.com/sequoiacapindia",
    },
    keyPersonnel: [
      {
        name: "Shailendra Singh",
        role: "Managing Director",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        bio: "20+ years in venture capital, former McKinsey consultant, led investments in Zomato, Byju's, and many other unicorns.",
      },
      {
        name: "Abhishek Mohan",
        role: "Principal",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        bio: "Focuses on early-stage investments in fintech and enterprise software, former entrepreneur with successful exit.",
      },
    ],
    investmentPhilosophy:
      "We partner with bold entrepreneurs to build iconic companies that create lasting value. Our approach combines patient capital with deep operational expertise.",
    valueAdd: [
      "Global network and partnerships",
      "Go-to-market strategy support",
      "Talent acquisition and leadership hiring",
      "Product and technology guidance",
      "International expansion support",
    ],
    contactInfo: {
      email: "india@sequoiacap.com",
      phone: "+91-80-4040-8000",
      address: "UB City, 24 Vittal Mallya Road, Bengaluru 560001",
    },
    stats: {
      totalInvestments: 200,
      activePortfolio: 150,
      exits: 50,
      averageInvestment: "$8M",
    },
    recentNews: [
      {
        title: "Sequoia India launches $2.8B fund for Indian startups",
        date: "2024-01-15",
        summary:
          "New fund to focus on early-stage and growth investments in Indian tech startups.",
      },
    ],
  },
  {
    id: "2",
    name: "Accel Partners India",
    type: "VC Fund",
    logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=200&fit=crop",
    location: "Bengaluru, India",
    description:
      "Early-stage venture capital firm focused on partnering with exceptional entrepreneurs building category-defining companies in India and Southeast Asia.",
    sectors: [
      "Fintech",
      "E-commerce",
      "Enterprise Software",
      "Consumer Tech",
      "Healthcare",
    ],
    stagePreference: ["Seed", "Series A", "Series B"],
    investmentRange: {
      min: "$250K",
      max: "$25M",
    },
    portfolioCompanies: [
      "Flipkart",
      "Swiggy",
      "Freshworks",
      "BookMyShow",
      "BrowserStack",
    ],
    notableInvestments: [
      { company: "Flipkart", round: "Series A", amount: "$1M" },
      { company: "Swiggy", round: "Series A", amount: "$2M" },
      { company: "Freshworks", round: "Series A", amount: "$5M" },
    ],
    website: "https://www.accel.com/",
    socialLinks: {
      linkedin: "https://linkedin.com/company/accel-partners",
      twitter: "https://twitter.com/accel",
    },
    keyPersonnel: [
      {
        name: "Prashanth Prakash",
        role: "Partner",
        avatar:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face",
        bio: "15+ years in venture capital, led early investments in Flipkart, Swiggy, and other category leaders.",
      },
      {
        name: "Anand Daniel",
        role: "Partner",
        avatar:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
        bio: "Focuses on fintech and enterprise software investments, former product manager at leading tech companies.",
      },
    ],
    investmentPhilosophy:
      "We back entrepreneurs from the earliest stages and help them build enduring companies that define new categories and create significant value.",
    valueAdd: [
      "Product development expertise",
      "Customer acquisition strategies",
      "International market entry",
      "Technical architecture guidance",
      "Leadership team building",
    ],
    contactInfo: {
      email: "india@accel.com",
      phone: "+91-80-4151-4151",
      address: "Koramangala, Bengaluru 560095",
    },
    stats: {
      totalInvestments: 150,
      activePortfolio: 100,
      exits: 35,
      averageInvestment: "$5M",
    },
  },
  {
    id: "3",
    name: "Kalaari Capital",
    type: "VC Fund",
    logo: "https://images.unsplash.com/photo-1553484771-cc0d9b8c2b33?w=200&h=200&fit=crop",
    location: "Bengaluru, India",
    description:
      "India-focused early-stage venture capital fund backing passionate entrepreneurs building disruptive technology companies.",
    sectors: [
      "Fintech",
      "Healthcare",
      "Education",
      "Enterprise Software",
      "Consumer Tech",
    ],
    stagePreference: ["Seed", "Series A", "Series B"],
    investmentRange: {
      min: "$500K",
      max: "$15M",
    },
    portfolioCompanies: [
      "Snapdeal",
      "Dream11",
      "Myntra",
      "Urban Ladder",
      "CureFit",
    ],
    notableInvestments: [
      { company: "Dream11", round: "Series A", amount: "$2M" },
      { company: "Snapdeal", round: "Series A", amount: "$12M" },
      { company: "Myntra", round: "Series B", amount: "$25M" },
    ],
    website: "https://kalaari.com/",
    socialLinks: {
      linkedin: "https://linkedin.com/company/kalaari-capital",
      twitter: "https://twitter.com/kalaari",
    },
    keyPersonnel: [
      {
        name: "Vani Kola",
        role: "Managing Director",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=100&h=100&fit=crop&crop=face",
        bio: "Serial entrepreneur turned VC, founded Kalaari Capital, champion of women entrepreneurs in tech.",
      },
      {
        name: "Rajesh Raju",
        role: "Managing Director",
        avatar:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
        bio: "20+ years in technology and venture capital, former entrepreneur with multiple successful exits.",
      },
    ],
    investmentPhilosophy:
      "We believe in backing entrepreneurs who are building transformative businesses that can create significant impact and value in the Indian market.",
    valueAdd: [
      "Deep market insights and connections",
      "Business model optimization",
      "Strategic partnerships",
      "Talent and advisory support",
      "Follow-on funding coordination",
    ],
    contactInfo: {
      email: "team@kalaari.com",
      phone: "+91-80-4115-1400",
      address: "Indiranagar, Bengaluru 560038",
    },
    stats: {
      totalInvestments: 120,
      activePortfolio: 80,
      exits: 25,
      averageInvestment: "$4M",
    },
  },
  {
    id: "4",
    name: "Blume Ventures",
    type: "VC Fund",
    logo: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=200&h=200&fit=crop",
    location: "Mumbai, India",
    description:
      "Early-stage venture capital fund investing in passionate entrepreneurs building technology-enabled businesses across India.",
    sectors: ["Fintech", "E-commerce", "Healthcare", "Education", "Deep Tech"],
    stagePreference: ["Pre-Seed", "Seed", "Series A"],
    investmentRange: {
      min: "$100K",
      max: "$5M",
    },
    portfolioCompanies: [
      "Dunzo",
      "Unacademy",
      "GreyOrange",
      "Purplle",
      "Cashify",
    ],
    notableInvestments: [
      { company: "Unacademy", round: "Seed", amount: "$1M" },
      { company: "Dunzo", round: "Series A", amount: "$3M" },
      { company: "GreyOrange", round: "Series A", amount: "$2M" },
    ],
    website: "https://blume.vc/",
    socialLinks: {
      linkedin: "https://linkedin.com/company/blume-ventures",
      twitter: "https://twitter.com/blumeventures",
    },
    keyPersonnel: [
      {
        name: "Karthik Reddy",
        role: "Managing Partner",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        bio: "Serial entrepreneur and angel investor, co-founded Blume Ventures, passionate about early-stage investing.",
      },
      {
        name: "Sanjay Nath",
        role: "Managing Partner",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        bio: "Former entrepreneur and product leader, focuses on consumer tech and fintech investments.",
      },
    ],
    investmentPhilosophy:
      "We partner with entrepreneurs at the earliest stages, providing not just capital but hands-on support to help build category-defining companies.",
    valueAdd: [
      "Early-stage expertise and mentorship",
      "Product-market fit guidance",
      "Customer development support",
      "Fundraising assistance",
      "Network of entrepreneurs and advisors",
    ],
    contactInfo: {
      email: "hello@blume.vc",
      phone: "+91-22-6178-7800",
      address: "Bandra Kurla Complex, Mumbai 400051",
    },
    stats: {
      totalInvestments: 180,
      activePortfolio: 120,
      exits: 30,
      averageInvestment: "$1.5M",
    },
  },
  {
    id: "5",
    name: "Ratan Tata",
    type: "Angel Investor",
    logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    location: "Mumbai, India",
    description:
      "Chairman Emeritus of Tata Sons and one of India's most respected angel investors, backing innovative startups across multiple sectors.",
    sectors: [
      "E-commerce",
      "Fintech",
      "Healthcare",
      "Consumer Tech",
      "Deep Tech",
    ],
    stagePreference: ["Seed", "Series A"],
    investmentRange: {
      min: "$250K",
      max: "$2M",
    },
    portfolioCompanies: [
      "Ola",
      "Paytm",
      "Snapdeal",
      "Urban Ladder",
      "CarDekho",
    ],
    notableInvestments: [
      { company: "Ola", round: "Series A", amount: "$1M" },
      { company: "Paytm", round: "Series B", amount: "$2M" },
      { company: "Snapdeal", round: "Series C", amount: "$1.5M" },
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/in/ratan-tata",
      twitter: "https://twitter.com/RNTata2000",
    },
    keyPersonnel: [
      {
        name: "Ratan Tata",
        role: "Angel Investor",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        bio: "Former Chairman of Tata Group, passionate about supporting young entrepreneurs and innovation in India.",
      },
    ],
    investmentPhilosophy:
      "I invest in entrepreneurs who are passionate about solving real problems and have the potential to make a meaningful impact on society.",
    valueAdd: [
      "Strategic guidance and mentorship",
      "Access to Tata Group ecosystem",
      "Brand credibility and validation",
      "Network of industry leaders",
      "Long-term vision and patience",
    ],
    contactInfo: {
      email: "investments@tata.com",
      address: "Bombay House, Mumbai 400001",
    },
    stats: {
      totalInvestments: 50,
      activePortfolio: 35,
      exits: 10,
      averageInvestment: "$800K",
    },
  },
  {
    id: "6",
    name: "Nexus Venture Partners",
    type: "VC Fund",
    logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=200&fit=crop",
    location: "Bengaluru, India",
    description:
      "Early-stage venture capital firm focused on investing in technology companies in India and the US, with deep expertise in enterprise software and consumer internet.",
    sectors: [
      "Enterprise Software",
      "Fintech",
      "Healthcare",
      "Consumer Tech",
      "Deep Tech",
    ],
    stagePreference: ["Seed", "Series A", "Series B"],
    investmentRange: {
      min: "$500K",
      max: "$20M",
    },
    portfolioCompanies: [
      "Postman",
      "Unacademy",
      "Turtlemint",
      "H2O.ai",
      "Delhivery",
    ],
    notableInvestments: [
      { company: "Postman", round: "Series A", amount: "$7M" },
      { company: "Unacademy", round: "Series B", amount: "$11M" },
      { company: "Delhivery", round: "Series B", amount: "$5M" },
    ],
    website: "https://nexusvp.com/",
    socialLinks: {
      linkedin: "https://linkedin.com/company/nexus-venture-partners",
      twitter: "https://twitter.com/nexusvp",
    },
    keyPersonnel: [
      {
        name: "Naren Gupta",
        role: "Co-Founder & Managing Director",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        bio: "Serial entrepreneur and investor with 25+ years experience, co-founded multiple successful companies.",
      },
      {
        name: "Sandeep Singhal",
        role: "Co-Founder & Managing Director",
        avatar:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face",
        bio: "Former McKinsey consultant and entrepreneur, focuses on enterprise software and fintech investments.",
      },
    ],
    investmentPhilosophy:
      "We partner with exceptional entrepreneurs building large, sustainable businesses by providing capital, expertise, and networks.",
    valueAdd: [
      "Cross-border expansion support",
      "Enterprise sales expertise",
      "Product development guidance",
      "Strategic partnerships",
      "Executive recruiting",
    ],
    contactInfo: {
      email: "info@nexusvp.com",
      phone: "+91-80-4092-2400",
      address: "Koramangala, Bengaluru 560034",
    },
    stats: {
      totalInvestments: 100,
      activePortfolio: 70,
      exits: 20,
      averageInvestment: "$6M",
    },
  },
  {
    id: "7",
    name: "SIDBI Fund of Funds",
    type: "Government Fund",
    logo: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=200&h=200&fit=crop",
    location: "New Delhi, India",
    description:
      "Government-backed fund of funds supporting the startup ecosystem by investing in SEBI-registered venture capital funds that invest in Indian startups.",
    sectors: [
      "All Sectors",
      "Manufacturing",
      "Agriculture",
      "Healthcare",
      "Education",
    ],
    stagePreference: ["Seed", "Series A", "Series B"],
    investmentRange: {
      min: "$50M",
      max: "$200M",
    },
    portfolioCompanies: ["Indirect through partner funds"],
    notableInvestments: [
      {
        company: "Multiple funds",
        round: "Fund Investment",
        amount: "$1.5B committed",
      },
    ],
    website: "https://www.sidbi.in/",
    keyPersonnel: [
      {
        name: "Sivasubramanian Ramann",
        role: "Chairman & Managing Director",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        bio: "Banking veteran with 35+ years experience, leading SIDBI's mission to support MSMEs and startups.",
      },
    ],
    investmentPhilosophy:
      "Supporting the startup ecosystem by providing patient capital to venture funds that invest in innovative Indian startups across all sectors.",
    valueAdd: [
      "Government backing and credibility",
      "Long-term patient capital",
      "Policy advocacy and support",
      "Access to government schemes",
      "Pan-India network and reach",
    ],
    contactInfo: {
      email: "ffs@sidbi.in",
      phone: "+91-522-2288-101",
      address: "SIDBI Tower, Sector-62, Noida 201309",
    },
    stats: {
      totalInvestments: 25,
      activePortfolio: 20,
      exits: 3,
      averageInvestment: "$60M",
    },
  },
  {
    id: "8",
    name: "Indian Angel Network",
    type: "Angel Investor",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop",
    location: "New Delhi, India",
    description:
      "India's largest angel investor network with 450+ investors who have collectively invested in 750+ startups across various sectors.",
    sectors: [
      "All Sectors",
      "Fintech",
      "Healthcare",
      "E-commerce",
      "Enterprise Software",
    ],
    stagePreference: ["Pre-Seed", "Seed"],
    investmentRange: {
      min: "$25K",
      max: "$1M",
    },
    portfolioCompanies: ["BoxMe", "Druva", "InMobi", "Yatra", "Wow! Momo"],
    notableInvestments: [
      { company: "InMobi", round: "Angel", amount: "$200K" },
      { company: "Druva", round: "Angel", amount: "$500K" },
      { company: "Yatra", round: "Angel", amount: "$300K" },
    ],
    website: "https://www.indianangelnetwork.com/",
    socialLinks: {
      linkedin: "https://linkedin.com/company/indian-angel-network",
      twitter: "https://twitter.com/IndianAngelNet",
    },
    keyPersonnel: [
      {
        name: "Padmaja Ruparel",
        role: "Co-Founder & President",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=100&h=100&fit=crop&crop=face",
        bio: "Serial entrepreneur and angel investor, passionate about supporting early-stage entrepreneurs.",
      },
      {
        name: "Saurabh Srivastava",
        role: "Co-Founder & Chairman",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        bio: "Technology entrepreneur and investor, co-founded multiple successful companies and IAN.",
      },
    ],
    investmentPhilosophy:
      "We believe in democratizing angel investing and supporting entrepreneurs at the earliest stages with capital, mentorship, and networks.",
    valueAdd: [
      "Large network of experienced angels",
      "Sector expertise across domains",
      "Mentorship and guidance",
      "Follow-on funding support",
      "Market connections and partnerships",
    ],
    contactInfo: {
      email: "contact@indianangelnetwork.com",
      phone: "+91-11-4151-4151",
      address: "Connaught Place, New Delhi 110001",
    },
    stats: {
      totalInvestments: 750,
      activePortfolio: 500,
      exits: 150,
      averageInvestment: "$150K",
    },
  },
];

// Utility functions
export const getInvestorById = (id: string): Investor | undefined => {
  return investors.find((investor) => investor.id === id);
};

export const getInvestorsByType = (type: string): Investor[] => {
  if (type === "All") return investors;
  return investors.filter((investor) => investor.type === type);
};

export const getInvestorsBySector = (sector: string): Investor[] => {
  if (sector === "All") return investors;
  return investors.filter((investor) => investor.sectors.includes(sector));
};

export const getInvestorsByStage = (stage: string): Investor[] => {
  if (stage === "All") return investors;
  return investors.filter((investor) =>
    investor.stagePreference.includes(stage)
  );
};

export const searchInvestors = (query: string): Investor[] => {
  const lowercaseQuery = query.toLowerCase();
  return investors.filter(
    (investor) =>
      investor.name.toLowerCase().includes(lowercaseQuery) ||
      investor.description.toLowerCase().includes(lowercaseQuery) ||
      investor.sectors.some((sector) =>
        sector.toLowerCase().includes(lowercaseQuery)
      ) ||
      investor.portfolioCompanies.some((company) =>
        company.toLowerCase().includes(lowercaseQuery)
      )
  );
};
