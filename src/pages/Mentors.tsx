
import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MentorCard } from "@/components/MentorCard";
import { Search, Filter, Calendar, Star, ArrowRight, Loader } from "lucide-react";
import { useMentors } from "@/hooks/use-mentors";
import { 
  Pagination, 
  PaginationContent, 
  PaginationEllipsis, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";

// Filter options
const expertiseOptions = ["All Expertise", "Marketing", "Sales", "Finance", "Operations", "Product", "Tech", "Design", "Leadership"];
const availabilityOptions = ["Any Availability", "Available Now", "Available This Week", "Available Next Week"];
const industryOptions = ["All Industries", "SaaS", "FinTech", "Health Tech", "E-commerce", "Marketplaces", "AI/ML", "Consumer"];

const ITEMS_PER_PAGE = 6;

const Mentors = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedExpertise, setSelectedExpertise] = useState("All Expertise");
  const [selectedAvailability, setSelectedAvailability] = useState("Any Availability");
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch mentors data using React Query
  const { data: mentors, isLoading, error } = useMentors();

  // Filter mentors based on search and filters
  const filteredMentors = mentors ? mentors.filter((mentor) => {
    // Search filter
    const matchesSearch = 
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.expertise.some(item => item.toLowerCase().includes(searchQuery.toLowerCase()));
    
    // Expertise filter (basic implementation - would be more complex in real app)
    const matchesExpertise = 
      selectedExpertise === "All Expertise" ||
      mentor.expertise.some(exp => exp.toLowerCase().includes(selectedExpertise.toLowerCase()));
    
    // Availability filter (basic implementation)
    const matchesAvailability = 
      selectedAvailability === "Any Availability" ||
      (selectedAvailability === "Available Now" && mentor.available);
    
    // Industry filter would be implemented similarly (using mentor.industries if that data existed)
    // This is a simplified version
    const matchesIndustry = selectedIndustry === "All Industries";
    
    return matchesSearch && matchesExpertise && matchesAvailability && matchesIndustry;
  }) : [];

  // Pagination logic
  const totalPages = Math.ceil((filteredMentors.length || 0) / ITEMS_PER_PAGE);
  const paginatedMentors = filteredMentors.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate page numbers for pagination
  const pageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if there are fewer than maxVisiblePages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always include first page
      pages.push(1);
      
      // Calculate start and end of displayed pages
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);
      
      // Adjust for edge cases
      if (currentPage <= 2) {
        end = 4;
      } else if (currentPage >= totalPages - 1) {
        start = totalPages - 3;
      }
      
      // Add ellipsis if needed
      if (start > 2) {
        pages.push('ellipsis1');
      }
      
      // Add page numbers
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      // Add ellipsis if needed
      if (end < totalPages - 1) {
        pages.push('ellipsis2');
      }
      
      // Always include last page if there's more than one page
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  // Reset to first page when filters change
  const handleFilterChange = () => {
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-stargaze-900 dark:text-white mb-4">
              Find Your Perfect Mentor
            </h1>
            <p className="text-lg text-stargaze-600 dark:text-stargaze-300 max-w-3xl mx-auto">
              Connect with experienced mentors who can guide you through every stage of your startup journey.
              Filter by expertise, availability, and industry to find the right match.
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
                  placeholder="Search mentors..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    handleFilterChange();
                  }}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stargaze-400" />
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Select 
                  value={selectedExpertise} 
                  onValueChange={(value) => {
                    setSelectedExpertise(value);
                    handleFilterChange();
                  }}
                >
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Expertise" />
                  </SelectTrigger>
                  <SelectContent>
                    {expertiseOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select 
                  value={selectedAvailability} 
                  onValueChange={(value) => {
                    setSelectedAvailability(value);
                    handleFilterChange();
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Availability" />
                  </SelectTrigger>
                  <SelectContent>
                    {availabilityOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select 
                  value={selectedIndustry} 
                  onValueChange={(value) => {
                    setSelectedIndustry(value);
                    handleFilterChange();
                  }}
                >
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {industryOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
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
              {isLoading ? (
                <p className="text-sm text-stargaze-600 dark:text-stargaze-400 flex items-center gap-2">
                  <Loader className="h-4 w-4 animate-spin" />
                  Loading mentors...
                </p>
              ) : (
                <p className="text-sm text-stargaze-600 dark:text-stargaze-400">
                  Showing <span className="font-medium">{paginatedMentors.length}</span> of <span className="font-medium">{filteredMentors.length}</span> mentors
                </p>
              )}
              
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-stargaze-500" />
                <span className="text-sm text-stargaze-600 dark:text-stargaze-400">Filters Applied</span>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Mentors Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {Array(6).fill(0).map((_, index) => (
                <AnimatedSection key={index} delay={100 + index * 50}>
                  <div className="bg-white dark:bg-stargaze-900 border border-stargaze-200 dark:border-stargaze-800 rounded-xl p-6 h-96 flex flex-col">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="h-16 w-16 rounded-full bg-stargaze-200 dark:bg-stargaze-800 animate-pulse" />
                      <div className="space-y-2">
                        <div className="h-5 w-32 bg-stargaze-200 dark:bg-stargaze-800 rounded animate-pulse" />
                        <div className="h-4 w-40 bg-stargaze-200 dark:bg-stargaze-800 rounded animate-pulse" />
                      </div>
                    </div>
                    <div className="space-y-3 mb-4">
                      <div className="h-4 w-24 bg-stargaze-200 dark:bg-stargaze-800 rounded animate-pulse" />
                      <div className="h-4 w-full bg-stargaze-200 dark:bg-stargaze-800 rounded animate-pulse" />
                    </div>
                    <div className="flex gap-2 mb-4">
                      {Array(3).fill(0).map((_, idx) => (
                        <div key={idx} className="h-6 w-16 bg-stargaze-200 dark:bg-stargaze-800 rounded-full animate-pulse" />
                      ))}
                    </div>
                    <div className="space-y-2 mb-4 flex-grow">
                      <div className="h-4 w-full bg-stargaze-200 dark:bg-stargaze-800 rounded animate-pulse" />
                      <div className="h-4 w-full bg-stargaze-200 dark:bg-stargaze-800 rounded animate-pulse" />
                      <div className="h-4 w-3/4 bg-stargaze-200 dark:bg-stargaze-800 rounded animate-pulse" />
                    </div>
                    <div className="h-10 w-full bg-stargaze-200 dark:bg-stargaze-800 rounded animate-pulse" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-20 max-w-5xl mx-auto">
              <p className="text-2xl font-medium text-destructive">
                Error loading mentors
              </p>
              <p className="mt-2 text-stargaze-500">
                Please try again later or contact support if the problem persists.
              </p>
              <Button 
                className="mt-6" 
                onClick={() => window.location.reload()}
              >
                Retry
              </Button>
            </div>
          ) : filteredMentors.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {paginatedMentors.map((mentor, index) => (
                  <AnimatedSection key={mentor.id} delay={200 + index * 50}>
                    <MentorCard mentor={mentor} />
                  </AnimatedSection>
                ))}
              </div>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12">
                  <Pagination>
                    <PaginationContent>
                      {/* Previous button */}
                      <PaginationItem>
                        <PaginationPrevious 
                          onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                          className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                        />
                      </PaginationItem>
                      
                      {/* Page numbers */}
                      {pageNumbers().map((page, idx) => (
                        typeof page === 'number' ? (
                          <PaginationItem key={idx}>
                            <PaginationLink 
                              onClick={() => handlePageChange(page)}
                              isActive={page === currentPage}
                            >
                              {page}
                            </PaginationLink>
                          </PaginationItem>
                        ) : (
                          <PaginationItem key={page}>
                            <PaginationEllipsis />
                          </PaginationItem>
                        )
                      ))}
                      
                      {/* Next button */}
                      <PaginationItem>
                        <PaginationNext 
                          onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                          className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20 max-w-5xl mx-auto">
              <p className="text-2xl font-medium text-stargaze-600 dark:text-stargaze-300">
                No mentors match your filters
              </p>
              <p className="mt-2 text-stargaze-500">
                Try adjusting your search criteria
              </p>
              <Button 
                className="mt-6" 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedExpertise("All Expertise");
                  setSelectedAvailability("Any Availability");
                  setSelectedIndustry("All Industries");
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

export default Mentors;
