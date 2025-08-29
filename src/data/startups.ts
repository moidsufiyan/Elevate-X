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
  description?: string;
  website?: string;
  foundingYear?: number;
  employees?: number;
  funding?: string;
  stage?: string;
  founders?: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
  }[];
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  achievements?: string[];
  metrics?: {
    revenue?: string;
    users?: string;
    growth?: string;
  };
  problemStatement?: string;
  solution?: string;
  fullStory?: string;
  traction?: {
    customers?: string;
    revenue?: string;
    growth?: string;
    partnerships?: string;
  };
  roadmap?: {
    title: string;
    description: string;
    timeline: string;
  }[];
  teamSize?: number;
  investorHighlights?: string[];
}

export const startups: Startup[] = [
  {
    id: "1",
    name: "KrishiTech",
    logo: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=100&h=100&fit=crop",
    industry: "AgriTech",
    location: "Pune, Maharashtra",
    fundingStage: "Series A",
    shortPitch:
      "AI-powered precision farming solutions helping Indian farmers increase crop yield by 40% while reducing water usage.",
    interestedCount: 89,
    tags: ["AgriTech", "AI", "IoT", "Sustainability"],
    description:
      "KrishiTech provides end-to-end agricultural technology solutions including soil monitoring, weather prediction, and crop management systems specifically designed for Indian farming conditions.",
    foundingYear: 2021,
    employees: 45,
    teamSize: 45,
    funding: "₹25 Crores",
    website: "https://krishitech.in",
    problemStatement:
      "Indian agriculture faces critical challenges including unpredictable weather patterns, inefficient water usage, poor soil health monitoring, and lack of data-driven decision making. Small and marginal farmers, who constitute 86% of India's farming community, struggle with traditional farming methods that result in 30-40% crop losses and declining yields year over year.",
    solution:
      "KrishiTech has developed an integrated IoT and AI platform that provides real-time soil health monitoring, weather prediction, automated irrigation systems, and crop advisory services. Our solution includes smart sensors, mobile app, and AI-powered recommendations that help farmers make data-driven decisions, optimize resource usage, and increase productivity.",
    fullStory:
      "Founded in 2021 by agricultural engineers Rajesh Patil and Dr. Meera Joshi, KrishiTech emerged from their personal experience witnessing farmer suicides in Maharashtra due to crop failures. After conducting extensive field research across 200+ villages, they identified that lack of scientific farming practices and real-time data were the primary issues. Starting with a pilot project covering 50 farmers in Pune district, KrishiTech's solution showed remarkable results - 40% increase in crop yield, 35% reduction in water usage, and 50% decrease in pesticide costs. The success led to rapid expansion across Maharashtra, Karnataka, and Telangana. Today, KrishiTech serves over 15,000 farmers across 500+ villages, with plans to reach 100,000 farmers by 2025. The startup has developed partnerships with major agricultural input companies and government schemes, making precision farming accessible to small-scale farmers through affordable subscription models.",
    founders: [
      {
        name: "Rajesh Patil",
        role: "Co-founder & CEO",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        bio: "Agricultural Engineer from IIT Bombay with 8 years experience in farm automation. Previously worked at John Deere India.",
      },
      {
        name: "Dr. Meera Joshi",
        role: "Co-founder & CTO",
        avatar:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
        bio: "PhD in Agricultural Sciences from IARI Delhi. Expert in precision agriculture and IoT applications in farming.",
      },
    ],
    traction: {
      customers: "15,000+ farmers across 3 states",
      revenue: "₹8 Crores ARR",
      growth: "300% YoY growth",
      partnerships: "Partnerships with 25+ agricultural input companies",
    },
    roadmap: [
      {
        title: "National Expansion",
        description: "Expand to 10 states covering 100,000 farmers",
        timeline: "2024-2025",
      },
      {
        title: "AI Enhancement",
        description:
          "Launch advanced crop disease prediction and yield forecasting models",
        timeline: "2024",
      },
      {
        title: "Financial Services",
        description:
          "Introduce crop insurance and micro-lending services for farmers",
        timeline: "2025",
      },
    ],
    achievements: [
      "Winner of National Startup Award 2023",
      "Featured in Forbes India 30 Under 30",
      "Selected for Google for Startups Accelerator",
      "Partnership with Maharashtra State Government",
    ],
    investorHighlights: [
      "Proven product-market fit with 15,000+ active farmers",
      "Strong unit economics with 40% gross margins",
      "Experienced team with deep domain expertise",
      "Large addressable market of 146M farmers in India",
      "Government support and policy tailwinds",
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/company/krishitech",
      twitter: "https://twitter.com/krishitech",
      website: "https://krishitech.in",
    },
  },
  {
    id: "2",
    name: "MedAssist India",
    logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=100&h=100&fit=crop",
    industry: "HealthTech",
    location: "Bangalore, Karnataka",
    fundingStage: "Series B",
    shortPitch:
      "Digital healthcare platform connecting rural patients with urban doctors through telemedicine and AI diagnostics.",
    interestedCount: 156,
    tags: ["HealthTech", "Telemedicine", "AI", "Rural Health"],
    description:
      "Bridging the healthcare gap in rural India by providing affordable, accessible medical consultations and AI-powered preliminary diagnostics.",
    foundingYear: 2020,
    employees: 120,
    teamSize: 120,
    funding: "₹85 Crores",
    website: "https://medassist.in",
    problemStatement:
      "Rural India faces a severe shortage of qualified doctors with only 0.3 doctors per 1000 people compared to the WHO recommendation of 1 doctor per 1000 people. Over 65% of India's population lives in rural areas but has access to only 25% of healthcare infrastructure. This leads to delayed diagnosis, expensive travel to cities for treatment, and preventable deaths from treatable conditions.",
    solution:
      "MedAssist India has created a comprehensive telemedicine platform that connects rural patients with qualified doctors through video consultations, AI-powered symptom assessment, and local health worker support. Our platform includes multilingual support, offline capabilities, and integration with local pharmacies for medicine delivery.",
    fullStory:
      "Dr. Ananya Krishnan and Vikram Reddy founded MedAssist India in 2020 after witnessing the healthcare crisis during the COVID-19 pandemic. Dr. Krishnan, an AIIMS graduate, had been working in rural Karnataka and observed how patients would travel 200+ km for basic consultations. Vikram, a former Flipkart engineer, brought the technical expertise to build a robust telemedicine platform. Starting with 5 villages in Karnataka, they conducted over 1000 free consultations to understand rural healthcare needs. The platform now serves 2.5 million patients across 15 states, with over 2000 doctors on the network. MedAssist has partnered with state governments, NGOs, and corporate CSR programs to make healthcare accessible in the remotest areas of India. Their AI diagnostic tool has achieved 85% accuracy in preliminary diagnosis, helping doctors provide faster and more accurate treatment recommendations.",
    founders: [
      {
        name: "Dr. Ananya Krishnan",
        role: "Co-founder & CEO",
        avatar:
          "https://images.unsplash.com/photo-1594824388853-2c5e95564b2a?w=100&h=100&fit=crop&crop=face",
        bio: "MBBS from AIIMS Delhi, MD in Community Medicine. 8 years experience in rural healthcare delivery and public health policy.",
      },
      {
        name: "Vikram Reddy",
        role: "Co-founder & CTO",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        bio: "Computer Science from IIT Hyderabad, former Senior Engineer at Flipkart. Expert in scalable healthcare technology solutions.",
      },
    ],
    traction: {
      customers: "2.5M+ patients served",
      revenue: "₹45 Crores ARR",
      growth: "250% YoY growth",
      partnerships: "Active in 15 states with 500+ health centers",
    },
    roadmap: [
      {
        title: "AI Expansion",
        description:
          "Launch advanced AI diagnostics for radiology and pathology",
        timeline: "2024",
      },
      {
        title: "International Expansion",
        description:
          "Expand to Southeast Asian markets starting with Bangladesh",
        timeline: "2025",
      },
      {
        title: "Chronic Care",
        description:
          "Develop comprehensive chronic disease management programs",
        timeline: "2024-2025",
      },
    ],
    achievements: [
      "Served 2.5M+ patients across rural India",
      "Winner of Digital Health Innovation Award 2023",
      "Selected for WHO Global Health Initiative",
      "Partnership with Ministry of Health & Family Welfare",
    ],
    investorHighlights: [
      "Massive market opportunity in rural healthcare",
      "Strong government and policy support",
      "Proven scalability with 250% YoY growth",
      "Award-winning AI diagnostic technology",
      "Experienced founding team with domain expertise",
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/company/medassist-india",
      twitter: "https://twitter.com/medassistindia",
      website: "https://medassist.in",
    },
  },
  {
    id: "3",
    name: "EduVerse",
    logo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=100&h=100&fit=crop",
    industry: "EdTech",
    location: "Delhi, NCR",
    fundingStage: "Seed",
    shortPitch:
      "Vernacular language learning platform making quality education accessible to students in tier-2 and tier-3 cities.",
    interestedCount: 67,
    tags: ["EdTech", "Vernacular", "K-12", "Accessibility"],
    description:
      "Interactive learning platform offering courses in Hindi, Tamil, Telugu, and other regional languages with personalized learning paths.",
    foundingYear: 2022,
    employees: 35,
    teamSize: 35,
    funding: "₹12 Crores",
    website: "https://eduverse.in",
    problemStatement:
      "Over 70% of Indian students study in regional language medium schools but lack access to quality educational content in their native languages. Most EdTech platforms focus on English-medium content, creating a significant gap for students from tier-2 and tier-3 cities who struggle with language barriers while accessing online education.",
    solution:
      "EduVerse provides comprehensive K-12 education content in 8 Indian regional languages with interactive videos, gamified learning, and AI-powered personalized learning paths. Our platform adapts to each student's learning pace and provides content in their preferred language while gradually building English proficiency.",
    fullStory:
      "Founded by educators Priya Gupta and Rahul Sharma, EduVerse was born from their experience teaching in government schools across Uttar Pradesh and Rajasthan. They observed that bright students were underperforming due to language barriers in accessing quality educational content. Starting with content creation in Hindi for Class 6-10 Mathematics and Science, they piloted the platform in 20 schools. The response was overwhelming - students showed 60% improvement in test scores within 6 months. EduVerse now serves 150,000+ students across 8 states with content in Hindi, Tamil, Telugu, Marathi, Gujarati, Bengali, Kannada, and Malayalam. The platform has partnerships with 500+ schools and has trained over 2000 teachers to integrate vernacular digital learning in their classrooms.",
    founders: [
      {
        name: "Priya Gupta",
        role: "Co-founder & CEO",
        avatar:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
        bio: "B.Ed from Delhi University, M.A. in Education. 10 years experience in curriculum development and teacher training for government schools.",
      },
      {
        name: "Rahul Sharma",
        role: "Co-founder & CPO",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        bio: "Computer Science from NIT Delhi, former Product Manager at BYJU'S. Expert in educational technology and learning analytics.",
      },
    ],
    traction: {
      customers: "150,000+ students across 8 states",
      revenue: "₹6 Crores ARR",
      growth: "400% YoY growth",
      partnerships: "500+ school partnerships",
    },
    roadmap: [
      {
        title: "Content Expansion",
        description: "Launch complete K-12 curriculum in all 8 languages",
        timeline: "2024",
      },
      {
        title: "Assessment Platform",
        description:
          "Develop comprehensive assessment and certification system",
        timeline: "2024-2025",
      },
      {
        title: "Teacher Training",
        description: "Scale teacher training program to 10,000+ educators",
        timeline: "2025",
      },
    ],
    achievements: [
      "150,000+ students using the platform",
      "Winner of Best EdTech Innovation Award 2023",
      "Featured in UNESCO Global Education Report",
      "Partnership with 8 state education departments",
    ],
    investorHighlights: [
      "Addressing massive underserved market of vernacular education",
      "Strong product-market fit with 400% growth",
      "Experienced team with deep education domain knowledge",
      "Government partnerships and policy support",
      "Proven impact on student learning outcomes",
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/company/eduverse",
      twitter: "https://twitter.com/eduverse",
      website: "https://eduverse.in",
    },
  },
];

export const getStartupById = (id: string): Startup | undefined => {
  return startups.find((startup) => startup.id === id);
};

export const getStartupsByIndustry = (industry: string): Startup[] => {
  return startups.filter((startup) =>
    startup.industry.toLowerCase().includes(industry.toLowerCase())
  );
};
