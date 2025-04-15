
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
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
  Calendar
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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
                <Link to="/" className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors",
                  isActive("/")
                    ? "text-primary"
                    : "text-stargaze-600 dark:text-stargaze-300 hover:text-stargaze-900 dark:hover:text-white"
                )}>
                  Home
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  "text-sm font-medium bg-transparent",
                  isActive("/mentors") ? "text-primary" : "text-stargaze-600 dark:text-stargaze-300"
                )}>
                  Mentors
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <div>
                      <Link to="/mentors" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                        <div className="flex items-center gap-2 text-sm font-medium leading-none">
                          <Users className="h-4 w-4" /> Browse All Mentors
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Find industry experts to guide your startup journey
                        </p>
                      </Link>
                    </div>
                    <div>
                      <Link to="/mentor-dashboard" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                        <div className="flex items-center gap-2 text-sm font-medium leading-none">
                          <Award className="h-4 w-4" /> Become a Mentor
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Share your expertise and help startups succeed
                        </p>
                      </Link>
                    </div>
                    <div>
                      <Link to="/mentorship-matching" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                        <div className="flex items-center gap-2 text-sm font-medium leading-none">
                          <Lightbulb className="h-4 w-4" /> Mentorship Matching
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Get matched with the perfect mentor for your needs
                        </p>
                      </Link>
                    </div>
                    <div>
                      <Link to="/mentor/1/book" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
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
                <NavigationMenuTrigger className={cn(
                  "text-sm font-medium bg-transparent",
                  isActive("/resources") ? "text-primary" : "text-stargaze-600 dark:text-stargaze-300"
                )}>
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    <Link to="/resources" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                      <div className="flex items-center gap-2 text-sm font-medium leading-none">
                        <BookOpen className="h-4 w-4" /> Resource Library
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Browse our collection of guides, templates and tools
                      </p>
                    </Link>
                    <Link to="/blog" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                      <div className="flex items-center gap-2 text-sm font-medium leading-none">
                        <BookOpen className="h-4 w-4" /> Blog
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Insights and articles on startup trends and growth strategies
                      </p>
                    </Link>
                    <Link to="/file-upload-guide" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
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
                <NavigationMenuTrigger className={cn(
                  "text-sm font-medium bg-transparent",
                  isActive("/community") ? "text-primary" : "text-stargaze-600 dark:text-stargaze-300"
                )}>
                  Community
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    <Link to="/community" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                      <div className="flex items-center gap-2 text-sm font-medium leading-none">
                        <Globe className="h-4 w-4" /> Community Hub
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Connect with fellow founders and startup enthusiasts
                      </p>
                    </Link>
                    <Link to="/communities" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                      <div className="flex items-center gap-2 text-sm font-medium leading-none">
                        <Users className="h-4 w-4" /> Explore Communities
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Find specialized groups in your industry or interest area
                      </p>
                    </Link>
                    <Link to="/messaging" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
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
                <Link to="/startup-showcase" className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors",
                  isActive("/startup-showcase")
                    ? "text-primary"
                    : "text-stargaze-600 dark:text-stargaze-300 hover:text-stargaze-900 dark:hover:text-white"
                )}>
                  Startups
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <Link to="/resources">
              <Button variant="ghost" size="icon" className="text-stargaze-600 dark:text-stargaze-300">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="text-stargaze-600 dark:text-stargaze-300">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <ThemeToggle />
            <Link to="/profile">
              <Button variant="ghost" size="icon" className="text-stargaze-600 dark:text-stargaze-300">
                <User className="h-5 w-5" />
                <span className="sr-only">Profile</span>
              </Button>
            </Link>
            <Link to="/auth">
              <Button variant="outline" size="sm" className="ml-2">
                Log in
              </Button>
            </Link>
            <Link to="/auth">
              <Button size="sm">
                Sign up
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center space-x-3 lg:hidden">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 text-stargaze-600 dark:text-stargaze-300" />
            ) : (
              <Menu className="h-5 w-5 text-stargaze-600 dark:text-stargaze-300" />
            )}
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-[60px] bg-white/95 dark:bg-stargaze-950/95 backdrop-blur-lg z-40 transition-transform duration-300 ease-in-out transform lg:hidden overflow-y-auto",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col space-y-6">
          <div className="flex flex-col space-y-1">
            <Link
              to="/"
              className={cn(
                "flex items-center justify-between p-3 rounded-md",
                isActive("/")
                  ? "bg-primary/10 text-primary"
                  : "text-stargaze-600 dark:text-stargaze-300 hover:bg-primary/5"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-base font-medium">Home</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
            
            <div className="px-3 pt-4 pb-2">
              <h3 className="text-xs uppercase font-semibold text-stargaze-500 tracking-wider">Mentors</h3>
            </div>
            <Link
              to="/mentors"
              className={cn(
                "flex items-center justify-between p-3 rounded-md",
                isActive("/mentors")
                  ? "bg-primary/10 text-primary"
                  : "text-stargaze-600 dark:text-stargaze-300 hover:bg-primary/5"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="text-base font-medium">Browse All Mentors</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              to="/mentor-dashboard"
              className={cn(
                "flex items-center justify-between p-3 rounded-md",
                isActive("/mentor-dashboard")
                  ? "bg-primary/10 text-primary"
                  : "text-stargaze-600 dark:text-stargaze-300 hover:bg-primary/5"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                <span className="text-base font-medium">Become a Mentor</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              to="/mentorship-matching"
              className={cn(
                "flex items-center justify-between p-3 rounded-md",
                isActive("/mentorship-matching")
                  ? "bg-primary/10 text-primary"
                  : "text-stargaze-600 dark:text-stargaze-300 hover:bg-primary/5"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="flex items-center gap-2">
                <Lightbulb className="h-4 w-4" />
                <span className="text-base font-medium">Mentorship Matching</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              to="/mentor/1/book"
              className={cn(
                "flex items-center justify-between p-3 rounded-md",
                isActive("/mentor/1/book")
                  ? "bg-primary/10 text-primary"
                  : "text-stargaze-600 dark:text-stargaze-300 hover:bg-primary/5"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span className="text-base font-medium">Book a Session</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Link>
            
            <div className="px-3 pt-4 pb-2">
              <h3 className="text-xs uppercase font-semibold text-stargaze-500 tracking-wider">Resources</h3>
            </div>
            <Link
              to="/resources"
              className={cn(
                "flex items-center justify-between p-3 rounded-md",
                isActive("/resources")
                  ? "bg-primary/10 text-primary"
                  : "text-stargaze-600 dark:text-stargaze-300 hover:bg-primary/5"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span className="text-base font-medium">Resource Library</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              to="/blog"
              className={cn(
                "flex items-center justify-between p-3 rounded-md",
                isActive("/blog")
                  ? "bg-primary/10 text-primary"
                  : "text-stargaze-600 dark:text-stargaze-300 hover:bg-primary/5"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span className="text-base font-medium">Blog</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              to="/file-upload-guide"
              className={cn(
                "flex items-center justify-between p-3 rounded-md",
                isActive("/file-upload-guide")
                  ? "bg-primary/10 text-primary"
                  : "text-stargaze-600 dark:text-stargaze-300 hover:bg-primary/5"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="flex items-center gap-2">
                <FileUp className="h-4 w-4" />
                <span className="text-base font-medium">File Sharing Guide</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Link>
            
            <div className="px-3 pt-4 pb-2">
              <h3 className="text-xs uppercase font-semibold text-stargaze-500 tracking-wider">Community</h3>
            </div>
            <Link
              to="/community"
              className={cn(
                "flex items-center justify-between p-3 rounded-md",
                isActive("/community")
                  ? "bg-primary/10 text-primary"
                  : "text-stargaze-600 dark:text-stargaze-300 hover:bg-primary/5"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span className="text-base font-medium">Community Hub</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              to="/communities"
              className={cn(
                "flex items-center justify-between p-3 rounded-md",
                isActive("/communities")
                  ? "bg-primary/10 text-primary"
                  : "text-stargaze-600 dark:text-stargaze-300 hover:bg-primary/5"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="text-base font-medium">Explore Communities</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              to="/messaging"
              className={cn(
                "flex items-center justify-between p-3 rounded-md",
                isActive("/messaging")
                  ? "bg-primary/10 text-primary"
                  : "text-stargaze-600 dark:text-stargaze-300 hover:bg-primary/5"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="flex items-center gap-2">
                <FileUp className="h-4 w-4" />
                <span className="text-base font-medium">Share Files</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Link>
            
            <div className="px-3 pt-4 pb-2">
              <h3 className="text-xs uppercase font-semibold text-stargaze-500 tracking-wider">Startups</h3>
            </div>
            <Link
              to="/startup-showcase"
              className={cn(
                "flex items-center justify-between p-3 rounded-md",
                isActive("/startup-showcase")
                  ? "bg-primary/10 text-primary"
                  : "text-stargaze-600 dark:text-stargaze-300 hover:bg-primary/5"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-base font-medium">Startup Showcase</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="pt-4 flex flex-col space-y-4 border-t border-stargaze-200 dark:border-stargaze-800">
            <Link to="/auth" onClick={() => setIsMobileMenuOpen(false)} className="w-full">
              <Button variant="outline" className="w-full justify-center">
                Log in
              </Button>
            </Link>
            <Link to="/auth" onClick={() => setIsMobileMenuOpen(false)} className="w-full">
              <Button className="w-full justify-center">
                Sign up
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-stargaze-200 dark:border-stargaze-800">
            <Link to="/profile" className="flex items-center gap-2 p-2 rounded-md hover:bg-primary/5">
              <User className="h-5 w-5" />
              <span className="text-sm font-medium">Profile</span>
            </Link>
            <div className="flex items-center gap-2">
              <Link to="/resources">
                <Button variant="ghost" size="icon" className="text-stargaze-600 dark:text-stargaze-300">
                  <Search className="h-5 w-5" />
                </Button>
              </Link>
              <Button variant="ghost" size="icon" className="text-stargaze-600 dark:text-stargaze-300">
                <Bell className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
