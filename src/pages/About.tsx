
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-12 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-stargaze-900 dark:text-white mb-6">
              About Startup Stargaze
            </h1>
            <p className="text-xl text-stargaze-600 dark:text-stargaze-300 mb-8">
              We're on a mission to connect promising startups with experienced mentors 
              to drive innovation and entrepreneurial success.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={100} className="mb-20">
            <div className="bg-white dark:bg-stargaze-900 rounded-xl shadow-subtle overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl font-bold text-stargaze-900 dark:text-white mb-6">Our Story</h2>
                  <p className="text-stargaze-600 dark:text-stargaze-300 mb-4">
                    Startup Stargaze was founded in 2020 with a simple goal: to help startup founders 
                    overcome the challenges that prevent great ideas from becoming successful businesses.
                  </p>
                  <p className="text-stargaze-600 dark:text-stargaze-300 mb-4">
                    After seeing countless promising startups fail due to preventable mistakes, 
                    our founders decided to create a platform that connects entrepreneurs with 
                    the mentorship, resources, and community they need to thrive.
                  </p>
                  <p className="text-stargaze-600 dark:text-stargaze-300">
                    Today, we've helped over 500 startups connect with mentors, secure funding, 
                    and build sustainable businesses.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-primary/80 to-primary h-64 lg:h-auto flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Team collaboration" 
                    className="mix-blend-overlay object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={200} className="mb-20">
            <h2 className="text-3xl font-bold text-stargaze-900 dark:text-white mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-stargaze-900 p-8 rounded-xl shadow-subtle">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white mb-3">
                  Community First
                </h3>
                <p className="text-stargaze-600 dark:text-stargaze-300">
                  We believe entrepreneurship thrives in supportive communities. 
                  We prioritize building meaningful connections between founders, 
                  mentors, and investors.
                </p>
              </div>
              
              <div className="bg-white dark:bg-stargaze-900 p-8 rounded-xl shadow-subtle">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white mb-3">
                  Knowledge Sharing
                </h3>
                <p className="text-stargaze-600 dark:text-stargaze-300">
                  We're committed to democratizing access to startup expertise. 
                  We believe that shared knowledge and experience are crucial to 
                  entrepreneurial success.
                </p>
              </div>
              
              <div className="bg-white dark:bg-stargaze-900 p-8 rounded-xl shadow-subtle">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white mb-3">
                  Diversity & Inclusion
                </h3>
                <p className="text-stargaze-600 dark:text-stargaze-300">
                  We're dedicated to creating opportunities for entrepreneurs from 
                  all backgrounds. We actively work to reduce barriers to entry in 
                  the startup ecosystem.
                </p>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={300} className="mb-20 text-center">
            <h2 className="text-3xl font-bold text-stargaze-900 dark:text-white mb-6">Join Our Community</h2>
            <p className="text-xl text-stargaze-600 dark:text-stargaze-300 mb-8 max-w-2xl mx-auto">
              Whether you're a startup founder looking for guidance or an experienced 
              mentor wanting to give back, there's a place for you in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button size="lg" className="px-8">Start Your Journey</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="px-8">Contact Us</Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
