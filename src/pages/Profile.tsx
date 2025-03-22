
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";
import { 
  User, 
  Mail, 
  Briefcase, 
  MapPin, 
  Globe, 
  Calendar, 
  MessageCircle, 
  Star, 
  Settings, 
  Edit, 
  ChevronRight 
} from "lucide-react";

// Mock user data
const userData = {
  id: "1",
  name: "Alex Chen",
  role: "Entrepreneur",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  coverPhoto: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  bio: "Serial entrepreneur with a passion for SaaS and B2B solutions. Currently building my third startup in the productivity space.",
  company: "ProductFlow.io",
  location: "San Francisco, CA",
  website: "alexchen.dev",
  joinDate: "January 2023",
  interests: ["SaaS", "Product Management", "Growth Strategy", "UI/UX Design", "AI & Machine Learning"],
  connections: 142,
  activities: [
    {
      id: "1",
      type: "discussion",
      title: "What's the best way to validate a SaaS idea?",
      timestamp: "2023-09-15T14:23:00Z",
      engagement: "24 replies",
    },
    {
      id: "2",
      type: "mentor",
      title: "Scheduled mentorship session with Sarah Johnson",
      timestamp: "2023-09-10T10:00:00Z",
      engagement: "60 min session",
    },
    {
      id: "3",
      type: "resource",
      title: "Downloaded 'Ultimate Pitch Deck Template'",
      timestamp: "2023-09-05T09:15:00Z",
      engagement: "",
    },
    {
      id: "4",
      type: "discussion",
      title: "Replied to 'Marketing strategies that worked for your B2B startup'",
      timestamp: "2023-09-01T16:30:00Z",
      engagement: "5 likes",
    },
  ],
  upcomingSessions: [
    {
      id: "1",
      mentorName: "Elena Rodriguez",
      mentorAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      date: "2023-09-22T13:00:00Z",
      duration: 45,
      topic: "Fundraising Strategy",
    },
  ],
  savedResources: [
    {
      id: "1",
      title: "User Research Handbook",
      type: "guide",
      category: "Product Development",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: "2",
      title: "Growth Hacking Strategies",
      type: "guide",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ],
};

// Tabs for profile
const profileTabs = ["Activity", "Connections", "Resources", "Sessions"];

const Profile = () => {
  const [activeTab, setActiveTab] = useState("Activity");
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main>
        {/* Cover Photo */}
        <div className="h-60 md:h-80 w-full relative bg-stargaze-100 dark:bg-stargaze-800 overflow-hidden">
          {userData.coverPhoto && (
            <img 
              src={userData.coverPhoto} 
              alt="Cover" 
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        
        {/* Profile Header */}
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-end -mt-20 md:-mt-16 mb-6 relative z-10">
            {/* Avatar */}
            <div className="rounded-full border-4 border-white dark:border-stargaze-900 overflow-hidden w-32 h-32 md:w-40 md:h-40 bg-white dark:bg-stargaze-800 shadow-lg">
              <img 
                src={userData.avatar} 
                alt={userData.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Profile Info */}
            <div className="flex-grow">
              <h1 className="text-3xl md:text-4xl font-bold text-stargaze-900 dark:text-white mb-1">
                {userData.name}
              </h1>
              <p className="text-stargaze-600 dark:text-stargaze-300 text-lg mb-3">
                {userData.role} at {userData.company}
              </p>
              <div className="flex flex-wrap gap-3 items-center text-sm text-stargaze-600 dark:text-stargaze-400">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{userData.location}</span>
                </div>
                {userData.website && (
                  <div className="flex items-center gap-1">
                    <Globe className="h-4 w-4" />
                    <a href={`https://${userData.website}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {userData.website}
                    </a>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>Joined {userData.joinDate}</span>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-3 mt-3 md:mt-0">
              <Button 
                variant="outline" 
                size="sm"
                leftIcon={<Settings className="h-4 w-4" />}
              >
                Settings
              </Button>
              <Button 
                size="sm"
                leftIcon={<Edit className="h-4 w-4" />}
              >
                Edit Profile
              </Button>
            </div>
          </div>
          
          {/* Bio & Interests */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            <div className="lg:col-span-2">
              <AnimatedSection animation="fade-up" className="mb-6">
                <h2 className="text-xl font-bold mb-3 text-stargaze-900 dark:text-white">About</h2>
                <p className="text-stargaze-600 dark:text-stargaze-300">
                  {userData.bio}
                </p>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-up" delay={100}>
                <h2 className="text-xl font-bold mb-3 text-stargaze-900 dark:text-white">Interests</h2>
                <div className="flex flex-wrap gap-2">
                  {userData.interests.map((interest, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-stargaze-100 dark:bg-stargaze-800 text-stargaze-700 dark:text-stargaze-300 rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </AnimatedSection>
            </div>
            
            <div className="lg:col-span-1">
              <AnimatedSection animation="fade-up" delay={200} className="bg-white dark:bg-stargaze-900 border border-stargaze-100 dark:border-stargaze-800 rounded-xl shadow-subtle p-6">
                <h2 className="text-xl font-bold mb-4 text-stargaze-900 dark:text-white">Upcoming Sessions</h2>
                
                {userData.upcomingSessions.length > 0 ? (
                  <div className="space-y-4">
                    {userData.upcomingSessions.map((session) => (
                      <div key={session.id} className="flex items-center gap-4">
                        <img 
                          src={session.mentorAvatar} 
                          alt={session.mentorName} 
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-grow">
                          <h3 className="font-medium text-stargaze-900 dark:text-white">{session.topic}</h3>
                          <div className="flex items-center text-sm text-stargaze-600 dark:text-stargaze-400">
                            <span>with {session.mentorName}</span>
                            <span className="mx-2">•</span>
                            <span>{new Date(session.date).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}</span>
                          </div>
                        </div>
                        <ChevronRight className="h-5 w-5 text-stargaze-400" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-stargaze-600 dark:text-stargaze-400">
                    No upcoming sessions scheduled.
                  </p>
                )}
                
                <div className="mt-4 pt-4 border-t border-stargaze-100 dark:border-stargaze-800">
                  <Button 
                    variant="outline" 
                    className="w-full justify-center"
                    rightIcon={<ChevronRight className="h-4 w-4" />}
                  >
                    Find a Mentor
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
          
          {/* Profile Tabs */}
          <div className="mb-6 border-b border-stargaze-200 dark:border-stargaze-800">
            <div className="flex overflow-x-auto">
              {profileTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-4 py-2 font-medium whitespace-nowrap",
                    activeTab === tab
                      ? "text-primary border-b-2 border-primary"
                      : "text-stargaze-600 dark:text-stargaze-400 hover:text-stargaze-900 dark:hover:text-white"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="mb-16">
            {activeTab === "Activity" && (
              <AnimatedSection animation="fade-up">
                <h2 className="text-xl font-bold mb-6 text-stargaze-900 dark:text-white">Recent Activity</h2>
                
                <div className="space-y-6">
                  {userData.activities.map((activity) => (
                    <div 
                      key={activity.id}
                      className="bg-white dark:bg-stargaze-900 border border-stargaze-100 dark:border-stargaze-800 rounded-xl shadow-subtle p-6"
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-stargaze-100 dark:bg-stargaze-800 p-3 rounded-full">
                          {activity.type === "discussion" && <MessageCircle className="h-5 w-5 text-primary" />}
                          {activity.type === "mentor" && <User className="h-5 w-5 text-primary" />}
                          {activity.type === "resource" && <Star className="h-5 w-5 text-primary" />}
                        </div>
                        
                        <div className="flex-grow">
                          <p className="font-medium text-stargaze-900 dark:text-white mb-1">
                            {activity.title}
                          </p>
                          <div className="flex items-center text-sm text-stargaze-600 dark:text-stargaze-400">
                            <span>{new Date(activity.timestamp).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}</span>
                            {activity.engagement && (
                              <>
                                <span className="mx-2">•</span>
                                <span>{activity.engagement}</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center mt-8">
                  <Button variant="outline">View All Activity</Button>
                </div>
              </AnimatedSection>
            )}
            
            {activeTab === "Connections" && (
              <AnimatedSection animation="fade-up">
                <div className="text-center py-16">
                  <p className="text-xl text-stargaze-600 dark:text-stargaze-300 mb-6">
                    You have {userData.connections} connections
                  </p>
                  <Button>View All Connections</Button>
                </div>
              </AnimatedSection>
            )}
            
            {activeTab === "Resources" && (
              <AnimatedSection animation="fade-up">
                <h2 className="text-xl font-bold mb-6 text-stargaze-900 dark:text-white">Saved Resources</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {userData.savedResources.map((resource) => (
                    <div 
                      key={resource.id}
                      className="bg-white dark:bg-stargaze-900 border border-stargaze-100 dark:border-stargaze-800 rounded-xl shadow-subtle overflow-hidden"
                    >
                      <div className="aspect-video">
                        <img
                          src={resource.image}
                          alt={resource.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="text-xs text-stargaze-600 dark:text-stargaze-400 mb-1">
                          {resource.category} • {resource.type}
                        </div>
                        <h3 className="font-medium text-stargaze-900 dark:text-white">
                          {resource.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center mt-8">
                  <Button variant="outline">Find More Resources</Button>
                </div>
              </AnimatedSection>
            )}
            
            {activeTab === "Sessions" && (
              <AnimatedSection animation="fade-up">
                <div className="text-center py-16">
                  <p className="text-xl text-stargaze-600 dark:text-stargaze-300 mb-6">
                    You have no past sessions
                  </p>
                  <Button>Book Your First Session</Button>
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
