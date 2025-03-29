
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Star, 
  Clock, 
  Briefcase, 
  GraduationCap, 
  Medal,
  MapPin,
  Globe,
  Mail,
  MessageSquare,
  CheckCircle,
  LinkedinIcon,
  TwitterIcon
} from "lucide-react";

// Sample mentor data with more detailed info for a single mentor
const mentorData = {
  id: "1",
  name: "Sarah Johnson",
  role: "Marketing Expert",
  company: "GrowthLabs",
  location: "San Francisco, CA",
  expertise: ["Digital Marketing", "Growth Strategy", "Brand Development", "Content Marketing", "SEO", "SEM"],
  industries: ["SaaS", "E-commerce", "FinTech"],
  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
  rating: 4.9,
  reviewCount: 128,
  available: true,
  availableTimes: "Mon, Wed, Fri",
  hourlyRate: "$150",
  bio: "15+ years experience in digital marketing with a focus on SaaS and B2B businesses. Previously led marketing at two successful startups that reached IPO. I specialize in helping early-stage startups build scalable marketing engines that drive sustainable growth.",
  about: "I began my career in traditional advertising before pivoting to digital marketing in the early days of social media. Having witnessed the transformation of marketing from print to digital, I bring a unique perspective that blends timeless marketing principles with cutting-edge digital strategies. My approach focuses on building sustainable marketing systems that continue to deliver results long after our engagement ends.",
  education: [
    { degree: "MBA, Marketing", institution: "Stanford University", year: "2008" },
    { degree: "BS, Business Administration", institution: "UC Berkeley", year: "2003" }
  ],
  experience: [
    { role: "CMO", company: "GrowthLabs", period: "2018 - Present", description: "Leading marketing strategy for a growth consulting firm focusing on SaaS and B2B startups." },
    { role: "VP of Marketing", company: "TechStart (IPO 2017)", period: "2014 - 2018", description: "Led marketing from Series B through IPO, growing user base from 50K to 2M." },
    { role: "Marketing Director", company: "SaaS Solutions", period: "2010 - 2014", description: "Established marketing department and led rebranding that increased conversions by 35%." }
  ],
  successStories: [
    { company: "DataSync", result: "Grew MRR from $50K to $250K in 12 months through optimized acquisition funnel" },
    { company: "MarketPlace", result: "Increased conversion rate by 65% through strategic messaging and UX improvements" },
    { company: "FinApp", result: "Reduced CAC by 40% while scaling acquisition channels beyond paid search" }
  ],
  socialMedia: {
    linkedin: "https://linkedin.com/in/sarahjohnson",
    twitter: "https://twitter.com/sarahjmarketing",
    website: "https://sarahjohnson.com"
  },
  reviews: [
    { author: "Michael B.", company: "Founder, DataSync", rating: 5, text: "Sarah completely transformed our marketing approach. Her strategic guidance helped us achieve growth we didn't think was possible at our stage.", date: "2 months ago" },
    { author: "Leila K.", company: "CEO, StyleCommerce", rating: 5, text: "Working with Sarah was a game-changer for our startup. She helped us identify our ideal customer profile and build acquisition channels that actually worked for our business model.", date: "3 months ago" },
    { author: "David R.", company: "CTO, TechFlow", rating: 4, text: "Sarah brought marketing clarity to our technical team. She bridges the gap between product and marketing exceptionally well.", date: "5 months ago" }
  ],
  upcomingSessions: [
    { date: "July 15, 2023", time: "10:00 AM - 11:00 AM PST", topic: "Growth Marketing Strategy", available: true },
    { date: "July 17, 2023", time: "1:00 PM - 2:00 PM PST", topic: "Marketing Channel Optimization", available: true },
    { date: "July 22, 2023", time: "11:00 AM - 12:00 PM PST", topic: "Conversion Rate Optimization", available: false }
  ]
};

const MentorDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("about");
  
  // In a real app, we would fetch mentor data based on the ID
  // const mentor = useFetchMentor(id);
  const mentor = mentorData; // Using sample data for now
  
  if (!mentor) {
    return <div>Loading mentor details...</div>; // Would use a proper loading state or skeleton UI
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Mentor Profile Header */}
          <AnimatedSection className="bg-white dark:bg-stargaze-900 rounded-xl overflow-hidden shadow-subtle mb-8">
            <div className="md:flex">
              {/* Profile Image (larger on desktop) */}
              <div className="md:w-1/3 p-6 flex justify-center">
                <div className="relative">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name} 
                    className="h-48 w-48 md:h-64 md:w-64 rounded-full object-cover border-4 border-primary/20"
                  />
                  {mentor.available && (
                    <div className="absolute bottom-4 right-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      Available for Booking
                    </div>
                  )}
                </div>
              </div>
              
              {/* Profile Info */}
              <div className="md:w-2/3 p-6 md:pt-10">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold text-stargaze-900 dark:text-white">
                    {mentor.name}
                  </h1>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="h-5 w-5" fill="currentColor" />
                    <span className="font-medium">{mentor.rating}</span>
                    <span className="text-sm text-stargaze-500">({mentor.reviewCount})</span>
                  </div>
                </div>
                
                <p className="text-xl text-primary mb-4">
                  {mentor.role} at {mentor.company}
                </p>
                
                <div className="flex items-center gap-2 text-stargaze-600 dark:text-stargaze-300 mb-6">
                  <MapPin className="h-4 w-4" />
                  <span>{mentor.location}</span>
                </div>
                
                <p className="text-stargaze-600 dark:text-stargaze-400 mb-6 max-w-2xl">
                  {mentor.bio}
                </p>
                
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-stargaze-600 dark:text-stargaze-400 mb-2">
                    Areas of Expertise
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {mentor.expertise.map((skill) => (
                      <Badge key={skill} variant="outline" className="bg-primary/10">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <Link to={`/mentor/${id}/book`}>
                    <Button size="lg" className="gap-2">
                      <Calendar className="h-5 w-5" />
                      Book a Session
                    </Button>
                  </Link>
                  
                  <Button variant="outline" size="lg" className="gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Message
                  </Button>
                  
                  {mentor.socialMedia && (
                    <div className="flex gap-2 ml-auto">
                      {mentor.socialMedia.linkedin && (
                        <a href={mentor.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="icon">
                            <LinkedinIcon className="h-5 w-5" />
                          </Button>
                        </a>
                      )}
                      {mentor.socialMedia.twitter && (
                        <a href={mentor.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="icon">
                            <TwitterIcon className="h-5 w-5" />
                          </Button>
                        </a>
                      )}
                      {mentor.socialMedia.website && (
                        <a href={mentor.socialMedia.website} target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="icon">
                            <Globe className="h-5 w-5" />
                          </Button>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Mentor Detail Tabs */}
          <AnimatedSection delay={100}>
            <Tabs defaultValue="about" onValueChange={setActiveTab} className="w-full max-w-5xl mx-auto">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="sessions">Sessions</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="about" className="bg-white dark:bg-stargaze-900 p-6 rounded-xl shadow-subtle">
                <h2 className="text-2xl font-bold mb-4 text-stargaze-900 dark:text-white">About {mentor.name}</h2>
                <p className="text-stargaze-600 dark:text-stargaze-400 mb-6">
                  {mentor.about}
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-stargaze-800 dark:text-stargaze-200">
                    <GraduationCap className="inline-block mr-2 h-5 w-5" />
                    Education
                  </h3>
                  <div className="space-y-4">
                    {mentor.education.map((edu, index) => (
                      <div key={index} className="border-l-2 border-primary/20 pl-4">
                        <h4 className="font-medium text-stargaze-900 dark:text-white">{edu.degree}</h4>
                        <p className="text-stargaze-600 dark:text-stargaze-400">{edu.institution}, {edu.year}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-stargaze-800 dark:text-stargaze-200">
                    <Medal className="inline-block mr-2 h-5 w-5" />
                    Success Stories
                  </h3>
                  <div className="space-y-4">
                    {mentor.successStories.map((story, index) => (
                      <div key={index} className="bg-stargaze-50 dark:bg-stargaze-800/50 p-4 rounded-lg">
                        <h4 className="font-medium text-stargaze-900 dark:text-white">{story.company}</h4>
                        <p className="text-stargaze-600 dark:text-stargaze-400">
                          <CheckCircle className="inline-block mr-2 h-4 w-4 text-green-500" />
                          {story.result}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-stargaze-800 dark:text-stargaze-200">
                    Industries
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {mentor.industries.map((industry) => (
                      <Badge key={industry} className="bg-stargaze-100 dark:bg-stargaze-800 text-stargaze-800 dark:text-stargaze-200 hover:bg-stargaze-200">
                        {industry}
                      </Badge>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="experience" className="bg-white dark:bg-stargaze-900 p-6 rounded-xl shadow-subtle">
                <h2 className="text-2xl font-bold mb-6 text-stargaze-900 dark:text-white">Work Experience</h2>
                <div className="space-y-8">
                  {mentor.experience.map((exp, index) => (
                    <div key={index} className="relative pl-8 pb-8 border-l-2 border-primary/20">
                      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                      <div className="mb-2">
                        <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-stargaze-600 dark:text-stargaze-400">
                          <Briefcase className="h-4 w-4" />
                          <span>{exp.company}</span>
                          <span className="mx-2">•</span>
                          <Clock className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <p className="text-stargaze-600 dark:text-stargaze-400">
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="sessions" className="bg-white dark:bg-stargaze-900 p-6 rounded-xl shadow-subtle">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-stargaze-900 dark:text-white">Upcoming Sessions</h2>
                  <p className="text-stargaze-600 dark:text-stargaze-400">
                    <span className="font-medium text-primary">{mentor.hourlyRate}</span> per hour
                  </p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {mentor.upcomingSessions.map((session, index) => (
                    <div key={index} className="border border-stargaze-200 dark:border-stargaze-800 rounded-lg p-4 flex justify-between items-center">
                      <div>
                        <h3 className="font-medium text-stargaze-900 dark:text-white">{session.topic}</h3>
                        <div className="flex items-center gap-2 text-sm text-stargaze-600 dark:text-stargaze-400">
                          <Calendar className="h-4 w-4" />
                          <span>{session.date}</span>
                          <span className="mx-1">•</span>
                          <Clock className="h-4 w-4" />
                          <span>{session.time}</span>
                        </div>
                      </div>
                      <Button disabled={!session.available}>
                        {session.available ? "Book Now" : "Booked"}
                      </Button>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <p className="text-stargaze-600 dark:text-stargaze-400 mb-4">
                    Don't see a time that works for you? Request a custom session.
                  </p>
                  <Button variant="outline">Request Custom Time</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="bg-white dark:bg-stargaze-900 p-6 rounded-xl shadow-subtle">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-stargaze-900 dark:text-white">Reviews</h2>
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-amber-500" fill="currentColor" />
                    <span className="font-medium text-lg">{mentor.rating}</span>
                    <span className="text-stargaze-600 dark:text-stargaze-400">({mentor.reviewCount} reviews)</span>
                  </div>
                </div>
                
                <div className="space-y-6 mb-8">
                  {mentor.reviews.map((review, index) => (
                    <div key={index} className="border-b border-stargaze-200 dark:border-stargaze-800 pb-6 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium text-stargaze-900 dark:text-white">{review.author}</h3>
                          <p className="text-sm text-stargaze-600 dark:text-stargaze-400">{review.company}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 text-amber-500"
                                fill={i < review.rating ? "currentColor" : "none"}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-stargaze-500">{review.date}</span>
                        </div>
                      </div>
                      <p className="text-stargaze-600 dark:text-stargaze-400">
                        {review.text}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <Button variant="outline">View All Reviews</Button>
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

export default MentorDetail;
