import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ArrowLeft,
  Download,
  Clock,
  User,
  Calendar,
  Tag,
  ExternalLink,
  BookOpen,
  CheckCircle,
  Link as LinkIcon,
  FileText,
  Target,
} from "lucide-react";
import { getResourceById } from "@/data/resources";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SEO } from "@/components/SEO";

const ResourceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const resource = id ? getResourceById(id) : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleDownload = () => {
    // Simulate download action
    alert("Download started! (Demo only - no actual file download)");
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
      case "Advanced":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "pdf":
      case "template":
        return <FileText className="h-4 w-4" />;
      case "article":
      case "guide":
        return <BookOpen className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  if (!resource) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-3xl font-bold text-stargaze-900 dark:text-white mb-4">
              Resource Not Found
            </h1>
            <p className="text-stargaze-600 dark:text-stargaze-400 mb-8">
              The resource you're looking for doesn't exist or has been removed.
            </p>
            <Button onClick={() => navigate("/resources")} className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Resources
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title={`${resource.title} | ElevateX Resources`}
        description={resource.description}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <AnimatedSection className="py-12 px-4 sm:px-6 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5">
          <div className="max-w-4xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => navigate("/resources")}
              className="mb-6 gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Resources
            </Button>

            <div className="flex items-start gap-6 mb-8">
              <div className="w-20 h-20 bg-white dark:bg-stargaze-800 rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                {getTypeIcon(resource.type)}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="outline" className="gap-1">
                    {getTypeIcon(resource.type)}
                    {resource.type}
                  </Badge>
                  <Badge className={getDifficultyColor(resource.difficulty)}>
                    {resource.difficulty}
                  </Badge>
                  <Badge variant="secondary">{resource.category}</Badge>
                </div>

                <h1 className="text-3xl font-bold text-stargaze-900 dark:text-white mb-4">
                  {resource.title}
                </h1>

                <p className="text-xl text-stargaze-600 dark:text-stargaze-400 mb-6">
                  {resource.description}
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-stargaze-600 dark:text-stargaze-400 mb-6">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {resource.author.name}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(resource.publishedAt).toLocaleDateString()}
                  </div>
                  {resource.estimatedReadTime && (
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {resource.estimatedReadTime} min read
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Download className="h-4 w-4" />
                    {resource.downloadCount.toLocaleString()} downloads
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {resource.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs gap-1"
                    >
                      <Tag className="h-3 w-3" />
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button onClick={handleDownload} size="lg" className="gap-2">
                  <Download className="h-4 w-4" />
                  Download Resource
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              {resource.fullContent && (
                <AnimatedSection>
                  <Card>
                    <CardHeader>
                      <CardTitle>Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-stargaze-700 dark:text-stargaze-300 leading-relaxed text-lg">
                        {resource.fullContent}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              )}

              {/* Detailed Sections */}
              {resource.sections && resource.sections.length > 0 && (
                <AnimatedSection>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5" />
                        Detailed Guide
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-8">
                      {resource.sections.map((section, index) => (
                        <div key={index}>
                          <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white mb-4">
                            {index + 1}. {section.title}
                          </h3>
                          <p className="text-stargaze-700 dark:text-stargaze-300 leading-relaxed">
                            {section.content}
                          </p>
                          {index < resource.sections!.length - 1 && (
                            <Separator className="mt-6" />
                          )}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </AnimatedSection>
              )}

              {/* Key Takeaways */}
              {resource.keyTakeaways && resource.keyTakeaways.length > 0 && (
                <AnimatedSection>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="h-5 w-5" />
                        Key Takeaways
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {resource.keyTakeaways.map((takeaway, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-stargaze-700 dark:text-stargaze-300">
                              {takeaway}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              )}

              {/* Related Links */}
              {resource.relatedLinks && resource.relatedLinks.length > 0 && (
                <AnimatedSection>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <LinkIcon className="h-5 w-5" />
                        Related Links & Resources
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {resource.relatedLinks.map((link, index) => (
                          <div
                            key={index}
                            className="p-4 bg-stargaze-50 dark:bg-stargaze-800 rounded-lg"
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <h4 className="font-semibold text-stargaze-900 dark:text-white mb-2">
                                  {link.title}
                                </h4>
                                <p className="text-sm text-stargaze-600 dark:text-stargaze-400">
                                  {link.description}
                                </p>
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                className="gap-1 flex-shrink-0"
                              >
                                <ExternalLink className="h-3 w-3" />
                                Visit
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Author Info */}
                <AnimatedSection>
                  <Card>
                    <CardHeader>
                      <CardTitle>About the Author</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-start gap-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage
                            src={resource.author.avatar}
                            alt={resource.author.name}
                          />
                          <AvatarFallback>
                            {resource.author.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold text-stargaze-900 dark:text-white mb-1">
                            {resource.author.name}
                          </h4>
                          <p className="text-sm text-stargaze-600 dark:text-stargaze-400">
                            {resource.author.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                {/* Resource Stats */}
                <AnimatedSection>
                  <Card>
                    <CardHeader>
                      <CardTitle>Resource Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-stargaze-600 dark:text-stargaze-400">
                          Type
                        </span>
                        <span className="font-medium capitalize">
                          {resource.type}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stargaze-600 dark:text-stargaze-400">
                          Difficulty
                        </span>
                        <Badge
                          className={getDifficultyColor(resource.difficulty)}
                        >
                          {resource.difficulty}
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stargaze-600 dark:text-stargaze-400">
                          Category
                        </span>
                        <span className="font-medium">{resource.category}</span>
                      </div>
                      {resource.estimatedReadTime && (
                        <div className="flex justify-between">
                          <span className="text-stargaze-600 dark:text-stargaze-400">
                            Read Time
                          </span>
                          <span className="font-medium">
                            {resource.estimatedReadTime} minutes
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-stargaze-600 dark:text-stargaze-400">
                          Downloads
                        </span>
                        <span className="font-medium">
                          {resource.downloadCount.toLocaleString()}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                {/* Download CTA */}
                <AnimatedSection>
                  <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
                    <CardContent className="p-6 text-center">
                      <h3 className="font-semibold text-stargaze-900 dark:text-white mb-2">
                        Get This Resource
                      </h3>
                      <p className="text-sm text-stargaze-600 dark:text-stargaze-400 mb-4">
                        Download the complete resource to access all templates,
                        examples, and detailed guides.
                      </p>
                      <Button onClick={handleDownload} className="w-full gap-2">
                        <Download className="h-4 w-4" />
                        Download Now
                      </Button>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResourceDetail;
