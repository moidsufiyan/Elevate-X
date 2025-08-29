// Static events data for frontend-only app

export interface Event {
  id: string;
  title: string;
  description: string;
  type:
    | "Conference"
    | "Workshop"
    | "Networking"
    | "Webinar"
    | "Pitch Competition"
    | "AMA"
    | "Meetup";
  category:
    | "Startup"
    | "Technology"
    | "Funding"
    | "Marketing"
    | "Product"
    | "Leadership"
    | "Industry";
  date: string;
  time: string;
  duration: string;
  location: {
    type: "Online" | "Offline" | "Hybrid";
    venue?: string;
    city?: string;
    address?: string;
    platform?: string;
  };
  image: string;
  speakers: {
    name: string;
    role: string;
    company: string;
    avatar: string;
    bio: string;
  }[];
  organizer: {
    name: string;
    logo: string;
    website?: string;
  };
  agenda?: {
    time: string;
    title: string;
    speaker?: string;
  }[];
  price: {
    type: "Free" | "Paid";
    amount?: number;
    currency?: string;
    earlyBird?: {
      amount: number;
      deadline: string;
    };
  };
  capacity: number;
  registered: number;
  tags: string[];
  requirements?: string[];
  benefits: string[];
  status: "Upcoming" | "Ongoing" | "Completed" | "Cancelled";
  registrationUrl?: string;
  socialLinks?: {
    website?: string;
    linkedin?: string;
    twitter?: string;
  };
  sponsors?: {
    name: string;
    logo: string;
    website?: string;
  }[];
  testimonials?: {
    name: string;
    role: string;
    company: string;
    feedback: string;
    avatar: string;
  }[];
}

export const eventTypes = [
  "All",
  "Conference",
  "Workshop",
  "Networking",
  "Webinar",
  "Pitch Competition",
  "AMA",
  "Meetup",
];

export const eventCategories = [
  "All",
  "Startup",
  "Technology",
  "Funding",
  "Marketing",
  "Product",
  "Leadership",
  "Industry",
];

export const events: Event[] = [
  {
    id: "1",
    title: "India Startup Summit 2024",
    description:
      "The largest startup conference in India bringing together founders, investors, and industry leaders to discuss the future of Indian entrepreneurship.",
    type: "Conference",
    category: "Startup",
    date: "2024-03-15",
    time: "09:00",
    duration: "2 days",
    location: {
      type: "Offline",
      venue: "Bangalore International Exhibition Centre",
      city: "Bengaluru",
      address: "10th Mile, Tumkur Road, Madavara Post, Bengaluru 562123",
    },
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop",
    speakers: [
      {
        name: "Ritesh Agarwal",
        role: "Founder & CEO",
        company: "OYO Rooms",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        bio: "Young entrepreneur who built India's largest hospitality company, revolutionizing budget accommodation.",
      },
      {
        name: "Falguni Nayar",
        role: "Founder & CEO",
        company: "Nykaa",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=100&h=100&fit=crop&crop=face",
        bio: "Former investment banker who built India's leading beauty and lifestyle platform.",
      },
      {
        name: "Bhavish Aggarwal",
        role: "Co-founder & CEO",
        company: "Ola",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        bio: "Pioneer of ride-sharing in India, now leading the electric vehicle revolution with Ola Electric.",
      },
    ],
    organizer: {
      name: "TechCircle Events",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      website: "https://techcircle.in",
    },
    agenda: [
      { time: "09:00", title: "Registration & Networking Breakfast" },
      {
        time: "10:00",
        title: "Opening Keynote: The Future of Indian Startups",
        speaker: "Ritesh Agarwal",
      },
      { time: "11:00", title: "Panel: Scaling from Startup to Unicorn" },
      { time: "12:30", title: "Lunch & Networking" },
      {
        time: "14:00",
        title: "Fireside Chat: Building in Bharat",
        speaker: "Falguni Nayar",
      },
      { time: "15:30", title: "Investor Panel: What VCs Look For" },
      {
        time: "17:00",
        title: "Closing Keynote: Electric Mobility Revolution",
        speaker: "Bhavish Aggarwal",
      },
    ],
    price: {
      type: "Paid",
      amount: 5000,
      currency: "INR",
      earlyBird: {
        amount: 3500,
        deadline: "2024-02-15",
      },
    },
    capacity: 2000,
    registered: 1650,
    tags: ["Startup", "Entrepreneurship", "Funding", "Scaling", "India"],
    requirements: ["Valid ID for entry", "Business attire recommended"],
    benefits: [
      "Access to 50+ industry leaders",
      "Networking opportunities with 2000+ attendees",
      "Startup showcase and demo area",
      "1-on-1 investor meetings",
      "Conference materials and swag",
      "Lunch and refreshments included",
    ],
    status: "Upcoming",
    registrationUrl: "#",
    socialLinks: {
      website: "https://indiastartup summit.com",
      linkedin: "https://linkedin.com/company/india-startup-summit",
      twitter: "https://twitter.com/InStartupSummit",
    },
    sponsors: [
      {
        name: "Sequoia Capital India",
        logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      },
      {
        name: "Accel Partners",
        logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=100&fit=crop",
      },
    ],
    testimonials: [
      {
        name: "Priya Sharma",
        role: "Founder",
        company: "EdTech Startup",
        feedback:
          "Amazing networking opportunities and insights from industry leaders. Worth every penny!",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=100&h=100&fit=crop&crop=face",
      },
    ],
  },
  {
    id: "2",
    title: "Fintech Innovation Workshop",
    description:
      "Hands-on workshop exploring the latest trends in fintech, digital payments, and financial inclusion in the Indian market.",
    type: "Workshop",
    category: "Technology",
    date: "2024-02-20",
    time: "14:00",
    duration: "4 hours",
    location: {
      type: "Hybrid",
      venue: "91springboard Koramangala",
      city: "Bengaluru",
      address: "Koramangala, Bengaluru 560095",
      platform: "Zoom",
    },
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=400&fit=crop",
    speakers: [
      {
        name: "Harshil Mathur",
        role: "Co-founder & CEO",
        company: "Razorpay",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        bio: "Building India's payment infrastructure and enabling digital commerce for millions of businesses.",
      },
      {
        name: "Shashank Kumar",
        role: "Co-founder & CTO",
        company: "Razorpay",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        bio: "Technology leader focused on building scalable payment systems and financial products.",
      },
    ],
    organizer: {
      name: "91springboard",
      logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=100&fit=crop",
    },
    price: {
      type: "Paid",
      amount: 1500,
      currency: "INR",
    },
    capacity: 100,
    registered: 85,
    tags: ["Fintech", "Payments", "Digital", "Workshop", "Innovation"],
    requirements: [
      "Laptop required",
      "Basic understanding of financial services",
    ],
    benefits: [
      "Hands-on coding session",
      "API integration workshop",
      "Networking with fintech professionals",
      "Certificate of completion",
      "Workshop materials and resources",
    ],
    status: "Upcoming",
    registrationUrl: "#",
  },
  {
    id: "3",
    title: "Women Entrepreneurs Networking Meet",
    description:
      "Exclusive networking event for women entrepreneurs to connect, share experiences, and build meaningful professional relationships.",
    type: "Networking",
    category: "Leadership",
    date: "2024-02-25",
    time: "18:00",
    duration: "3 hours",
    location: {
      type: "Offline",
      venue: "The Leela Palace",
      city: "Mumbai",
      address: "Sahar, Andheri East, Mumbai 400059",
    },
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=400&fit=crop",
    speakers: [
      {
        name: "Kiran Mazumdar-Shaw",
        role: "Executive Chairperson",
        company: "Biocon",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=100&h=100&fit=crop&crop=face",
        bio: "Pioneer in biotechnology and one of India's most successful women entrepreneurs.",
      },
      {
        name: "Vani Kola",
        role: "Managing Director",
        company: "Kalaari Capital",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=100&h=100&fit=crop&crop=face",
        bio: "Serial entrepreneur turned VC, passionate about supporting women-led startups.",
      },
    ],
    organizer: {
      name: "Women Entrepreneurs India",
      logo: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=100&h=100&fit=crop",
    },
    price: {
      type: "Paid",
      amount: 2000,
      currency: "INR",
    },
    capacity: 150,
    registered: 120,
    tags: [
      "Women",
      "Entrepreneurship",
      "Networking",
      "Leadership",
      "Empowerment",
    ],
    benefits: [
      "Exclusive networking with successful women leaders",
      "Panel discussions on scaling businesses",
      "Mentorship opportunities",
      "Premium dinner and cocktails",
      "Resource sharing and collaboration",
    ],
    status: "Upcoming",
    registrationUrl: "#",
  },
  {
    id: "4",
    title: "AI & Machine Learning for Startups",
    description:
      "Learn how to integrate AI and ML into your startup's products and operations with practical examples and case studies.",
    type: "Webinar",
    category: "Technology",
    date: "2024-02-28",
    time: "19:00",
    duration: "2 hours",
    location: {
      type: "Online",
      platform: "Zoom",
    },
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
    speakers: [
      {
        name: "Pramod Varma",
        role: "Chief Architect",
        company: "Aadhaar & UPI",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        bio: "Technology visionary who architected India's digital identity and payment systems.",
      },
      {
        name: "Kalyan Krishnamurthy",
        role: "CEO",
        company: "Flipkart",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        bio: "Technology leader driving AI adoption in e-commerce and supply chain optimization.",
      },
    ],
    organizer: {
      name: "TechStars India",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
    },
    price: {
      type: "Free",
    },
    capacity: 1000,
    registered: 750,
    tags: ["AI", "Machine Learning", "Technology", "Webinar", "Startups"],
    requirements: [
      "Stable internet connection",
      "Basic understanding of technology",
    ],
    benefits: [
      "Live Q&A with industry experts",
      "Downloadable resources and templates",
      "Recording access for 30 days",
      "Certificate of participation",
      "Networking in breakout rooms",
    ],
    status: "Upcoming",
    registrationUrl: "#",
  },
  {
    id: "5",
    title: "Shark Tank India Pitch Competition",
    description:
      "Pitch your startup idea to a panel of investors and win funding, mentorship, and media exposure.",
    type: "Pitch Competition",
    category: "Funding",
    date: "2024-03-05",
    time: "10:00",
    duration: "6 hours",
    location: {
      type: "Offline",
      venue: "IIT Bombay",
      city: "Mumbai",
      address: "Powai, Mumbai 400076",
    },
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    speakers: [
      {
        name: "Aman Gupta",
        role: "Co-founder & CMO",
        company: "boAt",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        bio: "Built India's leading audio brand and popular Shark Tank India judge.",
      },
      {
        name: "Peyush Bansal",
        role: "Co-founder & CEO",
        company: "Lenskart",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        bio: "Revolutionized eyewear retail in India and Shark Tank India investor.",
      },
    ],
    organizer: {
      name: "Shark Tank India",
      logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop",
    },
    price: {
      type: "Free",
    },
    capacity: 200,
    registered: 180,
    tags: ["Pitch", "Competition", "Funding", "Investors", "Shark Tank"],
    requirements: [
      "Completed startup profile",
      "3-minute pitch deck",
      "Working prototype or MVP",
      "Financial projections",
    ],
    benefits: [
      "Chance to win ₹50 lakh funding",
      "Mentorship from Shark Tank judges",
      "Media coverage and PR",
      "Networking with investors",
      "Feedback from industry experts",
    ],
    status: "Upcoming",
    registrationUrl: "#",
  },
  {
    id: "6",
    title: "AMA with Vijay Shekhar Sharma",
    description:
      "Ask Me Anything session with the founder of Paytm, discussing the journey of building India's largest fintech company.",
    type: "AMA",
    category: "Leadership",
    date: "2024-03-10",
    time: "16:00",
    duration: "1.5 hours",
    location: {
      type: "Online",
      platform: "YouTube Live",
    },
    image:
      "https://images.unsplash.com/photo-1556761175-4b87b5e36e44?w=800&h=400&fit=crop",
    speakers: [
      {
        name: "Vijay Shekhar Sharma",
        role: "Founder & CEO",
        company: "Paytm",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        bio: "Pioneer of digital payments in India, built Paytm into a fintech giant.",
      },
    ],
    organizer: {
      name: "Startup Grind Delhi",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
    },
    price: {
      type: "Free",
    },
    capacity: 5000,
    registered: 3200,
    tags: ["AMA", "Fintech", "Leadership", "Paytm", "Entrepreneurship"],
    benefits: [
      "Direct interaction with a unicorn founder",
      "Insights into fintech industry",
      "Q&A session with live questions",
      "Recording available post-event",
      "Networking in chat during live stream",
    ],
    status: "Upcoming",
    registrationUrl: "#",
  },
  {
    id: "7",
    title: "Bangalore Startup Meetup",
    description:
      "Monthly casual meetup for startup enthusiasts, founders, and professionals to network and share ideas over coffee.",
    type: "Meetup",
    category: "Startup",
    date: "2024-03-12",
    time: "18:30",
    duration: "2.5 hours",
    location: {
      type: "Offline",
      venue: "Starbucks Koramangala",
      city: "Bengaluru",
      address: "5th Block, Koramangala, Bengaluru 560095",
    },
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=400&fit=crop",
    speakers: [
      {
        name: "Local Entrepreneurs",
        role: "Various",
        company: "Bangalore Startup Community",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        bio: "Mix of early-stage founders, experienced entrepreneurs, and startup enthusiasts.",
      },
    ],
    organizer: {
      name: "Bangalore Startup Community",
      logo: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=100&h=100&fit=crop",
    },
    price: {
      type: "Free",
    },
    capacity: 50,
    registered: 35,
    tags: ["Meetup", "Networking", "Casual", "Community", "Bangalore"],
    benefits: [
      "Casual networking environment",
      "Meet fellow entrepreneurs",
      "Share ideas and get feedback",
      "Learn about local startup ecosystem",
      "Coffee and snacks provided",
    ],
    status: "Upcoming",
    registrationUrl: "#",
  },
  {
    id: "8",
    title: "Digital Marketing Masterclass",
    description:
      "Comprehensive workshop on digital marketing strategies specifically designed for Indian startups and SMEs.",
    type: "Workshop",
    category: "Marketing",
    date: "2024-01-15",
    time: "10:00",
    duration: "6 hours",
    location: {
      type: "Offline",
      venue: "WeWork Galaxy",
      city: "Gurgaon",
      address: "43, Sector 62, Gurugram 122102",
    },
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    speakers: [
      {
        name: "Deepinder Goyal",
        role: "Founder & CEO",
        company: "Zomato",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        bio: "Built Zomato into a global food delivery platform with innovative marketing strategies.",
      },
    ],
    organizer: {
      name: "Digital Marketing Institute",
      logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop",
    },
    price: {
      type: "Paid",
      amount: 2500,
      currency: "INR",
    },
    capacity: 80,
    registered: 80,
    tags: ["Marketing", "Digital", "Workshop", "Strategy", "SME"],
    status: "Completed",
    testimonials: [
      {
        name: "Rahul Kumar",
        role: "Marketing Head",
        company: "Local Startup",
        feedback:
          "Excellent practical insights that I could implement immediately in my startup.",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      },
    ],
    benefits: [
      "Practical marketing strategies",
      "Case studies from successful startups",
      "Hands-on campaign creation",
      "Tools and templates",
      "Networking with marketing professionals",
    ],
  },
];

// Utility functions
export const getEventById = (id: string): Event | undefined => {
  return events.find((event) => event.id === id);
};

export const getEventsByType = (type: string): Event[] => {
  if (type === "All") return events;
  return events.filter((event) => event.type === type);
};

export const getEventsByCategory = (category: string): Event[] => {
  if (category === "All") return events;
  return events.filter((event) => event.category === category);
};

export const getEventsByStatus = (status: string): Event[] => {
  return events.filter((event) => event.status === status);
};

export const getUpcomingEvents = (): Event[] => {
  return events
    .filter((event) => event.status === "Upcoming")
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};

export const getPastEvents = (): Event[] => {
  return events
    .filter((event) => event.status === "Completed")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getFeaturedEvents = (): Event[] => {
  return events
    .filter(
      (event) =>
        event.status === "Upcoming" &&
        (event.type === "Conference" || event.type === "Pitch Competition")
    )
    .slice(0, 3);
};

export const searchEvents = (query: string): Event[] => {
  const lowercaseQuery = query.toLowerCase();
  return events.filter(
    (event) =>
      event.title.toLowerCase().includes(lowercaseQuery) ||
      event.description.toLowerCase().includes(lowercaseQuery) ||
      event.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)) ||
      event.speakers.some(
        (speaker) =>
          speaker.name.toLowerCase().includes(lowercaseQuery) ||
          speaker.company.toLowerCase().includes(lowercaseQuery)
      )
  );
};
