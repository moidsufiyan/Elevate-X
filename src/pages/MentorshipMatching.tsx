
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { 
  UserCircle2, 
  Sparkles, 
  MessageSquare, 
  ChevronRight, 
  Clock, 
  Calendar,
  CheckCircle2,
  BookOpen
} from "lucide-react";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

// Sample data for matched mentors
const matchedMentors = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Marketing Expert",
    company: "GrowthLabs",
    matchScore: 95,
    expertise: ["Digital Marketing", "Growth Strategy", "Brand Development"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    availability: "Next available: Tomorrow, 2:00 PM",
    bio: "15+ years experience in digital marketing with a focus on SaaS and B2B businesses. Previously led marketing at two successful startups that reached IPO."
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Technical Advisor",
    company: "TechVision Partners",
    matchScore: 89,
    expertise: ["Product Development", "Technical Architecture", "AI Implementation"],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    availability: "Next available: Today, 5:00 PM",
    bio: "Former CTO of multiple startups and enterprise companies. Specialized in helping early-stage founders build scalable technical foundations."
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    role: "Financial Strategist",
    company: "Growth Capital Ventures",
    matchScore: 87,
    expertise: ["Fundraising", "Financial Modeling", "Investor Relations"],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    availability: "Next available: Friday, 10:00 AM",
    bio: "Investment banker turned startup advisor. Helped companies raise over $50M in funding across seed to Series B rounds."
  },
  {
    id: "4",
    name: "David Park",
    role: "Operations Expert",
    company: "Efficient Scale",
    matchScore: 82,
    expertise: ["Operations", "Process Optimization", "Team Building"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    availability: "Next available: Thursday, 3:00 PM",
    bio: "Operations leader who specializes in helping startups scale efficiently. Expert in building systems that grow with your business."
  }
];

// Sample data for programs
const mentorshipPrograms = [
  {
    id: "1",
    title: "90-Day Startup Accelerator",
    description: "Intensive mentorship program focused on helping early-stage startups refine their product and go-to-market strategy.",
    duration: "90 days",
    commitment: "5-7 hours per week",
    maxParticipants: 10,
    currentParticipants: 6,
    mentors: ["Sarah Johnson", "Michael Chen", "David Park"],
    topics: ["Product Validation", "Customer Acquisition", "Fundraising Preparation"]
  },
  {
    id: "2",
    title: "Growth Stage Scaling Program",
    description: "For post-revenue startups looking to accelerate growth and prepare for Series A funding.",
    duration: "6 months",
    commitment: "3-5 hours per week",
    maxParticipants: 8,
    currentParticipants: 5,
    mentors: ["Elena Rodriguez", "David Park"],
    topics: ["Growth Marketing", "Team Building", "Financial Planning"]
  },
  {
    id: "3",
    title: "Technical Product Development",
    description: "Focused on technical startups building complex products that need architectural guidance.",
    duration: "4 months",
    commitment: "4-6 hours per week",
    maxParticipants: 6,
    currentParticipants: 3,
    mentors: ["Michael Chen"],
    topics: ["Technical Architecture", "Development Best Practices", "Scaling Infrastructure"]
  }
];

const MentorshipMatching = () => {
  const [activeTab, setActiveTab] = useState("matched-mentors");
  const [currentPage, setCurrentPage] = useState(1);
  
  const handleRequestMentorship = (mentorId: string) => {
    toast.success("Mentorship request sent successfully!");
    console.log("Requested mentorship with mentor ID:", mentorId);
  };
  
  const handleApplyToProgram = (programId: string) => {
    toast.success("Application submitted successfully!");
    console.log("Applied to program ID:", programId);
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-8">
            <h1 className="text-4xl font-bold text-stargaze-900 dark:text-white mb-4">
              Find Your Perfect Mentor Match
            </h1>
            <p className="text-lg text-stargaze-600 dark:text-stargaze-300 max-w-3xl">
              Our AI-powered matching system connects you with mentors based on your specific needs, 
              industry, and goals. Get personalized guidance to accelerate your startup journey.
            </p>
          </AnimatedSection>
          
          {/* AI Matching Banner */}
          <AnimatedSection animation="fade-up" delay={100} className="mb-10">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 p-6 rounded-xl border border-primary/20 shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white">AI-Powered Mentor Matching</h3>
                  <p className="text-stargaze-600 dark:text-stargaze-300">
                    Based on your profile and needs, we've identified these high-match mentors for you.
                    Update your profile to refine matches.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Main Tabs */}
          <AnimatedSection animation="fade-up" delay={200}>
            <Tabs defaultValue="matched-mentors" onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="matched-mentors" className="text-sm md:text-base">
                  <UserCircle2 className="h-4 w-4 mr-2" />
                  Matched Mentors
                </TabsTrigger>
                <TabsTrigger value="mentorship-programs" className="text-sm md:text-base">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Mentorship Programs
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="matched-mentors">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {matchedMentors.map((mentor) => (
                    <Card key={mentor.id} className="overflow-hidden">
                      <CardHeader className="pb-4">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center space-x-4">
                            <div className="relative">
                              <img 
                                src={mentor.image} 
                                alt={mentor.name}
                                className="h-16 w-16 rounded-full object-cover border-2 border-primary"
                              />
                              <div className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full h-8 w-8 flex items-center justify-center">
                                {mentor.matchScore}%
                              </div>
                            </div>
                            <div>
                              <CardTitle className="text-xl">{mentor.name}</CardTitle>
                              <p className="text-sm text-stargaze-600 dark:text-stargaze-400">
                                {mentor.role} at {mentor.company}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-4">
                        <p className="text-sm text-stargaze-600 dark:text-stargaze-400 mb-4">
                          {mentor.bio}
                        </p>
                        <div className="mb-4">
                          <p className="text-xs text-stargaze-500 dark:text-stargaze-400 mb-2 font-medium">Expertise:</p>
                          <div className="flex flex-wrap gap-2">
                            {mentor.expertise.map((skill) => (
                              <Badge key={skill} variant="outline" className="bg-primary/10">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center text-sm text-stargaze-500 dark:text-stargaze-400">
                          <Clock className="h-4 w-4 mr-2" />
                          {mentor.availability}
                        </div>
                      </CardContent>
                      <CardFooter className="pt-2 flex justify-between">
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-primary border-primary/30 hover:bg-primary/5"
                        >
                          View Profile
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => handleRequestMentorship(mentor.id)}
                        >
                          Request Mentorship
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </TabsContent>
              
              <TabsContent value="mentorship-programs">
                <div className="space-y-6 mb-8">
                  {mentorshipPrograms.map((program) => (
                    <Card key={program.id}>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl">{program.title}</CardTitle>
                            <CardDescription className="mt-1">
                              {program.description}
                            </CardDescription>
                          </div>
                          <Badge className={program.currentParticipants < program.maxParticipants ? "bg-green-500" : "bg-amber-500"}>
                            {program.currentParticipants < program.maxParticipants ? "Spots Available" : "Almost Full"}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="space-y-2">
                            <div className="flex items-center text-sm">
                              <Calendar className="h-4 w-4 mr-2 text-primary" />
                              <span className="font-medium">Duration:</span>
                              <span className="ml-2">{program.duration}</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <Clock className="h-4 w-4 mr-2 text-primary" />
                              <span className="font-medium">Time Commitment:</span>
                              <span className="ml-2">{program.commitment}</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center text-sm">
                              <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                              <span className="font-medium">Participants:</span>
                              <span className="ml-2">{program.currentParticipants}/{program.maxParticipants}</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <UserCircle2 className="h-4 w-4 mr-2 text-primary" />
                              <span className="font-medium">Led by:</span>
                              <span className="ml-2">{program.mentors.join(", ")}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <p className="text-xs text-stargaze-500 dark:text-stargaze-400 mb-2 font-medium">Program Focus:</p>
                          <div className="flex flex-wrap gap-2">
                            {program.topics.map((topic) => (
                              <Badge key={topic} variant="outline" className="bg-primary/10">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-end">
                        <Button onClick={() => handleApplyToProgram(program.id)}>
                          Apply to Program
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

export default MentorshipMatching;
