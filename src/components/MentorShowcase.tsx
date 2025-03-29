
import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { MentorCard } from "./MentorCard";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Loader } from "lucide-react";
import { useMentors } from "@/hooks/use-mentors";
import { Skeleton } from "@/components/ui/skeleton";

export const MentorShowcase = () => {
  // For a real implementation, this would handle pagination or scrolling
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Fetch mentors data using React Query
  const { data: mentors, isLoading, error } = useMentors();
  
  const maxSlides = mentors ? Math.ceil(mentors.length / 4) - 1 : 0;
  
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };
  
  const handleNextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlides));
  };
  
  // Show loading state while data is being fetched
  if (isLoading) {
    return (
      <section id="mentors" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Meet Our Mentors</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-stargaze-900 dark:text-white mb-6">
              Learn from Industry Experts
            </h3>
            <div className="flex justify-center">
              <Loader className="h-8 w-8 animate-spin text-primary" />
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  // Show error state if fetch fails
  if (error) {
    return (
      <section id="mentors" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-destructive uppercase tracking-wider mb-3">Error</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-stargaze-900 dark:text-white mb-6">
              Could not load mentors
            </h3>
            <p className="text-stargaze-600 dark:text-stargaze-400">
              Please try again later or contact support if the problem persists.
            </p>
          </div>
        </div>
      </section>
    );
  }
  
  // If we have mentors data, display them
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
            {mentors && mentors.slice(0, 4).map((mentor, index) => (
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
