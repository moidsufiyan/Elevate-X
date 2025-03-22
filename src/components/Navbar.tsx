
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { Menu, X, User, Bell, Search } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Mentors", path: "/mentors" },
  { name: "Resources", path: "/resources" },
  { name: "Community", path: "/community" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-white/80 dark:bg-stargaze-950/80 backdrop-blur-lg shadow-subtle"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-2 text-2xl font-bold tracking-tight"
        >
          <span className="text-primary">Startup</span>
          <span>Stargaze</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="animated-underline text-sm font-medium text-stargaze-600 dark:text-stargaze-300 hover:text-stargaze-900 dark:hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <button className="text-stargaze-600 dark:text-stargaze-300 hover:text-stargaze-900 dark:hover:text-white transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-stargaze-600 dark:text-stargaze-300 hover:text-stargaze-900 dark:hover:text-white transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            <Link to="/profile">
              <button className="text-stargaze-600 dark:text-stargaze-300 hover:text-stargaze-900 dark:hover:text-white transition-colors">
                <User className="h-5 w-5" />
              </button>
            </Link>
            <Link to="/auth">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </Link>
            <Link to="/auth">
              <Button size="sm">Sign up</Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="block md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-stargaze-600 dark:text-stargaze-300" />
          ) : (
            <Menu className="h-6 w-6 text-stargaze-600 dark:text-stargaze-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-[57px] bg-white/95 dark:bg-stargaze-950/95 backdrop-blur-lg z-40 transition-transform duration-300 ease-in-out transform md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container mx-auto px-6 py-8 flex flex-col space-y-8">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-lg font-medium text-stargaze-600 dark:text-stargaze-300 hover:text-stargaze-900 dark:hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4 mb-6">
            <button className="p-2 rounded-full bg-stargaze-100 dark:bg-stargaze-800 text-stargaze-600 dark:text-stargaze-300">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full bg-stargaze-100 dark:bg-stargaze-800 text-stargaze-600 dark:text-stargaze-300">
              <Bell className="h-5 w-5" />
            </button>
            <Link to="/profile" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="p-2 rounded-full bg-stargaze-100 dark:bg-stargaze-800 text-stargaze-600 dark:text-stargaze-300">
                <User className="h-5 w-5" />
              </button>
            </Link>
          </div>
          <div className="flex flex-col space-y-3">
            <Link to="/auth" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-center">
                Log in
              </Button>
            </Link>
            <Link to="/auth" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full justify-center">Sign up</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
