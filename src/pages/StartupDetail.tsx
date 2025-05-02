import { useParams } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  TrendingUp,
  Users,
  Calendar,
  Globe,
  Building,
  MessageSquare,
  Heart,
  ArrowLeft,
} from "lucide-react";
import { useStartups } from "@/hooks/use-startups";
import { Skeleton } from "@/components/ui/skeleton";

const StartupDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState("about");
  const { data: startups, isLoading, error } = useStartups();

  // Find the startup with the matching ID
  const startup = startups?.find((s) => s.id === id);

  // Format founding year to show years active
  const yearsActive = startup
    ? new Date().getFullYear() - startup.foundingYear
    : 0;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-6">
            <div className="flex justify-center items-center py-20">
              <Skeleton className="h-64 w-64 rounded-full" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !startup) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-3xl font-bold mb-4">Startup Not Found</h1>
            <p className="text-stargaze-600 dark:text-stargaze-400 mb-8">
              The startup you're looking for doesn't exist or there was an error
              loading the data.
            </p>
            <Button onClick={() => window.history.back()}>Go Back</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <Button
              variant="ghost"
              leftIcon={<ArrowLeft className="h-4 w-4" />}
              onClick={() => window.history.back()}
              className="mb-6"
            >
              Back
            </Button>

            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-6">Startup Details</h1>
              <p className="text-lg text-muted-foreground">Startup ID: {id}</p>
              {/* Add more startup details here */}
            </div>
          </AnimatedSection>

          {/* Startup Profile Header */}
          <AnimatedSection className="bg-white dark:bg-stargaze-900 rounded-xl overflow-hidden shadow-subtle mb-8">
            <div className="md:flex">
              {/* Logo Container (larger on desktop) */}
              <div className="md:w-1/3 p-6 flex justify-center items-center bg-gradient-to-br from-stargaze-50 to-stargaze-100 dark:from-stargaze-900 dark:to-stargaze-800">
                <div className="relative w-48 h-48 flex items-center justify-center">
                  <img
                    src={startup.logo || "/placeholder.svg"}
                    alt={startup.name}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </div>
              </div>

              {/* Startup Info */}
              <div className="md:w-2/3 p-6 md:pt-10">
                <div className="flex items-center justify-between mb-2">
                  <h1 className="text-3xl font-bold text-stargaze-900 dark:text-white">
                    {startup.name}
                  </h1>
                  <Badge
                    variant="outline"
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    {startup.industry}
                  </Badge>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-stargaze-600 dark:text-stargaze-300 mb-6">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{startup.location}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-4 w-4" />
                    <span>{startup.stage}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>
                      Founded {startup.foundingYear} (
                      {yearsActive === 0 ? "New" : `${yearsActive}y`})
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{startup.employees} employees</span>
                  </div>
                </div>

                <p className="text-stargaze-600 dark:text-stargaze-400 mb-6 max-w-2xl">
                  {startup.description}
                </p>

                {startup.funding !== "Unknown" && (
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 text-sm rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                      {startup.funding}
                    </span>
                  </div>
                )}

                <div className="flex flex-wrap gap-3">
                  {startup.website && (
                    <a
                      href={startup.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="lg" className="gap-2">
                        <Globe className="h-5 w-5" />
                        Visit Website
                      </Button>
                    </a>
                  )}

                  <Button size="lg" className="gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Contact
                  </Button>

                  <Button variant="secondary" size="lg" className="gap-2">
                    <Heart className="h-5 w-5" />
                    Show Interest
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Startup Detail Tabs */}
          <AnimatedSection delay={100}>
            <Tabs
              defaultValue="about"
              onValueChange={setActiveTab}
              className="w-full max-w-5xl mx-auto"
            >
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="founders">Founders</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
              </TabsList>

              <TabsContent
                value="about"
                className="bg-white dark:bg-stargaze-900 p-6 rounded-xl shadow-subtle"
              >
                <h2 className="text-2xl font-bold mb-4 text-stargaze-900 dark:text-white">
                  About {startup.name}
                </h2>
                <p className="text-stargaze-600 dark:text-stargaze-400 mb-6">
                  {startup.description}
                </p>

                {startup.website && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Website</h3>
                    <a
                      href={startup.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center gap-2"
                    >
                      <Globe className="h-4 w-4" />
                      {startup.website}
                    </a>
                  </div>
                )}
              </TabsContent>

              <TabsContent
                value="founders"
                className="bg-white dark:bg-stargaze-900 p-6 rounded-xl shadow-subtle"
              >
                <h2 className="text-2xl font-bold mb-6 text-stargaze-900 dark:text-white">
                  Founding Team
                </h2>

                {startup.founders && startup.founders.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {startup.founders.map((founder, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 border border-stargaze-200 dark:border-stargaze-800 rounded-lg"
                      >
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-stargaze-200 dark:bg-stargaze-800 flex-shrink-0">
                          <img
                            src={founder.avatar || "/placeholder.svg"}
                            alt={founder.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "/placeholder.svg";
                            }}
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-stargaze-900 dark:text-white">
                            {founder.name}
                          </h3>
                          <p className="text-stargaze-600 dark:text-stargaze-400">
                            {founder.role}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-stargaze-600 dark:text-stargaze-400">
                    Founder information not available.
                  </p>
                )}
              </TabsContent>

              <TabsContent
                value="details"
                className="bg-white dark:bg-stargaze-900 p-6 rounded-xl shadow-subtle"
              >
                <h2 className="text-2xl font-bold mb-6 text-stargaze-900 dark:text-white">
                  Startup Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Industry</h3>
                    <p className="text-stargaze-600 dark:text-stargaze-400 mb-6">
                      {startup.industry}
                    </p>

                    <h3 className="text-lg font-semibold mb-3">Stage</h3>
                    <p className="text-stargaze-600 dark:text-stargaze-400 mb-6">
                      {startup.stage}
                    </p>

                    <h3 className="text-lg font-semibold mb-3">Founded</h3>
                    <p className="text-stargaze-600 dark:text-stargaze-400 mb-6">
                      {startup.foundingYear}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Location</h3>
                    <p className="text-stargaze-600 dark:text-stargaze-400 mb-6">
                      {startup.location}
                    </p>

                    <h3 className="text-lg font-semibold mb-3">Team Size</h3>
                    <p className="text-stargaze-600 dark:text-stargaze-400 mb-6">
                      {startup.employees} employees
                    </p>

                    <h3 className="text-lg font-semibold mb-3">Funding</h3>
                    <p className="text-stargaze-600 dark:text-stargaze-400">
                      {startup.funding || "Not disclosed"}
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StartupDetail;
