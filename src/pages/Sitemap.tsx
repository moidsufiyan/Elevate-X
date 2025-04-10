
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";
import { SEO } from "@/components/SEO";

const Sitemap = () => {
  const sitemapSections = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/blog" },
        { name: "Press", href: "/press" },
      ]
    },
    {
      title: "Platform Features",
      links: [
        { name: "Mentor Directory", href: "/mentors" },
        { name: "Mentor Detail", href: "/mentor/1" },
        { name: "Mentor Booking", href: "/mentor/1/book" },
        { name: "Mentorship Matching", href: "/mentorship-matching" },
        { name: "Resource Library", href: "/resources" },
        { name: "Startup Showcase", href: "/startup-showcase" },
        { name: "Community Hub", href: "/community" },
        { name: "Communities List", href: "/communities" },
      ]
    },
    {
      title: "User Account",
      links: [
        { name: "Login/Signup", href: "/auth" },
        { name: "User Profile", href: "/profile" },
        { name: "Startup Profile", href: "/startup-profile" },
        { name: "Mentor Profile", href: "/mentor-profile" },
        { name: "Mentor Dashboard", href: "/mentor-dashboard" },
      ]
    },
    {
      title: "Legal Pages",
      links: [
        { name: "Privacy Policy", href: "/legal/privacy-policy" },
        { name: "Terms of Service", href: "/legal/terms-of-service" },
        { name: "Cookie Policy", href: "/legal/cookie-policy" },
        { name: "Data Processing", href: "/legal/data-processing" },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Sitemap" 
        description="Navigate all pages and resources available on Elevate X platform." 
        keywords="sitemap, navigation, mentor platform, startup resources"
      />
      <Navbar />
      <main className="pt-24 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-stargaze-900 dark:text-white mb-4">
              Sitemap
            </h1>
            <Separator className="mb-8" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sitemapSections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-semibold text-stargaze-900 dark:text-white mb-4">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.href}
                        className="flex items-center gap-2 text-stargaze-600 dark:text-stargaze-400 hover:text-primary dark:hover:text-primary transition-colors"
                      >
                        <ChevronRight className="h-4 w-4" />
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-16">
            <h2 className="text-xl font-semibold text-stargaze-900 dark:text-white mb-4">
              Feature Sections
            </h2>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/#features"
                  className="flex items-center gap-2 text-stargaze-600 dark:text-stargaze-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  <ChevronRight className="h-4 w-4" />
                  <span>Platform Features</span>
                </a>
              </li>
              <li>
                <a 
                  href="/#mentors"
                  className="flex items-center gap-2 text-stargaze-600 dark:text-stargaze-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  <ChevronRight className="h-4 w-4" />
                  <span>Featured Mentors</span>
                </a>
              </li>
              <li>
                <a 
                  href="/#startups"
                  className="flex items-center gap-2 text-stargaze-600 dark:text-stargaze-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  <ChevronRight className="h-4 w-4" />
                  <span>Featured Startups</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sitemap;
