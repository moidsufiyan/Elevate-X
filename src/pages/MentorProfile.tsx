
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { MentorProfileForm } from "@/components/mentor/MentorProfileForm";

const MentorProfile = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-stargaze-900 dark:text-white mb-4">
              Create Your Mentor Profile
            </h1>
            <p className="text-lg text-stargaze-600 dark:text-stargaze-300 max-w-3xl mx-auto">
              Share your expertise with ambitious entrepreneurs. 
              Complete your profile to connect with startups seeking guidance in your area of expertise.
            </p>
          </AnimatedSection>
          
          <AnimatedSection 
            animation="fade-up" 
            delay={100} 
            className="bg-white dark:bg-stargaze-900 shadow-subtle rounded-xl p-6 md:p-10 max-w-5xl mx-auto"
          >
            <MentorProfileForm />
          </AnimatedSection>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MentorProfile;
