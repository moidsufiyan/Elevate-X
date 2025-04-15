
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/Button";
import { SuggestedMentors } from "@/components/matching/SuggestedMentors";
import { MentorMatchConfiguration } from "@/components/matching/MentorMatchConfiguration";
import { Startup, UserPreferences } from "@/shared/types/models";
import { useMentorMatching } from "@/hooks/use-mentor-matching";
import { useMentors } from "@/hooks/use-mentors";
import { SearchX, Sparkles, Settings, ListFilter } from "lucide-react";

// Mock user and startup for demo purposes
const MOCK_USER_ID = "user-1";
const MOCK_STARTUP: Startup = {
  id: "startup-1",
  name: "EcoHarvest",
  description: "Sustainable farming solutions using IoT and AI to optimize crop yields while reducing environmental impact.",
  industry: "AgTech",
  stage: "Seed",
  foundingYear: 2022,
  logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3603?auto=format&fit=crop&w=1074&q=80",
  founders: [
    {
      name: "Alex Johnson",
      role: "CEO",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=776&q=80"
    }
  ],
  location: "California, USA",
  funding: "Pre-seed",
  employees: 8,
  website: "https://ecoharvest.io"
};

const MentorMatching = () => {
  const [activeTab, setActiveTab] = useState("matches");
  const { data: mentors, isLoading: mentorsLoading } = useMentors();
  
  const {
    preferences,
    matchingResults,
    savePreferences,
    isLoading: preferencesLoading,
    isSaving
  } = useMentorMatching({
    userId: MOCK_USER_ID,
    startup: MOCK_STARTUP,
    mentors: mentors || []
  });
  
  const handleSavePreferences = (newPreferences: UserPreferences) => {
    savePreferences(newPreferences);
    setActiveTab("matches");
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-4xl font-bold text-stargaze-900 dark:text-white mb-4">
                  Find Your Perfect Mentor Match
                </h1>
                <p className="text-lg text-stargaze-600 dark:text-stargaze-300 max-w-3xl">
                  Our intelligent matching system connects you with mentors who can help your specific needs
                </p>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-2 mb-8 w-full max-w-md">
                <TabsTrigger value="matches" className="text-sm md:text-base">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Mentor Matches
                </TabsTrigger>
                <TabsTrigger value="preferences" className="text-sm md:text-base">
                  <Settings className="h-4 w-4 mr-2" />
                  Matching Preferences
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="matches" className="pb-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="col-span-3">
                    <AnimatedSection delay={150} animation="fade-up">
                      <div className="bg-white dark:bg-stargaze-900 rounded-xl p-6 shadow-sm border border-stargaze-100 dark:border-stargaze-800 mb-8">
                        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
                          <div>
                            <h2 className="text-xl font-bold mb-2 flex items-center">
                              <Sparkles className="h-5 w-5 text-primary mr-2" />
                              Your Perfect Mentor Matches
                            </h2>
                            <p className="text-stargaze-600 dark:text-stargaze-400">
                              Mentors ranked by match score based on your startup needs and preferences
                            </p>
                          </div>
                          
                          <Button 
                            variant="outline" 
                            leftIcon={<Settings className="h-4 w-4" />}
                            onClick={() => setActiveTab("preferences")}
                          >
                            Adjust Matching
                          </Button>
                        </div>
                        
                        {mentorsLoading || preferencesLoading ? (
                          <div className="text-center py-10">
                            <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
                              <Sparkles className="h-6 w-6 text-primary animate-pulse" />
                            </div>
                            <h3 className="text-lg font-medium mb-2">Finding your perfect matches...</h3>
                            <p className="text-stargaze-600 dark:text-stargaze-400">
                              We're analyzing your profile and preferences to identify the best mentors for your needs
                            </p>
                          </div>
                        ) : matchingResults.length > 0 ? (
                          <div className="space-y-6 mt-6">
                            {matchingResults.map(({ mentor, matchScore }) => (
                              <div 
                                key={mentor.id}
                                className="flex flex-col md:flex-row gap-6 p-5 border border-stargaze-100 dark:border-stargaze-800 rounded-lg hover:bg-stargaze-50 dark:hover:bg-stargaze-900/50 transition-all"
                              >
                                <div className="flex items-center gap-4">
                                  <div className="relative">
                                    <img 
                                      src={mentor.avatar} 
                                      alt={mentor.name} 
                                      className="w-16 h-16 rounded-full object-cover border-2 border-white dark:border-stargaze-800"
                                    />
                                    <div className="absolute -bottom-2 -right-2 bg-primary text-white text-xs font-bold rounded-full h-8 w-8 flex items-center justify-center border-2 border-white dark:border-stargaze-800">
                                      {matchScore}%
                                    </div>
                                  </div>
                                  
                                  <div>
                                    <h3 className="font-semibold">{mentor.name}</h3>
                                    <p className="text-sm text-stargaze-600 dark:text-stargaze-400">
                                      {mentor.role} at {mentor.company}
                                    </p>
                                  </div>
                                </div>
                                
                                <div className="md:flex-grow grid grid-cols-1 md:grid-cols-3 gap-4">
                                  <div>
                                    <h4 className="text-xs uppercase text-stargaze-500 font-medium mb-1">Expertise</h4>
                                    <div className="flex flex-wrap gap-1">
                                      {mentor.expertise.slice(0, 3).map((skill, index) => (
                                        <span 
                                          key={index}
                                          className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full"
                                        >
                                          {skill}
                                        </span>
                                      ))}
                                      {mentor.expertise.length > 3 && (
                                        <span className="text-xs px-2 py-0.5 bg-stargaze-100 dark:bg-stargaze-800 rounded-full">
                                          +{mentor.expertise.length - 3}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                  
                                  <div>
                                    <h4 className="text-xs uppercase text-stargaze-500 font-medium mb-1">Top Matches</h4>
                                    <div className="flex flex-wrap gap-1">
                                      <span className="text-xs px-2 py-0.5 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full">
                                        Industry Match
                                      </span>
                                      <span className="text-xs px-2 py-0.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full">
                                        Skill Match
                                      </span>
                                    </div>
                                  </div>
                                  
                                  <div>
                                    <h4 className="text-xs uppercase text-stargaze-500 font-medium mb-1">Session Rate</h4>
                                    <p className="font-medium">${mentor.hourlyRate}/hour</p>
                                  </div>
                                </div>
                                
                                <div className="flex items-center gap-2">
                                  <Button variant="secondary" className="w-full md:w-auto">
                                    Schedule Call
                                  </Button>
                                  <Button className="w-full md:w-auto">
                                    View Profile
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center py-10">
                            <div className="inline-block p-3 bg-stargaze-100 dark:bg-stargaze-800 rounded-full mb-4">
                              <SearchX className="h-6 w-6 text-stargaze-500" />
                            </div>
                            <h3 className="text-lg font-medium mb-2">No matches found</h3>
                            <p className="text-stargaze-600 dark:text-stargaze-400 max-w-md mx-auto mb-4">
                              Try adjusting your matching preferences to find mentors who can help with your specific needs
                            </p>
                            <Button onClick={() => setActiveTab("preferences")}>
                              Update Preferences
                            </Button>
                          </div>
                        )}
                      </div>
                    </AnimatedSection>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="preferences">
                <AnimatedSection delay={150} animation="fade-up">
                  <MentorMatchConfiguration 
                    initialPreferences={preferences || undefined}
                    onSavePreferences={handleSavePreferences}
                  />
                </AnimatedSection>
              </TabsContent>
            </Tabs>
          </AnimatedSection>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MentorMatching;
