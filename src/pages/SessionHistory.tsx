
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useSessionHistory } from "@/shared/utils/data-utils";
import { SessionHistoryList } from "@/components/session/SessionHistoryList";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Clock, 
  FileText, 
  MessageSquare,
  Download
} from "lucide-react";

// Mock current user - would come from auth context in real app
const MOCK_USER = {
  id: "founder-1",
  role: "founder" as const
};

const SessionHistory = () => {
  // Fetch sessions for the current user
  const { data: sessions, isLoading, error } = useSessionHistory(MOCK_USER.id, MOCK_USER.role);
  const [selectedSessionId, setSelectedSessionId] = useState<string | null>(null);
  
  const handleViewDetails = (sessionId: string) => {
    setSelectedSessionId(sessionId);
    console.log("View details for session:", sessionId);
    // In a real app, this would navigate to a detailed view or open a modal
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-8">
            <h1 className="text-4xl font-bold text-stargaze-900 dark:text-white mb-4">
              Mentorship Session History
            </h1>
            <p className="text-lg text-stargaze-600 dark:text-stargaze-300 max-w-3xl">
              Track your mentorship journey, review past sessions, and prepare for upcoming meetings.
            </p>
          </AnimatedSection>
          
          {/* Quick Stats */}
          <AnimatedSection animation="fade-up" delay={100} className="mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-stargaze-900 p-6 rounded-xl shadow-subtle border border-stargaze-100 dark:border-stargaze-800">
                <div className="flex items-center mb-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-stargaze-900 dark:text-white">Total Sessions</h3>
                </div>
                <p className="text-3xl font-bold text-stargaze-900 dark:text-white mb-1">
                  {isLoading ? '...' : sessions?.length || 0}
                </p>
                <p className="text-sm text-stargaze-500 dark:text-stargaze-400">Mentorship sessions</p>
              </div>
              
              <div className="bg-white dark:bg-stargaze-900 p-6 rounded-xl shadow-subtle border border-stargaze-100 dark:border-stargaze-800">
                <div className="flex items-center mb-3">
                  <div className="h-10 w-10 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mr-3">
                    <Clock className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-stargaze-900 dark:text-white">Hours of Mentorship</h3>
                </div>
                <p className="text-3xl font-bold text-stargaze-900 dark:text-white mb-1">
                  {isLoading ? '...' : (sessions?.reduce((total, session) => total + session.duration, 0) || 0) / 60}
                </p>
                <p className="text-sm text-stargaze-500 dark:text-stargaze-400">Hours of guidance</p>
              </div>
              
              <div className="bg-white dark:bg-stargaze-900 p-6 rounded-xl shadow-subtle border border-stargaze-100 dark:border-stargaze-800">
                <div className="flex items-center mb-3">
                  <div className="h-10 w-10 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center mr-3">
                    <FileText className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-stargaze-900 dark:text-white">Notes Created</h3>
                </div>
                <p className="text-3xl font-bold text-stargaze-900 dark:text-white mb-1">
                  {isLoading ? '...' : sessions?.filter(s => s.founderNotes || s.mentorNotes).length || 0}
                </p>
                <p className="text-sm text-stargaze-500 dark:text-stargaze-400">Session notes</p>
              </div>
              
              <div className="bg-white dark:bg-stargaze-900 p-6 rounded-xl shadow-subtle border border-stargaze-100 dark:border-stargaze-800">
                <div className="flex items-center mb-3">
                  <div className="h-10 w-10 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center mr-3">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-stargaze-900 dark:text-white">Feedback Given</h3>
                </div>
                <p className="text-3xl font-bold text-stargaze-900 dark:text-white mb-1">
                  {isLoading ? '...' : sessions?.filter(s => s.founderFeedback).length || 0}
                </p>
                <p className="text-sm text-stargaze-500 dark:text-stargaze-400">Session reviews</p>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Action Buttons */}
          <AnimatedSection animation="fade-up" delay={150} className="mb-8">
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule New Session
              </Button>
              <Button size="lg" variant="outline" className="flex items-center">
                <Download className="mr-2 h-5 w-5" />
                Export Session History
              </Button>
            </div>
          </AnimatedSection>
          
          {/* Session History */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="bg-white dark:bg-stargaze-900 p-6 rounded-xl shadow-subtle border border-stargaze-100 dark:border-stargaze-800">
              <h2 className="text-2xl font-bold mb-6">Your Sessions</h2>
              <SessionHistoryList 
                sessions={sessions || []} 
                userRole={MOCK_USER.role}
                isLoading={isLoading}
                onViewDetails={handleViewDetails}
              />
            </div>
          </AnimatedSection>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SessionHistory;
