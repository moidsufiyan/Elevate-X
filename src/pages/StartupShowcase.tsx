
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { StartupCard } from "@/components/startup/StartupCard";
import { Button } from "@/components/Button";
import { Search, Filter, MapPin } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useStartups } from "@/hooks/use-startups";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";
import { EmptyState } from "@/components/ui/empty-state";
import { Startup } from "@/shared/types/models";

// For filtering - India-specific industries and locations
const industries = [
  "All Industries", 
  "AgriTech", 
  "CleanTech", 
  "EdTech", 
  "FinTech", 
  "FoodTech", 
  "HealthTech",
  "LogisticsTech",
  "E-commerce"
];
const fundingStages = ["All Stages", "Pre-seed", "Seed", "Series A", "Series B", "Series C+", "Bootstrapped"];
const locations = [
  "All Locations", 
  "Bangalore", 
  "Mumbai", 
  "Delhi", 
  "Hyderabad", 
  "Chennai", 
  "Pune", 
  "Ahmedabad",
  "Jaipur", 
  "Kolkata"
];

const StartupShowcase = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");
  const [selectedStage, setSelectedStage] = useState("All Stages");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const { toast } = useToast();
  
  // Fetch startups data using our hook
  const { data: startups, isLoading, error } = useStartups();

  // Filter startups based on search and filters
  const filteredStartups = startups?.filter((startup) => {
    // Search filter
    const matchesSearch = startup.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          startup.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Industry filter
    const matchesIndustry = selectedIndustry === "All Industries" || startup.industry === selectedIndustry;
    
    // Funding stage filter
    const matchesStage = selectedStage === "All Stages" || startup.stage === selectedStage;
    
    // Location filter
    const matchesLocation = selectedLocation === "All Locations" || 
                           startup.location.includes(selectedLocation);
    
    return matchesSearch && matchesIndustry && matchesStage && matchesLocation;
  }) || [];
  
  const handleFilterChange = (filter: string, value: string) => {
    // Show toast notification when filter changes
    toast({
      title: "Filter Applied",
      description: `${filter} filter set to "${value}"`,
      duration: 2000,
    });
    
    switch(filter) {
      case "industry":
        setSelectedIndustry(value);
        break;
      case "stage":
        setSelectedStage(value);
        break;
      case "location":
        setSelectedLocation(value);
        break;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-stargaze-900 dark:text-white mb-4">
              Discover Promising Indian Startups
            </h1>
            <p className="text-lg text-stargaze-600 dark:text-stargaze-300 max-w-3xl mx-auto">
              Connect with innovative startups across various industries in India and find your next investment opportunity or partnership.
            </p>
          </AnimatedSection>
          
          {/* Search and Filters */}
          <AnimatedSection 
            animation="fade-up" 
            delay={100} 
            className="bg-white dark:bg-stargaze-900 shadow-subtle rounded-xl p-6 mb-8 max-w-5xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Input
                  placeholder="Search startups..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stargaze-400" />
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Select value={selectedIndustry} onValueChange={(value) => handleFilterChange("industry", value)}>
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map((industry) => (
                      <SelectItem key={industry} value={industry}>
                        {industry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={selectedStage} onValueChange={(value) => handleFilterChange("stage", value)}>
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Funding Stage" />
                  </SelectTrigger>
                  <SelectContent>
                    {fundingStages.map((stage) => (
                      <SelectItem key={stage} value={stage}>
                        {stage}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={selectedLocation} onValueChange={(value) => handleFilterChange("location", value)}>
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Loading State */}
          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white dark:bg-stargaze-900 rounded-xl p-4 space-y-3 shadow-subtle">
                  <Skeleton className="h-48 w-full rounded-md" />
                  <Skeleton className="h-8 w-3/4 rounded-md" />
                  <Skeleton className="h-6 w-1/2 rounded-md" />
                  <Skeleton className="h-20 w-full rounded-md" />
                  <div className="flex space-x-2">
                    <Skeleton className="h-10 w-full rounded-md" />
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Error State */}
          {error && (
            <div className="max-w-5xl mx-auto text-center py-10">
              <p className="text-xl font-medium text-red-500">
                Failed to load startups data. Please try again later.
              </p>
              <Button onClick={() => window.location.reload()} className="mt-4">
                Retry
              </Button>
            </div>
          )}
          
          {/* Results Count */}
          {!isLoading && !error && (
            <AnimatedSection delay={150} className="mb-6 max-w-5xl mx-auto">
              <div className="flex items-center justify-between">
                <p className="text-sm text-stargaze-600 dark:text-stargaze-400">
                  Showing <span className="font-medium">{filteredStartups.length}</span> startups
                </p>
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-stargaze-500" />
                  <span className="text-sm text-stargaze-600 dark:text-stargaze-400">Filters Applied</span>
                </div>
              </div>
            </AnimatedSection>
          )}
          
          {/* Empty State */}
          {!isLoading && !error && startups && startups.length === 0 && (
            <EmptyState
              icon={<MapPin className="h-10 w-10 text-primary/60" />}
              title="No startups available yet"
              description="We're currently onboarding exciting Indian startups to our platform. Check back soon!"
              actionLabel="Notify me when startups are added"
              onAction={() => {
                toast({
                  title: "Notification Set",
                  description: "We'll notify you when new startups are added",
                });
              }}
            />
          )}
          
          {/* Startups Grid */}
          {!isLoading && !error && startups && startups.length > 0 && (
            <>
              {filteredStartups.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {filteredStartups.map((startup, index) => (
                    <AnimatedSection key={startup.id} delay={200 + index * 50}>
                      <StartupCard startup={startup} />
                    </AnimatedSection>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 max-w-5xl mx-auto">
                  <p className="text-2xl font-medium text-stargaze-600 dark:text-stargaze-300">
                    No startups match your filters
                  </p>
                  <p className="mt-2 text-stargaze-500">
                    Try adjusting your search criteria
                  </p>
                  <Button 
                    className="mt-6" 
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedIndustry("All Industries");
                      setSelectedStage("All Stages");
                      setSelectedLocation("All Locations");
                      
                      toast({
                        title: "Filters Cleared",
                        description: "All search filters have been reset",
                      });
                    }}
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StartupShowcase;
