
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";
import { MessageCircle, ThumbsUp, User, Clock, ArrowRight, Filter, Search, ChevronDown, ChevronUp, PlusCircle } from "lucide-react";

// Discussion threads data
const discussions = [
  {
    id: "1",
    title: "What's the best way to validate a SaaS idea?",
    author: {
      name: "Alex Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    category: "Idea Validation",
    createdAt: "2023-09-15T14:23:00Z",
    replies: 24,
    upvotes: 47,
    isPopular: true,
    excerpt: "I'm considering launching a SaaS product in the project management space, but I'm not sure how to validate if there's enough demand. What are some effective methods you've used to validate your ideas before building?"
  },
  {
    id: "2",
    title: "Strategies for finding a technical co-founder",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    },
    category: "Co-Founders",
    createdAt: "2023-09-10T09:15:00Z",
    replies: 31,
    upvotes: 52,
    isPopular: true,
    excerpt: "I'm a non-technical founder with a validated idea, but I'm struggling to find a technical co-founder. I've tried hackathons and networking events, but haven't had much success. Any suggestions on where to look and how to approach potential technical partners?"
  },
  {
    id: "3",
    title: "How much equity should I give to early employees?",
    author: {
      name: "Michael Roberts",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    category: "Hiring & Compensation",
    createdAt: "2023-09-05T16:45:00Z",
    replies: 19,
    upvotes: 38,
    isPopular: false,
    excerpt: "I'm about to make my first few hires for my startup. What's a fair equity percentage to offer early engineers and other key roles? Are there standard ranges, or does it vary widely by industry and funding stage?"
  },
  {
    id: "4",
    title: "Experiences with different payment processors for SaaS",
    author: {
      name: "Emily Carter",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    category: "Payments & Billing",
    createdAt: "2023-09-01T11:30:00Z",
    replies: 15,
    upvotes: 29,
    isPopular: false,
    excerpt: "We're evaluating payment processors for our B2B SaaS product. Currently considering Stripe, Paddle, and Chargebee. Would love to hear about your experiences with these or other solutions, especially regarding international payments and subscription management."
  },
  {
    id: "5",
    title: "Marketing strategies that worked for your B2B startup",
    author: {
      name: "David Park",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    category: "Marketing",
    createdAt: "2023-08-28T13:20:00Z",
    replies: 27,
    upvotes: 45,
    isPopular: true,
    excerpt: "We've been struggling with our customer acquisition strategy. Content marketing hasn't provided the ROI we expected, and paid ads are getting expensive. What marketing channels have you found most effective for reaching B2B customers, especially in the early stages?"
  },
  {
    id: "6",
    title: "How to structure a fundraising pitch deck",
    author: {
      name: "Elena Rodriguez",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    category: "Fundraising",
    createdAt: "2023-08-22T10:45:00Z",
    replies: 34,
    upvotes: 61,
    isPopular: true,
    excerpt: "I'm preparing to raise our seed round and working on our pitch deck. I've seen varying advice on how many slides to include and what information is essential. For those who've successfully raised funding, what structure worked for you, and what do investors focus on most?"
  },
];

// Categories for filtering
const categories = [
  "All Topics",
  "Idea Validation",
  "Co-Founders",
  "Hiring & Compensation",
  "Payments & Billing",
  "Marketing",
  "Fundraising",
  "Product Development",
  "Legal",
  "Remote Work",
];

// Sort options
const sortOptions = ["Most Recent", "Most Popular", "Most Replies", "Most Upvotes"];

const DiscussionCard = ({ discussion }: { discussion: typeof discussions[0] }) => {
  return (
    <div className="bg-white dark:bg-stargaze-900 border border-stargaze-100 dark:border-stargaze-800 rounded-xl shadow-subtle hover:shadow-md transition-all duration-300 p-6">
      <div className="flex gap-4 mb-4">
        <div className="flex flex-col items-center">
          <button className="p-1 text-stargaze-500 hover:text-primary transition-colors">
            <ChevronUp className="h-6 w-6" />
          </button>
          <span className="font-bold text-lg">{discussion.upvotes}</span>
          <span className="text-xs text-stargaze-500">votes</span>
        </div>
        
        <div className="flex-grow">
          <div className="flex items-center gap-1 mb-1.5">
            <span className="bg-stargaze-100 dark:bg-stargaze-800 text-stargaze-700 dark:text-stargaze-300 text-xs px-2 py-0.5 rounded-full">
              {discussion.category}
            </span>
            {discussion.isPopular && (
              <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs px-2 py-0.5 rounded-full">
                Popular
              </span>
            )}
          </div>
          
          <h3 className="text-lg font-bold text-stargaze-900 dark:text-white mb-2">
            {discussion.title}
          </h3>
          
          <p className="text-stargaze-600 dark:text-stargaze-300 text-sm mb-4 line-clamp-2">
            {discussion.excerpt}
          </p>
          
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <img 
                src={discussion.author.avatar} 
                alt={discussion.author.name}
                className="w-6 h-6 rounded-full object-cover"
              />
              <span className="text-stargaze-600 dark:text-stargaze-400">{discussion.author.name}</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-stargaze-500">
                <MessageCircle className="h-4 w-4" />
                <span>{discussion.replies}</span>
              </div>
              
              <div className="flex items-center gap-1 text-stargaze-500">
                <Clock className="h-4 w-4" />
                <span>
                  {new Date(discussion.createdAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric'
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Community = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Topics");
  const [selectedSort, setSelectedSort] = useState("Most Recent");
  
  // Filter discussions based on search query and category
  const filteredDiscussions = discussions.filter((discussion) => {
    const matchesSearch = 
      discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      discussion.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      selectedCategory === "All Topics" ||
      discussion.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Sort discussions based on selected sort option
  const sortedDiscussions = [...filteredDiscussions].sort((a, b) => {
    switch (selectedSort) {
      case "Most Popular":
        return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
      case "Most Replies":
        return b.replies - a.replies;
      case "Most Upvotes":
        return b.upvotes - a.upvotes;
      case "Most Recent":
      default:
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
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
                Join the Conversation
              </h1>
              <p className="text-stargaze-600 dark:text-stargaze-300 text-lg text-center max-w-3xl mx-auto mb-10">
                Connect with fellow entrepreneurs, share your experiences, and learn from the collective wisdom of our startup community.
              </p>
              
              <div className="flex justify-center mb-10">
                <Button 
                  size="lg" 
                  leftIcon={<PlusCircle className="h-5 w-5" />}
                >
                  Start a New Discussion
                </Button>
              </div>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative mb-12">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-stargaze-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search discussions..."
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
            </AnimatedSection>
          </div>
        </section>
        
        {/* Discussions Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white dark:bg-stargaze-900 border border-stargaze-100 dark:border-stargaze-800 rounded-xl shadow-subtle p-6 sticky top-24">
                  <h3 className="font-bold text-lg mb-4 text-stargaze-900 dark:text-white">Categories</h3>
                  
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                          selectedCategory === category
                            ? "bg-primary text-white font-medium"
                            : "text-stargaze-700 dark:text-stargaze-300 hover:bg-stargaze-50 dark:hover:bg-stargaze-800"
                        )}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                  
                  <div className="border-t border-stargaze-100 dark:border-stargaze-800 my-6 pt-6">
                    <h3 className="font-bold text-lg mb-4 text-stargaze-900 dark:text-white">Sort By</h3>
                    
                    <div className="space-y-2">
                      {sortOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => setSelectedSort(option)}
                          className={cn(
                            "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
                            selectedSort === option
                              ? "bg-stargaze-100 dark:bg-stargaze-800 text-stargaze-900 dark:text-white font-medium"
                              : "text-stargaze-700 dark:text-stargaze-300 hover:bg-stargaze-50 dark:hover:bg-stargaze-800"
                          )}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="lg:col-span-3">
                <AnimatedSection threshold={0.1}>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-stargaze-900 dark:text-white">
                      {selectedCategory === "All Topics" ? "All Discussions" : selectedCategory}
                    </h2>
                    
                    <div className="text-sm text-stargaze-600 dark:text-stargaze-300">
                      Showing {sortedDiscussions.length} discussions
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {sortedDiscussions.map((discussion, index) => (
                      <AnimatedSection
                        key={discussion.id}
                        threshold={0.1}
                        delay={50 * index}
                      >
                        <DiscussionCard discussion={discussion} />
                      </AnimatedSection>
                    ))}
                    
                    {sortedDiscussions.length === 0 && (
                      <div className="text-center py-12 bg-white dark:bg-stargaze-900 border border-stargaze-100 dark:border-stargaze-800 rounded-xl">
                        <p className="text-xl text-stargaze-600 dark:text-stargaze-300">
                          No discussions found matching your criteria.
                        </p>
                        <Button 
                          variant="outline" 
                          className="mt-4"
                          onClick={() => {
                            setSearchQuery("");
                            setSelectedCategory("All Topics");
                          }}
                        >
                          Reset Filters
                        </Button>
                      </div>
                    )}
                  </div>
                  
                  {sortedDiscussions.length > 0 && (
                    <div className="text-center mt-12">
                      <Button size="lg">Load More Discussions</Button>
                    </div>
                  )}
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
        
        {/* Community Stats */}
        <section className="py-16 bg-stargaze-50 dark:bg-stargaze-900/50">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl font-bold text-center mb-12">Our Growing Community</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: User, label: "Active Members", value: "12,500+" },
                  { icon: MessageCircle, label: "Discussions", value: "3,200+" },
                  { icon: ThumbsUp, label: "Helpful Responses", value: "48,750+" },
                  { icon: Clock, label: "Avg. Response Time", value: "36 min" },
                ].map((stat, index) => (
                  <AnimatedSection
                    key={index}
                    animation="fade-up"
                    delay={100 + index * 100}
                    className="bg-white dark:bg-stargaze-800 rounded-2xl shadow-subtle p-6 text-center"
                  >
                    <div className="bg-primary/10 text-primary rounded-full p-3 w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                      <stat.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-stargaze-900 dark:text-white mb-1">{stat.value}</h3>
                    <p className="text-stargaze-600 dark:text-stargaze-300">{stat.label}</p>
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

export default Community;
