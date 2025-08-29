import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SEO } from "@/components/SEO";
import {
  Search,
  Calendar,
  MapPin,
  Users,
  Clock,
  IndianRupee,
  ExternalLink,
  Filter,
  Star,
  Globe,
  Video,
  Building2,
  Trophy,
  MessageSquare,
  Coffee,
  Presentation,
} from "lucide-react";
import {
  events,
  eventTypes,
  eventCategories,
  getEventsByType,
  getEventsByCategory,
  getUpcomingEvents,
  getPastEvents,
  getFeaturedEvents,
  searchEvents,
  type Event,
} from "@/data/events";

const EventCard = ({ event }: { event: Event }) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Conference":
        return <Presentation className="w-4 h-4" />;
      case "Workshop":
        return <Building2 className="w-4 h-4" />;
      case "Networking":
        return <Users className="w-4 h-4" />;
      case "Webinar":
        return <Video className="w-4 h-4" />;
      case "Pitch Competition":
        return <Trophy className="w-4 h-4" />;
      case "AMA":
        return <MessageSquare className="w-4 h-4" />;
      case "Meetup":
        return <Coffee className="w-4 h-4" />;
      default:
        return <Calendar className="w-4 h-4" />;
    }
  };

  const getLocationIcon = () => {
    switch (event.location.type) {
      case "Online":
        return <Globe className="w-4 h-4 text-blue-500" />;
      case "Offline":
        return <MapPin className="w-4 h-4 text-green-500" />;
      case "Hybrid":
        return <Building2 className="w-4 h-4 text-purple-500" />;
      default:
        return <MapPin className="w-4 h-4" />;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const isUpcoming = event.status === "Upcoming";
  const isPaid = event.price.type === "Paid";

  return (
    <Card
      className={`h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md ${
        !isUpcoming ? "opacity-75" : ""
      }`}
    >
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge
            variant={isUpcoming ? "default" : "secondary"}
            className="text-xs"
          >
            {event.status}
          </Badge>
          <Badge variant="outline" className="text-xs bg-white/90">
            {event.type}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge
            variant={isPaid ? "destructive" : "secondary"}
            className="text-xs"
          >
            {isPaid ? `₹${event.price.amount}` : "Free"}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <CardTitle className="text-lg font-bold text-foreground mb-2 line-clamp-2">
              {event.title}
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground line-clamp-2">
              {event.description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0 space-y-4">
        {/* Event Details */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span>
              {formatDate(event.date)} at {event.time}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {getLocationIcon()}
            <span>
              {event.location.type === "Online"
                ? event.location.platform
                : `${event.location.city} ${
                    event.location.type === "Hybrid" ? "(Hybrid)" : ""
                  }`}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span>{event.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-primary" />
            <span>
              {event.registered}/{event.capacity} registered
            </span>
          </div>
        </div>

        {/* Speakers */}
        <div>
          <div className="text-xs text-muted-foreground mb-2">Speakers</div>
          <div className="flex -space-x-2">
            {event.speakers.slice(0, 3).map((speaker, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-full border-2 border-background overflow-hidden"
                title={`${speaker.name} - ${speaker.company}`}
              >
                <img
                  src={speaker.avatar}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            {event.speakers.length > 3 && (
              <div className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs">
                +{event.speakers.length - 3}
              </div>
            )}
          </div>
        </div>

        {/* Tags */}
        <div>
          <div className="flex flex-wrap gap-1">
            {event.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {event.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{event.tags.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <div>
          <div className="flex justify-between text-xs text-muted-foreground mb-1">
            <span>Registration</span>
            <span>
              {Math.round((event.registered / event.capacity) * 100)}% full
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{
                width: `${Math.min(
                  (event.registered / event.capacity) * 100,
                  100
                )}%`,
              }}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <Button asChild size="sm" className="flex-1" disabled={!isUpcoming}>
            <Link to={`/event/${event.id}`}>
              {isUpcoming ? "View Details" : "View Summary"}
            </Link>
          </Button>
          {isUpcoming && event.registrationUrl && (
            <Button variant="outline" size="sm" asChild>
              <a
                href={event.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-3 h-3 mr-1" />
                Register
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const FeaturedEventCard = ({ event }: { event: Event }) => (
  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
    <div className="relative">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-64 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-6 left-6 right-6 text-white">
        <Badge variant="secondary" className="mb-3">
          {event.type}
        </Badge>
        <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(event.date).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
            })}
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {event.location.city || event.location.platform}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {event.registered}+ registered
          </div>
        </div>
      </div>
    </div>
    <CardContent className="p-6">
      <p className="text-muted-foreground mb-4 line-clamp-2">
        {event.description}
      </p>
      <div className="flex gap-2">
        <Button asChild className="flex-1">
          <Link to={`/event/${event.id}`}>Learn More</Link>
        </Button>
        {event.registrationUrl && (
          <Button variant="outline" asChild>
            <a
              href={event.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Register
            </a>
          </Button>
        )}
      </div>
    </CardContent>
  </Card>
);

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);
  const [activeTab, setActiveTab] = useState("upcoming");

  const featuredEvents = getFeaturedEvents();
  const upcomingEvents = getUpcomingEvents();
  const pastEvents = getPastEvents();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    let result = events;

    // Apply search filter
    if (searchTerm) {
      result = searchEvents(searchTerm);
    }

    // Apply type filter
    if (selectedType !== "All") {
      result = result.filter((event) =>
        getEventsByType(selectedType).includes(event)
      );
    }

    // Apply category filter
    if (selectedCategory !== "All") {
      result = result.filter((event) =>
        getEventsByCategory(selectedCategory).includes(event)
      );
    }

    // Apply tab filter
    if (activeTab === "upcoming") {
      result = result.filter((event) => event.status === "Upcoming");
    } else if (activeTab === "past") {
      result = result.filter((event) => event.status === "Completed");
    }

    setFilteredEvents(result);
  }, [searchTerm, selectedType, selectedCategory, activeTab]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedType("All");
    setSelectedCategory("All");
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Startup Events & Conferences | ElevateX"
        description="Discover upcoming startup events, conferences, workshops, and networking opportunities in India's entrepreneurial ecosystem."
        keywords="startup events, conferences, workshops, networking, entrepreneurship, India"
      />

      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <AnimatedSection animation="fade-in" duration="normal" delay={100}>
          <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-background to-primary/5">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Startup Events &
                <span className="text-primary block">Conferences</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Connect with the startup community through conferences,
                workshops, networking events, and learning opportunities across
                India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="#events">Browse Events</Link>
                </Button>
                <Button variant="outline" size="lg">
                  Submit Event
                </Button>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Featured Events */}
        {featuredEvents.length > 0 && (
          <AnimatedSection animation="fade-up" duration="normal" delay={200}>
            <section className="py-16 px-4">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Featured Events
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Don't miss these premier startup events
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredEvents.map((event) => (
                    <FeaturedEventCard key={event.id} event={event} />
                  ))}
                </div>
              </div>
            </section>
          </AnimatedSection>
        )}

        {/* Stats Section */}
        <AnimatedSection animation="fade-up" duration="normal" delay={300}>
          <section className="py-16 px-4 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-primary">
                    {events.length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Total Events
                  </div>
                </div>
                <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-primary">
                    {upcomingEvents.length}
                  </div>
                  <div className="text-sm text-muted-foreground">Upcoming</div>
                </div>
                <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-primary">15K+</div>
                  <div className="text-sm text-muted-foreground">
                    Total Attendees
                  </div>
                </div>
                <div className="text-center p-6 bg-background rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-primary">200+</div>
                  <div className="text-sm text-muted-foreground">
                    Expert Speakers
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Events Directory */}
        <AnimatedSection animation="fade-up" duration="normal" delay={400}>
          <section id="events" className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Event Directory
                </h2>
                <p className="text-xl text-muted-foreground">
                  Find events that match your interests and schedule
                </p>
              </div>

              {/* Search and Filters */}
              <div className="mb-8 space-y-4">
                <div className="flex flex-col lg:flex-row gap-4">
                  {/* Search */}
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search events, speakers, or topics..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>

                  {/* Filters */}
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Select
                      value={selectedType}
                      onValueChange={setSelectedType}
                    >
                      <SelectTrigger className="w-full sm:w-[180px]">
                        <SelectValue placeholder="Event Type" />
                      </SelectTrigger>
                      <SelectContent>
                        {eventTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select
                      value={selectedCategory}
                      onValueChange={setSelectedCategory}
                    >
                      <SelectTrigger className="w-full sm:w-[180px]">
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        {eventCategories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Button variant="outline" onClick={clearFilters}>
                      Clear Filters
                    </Button>
                  </div>
                </div>

                {/* Active Filters */}
                {(searchTerm ||
                  selectedType !== "All" ||
                  selectedCategory !== "All") && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Filter className="w-4 h-4" />
                    <span>Active filters:</span>
                    {searchTerm && (
                      <Badge variant="secondary">Search: {searchTerm}</Badge>
                    )}
                    {selectedType !== "All" && (
                      <Badge variant="secondary">Type: {selectedType}</Badge>
                    )}
                    {selectedCategory !== "All" && (
                      <Badge variant="secondary">
                        Category: {selectedCategory}
                      </Badge>
                    )}
                  </div>
                )}
              </div>

              {/* Event Tabs */}
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3 mb-8">
                  <TabsTrigger value="upcoming">
                    Upcoming ({upcomingEvents.length})
                  </TabsTrigger>
                  <TabsTrigger value="all">
                    All Events ({events.length})
                  </TabsTrigger>
                  <TabsTrigger value="past">
                    Past Events ({pastEvents.length})
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="upcoming" className="mt-8">
                  <div className="mb-6">
                    <p className="text-muted-foreground">
                      Showing {filteredEvents.length} upcoming events
                    </p>
                  </div>

                  {filteredEvents.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {filteredEvents.map((event) => (
                        <EventCard key={event.id} event={event} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-16">
                      <Calendar className="w-24 h-24 mx-auto mb-6 text-muted-foreground" />
                      <h3 className="text-xl font-semibold mb-2">
                        No upcoming events found
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Try adjusting your search criteria or check back later
                        for new events
                      </p>
                      <Button onClick={clearFilters}>Clear all filters</Button>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="all" className="mt-8">
                  <div className="mb-6">
                    <p className="text-muted-foreground">
                      Showing {filteredEvents.length} of {events.length} events
                    </p>
                  </div>

                  {filteredEvents.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {filteredEvents.map((event) => (
                        <EventCard key={event.id} event={event} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-16">
                      <Search className="w-24 h-24 mx-auto mb-6 text-muted-foreground" />
                      <h3 className="text-xl font-semibold mb-2">
                        No events found
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Try adjusting your search criteria or filters
                      </p>
                      <Button onClick={clearFilters}>Clear all filters</Button>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="past" className="mt-8">
                  <div className="mb-6">
                    <p className="text-muted-foreground">
                      Showing {filteredEvents.length} past events
                    </p>
                  </div>

                  {filteredEvents.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {filteredEvents.map((event) => (
                        <EventCard key={event.id} event={event} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-16">
                      <Calendar className="w-24 h-24 mx-auto mb-6 text-muted-foreground" />
                      <h3 className="text-xl font-semibold mb-2">
                        No past events found
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Try adjusting your search criteria or filters
                      </p>
                      <Button onClick={clearFilters}>Clear all filters</Button>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animation="fade-up" duration="normal" delay={500}>
          <section className="py-16 px-4 bg-muted/30">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Want to Host an Event?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Partner with us to reach India's startup community and create
                meaningful connections.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Submit Your Event</Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
