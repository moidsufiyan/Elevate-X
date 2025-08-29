import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SEO } from "@/components/SEO";
import {
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
  Calendar,
  DollarSign,
  Briefcase,
  ArrowLeft,
  CheckCircle,
  Globe,
} from "lucide-react";
import { getInvestorById } from "@/data/investors";
import { NotFound } from "./NotFound";

const InvestorDetail = () => {
  const { id } = useParams<{ id: string }>();
  const investor = id ? getInvestorById(id) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!investor) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${investor.name} | Investor Profile`}
        description={investor.description}
        keywords={`${
          investor.name
        }, investor, venture capital, ${investor.sectors.join(", ")}`}
      />

      <Navbar />

      <main className="pt-20">
        {/* Header Section */}
        <AnimatedSection animation="fade-in" duration="normal" delay={100}>
          <section className="py-12 px-4 bg-gradient-to-br from-primary/5 via-background to-primary/5">
            <div className="max-w-7xl mx-auto">
              {/* Breadcrumb */}
              <div className="mb-6">
                <Button variant="ghost" size="sm" asChild className="mb-4">
                  <Link to="/investors" className="flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Investors
                  </Link>
                </Button>
              </div>

              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Column - Main Info */}
                <div className="flex-1">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-24 h-24 rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center flex-shrink-0">
                      <img
                        src={investor.logo}
                        alt={investor.name}
                        className="w-20 h-20 rounded-xl object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                        {investor.name}
                      </h1>
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <Badge variant="secondary" className="text-sm">
                          {investor.type}
                        </Badge>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-1" />
                          {investor.location}
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                          <span className="text-sm text-muted-foreground ml-1">
                            (4.8)
                          </span>
                        </div>
                      </div>
                      <p className="text-lg text-muted-foreground mb-6">
                        {investor.description}
                      </p>

                      {/* Social Links */}
                      <div className="flex gap-3">
                        <Button size="sm" asChild>
                          <a href={`mailto:${investor.contactInfo.email}`}>
                            <Mail className="w-4 h-4 mr-2" />
                            Contact
                          </a>
                        </Button>
                        {investor.website && (
                          <Button variant="outline" size="sm" asChild>
                            <a
                              href={investor.website}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Globe className="w-4 h-4 mr-2" />
                              Website
                            </a>
                          </Button>
                        )}
                        {investor.socialLinks?.linkedin && (
                          <Button variant="outline" size="sm" asChild>
                            <a
                              href={investor.socialLinks.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Linkedin className="w-4 h-4" />
                            </a>
                          </Button>
                        )}
                        {investor.socialLinks?.twitter && (
                          <Button variant="outline" size="sm" asChild>
                            <a
                              href={investor.socialLinks.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Twitter className="w-4 h-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Key Stats */}
                <div className="lg:w-80">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Investment Overview
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-muted/50 rounded-lg">
                          <div className="text-xl font-bold text-primary">
                            {investor.stats.totalInvestments}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Total Investments
                          </div>
                        </div>
                        <div className="text-center p-3 bg-muted/50 rounded-lg">
                          <div className="text-xl font-bold text-primary">
                            {investor.stats.activePortfolio}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Active Portfolio
                          </div>
                        </div>
                        <div className="text-center p-3 bg-muted/50 rounded-lg">
                          <div className="text-xl font-bold text-primary">
                            {investor.stats.exits}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Exits
                          </div>
                        </div>
                        <div className="text-center p-3 bg-muted/50 rounded-lg">
                          <div className="text-xl font-bold text-primary">
                            {investor.stats.averageInvestment}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Avg Investment
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <div className="text-sm font-medium mb-2">
                          Investment Range
                        </div>
                        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <div className="flex items-center text-sm">
                            <IndianRupee className="w-4 h-4 mr-1" />
                            {investor.investmentRange.min}
                          </div>
                          <div className="text-muted-foreground">to</div>
                          <div className="flex items-center text-sm">
                            <IndianRupee className="w-4 h-4 mr-1" />
                            {investor.investmentRange.max}
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="text-sm font-medium mb-2">
                          Investment Stages
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {investor.stagePreference.map((stage) => (
                            <Badge
                              key={stage}
                              variant="secondary"
                              className="text-xs"
                            >
                              {stage}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="text-sm font-medium mb-2">
                          Focus Sectors
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {investor.sectors.map((sector) => (
                            <Badge
                              key={sector}
                              variant="outline"
                              className="text-xs"
                            >
                              {sector}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Content Tabs */}
        <AnimatedSection animation="fade-up" duration="normal" delay={200}>
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <Tabs defaultValue="about" className="w-full">
                <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:grid-cols-5">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                  <TabsTrigger value="team">Team</TabsTrigger>
                  <TabsTrigger value="investments">Investments</TabsTrigger>
                  <TabsTrigger value="contact">Contact</TabsTrigger>
                </TabsList>

                <TabsContent value="about" className="mt-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                      <Card className="border-0 shadow-md">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Target className="w-5 h-5 text-primary" />
                            Investment Philosophy
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed">
                            {investor.investmentPhilosophy}
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="border-0 shadow-md">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-primary" />
                            Value Addition
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {investor.valueAdd.map((value, index) => (
                              <div
                                key={index}
                                className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg"
                              >
                                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{value}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      {investor.recentNews &&
                        investor.recentNews.length > 0 && (
                          <Card className="border-0 shadow-md">
                            <CardHeader>
                              <CardTitle className="flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-primary" />
                                Recent News
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-4">
                                {investor.recentNews.map((news, index) => (
                                  <div
                                    key={index}
                                    className="border-l-4 border-primary/20 pl-4"
                                  >
                                    <h4 className="font-semibold mb-1">
                                      {news.title}
                                    </h4>
                                    <p className="text-sm text-muted-foreground mb-2">
                                      {news.summary}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                      {news.date}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        )}
                    </div>

                    <div className="space-y-6">
                      <Card className="border-0 shadow-md">
                        <CardHeader>
                          <CardTitle className="text-lg">Quick Facts</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Type</span>
                            <span className="font-medium">{investor.type}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Location
                            </span>
                            <span className="font-medium">
                              {investor.location}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Total Investments
                            </span>
                            <span className="font-medium">
                              {investor.stats.totalInvestments}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Portfolio Companies
                            </span>
                            <span className="font-medium">
                              {investor.stats.activePortfolio}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Successful Exits
                            </span>
                            <span className="font-medium">
                              {investor.stats.exits}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="portfolio" className="mt-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Card className="border-0 shadow-md">
                      <CardHeader>
                        <CardTitle>Portfolio Companies</CardTitle>
                        <CardDescription>
                          Companies in {investor.name}'s investment portfolio
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-3">
                          {investor.portfolioCompanies.map((company, index) => (
                            <div
                              key={index}
                              className="p-3 bg-muted/30 rounded-lg text-center"
                            >
                              <div className="font-medium">{company}</div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-md">
                      <CardHeader>
                        <CardTitle>Notable Investments</CardTitle>
                        <CardDescription>
                          Recent significant investment rounds
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {investor.notableInvestments.map(
                            (investment, index) => (
                              <div
                                key={index}
                                className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
                              >
                                <div>
                                  <div className="font-medium">
                                    {investment.company}
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    {investment.round}
                                  </div>
                                </div>
                                {investment.amount && (
                                  <div className="text-right">
                                    <div className="font-semibold text-primary">
                                      {investment.amount}
                                    </div>
                                  </div>
                                )}
                              </div>
                            )
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="team" className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {investor.keyPersonnel.map((person, index) => (
                      <Card key={index} className="border-0 shadow-md">
                        <CardContent className="pt-6">
                          <div className="text-center mb-4">
                            <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                              <img
                                src={person.avatar}
                                alt={person.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <h3 className="font-semibold text-lg">
                              {person.name}
                            </h3>
                            <p className="text-sm text-primary">
                              {person.role}
                            </p>
                          </div>
                          <p className="text-sm text-muted-foreground text-center leading-relaxed">
                            {person.bio}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="investments" className="mt-8">
                  <div className="space-y-6">
                    <Card className="border-0 shadow-md">
                      <CardHeader>
                        <CardTitle>Investment Criteria</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">
                              Investment Stages
                            </h4>
                            <div className="space-y-2">
                              {investor.stagePreference.map((stage) => (
                                <div
                                  key={stage}
                                  className="flex items-center gap-2"
                                >
                                  <CheckCircle className="w-4 h-4 text-primary" />
                                  <span className="text-sm">{stage}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">Sectors</h4>
                            <div className="space-y-2">
                              {investor.sectors.slice(0, 6).map((sector) => (
                                <div
                                  key={sector}
                                  className="flex items-center gap-2"
                                >
                                  <CheckCircle className="w-4 h-4 text-primary" />
                                  <span className="text-sm">{sector}</span>
                                </div>
                              ))}
                              {investor.sectors.length > 6 && (
                                <div className="text-sm text-muted-foreground">
                                  +{investor.sectors.length - 6} more sectors
                                </div>
                              )}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">
                              Investment Range
                            </h4>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <IndianRupee className="w-4 h-4 text-primary" />
                                <span className="text-sm">
                                  Min: {investor.investmentRange.min}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <IndianRupee className="w-4 h-4 text-primary" />
                                <span className="text-sm">
                                  Max: {investor.investmentRange.max}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <TrendingUp className="w-4 h-4 text-primary" />
                                <span className="text-sm">
                                  Avg: {investor.stats.averageInvestment}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="contact" className="mt-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Card className="border-0 shadow-md">
                      <CardHeader>
                        <CardTitle>Contact Information</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-primary" />
                          <div>
                            <div className="font-medium">Email</div>
                            <a
                              href={`mailto:${investor.contactInfo.email}`}
                              className="text-primary hover:underline"
                            >
                              {investor.contactInfo.email}
                            </a>
                          </div>
                        </div>

                        {investor.contactInfo.phone && (
                          <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-primary" />
                            <div>
                              <div className="font-medium">Phone</div>
                              <a
                                href={`tel:${investor.contactInfo.phone}`}
                                className="text-primary hover:underline"
                              >
                                {investor.contactInfo.phone}
                              </a>
                            </div>
                          </div>
                        )}

                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-primary mt-1" />
                          <div>
                            <div className="font-medium">Address</div>
                            <p className="text-muted-foreground">
                              {investor.contactInfo.address}
                            </p>
                          </div>
                        </div>

                        {investor.website && (
                          <div className="flex items-center gap-3">
                            <Globe className="w-5 h-5 text-primary" />
                            <div>
                              <div className="font-medium">Website</div>
                              <a
                                href={investor.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                              >
                                {investor.website}
                              </a>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-md">
                      <CardHeader>
                        <CardTitle>Get in Touch</CardTitle>
                        <CardDescription>
                          Ready to connect with {investor.name}?
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Button size="lg" className="w-full" asChild>
                          <a href={`mailto:${investor.contactInfo.email}`}>
                            <Mail className="w-4 h-4 mr-2" />
                            Send Email
                          </a>
                        </Button>

                        {investor.website && (
                          <Button
                            variant="outline"
                            size="lg"
                            className="w-full"
                            asChild
                          >
                            <a
                              href={investor.website}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Visit Website
                            </a>
                          </Button>
                        )}

                        <div className="flex gap-2">
                          {investor.socialLinks?.linkedin && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1"
                              asChild
                            >
                              <a
                                href={investor.socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Linkedin className="w-4 h-4" />
                              </a>
                            </Button>
                          )}
                          {investor.socialLinks?.twitter && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1"
                              asChild
                            >
                              <a
                                href={investor.socialLinks.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Twitter className="w-4 h-4" />
                              </a>
                            </Button>
                          )}
                        </div>

                        <div className="p-4 bg-muted/30 rounded-lg">
                          <p className="text-sm text-muted-foreground">
                            <strong>Note:</strong> This is a demo platform. In a
                            real implementation, you would submit your startup
                            profile through the platform's application process.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        </AnimatedSection>

        {/* Related Investors */}
        <AnimatedSection animation="fade-up" duration="normal" delay={300}>
          <section className="py-16 px-4 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Similar Investors
                </h2>
                <p className="text-xl text-muted-foreground">
                  Other investors with similar focus areas and investment
                  criteria
                </p>
              </div>

              <div className="text-center">
                <Button asChild>
                  <Link to="/investors">Explore All Investors</Link>
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

export default InvestorDetail;
