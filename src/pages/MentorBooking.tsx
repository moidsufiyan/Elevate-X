
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
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
import { format, isToday, isBefore, addDays } from "date-fns";
import { 
  ArrowLeft, 
  ChevronRight, 
  Clock, 
  CreditCard, 
  Calendar as CalendarIcon, 
  MessageSquare, 
  Star,
  Video,
  Users,
  MonitorSmartphone
} from "lucide-react";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

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

// Generate dynamic time slots for the selected date
const generateTimeSlots = (date: Date | null): string[] => {
  if (!date) return [];
  
  // Generate time slots from 9 AM to 5 PM
  const slots = [];
  const today = new Date();
  const isDateToday = isToday(date);
  
  // Start time (9 AM)
  let hour = 9;
  
  // If it's today, only show times after current time + 1 hour buffer
  if (isDateToday) {
    hour = Math.max(hour, today.getHours() + 1);
  }
  
  // Generate hourly slots until 5 PM
  while (hour < 17) {
    slots.push(`${hour}:00`);
    hour++;
  }
  
  return slots;
};

const MentorBooking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [selectedSessionType, setSelectedSessionType] = useState<string | null>(null);
  const [meetingMode, setMeetingMode] = useState<string>("video");
  const [notes, setNotes] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  
  // In a real app, fetch mentor data based on ID
  const mentor = mentorData;
  
  const availableDates = getAvailableDates();
  
  // Format selected date as string key for the availableTimeSlots object
  const formattedSelectedDate = selectedDate ? format(selectedDate, "yyyy-MM-dd") : null;
  
  // Get time slots for the selected date - using dynamic generation
  const timeSlots = selectedDate ? generateTimeSlots(selectedDate) : [];
  
  // Find selected session type details
  const selectedSession = mentor.sessionTypes.find(session => session.id === selectedSessionType);
  
  // Calculate total price
  const totalPrice = selectedSession ? selectedSession.price : 0;
  
  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setSelectedTimeSlot(null); // Reset time slot when date changes
  };
  
  const handleSubmit = () => {
    if (!selectedDate || !selectedTimeSlot || !selectedSessionType) {
      toast.error("Please complete all booking details");
      return;
    }
    
    setIsConfirmOpen(true);
  };
  
  const confirmBooking = () => {
    setIsLoading(true);
    
    // In a real app, this would call an API to book the session
    setTimeout(() => {
      setIsLoading(false);
      setIsConfirmOpen(false);
      
      // Show success message
      toast.success("Session booked successfully!");
      
      // Log booking details (would be sent to backend in real app)
      console.log({
        mentorId: mentor.id,
        date: selectedDate,
        timeSlot: selectedTimeSlot,
        sessionType: selectedSessionType,
        meetingMode,
        notes
      });
      
      // Redirect to a confirmation page or mentor dashboard
      // For now, just navigate back to mentor profile
      navigate(`/mentor/${id}`);
    }, 1500);
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
                            onSelect={handleDateSelect}
                            disabled={(date) => {
                              // Disable past dates and weekends
                              return isBefore(date, addDays(new Date(), 1)) || date.getDay() === 0 || date.getDay() === 6;
                            }}
                            className="rounded-md pointer-events-auto"
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
                    <CardTitle>3. Meeting Mode</CardTitle>
                    <CardDescription>
                      Choose how you'd like to conduct your mentoring session.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div 
                        className={`flex flex-col items-center border rounded-lg p-4 cursor-pointer transition-all ${
                          meetingMode === "video" ? 'border-primary ring-2 ring-primary/20' : 'border-stargaze-200 dark:border-stargaze-800'
                        }`}
                        onClick={() => setMeetingMode("video")}
                      >
                        <Video className="h-8 w-8 mb-2 text-primary" />
                        <span className="font-medium text-stargaze-900 dark:text-white">Video Call</span>
                        <span className="text-xs text-stargaze-500 text-center mt-1">Google Meet or Zoom</span>
                      </div>
                      
                      <div 
                        className={`flex flex-col items-center border rounded-lg p-4 cursor-pointer transition-all ${
                          meetingMode === "inperson" ? 'border-primary ring-2 ring-primary/20' : 'border-stargaze-200 dark:border-stargaze-800'
                        }`}
                        onClick={() => setMeetingMode("inperson")}
                      >
                        <Users className="h-8 w-8 mb-2 text-primary" />
                        <span className="font-medium text-stargaze-900 dark:text-white">In Person</span>
                        <span className="text-xs text-stargaze-500 text-center mt-1">Face to face meeting</span>
                      </div>
                      
                      <div 
                        className={`flex flex-col items-center border rounded-lg p-4 cursor-pointer transition-all ${
                          meetingMode === "hybrid" ? 'border-primary ring-2 ring-primary/20' : 'border-stargaze-200 dark:border-stargaze-800'
                        }`}
                        onClick={() => setMeetingMode("hybrid")}
                      >
                        <MonitorSmartphone className="h-8 w-8 mb-2 text-primary" />
                        <span className="font-medium text-stargaze-900 dark:text-white">Hybrid</span>
                        <span className="text-xs text-stargaze-500 text-center mt-1">Combination of both</span>
                      </div>
                    </div>
                    
                    {meetingMode === "video" && (
                      <div className="mt-4">
                        <Select defaultValue="zoom">
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select platform" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="zoom">Zoom</SelectItem>
                            <SelectItem value="meet">Google Meet</SelectItem>
                            <SelectItem value="teams">Microsoft Teams</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                    
                    {meetingMode === "inperson" && (
                      <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-950/30 rounded-md text-amber-800 dark:text-amber-300 text-sm">
                        <p>In-person meetings are subject to mentor availability and location. Details will be confirmed after booking.</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-up" delay={250}>
                <Card>
                  <CardHeader>
                    <CardTitle>4. Session Details</CardTitle>
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
              <AnimatedSection animation="fade-up" delay={300}>
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
                        <div className="flex justify-between">
                          <span className="text-sm text-stargaze-600 dark:text-stargaze-400">Meeting Mode:</span>
                          <span className="font-medium capitalize">
                            {meetingMode}
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
      
      <Dialog open={isConfirmOpen} onOpenChange={setIsConfirmOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Confirm your booking</DialogTitle>
            <DialogDescription>
              Please review the details of your session before confirming.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="flex items-center space-x-3">
              <img 
                src={mentor.image} 
                alt={mentor.name} 
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-medium">{mentor.name}</h4>
                <p className="text-sm text-muted-foreground">{mentor.role}</p>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Session:</span>
                <span className="font-medium">{selectedSession?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Date & Time:</span>
                <span className="font-medium">
                  {selectedDate && `${format(selectedDate, "MMMM d, yyyy")} at ${selectedTimeSlot}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Duration:</span>
                <span className="font-medium">{selectedSession?.duration} minutes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Meeting Mode:</span>
                <span className="font-medium capitalize">{meetingMode}</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>Total:</span>
                <span className="text-primary">${totalPrice}</span>
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsConfirmOpen(false)}>Cancel</Button>
            <Button onClick={confirmBooking} disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                'Confirm & Pay'
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default MentorBooking;
