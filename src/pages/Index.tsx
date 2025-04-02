
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { MentorShowcase } from "@/components/MentorShowcase";
import { StartupShowcase } from "@/components/StartupShowcase";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

const Index = () => {
  useEffect(() => {
    // Handle smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    // Add a class to body when page is loaded for global animations
    document.body.classList.add('page-loaded');
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      document.body.classList.remove('page-loaded');
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <AnimatedSection animation="fade-in" duration="normal" delay={100}>
          <Hero />
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" duration="normal" delay={200} id="features">
          <Features />
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" duration="normal" delay={300} staggerChildren id="mentors">
          <MentorShowcase />
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" duration="normal" delay={400} staggerChildren id="startups">
          <StartupShowcase />
        </AnimatedSection>
      </main>
      <AnimatedSection animation="fade-in" duration="slow" delay={500}>
        <Footer />
      </AnimatedSection>
    </div>
  );
};

export default Index;
