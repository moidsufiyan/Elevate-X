
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Home, Search, BookOpen, Users, Rocket } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const quickLinks = [
    { name: "Home", icon: <Home className="w-4 h-4 mr-2" />, path: "/" },
    { name: "Mentors", icon: <Users className="w-4 h-4 mr-2" />, path: "/mentors" },
    { name: "Resources", icon: <BookOpen className="w-4 h-4 mr-2" />, path: "/resources" },
    { name: "Communities", icon: <Users className="w-4 h-4 mr-2" />, path: "/communities" },
    { name: "Startups", icon: <Rocket className="w-4 h-4 mr-2" />, path: "/startup-showcase" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-20">
        <AnimatedSection className="container px-6 text-center">
          <h1 className="text-6xl font-bold text-stargaze-900 dark:text-white mb-4">404</h1>
          <p className="text-2xl text-stargaze-600 dark:text-stargaze-300 mb-8">
            Oops! We couldn't find the page you were looking for.
          </p>
          <p className="text-lg text-stargaze-500 dark:text-stargaze-400 mb-12">
            The path <span className="font-mono bg-stargaze-100 dark:bg-stargaze-800 px-2 py-1 rounded">{location.pathname}</span> doesn't exist.
          </p>
          
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-stargaze-800 dark:text-stargaze-200">
              Quick Navigation
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {quickLinks.map((link) => (
                <Link to={link.path} key={link.path}>
                  <Button variant="outline" className="flex items-center">
                    {link.icon}
                    {link.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
          
          <Link to="/">
            <Button size="lg" className="px-8">
              <Home className="w-5 h-5 mr-2" /> Return to Home
            </Button>
          </Link>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
