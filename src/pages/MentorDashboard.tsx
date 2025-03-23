
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Calendar, MessageSquare, FileText, Clock, Users, BookOpen, 
  ChevronRight, CheckCircle, AlertCircle, HelpCircle 
} from "lucide-react";
import { MentorReviewRequests } from "@/components/mentor/MentorReviewRequests";
import { MentorSessions } from "@/components/mentor/MentorSessions";
import { MentorContentHub } from "@/components/mentor/MentorContentHub";

const MentorDashboard = () => {
  const [activeTab, setActiveTab] = useState("requests");
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-8">
            <h1 className="text-4xl font-bold text-stargaze-900 dark:text-white mb-4">
              Mentor Dashboard
            </h1>
            <p className="text-lg text-stargaze-600 dark:text-stargaze-300 max-w-3xl">
              Manage your mentoring activities, review startup requests, and contribute your expertise to the community.
            </p>
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
                    <BookOpen className="h-5 w-5" />
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
            <Tabs defaultValue="requests" onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
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
