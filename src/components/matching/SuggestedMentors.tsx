
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/Button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Check, Clock, Star, UserCheck, Calendar, ChevronRight, Info } from "lucide-react";
import { Mentor, Startup, UserPreferences } from "@/shared/types/models";
import { getRecommendedMentors, getMatchRecommendationMessage } from "@/shared/utils/matching-utils";
import { useMentors } from "@/hooks/use-mentors";

interface SuggestedMentorsProps {
  startup: Startup | null;
  preferences?: UserPreferences;
  limit?: number;
}

export const SuggestedMentors = ({ 
  startup, 
  preferences = {
    skillsNeeded: [],
    goals: [],
    availability: [],
    industries: []
  }, 
  limit = 3 
}: SuggestedMentorsProps) => {
  const navigate = useNavigate();
  const { data: mentors, isLoading } = useMentors();
  const [suggestedMentors, setSuggestedMentors] = useState<{ mentor: Mentor, matchScore: number }[]>([]);
  
  useEffect(() => {
    if (mentors && startup) {
      const matches = getRecommendedMentors(mentors, startup, preferences);
      setSuggestedMentors(matches.slice(0, limit));
    }
  }, [mentors, startup, preferences, limit]);
  
  const handleViewProfile = (mentorId: string) => {
    navigate(`/mentor/${mentorId}`);
  };
  
  if (isLoading) {
    return (
      <Card className="w-full mb-6">
        <CardHeader>
          <CardTitle className="text-lg">Suggested Mentors</CardTitle>
          <CardDescription>Finding the perfect match for your needs...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[200px]" />
                  <Skeleton className="h-4 w-[150px]" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }
  
  if (!startup) {
    return (
      <Card className="w-full mb-6">
        <CardHeader>
          <CardTitle className="text-lg">Suggested Mentors</CardTitle>
          <CardDescription>Complete your startup profile to get mentor recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={() => navigate("/startup-profile")}>
            Complete Your Profile
          </Button>
        </CardContent>
      </Card>
    );
  }
  
  if (suggestedMentors.length === 0) {
    return (
      <Card className="w-full mb-6">
        <CardHeader>
          <CardTitle className="text-lg">Suggested Mentors</CardTitle>
          <CardDescription>Update your preferences to find mentor matches</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={() => navigate("/mentorship-matching")}>
            Update Matching Preferences
          </Button>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card className="w-full mb-6">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-lg">Suggested Mentors</CardTitle>
            <CardDescription>Based on your startup profile and preferences</CardDescription>
          </div>
          <Button variant="outline" onClick={() => navigate("/mentorship-matching")}>
            View All Matches
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {suggestedMentors.map(({ mentor, matchScore }) => (
            <div 
              key={mentor.id} 
              className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-lg border border-stargaze-100 dark:border-stargaze-800 hover:bg-stargaze-50 dark:hover:bg-stargaze-900/50 transition-colors"
            >
              <div className="flex-shrink-0">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={mentor.avatar} alt={mentor.name} />
                  <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
              
              <div className="flex-grow min-w-0">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                  <h4 className="font-medium text-base">{mentor.name}</h4>
                  <div className="flex items-center">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="flex items-center gap-1 bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-medium">
                            <UserCheck className="h-3 w-3" />
                            <span>{matchScore}% Match</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{getMatchRecommendationMessage(matchScore)}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
                
                <p className="text-sm text-stargaze-600 dark:text-stargaze-400 mb-2">
                  {mentor.role} at {mentor.company}
                </p>
                
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {mentor.expertise.slice(0, 3).map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {mentor.expertise.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{mentor.expertise.length - 3} more
                    </Badge>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-stargaze-600 dark:text-stargaze-400">
                  <div className="flex items-center">
                    <Star className="h-3 w-3 text-amber-500 mr-1" />
                    <span>{mentor.rating} ({mentor.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 text-green-500 mr-1" />
                    <span>{mentor.sessions} sessions</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 text-blue-500 mr-1" />
                    <span>${mentor.hourlyRate}/hour</span>
                  </div>
                </div>
              </div>
              
              <div className="flex-shrink-0 self-end sm:self-center mt-2 sm:mt-0">
                <Button
                  onClick={() => handleViewProfile(mentor.id)}
                  rightIcon={<ChevronRight className="h-4 w-4" />}
                  size="sm"
                >
                  View Profile
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="bg-stargaze-50 dark:bg-stargaze-900/50 border-t">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <Info className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm text-stargaze-600 dark:text-stargaze-400">
              Matches updated based on your latest preferences
            </span>
          </div>
          <Button variant="link" onClick={() => navigate("/mentorship-matching")}>
            Adjust Preferences
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
