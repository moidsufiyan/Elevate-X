
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { ChevronRight, Star } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-2/3 -right-24 w-96 h-96 bg-stargaze-accent/10 rounded-full blur-3xl" />
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Chip */}
          <AnimatedSection
            className="inline-block mb-6"
            threshold={0.1}
          >
            <div className="bg-background border border-stargaze-200 dark:border-stargaze-800 rounded-full px-4 py-1.5 text-sm font-medium text-stargaze-600 dark:text-stargaze-300 shadow-subtle">
              <span className="flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 text-stargaze-accent animate-pulse-subtle" fill="currentColor" />
                Connecting Startups with Mentors
              </span>
            </div>
          </AnimatedSection>

          {/* Headline */}
          <AnimatedSection
            className="mb-6"
            threshold={0.1}
            delay={100}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight md:leading-tight bg-clip-text text-transparent bg-gradient-to-b from-stargaze-900 to-stargaze-700 dark:from-white dark:to-stargaze-300">
              Launch Your Startup With Expert Guidance
            </h1>
          </AnimatedSection>

          {/* Subheadline */}
          <AnimatedSection
            className="mb-10"
            threshold={0.1}
            delay={200}
          >
            <p className="text-lg sm:text-xl text-stargaze-600 dark:text-stargaze-300 max-w-2xl mx-auto">
              Connect with experienced mentors and investors who can help turn your vision into reality. Access resources, get feedback, and join a community of innovators.
            </p>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            threshold={0.1}
            delay={300}
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto"
              rightIcon={<ChevronRight className="h-4 w-4" />}
            >
              Find a Mentor
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto"
            >
              Explore Resources
            </Button>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection
            className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
            threshold={0.1}
            delay={400}
            staggerChildren={true}
          >
            {[
              { label: "Startup Founders", value: "2,500+" },
              { label: "Expert Mentors", value: "500+" },
              { label: "Success Stories", value: "150+" }
            ].map((stat, index) => (
              <div key={index} className="appear-animation">
                <div className={cn(
                  "glass rounded-xl py-5 px-3 h-full",
                  "border border-white/20 dark:border-white/5"
                )}>
                  <div className="font-display font-bold text-2xl sm:text-3xl text-stargaze-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-stargaze-600 dark:text-stargaze-400">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};
