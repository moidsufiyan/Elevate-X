import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  MapPin,
  Star,
  Users,
  Calendar,
  Globe,
  Linkedin,
  Twitter,
  GraduationCap,
  Award,
  MessageSquare,
  ArrowLeft,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import { getMentorById } from "@/data/mentors";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { SEO } from "@/components/common/SEO";

const MentorDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const mentor = id ? getMentorById(id) : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!mentor) {
    return (
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl font-bold text-stargaze-900 dark:text-white mb-4">
            Mentor Not Found
          </h1>
          <p className="text-stargaze-600 dark:text-stargaze-400 mb-8">
            The mentor you're looking for doesn't exist or has been removed.
          </p>
          <Button onClick={() => navigate("/mentors")} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Mentors
          </Button>
        </div>
      </main>
    );
  }

  return (
    <>
      <SEO
        title={`${mentor.name} - Expert Mentor | ElevateX`}
        description={`Connect with ${mentor.name}, ${mentor.role} at ${
          mentor.company
        }. Expert in ${mentor.expertise.join(", ")}. ${mentor.bio}`}
      />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <AnimatedSection className="py-12 px-4 sm:px-6 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5">
          <div className="max-w-7xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => navigate("/mentors")}
              className="mb-6 gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Mentors
            </Button>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Profile Card */}
              <div className="md:col-span-1">
                <Card className="sticky top-24">
                  <CardContent className="p-6 text-center">
                    <Avatar className="w-32 h-32 mx-auto mb-4">
                      <AvatarImage src={mentor.image} alt={mentor.name} />
                      <AvatarFallback className="text-2xl">
                        {mentor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <h1 className="text-2xl font-bold text-stargaze-900 dark:text-white mb-2">
                      {mentor.name}
                    </h1>

                    <p className="text-lg text-primary font-medium mb-2">
                      {mentor.role}
                    </p>

                    <p className="text-stargaze-600 dark:text-stargaze-400 mb-4">
                      {mentor.company}
                    </p>

                    <div className="flex items-center justify-center gap-2 mb-4">
                      {mentor.badges?.map((badge, index) => (
                        <Badge key={index} variant={badge.variant || "default"}>
                          {badge.label}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-center gap-4 mb-6 text-sm text-stargaze-600 dark:text-stargaze-400">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{mentor.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{mentor.sessions} sessions</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{mentor.location}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button className="w-full gap-2" size="lg">
                        <MessageSquare className="h-4 w-4" />
                        Request Guidance
                      </Button>

                      <div className="flex gap-2">
                        {mentor.socialLinks?.linkedin && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 gap-1"
                          >
                            <Linkedin className="h-4 w-4" />
                            LinkedIn
                          </Button>
                        )}
                        {mentor.socialLinks?.twitter && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 gap-1"
                          >
                            <Twitter className="h-4 w-4" />
                            Twitter
                          </Button>
                        )}
                        {mentor.socialLinks?.website && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 gap-1"
                          >
                            <Globe className="h-4 w-4" />
                            Website
                          </Button>
                        )}
                      </div>
                    </div>

                    <Separator className="my-6" />

                    <div className="text-left space-y-4">
                      <div>
                        <h3 className="font-semibold text-stargaze-900 dark:text-white mb-2">
                          Availability
                        </h3>
                        <p className="text-sm text-stargaze-600 dark:text-stargaze-400">
                          {mentor.availableTimes}
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-stargaze-900 dark:text-white mb-2">
                          Languages
                        </h3>
                        <div className="flex flex-wrap gap-1">
                          {mentor.languages?.map((language) => (
                            <Badge
                              key={language}
                              variant="outline"
                              className="text-xs"
                            >
                              {language}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-stargaze-900 dark:text-white mb-2">
                          Experience
                        </h3>
                        <p className="text-sm text-stargaze-600 dark:text-stargaze-400">
                          {mentor.experience}+ years
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content */}
              <div className="md:col-span-2 space-y-8">
                {/* About Section */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      About {mentor.name.split(" ")[0]}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-stargaze-700 dark:text-stargaze-300 leading-relaxed">
                      {mentor.bio}
                    </p>
                  </CardContent>
                </Card>

                {/* Expertise & Specialties */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5" />
                      Expertise & Specialties
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-stargaze-900 dark:text-white mb-3">
                          Core Expertise
                        </h4>
                        <div className="space-y-2">
                          {mentor.expertise.map((skill) => (
                            <div
                              key={skill}
                              className="flex items-center gap-2"
                            >
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-stargaze-700 dark:text-stargaze-300">
                                {skill}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {mentor.specialties && (
                        <div>
                          <h4 className="font-semibold text-stargaze-900 dark:text-white mb-3">
                            Specialized Areas
                          </h4>
                          <div className="space-y-2">
                            {mentor.specialties.map((specialty) => (
                              <div
                                key={specialty}
                                className="flex items-center gap-2"
                              >
                                <CheckCircle className="h-4 w-4 text-blue-500" />
                                <span className="text-stargaze-700 dark:text-stargaze-300">
                                  {specialty}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Success Stories */}
                {mentor.successStories && mentor.successStories.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5" />
                        Success Stories
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {mentor.successStories.map((story, index) => (
                          <div
                            key={index}
                            className="border-l-4 border-primary pl-4"
                          >
                            <h4 className="font-semibold text-stargaze-900 dark:text-white mb-2">
                              {story.startup}
                            </h4>
                            <p className="text-stargaze-700 dark:text-stargaze-300">
                              {story.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Achievements */}
                {mentor.achievements && mentor.achievements.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Award className="h-5 w-5" />
                        Key Achievements
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3">
                        {mentor.achievements.map((achievement, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-stargaze-700 dark:text-stargaze-300">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Education */}
                {mentor.education && mentor.education.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <GraduationCap className="h-5 w-5" />
                        Education
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {mentor.education.map((edu, index) => (
                          <div key={index} className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <GraduationCap className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-stargaze-900 dark:text-white">
                                {edu.degree}
                              </h4>
                              <p className="text-stargaze-600 dark:text-stargaze-400">
                                {edu.school}
                              </p>
                              <p className="text-sm text-stargaze-500">
                                {edu.year}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Industries */}
                {mentor.industries && mentor.industries.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Industry Experience</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {mentor.industries.map((industry) => (
                          <Badge key={industry} variant="secondary">
                            {industry}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* CTA Section */}
                <Card className="bg-gradient-to-r from-primary/10 to-primary/5">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-stargaze-900 dark:text-white mb-4">
                      Ready to Get Started?
                    </h3>
                    <p className="text-stargaze-600 dark:text-stargaze-400 mb-6 max-w-2xl mx-auto">
                      Connect with {mentor.name.split(" ")[0]} to accelerate
                      your startup journey. Get personalized guidance from an
                      industry expert who has helped multiple startups succeed.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button size="lg" className="gap-2">
                        <MessageSquare className="h-4 w-4" />
                        Schedule a Session
                      </Button>
                      <Button size="lg" variant="outline" className="gap-2">
                        <Calendar className="h-4 w-4" />
                        Check Availability
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
    </>
  );
};

export default MentorDetail;
