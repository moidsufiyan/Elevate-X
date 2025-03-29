
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { 
  Search, 
  Users, 
  MessageSquare, 
  Calendar, 
  ArrowRight,
  Activity,
  ChevronRight,
  Clock
} from "lucide-react";

// Sample community data
const communities = [
  {
    id: "1",
    name: "SaaS Founders",
    description: "Connect with fellow SaaS founders to discuss growth strategies, pricing models, and customer acquisition.",
    members: 2456,
    discussions: 342,
    events: 12,
    activeNow: 24,
    topics: ["Growth", "Product", "Pricing", "Customer Success"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    isJoined: true
  },
  {
    id: "2",
    name: "FinTech Innovators",
    description: "A community focused on disrupting financial services through innovative technology solutions.",
    members: 1839,
    discussions: 267,
    events: 8,
    activeNow: 18,
    topics: ["Blockchain", "Payments", "RegTech", "InsurTech"],
    image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    isJoined: false
  },
  {
    id: "3",
    name: "AI & Machine Learning",
    description: "Discuss the latest advancements in AI and ML, and how to apply them to solve real business problems.",
    members: 3215,
    discussions: 421,
    events: 15,
    activeNow: 42,
    topics: ["Deep Learning", "NLP", "Computer Vision", "AI Ethics"],
    image: "https://images.unsplash.com/photo-1677442135136-760c813070c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    isJoined: true
  },
  {
    id: "4",
    name: "E-commerce Growth",
    description: "Share strategies for scaling online stores, optimizing conversion rates, and improving customer retention.",
    members: 1956,
    discussions: 287,
    events: 7,
    activeNow: 15,
    topics: ["CRO", "Retention", "Marketing", "Logistics"],
    image: "https://images.unsplash.com/photo-1666689892074-d196cd2ed6d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    isJoined: false
  },
  {
    id: "5",
    name: "Women in Tech",
    description: "A supportive community for women founders and tech professionals to network, share experiences, and collaborate.",
    members: 2132,
    discussions: 376,
    events: 18,
    activeNow: 27,
    topics: ["Diversity", "Leadership", "Career Growth", "Mentorship"],
    image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    isJoined: true
  },
  {
    id: "6",
    name: "Hardware & IoT",
    description: "For founders building physical products, connected devices, and IoT solutions.",
    members: 1485,
    discussions: 203,
    events: 6,
    activeNow: 11,
    topics: ["Manufacturing", "Supply Chain", "Product Design", "Electronics"],
    image: "https://images.unsplash.com/photo-1619921582773-fa2dd76fb1b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    isJoined: false
  },
  {
    id: "7",
    name: "Early Stage Founders",
    description: "A supportive environment for founders at the idea validation and pre-seed stages.",
    members: 2790,
    discussions: 412,
    events: 21,
    activeNow: 38,
    topics: ["Validation", "MVP", "Bootstrapping", "Funding"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    isJoined: true
  },
  {
    id: "8",
    name: "B2B Sales Strategies",
    description: "Focused on effective sales techniques, pipeline management, and enterprise customer acquisition.",
    members: 1865,
    discussions: 274,
    events: 9,
    activeNow: 16,
    topics: ["Lead Generation", "Sales Process", "Negotiation", "Customer Success"],
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    isJoined: false
  }
];

// Sample upcoming events data
const upcomingEvents = [
  {
    id: "e1",
    title: "SaaS Pricing Strategies: Workshop",
    communityName: "SaaS Founders",
    date: "July 16, 2023",
    time: "11:00 AM EDT",
    attendees: 87
  },
  {
    id: "e2",
    title: "AI Ethics Panel Discussion",
    communityName: "AI & Machine Learning",
    date: "July 18, 2023",
    time: "2:00 PM EDT",
    attendees: 134
  },
  {
    id: "e3",
    title: "Women Leaders in Startups: Fireside Chat",
    communityName: "Women in Tech",
    date: "July 20, 2023",
    time: "5:00 PM EDT",
    attendees: 112
  }
];

// Filter categories
const categories = ["All Communities", "My Communities", "Technology", "Business", "Marketing", "Design", "Product"];

const CommunityCard = ({ community, onJoinToggle }: { community: typeof communities[0], onJoinToggle: (id: string) => void }) => {
  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-md">
              <img 
                src={community.image} 
                alt={community.name} 
                className="h-full w-full object-cover"
              />
            </div>
            <CardTitle className="text-xl">{community.name}</CardTitle>
          </div>
          <Badge variant={community.isJoined ? "outline" : "default"} className={community.isJoined ? "border-green-500 text-green-600 dark:text-green-400" : ""}>
            {community.isJoined ? "Joined" : "Popular"}
          </Badge>
        </div>
        <CardDescription className="line-clamp-2 h-10">
          {community.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-3 flex-grow">
        <div className="grid grid-cols-3 gap-2 text-center mb-4">
          <div className="bg-stargaze-50 dark:bg-stargaze-800/50 rounded-md py-2">
            <p className="text-primary font-medium">{community.members.toLocaleString()}</p>
            <p className="text-xs text-stargaze-500">Members</p>
          </div>
          <div className="bg-stargaze-50 dark:bg-stargaze-800/50 rounded-md py-2">
            <p className="text-primary font-medium">{community.discussions}</p>
            <p className="text-xs text-stargaze-500">Discussions</p>
          </div>
          <div className="bg-stargaze-50 dark:bg-stargaze-800/50 rounded-md py-2">
            <p className="text-primary font-medium">{community.events}</p>
            <p className="text-xs text-stargaze-500">Events</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-stargaze-600 dark:text-stargaze-400 mb-4">
          <Activity className="h-4 w-4 text-green-500" />
          <span>{community.activeNow} members active now</span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {community.topics.map((topic) => (
            <Badge key={topic} variant="outline" className="bg-primary/5">
              {topic}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          variant={community.isJoined ? "outline" : "default"}
          className={cn("w-full", community.isJoined && "border-primary text-primary hover:bg-primary/5")}
          onClick={() => onJoinToggle(community.id)}
        >
          {community.isJoined ? "View Community" : "Join Community"}
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const Communities = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Communities");
  const [communitiesData, setCommunitiesData] = useState(communities);
  
  // Filter communities based on search and category
  const filteredCommunities = communitiesData.filter((community) => {
    // Search filter
    const matchesSearch = 
      community.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      community.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      community.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()));
    
    // Category filter
    const matchesCategory = 
      selectedCategory === "All Communities" ||
      (selectedCategory === "My Communities" && community.isJoined);
    
    return matchesSearch && matchesCategory;
  });
  
  // Handle joining/leaving a community
  const handleJoinToggle = (id: string) => {
    setCommunitiesData(prev => 
      prev.map(community => 
        community.id === id 
          ? { ...community, isJoined: !community.isJoined } 
          : community
      )
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-stargaze-900 dark:text-white mb-4">
              Startup Communities
            </h1>
            <p className="text-lg text-stargaze-600 dark:text-stargaze-300 max-w-3xl mx-auto">
              Connect with like-minded founders and entrepreneurs in communities focused on specific industries and topics.
            </p>
          </AnimatedSection>
          
          {/* Search and Categories */}
          <AnimatedSection 
            animation="fade-up" 
            delay={100} 
            className="bg-white dark:bg-stargaze-900 shadow-subtle rounded-xl p-6 mb-8 max-w-5xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Input
                  placeholder="Search communities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stargaze-400" />
              </div>
              
              <Button>
                Create Community
              </Button>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="rounded-full px-4 py-2 h-auto text-sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </AnimatedSection>
          
          {/* Communities Grid */}
          <AnimatedSection animation="fade-up" delay={150}>
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-stargaze-900 dark:text-white">
                  {selectedCategory === "My Communities" ? "Your Communities" : "Discover Communities"}
                </h2>
                <p className="text-sm text-stargaze-600 dark:text-stargaze-400">
                  Showing {filteredCommunities.length} of {communities.length} communities
                </p>
              </div>
              
              {filteredCommunities.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredCommunities.map((community, index) => (
                    <AnimatedSection key={community.id} delay={200 + index * 50} className="h-full">
                      <CommunityCard 
                        community={community} 
                        onJoinToggle={handleJoinToggle}
                      />
                    </AnimatedSection>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-2xl font-medium text-stargaze-600 dark:text-stargaze-300">
                    No communities match your search
                  </p>
                  <p className="mt-2 text-stargaze-500">
                    Try adjusting your search query or selected category
                  </p>
                  <Button 
                    className="mt-6" 
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("All Communities");
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </AnimatedSection>
          
          {/* Upcoming Events */}
          <AnimatedSection animation="fade-up" delay={300} className="mt-12 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-stargaze-900 shadow-subtle rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-stargaze-900 dark:text-white">
                  Upcoming Community Events
                </h2>
                <Button variant="outline" className="gap-1">
                  View All <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex justify-between items-center border-b border-stargaze-100 dark:border-stargaze-800 pb-4 last:border-0 last:pb-0">
                    <div>
                      <h3 className="font-medium text-lg text-stargaze-900 dark:text-white">
                        {event.title}
                      </h3>
                      <p className="text-sm text-stargaze-600 dark:text-stargaze-400">
                        {event.communityName}
                      </p>
                      <div className="flex items-center gap-4 mt-1 text-sm text-stargaze-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{event.attendees} attending</span>
                        </div>
                      </div>
                    </div>
                    <Button>
                      RSVP
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
          
          {/* Community Statistics */}
          <AnimatedSection animation="fade-up" delay={400} className="mt-12 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-stargaze-900 shadow-subtle rounded-xl p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-stargaze-900 dark:text-white mb-2">
                  {communities.reduce((acc, curr) => acc + curr.members, 0).toLocaleString()}
                </h3>
                <p className="text-stargaze-600 dark:text-stargaze-400">Total Members</p>
              </div>
              
              <div className="bg-white dark:bg-stargaze-900 shadow-subtle rounded-xl p-6 text-center">
                <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-stargaze-900 dark:text-white mb-2">
                  {communities.reduce((acc, curr) => acc + curr.discussions, 0).toLocaleString()}
                </h3>
                <p className="text-stargaze-600 dark:text-stargaze-400">Active Discussions</p>
              </div>
              
              <div className="bg-white dark:bg-stargaze-900 shadow-subtle rounded-xl p-6 text-center">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-stargaze-900 dark:text-white mb-2">
                  {communities.reduce((acc, curr) => acc + curr.events, 0)}
                </h3>
                <p className="text-stargaze-600 dark:text-stargaze-400">Upcoming Events</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Communities;
