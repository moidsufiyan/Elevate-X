import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { MentorShowcase } from "@/components/MentorShowcase";
import { StartupShowcase } from "@/components/StartupShowcase";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Calendar,
  FileUp,
  Users,
  Award,
  Flag,
  Globe,
} from "lucide-react";
import { SEO } from "@/components/SEO";

const Index = () => {
  useEffect(() => {
    // Handle smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const id = target.getAttribute("href")?.substring(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // Add a class to body when page is loaded for global animations
    document.body.classList.add("page-loaded");

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      document.body.classList.remove("page-loaded");
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Elevate X | Connect with Expert Startup Mentors"
        description="Get guidance from experienced startup mentors. Book sessions, access resources, and accelerate your entrepreneurial journey."
        keywords="startup mentors, mentorship, entrepreneurship, founder coaching, startup advice"
      />
      <Navbar />
      <main>
        <AnimatedSection animation="fade-in" duration="normal" delay={100}>
          <Hero />
        </AnimatedSection>

        <AnimatedSection
          animation="fade-up"
          duration="normal"
          delay={200}
          id="features"
        >
          <Features />
        </AnimatedSection>

        {/* Implemented Features Showcase */}
        <AnimatedSection animation="fade-up" duration="normal" delay={250}>
          <section className="py-24 px-4 sm:px-6 bg-white dark:bg-stargaze-950 border-t border-stargaze-100 dark:border-stargaze-800">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                  Platform Features
                </h2>
                <h3 className="text-3xl sm:text-4xl font-bold text-stargaze-900 dark:text-white mb-6">
                  Everything You Need to Succeed
                </h3>
                <p className="max-w-2xl mx-auto text-stargaze-600 dark:text-stargaze-300 text-lg">
                  Our platform provides a comprehensive suite of tools to help
                  you connect with mentors and grow your startup.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Feature Card: Booking */}
                <div className="bg-white dark:bg-stargaze-900 rounded-xl p-6 border border-stargaze-100 dark:border-stargaze-800 shadow-sm group hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white mb-3">
                    Calendar Booking
                  </h3>
                  <p className="text-stargaze-600 dark:text-stargaze-400 mb-4">
                    Book sessions with your favorite mentors using our intuitive
                    calendar interface.
                  </p>
                  <Link
                    to="/mentor/1/book"
                    className="inline-flex items-center text-primary hover:text-primary/80"
                  >
                    <span>Try it now</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>

                {/* Feature Card: File Upload */}
                <div className="bg-white dark:bg-stargaze-900 rounded-xl p-6 border border-stargaze-100 dark:border-stargaze-800 shadow-sm group hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    <FileUp className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white mb-3">
                    File Sharing
                  </h3>
                  <p className="text-stargaze-600 dark:text-stargaze-400 mb-4">
                    Share documents, presentations, and images directly in your
                    mentor sessions.
                  </p>
                  <Link
                    to="/messaging"
                    className="inline-flex items-center text-primary hover:text-primary/80"
                  >
                    <span>Try messaging</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>

                {/* Feature Card: SEO */}
                <div className="bg-white dark:bg-stargaze-900 rounded-xl p-6 border border-stargaze-100 dark:border-stargaze-800 shadow-sm group hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    <Globe className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white mb-3">
                    SEO Optimized
                  </h3>
                  <p className="text-stargaze-600 dark:text-stargaze-400 mb-4">
                    Our platform is fully optimized for search engines to help
                    your profile get discovered.
                  </p>
                  <Link
                    to="/sitemap"
                    className="inline-flex items-center text-primary hover:text-primary/80"
                  >
                    <span>View sitemap</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Coming Soon Features */}
              <div className="mt-16 text-center">
                <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white mb-6">
                  Coming Soon
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="px-4 py-2 bg-stargaze-100 dark:bg-stargaze-800 rounded-full flex items-center">
                    <Users className="h-4 w-4 mr-2 text-stargaze-500 dark:text-stargaze-400" />
                    <span className="text-sm text-stargaze-700 dark:text-stargaze-300">
                      Community Forums
                    </span>
                  </div>
                  <div className="px-4 py-2 bg-stargaze-100 dark:bg-stargaze-800 rounded-full flex items-center">
                    <Award className="h-4 w-4 mr-2 text-stargaze-500 dark:text-stargaze-400" />
                    <span className="text-sm text-stargaze-700 dark:text-stargaze-300">
                      Achievement Badges
                    </span>
                  </div>
                  <div className="px-4 py-2 bg-stargaze-100 dark:bg-stargaze-800 rounded-full flex items-center">
                    <Flag className="h-4 w-4 mr-2 text-stargaze-500 dark:text-stargaze-400" />
                    <span className="text-sm text-stargaze-700 dark:text-stargaze-300">
                      Content Moderation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Call to Action Section */}
        <AnimatedSection animation="fade-up" duration="normal" delay={250}>
          <section className="relative bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 py-24 px-4 sm:px-6 overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-30">
              <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <defs>
                  <pattern
                    id="grid"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 10 0 L 0 0 0 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      opacity="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            <div className="max-w-5xl mx-auto relative z-10">
              <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-stargaze-900 dark:text-white mb-6">
                  Ready to accelerate your startup journey?
                </h2>
                <p className="text-lg text-stargaze-600 dark:text-stargaze-300 max-w-2xl mx-auto mb-8">
                  Join thousands of founders who have found mentorship,
                  resources, and community support through our platform.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/auth">
                    <Button
                      size="lg"
                      className="gap-2"
                      rightIcon={<ArrowRight className="h-4 w-4" />}
                    >
                      Get Started
                    </Button>
                  </Link>
                  <Link to="/mentors">
                    <Button size="lg" variant="outline">
                      Find a Mentor
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection
          animation="fade-up"
          duration="normal"
          delay={300}
          staggerChildren
          id="mentors"
        >
          <MentorShowcase />
          <div className="text-center mt-8 mb-16">
            <Link to="/mentors">
              <Button
                size="lg"
                variant="outline"
                className="gap-2"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                View All Mentors
              </Button>
            </Link>
          </div>
        </AnimatedSection>

        {/* Testimonial Section */}
        <AnimatedSection animation="fade-up" duration="normal" delay={350}>
          <section className="py-20 px-4 sm:px-6 bg-white dark:bg-stargaze-950 border-y border-stargaze-100 dark:border-stargaze-800">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-stargaze-900 dark:text-white">
                  Trusted by innovative founders
                </h2>
                <p className="mt-4 text-lg text-stargaze-600 dark:text-stargaze-400">
                  Here's what some of our successful startups have to say
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Testimonial 1 */}
                <div className="bg-white dark:bg-stargaze-900 p-6 rounded-xl shadow-sm border border-stargaze-100 dark:border-stargaze-800">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-stargaze-600 dark:text-stargaze-300 mb-4">
                    "The mentorship I received through Elevate X was
                    instrumental in helping us raise our seed round. Our
                    mentor's guidance saved us months of trial and error."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-stargaze-200 dark:bg-stargaze-700 flex items-center justify-center text-stargaze-600 dark:text-stargaze-300 font-bold">
                      AH
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-stargaze-900 dark:text-white">
                        Alex Henderson
                      </p>
                      <p className="text-xs text-stargaze-500">CEO, TechFlow</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-white dark:bg-stargaze-900 p-6 rounded-xl shadow-sm border border-stargaze-100 dark:border-stargaze-800">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-stargaze-600 dark:text-stargaze-300 mb-4">
                    "The file sharing feature makes it easy to collaborate with
                    my mentor. We can review business plans and presentations in
                    real-time during our sessions."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-stargaze-200 dark:bg-stargaze-700 flex items-center justify-center text-stargaze-600 dark:text-stargaze-300 font-bold">
                      SJ
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-stargaze-900 dark:text-white">
                        Sarah Johnson
                      </p>
                      <p className="text-xs text-stargaze-500">
                        Founder, EcoSolutions
                      </p>
                    </div>
                  </div>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-white dark:bg-stargaze-900 p-6 rounded-xl shadow-sm border border-stargaze-100 dark:border-stargaze-800">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-stargaze-600 dark:text-stargaze-300 mb-4">
                    "Finding the right mentor match through Elevate X changed
                    everything for our business. Within 6 months, we doubled our
                    revenue and expanded to new markets."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-stargaze-200 dark:bg-stargaze-700 flex items-center justify-center text-stargaze-600 dark:text-stargaze-300 font-bold">
                      DR
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-stargaze-900 dark:text-white">
                        David Rodriguez
                      </p>
                      <p className="text-xs text-stargaze-500">
                        CTO, DataInsight
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Benefits Section */}
        <AnimatedSection animation="fade-up" duration="normal" delay={400}>
          <section className="py-20 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-stargaze-900 dark:text-white mb-4">
                  Why join our platform?
                </h2>
                <p className="text-lg text-stargaze-600 dark:text-stargaze-400 max-w-3xl mx-auto">
                  Elevate X provides everything founders need to build and scale
                  their businesses successfully.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Benefit 1 */}
                <div className="bg-white dark:bg-stargaze-900 rounded-xl p-6 border border-stargaze-100 dark:border-stargaze-800 shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white mb-2">
                    Expert Mentorship
                  </h3>
                  <p className="text-stargaze-600 dark:text-stargaze-400 mb-4">
                    Connect with industry experts who have built successful
                    companies and can guide you through challenges.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-stargaze-600 dark:text-stargaze-400">
                      <CheckCircle className="h-4 w-4 text-green-500" />{" "}
                      Personalized guidance
                    </li>
                    <li className="flex items-center gap-2 text-sm text-stargaze-600 dark:text-stargaze-400">
                      <CheckCircle className="h-4 w-4 text-green-500" />{" "}
                      Strategic advice
                    </li>
                    <li className="flex items-center gap-2 text-sm text-stargaze-600 dark:text-stargaze-400">
                      <CheckCircle className="h-4 w-4 text-green-500" />{" "}
                      Industry connections
                    </li>
                  </ul>
                </div>

                {/* Benefit 2 */}
                <div className="bg-white dark:bg-stargaze-900 rounded-xl p-6 border border-stargaze-100 dark:border-stargaze-800 shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white mb-2">
                    Comprehensive Resources
                  </h3>
                  <p className="text-stargaze-600 dark:text-stargaze-400 mb-4">
                    Access a vast library of guides, templates, and tools
                    specifically designed for startup success.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-stargaze-600 dark:text-stargaze-400">
                      <CheckCircle className="h-4 w-4 text-green-500" /> Startup
                      templates
                    </li>
                    <li className="flex items-center gap-2 text-sm text-stargaze-600 dark:text-stargaze-400">
                      <CheckCircle className="h-4 w-4 text-green-500" />{" "}
                      Fundraising guides
                    </li>
                    <li className="flex items-center gap-2 text-sm text-stargaze-600 dark:text-stargaze-400">
                      <CheckCircle className="h-4 w-4 text-green-500" /> Growth
                      strategies
                    </li>
                  </ul>
                </div>

                {/* Benefit 3 */}
                <div className="bg-white dark:bg-stargaze-900 rounded-xl p-6 border border-stargaze-100 dark:border-stargaze-800 shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white mb-2">
                    Supportive Community
                  </h3>
                  <p className="text-stargaze-600 dark:text-stargaze-400 mb-4">
                    Join a network of like-minded founders and entrepreneurs to
                    share experiences and insights.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-stargaze-600 dark:text-stargaze-400">
                      <CheckCircle className="h-4 w-4 text-green-500" /> Peer
                      support
                    </li>
                    <li className="flex items-center gap-2 text-sm text-stargaze-600 dark:text-stargaze-400">
                      <CheckCircle className="h-4 w-4 text-green-500" />{" "}
                      Collaboration opportunities
                    </li>
                    <li className="flex items-center gap-2 text-sm text-stargaze-600 dark:text-stargaze-400">
                      <CheckCircle className="h-4 w-4 text-green-500" /> Virtual
                      & in-person events
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection
          animation="fade-up"
          duration="normal"
          delay={400}
          staggerChildren
          id="startups"
        >
          <StartupShowcase />
          <div className="text-center mt-8 mb-20">
            <Link to="/startup-showcase">
              <Button
                size="lg"
                variant="outline"
                className="gap-2"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                View All Startups
              </Button>
            </Link>
          </div>
        </AnimatedSection>

        {/* Final CTA */}
        <AnimatedSection animation="fade-up" duration="normal" delay={450}>
          <section className="bg-primary/10 dark:bg-primary/20 py-20 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-stargaze-900 dark:text-white mb-6">
                Ready to take your startup to the next level?
              </h2>
              <p className="text-lg text-stargaze-600 dark:text-stargaze-400 mb-8">
                Join Elevate X today and get access to mentorship, resources,
                and a community that supports your entrepreneurial journey.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/auth">
                  <Button
                    size="lg"
                    className="gap-2"
                    rightIcon={<ArrowRight className="h-4 w-4" />}
                  >
                    Join Now
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>

      <AnimatedSection animation="fade-in" duration="slow" delay={500}>
        <Footer />
      </AnimatedSection>
    </div>
  );
};

export default Index;
