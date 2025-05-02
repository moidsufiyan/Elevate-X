
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { StartupCard } from "@/components/startup/StartupCard";
import { Button } from "@/components/Button";
import { Search, Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Startup } from "@/shared/types/models";
import { useToast } from "@/hooks/use-toast";

// Sample startup data matching the Startup interface
const startups: Startup[] = [
  {
    id: "1",
    name: "EcoHarvest",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    industry: "AgTech",
    description: "Sustainable farming solutions using IoT and AI to optimize crop yields while reducing environmental impact.",
    stage: "Seed",
    foundingYear: 2021,
    founders: [],
    location: "California, USA",
    funding: "$500K",
    employees: 12,
    website: "https://ecoharvest.example.com",
    featured: true
  },
  {
    id: "2",
    name: "MindfulAI",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    industry: "HealthTech",
    description: "Mental health platform using AI to provide personalized therapy and wellness recommendations.",
    stage: "Series A",
    foundingYear: 2020,
    founders: [],
    location: "Boston, USA",
    funding: "$2.5M",
    employees: 25,
    website: "https://mindfulai.example.com",
    featured: false
  },
  {
    id: "3",
    name: "QuantumSecure",
    logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    industry: "Cybersecurity",
    description: "Next-generation encryption technology to protect sensitive data against quantum computing threats.",
    stage: "Pre-seed",
    foundingYear: 2023,
    founders: [],
    location: "London, UK",
    funding: "$250K",
    employees: 8,
    website: "https://quantumsecure.example.com",
    featured: false
  },
  {
    id: "4",
    name: "UrbanMobility",
    logo: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    industry: "Transportation",
    description: "Electric micromobility solutions for urban environments to reduce congestion and emissions.",
    stage: "Series B",
    foundingYear: 2019,
    founders: [],
    location: "Berlin, Germany",
    funding: "$8M",
    employees: 42,
    website: "https://urbanmobility.example.com",
    featured: true
  },
  {
    id: "5",
    name: "NutriGenomics",
    logo: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    industry: "FoodTech",
    description: "Personalized nutrition plans based on genetic analysis for optimal health outcomes.",
    stage: "Seed",
    foundingYear: 2022,
    founders: [],
    location: "Singapore",
    funding: "$750K",
    employees: 15,
    website: "https://nutrigenomics.example.com",
    featured: false
  },
  {
    id: "6",
    name: "BlockFinance",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    industry: "FinTech",
    description: "Decentralized finance platform making crypto investing accessible to everyday users.",
    stage: "Series A",
    foundingYear: 2020,
    founders: [],
    location: "New York, USA",
    funding: "$4.2M",
    employees: 28,
    website: "https://blockfinance.example.com",
    featured: false
  },
];

// For filtering
const industries = ["All Industries", "AgTech", "HealthTech", "Cybersecurity", "Transportation", "FoodTech", "FinTech"];
const fundingStages = ["All Stages", "Pre-seed", "Seed", "Series A", "Series B", "Series C+"];
const locations = ["All Locations", "USA", "UK", "Germany", "Singapore"];

const StartupShowcase = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");
  const [selectedStage, setSelectedStage] = useState("All Stages");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const { toast } = useToast();

  // Filter startups based on search and filters
  const filteredStartups = startups.filter((startup) => {
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
  });
  
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
              Discover Promising Startups
            </h1>
            <p className="text-lg text-stargaze-600 dark:text-stargaze-300 max-w-3xl mx-auto">
              Connect with innovative startups across various industries and find your next investment opportunity.
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
          
          {/* Results Count */}
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
          
          {/* Startups Grid */}
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
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StartupShowcase;
