
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const careerOpenings = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    department: "Engineering",
    description: "We're looking for an experienced frontend developer to help build our next-generation mentorship platform.",
    requirements: [
      "5+ years experience in frontend development",
      "Expert knowledge of React, TypeScript, and state management",
      "Experience with responsive design and UI/UX principles",
      "Knowledge of modern frontend tooling and build systems"
    ]
  },
  {
    id: "2",
    title: "Community Manager",
    location: "Remote",
    type: "Full-time",
    department: "Community",
    description: "Help grow and nurture our community of entrepreneurs and mentors.",
    requirements: [
      "3+ years experience in community management",
      "Strong communication and interpersonal skills",
      "Experience organizing virtual and in-person events",
      "Passion for startups and entrepreneurship"
    ]
  },
  {
    id: "3",
    title: "Marketing Specialist",
    location: "New York, NY",
    type: "Full-time",
    department: "Marketing",
    description: "Drive our marketing strategies to increase platform engagement and user acquisition.",
    requirements: [
      "3+ years experience in digital marketing",
      "Experience with B2B SaaS marketing",
      "Strong analytical skills and data-driven approach",
      "Experience with content marketing and social media"
    ]
  },
  {
    id: "4",
    title: "Product Manager",
    location: "San Francisco, CA",
    type: "Full-time",
    department: "Product",
    description: "Lead product development initiatives to enhance our mentorship platform.",
    requirements: [
      "4+ years experience in product management",
      "Experience working with engineering and design teams",
      "Strong understanding of user research and analytics",
      "Experience with agile methodologies"
    ]
  }
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-12 max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-stargaze-900 dark:text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-stargaze-600 dark:text-stargaze-300">
              Help us build the future of startup mentorship and entrepreneurial success.
              We're looking for talented individuals who are passionate about innovation.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={100} className="mb-20">
            <div className="bg-primary text-white rounded-xl overflow-hidden shadow-subtle">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-6">Why Join Startup Stargaze?</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-sm font-bold">✓</span>
                      </div>
                      <p>Make an impact on the entrepreneurial ecosystem</p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-sm font-bold">✓</span>
                      </div>
                      <p>Work with a diverse team of passionate individuals</p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-sm font-bold">✓</span>
                      </div>
                      <p>Flexible work arrangements and competitive compensation</p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-sm font-bold">✓</span>
                      </div>
                      <p>Professional growth and development opportunities</p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-sm font-bold">✓</span>
                      </div>
                      <p>Comprehensive health benefits and equity packages</p>
                    </li>
                  </ul>
                </div>
                <div className="h-64 md:h-auto overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Team collaboration" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={200} className="mb-16">
            <h2 className="text-3xl font-bold text-stargaze-900 dark:text-white mb-8 text-center">
              Open Positions
            </h2>
            
            <div className="space-y-6">
              {careerOpenings.map((job) => (
                <div 
                  key={job.id}
                  className="bg-white dark:bg-stargaze-900 rounded-xl shadow-subtle border border-stargaze-100 dark:border-stargaze-800 overflow-hidden"
                >
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white mb-2 md:mb-0">
                        {job.title}
                      </h3>
                      <div className="flex items-center flex-wrap gap-2">
                        <Badge variant="secondary">{job.location}</Badge>
                        <Badge variant="outline">{job.type}</Badge>
                        <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                          {job.department}
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-stargaze-600 dark:text-stargaze-300 mb-4">
                      {job.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-stargaze-900 dark:text-white mb-2">
                        Requirements:
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 text-stargaze-600 dark:text-stargaze-300">
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex justify-end">
                      <Link to={`/careers/${job.id}`}>
                        <Button>Apply Now</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={300} className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-stargaze-900 dark:text-white mb-4">
              Don't see a role that matches your skills?
            </h2>
            <p className="text-stargaze-600 dark:text-stargaze-300 mb-6">
              We're always looking for talented individuals to join our team. 
              Send us your resume and we'll keep it on file for future opportunities.
            </p>
            <Link to="/contact">
              <Button variant="outline" size="lg">Contact Us</Button>
            </Link>
          </AnimatedSection>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
