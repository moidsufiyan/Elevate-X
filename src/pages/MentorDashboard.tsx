
import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Calendar, MessageSquare, FileText, Clock, Users, BookOpen, 
  ChevronRight, CheckCircle, AlertCircle, HelpCircle, BarChart2, 
  DollarSign, LineChart, Pen 
} from "lucide-react";
import { MentorReviewRequests } from "@/components/mentor/MentorReviewRequests";
import { MentorSessions } from "@/components/mentor/MentorSessions";
import { MentorContentHub } from "@/components/mentor/MentorContentHub";
import { MentorStats } from "@/components/mentor/MentorStats";
import { useSessionHistory } from "@/shared/utils/data-utils";
import { SessionHistoryList } from "@/components/session/SessionHistoryList";

const MentorDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const { data: sessionHistory } = useSessionHistory("mentor-1", "mentor");
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold text-stargaze-900 dark:text-white mb-4">
                  Mentor Dashboard
                </h1>
                <p className="text-lg text-stargaze-600 dark:text-stargaze-300 max-w-3xl">
                  Manage your mentoring activities, review startup requests, and contribute your expertise to the community.
                </p>
              </div>
              
              <div className="mt-4 sm:mt-0 space-y-2">
                <Button asChild className="w-full sm:w-auto">
                  <Link to="/blog-management">
                    <Pen className="h-4 w-4 mr-2" />
                    Manage Articles
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Quick Stats */}
          <AnimatedSection animation="fade-up" delay={100} className="mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-stargaze-900 p-6 rounded-xl shadow-subtle border border-stargaze-100 dark:border-stargaze-800">
                <div className="flex items-center mb-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-stargaze-900 dark:text-white">Pending Requests</h3>
                </div>
                <p className="text-3xl font-bold text-stargaze-900 dark:text-white mb-1">5</p>
                <p className="text-sm text-stargaze-500 dark:text-stargaze-400">Startups waiting for feedback</p>
              </div>
              
              <div className="bg-white dark:bg-stargaze-900 p-6 rounded-xl shadow-subtle border border-stargaze-100 dark:border-stargaze-800">
                <div className="flex items-center mb-3">
                  <div className="h-10 w-10 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mr-3">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-stargaze-900 dark:text-white">Completed Reviews</h3>
                </div>
                <p className="text-3xl font-bold text-stargaze-900 dark:text-white mb-1">12</p>
                <p className="text-sm text-stargaze-500 dark:text-stargaze-400">Startups you've helped</p>
              </div>
              
              <div className="bg-white dark:bg-stargaze-900 p-6 rounded-xl shadow-subtle border border-stargaze-100 dark:border-stargaze-800">
                <div className="flex items-center mb-3">
                  <div className="h-10 w-10 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center mr-3">
                    <Clock className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-stargaze-900 dark:text-white">Upcoming Sessions</h3>
                </div>
                <p className="text-3xl font-bold text-stargaze-900 dark:text-white mb-1">3</p>
                <p className="text-sm text-stargaze-500 dark:text-stargaze-400">Scheduled consultations</p>
              </div>
              
              <div className="bg-white dark:bg-stargaze-900 p-6 rounded-xl shadow-subtle border border-stargaze-100 dark:border-stargaze-800">
                <div className="flex items-center mb-3">
                  <div className="h-10 w-10 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center mr-3">
                    <FileText className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-stargaze-900 dark:text-white">Content Contributions</h3>
                </div>
                <p className="text-3xl font-bold text-stargaze-900 dark:text-white mb-1">2</p>
                <p className="text-sm text-stargaze-500 dark:text-stargaze-400">Articles & resources published</p>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Main Tabs */}
          <AnimatedSection animation="fade-up" delay={200}>
            <Tabs defaultValue="overview" onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="overview" className="text-sm md:text-base">
                  <BarChart2 className="h-4 w-4 mr-2 md:mr-3" />
                  Overview
                </TabsTrigger>
                <TabsTrigger value="requests" className="text-sm md:text-base">
                  <MessageSquare className="h-4 w-4 mr-2 md:mr-3" />
                  Review Requests
                </TabsTrigger>
                <TabsTrigger value="sessions" className="text-sm md:text-base">
                  <Calendar className="h-4 w-4 mr-2 md:mr-3" />
                  Sessions
                </TabsTrigger>
                <TabsTrigger value="content" className="text-sm md:text-base">
                  <FileText className="h-4 w-4 mr-2 md:mr-3" />
                  Content Hub
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Performance Metrics</h2>
                    <MentorStats />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-stargaze-900 rounded-xl p-6 shadow-subtle">
                      <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white mb-4 flex items-center">
                        <DollarSign className="h-5 w-5 mr-2 text-green-500" /> 
                        Earnings Overview
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-stargaze-600 dark:text-stargaze-300">Current month earnings</span>
                          <span className="font-semibold">$520</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-stargaze-600 dark:text-stargaze-300">Previous month</span>
                          <span className="font-semibold">$640</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-stargaze-600 dark:text-stargaze-300">Total balance</span>
                          <span className="font-semibold">$1,240</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-stargaze-600 dark:text-stargaze-300">Next payout</span>
                          <span className="font-semibold">$520 (May 15)</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-stargaze-100 dark:border-stargaze-800">
                        <Button>
                          View Earnings History
                        </Button>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-stargaze-900 rounded-xl p-6 shadow-subtle">
                      <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white mb-4 flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-blue-500" /> 
                        Upcoming Sessions
                      </h3>
                      {sessionHistory?.filter(s => s.status === 'scheduled')?.length ? (
                        <div className="space-y-4">
                          {sessionHistory
                            .filter(s => s.status === 'scheduled')
                            .slice(0, 2)
                            .map(session => (
                              <div key={session.id} className="flex justify-between items-center border-b border-stargaze-100 dark:border-stargaze-800 pb-3">
                                <div>
                                  <h4 className="font-medium">{session.title}</h4>
                                  <p className="text-sm text-stargaze-500 dark:text-stargaze-400">
                                    {new Date(session.date).toLocaleDateString()} • {session.duration} min
                                  </p>
                                </div>
                                <Button variant="outline" size="sm">
                                  View
                                </Button>
                              </div>
                            ))}
                          <Button variant="link" className="p-0 mt-2">
                            View all sessions <ChevronRight className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                      ) : (
                        <p className="text-stargaze-500 dark:text-stargaze-400">No upcoming sessions scheduled.</p>
                      )}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="requests">
                <MentorReviewRequests />
              </TabsContent>
              
              <TabsContent value="sessions">
                <MentorSessions />
              </TabsContent>
              
              <TabsContent value="content">
                <MentorContentHub />
              </TabsContent>
            </Tabs>
          </AnimatedSection>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MentorDashboard;
