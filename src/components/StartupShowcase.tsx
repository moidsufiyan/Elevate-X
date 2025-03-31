
import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { StartupCard } from "./startup/StartupCard";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { ArrowRight, Loader } from "lucide-react";
import { useStartups } from "@/hooks/use-startups";

// Number of startups to show on the homepage
const MAX_STARTUPS_DISPLAY = 3;

export const StartupShowcase = () => {
  // Fetch startups data using React Query with enhanced caching
  const { data: startups, isLoading, error } = useStartups();

  // Show loading state while data is being fetched
  if (isLoading) {
    return (
      <section id="startups" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Startup Showcase</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-stargaze-900 dark:text-white mb-6">
              Discover Promising Startups
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
      <section id="startups" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-destructive uppercase tracking-wider mb-3">Error</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-stargaze-900 dark:text-white mb-6">
              Could not load startups
            </h3>
            <p className="text-stargaze-600 dark:text-stargaze-400">
              Please try again later or contact support if the problem persists.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Take only the first few startups to display on the homepage
  const displayedStartups = startups && startups.slice(0, MAX_STARTUPS_DISPLAY);

  return (
    <section id="startups" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-stargaze-50/50 to-transparent dark:from-stargaze-950/50" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection threshold={0.1} className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Startup Showcase</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-stargaze-900 dark:text-white mb-6">
            Discover Promising Startups
          </h3>
          <p className="max-w-2xl mx-auto text-stargaze-600 dark:text-stargaze-300 text-lg">
            Connect with innovative startups across various industries and find your next investment opportunity.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {displayedStartups && displayedStartups.map((startup, index) => (
            <AnimatedSection
              key={startup.id}
              threshold={0.1}
              delay={100 + index * 100}
            >
              <StartupCard startup={startup} />
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection threshold={0.1} delay={400} className="text-center mt-12">
          <Link to="/startup-showcase">
            <Button rightIcon={<ArrowRight className="h-4 w-4" />}>
              View All Startups ({startups ? startups.length : 0})
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};
