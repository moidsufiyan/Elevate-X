import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { Calendar, Clock, MessageSquare, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock mentor data
const mentorsData = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechVentures",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    available: true,
    tags: ["Marketing Expert", "Tech Founder"],
    badges: [{ label: "Top Mentor", variant: "default" }],
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "CTO",
    company: "InnovateLabs",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    available: false,
    tags: ["AI Expert", "Product Specialist"],
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    role: "Venture Partner",
    company: "Summit Capital",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    available: true,
    tags: ["Angel Investor", "Growth Strategy"],
    badges: [{ label: "Featured", variant: "secondary" }],
  },
  // ... other mentors
];

// Available time slots
const timeSlots = [
  { id: "1", date: "2023-10-25", time: "10:00 AM", available: true },
  { id: "2", date: "2023-10-25", time: "2:00 PM", available: true },
  { id: "3", date: "2023-10-26", time: "11:00 AM", available: true },
  { id: "4", date: "2023-10-27", time: "3:00 PM", available: true },
  { id: "5", date: "2023-10-28", time: "1:00 PM", available: true },
];

const MentorBooking = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const mentor = mentorsData.find(m => m.id === id);
  
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  if (!mentor) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Mentor not found</h1>
          <p className="mb-8">The mentor you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/mentors")}>Browse Mentors</Button>
        </div>
        <Footer />
      </div>
    );
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      
      toast({
        title: "Session Request Sent",
        description: `Your request has been sent to ${mentor.name}. You'll receive a response soon.`,
        variant: "default",
      });
      
      // In a real application, this would send the data to an API
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fade-up" className="max-w-4xl mx-auto">
            {!submitted ? (
              <>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
                  <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src={mentor.image} 
                      alt={mentor.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{mentor.name}</h1>
                    <p className="text-lg text-stargaze-600 dark:text-stargaze-300 mb-4">
                      {mentor.role} at {mentor.company}
                    </p>
                    
                    {mentor.tags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {mentor.tags.map((tag, index) => (
                          <span 
                            key={index} 
                            className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <p className="text-stargaze-600 dark:text-stargaze-300">
                      Request a mentoring session with {mentor.name}. Please select a time slot and specify what you'd like to discuss.
                    </p>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Time Slots */}
                  <div>
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      <span>Select a Time Slot</span>
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {timeSlots.map((slot) => (
                        <button
                          type="button"
                          key={slot.id}
                          onClick={() => setSelectedSlot(slot.id)}
                          className={`p-4 rounded-lg border text-left transition-all ${
                            selectedSlot === slot.id 
                              ? "border-primary bg-primary/5 text-primary" 
                              : "border-stargaze-200 dark:border-stargaze-700 hover:border-primary/50"
                          }`}
                        >
                          <div className="font-medium">{slot.date}</div>
                          <div className="flex items-center gap-2 text-stargaze-600 dark:text-stargaze-300">
                            <Clock className="h-4 w-4" />
                            <span>{slot.time}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                    
                    {!selectedSlot && (
                      <p className="text-sm text-stargaze-500 dark:text-stargaze-400 mt-2">
                        Please select a time slot
                      </p>
                    )}
                  </div>
                  
                  {/* Topic */}
                  <div>
                    <label htmlFor="topic" className="block font-medium mb-2">Session Topic</label>
                    <input
                      id="topic"
                      type="text"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      placeholder="e.g., Fundraising Strategy, Product Feedback"
                      className="w-full p-3 rounded-lg border border-stargaze-200 dark:border-stargaze-700 bg-white dark:bg-stargaze-900 focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block font-medium mb-2">Message to Mentor</label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Briefly describe what you'd like to discuss during the session..."
                      rows={5}
                      className="w-full p-3 rounded-lg border border-stargaze-200 dark:border-stargaze-700 bg-white dark:bg-stargaze-900 focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  {/* Submit Button */}
                  <div className="flex justify-end">
                    <Button 
                      type="submit" 
                      disabled={!selectedSlot || !topic || !message || submitting}
                      leftIcon={<MessageSquare className="h-4 w-4" />}
                      className="px-8"
                    >
                      {submitting ? "Sending Request..." : "Send Session Request"}
                    </Button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-500" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Session Request Sent!</h2>
                <p className="text-stargaze-600 dark:text-stargaze-300 max-w-lg mx-auto mb-8">
                  Your request has been sent to {mentor.name}. They'll review your request and get back to you soon. You'll receive an email notification when they respond.
                </p>
                <div className="flex justify-center gap-4">
                  <Button variant="outline" onClick={() => navigate(`/mentor/${mentor.id}`)}>
                    Back to Profile
                  </Button>
                  <Button onClick={() => navigate("/mentors")}>
                    Browse More Mentors
                  </Button>
                </div>
              </div>
            )}
          </AnimatedSection>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MentorBooking;
