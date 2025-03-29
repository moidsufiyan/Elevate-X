
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  Users,
  MessageSquare,
  ThumbsUp,
  Calendar,
  Filter,
  ArrowUpRight,
  MessageCircle,
  TrendingUp,
  Clock,
  Tag,
  Plus,
  ArrowDown,
  ArrowUp,
} from "lucide-react";

// Sample discussion data
const discussions = [
  {
    id: "1",
    title: "Best ways to validate a SaaS idea with minimal resources?",
    author: {
      name: "Alex Johnson",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
      role: "Founder",
      company: "TechFlow"
    },
    category: "Idea Validation",
    content: "I'm working on a SaaS idea targeting small businesses, but I want to validate it before investing too much time and money. What are some quick and cost-effective ways to test if there's genuine market interest?",
    postedAt: "2 hours ago",
    replies: 14,
    upvotes: 28,
    views: 156,
    tags: ["validation", "market-research", "early-stage"]
  },
  {
    id: "2",
    title: "Finding a technical co-founder - advice needed",
    author: {
      name: "Sarah Williams",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
      role: "Founder",
      company: "HealthConnect"
    },
    category: "Co-Founders",
    content: "I've been working on a health tech startup idea for about 6 months and I'm looking for a technical co-founder. I have domain expertise but limited technical skills. Where have you had success finding technical co-founders?",
    postedAt: "1 day ago",
    replies: 23,
    upvotes: 42,
    views: 287,
    tags: ["co-founders", "technical", "partnership"]
  },
  {
    id: "3",
    title: "How to structure equity for early employees?",
    author: {
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      role: "CEO",
      company: "TechVision"
    },
    category: "Team Building",
    content: "We're about to make our first key hires beyond the founding team. What equity ranges are appropriate for early employees (engineer #1, marketing lead, etc.) and what vesting schedule should we use?",
    postedAt: "2 days ago",
    replies: 19,
    upvotes: 31,
    views: 203,
    tags: ["equity", "hiring", "compensation"]
  },
  {
    id: "4",
    title: "Best practice for SaaS pricing strategy?",
    author: {
      name: "Emma Roberts",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      role: "Founder",
      company: "SaaSly"
    },
    category: "Sales & Monetization",
    content: "We're launching our SaaS product next month and finalizing our pricing tiers. Should we offer a freemium plan? What's working well for B2B SaaS products in 2023? Any advice on pricing psychology?",
    postedAt: "3 days ago",
    replies: 27,
    upvotes: 49,
    views: 312,
    tags: ["pricing", "saas", "monetization"]
  },
  {
    id: "5",
    title: "Feedback on our landing page design",
    author: {
      name: "David Park",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      role: "CTO",
      company: "EffcientScale"
    },
    category: "Design & UX",
    content: "We just redesigned our landing page and would love some feedback before we go live. Key goals are improving conversion rate and clearly communicating our value proposition. Link in the comments!",
    postedAt: "4 days ago",
    replies: 16,
    upvotes: 23,
    views: 178,
    tags: ["design", "landing-page", "conversion"]
  },
  {
    id: "6",
    title: "Experience with remote development teams?",
    author: {
      name: "Priya Sharma",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      role: "Product Lead",
      company: "DesignFirst"
    },
    category: "Team Building",
    content: "We're considering hiring remote developers to accelerate our product development. What has your experience been with managing remote development teams? Any recommended platforms or best practices?",
    postedAt: "5 days ago",
    replies: 31,
    upvotes: 38,
    views: 256,
    tags: ["remote-work", "development", "hiring"]
  }
];

// Discussion categories
const categories = [
  "All Categories",
  "Idea Validation",
  "Product Development",
  "Co-Founders",
  "Fundraising",
  "Sales & Monetization",
  "Team Building",
  "Design & UX",
  "Growth & Marketing"
];

// Sort options
const sortOptions = [
  { label: "Most Recent", value: "recent" },
  { label: "Most Popular", value: "popular" },
  { label: "Most Replies", value: "replies" },
  { label: "Most Upvotes", value: "upvotes" }
];

// Community stats
const communityStats = {
  activeMembers: 2843,
  discussions: 1256,
  helpfulResponses: 4782
};

// Sample tags for trending topics
const trendingTopics = [
  "fundraising",
  "user-acquisition",
  "product-market-fit",
  "growth-hacking",
  "remote-work",
  "saas-metrics"
];

const DiscussionCard = ({ discussion }) => {
  const [upvoted, setUpvoted] = useState(false);
  const [upvoteCount, setUpvoteCount] = useState(discussion.upvotes);
  
  const handleUpvote = () => {
    if (upvoted) {
      setUpvoteCount(prev => prev - 1);
    } else {
      setUpvoteCount(prev => prev + 1);
    }
    setUpvoted(!upvoted);
  };
  
  return (
    <Card className="mb-4 hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex gap-4">
          {/* Upvote Column */}
          <div className="flex flex-col items-center">
            <button 
              className={`flex flex-col items-center justify-center w-10 h-16 rounded-md border transition-colors ${
                upvoted 
                  ? 'bg-primary/10 border-primary' 
                  : 'bg-stargaze-50 dark:bg-stargaze-800/50 border-stargaze-200 dark:border-stargaze-700'
              }`}
              onClick={handleUpvote}
            >
              <ArrowUp className={`h-4 w-4 ${upvoted ? 'text-primary' : 'text-stargaze-500'}`} />
              <span className={`text-sm font-medium mt-1 ${upvoted ? 'text-primary' : 'text-stargaze-700 dark:text-stargaze-300'}`}>
                {upvoteCount}
              </span>
            </button>
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-1">
                <Badge variant="outline" className="bg-primary/5">
                  {discussion.category}
                </Badge>
                <span className="text-xs text-stargaze-500 ml-2">{discussion.postedAt}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-stargaze-500">
                <div className="flex items-center">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  {discussion.replies}
                </div>
                <div className="flex items-center">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  {discussion.views}
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-2 text-stargaze-900 dark:text-white">
              {discussion.title}
            </h3>
            
            <p className="text-stargaze-600 dark:text-stargaze-400 mb-4 line-clamp-2">
              {discussion.content}
            </p>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage src={discussion.author.avatar} alt={discussion.author.name} />
                  <AvatarFallback>{discussion.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{discussion.author.name}</p>
                  <p className="text-xs text-stargaze-500">{discussion.author.role} at {discussion.author.company}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {discussion.tags.slice(0, 2).map(tag => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    #{tag}
                  </Badge>
                ))}
                {discussion.tags.length > 2 && (
                  <Badge variant="outline" className="text-xs">
                    +{discussion.tags.length - 2}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Community = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("recent");
  
  // Filter discussions based on search and category
  const filteredDiscussions = discussions.filter((discussion) => {
    // Search filter
    const matchesSearch = 
      discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      discussion.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      discussion.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    // Category filter
    const matchesCategory = 
      selectedCategory === "All Categories" ||
      discussion.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Sort filtered discussions
  const sortedDiscussions = [...filteredDiscussions].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.views - a.views;
      case "replies":
        return b.replies - a.replies;
      case "upvotes":
        return b.upvotes - a.upvotes;
      case "recent":
      default:
        // This is a simplified sort by time (in a real app would use actual dates)
        return discussions.indexOf(a) - discussions.indexOf(b);
    }
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-4xl font-bold text-stargaze-900 dark:text-white mb-2">
                  Startup Community
                </h1>
                <p className="text-lg text-stargaze-600 dark:text-stargaze-300">
                  Connect with founders, share experiences, and get advice from the community.
                </p>
              </div>
              <Button size="lg">
                <Plus className="mr-2 h-4 w-4" />
                Start a Discussion
              </Button>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <AnimatedSection animation="fade-in" className="sticky top-24">
                {/* Community Stats */}
                <Card className="mb-6">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Community Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <p className="text-2xl font-bold text-primary">{communityStats.activeMembers.toLocaleString()}</p>
                        <p className="text-xs text-stargaze-500">Members</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-primary">{communityStats.discussions.toLocaleString()}</p>
                        <p className="text-xs text-stargaze-500">Discussions</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-primary">{communityStats.helpfulResponses.toLocaleString()}</p>
                        <p className="text-xs text-stargaze-500">Responses</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Categories */}
                <div className="bg-white dark:bg-stargaze-900 shadow-sm rounded-lg p-4">
                  <h3 className="font-medium mb-3 flex items-center">
                    <Tag className="h-4 w-4 mr-2 text-primary" />
                    Categories
                  </h3>
                  <div className="space-y-1">
                    {categories.map((category) => (
                      <button
                        key={category}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                          selectedCategory === category
                            ? 'bg-primary text-white font-medium'
                            : 'text-stargaze-700 dark:text-stargaze-300 hover:bg-stargaze-100 dark:hover:bg-stargaze-800'
                        }`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Trending Topics */}
                <div className="bg-white dark:bg-stargaze-900 shadow-sm rounded-lg p-4">
                  <h3 className="font-medium mb-3 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                    Trending Topics
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {trendingTopics.map((topic) => (
                      <Badge key={topic} variant="outline" className="cursor-pointer hover:bg-primary/10">
                        #{topic}
                      </Badge>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              <AnimatedSection animation="fade-up" delay={100}>
                {/* Search and Sort */}
                <div className="bg-white dark:bg-stargaze-900 p-4 rounded-lg shadow-sm mb-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                      <Input
                        placeholder="Search discussions..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stargaze-400" />
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Filter className="h-4 w-4 text-stargaze-500" />
                      <span className="text-sm whitespace-nowrap">Sort by:</span>
                      <select
                        className="bg-transparent border-0 text-sm font-medium text-primary focus:outline-none cursor-pointer"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                      >
                        {sortOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                
                {/* Filter Information */}
                <div className="flex justify-between items-center mb-4 px-1">
                  <p className="text-sm text-stargaze-600 dark:text-stargaze-400">
                    {selectedCategory !== "All Categories" && (
                      <Badge variant="outline" className="mr-2">
                        {selectedCategory}
                      </Badge>
                    )}
                    Showing {sortedDiscussions.length} discussions
                  </p>
                  
                  <Tabs value={sortBy} onValueChange={setSortBy} className="hidden md:block">
                    <TabsList className="h-9">
                      <TabsTrigger value="recent" className="text-xs px-3">Recent</TabsTrigger>
                      <TabsTrigger value="popular" className="text-xs px-3">Popular</TabsTrigger>
                      <TabsTrigger value="replies" className="text-xs px-3">Most Replies</TabsTrigger>
                      <TabsTrigger value="upvotes" className="text-xs px-3">Most Upvotes</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
                
                {/* Discussions List */}
                <div>
                  {sortedDiscussions.length > 0 ? (
                    sortedDiscussions.map((discussion) => (
                      <AnimatedSection 
                        key={discussion.id} 
                        animation="fade-up" 
                        threshold={0.1} 
                        delay={150}
                      >
                        <DiscussionCard discussion={discussion} />
                      </AnimatedSection>
                    ))
                  ) : (
                    <div className="text-center py-12 bg-white dark:bg-stargaze-900 rounded-lg shadow-sm">
                      <MessageSquare className="h-12 w-12 text-stargaze-400 mx-auto mb-4 opacity-50" />
                      <h3 className="text-lg font-medium text-stargaze-600 dark:text-stargaze-400">
                        No discussions found
                      </h3>
                      <p className="text-sm text-stargaze-500 max-w-sm mx-auto mt-1 mb-6">
                        Try adjusting your search or filters, or start a new discussion.
                      </p>
                      <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Start a Discussion
                      </Button>
                    </div>
                  )}
                </div>
                
                {/* Pagination (simplified) */}
                {sortedDiscussions.length > 0 && (
                  <div className="flex justify-center mt-8">
                    <Button variant="outline" className="mr-2">Previous</Button>
                    <Button variant="outline">Next</Button>
                  </div>
                )}
              </AnimatedSection>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Community;
