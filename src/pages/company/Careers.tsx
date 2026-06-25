import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const careerOpenings = [
  {
    id: "1",
    title: "Senior Full Stack Developer",
    location: "Hyderabad, Telangana",
    type: "Full-time",
    department: "Engineering",
    salary: "₹15-25 LPA",
    description:
      "Join our engineering team to build scalable solutions for India's largest entrepreneurship platform. You'll work on cutting-edge technologies while making a real impact on the startup ecosystem.",
    requirements: [
      "5+ years experience in full-stack development",
      "Expertise in React, Node.js, TypeScript, and modern databases",
      "Experience with cloud platforms (AWS/Azure) and microservices",
      "Understanding of scalable architecture and performance optimization",
      "Strong problem-solving skills and startup mindset",
    ],
    benefits: [
      "Competitive salary with equity options",
      "Flexible work from home policy",
      "Health insurance for family",
      "Learning & development budget",
    ],
  },
  {
    id: "2",
    title: "Community Growth Manager",
    location: "Mumbai, Maharashtra / Remote",
    type: "Full-time",
    department: "Community",
    salary: "₹8-15 LPA",
    description:
      "Lead community initiatives to build India's most vibrant entrepreneurship ecosystem. You'll organize events, engage with founders, and create meaningful connections.",
    requirements: [
      "3+ years experience in community building or event management",
      "Deep understanding of Indian startup ecosystem",
      "Excellent communication skills in English and Hindi",
      "Experience with social media platforms and community tools",
      "Passion for connecting entrepreneurs and mentors",
    ],
    benefits: [
      "Travel opportunities across India",
      "Network with top entrepreneurs",
      "Flexible working hours",
      "Event planning budget",
    ],
  },
  {
    id: "3",
    title: "Growth Marketing Specialist",
    location: "Bangalore, Karnataka",
    type: "Full-time",
    department: "Marketing",
    salary: "₹10-18 LPA",
    description:
      "Drive user acquisition and engagement for ElevateX across digital channels. Focus on performance marketing, content strategy, and partnership marketing.",
    requirements: [
      "3+ years experience in digital marketing or growth hacking",
      "Hands-on experience with Google Ads, Facebook Ads, LinkedIn",
      "Strong analytical skills with tools like Google Analytics, Mixpanel",
      "Content creation and social media marketing experience",
      "Understanding of B2B and B2C marketing funnels",
    ],
    benefits: [
      "Marketing budget to experiment",
      "Performance-based bonuses",
      "Access to premium marketing tools",
      "Conference attendance opportunities",
    ],
  },
  {
    id: "4",
    title: "Product Manager - Mentorship",
    location: "Gurgaon, Haryana",
    type: "Full-time",
    department: "Product",
    salary: "₹18-30 LPA",
    description:
      "Own the product strategy for our mentorship platform. Work closely with entrepreneurs and mentors to build features that create meaningful connections.",
    requirements: [
      "4+ years experience in product management",
      "Experience with B2B SaaS or marketplace products",
      "Strong user research and data analysis skills",
      "Understanding of Indian business culture and practices",
      "Experience working with engineering and design teams",
    ],
    benefits: [
      "Direct impact on product direction",
      "Work with industry leaders",
      "Stock options",
      "Flexible PTO policy",
    ],
  },
  {
    id: "5",
    title: "Business Development Manager",
    location: "Delhi NCR",
    type: "Full-time",
    department: "Business",
    salary: "₹12-20 LPA",
    description:
      "Build strategic partnerships with corporations, educational institutions, and government bodies to expand ElevateX's reach across India.",
    requirements: [
      "3+ years experience in business development or partnerships",
      "Strong network in Indian corporate or startup ecosystem",
      "Excellent negotiation and presentation skills",
      "MBA from tier-1/tier-2 institutes preferred",
      "Willingness to travel across India",
    ],
    benefits: [
      "Commission on successful partnerships",
      "Travel allowance",
      "Networking opportunities",
      "Leadership development programs",
    ],
  },
  {
    id: "6",
    title: "Content & Social Media Manager",
    location: "Pune, Maharashtra / Remote",
    type: "Full-time",
    department: "Marketing",
    salary: "₹6-12 LPA",
    description:
      "Create compelling content that showcases success stories, mentorship insights, and startup journeys. Manage our social media presence across platforms.",
    requirements: [
      "2+ years experience in content marketing or social media",
      "Excellent writing skills in English and regional languages",
      "Experience with video content creation and editing",
      "Understanding of LinkedIn, Twitter, Instagram, YouTube",
      "Knowledge of Indian startup ecosystem and business trends",
    ],
    benefits: [
      "Creative freedom",
      "Content creation tools and software",
      "Collaboration with industry experts",
      "Personal branding opportunities",
    ],
  },
];

const Careers = () => {
  return (
    <>
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-12 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-stargaze-900 dark:text-white mb-6">
              Join the ElevateX Team
            </h1>
            <p className="text-xl md:text-2xl text-stargaze-600 dark:text-stargaze-300 mb-6">
              Help us build India's most impactful entrepreneurship platform
            </p>
            <p className="text-lg text-stargaze-500 dark:text-stargaze-400 max-w-3xl mx-auto">
              We're on a mission to democratize entrepreneurship across India.
              Join a team of passionate individuals working to connect every
              aspiring entrepreneur with the right mentors, resources, and
              opportunities to build successful businesses.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100} className="mb-20">
            <div className="bg-primary text-white rounded-xl overflow-hidden shadow-subtle">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-6">
                    Why Join ElevateX?
                  </h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-sm font-bold">✓</span>
                      </div>
                      <p>
                        Shape India's entrepreneurial future and impact millions
                        of founders
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-sm font-bold">✓</span>
                      </div>
                      <p>
                        Work with industry leaders, successful entrepreneurs,
                        and top mentors
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-sm font-bold">✓</span>
                      </div>
                      <p>
                        Flexible work culture with remote options and work-life
                        balance
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-sm font-bold">✓</span>
                      </div>
                      <p>
                        Competitive Indian market salaries with equity and
                        performance bonuses
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-sm font-bold">✓</span>
                      </div>
                      <p>
                        Comprehensive benefits, learning budget, and career
                        growth opportunities
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-sm font-bold">✓</span>
                      </div>
                      <p>
                        Be part of India's fastest-growing startup community
                        platform
                      </p>
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
                      <div>
                        <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white mb-1">
                          {job.title}
                        </h3>
                        <p className="text-lg font-medium text-green-600 dark:text-green-400">
                          {job.salary}
                        </p>
                      </div>
                      <div className="flex items-center flex-wrap gap-2 mt-2 md:mt-0">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-sm font-medium text-stargaze-900 dark:text-white mb-2">
                          Requirements:
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-stargaze-600 dark:text-stargaze-300">
                          {job.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-stargaze-900 dark:text-white mb-2">
                          What We Offer:
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-stargaze-600 dark:text-stargaze-300">
                          {job.benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
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

          {/* Company Culture Section */}
          <AnimatedSection animation="fade-up" delay={300} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-stargaze-900 dark:text-white mb-4">
                Our Culture & Values
              </h2>
              <p className="text-lg text-stargaze-600 dark:text-stargaze-300 max-w-3xl mx-auto">
                At ElevateX, we believe in fostering an environment where
                innovation thrives, collaboration is key, and every team member
                can make a meaningful impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-stargaze-900 rounded-xl p-6 shadow-subtle border border-stargaze-100 dark:border-stargaze-800">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white mb-3">
                  Innovation First
                </h3>
                <p className="text-stargaze-600 dark:text-stargaze-300">
                  We encourage creative thinking and bold ideas. Every team
                  member is empowered to propose solutions and drive innovation
                  in their domain.
                </p>
              </div>

              <div className="bg-white dark:bg-stargaze-900 rounded-xl p-6 shadow-subtle border border-stargaze-100 dark:border-stargaze-800">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white mb-3">
                  Collaborative Spirit
                </h3>
                <p className="text-stargaze-600 dark:text-stargaze-300">
                  We work together across teams, departments, and time zones.
                  Our success comes from collective effort and shared knowledge.
                </p>
              </div>

              <div className="bg-white dark:bg-stargaze-900 rounded-xl p-6 shadow-subtle border border-stargaze-100 dark:border-stargaze-800">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white mb-3">
                  Growth Mindset
                </h3>
                <p className="text-stargaze-600 dark:text-stargaze-300">
                  We invest in our people's growth through learning
                  opportunities, mentorship, and challenging projects that
                  expand skills and career prospects.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Perks & Benefits Section */}
          <AnimatedSection animation="fade-up" delay={400} className="mb-20">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-stargaze-900 dark:to-stargaze-800 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-stargaze-900 dark:text-white mb-4">
                  Perks & Benefits
                </h2>
                <p className="text-lg text-stargaze-600 dark:text-stargaze-300 max-w-2xl mx-auto">
                  We believe in taking care of our team members so they can
                  focus on doing their best work.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">💰</span>
                  </div>
                  <h3 className="font-semibold text-stargaze-900 dark:text-white mb-2">
                    Competitive Salary
                  </h3>
                  <p className="text-sm text-stargaze-600 dark:text-stargaze-300">
                    Market-leading compensation with performance bonuses
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏥</span>
                  </div>
                  <h3 className="font-semibold text-stargaze-900 dark:text-white mb-2">
                    Health Insurance
                  </h3>
                  <p className="text-sm text-stargaze-600 dark:text-stargaze-300">
                    Comprehensive health coverage for you and your family
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏠</span>
                  </div>
                  <h3 className="font-semibold text-stargaze-900 dark:text-white mb-2">
                    Flexible Work
                  </h3>
                  <p className="text-sm text-stargaze-600 dark:text-stargaze-300">
                    Remote work options and flexible hours
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📚</span>
                  </div>
                  <h3 className="font-semibold text-stargaze-900 dark:text-white mb-2">
                    Learning Budget
                  </h3>
                  <p className="text-sm text-stargaze-600 dark:text-stargaze-300">
                    Annual budget for courses, conferences, and books
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Application Process Section */}
          <AnimatedSection animation="fade-up" delay={500} className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-stargaze-900 dark:text-white mb-4">
                Our Hiring Process
              </h2>
              <p className="text-lg text-stargaze-600 dark:text-stargaze-300 max-w-2xl mx-auto">
                We've designed our hiring process to be transparent, fair, and
                focused on finding the right fit for both you and our team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  1
                </div>
                <h3 className="font-semibold text-stargaze-900 dark:text-white mb-2">
                  Application Review
                </h3>
                <p className="text-sm text-stargaze-600 dark:text-stargaze-300">
                  We review your application and portfolio within 48 hours
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  2
                </div>
                <h3 className="font-semibold text-stargaze-900 dark:text-white mb-2">
                  Initial Screening
                </h3>
                <p className="text-sm text-stargaze-600 dark:text-stargaze-300">
                  30-minute call to discuss your background and the role
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  3
                </div>
                <h3 className="font-semibold text-stargaze-900 dark:text-white mb-2">
                  Technical Interview
                </h3>
                <p className="text-sm text-stargaze-600 dark:text-stargaze-300">
                  Role-specific assessment and team collaboration exercise
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  4
                </div>
                <h3 className="font-semibold text-stargaze-900 dark:text-white mb-2">
                  Final Interview
                </h3>
                <p className="text-sm text-stargaze-600 dark:text-stargaze-300">
                  Meet the team and discuss culture fit and career goals
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection
            animation="fade-up"
            delay={600}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-stargaze-900 dark:text-white mb-4">
              Don't see a role that matches your skills?
            </h2>
            <p className="text-stargaze-600 dark:text-stargaze-300 mb-6">
              We're always looking for talented individuals to join our team.
              Send us your resume and we'll keep it on file for future
              opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Send Your Resume
                </Button>
              </Link>
              <Button size="lg">Join Our Talent Pool</Button>
            </div>
          </AnimatedSection>
        </div>
      </main>
    </>);
};

export default Careers;

