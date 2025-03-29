
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { format } from "date-fns";
import { ArrowLeft, ChevronRight, Clock, CreditCard, Calendar as CalendarIcon, MessageSquare, Star } from "lucide-react";

// Sample mentor data
const mentorData = {
  id: "1",
  name: "Sarah Johnson",
  role: "Marketing Expert",
  company: "GrowthLabs",
  expertise: ["Digital Marketing", "Growth Strategy", "Brand Development"],
  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
  rating: 4.9,
  reviewCount: 128,
  hourlyRate: "$150",
  sessionTypes: [
    { id: "1", name: "Marketing Strategy Session", description: "In-depth analysis of your current marketing strategy and roadmap for improvement", duration: 60, price: 150 },
    { id: "2", name: "Growth Optimization Session", description: "Focus on optimizing specific channels for growth and improving conversion", duration: 60, price: 150 },
    { id: "3", name: "Brand Development Workshop", description: "Collaborative session to define or refine your brand identity and messaging", duration: 90, price: 220 }
  ],
  availableTimeSlots: {
    "2023-07-17": ["10:00", "11:00", "14:00", "15:00"],
    "2023-07-18": ["09:00", "13:00", "16:00"],
    "2023-07-19": ["10:00", "11:00", "15:00"],
    "2023-07-20": ["09:00", "10:00", "14:00"],
    "2023-07-21": ["11:00", "13:00", "16:00"]
  }
};

// This would be replaced with actual future dates in a real app
const getAvailableDates = () => {
  const today = new Date();
  const availableDates: Date[] = [];
  
  // Add some dates for the next 10 days
  for (let i = 1; i <= 10; i++) {
    const date = new Date();
    date.setDate(today.getDate() + i);
    
    // Only add weekdays (Monday to Friday)
    if (date.getDay() !== 0 && date.getDay() !== 6) {
      availableDates.push(date);
    }
  }
  
  return availableDates;
};

const MentorBooking = () => {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [selectedSessionType, setSelectedSessionType] = useState<string | null>(null);
  const [notes, setNotes] = useState("");
  
  // In a real app, fetch mentor data based on ID
  const mentor = mentorData;
  
  const availableDates = getAvailableDates();
  
  // Format selected date as string key for the availableTimeSlots object
  const formattedSelectedDate = selectedDate ? format(selectedDate, "yyyy-MM-dd") : null;
  
  // Get time slots for the selected date
  const timeSlots = formattedSelectedDate && mentor.availableTimeSlots[formattedSelectedDate] 
    ? mentor.availableTimeSlots[formattedSelectedDate] 
    : [];
  
  // Find selected session type details
  const selectedSession = mentor.sessionTypes.find(session => session.id === selectedSessionType);
  
  // Calculate total price
  const totalPrice = selectedSession ? selectedSession.price : 0;
  
  const handleSubmit = () => {
    if (!selectedDate || !selectedTimeSlot || !selectedSessionType) {
      toast.error("Please complete all booking details");
      return;
    }
    
    // In a real app, this would call an API to book the session
    toast.success("Session booked successfully!");
    
    // Redirect or show confirmation would happen here
    console.log({
      mentorId: mentor.id,
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      sessionType: selectedSessionType,
      notes
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-8">
            <Link to={`/mentor/${id}`} className="inline-flex items-center text-primary hover:underline mb-4">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to {mentor.name}'s Profile
            </Link>
            
            <h1 className="text-3xl font-bold text-stargaze-900 dark:text-white mb-4">
              Book a Session with {mentor.name}
            </h1>
            <p className="text-lg text-stargaze-600 dark:text-stargaze-300 max-w-3xl">
              Select a session type, date, and time to schedule your mentoring session.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Left Column - Session Details */}
            <div className="lg:col-span-2 space-y-8">
              <AnimatedSection animation="fade-up" delay={100}>
                <Card>
                  <CardHeader>
                    <CardTitle>1. Select Session Type</CardTitle>
                    <CardDescription>
                      Choose the type of session that best fits your needs.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={selectedSessionType || ""} onValueChange={setSelectedSessionType}>
                      <div className="space-y-4">
                        {mentor.sessionTypes.map((session) => (
                          <div key={session.id} className={`border rounded-lg p-4 transition-all ${
                            selectedSessionType === session.id ? 'border-primary ring-2 ring-primary/20' : 'border-stargaze-200 dark:border-stargaze-800'
                          }`}>
                            <RadioGroupItem value={session.id} id={`session-${session.id}`} className="sr-only" />
                            <Label htmlFor={`session-${session.id}`} className="flex flex-col cursor-pointer">
                              <div className="flex justify-between">
                                <span className="font-medium text-stargaze-900 dark:text-white">
                                  {session.name}
                                </span>
                                <div className="flex items-center">
                                  <Clock className="h-4 w-4 text-stargaze-500 mr-1" />
                                  <span className="text-sm text-stargaze-500">{session.duration} min</span>
                                  <span className="mx-2 text-stargaze-300">|</span>
                                  <span className="font-medium text-primary">${session.price}</span>
                                </div>
                              </div>
                              <p className="mt-1 text-sm text-stargaze-600 dark:text-stargaze-400">
                                {session.description}
                              </p>
                            </Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-up" delay={150}>
                <Card>
                  <CardHeader>
                    <CardTitle>2. Select Date & Time</CardTitle>
                    <CardDescription>
                      Choose a date and time that works for your schedule.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-sm font-medium mb-2 flex items-center">
                          <CalendarIcon className="h-4 w-4 mr-1 text-primary" />
                          Available Dates
                        </h3>
                        <div className="border rounded-lg p-4 border-stargaze-200 dark:border-stargaze-800">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            disabled={(date) => {
                              // Disable past dates and dates not in availableDates
                              return date < new Date() || !availableDates.some(
                                availableDate => availableDate.toDateString() === date.toDateString()
                              );
                            }}
                            className="rounded-md"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium mb-2 flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-primary" />
                          Available Time Slots
                        </h3>
                        <div className="border rounded-lg p-4 border-stargaze-200 dark:border-stargaze-800 h-[calc(100%-28px)]">
                          {selectedDate ? (
                            timeSlots.length > 0 ? (
                              <div className="grid grid-cols-2 gap-2">
                                {timeSlots.map((time) => (
                                  <Button
                                    key={time}
                                    variant={selectedTimeSlot === time ? "default" : "outline"}
                                    className="justify-center"
                                    onClick={() => setSelectedTimeSlot(time)}
                                  >
                                    {time}
                                  </Button>
                                ))}
                              </div>
                            ) : (
                              <div className="flex items-center justify-center h-full">
                                <p className="text-stargaze-500 text-center">
                                  No available time slots for this date.
                                </p>
                              </div>
                            )
                          ) : (
                            <div className="flex items-center justify-center h-full">
                              <p className="text-stargaze-500 text-center">
                                Please select a date to view available time slots.
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-up" delay={200}>
                <Card>
                  <CardHeader>
                    <CardTitle>3. Session Details</CardTitle>
                    <CardDescription>
                      Provide any additional information that would help the mentor prepare for your session.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      placeholder="What specific topics or questions would you like to discuss during this session?"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="min-h-32 resize-y"
                    />
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
            
            {/* Right Column - Booking Summary */}
            <div className="lg:col-span-1">
              <AnimatedSection animation="fade-up" delay={250}>
                <div className="sticky top-24">
                  <Card>
                    <CardHeader>
                      <CardTitle>Booking Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-5">
                      <div className="flex items-center space-x-4">
                        <img 
                          src={mentor.image} 
                          alt={mentor.name} 
                          className="h-16 w-16 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-medium text-stargaze-900 dark:text-white">
                            {mentor.name}
                          </h3>
                          <div className="flex items-center text-sm text-stargaze-600 dark:text-stargaze-400">
                            <span>{mentor.role}</span>
                            <span className="mx-1">•</span>
                            <span className="flex items-center">
                              <Star className="h-3 w-3 text-amber-500 mr-1" fill="currentColor" />
                              {mentor.rating}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-stargaze-600 dark:text-stargaze-400">Session Type:</span>
                          <span className="font-medium">
                            {selectedSession ? selectedSession.name : "Not selected"}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-stargaze-600 dark:text-stargaze-400">Date:</span>
                          <span className="font-medium">
                            {selectedDate ? format(selectedDate, "MMMM d, yyyy") : "Not selected"}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-stargaze-600 dark:text-stargaze-400">Time:</span>
                          <span className="font-medium">
                            {selectedTimeSlot ? selectedTimeSlot : "Not selected"}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-stargaze-600 dark:text-stargaze-400">Duration:</span>
                          <span className="font-medium">
                            {selectedSession ? `${selectedSession.duration} minutes` : "N/A"}
                          </span>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div className="space-y-1">
                        <div className="flex justify-between text-lg font-semibold">
                          <span>Total:</span>
                          <span className="text-primary">${totalPrice}</span>
                        </div>
                        <p className="text-xs text-stargaze-500">
                          You will not be charged until the mentor accepts your booking request.
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter className="flex-col space-y-4">
                      <Button 
                        className="w-full" 
                        size="lg" 
                        disabled={!selectedDate || !selectedTimeSlot || !selectedSessionType}
                        onClick={handleSubmit}
                      >
                        <CreditCard className="h-5 w-5 mr-2" />
                        Confirm Booking
                      </Button>
                      <p className="text-xs text-center text-stargaze-500">
                        By booking, you agree to our Terms of Service and Cancellation Policy.
                      </p>
                    </CardFooter>
                  </Card>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MentorBooking;
