import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { resources } from "@/data/resources";
import { NotFound } from "./NotFound";
import {
  ArrowLeft,
  Download,
  Calendar,
  User,
  Clock,
  Star,
  FileText,
  Video,
  Book,
  FileDown,
  Eye,
} from "lucide-react";

const ResourceDetail = () => {
  const { id } = useParams<{ id: string }>();

  // Find resource by ID from dummy data
  const resource = resources.find((r) => r.id === id);

  // Show not found if resource doesn't exist
  if (!resource) {
    return <NotFound />;
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="h-5 w-5" />;
      case "pdf":
      case "template":
        return <FileText className="h-5 w-5" />;
      case "guide":
      case "article":
        return <Book className="h-5 w-5" />;
      default:
        return <FileDown className="h-5 w-5" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "Advanced":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const handleDownload = () => {
    // Simulate download action
    alert("Download started! (Demo only - no actual file will download)");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <AnimatedSection>
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/resources">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Resources
              </Link>
            </Button>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                {/* Resource Image */}
                {resource.image && (
                  <div className="rounded-xl overflow-hidden mb-6">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                )}

                {/* Title and Basic Info */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge
                      variant="secondary"
                      className="flex items-center gap-1"
                    >
                      {getTypeIcon(resource.type)}
                      {resource.type.charAt(0).toUpperCase() +
                        resource.type.slice(1)}
                    </Badge>
                    <Badge className={getDifficultyColor(resource.difficulty)}>
                      {resource.difficulty}
                    </Badge>
                    <Badge variant="outline">{resource.category}</Badge>
                  </div>

                  <h1 className="text-3xl font-bold mb-4">{resource.title}</h1>

                  <div className="flex items-center gap-6 text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{resource.author.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(resource.publishedAt).toLocaleDateString()}
                      </span>
                    </div>
                    {resource.estimatedReadTime && (
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{resource.estimatedReadTime} min read</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      <span>
                        {resource.downloadCount.toLocaleString()} downloads
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="prose prose-gray dark:prose-invert max-w-none mb-8">
                  <p className="text-lg">{resource.description}</p>
                </div>

                {/* Tags */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {resource.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AnimatedSection delay={100}>
                <div className="sticky top-24">
                  {/* Download Card */}
                  <div className="bg-card text-card-foreground rounded-xl p-6 border mb-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Get This Resource
                    </h3>
                    <Button
                      onClick={handleDownload}
                      className="w-full mb-4"
                      size="lg"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Resource
                    </Button>
                    <p className="text-sm text-muted-foreground text-center">
                      Free download • No registration required
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="bg-card text-card-foreground rounded-xl p-6 border mb-6">
                    <h3 className="text-lg font-semibold mb-4">
                      About the Author
                    </h3>
                    <div className="flex items-start gap-3">
                      <Avatar className="h-12 w-12">
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
                        <h4 className="font-semibold">
                          {resource.author.name}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          {resource.author.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Resource Stats */}
                  <div className="bg-card text-card-foreground rounded-xl p-6 border">
                    <h3 className="text-lg font-semibold mb-4">
                      Resource Stats
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Downloads</span>
                        <span className="font-medium">
                          {resource.downloadCount.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Category</span>
                        <span className="font-medium">{resource.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Type</span>
                        <span className="font-medium">{resource.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Level</span>
                        <span className="font-medium">
                          {resource.difficulty}
                        </span>
                      </div>
                      {resource.estimatedReadTime && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Read Time
                          </span>
                          <span className="font-medium">
                            {resource.estimatedReadTime} min
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Related Resources */}
          <AnimatedSection delay={200} className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources
                .filter(
                  (r) =>
                    r.id !== resource.id && r.category === resource.category
                )
                .slice(0, 3)
                .map((relatedResource) => (
                  <Link
                    key={relatedResource.id}
                    to={`/resource/${relatedResource.id}`}
                    className="group"
                  >
                    <div className="bg-card text-card-foreground rounded-xl border overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                      {relatedResource.image && (
                        <div className="h-40 overflow-hidden">
                          <img
                            src={relatedResource.image}
                            alt={relatedResource.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      )}
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {relatedResource.type}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {relatedResource.difficulty}
                          </Badge>
                        </div>
                        <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                          {relatedResource.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {relatedResource.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{relatedResource.author.name}</span>
                          <span>{relatedResource.downloadCount} downloads</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ResourceDetail;
