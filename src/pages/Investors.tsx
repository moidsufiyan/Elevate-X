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
  Filter,
  MapPin,
  Building2,
  TrendingUp,
  Users,
  Award,
  ExternalLink,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  IndianRupee,
  Target,
  Star,
} from "lucide-react";
import {
  investors,
  investorTypes,
  sectors,
  investmentStages,
  getInvestorsByType,
  getInvestorsBySector,
  getInvestorsByStage,
  searchInvestors,
  type Investor,
} from "@/data/investors";

const InvestorCard = ({ investor }: { investor: Investor }) => {
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
              <img
                src={investor.logo}
                alt={investor.name}
                className="w-12 h-12 rounded-lg object-cover"
              />
            </div>
            <div className="flex-1">
              <CardTitle className="text-xl font-bold text-foreground mb-1">
                {investor.name}
              </CardTitle>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="text-xs">
                  {investor.type}
                </Badge>
                <div className="flex items-center text-muted-foreground text-sm">
                  <MapPin className="w-3 h-3 mr-1" />
                  {investor.location}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
        </div>
        <CardDescription className="text-sm text-muted-foreground line-clamp-2">
          {investor.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0 space-y-4">
        {/* Investment Range */}
        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
          <div className="text-center">
            <div className="text-xs text-muted-foreground mb-1">
              Investment Range
            </div>
            <div className="font-semibold text-sm flex items-center">
              <IndianRupee className="w-3 h-3 mr-1" />
              {investor.investmentRange.min} - {investor.investmentRange.max}
            </div>
          </div>
          <div className="text-center">
            <div className="text-xs text-muted-foreground mb-1">Portfolio</div>
            <div className="font-semibold text-sm">
              {investor.stats.activePortfolio}
            </div>
          </div>
          <div className="text-center">
            <div className="text-xs text-muted-foreground mb-1">Exits</div>
            <div className="font-semibold text-sm">{investor.stats.exits}</div>
          </div>
        </div>

        {/* Sectors */}
        <div>
          <div className="text-xs text-muted-foreground mb-2">
            Focus Sectors
          </div>
          <div className="flex flex-wrap gap-1">
            {investor.sectors.slice(0, 3).map((sector) => (
              <Badge key={sector} variant="outline" className="text-xs">
                {sector}
              </Badge>
            ))}
            {investor.sectors.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{investor.sectors.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Investment Stages */}
        <div>
          <div className="text-xs text-muted-foreground mb-2">
            Investment Stages
          </div>
          <div className="flex flex-wrap gap-1">
            {investor.stagePreference.map((stage) => (
              <Badge key={stage} variant="secondary" className="text-xs">
                {stage}
              </Badge>
            ))}
          </div>
        </div>

        {/* Notable Investments */}
        <div>
          <div className="text-xs text-muted-foreground mb-2">
            Notable Investments
          </div>
          <div className="flex flex-wrap gap-1">
            {investor.portfolioCompanies.slice(0, 3).map((company) => (
              <Badge key={company} variant="outline" className="text-xs">
                {company}
              </Badge>
            ))}
            {investor.portfolioCompanies.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{investor.portfolioCompanies.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <Button asChild size="sm" className="flex-1">
            <Link to={`/investor/${investor.id}`}>View Profile</Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a
              href={investor.contactInfo.email}
              className="flex items-center gap-1"
            >
              <Mail className="w-3 h-3" />
              Contact
            </a>
          </Button>
          {investor.website && (
            <Button variant="outline" size="sm" asChild>
              <a
                href={investor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <ExternalLink className="w-3 h-3" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const InvestorStats = () => {
  const totalInvestors = investors.length;
  const totalInvestments = investors.reduce(
    (sum, inv) => sum + inv.stats.totalInvestments,
    0
  );
  const totalExits = investors.reduce((sum, inv) => sum + inv.stats.exits, 0);
  const avgInvestmentSize = "₹12.5 Cr";

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <div className="text-center p-4 bg-muted/50 rounded-lg">
        <div className="text-2xl font-bold text-primary">{totalInvestors}</div>
        <div className="text-sm text-muted-foreground">Active Investors</div>
      </div>
      <div className="text-center p-4 bg-muted/50 rounded-lg">
        <div className="text-2xl font-bold text-primary">
          {totalInvestments}
        </div>
        <div className="text-sm text-muted-foreground">Total Investments</div>
      </div>
      <div className="text-center p-4 bg-muted/50 rounded-lg">
        <div className="text-2xl font-bold text-primary">{totalExits}</div>
        <div className="text-sm text-muted-foreground">Successful Exits</div>
      </div>
      <div className="text-center p-4 bg-muted/50 rounded-lg">
        <div className="text-2xl font-bold text-primary">
          {avgInvestmentSize}
        </div>
        <div className="text-sm text-muted-foreground">Avg Investment</div>
      </div>
    </div>
  );
};

const Investors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedSector, setSelectedSector] = useState("All");
  const [selectedStage, setSelectedStage] = useState("All");
  const [filteredInvestors, setFilteredInvestors] =
    useState<Investor[]>(investors);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    let result = investors;

    // Apply search filter
    if (searchTerm) {
      result = searchInvestors(searchTerm);
    }

    // Apply type filter
    if (selectedType !== "All") {
      result = result.filter((inv) =>
        getInvestorsByType(selectedType).includes(inv)
      );
    }

    // Apply sector filter
    if (selectedSector !== "All") {
      result = result.filter((inv) =>
        getInvestorsBySector(selectedSector).includes(inv)
      );
    }

    // Apply stage filter
    if (selectedStage !== "All") {
      result = result.filter((inv) =>
        getInvestorsByStage(selectedStage).includes(inv)
      );
    }

    setFilteredInvestors(result);
  }, [searchTerm, selectedType, selectedSector, selectedStage]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedType("All");
    setSelectedSector("All");
    setSelectedStage("All");
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Investors & VCs | Connect with Top Indian Investors"
        description="Discover and connect with leading venture capital firms, angel investors, and funding sources in India's startup ecosystem."
        keywords="venture capital, angel investors, startup funding, Indian VCs, investment, Series A, seed funding"
      />

      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <AnimatedSection animation="fade-in" duration="normal" delay={100}>
          <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-background to-primary/5">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Connect with India's
                <span className="text-primary block">Leading Investors</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Discover venture capital firms, angel investors, and funding
                sources that are actively investing in Indian startups across
                all sectors and stages.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="#investors">Explore Investors</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/startup-profile">Submit Your Startup</Link>
                </Button>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Stats Section */}
        <AnimatedSection animation="fade-up" duration="normal" delay={200}>
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <InvestorStats />
            </div>
          </section>
        </AnimatedSection>

        {/* Investors Section */}
        <AnimatedSection animation="fade-up" duration="normal" delay={300}>
          <section id="investors" className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Investor Directory
                </h2>
                <p className="text-xl text-muted-foreground">
                  Find the right investors for your startup's stage and sector
                </p>
              </div>

              {/* Search and Filters */}
              <div className="mb-8 space-y-4">
                <div className="flex flex-col lg:flex-row gap-4">
                  {/* Search */}
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search investors, sectors, or portfolio companies..."
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
                        <SelectValue placeholder="Investor Type" />
                      </SelectTrigger>
                      <SelectContent>
                        {investorTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select
                      value={selectedSector}
                      onValueChange={setSelectedSector}
                    >
                      <SelectTrigger className="w-full sm:w-[180px]">
                        <SelectValue placeholder="Sector" />
                      </SelectTrigger>
                      <SelectContent>
                        {sectors.map((sector) => (
                          <SelectItem key={sector} value={sector}>
                            {sector}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select
                      value={selectedStage}
                      onValueChange={setSelectedStage}
                    >
                      <SelectTrigger className="w-full sm:w-[180px]">
                        <SelectValue placeholder="Investment Stage" />
                      </SelectTrigger>
                      <SelectContent>
                        {investmentStages.map((stage) => (
                          <SelectItem key={stage} value={stage}>
                            {stage}
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
                  selectedSector !== "All" ||
                  selectedStage !== "All") && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Filter className="w-4 h-4" />
                    <span>Active filters:</span>
                    {searchTerm && (
                      <Badge variant="secondary">Search: {searchTerm}</Badge>
                    )}
                    {selectedType !== "All" && (
                      <Badge variant="secondary">Type: {selectedType}</Badge>
                    )}
                    {selectedSector !== "All" && (
                      <Badge variant="secondary">
                        Sector: {selectedSector}
                      </Badge>
                    )}
                    {selectedStage !== "All" && (
                      <Badge variant="secondary">Stage: {selectedStage}</Badge>
                    )}
                  </div>
                )}
              </div>

              {/* Results */}
              <div className="mb-6">
                <p className="text-muted-foreground">
                  Showing {filteredInvestors.length} of {investors.length}{" "}
                  investors
                </p>
              </div>

              {/* Investors Grid */}
              {filteredInvestors.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredInvestors.map((investor) => (
                    <InvestorCard key={investor.id} investor={investor} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                    <Search className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    No investors found
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your search criteria or filters
                  </p>
                  <Button onClick={clearFilters}>Clear all filters</Button>
                </div>
              )}
            </div>
          </section>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animation="fade-up" duration="normal" delay={400}>
          <section className="py-16 px-4 bg-muted/30">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Connect with Investors?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Prepare your startup profile and reach out to investors who
                align with your vision and stage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/startup-profile">Create Startup Profile</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/resources">Funding Resources</Link>
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

export default Investors;
