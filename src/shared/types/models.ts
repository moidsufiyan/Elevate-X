
// Creating a shared types file for models used across the application

export interface Mentor {
  id: string;
  name: string;
  role: string;
  expertise: string[];
  company: string;
  bio: string;
  avatar: string;
  rating: number;
  reviews: number;
  sessions: number;
  availability: string[];
  hourlyRate: number;
  featured?: boolean;
}

export interface Startup {
  id: string;
  name: string;
  description: string;
  industry: string;
  stage: string;
  foundingYear: number;
  logo: string;
  founders: Founder[];
  location: string;
  funding: string;
  employees: number;
  website: string;
  featured?: boolean;
}

export interface Founder {
  name: string;
  role: string;
  avatar: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'founder' | 'mentor' | 'admin';
  createdAt: string;
}
