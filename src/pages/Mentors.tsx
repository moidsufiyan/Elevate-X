
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MentorCard } from "@/components/MentorCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Search, Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

// Extended mentor data for the mentors page
const mentorsData = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechVentures",
    expertise: ["SaaS", "Leadership", "Funding"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    available: true,
    bio: "Former Google executive with 15+ years of experience scaling startups from idea to acquisition.",
    rating: 4.9,
    sessions: 87,
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "CTO",
    company: "InnovateLabs",
    expertise: ["AI", "Machine Learning", "Product Strategy"],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    available: false,
    bio: "AI researcher turned entrepreneur who has helped over 50 startups implement machine learning solutions.",
    rating: 4.7,
    sessions: 64,
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    role: "Venture Partner",
    company: "Summit Capital",
    expertise: ["Investment", "Scaling", "Market Analysis"],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    available: true,
    bio: "Investor who has led over $120M in funding rounds for early-stage startups in fintech and health tech.",
    rating: 4.8,
    sessions: 52,
  },
  {
    id: "4",
    name: "David Park",
    role: "Marketing Director",
    company: "Growth Accelerator",
    expertise: ["Growth Marketing", "Brand Strategy", "Digital Ads"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    available: true,
    bio: "Digital marketing specialist who has helped startups achieve 300%+ growth in under a year.",
    rating: 4.6,
    sessions: 93,
  },
  {
    id: "5",
    name: "Jennifer Lee",
    role: "Product Manager",
    company: "ProductLaunch",
    expertise: ["Product Development", "User Research", "MVP Design"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    available: true,
    bio: "Former Apple PM who specializes in helping founders create user-centric products that solve real problems.",
    rating: 4.9,
    sessions: 78,
  },
  {
    id: "6",
    name: "Marcus Williams",
    role: "Financial Advisor",
    company: "Venture Finance",
    expertise: ["Financial Planning", "Fundraising", "Valuation"],
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    available: false,
    bio: "Serial entrepreneur and financial expert who has helped startups raise over $200M in combined funding.",
    rating: 4.7,
    sessions: 42,
  },
  {
    id: "7",
    name: "Sophia Garcia",
    role: "UX Designer",
    company: "DesignForward",
    expertise: ["UX/UI Design", "Brand Identity", "User Testing"],
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=778&q=80",
    available: true,
    bio: "Award-winning designer who has created user experiences for startups that resulted in 200% increases in user engagement.",
    rating: 4.8,
    sessions: 61,
  },
  {
    id: "8",
    name: "Robert Kim",
    role: "Legal Counsel",
    company: "StartupLegal",
    expertise: ["IP Protection", "Contract Law", "Startup Incorporation"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    available: true,
    bio: "Specialized attorney who has helped 100+ startups navigate legal challenges from formation to exit.",
    rating: 4.6,
    sessions: 39,
  },
];

// Filter categories
const categories = [
  "All",
  "Technology",
  "Marketing",
  "Finance",
  "Product",
  "Design",
  "Legal",
  "Operations",
];

const Mentors = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // Filter mentors based on search query and category
  const filteredMentors = mentorsData.filter((mentor) => {
    const matchesSearch = 
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.expertise.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
      mentor.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.role.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      selectedCategory === "All" ||
      mentor.expertise.some(skill => 
        skill.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-b from-stargaze-50 to-white dark:from-stargaze-950 dark:to-stargaze-900">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fade-up" duration="normal">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
                Find Your Perfect Mentor
              </h1>
              <p className="text-stargaze-600 dark:text-stargaze-300 text-lg text-center max-w-3xl mx-auto mb-10">
                Connect with industry experts who can guide you through your entrepreneurial journey 
                and help you navigate the challenges of building a successful startup.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative mb-12">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-stargaze-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search by name, expertise, or company..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={cn(
                      "w-full pl-12 pr-4 py-3 rounded-full",
                      "bg-white dark:bg-stargaze-800",
                      "border border-stargaze-200 dark:border-stargaze-700",
                      "text-stargaze-900 dark:text-stargaze-200",
                      "focus:outline-none focus:ring-2 focus:ring-primary",
                      "shadow-subtle"
                    )}
                  />
                </div>
              </div>
              
              {/* Category Filter */}
              <div className="flex items-center justify-center flex-wrap gap-3 mb-6">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all",
                      selectedCategory === category
                        ? "bg-primary text-white"
                        : "bg-white dark:bg-stargaze-800 text-stargaze-600 dark:text-stargaze-300 hover:bg-stargaze-100 dark:hover:bg-stargaze-700",
                      "border border-stargaze-200 dark:border-stargaze-700",
                      "shadow-subtle"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              {/* Additional Filters Button */}
              <div className="flex justify-center">
                <Button 
                  variant="outline" 
                  size="sm"
                  rightIcon={<ChevronDown className="h-4 w-4" />}
                >
                  More Filters
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        {/* Mentors Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <AnimatedSection threshold={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredMentors.map((mentor, index) => (
                  <AnimatedSection
                    key={mentor.id}
                    threshold={0.1}
                    delay={100 + index * 50}
                    className="h-full"
                  >
                    <MentorCard mentor={mentor} className="h-full" />
                  </AnimatedSection>
                ))}
              </div>
              
              {filteredMentors.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-xl text-stargaze-600 dark:text-stargaze-300">
                    No mentors found matching your criteria. Try adjusting your search.
                  </p>
                </div>
              )}
              
              {filteredMentors.length > 0 && (
                <div className="text-center mt-16">
                  <Button size="lg">Load More Mentors</Button>
                </div>
              )}
            </AnimatedSection>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Mentors;
