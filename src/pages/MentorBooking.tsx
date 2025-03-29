
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { format, addDays, isAfter, isBefore, startOfDay } from "date-fns";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "@/hooks/use-toast";
import { 
  CalendarIcon,
  Check,
  Clock,
  MessageSquare,
  Star,
  Video,
  Users,
  MonitorSmartphone,
  Loader2
} from "lucide-react";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Mock mentor data - In a real application, this would come from an API
const mockMentors = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Senior Product Manager",
    company: "TechVision",
    expertise: ["Product Strategy", "UX Design", "Agile"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    available: true,
    bio: "15+ years scaling products from 0 to millions of users. Previously led product teams at Google and Airbnb.",
    rating: 4.9,
    sessions: 142,
    price: 120,
    timeZone: "PST",
    availabilityPattern: [
      { day: 1, slots: ["09:00", "10:00", "14:00", "15:00"] }, // Monday
      { day: 3, slots: ["10:00", "11:00", "13:00", "16:00"] }, // Wednesday
      { day: 5, slots: ["09:00", "13:00", "14:00", "15:00"] }, // Friday
    ]
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Startup Advisor",
    company: "TechVentures",
    expertise: ["Fundraising", "Growth Strategy", "B2B Sales"],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    available: true,
    bio: "Serial entrepreneur with 3 successful exits. Angel investor in 25+ startups.",
    rating: 4.8,
    sessions: 98,
    price: 150,
    timeZone: "EST",
    availabilityPattern: [
      { day: 2, slots: ["11:00", "13:00", "15:00", "17:00"] }, // Tuesday
      { day: 4, slots: ["10:00", "14:00", "16:00"] }, // Thursday
    ]
  },
  {
    id: "3",
    name: "Emily Patel",
    role: "Growth Marketing Lead",
    company: "ScaleUp",
    expertise: ["User Acquisition", "Content Strategy", "Analytics"],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    available: true,
    bio: "Helped 15+ startups scale their user base from hundreds to millions. Expert in low-budget growth hacking.",
    rating: 4.7,
    sessions: 76,
    price: 100,
    timeZone: "GMT",
    availabilityPattern: [
      { day: 1, slots: ["12:00", "13:00", "16:00", "17:00"] }, // Monday
      { day: 3, slots: ["11:00", "14:00", "15:00"] }, // Wednesday
      { day: 5, slots: ["10:00", "11:00", "14:00", "15:00"] }, // Friday
    ]
  }
];

// Meeting modes
const meetingModes = [
  {
    id: "video",
    name: "Video Call",
    description: "Google Meet or Zoom call",
    icon: <Video className="h-5 w-5 text-primary" />
  },
  {
    id: "phone",
    name: "Phone Call",
    description: "Direct phone conversation",
    icon: <MonitorSmartphone className="h-5 w-5 text-primary" />
  },
  {
    id: "inperson",
    name: "In Person",
    description: "Meet at a location",
    icon: <Users className="h-5 w-5 text-primary" />
  }
];

// Helper function to get available time slots for a given date
const getAvailableSlotsForDate = (mentor, date) => {
  const dayOfWeek = date.getDay(); // 0 is Sunday, 1 is Monday, etc.
  
  // Find availability for this day of the week in the mentor's availability pattern
  const dayPattern = mentor.availabilityPattern.find(pattern => pattern.day === dayOfWeek);
  
  return dayPattern ? dayPattern.slots : [];
};

const MentorBooking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [mentor, setMentor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [meetingMode, setMeetingMode] = useState("video");
  const [topic, setTopic] = useState("");
  const [questions, setQuestions] = useState("");
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch mentor data
  useEffect(() => {
    // Simulate API fetch with a delay
    const fetchMentor = async () => {
      setIsLoading(true);
      try {
        // In a real app, this would be an API call
        await new Promise(resolve => setTimeout(resolve, 800));
        const mentorData = mockMentors.find(m => m.id === id);
        if (mentorData) {
          setMentor(mentorData);
          // Get available time slots for today
          const todaySlots = getAvailableSlotsForDate(mentorData, selectedDate);
          setAvailableTimeSlots(todaySlots);
        } else {
          toast({
            title: "Mentor not found",
            description: "We couldn't find the mentor you're looking for.",
            variant: "destructive"
          });
          navigate("/mentors");
        }
      } catch (error) {
        console.error("Error fetching mentor:", error);
        toast({
          title: "Error",
          description: "There was an error loading the mentor data. Please try again.",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchMentor();
  }, [id, navigate, selectedDate]);

  // Update available time slots when date changes
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTimeSlot(null); // Reset selected time slot
    
    if (mentor) {
      const slots = getAvailableSlotsForDate(mentor, date);
      setAvailableTimeSlots(slots);
    }
  };

  // Handle booking submission
  const handleBookingSubmit = async () => {
    if (!selectedTimeSlot) {
      toast({
        title: "Select a time slot",
        description: "Please select an available time slot for your session.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // In a real app, this would be an API call to save the booking
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Booking confirmed!",
        description: `Your session with ${mentor.name} is scheduled for ${format(selectedDate, "MMMM d, yyyy")} at ${selectedTimeSlot}.`,
      });
      
      // Close dialog and navigate to a confirmation page or back to mentor list
      setConfirmDialogOpen(false);
      navigate("/mentors");
    } catch (error) {
      console.error("Error submitting booking:", error);
      toast({
        title: "Booking failed",
        description: "There was an error processing your booking. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Disabled dates logic for the calendar
  const isPastDate = (date) => {
    return isBefore(date, startOfDay(new Date()));
  };
  
  const isTooFarInFuture = (date) => {
    return isAfter(date, addDays(new Date(), 90)); // Only allow booking 90 days in advance
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </div>
        ) : mentor ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Mentor Info Sidebar */}
            <div className="lg:col-span-1">
              <AnimatedSection className="sticky top-24">
                <Card>
                  <CardHeader className="text-center">
                    <Avatar className="h-24 w-24 mx-auto mb-4">
                      <AvatarImage src={mentor.image} alt={mentor.name} />
                      <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-2xl">{mentor.name}</CardTitle>
                    <CardDescription className="text-lg">
                      {mentor.role} at {mentor.company}
                    </CardDescription>
                    <div className="flex justify-center mt-2">
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-current" />
                        {mentor.rating} ({mentor.sessions} sessions)
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">{mentor.bio}</p>
                    <Separator className="my-4" />
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {mentor.expertise.map((skill, index) => (
                            <Badge key={index} variant="outline">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Session Rate</h4>
                        <p className="text-xl font-bold text-primary">${mentor.price} <span className="text-sm font-normal text-muted-foreground">per hour</span></p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Time Zone</h4>
                        <p>{mentor.timeZone}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
            
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <Card>
                  <CardHeader>
                    <CardTitle>Book a Session with {mentor.name}</CardTitle>
                    <CardDescription>
                      Choose your preferred date, time, and meeting format
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Date Picker */}
                    <div className="space-y-2">
                      <Label>Select a Date</Label>
                      <div className="border rounded-md p-4">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={handleDateChange}
                          disabled={(date) => isPastDate(date) || isTooFarInFuture(date)}
                          className="pointer-events-auto"
                        />
                      </div>
                    </div>
                    
                    {/* Time Slots */}
                    <div className="space-y-2">
                      <Label>Select a Time Slot</Label>
                      {availableTimeSlots.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                          {availableTimeSlots.map((slot) => (
                            <Button
                              key={slot}
                              variant={selectedTimeSlot === slot ? "default" : "outline"}
                              onClick={() => setSelectedTimeSlot(slot)}
                              className="flex items-center gap-1"
                            >
                              <Clock className="h-4 w-4" />
                              {slot}
                            </Button>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-4 bg-muted/50 rounded-md">
                          <p className="text-muted-foreground">No time slots available on this date</p>
                          <p className="text-sm text-muted-foreground">Please select another date</p>
                        </div>
                      )}
                    </div>
                    
                    {/* Meeting Mode */}
                    <div className="space-y-2">
                      <Label>Meeting Mode</Label>
                      <RadioGroup value={meetingMode} onValueChange={setMeetingMode} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {meetingModes.map((mode) => (
                          <div key={mode.id} className="relative">
                            <RadioGroupItem
                              value={mode.id}
                              id={mode.id}
                              className="peer sr-only"
                            />
                            <Label
                              htmlFor={mode.id}
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              {mode.icon}
                              <div className="mt-2 text-center">
                                <p className="font-medium leading-none">{mode.name}</p>
                                <p className="text-xs text-muted-foreground mt-1">{mode.description}</p>
                              </div>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    
                    {/* Topic & Questions */}
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="topic">Session Topic</Label>
                        <Input
                          id="topic"
                          placeholder="e.g., Fundraising strategy, Product roadmap feedback"
                          value={topic}
                          onChange={(e) => setTopic(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="questions">Specific Questions or Goals</Label>
                        <Textarea
                          id="questions"
                          placeholder="What specific questions do you have for the mentor? What do you hope to achieve from this session?"
                          rows={4}
                          value={questions}
                          onChange={(e) => setQuestions(e.target.value)}
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Dialog open={confirmDialogOpen} onOpenChange={setConfirmDialogOpen}>
                      <DialogTrigger asChild>
                        <Button 
                          className="w-full" 
                          disabled={!selectedTimeSlot}
                          onClick={() => selectedTimeSlot && setConfirmDialogOpen(true)}
                        >
                          Book Session (${mentor.price})
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Confirm Your Booking</DialogTitle>
                          <DialogDescription>
                            Please review the details of your mentorship session
                          </DialogDescription>
                        </DialogHeader>
                        <div className="py-4 space-y-4">
                          <div className="flex items-start space-x-4">
                            <Avatar>
                              <AvatarImage src={mentor.image} alt={mentor.name} />
                              <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="font-medium">{mentor.name}</h4>
                              <p className="text-sm text-muted-foreground">{mentor.role} at {mentor.company}</p>
                            </div>
                          </div>
                          <Separator />
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Date:</span>
                              <span className="font-medium">{format(selectedDate, "MMMM d, yyyy")}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Time:</span>
                              <span className="font-medium">{selectedTimeSlot} ({mentor.timeZone})</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Duration:</span>
                              <span className="font-medium">60 minutes</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Format:</span>
                              <span className="font-medium">
                                {meetingModes.find(mode => mode.id === meetingMode)?.name}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Price:</span>
                              <span className="font-bold">${mentor.price}</span>
                            </div>
                          </div>
                          {topic && (
                            <>
                              <Separator />
                              <div>
                                <h4 className="font-medium">Topic:</h4>
                                <p className="text-sm">{topic}</p>
                              </div>
                            </>
                          )}
                        </div>
                        <DialogFooter>
                          <Button 
                            variant="outline" 
                            onClick={() => setConfirmDialogOpen(false)}
                          >
                            Back
                          </Button>
                          <Button 
                            onClick={handleBookingSubmit}
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Processing...
                              </>
                            ) : (
                              "Confirm Booking"
                            )}
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </CardFooter>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold">Mentor not found</h2>
            <p className="mt-2 text-muted-foreground">The mentor you're looking for doesn't exist or has been removed.</p>
            <Button className="mt-4" onClick={() => navigate("/mentors")}>
              Browse Mentors
            </Button>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default MentorBooking;
