import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  MapPin,
  Calendar,
  Users,
  TrendingUp,
  Target,
  Lightbulb,
  Rocket,
  Award,
  ArrowLeft,
  ExternalLink,
  Linkedin,
  Twitter,
  Globe,
  DollarSign,
  Building,
  Clock,
  CheckCircle,
} from "lucide-react";
import { getStartupById } from "@/data/startups";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { SEO } from "@/components/common/SEO";

const StartupDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const startup = id ? getStartupById(id) : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!startup) {
    return (
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl font-bold text-stargaze-900 dark:text-white mb-4">
            Startup Not Found
          </h1>
          <p className="text-stargaze-600 dark:text-stargaze-400 mb-8">
            The startup you're looking for doesn't exist or has been removed.
          </p>
          <Button
            onClick={() => navigate("/startup-showcase")}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Startups
          </Button>
        </div>
      </main>
    );
  }

  return (
    <>
      <SEO
        title={`${startup.name} - ${startup.industry} Startup | ElevateX`}
        description={`${startup.shortPitch} Learn about ${startup.name}'s journey, founders, and growth story.`}
      />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <AnimatedSection className="py-12 px-4 sm:px-6 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5">
          <div className="max-w-7xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => navigate("/startup-showcase")}
              className="mb-6 gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Startups
            </Button>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Company Overview */}
              <div className="lg:col-span-2">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-20 h-20 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                    <img
                      src={startup.logo}
                      alt={startup.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h1 className="text-3xl font-bold text-stargaze-900 dark:text-white">
                        {startup.name}
                      </h1>
                      <Badge variant="outline" className="text-sm">
                        {startup.fundingStage}
                      </Badge>
                    </div>
                    <p className="text-xl text-stargaze-600 dark:text-stargaze-400 mb-4">
                      {startup.shortPitch}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-stargaze-600 dark:text-stargaze-400">
                      <div className="flex items-center gap-1">
                        <Building className="h-4 w-4" />
                        {startup.industry}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {startup.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Founded {startup.foundingYear}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {startup.teamSize} employees
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {startup.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle>Company Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-stargaze-600 dark:text-stargaze-400">
                        Funding
                      </span>
                      <span className="font-semibold">{startup.funding}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-stargaze-600 dark:text-stargaze-400">
                        Stage
                      </span>
                      <span className="font-semibold">
                        {startup.fundingStage}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-stargaze-600 dark:text-stargaze-400">
                        Team Size
                      </span>
                      <span className="font-semibold">{startup.teamSize}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-stargaze-600 dark:text-stargaze-400">
                        Founded
                      </span>
                      <span className="font-semibold">
                        {startup.foundingYear}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-stargaze-600 dark:text-stargaze-400">
                        Interest
                      </span>
                      <span className="font-semibold">
                        {startup.interestedCount}+ followers
                      </span>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <Button className="w-full gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Visit Website
                      </Button>

                      <div className="flex gap-2">
                        {startup.socialLinks?.linkedin && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 gap-1"
                          >
                            <Linkedin className="h-4 w-4" />
                            LinkedIn
                          </Button>
                        )}
                        {startup.socialLinks?.twitter && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 gap-1"
                          >
                            <Twitter className="h-4 w-4" />
                            Twitter
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-12">
          {/* Problem Statement */}
          {startup.problemStatement && (
            <AnimatedSection>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    The Problem
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stargaze-700 dark:text-stargaze-300 leading-relaxed text-lg">
                    {startup.problemStatement}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          )}

          {/* Solution */}
          {startup.solution && (
            <AnimatedSection>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" />
                    Our Solution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stargaze-700 dark:text-stargaze-300 leading-relaxed text-lg">
                    {startup.solution}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          )}

          {/* Company Story */}
          {startup.fullStory && (
            <AnimatedSection>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Rocket className="h-5 w-5" />
                    Our Journey
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stargaze-700 dark:text-stargaze-300 leading-relaxed text-lg">
                    {startup.fullStory}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          )}

          {/* Founders */}
          {startup.founders && startup.founders.length > 0 && (
            <AnimatedSection>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Meet the Founders
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {startup.founders.map((founder, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-stargaze-50 dark:bg-stargaze-800 rounded-lg"
                      >
                        <Avatar className="w-16 h-16">
                          <AvatarImage
                            src={founder.avatar}
                            alt={founder.name}
                          />
                          <AvatarFallback>
                            {founder.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold text-stargaze-900 dark:text-white mb-1">
                            {founder.name}
                          </h4>
                          <p className="text-primary font-medium mb-2">
                            {founder.role}
                          </p>
                          <p className="text-sm text-stargaze-600 dark:text-stargaze-400">
                            {founder.bio}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          )}

          {/* Traction & Growth */}
          {startup.traction && (
            <AnimatedSection>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Traction & Growth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {startup.traction.customers && (
                      <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                          {startup.traction.customers.split(" ")[0]}
                        </div>
                        <div className="text-sm text-stargaze-600 dark:text-stargaze-400">
                          Customers
                        </div>
                      </div>
                    )}
                    {startup.traction.revenue && (
                      <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                          {startup.traction.revenue.split(" ")[0]}
                        </div>
                        <div className="text-sm text-stargaze-600 dark:text-stargaze-400">
                          Annual Revenue
                        </div>
                      </div>
                    )}
                    {startup.traction.growth && (
                      <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                          {startup.traction.growth.split(" ")[0]}
                        </div>
                        <div className="text-sm text-stargaze-600 dark:text-stargaze-400">
                          Growth Rate
                        </div>
                      </div>
                    )}
                    {startup.traction.partnerships && (
                      <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                          {startup.traction.partnerships.split(" ")[0]}
                        </div>
                        <div className="text-sm text-stargaze-600 dark:text-stargaze-400">
                          Partnerships
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          )}

          {/* Achievements */}
          {startup.achievements && startup.achievements.length > 0 && (
            <AnimatedSection>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Key Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {startup.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-stargaze-700 dark:text-stargaze-300">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          )}

          {/* Roadmap */}
          {startup.roadmap && startup.roadmap.length > 0 && (
            <AnimatedSection>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Future Roadmap
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {startup.roadmap.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Clock className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-semibold text-stargaze-900 dark:text-white">
                              {item.title}
                            </h4>
                            <Badge variant="outline" className="text-xs">
                              {item.timeline}
                            </Badge>
                          </div>
                          <p className="text-stargaze-600 dark:text-stargaze-400">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          )}

          {/* Investor Highlights */}
          {startup.investorHighlights &&
            startup.investorHighlights.length > 0 && (
              <AnimatedSection>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5" />
                      Investment Highlights
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {startup.investorHighlights.map((highlight, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-stargaze-700 dark:text-stargaze-300">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            )}

          {/* CTA Section */}
          <AnimatedSection>
            <Card className="bg-gradient-to-r from-primary/10 to-primary/5">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-stargaze-900 dark:text-white mb-4">
                  Interested in Learning More?
                </h3>
                <p className="text-stargaze-600 dark:text-stargaze-400 mb-6 max-w-2xl mx-auto">
                  Connect with {startup.name} to explore partnership
                  opportunities, learn more about their solution, or discuss
                  potential collaboration.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Visit Website
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    <Users className="h-4 w-4" />
                    Connect with Team
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </main>
    </>
  );
};

export default StartupDetail;
