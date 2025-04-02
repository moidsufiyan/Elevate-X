
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Your message has been sent. We'll get back to you soon!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-12 max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-stargaze-900 dark:text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-stargaze-600 dark:text-stargaze-300">
              Have questions about our platform or need support? 
              We're here to help you on your entrepreneurial journey.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={100} className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-stargaze-900 p-8 rounded-xl shadow-subtle border border-stargaze-100 dark:border-stargaze-800 flex flex-col">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white mb-2">
                  Email Us
                </h3>
                <p className="text-stargaze-600 dark:text-stargaze-300 mb-4">
                  Send us an email and we'll respond within 24 hours.
                </p>
                <a href="mailto:hello@startupstargaze.com" className="text-primary hover:underline mt-auto">
                  hello@startupstargaze.com
                </a>
              </div>
              
              <div className="bg-white dark:bg-stargaze-900 p-8 rounded-xl shadow-subtle border border-stargaze-100 dark:border-stargaze-800 flex flex-col">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white mb-2">
                  Visit Us
                </h3>
                <p className="text-stargaze-600 dark:text-stargaze-300 mb-4">
                  Our headquarters are located in the heart of San Francisco.
                </p>
                <address className="not-italic text-primary hover:underline mt-auto">
                  123 Startup Avenue, San Francisco, CA 94107
                </address>
              </div>
              
              <div className="bg-white dark:bg-stargaze-900 p-8 rounded-xl shadow-subtle border border-stargaze-100 dark:border-stargaze-800 flex flex-col">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white mb-2">
                  Call Us
                </h3>
                <p className="text-stargaze-600 dark:text-stargaze-300 mb-4">
                  For urgent matters, give us a call during business hours.
                </p>
                <a href="tel:+14155550123" className="text-primary hover:underline mt-auto">
                  +1 (415) 555-0123
                </a>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={200} className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-stargaze-900 rounded-xl shadow-subtle border border-stargaze-100 dark:border-stargaze-800 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="p-8 lg:col-span-3">
                  <h2 className="text-2xl font-bold text-stargaze-900 dark:text-white mb-6">
                    Send Us a Message
                  </h2>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-stargaze-900 dark:text-stargaze-200">
                          Your Name
                        </label>
                        <Input 
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-stargaze-900 dark:text-stargaze-200">
                          Email Address
                        </label>
                        <Input 
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <label htmlFor="subject" className="text-sm font-medium text-stargaze-900 dark:text-stargaze-200">
                        Subject
                      </label>
                      <Input 
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <label htmlFor="message" className="text-sm font-medium text-stargaze-900 dark:text-stargaze-200">
                        Message
                      </label>
                      <Textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe your question or concern in detail..."
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </div>
                
                <div className="bg-primary lg:col-span-2 p-8 text-white flex flex-col justify-center">
                  <h3 className="text-xl font-semibold mb-6">Business Hours</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 mt-0.5" />
                      <div>
                        <p className="font-medium">Monday - Friday</p>
                        <p className="opacity-80">9:00 AM - 6:00 PM PST</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 mt-0.5" />
                      <div>
                        <p className="font-medium">Saturday</p>
                        <p className="opacity-80">10:00 AM - 4:00 PM PST</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 mt-0.5" />
                      <div>
                        <p className="font-medium">Sunday</p>
                        <p className="opacity-80">Closed</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <p className="mb-3">Follow us online:</p>
                    <div className="flex space-x-4">
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                         className="hover:opacity-80 transition-opacity">Twitter</a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                         className="hover:opacity-80 transition-opacity">LinkedIn</a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                         className="hover:opacity-80 transition-opacity">Instagram</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
