
import { useState } from "react";
import { PageTemplate } from "@/components/ui/page-template";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users, ArrowRight, Filter } from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AnimatedSection } from "@/components/AnimatedSection";

const Events = () => {
  const [cityFilter, setCityFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const upcomingEvents = [
    {
      id: 1,
      title: "Startup India Venture Capital Summit 2025",
      date: "May 15, 2025",
      location: "Mumbai",
      time: "9:00 AM - 6:00 PM",
      type: "Conference",
      image: "https://images.unsplash.com/photo-1540304453527-62f979142a17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      attendees: 850,
      description: "Connect with top venture capitalists and angel investors from across India. Perfect for startups looking to raise Series A or B funding."
    },
    {
      id: 2,
      title: "Bharat Tech Founders Meetup",
      date: "May 22, 2025",
      location: "Bangalore",
      time: "6:00 PM - 9:00 PM",
      type: "Networking",
      image: "https://images.unsplash.com/photo-1556125574-d7f27ec36a06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      attendees: 120,
      description: "An intimate networking event for tech founders to share experiences, challenges, and opportunities in the Indian market."
    },
    {
      id: 3,
      title: "Rural FinTech Innovation Workshop",
      date: "June 5, 2025",
      location: "Hyderabad",
      time: "10:00 AM - 3:00 PM",
      type: "Workshop",
      image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      attendees: 75,
      description: "Hands-on workshop focusing on building financial products for rural India. Expert speakers from successful FinTech startups."
    },
    {
      id: 4,
      title: "GST Compliance for SaaS Startups",
      date: "June 12, 2025",
      location: "Delhi",
      time: "2:00 PM - 5:00 PM",
      type: "Seminar",
      image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      attendees: 100,
      description: "Essential tax compliance knowledge for SaaS companies operating in India, with expert guidance from tax professionals."
    },
    {
      id: 5,
      title: "E-commerce Growth Strategies for D2C Brands",
      date: "June 20, 2025",
      location: "Mumbai",
      time: "9:00 AM - 1:00 PM",
      type: "Workshop",
      image: "https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      attendees: 150,
      description: "Learn proven growth strategies for direct-to-consumer brands in the competitive Indian e-commerce landscape."
    }
  ];

  const pastEvents = [
    {
      id: 6,
      title: "AI for Indian Healthcare Startups",
      date: "April 10, 2025",
      location: "Bangalore",
      time: "10:00 AM - 4:00 PM",
      type: "Conference",
      image: "https://images.unsplash.com/photo-1576089073624-b5f8a18b6a0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      attendees: 300,
      description: "Explored applications of artificial intelligence in solving healthcare challenges specific to India."
    },
    {
      id: 7,
      title: "Founder Mental Health Symposium",
      date: "March 25, 2025",
      location: "Delhi",
      time: "9:00 AM - 1:00 PM",
      type: "Seminar",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      attendees: 120,
      description: "Discussion on managing stress, burnout, and maintaining well-being while building a startup in India."
    }
  ];

  const filterEvents = (events) => {
    return events.filter(event => 
      (cityFilter === "all" || event.location === cityFilter) &&
      (typeFilter === "all" || event.type === typeFilter)
    );
  };

  const filteredUpcomingEvents = filterEvents(upcomingEvents);
  const filteredPastEvents = filterEvents(pastEvents);

  const cities = ["all", "Mumbai", "Delhi", "Bangalore", "Hyderabad"];
  const eventTypes = ["all", "Conference", "Workshop", "Networking", "Seminar"];

  return (
    <PageTemplate 
      title="Startup Events | Elevate X"
      description="Discover upcoming startup events, conferences, workshops, and networking meetups across India."
      keywords="startup events, Indian startup conferences, networking events, startup workshops"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection threshold={0.1} className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-stargaze-900 dark:text-white mb-4">
            Events & Meetups
          </h1>
          <p className="text-xl text-stargaze-600 dark:text-stargaze-300 max-w-3xl">
            Connect with the Indian startup ecosystem through conferences, workshops, and networking events across the country.
          </p>
        </AnimatedSection>
        
        <AnimatedSection threshold={0.1} delay={100} className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-stargaze-50 dark:bg-stargaze-800/50 p-4 rounded-lg">
            <div className="flex items-center">
              <Filter className="h-5 w-5 text-stargaze-600 dark:text-stargaze-400 mr-2" />
              <span className="text-sm font-medium text-stargaze-900 dark:text-white mr-4">Filter Events:</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Select value={cityFilter} onValueChange={setCityFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Select City" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map(city => (
                    <SelectItem key={city} value={city}>
                      {city === "all" ? "All Cities" : city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Event Type" />
                </SelectTrigger>
                <SelectContent>
                  {eventTypes.map(type => (
                    <SelectItem key={type} value={type}>
                      {type === "all" ? "All Types" : type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection threshold={0.1} delay={200}>
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="w-full md:w-auto mb-8">
              <TabsTrigger value="upcoming" className="flex-1 md:flex-initial">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past" className="flex-1 md:flex-initial">Past Events</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming">
              {filteredUpcomingEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredUpcomingEvents.map((event) => (
                    <div key={event.id} className="bg-white dark:bg-stargaze-900 rounded-lg shadow-sm overflow-hidden border border-stargaze-100 dark:border-stargaze-800">
                      <div className="aspect-video relative overflow-hidden">
                        <img 
                          src={event.image} 
                          alt={event.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <div className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                            {event.type}
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white mb-3">{event.title}</h3>
                        <p className="text-stargaze-600 dark:text-stargaze-300 mb-4 line-clamp-2">{event.description}</p>
                        <div className="space-y-2 mb-5">
                          <div className="flex items-center text-sm text-stargaze-600 dark:text-stargaze-400">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center text-sm text-stargaze-600 dark:text-stargaze-400">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center text-sm text-stargaze-600 dark:text-stargaze-400">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center text-sm text-stargaze-600 dark:text-stargaze-400">
                            <Users className="h-4 w-4 mr-2" />
                            <span>{event.attendees} attendees</span>
                          </div>
                        </div>
                        <Button className="w-full justify-between">
                          Register Now
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-stargaze-50 dark:bg-stargaze-800/50 text-center py-16 rounded-lg">
                  <h3 className="text-xl font-medium text-stargaze-900 dark:text-white mb-2">No upcoming events match your filters</h3>
                  <p className="text-stargaze-600 dark:text-stargaze-400">
                    Try adjusting your filter criteria or check back later
                  </p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="past">
              {filteredPastEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredPastEvents.map((event) => (
                    <div key={event.id} className="bg-white dark:bg-stargaze-900 rounded-lg shadow-sm overflow-hidden border border-stargaze-100 dark:border-stargaze-800">
                      <div className="aspect-video relative overflow-hidden">
                        <img 
                          src={event.image} 
                          alt={event.title} 
                          className="w-full h-full object-cover filter grayscale"
                        />
                        <div className="absolute top-4 left-4">
                          <div className="px-3 py-1 bg-stargaze-500 text-white text-xs font-semibold rounded-full">
                            {event.type}
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <span className="text-white font-bold text-lg bg-black/50 px-4 py-2 rounded-lg">Past Event</span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white mb-3">{event.title}</h3>
                        <p className="text-stargaze-600 dark:text-stargaze-300 mb-4 line-clamp-2">{event.description}</p>
                        <div className="space-y-2 mb-5">
                          <div className="flex items-center text-sm text-stargaze-600 dark:text-stargaze-400">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center text-sm text-stargaze-600 dark:text-stargaze-400">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center text-sm text-stargaze-600 dark:text-stargaze-400">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center text-sm text-stargaze-600 dark:text-stargaze-400">
                            <Users className="h-4 w-4 mr-2" />
                            <span>{event.attendees} attendees</span>
                          </div>
                        </div>
                        <Button variant="outline" className="w-full justify-between">
                          View Resources
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-stargaze-50 dark:bg-stargaze-800/50 text-center py-16 rounded-lg">
                  <h3 className="text-xl font-medium text-stargaze-900 dark:text-white mb-2">No past events match your filters</h3>
                  <p className="text-stargaze-600 dark:text-stargaze-400">
                    Try adjusting your filter criteria to see more results
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </AnimatedSection>
        
        <AnimatedSection threshold={0.1} delay={300} className="mt-16 text-center">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-stargaze-900 dark:text-white mb-4">
              Want to host an event with us?
            </h2>
            <p className="text-stargaze-600 dark:text-stargaze-300 mb-6 max-w-2xl mx-auto">
              If you're interested in organizing a startup event or workshop for the Indian entrepreneurial community, we'd love to help promote it.
            </p>
            <Button size="lg">
              Submit Your Event
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </PageTemplate>
  );
};

export default Events;
