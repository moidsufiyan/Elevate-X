
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";
import { Calendar, Clock, Star, MessageSquare, Bookmark, Share2, Award, Users, Briefcase, MapPin, GraduationCap, Globe, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Extended mentor data for the individual mentor page
const mentorsData = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechVentures",
    expertise: ["SaaS", "Leadership", "Funding"],
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    available: true,
    bio: "Former Google executive with 15+ years of experience scaling startups from idea to acquisition. I specialize in helping early-stage founders refine their vision, build solid teams, and secure initial funding. My portfolio companies have collectively raised over $200M in venture capital.",
    rating: 4.9,
    sessions: 87,
    education: "MBA, Stanford University",
    languages: ["English", "Spanish"],
    industries: ["Technology", "E-commerce", "SaaS"],
    achievements: [
      "Led 3 successful startup exits",
      "Raised $50M+ for previous venture",
      "Angel investor in 15+ startups"
    ],
    consultingFocus: [
      "Go-to-market strategy",
      "Fundraising & investor relations",
      "Executive leadership coaching"
    ],
    testimonials: [
      {
        text: "Sarah's guidance was instrumental in helping us secure our Series A round. Her insights on pitch deck optimization and investor communication strategy were invaluable.",
        author: "Michael Chen, Founder of DataSync",
        rating: 5
      },
      {
        text: "Working with Sarah transformed our approach to scaling. She helped us identify key growth levers and build processes that supported our expansion from 10 to 50 employees.",
        author: "Elena Rodriguez, CEO of GrowthGenius",
        rating: 5
      }
    ],
    availableSlots: [
      { date: "2023-10-15", slots: ["10:00 AM", "2:00 PM"] },
      { date: "2023-10-16", slots: ["11:00 AM", "4:00 PM"] },
      { date: "2023-10-18", slots: ["9:00 AM", "1:00 PM", "3:00 PM"] }
    ]
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "CTO",
    company: "InnovateLabs",
    expertise: ["AI", "Machine Learning", "Product Strategy"],
    location: "Boston, MA",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    available: false,
    bio: "AI researcher turned entrepreneur who has helped over 50 startups implement machine learning solutions. I focus on pragmatic AI applications that drive business value rather than chasing trends. With a background in both research and commercial product development, I bridge the gap between theoretical ML and practical implementation.",
    rating: 4.7,
    sessions: 64,
    education: "PhD in Computer Science, MIT",
    languages: ["English", "Mandarin"],
    industries: ["Artificial Intelligence", "HealthTech", "FinTech"],
    achievements: [
      "Published 15+ research papers on machine learning",
      "Built AI systems used by Fortune 500 companies",
      "Developed patented algorithms for predictive analytics"
    ],
    consultingFocus: [
      "AI implementation strategy",
      "Technical co-founder evaluation",
      "Build vs. buy technology decisions"
    ],
    testimonials: [
      {
        text: "Michael helped us navigate the complex landscape of AI tools and build a roadmap that made sense for our stage. His practical approach saved us months of trial and error.",
        author: "Lisa Kim, Founder of PredictHealth",
        rating: 5
      },
      {
        text: "As a non-technical founder, I was struggling to evaluate technical talent. Michael's framework for assessing technical co-founders was exactly what I needed.",
        author: "James Wilson, CEO of FinanceFuture",
        rating: 4
      }
    ],
    availableSlots: [
      { date: "2023-10-20", slots: ["9:00 AM", "1:00 PM"] },
      { date: "2023-10-21", slots: ["11:00 AM", "3:00 PM"] },
      { date: "2023-10-22", slots: ["10:00 AM", "2:00 PM", "4:00 PM"] }
    ]
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    role: "Venture Partner",
    company: "Summit Capital",
    expertise: ["Investment", "Scaling", "Market Analysis"],
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    available: true,
    bio: "Investor who has led over $120M in funding rounds for early-stage startups in fintech and health tech. With experience on both sides of the table as a founder and now as an investor, I provide unique perspectives on fundraising strategies, investor relations, and scaling operations. I'm passionate about supporting diverse founding teams.",
    rating: 4.8,
    sessions: 52,
    education: "MBA, Harvard Business School",
    languages: ["English", "Spanish", "Portuguese"],
    industries: ["FinTech", "HealthTech", "EdTech"],
    achievements: [
      "Led investments in 3 unicorn companies",
      "Board member of 5 high-growth startups",
      "Former founder with successful exit"
    ],
    consultingFocus: [
      "Fundraising strategy & investor pitch",
      "Financial modeling & forecasting",
      "Board management & governance"
    ],
    testimonials: [
      {
        text: "Elena's feedback on our pitch deck and financial model was transformative. She helped us secure twice the funding we initially targeted.",
        author: "David Park, Founder of PaySimple",
        rating: 5
      },
      {
        text: "Beyond just fundraising advice, Elena provided invaluable guidance on how to structure our cap table and negotiate terms that were favorable for long-term growth.",
        author: "Sarah Thompson, CEO of EduAccess",
        rating: 4.5
      }
    ],
    availableSlots: [
      { date: "2023-10-17", slots: ["11:00 AM", "3:00 PM"] },
      { date: "2023-10-19", slots: ["9:00 AM", "1:00 PM"] },
      { date: "2023-10-23", slots: ["10:00 AM", "2:00 PM", "4:00 PM"] }
    ]
  },
  {
    id: "4",
    name: "David Park",
    role: "Marketing Director",
    company: "Growth Accelerator",
    expertise: ["Growth Marketing", "Brand Strategy", "Digital Ads"],
    location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    available: true,
    bio: "Digital marketing specialist who has helped startups achieve 300%+ growth in under a year. I focus on data-driven marketing strategies that optimize CAC and drive sustainable growth. My expertise spans across paid acquisition, content marketing, SEO, and conversion optimization for B2B and B2C companies.",
    rating: 4.6,
    sessions: 93,
    education: "BS in Marketing, USC Marshall School of Business",
    languages: ["English", "Korean"],
    industries: ["Consumer Tech", "D2C Brands", "Marketplaces"],
    achievements: [
      "Scaled 5 startups to $1M+ in ARR",
      "Built growth teams for multiple YC companies",
      "Speaker at Growth Hackers Conference"
    ],
    consultingFocus: [
      "Customer acquisition strategy",
      "Marketing team building",
      "Growth experimentation frameworks"
    ],
    testimonials: [
      {
        text: "David's approach to growth marketing helped us reduce our CAC by 40% while doubling our conversion rate. His frameworks for testing and optimization are now core to our marketing strategy.",
        author: "Jennifer Lee, Founder of StyleMatch",
        rating: 5
      },
      {
        text: "We were struggling with scaling our customer acquisition beyond our initial traction. David helped us identify and execute on channels we hadn't considered, resulting in 4x growth in six months.",
        author: "Robert Kim, CEO of MealPrep",
        rating: 4.5
      }
    ],
    availableSlots: [
      { date: "2023-10-16", slots: ["10:00 AM", "2:00 PM"] },
      { date: "2023-10-18", slots: ["11:00 AM", "3:00 PM"] },
      { date: "2023-10-20", slots: ["9:00 AM", "1:00 PM", "3:00 PM"] }
    ]
  },
  // ... other mentors can be added here
];

const MentorDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  
  const mentor = mentorsData.find(m => m.id === id);
  
  if (!mentor) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 py-32 text-center">
          <h1 className="text-3xl font-bold">Mentor Not Found</h1>
          <p className="mt-4 text-stargaze-600 dark:text-stargaze-300">
            We couldn't find the mentor you're looking for.
          </p>
          <Link to="/mentors">
            <Button className="mt-8">Browse All Mentors</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  const handleScheduleSession = () => {
    if (!selectedDate || !selectedTime) {
      toast({
        title: "Please select a date and time",
        description: "You need to choose an available slot for your session",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Session Scheduled!",
      description: `Your session with ${mentor.name} is scheduled for ${selectedDate} at ${selectedTime}`,
    });
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section with Mentor Details */}
        <section className="pt-24 pb-16 bg-gradient-to-b from-stargaze-50 to-white dark:from-stargaze-950 dark:to-stargaze-900">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fade-up" duration="normal">
              {/* Breadcrumb */}
              <div className="mb-8">
                <div className="flex items-center text-sm text-stargaze-600 dark:text-stargaze-400">
                  <Link to="/" className="hover:underline">Home</Link>
                  <span className="mx-2">/</span>
                  <Link to="/mentors" className="hover:underline">Mentors</Link>
                  <span className="mx-2">/</span>
                  <span className="text-stargaze-900 dark:text-white">{mentor.name}</span>
                </div>
              </div>
              
              {/* Mentor Info */}
              <div className="flex flex-col lg:flex-row gap-10">
                {/* Left Column - Image and Quick Stats */}
                <div className="lg:w-1/3">
                  <div className="sticky top-24">
                    <div className="overflow-hidden rounded-2xl shadow-lg">
                      <div className="aspect-[4/5] relative">
                        <img 
                          src={mentor.image} 
                          alt={mentor.name} 
                          className="w-full h-full object-cover"
                        />
                        {mentor.available && (
                          <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
                            Available for Mentoring
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Quick Stats */}
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="bg-white dark:bg-stargaze-800 p-4 rounded-xl shadow-subtle text-center">
                        <div className="flex justify-center mb-2">
                          <Star className="h-5 w-5 text-amber-500" fill="currentColor" />
                        </div>
                        <div className="text-2xl font-bold text-stargaze-900 dark:text-white">
                          {mentor.rating}
                        </div>
                        <div className="text-sm text-stargaze-600 dark:text-stargaze-400">
                          Mentor Rating
                        </div>
                      </div>
                      <div className="bg-white dark:bg-stargaze-800 p-4 rounded-xl shadow-subtle text-center">
                        <div className="flex justify-center mb-2">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div className="text-2xl font-bold text-stargaze-900 dark:text-white">
                          {mentor.sessions}
                        </div>
                        <div className="text-sm text-stargaze-600 dark:text-stargaze-400">
                          Sessions Completed
                        </div>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="mt-6 space-y-3">
                      <Button 
                        className="w-full justify-center" 
                        size="lg"
                        leftIcon={<MessageSquare className="h-5 w-5" />}
                      >
                        Message {mentor.name.split(" ")[0]}
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        className="w-full justify-center" 
                        size="lg"
                        leftIcon={<Bookmark className="h-5 w-5" />}
                      >
                        Save to Favorites
                      </Button>
                      
                      <Button 
                        variant="ghost" 
                        className="w-full justify-center" 
                        size="lg"
                        leftIcon={<Share2 className="h-5 w-5" />}
                      >
                        Share Profile
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Right Column - Main Content */}
                <div className="lg:w-2/3">
                  <h1 className="text-3xl md:text-4xl font-bold text-stargaze-900 dark:text-white mb-2">
                    {mentor.name}
                  </h1>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg text-stargaze-700 dark:text-stargaze-300">
                      {mentor.role} at {mentor.company}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-stargaze-600 dark:text-stargaze-400">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{mentor.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GraduationCap className="h-4 w-4" />
                      <span>{mentor.education}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Globe className="h-4 w-4" />
                      <span>{mentor.languages.join(", ")}</span>
                    </div>
                  </div>
                  
                  {/* Expertise Tags */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {mentor.expertise.map((skill, index) => (
                      <span 
                        key={index} 
                        className="inline-block px-3 py-1.5 text-sm rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {/* About */}
                  <div className="mb-8">
                    <h2 className="text-xl font-bold text-stargaze-900 dark:text-white mb-3">About</h2>
                    <p className="text-stargaze-700 dark:text-stargaze-300 leading-relaxed whitespace-pre-line">
                      {mentor.bio}
                    </p>
                  </div>
                  
                  {/* Industries */}
                  <div className="mb-8">
                    <h2 className="text-xl font-bold text-stargaze-900 dark:text-white mb-3">Industries</h2>
                    <div className="flex flex-wrap gap-2">
                      {mentor.industries.map((industry, index) => (
                        <span 
                          key={index} 
                          className="inline-block px-3 py-1.5 text-sm rounded-full bg-stargaze-100 dark:bg-stargaze-800 text-stargaze-700 dark:text-stargaze-300"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Achievements */}
                  <div className="mb-8">
                    <h2 className="text-xl font-bold text-stargaze-900 dark:text-white mb-3">Achievements</h2>
                    <ul className="space-y-2">
                      {mentor.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-stargaze-700 dark:text-stargaze-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Mentoring Focus */}
                  <div className="mb-8">
                    <h2 className="text-xl font-bold text-stargaze-900 dark:text-white mb-3">Mentoring Focus</h2>
                    <ul className="space-y-2">
                      {mentor.consultingFocus.map((focus, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Briefcase className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-stargaze-700 dark:text-stargaze-300">{focus}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Testimonials */}
                  <div className="mb-8">
                    <h2 className="text-xl font-bold text-stargaze-900 dark:text-white mb-3">Testimonials</h2>
                    <div className="space-y-4">
                      {mentor.testimonials.map((testimonial, index) => (
                        <div 
                          key={index} 
                          className="p-5 rounded-xl bg-white dark:bg-stargaze-800 shadow-subtle"
                        >
                          <div className="flex items-center gap-1 mb-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star 
                                key={i} 
                                className={cn(
                                  "h-4 w-4", 
                                  i < testimonial.rating 
                                    ? "text-amber-500 fill-current" 
                                    : "text-stargaze-300"
                                )} 
                              />
                            ))}
                          </div>
                          <p className="text-stargaze-700 dark:text-stargaze-300 italic mb-2">
                            "{testimonial.text}"
                          </p>
                          <p className="text-sm font-medium text-stargaze-900 dark:text-white">
                            {testimonial.author}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        {/* Schedule a Session Section */}
        {mentor.available && (
          <section className="py-16 bg-stargaze-50 dark:bg-stargaze-900/50">
            <div className="container mx-auto px-6">
              <AnimatedSection animation="fade-up" threshold={0.1}>
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-stargaze-900 dark:text-white mb-3">
                    Schedule a Session with {mentor.name}
                  </h2>
                  <p className="text-stargaze-600 dark:text-stargaze-400 max-w-2xl mx-auto">
                    Book a one-on-one mentoring session to discuss your specific challenges and 
                    get personalized guidance from an industry expert.
                  </p>
                </div>
                
                <div className="max-w-3xl mx-auto bg-white dark:bg-stargaze-800 rounded-2xl shadow-lg p-8">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-stargaze-900 dark:text-white mb-4">
                      Available Time Slots
                    </h3>
                    
                    {/* Date Selection */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-stargaze-700 dark:text-stargaze-300 mb-2">
                        Select a Date
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {mentor.availableSlots.map((slot) => (
                          <button
                            key={slot.date}
                            onClick={() => setSelectedDate(slot.date)}
                            className={cn(
                              "flex flex-col items-center justify-center p-4 rounded-lg border transition-all",
                              selectedDate === slot.date
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-stargaze-200 dark:border-stargaze-700 hover:border-primary hover:bg-primary/5"
                            )}
                          >
                            <Calendar className="h-5 w-5 mb-1" />
                            <span className="font-medium">
                              {new Date(slot.date).toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric'
                              })}
                            </span>
                            <span className="text-xs text-stargaze-500 dark:text-stargaze-400">
                              {new Date(slot.date).toLocaleDateString('en-US', { weekday: 'short' })}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Time Selection */}
                    {selectedDate && (
                      <div className="mb-6 animate-in fade-in duration-300">
                        <label className="block text-sm font-medium text-stargaze-700 dark:text-stargaze-300 mb-2">
                          Select a Time
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {mentor.availableSlots
                            .find(slot => slot.date === selectedDate)?.slots
                            .map((time) => (
                              <button
                                key={time}
                                onClick={() => setSelectedTime(time)}
                                className={cn(
                                  "flex items-center justify-center p-3 rounded-lg border transition-all",
                                  selectedTime === time
                                    ? "border-primary bg-primary/10 text-primary"
                                    : "border-stargaze-200 dark:border-stargaze-700 hover:border-primary hover:bg-primary/5"
                                )}
                              >
                                <Clock className="h-4 w-4 mr-2" />
                                <span>{time}</span>
                              </button>
                            ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Session Type */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-stargaze-700 dark:text-stargaze-300 mb-2">
                        Session Type
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <button className="flex items-center justify-between p-4 rounded-lg border border-primary bg-primary/10 text-stargaze-900 dark:text-white">
                          <div className="flex items-center">
                            <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center mr-3">
                              <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                            </div>
                            <div>
                              <p className="font-medium">30-Minute Session</p>
                              <p className="text-xs text-stargaze-500 dark:text-stargaze-400">
                                Quick advice on specific topics
                              </p>
                            </div>
                          </div>
                          <span className="font-bold">Free</span>
                        </button>
                        <button className="flex items-center justify-between p-4 rounded-lg border border-stargaze-200 dark:border-stargaze-700 hover:border-primary hover:bg-primary/5 text-stargaze-900 dark:text-white">
                          <div className="flex items-center">
                            <div className="w-5 h-5 rounded-full border-2 border-stargaze-300 flex items-center justify-center mr-3"></div>
                            <div>
                              <p className="font-medium">60-Minute Session</p>
                              <p className="text-xs text-stargaze-500 dark:text-stargaze-400">
                                Deep dive into your challenges
                              </p>
                            </div>
                          </div>
                          <span className="font-bold">$150</span>
                        </button>
                      </div>
                    </div>
                    
                    {/* Action Button */}
                    <Button 
                      size="lg" 
                      className="w-full justify-center mt-4"
                      onClick={handleScheduleSession}
                    >
                      Schedule Session
                    </Button>
                    
                    <p className="text-xs text-center text-stargaze-500 dark:text-stargaze-400 mt-3">
                      By scheduling a session, you agree to our terms of service and cancellation policy.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>
        )}
        
        {/* Resources Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fade-up" threshold={0.1}>
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-stargaze-900 dark:text-white mb-3">
                  Resources by {mentor.name}
                </h2>
                <p className="text-stargaze-600 dark:text-stargaze-400 max-w-2xl mx-auto">
                  Explore guides, templates, and insights shared by {mentor.name} to help entrepreneurs succeed.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((_, index) => (
                  <div 
                    key={index}
                    className="bg-white dark:bg-stargaze-800 rounded-xl shadow-subtle overflow-hidden group"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={[
                          "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                        ][index]} 
                        alt="Resource" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 dark:bg-stargaze-800/90 backdrop-blur-sm text-xs px-2 py-1 rounded-full shadow-md flex items-center gap-1">
                        <FileText className="h-3 w-3" />
                        <span>Guide</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-stargaze-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                        {[
                          "The Ultimate Fundraising Playbook",
                          "Building a Product Users Love",
                          "Scaling Your Startup: The First 100 Days"
                        ][index]}
                      </h3>
                      <p className="text-sm text-stargaze-600 dark:text-stargaze-400 mb-4">
                        {[
                          "A comprehensive guide to raising your first round of funding with practical tips and templates.",
                          "Learn the methodology behind creating products that solve real user problems and drive engagement.",
                          "Essential strategies and frameworks for managing rapid growth in the early stages of your startup."
                        ][index]}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-stargaze-500 dark:text-stargaze-400">
                          15-minute read
                        </span>
                        <Button variant="ghost" size="sm">
                          Read Now
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-10">
                <Button variant="outline">View All Resources</Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        {/* Similar Mentors */}
        <section className="py-16 bg-stargaze-50 dark:bg-stargaze-900/50">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fade-up" threshold={0.1}>
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-stargaze-900 dark:text-white mb-3">
                  Similar Mentors
                </h2>
                <p className="text-stargaze-600 dark:text-stargaze-400 max-w-2xl mx-auto">
                  Discover other experts who might be a good fit for your needs
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mentorsData
                  .filter(m => m.id !== mentor.id)
                  .slice(0, 3)
                  .map((similarMentor) => (
                    <div 
                      key={similarMentor.id}
                      className="bg-white dark:bg-stargaze-800 rounded-xl shadow-subtle overflow-hidden group"
                    >
                      <Link to={`/mentor/${similarMentor.id}`}>
                        <div className="aspect-[3/2] relative overflow-hidden">
                          <img 
                            src={similarMentor.image} 
                            alt={similarMentor.name} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          {similarMentor.available && (
                            <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full shadow-md">
                              Available
                            </div>
                          )}
                        </div>
                      </Link>
                      <div className="p-5">
                        <Link to={`/mentor/${similarMentor.id}`}>
                          <h3 className="text-lg font-bold text-stargaze-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                            {similarMentor.name}
                          </h3>
                        </Link>
                        <p className="text-sm text-stargaze-600 dark:text-stargaze-400 mb-3">
                          {similarMentor.role} at {similarMentor.company}
                        </p>
                        
                        <div className="flex mb-4 items-center">
                          <div className="flex items-center mr-3">
                            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
                            <span className="ml-1 text-sm font-medium">{similarMentor.rating}</span>
                          </div>
                          <span className="text-xs text-stargaze-500 dark:text-stargaze-400">
                            {similarMentor.sessions} sessions
                          </span>
                        </div>
                        
                        <div className="mb-4 flex flex-wrap gap-2">
                          {similarMentor.expertise.slice(0, 2).map((skill, index) => (
                            <span 
                              key={index} 
                              className="inline-block px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                            >
                              {skill}
                            </span>
                          ))}
                          {similarMentor.expertise.length > 2 && (
                            <span className="inline-block px-2 py-1 text-xs rounded-full bg-stargaze-100 dark:bg-stargaze-700 text-stargaze-600 dark:text-stargaze-300">
                              +{similarMentor.expertise.length - 2} more
                            </span>
                          )}
                        </div>
                        
                        <Link to={`/mentor/${similarMentor.id}`}>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="w-full justify-center border border-stargaze-200 dark:border-stargaze-700"
                          >
                            View Profile
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
              
              <div className="text-center mt-10">
                <Link to="/mentors">
                  <Button>Browse All Mentors</Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MentorDetail;
