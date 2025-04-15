
import { useState } from 'react';
import { MentorshipSession } from '@/shared/types/models';
import { formatDate, formatDuration } from '@/shared/utils/data-utils';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, FileText, Star, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

interface SessionHistoryListProps {
  sessions: MentorshipSession[];
  userRole: 'mentor' | 'founder';
  isLoading?: boolean;
  onViewDetails?: (sessionId: string) => void;
}

export const SessionHistoryList = ({ 
  sessions, 
  userRole, 
  isLoading = false,
  onViewDetails 
}: SessionHistoryListProps) => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  
  // Filter sessions into upcoming and past
  const upcomingSessions = sessions.filter(
    session => session.status === 'scheduled' && new Date(session.date) > new Date()
  );
  
  const pastSessions = sessions.filter(
    session => session.status === 'completed' || new Date(session.date) < new Date()
  );
  
  // Display appropriate message if no sessions
  if (!isLoading && sessions.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold mb-2">No sessions found</h3>
        <p className="text-muted-foreground">
          {userRole === 'founder' 
            ? "You haven't scheduled any mentorship sessions yet." 
            : "You don't have any mentorship sessions scheduled."}
        </p>
        {userRole === 'founder' && (
          <Button className="mt-4">Find a Mentor</Button>
        )}
      </div>
    );
  }
  
  // Helper function to render the appropriate status badge
  const getStatusBadge = (session: MentorshipSession) => {
    if (session.status === 'completed') {
      return <Badge className="bg-green-500"><CheckCircle className="h-3 w-3 mr-1" /> Completed</Badge>;
    } else if (session.status === 'cancelled') {
      return <Badge variant="destructive"><AlertCircle className="h-3 w-3 mr-1" /> Cancelled</Badge>;
    } else if (new Date(session.date) < new Date()) {
      return <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/20">Missed</Badge>;
    } else {
      return <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">Upcoming</Badge>;
    }
  };
  
  return (
    <div className="w-full">
      <Tabs defaultValue="upcoming" onValueChange={(value) => setActiveTab(value as 'upcoming' | 'past')}>
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="upcoming" className="text-sm md:text-base">
            <Calendar className="h-4 w-4 mr-2" />
            Upcoming Sessions ({upcomingSessions.length})
          </TabsTrigger>
          <TabsTrigger value="past" className="text-sm md:text-base">
            <Clock className="h-4 w-4 mr-2" />
            Past Sessions ({pastSessions.length})
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming" className="space-y-4">
          {upcomingSessions.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No upcoming sessions scheduled.</p>
            </div>
          ) : (
            upcomingSessions.map(session => (
              <SessionCard 
                key={session.id} 
                session={session} 
                userRole={userRole}
                onViewDetails={onViewDetails}
              />
            ))
          )}
        </TabsContent>
        
        <TabsContent value="past" className="space-y-4">
          {pastSessions.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No past sessions found.</p>
            </div>
          ) : (
            pastSessions.map(session => (
              <SessionCard 
                key={session.id} 
                session={session} 
                userRole={userRole}
                onViewDetails={onViewDetails}
              />
            ))
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

interface SessionCardProps {
  session: MentorshipSession;
  userRole: 'mentor' | 'founder';
  onViewDetails?: (sessionId: string) => void;
}

const SessionCard = ({ session, userRole, onViewDetails }: SessionCardProps) => {
  const isPast = new Date(session.date) < new Date();
  
  // Helper function to render the appropriate status badge
  const getStatusBadge = (session: MentorshipSession) => {
    if (session.status === 'completed') {
      return <Badge className="bg-green-500"><CheckCircle className="h-3 w-3 mr-1" /> Completed</Badge>;
    } else if (session.status === 'cancelled') {
      return <Badge variant="destructive"><AlertCircle className="h-3 w-3 mr-1" /> Cancelled</Badge>;
    } else if (new Date(session.date) < new Date()) {
      return <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/20">Missed</Badge>;
    } else {
      return <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">Upcoming</Badge>;
    }
  };
  
  return (
    <Card key={session.id} className="overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{session.title}</CardTitle>
            <CardDescription className="mt-1">
              {formatDate(session.date)} • {formatDuration(session.duration)}
            </CardDescription>
          </div>
          {getStatusBadge(session)}
        </div>
      </CardHeader>
      
      <CardContent className="pb-4">
        {session.summary && (
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-1 flex items-center">
              <FileText className="h-4 w-4 mr-1 text-primary" /> Summary
            </h4>
            <p className="text-sm text-muted-foreground">{session.summary}</p>
          </div>
        )}
        
        {userRole === 'founder' && session.founderNotes && (
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-1 flex items-center">
              <MessageSquare className="h-4 w-4 mr-1 text-primary" /> Your Notes
            </h4>
            <p className="text-sm text-muted-foreground">{session.founderNotes}</p>
          </div>
        )}
        
        {userRole === 'mentor' && session.mentorNotes && (
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-1 flex items-center">
              <MessageSquare className="h-4 w-4 mr-1 text-primary" /> Your Notes
            </h4>
            <p className="text-sm text-muted-foreground">{session.mentorNotes}</p>
          </div>
        )}
        
        {userRole === 'mentor' && session.founderFeedback && (
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-1 flex items-center">
              <Star className="h-4 w-4 mr-1 text-amber-500" /> Founder Feedback
            </h4>
            <div className="flex items-center mb-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${i < (session.founderFeedback?.rating || 0) ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} 
                />
              ))}
              <span className="ml-2 text-sm">{session.founderFeedback.rating}/5</span>
            </div>
            {session.founderFeedback.comments && (
              <p className="text-sm text-muted-foreground">"{session.founderFeedback.comments}"</p>
            )}
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-end pt-2">
        {!isPast && (
          <Button variant="outline" size="sm" className="mr-2">
            {session.status === 'scheduled' ? 'Reschedule' : 'Schedule'}
          </Button>
        )}
        
        {isPast && session.status !== 'completed' && userRole === 'founder' && (
          <Button variant="outline" size="sm" className="mr-2">
            Provide Feedback
          </Button>
        )}
        
        <Button size="sm" onClick={() => onViewDetails?.(session.id)}>
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};
