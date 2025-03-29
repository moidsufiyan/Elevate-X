
import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MentorCard } from "@/components/MentorCard";
import { Search, Filter, Calendar, Star, ArrowRight } from "lucide-react";

// Sample mentor data
const mentors = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Marketing Expert",
    company: "GrowthLabs",
    expertise: ["Digital Marketing", "Growth Strategy", "Brand Development"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    rating: 4.9,
    reviewCount: 128,
    available: true,
    availableTimes: "Mon, Wed, Fri",
    bio: "15+ years experience in digital marketing with a focus on SaaS and B2B businesses. Previously led marketing at two successful startups that reached IPO."
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Technical Advisor",
    company: "TechVision Partners",
    expertise: ["Product Development", "Technical Architecture", "AI Implementation"],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    rating: 4.8,
    reviewCount: 95,
    available: true,
    availableTimes: "Tue, Thu, Sat",
    bio: "Former CTO of multiple startups and enterprise companies. Specialized in helping early-stage founders build scalable technical foundations."
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    role: "Financial Strategist",
    company: "Growth Capital Ventures",
    expertise: ["Fundraising", "Financial Modeling", "Investor Relations"],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.7,
    reviewCount: 87,
    available: false,
    availableTimes: "On vacation until Aug 15",
    bio: "Investment banker turned startup advisor. Helped companies raise over $50M in funding across seed to Series B rounds."
  },
  {
    id: "4",
    name: "David Park",
    role: "Operations Expert",
    company: "Efficient Scale",
    expertise: ["Operations", "Process Optimization", "Team Building"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.9,
    reviewCount: 112,
    available: true,
    availableTimes: "Daily, 2-6 PM",
    bio: "Operations leader who specializes in helping startups scale efficiently. Expert in building systems that grow with your business."
  },
  {
    id: "5",
    name: "Priya Sharma",
    role: "UX/UI Design Mentor",
    company: "DesignFirst Studio",
    expertise: ["User Experience", "Product Design", "Design Systems"],
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    rating: 4.8,
    reviewCount: 75,
    available: true,
    availableTimes: "Mon-Thu, Afternoons",
    bio: "Award-winning designer with experience at top tech companies. Specializes in helping startups create intuitive user experiences that drive growth."
  },
  {
    id: "6",
    name: "James Wilson",
    role: "Sales Strategy Coach",
    company: "Revenue Architects",
    expertise: ["B2B Sales", "Sales Process", "Revenue Operations"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    rating: 4.7,
    reviewCount: 91,
    available: false,
    availableTimes: "Available next week",
    bio: "Sales leader who has built and scaled teams from 0 to $100M ARR. Expert in designing scalable sales processes for B2B startups."
  }
];

// Filter options
const expertiseOptions = ["All Expertise", "Marketing", "Sales", "Finance", "Operations", "Product", "Tech", "Design", "Leadership"];
const availabilityOptions = ["Any Availability", "Available Now", "Available This Week", "Available Next Week"];
const industryOptions = ["All Industries", "SaaS", "FinTech", "Health Tech", "E-commerce", "Marketplaces", "AI/ML", "Consumer"];

const Mentors = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedExpertise, setSelectedExpertise] = useState("All Expertise");
  const [selectedAvailability, setSelectedAvailability] = useState("Any Availability");
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");

  // Filter mentors based on search and filters
  const filteredMentors = mentors.filter((mentor) => {
    // Search filter
    const matchesSearch = 
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.expertise.some(item => item.toLowerCase().includes(searchQuery.toLowerCase()));
    
    // Expertise filter (basic implementation - would be more complex in real app)
    const matchesExpertise = 
      selectedExpertise === "All Expertise" ||
      mentor.expertise.some(exp => exp.includes(selectedExpertise));
    
    // Availability filter (basic implementation)
    const matchesAvailability = 
      selectedAvailability === "Any Availability" ||
      (selectedAvailability === "Available Now" && mentor.available);
    
    // Industry filter would be implemented similarly (using mentor.industries if that data existed)
    // This is a simplified version
    const matchesIndustry = selectedIndustry === "All Industries";
    
    return matchesSearch && matchesExpertise && matchesAvailability && matchesIndustry;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-stargaze-900 dark:text-white mb-4">
              Find Your Perfect Mentor
            </h1>
            <p className="text-lg text-stargaze-600 dark:text-stargaze-300 max-w-3xl mx-auto">
              Connect with experienced mentors who can guide you through every stage of your startup journey.
              Filter by expertise, availability, and industry to find the right match.
            </p>
          </AnimatedSection>
          
          {/* Search and Filters */}
          <AnimatedSection 
            animation="fade-up" 
            delay={100} 
            className="bg-white dark:bg-stargaze-900 shadow-subtle rounded-xl p-6 mb-8 max-w-5xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Input
                  placeholder="Search mentors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stargaze-400" />
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Select value={selectedExpertise} onValueChange={setSelectedExpertise}>
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Expertise" />
                  </SelectTrigger>
                  <SelectContent>
                    {expertiseOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={selectedAvailability} onValueChange={setSelectedAvailability}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Availability" />
                  </SelectTrigger>
                  <SelectContent>
                    {availabilityOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {industryOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Results Count */}
          <AnimatedSection delay={150} className="mb-6 max-w-5xl mx-auto">
            <div className="flex items-center justify-between">
              <p className="text-sm text-stargaze-600 dark:text-stargaze-400">
                Showing <span className="font-medium">{filteredMentors.length}</span> mentors
              </p>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-stargaze-500" />
                <span className="text-sm text-stargaze-600 dark:text-stargaze-400">Filters Applied</span>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Mentors Grid */}
          {filteredMentors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {filteredMentors.map((mentor, index) => (
                <AnimatedSection key={mentor.id} delay={200 + index * 50}>
                  <Link to={`/mentor/${mentor.id}`} className="block h-full">
                    <div className="bg-white dark:bg-stargaze-900 border border-stargaze-200 dark:border-stargaze-800 rounded-xl overflow-hidden shadow-subtle hover:shadow-md transition-shadow h-full flex flex-col">
                      <div className="p-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <img 
                            src={mentor.image} 
                            alt={mentor.name} 
                            className="h-16 w-16 rounded-full object-cover"
                          />
                          <div>
                            <h3 className="text-lg font-semibold text-stargaze-900 dark:text-white">
                              {mentor.name}
                            </h3>
                            <p className="text-sm text-stargaze-600 dark:text-stargaze-400">
                              {mentor.role} at {mentor.company}
                            </p>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <span className="font-medium">{mentor.rating}</span>
                            <span className="text-sm text-stargaze-500">({mentor.reviewCount} reviews)</span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span className={`text-sm ${mentor.available ? 'text-green-600 dark:text-green-500' : 'text-amber-600 dark:text-amber-500'}`}>
                              {mentor.availableTimes}
                            </span>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {mentor.expertise.slice(0, 3).map((skill) => (
                              <Badge key={skill} variant="outline" className="bg-primary/10">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <p className="text-sm text-stargaze-600 dark:text-stargaze-400 mb-4 line-clamp-2">
                          {mentor.bio}
                        </p>
                      </div>
                      
                      <div className="mt-auto p-4 pt-0">
                        <Button className="w-full">
                          View Profile <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 max-w-5xl mx-auto">
              <p className="text-2xl font-medium text-stargaze-600 dark:text-stargaze-300">
                No mentors match your filters
              </p>
              <p className="mt-2 text-stargaze-500">
                Try adjusting your search criteria
              </p>
              <Button 
                className="mt-6" 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedExpertise("All Expertise");
                  setSelectedAvailability("Any Availability");
                  setSelectedIndustry("All Industries");
                }}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Mentors;
