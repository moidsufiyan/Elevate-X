
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { SearchIcon, Users, MessageSquare, Star, PlusCircle, TrendingUp, Filter, Calendar } from "lucide-react";
import { toast } from "sonner";

// Sample data for communities
const communities = [
  {
    id: "fintech",
    name: "FinTech Innovators",
    description: "Discussion forum for financial technology startups, innovations, and market trends.",
    members: 1243,
    posts: 456,
    category: "Finance",
    tags: ["Payments", "Banking", "Cryptocurrency", "Investing"],
    featured: true,
    image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  },
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    description: "Connect with founders building AI/ML products and discuss technical and business challenges.",
    members: 987,
    posts: 324,
    category: "Technology",
    tags: ["Artificial Intelligence", "Machine Learning", "Data Science", "Computer Vision"],
    featured: true,
    image: "https://images.unsplash.com/photo-1677442340326-7eb114768cb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  },
  {
    id: "health-tech",
    name: "Health Tech Founders",
    description: "Community for healthcare technology entrepreneurs tackling challenges in medicine and wellness.",
    members: 756,
    posts: 231,
    category: "Healthcare",
    tags: ["Digital Health", "Medical Devices", "Telehealth", "Biotechnology"],
    featured: false,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "saas",
    name: "SaaS Entrepreneurs",
    description: "Discussions around building, scaling, and growing Software-as-a-Service businesses.",
    members: 1564,
    posts: 521,
    category: "Technology",
    tags: ["SaaS", "B2B", "Subscription", "Cloud"],
    featured: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "e-commerce",
    name: "E-Commerce & Retail Tech",
    description: "For founders building online retail, marketplace platforms, and shopping technologies.",
    members: 892,
    posts: 298,
    category: "Retail",
    tags: ["E-commerce", "DTC", "Marketplaces", "Retail Technology"],
    featured: false,
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "edtech",
    name: "EdTech Innovators",
    description: "Community for entrepreneurs reimagining education through technology.",
    members: 628,
    posts: 187,
    category: "Education",
    tags: ["Education", "Online Learning", "Educational Apps", "E-learning"],
    featured: false,
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  }
];

// Sample upcoming events
const upcomingEvents = [
  {
    id: "1",
    title: "FinTech Fundraising Strategies",
    community: "FinTech Innovators",
    date: "July 15, 2023",
    time: "1:00 PM - 2:30 PM EDT",
    attendees: 78,
    speaker: "Elena Rodriguez, Venture Partner"
  },
  {
    id: "2",
    title: "AI Ethics for Startups",
    community: "AI & Machine Learning",
    date: "July 17, 2023",
    time: "11:00 AM - 12:00 PM EDT",
    attendees: 56,
    speaker: "Michael Chen, AI Ethics Researcher"
  },
  {
    id: "3",
    title: "SaaS Pricing Models Workshop",
    community: "SaaS Entrepreneurs",
    date: "July 22, 2023",
    time: "2:00 PM - 4:00 PM EDT",
    attendees: 124,
    speaker: "David Park, SaaS Pricing Consultant"
  }
];

const Communities = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleJoinCommunity = (communityId: string) => {
    toast.success(`You've joined the community!`);
    console.log("Joined community:", communityId);
  };
  
  const handleRSVP = (eventId: string) => {
    toast.success("You've successfully RSVP'd to the event!");
    console.log("RSVP to event:", eventId);
  };
  
  // Filter communities based on search query
  const filteredCommunities = communities.filter(community => 
    community.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    community.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    community.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-8">
            <h1 className="text-4xl font-bold text-stargaze-900 dark:text-white mb-4">
              Topic-Specific Communities
            </h1>
            <p className="text-lg text-stargaze-600 dark:text-stargaze-300 max-w-3xl">
              Connect with like-minded entrepreneurs in your specific industry or interest area.
              Join discussions, share experiences, and learn from peers facing similar challenges.
            </p>
          </AnimatedSection>
          
          {/* Search and Filter */}
          <AnimatedSection animation="fade-up" delay={100} className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stargaze-400 h-4 w-4" />
                <Input 
                  placeholder="Search communities by name, description or tags..." 
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" className="flex items-center gap-2 whitespace-nowrap">
                <Filter className="h-4 w-4" />
                Filter Options
              </Button>
              <Button className="flex items-center gap-2 whitespace-nowrap">
                <PlusCircle className="h-4 w-4" />
                Create Community
              </Button>
            </div>
          </AnimatedSection>
          
          {/* Main Tabs */}
          <AnimatedSection animation="fade-up" delay={200}>
            <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-2 sm:grid-cols-4 mb-8">
                <TabsTrigger value="all" className="text-sm md:text-base">
                  All Communities
                </TabsTrigger>
                <TabsTrigger value="my-communities" className="text-sm md:text-base">
                  My Communities
                </TabsTrigger>
                <TabsTrigger value="featured" className="text-sm md:text-base">
                  Featured
                </TabsTrigger>
                <TabsTrigger value="events" className="text-sm md:text-base">
                  Upcoming Events
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCommunities.map((community) => (
                    <Card key={community.id} className="overflow-hidden flex flex-col h-full border border-stargaze-200 dark:border-stargaze-800 hover:shadow-md transition-shadow duration-200">
                      <div className="h-40 overflow-hidden">
                        <img 
                          src={community.image} 
                          alt={community.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl">{community.name}</CardTitle>
                            <CardDescription className="mt-1">
                              {community.category}
                            </CardDescription>
                          </div>
                          {community.featured && (
                            <Badge className="bg-amber-500">
                              <Star className="h-3 w-3 mr-1" />
                              Featured
                            </Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="pb-4 flex-grow">
                        <p className="text-sm text-stargaze-600 dark:text-stargaze-400 mb-4">
                          {community.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {community.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="bg-primary/10">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between text-sm text-stargaze-500 dark:text-stargaze-400">
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {community.members.toLocaleString()} members
                          </div>
                          <div className="flex items-center">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            {community.posts.toLocaleString()} posts
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-2">
                        <Button 
                          className="w-full"
                          onClick={() => handleJoinCommunity(community.id)}
                        >
                          Join Community
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                
                {filteredCommunities.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-lg text-stargaze-600 dark:text-stargaze-400">
                      No communities found matching your search. Try different keywords or create a new community.
                    </p>
                    <Button className="mt-4">
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Create Community
                    </Button>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="my-communities">
                <div className="text-center py-12">
                  <p className="text-lg text-stargaze-600 dark:text-stargaze-400 mb-4">
                    You haven't joined any communities yet.
                  </p>
                  <Button onClick={() => setActiveTab("all")}>
                    Browse Communities
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="featured">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCommunities
                    .filter(community => community.featured)
                    .map((community) => (
                      <Card key={community.id} className="overflow-hidden flex flex-col h-full border border-stargaze-200 dark:border-stargaze-800 hover:shadow-md transition-shadow duration-200">
                        <div className="h-40 overflow-hidden">
                          <img 
                            src={community.image} 
                            alt={community.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-xl">{community.name}</CardTitle>
                              <CardDescription className="mt-1">
                                {community.category}
                              </CardDescription>
                            </div>
                            <Badge className="bg-amber-500">
                              <Star className="h-3 w-3 mr-1" />
                              Featured
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="pb-4 flex-grow">
                          <p className="text-sm text-stargaze-600 dark:text-stargaze-400 mb-4">
                            {community.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {community.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="bg-primary/10">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center justify-between text-sm text-stargaze-500 dark:text-stargaze-400">
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {community.members.toLocaleString()} members
                            </div>
                            <div className="flex items-center">
                              <MessageSquare className="h-4 w-4 mr-1" />
                              {community.posts.toLocaleString()} posts
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-2">
                          <Button 
                            className="w-full"
                            onClick={() => handleJoinCommunity(community.id)}
                          >
                            Join Community
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="events">
                <div className="space-y-6">
                  {upcomingEvents.map((event) => (
                    <Card key={event.id}>
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <CardTitle className="text-xl">{event.title}</CardTitle>
                            <CardDescription className="mt-1">
                              Community: {event.community}
                            </CardDescription>
                          </div>
                          <Badge className="self-start md:self-auto">
                            <Calendar className="h-3 w-3 mr-1" />
                            {event.date}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="space-y-1">
                            <p className="text-sm font-medium">Time</p>
                            <p className="text-sm text-stargaze-600 dark:text-stargaze-400">
                              {event.time}
                            </p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm font-medium">Speaker</p>
                            <p className="text-sm text-stargaze-600 dark:text-stargaze-400">
                              {event.speaker}
                            </p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm font-medium">Attendees</p>
                            <p className="text-sm text-stargaze-600 dark:text-stargaze-400">
                              <Users className="h-3 w-3 inline mr-1" />
                              {event.attendees} going
                            </p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-end">
                        <Button
                          onClick={() => handleRSVP(event.id)}
                        >
                          RSVP to Event
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </AnimatedSection>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Communities;
