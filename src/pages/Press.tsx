
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Download, ExternalLink, FileText } from "lucide-react";

const pressReleases = [
  {
    id: "1",
    title: "Startup Stargaze Raises $5M in Seed Funding",
    date: "July 15, 2023",
    excerpt: "Funding will accelerate platform development and expand mentor network to support more startups globally."
  },
  {
    id: "2",
    title: "Startup Stargaze Launches New Mentorship Matching Algorithm",
    date: "May 3, 2023",
    excerpt: "New AI-powered system increases successful mentor-startup matches by 40%, according to early data."
  },
  {
    id: "3",
    title: "Startup Stargaze Expands to European Market",
    date: "March 22, 2023",
    excerpt: "Platform now available in 12 European countries with localized mentor networks and resources."
  },
  {
    id: "4",
    title: "Startup Stargaze Partners with Leading Venture Capital Firms",
    date: "February 8, 2023",
    excerpt: "Strategic partnerships will provide platform users with direct access to funding opportunities."
  }
];

const mediaFeatures = [
  {
    outlet: "TechCrunch",
    title: "How Startup Stargaze is Democratizing Access to Startup Mentorship",
    date: "June 2023",
    link: "#"
  },
  {
    outlet: "Forbes",
    title: "The Future of Startup Mentorship: Startup Stargaze's Innovative Approach",
    date: "May 2023",
    link: "#"
  },
  {
    outlet: "Entrepreneur",
    title: "5 Platforms Transforming How Entrepreneurs Get Guidance - Startup Stargaze Leads the Pack",
    date: "April 2023",
    link: "#"
  },
  {
    outlet: "Business Insider",
    title: "This Startup is Making Elite Mentorship Accessible to Entrepreneurs Everywhere",
    date: "March 2023",
    link: "#"
  }
];

const Press = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-12 max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-stargaze-900 dark:text-white mb-6">
              Press & Media
            </h1>
            <p className="text-xl text-stargaze-600 dark:text-stargaze-300">
              Latest news, press releases, and media coverage about Startup Stargaze.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={100} className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3 bg-white dark:bg-stargaze-900 p-8 rounded-xl shadow-subtle">
                <h2 className="text-2xl font-bold text-stargaze-900 dark:text-white mb-6">
                  Press Releases
                </h2>
                
                <div className="space-y-8">
                  {pressReleases.map((press) => (
                    <div key={press.id} className="border-b border-stargaze-100 dark:border-stargaze-800 pb-6 last:border-b-0">
                      <p className="text-sm text-stargaze-500 dark:text-stargaze-400 mb-2">
                        {press.date}
                      </p>
                      <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white mb-2">
                        {press.title}
                      </h3>
                      <p className="text-stargaze-600 dark:text-stargaze-300 mb-4">
                        {press.excerpt}
                      </p>
                      <Link to={`/press/${press.id}`}>
                        <Button variant="outline" size="sm" className="gap-2">
                          <FileText className="h-4 w-4" /> Read Full Release
                        </Button>
                      </Link>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <Link to="/press/archive">
                    <Button variant="ghost">View All Press Releases</Button>
                  </Link>
                </div>
              </div>
              
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white dark:bg-stargaze-900 p-8 rounded-xl shadow-subtle">
                  <h2 className="text-2xl font-bold text-stargaze-900 dark:text-white mb-6">
                    Media Contact
                  </h2>
                  
                  <div className="mb-6">
                    <h3 className="font-medium text-stargaze-900 dark:text-white">
                      Press Inquiries
                    </h3>
                    <p className="text-stargaze-600 dark:text-stargaze-300">
                      <a href="mailto:press@startupstargaze.com" className="text-primary hover:underline">
                        press@startupstargaze.com
                      </a>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-stargaze-900 dark:text-white">
                      Media Relations
                    </h3>
                    <p className="text-stargaze-600 dark:text-stargaze-300">
                      Emma Barnes<br />
                      Director of Communications<br />
                      <a href="tel:+14155551234" className="text-primary hover:underline">
                        +1 (415) 555-1234
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-stargaze-900 p-8 rounded-xl shadow-subtle">
                  <h2 className="text-xl font-bold text-stargaze-900 dark:text-white mb-6">
                    Media Resources
                  </h2>
                  
                  <ul className="space-y-4">
                    <li>
                      <a href="#" className="flex items-center gap-3 text-stargaze-600 dark:text-stargaze-300 hover:text-primary transition-colors">
                        <Download className="h-5 w-5" />
                        <span>Company Logo Pack</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center gap-3 text-stargaze-600 dark:text-stargaze-300 hover:text-primary transition-colors">
                        <Download className="h-5 w-5" />
                        <span>Press Kit</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center gap-3 text-stargaze-600 dark:text-stargaze-300 hover:text-primary transition-colors">
                        <Download className="h-5 w-5" />
                        <span>Product Screenshots</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center gap-3 text-stargaze-600 dark:text-stargaze-300 hover:text-primary transition-colors">
                        <Download className="h-5 w-5" />
                        <span>Executive Bios & Photos</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={200} className="mb-20">
            <h2 className="text-2xl font-bold text-stargaze-900 dark:text-white mb-6 text-center">
              Media Coverage
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mediaFeatures.map((feature, index) => (
                <div key={index} className="bg-white dark:bg-stargaze-900 p-6 rounded-xl shadow-subtle border border-stargaze-100 dark:border-stargaze-800">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-primary">
                      {feature.outlet}
                    </h3>
                    <p className="text-sm text-stargaze-500 dark:text-stargaze-400">
                      {feature.date}
                    </p>
                  </div>
                  
                  <p className="text-stargaze-900 dark:text-white font-medium mb-4">
                    {feature.title}
                  </p>
                  
                  <a 
                    href={feature.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    Read Article <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              ))}
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={300} className="bg-primary text-white rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Interested in Covering Our Story?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              We'd love to share how we're transforming the startup mentorship landscape.
              Our team is available for interviews and expert commentary.
            </p>
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Get in Touch
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Press;
