
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Calendar, BookOpen, Target, Clock, MessageSquare, BarChart, 
  ChevronRight, CheckCircle, FileText, Award
} from "lucide-react";
import { SessionHistoryList } from "@/components/session/SessionHistoryList";
import { FounderKPIs } from "@/components/founder/FounderKPIs";
import { FounderLearningPaths } from "@/components/founder/FounderLearningPaths";
import { useSessionHistory } from "@/shared/utils/data-utils";

const FounderDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const { data: sessionHistory, isLoading } = useSessionHistory("founder-1", "founder");
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-8">
            <h1 className="text-4xl font-bold text-stargaze-900 dark:text-white mb-4">
              Founder Dashboard
            </h1>
            <p className="text-lg text-stargaze-600 dark:text-stargaze-300 max-w-3xl">
              Track your progress, manage your mentorship sessions, and access your learning resources.
            </p>
          </AnimatedSection>
          
          {/* Quick Stats */}
          <FounderKPIs />
          
          {/* Main Tabs */}
          <AnimatedSection animation="fade-up" delay={200}>
            <Tabs defaultValue="overview" onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="overview" className="text-sm md:text-base">
                  <BarChart className="h-4 w-4 mr-2 md:mr-3" />
                  Overview
                </TabsTrigger>
                <TabsTrigger value="sessions" className="text-sm md:text-base">
                  <Calendar className="h-4 w-4 mr-2 md:mr-3" />
                  Sessions
                </TabsTrigger>
                <TabsTrigger value="learning" className="text-sm md:text-base">
                  <BookOpen className="h-4 w-4 mr-2 md:mr-3" />
                  Learning Paths
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white dark:bg-stargaze-900 rounded-xl p-6 shadow-subtle">
                    <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white mb-4 flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-primary" /> 
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
                        <Button variant="link" className="p-0">
                          View all sessions <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    ) : (
                      <p className="text-stargaze-500 dark:text-stargaze-400">No upcoming sessions scheduled.</p>
                    )}
                  </div>
                  
                  <div className="bg-white dark:bg-stargaze-900 rounded-xl p-6 shadow-subtle">
                    <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white mb-4 flex items-center">
                      <BookOpen className="h-5 w-5 mr-2 text-primary" /> 
                      Learning Progress
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">First Fundraise</span>
                          <span className="text-sm text-stargaze-500 dark:text-stargaze-400">3/5 modules</span>
                        </div>
                        <div className="w-full bg-stargaze-100 dark:bg-stargaze-800 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Product-Market Fit</span>
                          <span className="text-sm text-stargaze-500 dark:text-stargaze-400">1/4 modules</span>
                        </div>
                        <div className="w-full bg-stargaze-100 dark:bg-stargaze-800 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '25%' }}></div>
                        </div>
                      </div>
                      
                      <Button variant="link" className="p-0">
                        View all paths <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-stargaze-900 rounded-xl p-6 shadow-subtle">
                    <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white mb-4 flex items-center">
                      <Award className="h-5 w-5 mr-2 text-primary" /> 
                      Recent Achievements
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="h-8 w-8 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mr-3 mt-0.5">
                          <CheckCircle className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium">Completed 5 mentorship sessions</h4>
                          <p className="text-sm text-stargaze-500 dark:text-stargaze-400">2 days ago</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                          <FileText className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium">Completed "Business Model Canvas" module</h4>
                          <p className="text-sm text-stargaze-500 dark:text-stargaze-400">1 week ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-stargaze-900 rounded-xl p-6 shadow-subtle">
                    <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white mb-4 flex items-center">
                      <Target className="h-5 w-5 mr-2 text-primary" /> 
                      Goals Progress
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Complete pitch deck</span>
                          <span className="text-sm text-stargaze-500 dark:text-stargaze-400">75%</span>
                        </div>
                        <div className="w-full bg-stargaze-100 dark:bg-stargaze-800 rounded-full h-2">
                          <div className="bg-amber-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Validate customer segment</span>
                          <span className="text-sm text-stargaze-500 dark:text-stargaze-400">40%</span>
                        </div>
                        <div className="w-full bg-stargaze-100 dark:bg-stargaze-800 rounded-full h-2">
                          <div className="bg-amber-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                        </div>
                      </div>
                      
                      <Button variant="outline" size="sm" className="mt-2">
                        Update Goals
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="sessions">
                <SessionHistoryList 
                  sessions={sessionHistory || []} 
                  userRole="founder"
                  isLoading={isLoading}
                  onViewDetails={(id) => console.log("View session details:", id)}
                />
              </TabsContent>
              
              <TabsContent value="learning">
                <FounderLearningPaths />
              </TabsContent>
            </Tabs>
          </AnimatedSection>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FounderDashboard;
