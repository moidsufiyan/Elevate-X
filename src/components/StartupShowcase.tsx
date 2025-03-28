
import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { StartupCard } from "./startup/StartupCard";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Sample startup data (subset of what's in the full page)
const featuredStartups = [
  {
    id: "1",
    name: "EcoHarvest",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    industry: "AgTech",
    location: "California, USA",
    fundingStage: "Seed",
    shortPitch: "Sustainable farming solutions using IoT and AI to optimize crop yields while reducing environmental impact.",
    interestedCount: 24,
    tags: ["Sustainability", "AgTech", "IoT"],
  },
  {
    id: "4",
    name: "UrbanMobility",
    logo: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    industry: "Transportation",
    location: "Berlin, Germany",
    fundingStage: "Series B",
    shortPitch: "Electric micromobility solutions for urban environments to reduce congestion and emissions.",
    interestedCount: 52,
    tags: ["Transportation", "Electric", "Sustainable"],
  },
  {
    id: "2",
    name: "MindfulAI",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    industry: "HealthTech",
    location: "Boston, USA",
    fundingStage: "Series A",
    shortPitch: "Mental health platform using AI to provide personalized therapy and wellness recommendations.",
    interestedCount: 41,
    tags: ["Mental Health", "AI", "Healthcare"],
  },
];

export const StartupShowcase = () => {
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
          {featuredStartups.map((startup, index) => (
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
              View All Startups
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};
