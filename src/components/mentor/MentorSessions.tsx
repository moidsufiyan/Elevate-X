
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Video, User, Calendar as CalendarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

// Sample data for upcoming mentoring sessions
const upcomingSessions = [
  {
    id: "1",
    startupName: "GreenTech Solutions",
    startupLogo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    founderName: "Alex Martinez",
    date: "2023-10-25",
    startTime: "10:00 AM",
    endTime: "11:00 AM",
    topic: "Product-Market Fit Strategy",
    notes: "Alex wants to discuss their recent user feedback and how to adjust their product roadmap accordingly."
  },
  {
    id: "2",
    startupName: "FinEase",
    startupLogo: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    founderName: "Sophia Chen",
    date: "2023-10-26",
    startTime: "2:00 PM",
    endTime: "3:00 PM",
    topic: "Investor Pitch Preparation",
    notes: "Sophia is preparing for an investor meeting next week and wants to practice her pitch and refine key metrics."
  },
  {
    id: "3",
    startupName: "DataSense AI",
    startupLogo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    founderName: "Marcus Johnson",
    date: "2023-10-28",
    startTime: "11:30 AM",
    endTime: "12:30 PM",
    topic: "Go-to-Market Strategy",
    notes: "Marcus wants to discuss channel strategies and prioritization for their upcoming product launch."
  }
];

// Sample data for past sessions
const pastSessions = [
  {
    id: "4",
    startupName: "EduLearn",
    startupLogo: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    founderName: "Nadia Williams",
    date: "2023-10-10",
    startTime: "1:00 PM",
    endTime: "2:00 PM",
    topic: "Customer Acquisition Strategy",
    notes: "Discussed strategies to reduce CAC and improve onboarding conversion. Recommended A/B testing on landing page and email sequence refinements.",
    feedback: 5
  },
  {
    id: "5",
    startupName: "MediConnect",
    startupLogo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    founderName: "James Roberts",
    date: "2023-10-05",
    startTime: "11:00 AM",
    endTime: "12:00 PM",
    topic: "Business Model Evaluation",
    notes: "Reviewed new B2B approach. Suggested testing pricing model with smaller clinics before scaling. Identified potential channel partnerships.",
    feedback: 4
  }
];

export const MentorSessions = () => {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
          <TabsTrigger value="past">Past Sessions</TabsTrigger>
          <TabsTrigger value="availability">Manage Availability</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming" className="space-y-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white">
              Upcoming Sessions
            </h3>
            <Button size="sm">
              <CalendarIcon className="h-4 w-4 mr-2" />
              Sync Calendar
            </Button>
          </div>
          
          {upcomingSessions.length > 0 ? (
            <div className="space-y-4">
              {upcomingSessions.map((session) => (
                <div 
                  key={session.id} 
                  className="bg-white dark:bg-stargaze-900 rounded-xl shadow-subtle border border-stargaze-100 dark:border-stargaze-800 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                        <img 
                          src={session.startupLogo} 
                          alt={session.startupName} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-wrap justify-between items-start gap-4 mb-2">
                          <div>
                            <h4 className="text-lg font-semibold text-stargaze-900 dark:text-white mb-1">
                              {session.startupName}
                            </h4>
                            <p className="text-sm text-stargaze-600 dark:text-stargaze-400">
                              Meeting with {session.founderName}
                            </p>
                          </div>
                          
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              Reschedule
                            </Button>
                            <Button size="sm">
                              <Video className="h-4 w-4 mr-2" />
                              Join Meeting
                            </Button>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <h5 className="font-medium text-stargaze-900 dark:text-white mb-2">
                            {session.topic}
                          </h5>
                          <p className="text-stargaze-600 dark:text-stargaze-300 text-sm">
                            {session.notes}
                          </p>
                        </div>
                        
                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-stargaze-500 dark:text-stargaze-400">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1.5" />
                            <span>{new Date(session.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1.5" />
                            <span>{session.startTime} - {session.endTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-stargaze-50 dark:bg-stargaze-900/50 rounded-xl">
              <p className="text-stargaze-600 dark:text-stargaze-400">
                You don't have any upcoming sessions scheduled.
              </p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="past" className="space-y-6">
          <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white mb-4">
            Past Sessions
          </h3>
          
          {pastSessions.length > 0 ? (
            <div className="space-y-4">
              {pastSessions.map((session) => (
                <div 
                  key={session.id} 
                  className="bg-white dark:bg-stargaze-900 rounded-xl shadow-subtle border border-stargaze-100 dark:border-stargaze-800 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                        <img 
                          src={session.startupLogo} 
                          alt={session.startupName} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-wrap justify-between items-start gap-4 mb-2">
                          <div>
                            <h4 className="text-lg font-semibold text-stargaze-900 dark:text-white mb-1">
                              {session.startupName}
                            </h4>
                            <p className="text-sm text-stargaze-600 dark:text-stargaze-400">
                              Met with {session.founderName}
                            </p>
                          </div>
                          
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <svg 
                                key={i} 
                                className={cn(
                                  "w-4 h-4",
                                  i < session.feedback ? "text-amber-500 fill-amber-500" : "text-stargaze-300 dark:text-stargaze-600"
                                )}
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <h5 className="font-medium text-stargaze-900 dark:text-white mb-2">
                            {session.topic}
                          </h5>
                          <p className="text-stargaze-600 dark:text-stargaze-300 text-sm">
                            {session.notes}
                          </p>
                        </div>
                        
                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-stargaze-500 dark:text-stargaze-400">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1.5" />
                            <span>{new Date(session.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1.5" />
                            <span>{session.startTime} - {session.endTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-stargaze-50 dark:bg-stargaze-900/50 rounded-xl">
              <p className="text-stargaze-600 dark:text-stargaze-400">
                You don't have any past sessions yet.
              </p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="availability" className="space-y-6">
          <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white mb-4">
            Manage Your Availability
          </h3>
          
          <div className="bg-white dark:bg-stargaze-900 rounded-xl shadow-subtle border border-stargaze-100 dark:border-stargaze-800 p-6">
            <p className="text-stargaze-600 dark:text-stargaze-300 mb-6">
              Set your regular availability for mentoring sessions. Entrepreneurs will only be able to book during these time slots.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <h4 className="font-medium text-stargaze-900 dark:text-white">Weekly Schedule</h4>
                
                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
                  <div key={day} className="flex items-center justify-between">
                    <span className="text-stargaze-700 dark:text-stargaze-300 w-32">{day}</span>
                    <div className="flex items-center space-x-2">
                      <select className="flex h-9 w-24 rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option>9:00 AM</option>
                        <option>10:00 AM</option>
                        <option selected>1:00 PM</option>
                        <option>2:00 PM</option>
                      </select>
                      <span>to</span>
                      <select className="flex h-9 w-24 rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option>5:00 PM</option>
                        <option selected>6:00 PM</option>
                        <option>7:00 PM</option>
                        <option>8:00 PM</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium text-stargaze-900 dark:text-white">Session Settings</h4>
                
                <div className="space-y-2">
                  <label className="text-sm text-stargaze-700 dark:text-stargaze-300">Session Duration</label>
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option>30 minutes</option>
                    <option selected>60 minutes</option>
                    <option>90 minutes</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-stargaze-700 dark:text-stargaze-300">Buffer Between Sessions</label>
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option>No buffer</option>
                    <option>5 minutes</option>
                    <option selected>15 minutes</option>
                    <option>30 minutes</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-stargaze-700 dark:text-stargaze-300">Maximum Sessions Per Day</label>
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option>1 session</option>
                    <option selected>2 sessions</option>
                    <option>3 sessions</option>
                    <option>4 sessions</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button>Save Availability Settings</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
