
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";
import { Search, BookOpen, FileText, Video, Download, Star, ArrowRight, Calendar, Bookmark, BookmarkCheck } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Resource data
const resources = [
  {
    id: "1",
    title: "Ultimate Pitch Deck Template",
    type: "template",
    category: "Fundraising",
    description: "A comprehensive pitch deck template that has helped startups raise over $50M in funding.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    downloadCount: 3752,
    rating: 4.8,
    premium: true,
    pdfUrl: "/resources/ultimate-pitch-deck-template.pdf",
  },
  {
    id: "2",
    title: "User Research Handbook",
    type: "guide",
    category: "Product Development",
    description: "Learn how to conduct effective user research that leads to actionable insights for your product.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    downloadCount: 2856,
    rating: 4.7,
    premium: false,
    pdfUrl: "/resources/user-research-handbook.pdf",
  },
  {
    id: "3",
    title: "From Idea to MVP in 30 Days",
    type: "video",
    category: "Product Development",
    description: "A step-by-step video course on how to validate your idea and build a minimum viable product quickly.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    downloadCount: 1843,
    rating: 4.9,
    premium: true,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "4",
    title: "Startup Financial Model",
    type: "template",
    category: "Finance",
    description: "A comprehensive financial model template for startups to forecast revenue, expenses, and growth.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2011&q=80",
    downloadCount: 4215,
    rating: 4.6,
    premium: true,
    pdfUrl: "/resources/startup-financial-model.pdf",
  },
  {
    id: "5",
    title: "Growth Hacking Strategies",
    type: "guide",
    category: "Marketing",
    description: "Learn proven growth hacking techniques that have helped startups acquire millions of users.",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    downloadCount: 3156,
    rating: 4.7,
    premium: false,
    pdfUrl: "/resources/growth-hacking-strategies.pdf",
  },
  {
    id: "6",
    title: "Building a Remote Team",
    type: "video",
    category: "Operations",
    description: "A comprehensive guide to building and managing high-performing remote teams for your startup.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    downloadCount: 1589,
    rating: 4.5,
    premium: false,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

// Filter categories
const categories = ["All", "Fundraising", "Marketing", "Product Development", "Finance", "Operations", "Legal"];
const types = ["All Types", "Guide", "Template", "Video"];

const ResourceCard = ({ resource, onBookmarkToggle, isBookmarked }: { 
  resource: typeof resources[0]; 
  onBookmarkToggle: (id: string) => void;
  isBookmarked: boolean;
}) => {
  const { toast } = useToast();
  
  const getTypeIcon = () => {
    switch (resource.type) {
      case "guide":
        return <BookOpen className="h-4 w-4" />;
      case "template":
        return <FileText className="h-4 w-4" />;
      case "video":
        return <Video className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const handleResourceAction = () => {
    if (resource.premium) {
      toast({
        title: "Premium Content",
        description: "This is a premium resource. Please upgrade your account to access it.",
      });
      return;
    }

    if (resource.type === "video" && resource.videoUrl) {
      window.open(resource.videoUrl, "_blank");
      toast({
        title: "Video Opening",
        description: "Opening video in a new tab.",
      });
    } else if (resource.pdfUrl) {
      // Simulate PDF download
      toast({
        title: "Download Started",
        description: `${resource.title} is being downloaded.`,
      });
      // In a real app, you would trigger an actual download here
      const link = document.createElement("a");
      link.href = resource.pdfUrl;
      link.download = resource.title;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-2xl transition-all duration-500 h-full",
        "bg-white dark:bg-stargaze-900",
        "border border-stargaze-100 dark:border-stargaze-800",
        "shadow-subtle hover:shadow-md",
        "flex flex-col"
      )}
    >
      {/* Bookmark Button */}
      <button 
        onClick={(e) => {
          e.stopPropagation();
          onBookmarkToggle(resource.id);
          toast({
            title: isBookmarked ? "Removed from Bookmarks" : "Added to Bookmarks",
            description: isBookmarked ? 
              `${resource.title} has been removed from your bookmarks.` : 
              `${resource.title} has been added to your bookmarks.`,
          });
        }}
        className="absolute top-3 right-3 z-10 bg-white/90 dark:bg-stargaze-800/90 p-2 rounded-full shadow-md transition-transform hover:scale-110"
      >
        {isBookmarked ? (
          <BookmarkCheck className="h-5 w-5 text-primary" />
        ) : (
          <Bookmark className="h-5 w-5 text-stargaze-500 dark:text-stargaze-400" />
        )}
      </button>
      
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={resource.image} 
          alt={resource.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {resource.premium && (
          <div className="absolute top-3 left-3 bg-stargaze-accent text-white text-xs px-2 py-1 rounded-full shadow-md">
            Premium
          </div>
        )}
        <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-stargaze-800/90 backdrop-blur-sm text-xs px-2 py-1 rounded-full shadow-md flex items-center gap-1">
          {getTypeIcon()}
          <span className="capitalize">{resource.type}</span>
        </div>
      </div>

      {/* Content */}
      <div className="relative p-5 flex-grow flex flex-col">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-xs py-1 px-2 bg-stargaze-100 dark:bg-stargaze-800 text-stargaze-700 dark:text-stargaze-300 rounded-full">
            {resource.category}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-stargaze-900 dark:text-white mb-2">{resource.title}</h3>
        
        <p className="text-stargaze-600 dark:text-stargaze-400 mb-4 flex-grow">{resource.description}</p>
        
        <div className="flex items-center justify-between text-sm text-stargaze-500 dark:text-stargaze-400 mb-4">
          <div className="flex items-center gap-1">
            <Download className="h-4 w-4" />
            <span>{resource.downloadCount.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
            <span>{resource.rating}</span>
          </div>
        </div>

        {/* CTA Button - Fixed the variant here */}
        <Button 
          variant={resource.premium ? "default" : "outline"} 
          className="w-full justify-center"
          rightIcon={<ArrowRight className="h-4 w-4" />}
          onClick={handleResourceAction}
        >
          {resource.premium ? "Unlock Resource" : resource.type === "video" ? "Watch Now" : "Download Now"}
        </Button>
      </div>
    </div>
  );
};

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All Types");
  const [bookmarkedResources, setBookmarkedResources] = useState<string[]>([]);
  const [showBookmarkedOnly, setShowBookmarkedOnly] = useState(false);
  
  // Load bookmarks from localStorage on component mount
  useEffect(() => {
    const savedBookmarks = localStorage.getItem("bookmarkedResources");
    if (savedBookmarks) {
      setBookmarkedResources(JSON.parse(savedBookmarks));
    }
  }, []);
  
  // Save bookmarks to localStorage when they change
  useEffect(() => {
    localStorage.setItem("bookmarkedResources", JSON.stringify(bookmarkedResources));
  }, [bookmarkedResources]);
  
  // Toggle bookmark
  const toggleBookmark = (id: string) => {
    setBookmarkedResources(prev => {
      if (prev.includes(id)) {
        return prev.filter(bookmarkId => bookmarkId !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  
  // Filter resources based on search query, category, type, and bookmarks
  const filteredResources = resources.filter((resource) => {
    const matchesSearch = 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.type.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      selectedCategory === "All" ||
      resource.category === selectedCategory;
    
    const matchesType = 
      selectedType === "All Types" ||
      resource.type === selectedType.toLowerCase();
    
    const matchesBookmarkFilter = 
      !showBookmarkedOnly ||
      bookmarkedResources.includes(resource.id);
    
    return matchesSearch && matchesCategory && matchesType && matchesBookmarkFilter;
  });
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-b from-stargaze-50 to-white dark:from-stargaze-950 dark:to-stargaze-900">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fade-up" duration="normal">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
                Startup Resources
              </h1>
              <p className="text-stargaze-600 dark:text-stargaze-300 text-lg text-center max-w-3xl mx-auto mb-10">
                Access our library of guides, templates, and videos to help you navigate every aspect of your startup journey.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative mb-12">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-stargaze-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search for resources..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={cn(
                      "w-full pl-12 pr-4 py-3 rounded-full",
                      "bg-white dark:bg-stargaze-800",
                      "border border-stargaze-200 dark:border-stargaze-700",
                      "text-stargaze-900 dark:text-stargaze-200",
                      "focus:outline-none focus:ring-2 focus:ring-primary",
                      "shadow-subtle"
                    )}
                  />
                </div>
              </div>
              
              {/* Filters */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                {/* Category Filter */}
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={cn(
                        "px-3 py-1 rounded-full text-sm font-medium transition-all",
                        selectedCategory === category
                          ? "bg-primary text-white"
                          : "bg-white dark:bg-stargaze-800 text-stargaze-600 dark:text-stargaze-300 hover:bg-stargaze-100 dark:hover:bg-stargaze-700",
                        "border border-stargaze-200 dark:border-stargaze-700",
                      )}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                
                {/* Type Filter */}
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {types.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={cn(
                        "px-3 py-1 rounded-full text-sm font-medium transition-all",
                        selectedType === type
                          ? "bg-stargaze-accent text-white"
                          : "bg-white dark:bg-stargaze-800 text-stargaze-600 dark:text-stargaze-300 hover:bg-stargaze-100 dark:hover:bg-stargaze-700",
                        "border border-stargaze-200 dark:border-stargaze-700",
                      )}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                {/* Bookmarks Filter */}
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => setShowBookmarkedOnly(!showBookmarkedOnly)}
                    className={cn(
                      "px-3 py-1 rounded-full text-sm font-medium transition-all flex items-center gap-1",
                      showBookmarkedOnly
                        ? "bg-primary text-white"
                        : "bg-white dark:bg-stargaze-800 text-stargaze-600 dark:text-stargaze-300 hover:bg-stargaze-100 dark:hover:bg-stargaze-700",
                      "border border-stargaze-200 dark:border-stargaze-700",
                    )}
                  >
                    {showBookmarkedOnly ? (
                      <BookmarkCheck className="h-4 w-4" />
                    ) : (
                      <Bookmark className="h-4 w-4" />
                    )}
                    {showBookmarkedOnly ? "Bookmarked" : "All Resources"}
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        {/* Resources Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <AnimatedSection threshold={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredResources.map((resource, index) => (
                  <AnimatedSection
                    key={resource.id}
                    threshold={0.1}
                    delay={100 + index * 50}
                    className="h-full"
                  >
                    <ResourceCard 
                      resource={resource} 
                      onBookmarkToggle={toggleBookmark}
                      isBookmarked={bookmarkedResources.includes(resource.id)}
                    />
                  </AnimatedSection>
                ))}
              </div>
              
              {filteredResources.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-xl text-stargaze-600 dark:text-stargaze-300">
                    No resources found matching your criteria. Try adjusting your search.
                  </p>
                </div>
              )}
              
              {filteredResources.length > 0 && (
                <div className="text-center mt-16">
                  <Button size="lg">Load More Resources</Button>
                </div>
              )}
            </AnimatedSection>
          </div>
        </section>
        
        {/* Upcoming Webinars */}
        <section className="py-16 bg-stargaze-50 dark:bg-stargaze-900/50">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fade-up" threshold={0.1}>
              <h2 className="text-3xl font-bold text-center mb-12">Upcoming Live Webinars</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((_, index) => (
                  <AnimatedSection 
                    key={index}
                    animation="fade-up"
                    delay={100 + index * 100}
                    className="bg-white dark:bg-stargaze-800 rounded-2xl shadow-subtle overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-primary">
                          {new Date(Date.now() + (index + 1) * 86400000 * 3).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 text-stargaze-900 dark:text-white">
                        {[
                          "How to Build a Product Users Love",
                          "Fundraising Strategies for Early-Stage Startups",
                          "Building a Go-to-Market Strategy That Works"
                        ][index]}
                      </h3>
                      
                      <p className="text-stargaze-600 dark:text-stargaze-300 mb-4">
                        {[
                          "Learn the secrets to building products that users can't live without.",
                          "Discover proven fundraising tactics from VCs and successful founders.",
                          "Create an effective GTM strategy that will help you acquire your first 1000 customers."
                        ][index]}
                      </p>
                      
                      <Button 
                        variant="outline" 
                        className="w-full justify-center"
                        rightIcon={<ArrowRight className="h-4 w-4" />}
                      >
                        Register Now
                      </Button>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;
