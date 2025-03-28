
import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { MentorCard } from "./MentorCard";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Sample mentor data
const mentors = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechVentures",
    expertise: ["SaaS", "Leadership", "Funding"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    available: true,
    tags: ["Marketing Expert", "Tech Founder"],
    badges: [{ label: "Top Mentor", variant: "default" }],
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "CTO",
    company: "InnovateLabs",
    expertise: ["AI", "Machine Learning", "Product Strategy"],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    available: false,
    tags: ["AI Expert", "Product Specialist"],
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    role: "Venture Partner",
    company: "Summit Capital",
    expertise: ["Investment", "Scaling", "Market Analysis"],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    available: true,
    tags: ["Angel Investor", "Growth Strategy"],
    badges: [{ label: "Featured", variant: "secondary" }],
  },
  {
    id: "4",
    name: "David Park",
    role: "Marketing Director",
    company: "Growth Accelerator",
    expertise: ["Growth Marketing", "Brand Strategy", "Digital Ads"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    available: true,
    tags: ["Marketing Expert", "Growth Hacker"],
  },
];

export const MentorShowcase = () => {
  // For a real implementation, this would handle pagination or scrolling
  const [currentSlide, setCurrentSlide] = useState(0);
  const maxSlides = Math.ceil(mentors.length / 4) - 1;
  
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };
  
  const handleNextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlides));
  };
  
  return (
    <section id="mentors" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-stargaze-50/50 to-transparent dark:from-stargaze-950/50" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection threshold={0.1} className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Meet Our Mentors</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-stargaze-900 dark:text-white mb-6">
            Learn from Industry Experts
          </h3>
          <p className="max-w-2xl mx-auto text-stargaze-600 dark:text-stargaze-300 text-lg">
            Connect with experienced professionals who are passionate about helping entrepreneurs succeed.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Link to="/mentors">
              <Button>Browse All Mentors</Button>
            </Link>
            <Link to="/mentorship-matching">
              <Button variant="outline">Find Perfect Match</Button>
            </Link>
          </div>
        </AnimatedSection>
        
        <div className="relative">
          {/* Mentors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {mentors.map((mentor, index) => (
              <AnimatedSection
                key={mentor.id}
                threshold={0.1}
                delay={100 + index * 100}
              >
                <MentorCard mentor={mentor} />
              </AnimatedSection>
            ))}
          </div>
          
          {/* Navigation Buttons - For larger implementations with more mentors */}
          <div className="flex justify-center mt-12 space-x-4">
            <Button
              variant="outline"
              size="sm"
              leftIcon={<ChevronLeft className="h-4 w-4" />}
              onClick={handlePrevSlide}
              disabled={currentSlide === 0}
              className="opacity-70 hover:opacity-100"
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              rightIcon={<ChevronRight className="h-4 w-4" />}
              onClick={handleNextSlide}
              disabled={currentSlide >= maxSlides}
              className="opacity-70 hover:opacity-100"
            >
              Next
            </Button>
          </div>
          
          {/* View All Button */}
          <div className="text-center mt-8">
            <Link to="/mentors">
              <Button>View All Mentors</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
