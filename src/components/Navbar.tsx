import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Search,
  Bell,
  User,
  Menu,
  X,
  Lightbulb,
  Users,
  BookOpen,
  Award,
  Globe,
  ChevronRight,
  FileUp,
  Calendar,
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useAuth } from "@/hooks/useAuth.tsx";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();

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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-2 bg-white/90 dark:bg-stargaze-950/90 backdrop-blur-lg shadow-md"
          : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-2 text-2xl font-bold tracking-tight"
          aria-label="Elevate X Home"
        >
          <span className="text-primary">Elevate</span>
          <span className="dark:text-white">X</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {/* Main Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link
                  to="/"
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-colors",
                    isActive("/")
                      ? "text-primary"
                      : "text-stargaze-600 dark:text-stargaze-300 hover:text-stargaze-900 dark:hover:text-white"
                  )}
                >
                  Home
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "text-sm font-medium bg-transparent",
                    isActive("/mentors")
                      ? "text-primary"
                      : "text-stargaze-600 dark:text-stargaze-300"
                  )}
                >
                  Mentors
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <div>
                      <Link
                        to="/mentors"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="flex items-center gap-2 text-sm font-medium leading-none">
                          <Users className="h-4 w-4" /> Browse All Mentors
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Find industry experts to guide your startup journey
                        </p>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="/mentor-dashboard"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="flex items-center gap-2 text-sm font-medium leading-none">
                          <Award className="h-4 w-4" /> Become a Mentor
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Share your expertise and help startups succeed
                        </p>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="/mentorship-matching"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="flex items-center gap-2 text-sm font-medium leading-none">
                          <Lightbulb className="h-4 w-4" /> Mentorship Matching
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Get matched with the perfect mentor for your needs
                        </p>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="/mentor/1/book"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="flex items-center gap-2 text-sm font-medium leading-none">
                          <Calendar className="h-4 w-4" /> Book a Session
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Schedule time with available mentors
                        </p>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "text-sm font-medium bg-transparent",
                    isActive("/resources")
                      ? "text-primary"
                      : "text-stargaze-600 dark:text-stargaze-300"
                  )}
                >
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    <Link
                      to="/resources"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      <div className="flex items-center gap-2 text-sm font-medium leading-none">
                        <BookOpen className="h-4 w-4" /> Resource Library
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Browse our collection of guides, templates and tools
                      </p>
                    </Link>
                    <Link
                      to="/blog"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      <div className="flex items-center gap-2 text-sm font-medium leading-none">
                        <BookOpen className="h-4 w-4" /> Blog
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Insights and articles on startup trends and growth
                        strategies
                      </p>
                    </Link>
                    <Link
                      to="/file-upload-guide"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      <div className="flex items-center gap-2 text-sm font-medium leading-none">
                        <FileUp className="h-4 w-4" /> File Sharing Guide
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Learn how to share documents with your mentors
                      </p>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "text-sm font-medium bg-transparent",
                    isActive("/community")
                      ? "text-primary"
                      : "text-stargaze-600 dark:text-stargaze-300"
                  )}
                >
                  Community
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    <Link
                      to="/community"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      <div className="flex items-center gap-2 text-sm font-medium leading-none">
                        <Globe className="h-4 w-4" /> Community Hub
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Connect with fellow founders and startup enthusiasts
                      </p>
                    </Link>
                    <Link
                      to="/communities"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      <div className="flex items-center gap-2 text-sm font-medium leading-none">
                        <Users className="h-4 w-4" /> Explore Communities
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Find specialized groups in your industry or interest
                        area
                      </p>
                    </Link>
                    <Link
                      to="/messaging"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      <div className="flex items-center gap-2 text-sm font-medium leading-none">
                        <FileUp className="h-4 w-4" /> Share Files
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Upload and share documents with mentors
                      </p>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  to="/startup-showcase"
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-colors",
                    isActive("/startup-showcase")
                      ? "text-primary"
                      : "text-stargaze-600 dark:text-stargaze-300 hover:text-stargaze-900 dark:hover:text-white"
                  )}
                >
                  Startups
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="relative">
            <input
              type="search"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-48 px-4 py-2 rounded-full bg-stargaze-50 dark:bg-stargaze-900 border border-stargaze-200 dark:border-stargaze-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Search"
            />
            <Button
              type="submit"
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-stargaze-600 dark:text-stargaze-300"
              aria-label="Submit search"
            >
              <Search className="h-4 w-4" />
            </Button>
          </form>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              className="text-stargaze-600 dark:text-stargaze-300"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
            </Button>
            <ThemeToggle />
            <Link to={user ? "/profile" : "/auth"}>
              <Button
                variant="ghost"
                size="icon"
                className="text-stargaze-600 dark:text-stargaze-300"
                aria-label="Profile"
              >
                <User className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white dark:bg-stargaze-950 z-40">
          <div className="container mx-auto px-4 py-6">
            <form onSubmit={handleSearch} className="mb-6">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 rounded-full bg-stargaze-50 dark:bg-stargaze-900 border border-stargaze-200 dark:border-stargaze-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Search"
                />
                <Button
                  type="submit"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-stargaze-600 dark:text-stargaze-300"
                  aria-label="Submit search"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </form>

            <nav className="space-y-4">
              <Link
                to="/"
                className={cn(
                  "block px-4 py-2 text-sm font-medium rounded-lg",
                  isActive("/")
                    ? "text-primary bg-primary/10"
                    : "text-stargaze-600 dark:text-stargaze-300 hover:bg-stargaze-50 dark:hover:bg-stargaze-900"
                )}
              >
                Home
              </Link>

              <Link
                to="/mentors"
                className={cn(
                  "block px-4 py-2 text-sm font-medium rounded-lg",
                  isActive("/mentors")
                    ? "text-primary bg-primary/10"
                    : "text-stargaze-600 dark:text-stargaze-300 hover:bg-stargaze-50 dark:hover:bg-stargaze-900"
                )}
              >
                Mentors
              </Link>

              {/* Add other mobile menu items... */}

              <div className="pt-4 border-t border-stargaze-200 dark:border-stargaze-800">
                <div className="flex items-center justify-between px-4">
                  <span className="text-sm font-medium text-stargaze-600 dark:text-stargaze-300">
                    Theme
                  </span>
                  <ThemeToggle />
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};
