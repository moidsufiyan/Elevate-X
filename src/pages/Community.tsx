import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  Users,
  MessageSquare,
  ThumbsUp,
  Calendar,
  Filter,
  ArrowUpRight,
  MessageCircle,
  TrendingUp,
  Clock,
  Tag,
  Plus,
  ArrowDown,
  ArrowUp,
} from "lucide-react";
import {
  discussions,
  communityCategories,
  getTrendingDiscussions,
  getPinnedDiscussions,
} from "@/data/communities";
import { Link } from "react-router-dom";

const Community = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("recent");

  // Filter discussions based on search and category
  const filteredDiscussions = discussions.filter((discussion) => {
    const matchesSearch =
      searchQuery === "" ||
      discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      discussion.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      discussion.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "all" || discussion.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Sort discussions
  const sortedDiscussions = [...filteredDiscussions].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.likes - a.likes;
      case "replies":
        return b.replies - a.replies;
      case "views":
        return b.views - a.views;
      default: // recent
        return (
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
        );
    }
  });

  const trendingDiscussions = getTrendingDiscussions();
  const pinnedDiscussions = getPinnedDiscussions();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <AnimatedSection className="py-12 px-4 sm:px-6 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-stargaze-900 dark:text-white mb-6">
              Startup Community
            </h1>
            <p className="text-xl text-stargaze-600 dark:text-stargaze-300 max-w-3xl mx-auto mb-8">
              Connect with fellow entrepreneurs, share experiences, and get
              answers to your startup questions from India's vibrant founder
              community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <Plus className="h-4 w-4" />
                Start a Discussion
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Users className="h-4 w-4" />
                Join Community
              </Button>
            </div>
          </div>
        </AnimatedSection>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AnimatedSection>
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Community Stats
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-stargaze-600 dark:text-stargaze-400">
                        Total Discussions
                      </span>
                      <span className="font-semibold">
                        {discussions.length}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stargaze-600 dark:text-stargaze-400">
                        Active Members
                      </span>
                      <span className="font-semibold">2,340</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stargaze-600 dark:text-stargaze-400">
                        This Week
                      </span>
                      <span className="font-semibold">+156</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Categories</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button
                      variant={selectedCategory === "all" ? "default" : "ghost"}
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => setSelectedCategory("all")}
                    >
                      All Categories
                    </Button>
                    {communityCategories.map((category) => (
                      <Button
                        key={category.id}
                        variant={
                          selectedCategory === category.name
                            ? "default"
                            : "ghost"
                        }
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => setSelectedCategory(category.name)}
                      >
                        <span className="mr-2">{category.icon}</span>
                        {category.name}
                        <Badge variant="secondary" className="ml-auto">
                          {category.discussionCount}
                        </Badge>
                      </Button>
                    ))}
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                {/* Search and Filter Bar */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-stargaze-400" />
                    <Input
                      placeholder="Search discussions..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant={sortBy === "recent" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSortBy("recent")}
                    >
                      Recent
                    </Button>
                    <Button
                      variant={sortBy === "popular" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSortBy("popular")}
                    >
                      Popular
                    </Button>
                    <Button
                      variant={sortBy === "replies" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSortBy("replies")}
                    >
                      Most Replies
                    </Button>
                  </div>
                </div>

                <Tabs defaultValue="discussions" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="discussions">
                      All Discussions
                    </TabsTrigger>
                    <TabsTrigger value="trending">Trending</TabsTrigger>
                    <TabsTrigger value="pinned">Pinned</TabsTrigger>
                  </TabsList>

                  <TabsContent value="discussions" className="space-y-4">
                    {sortedDiscussions.length === 0 ? (
                      <div className="text-center py-12">
                        <MessageCircle className="h-12 w-12 text-stargaze-400 mx-auto mb-4" />
                        <p className="text-stargaze-600 dark:text-stargaze-400 text-lg">
                          No discussions found matching your criteria.
                        </p>
                      </div>
                    ) : (
                      sortedDiscussions.map((discussion) => (
                        <Card
                          key={discussion.id}
                          className="hover:shadow-md transition-shadow"
                        >
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  {discussion.isPinned && (
                                    <Badge
                                      variant="default"
                                      className="text-xs"
                                    >
                                      Pinned
                                    </Badge>
                                  )}
                                  {discussion.isSolved && (
                                    <Badge
                                      variant="secondary"
                                      className="text-xs"
                                    >
                                      Solved
                                    </Badge>
                                  )}
                                  <Badge variant="outline" className="text-xs">
                                    {discussion.category}
                                  </Badge>
                                </div>
                                <CardTitle className="text-lg hover:text-primary cursor-pointer">
                                  <Link to={`/discussion/${discussion.id}`}>
                                    {discussion.title}
                                  </Link>
                                </CardTitle>
                                <CardDescription className="mt-2 line-clamp-2">
                                  {discussion.content}
                                </CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-center gap-4 text-sm text-stargaze-600 dark:text-stargaze-400">
                              <div className="flex items-center gap-1">
                                <Avatar className="h-6 w-6">
                                  <AvatarImage src={discussion.author.avatar} />
                                  <AvatarFallback>
                                    {discussion.author.name
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <span>{discussion.author.name}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {new Date(
                                  discussion.createdAt
                                ).toLocaleDateString()}
                              </div>
                              <div className="flex items-center gap-1">
                                <MessageSquare className="h-3 w-3" />
                                {discussion.replies} replies
                              </div>
                              <div className="flex items-center gap-1">
                                <ThumbsUp className="h-3 w-3" />
                                {discussion.likes}
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="h-3 w-3" />
                                {discussion.views} views
                              </div>
                            </div>
                            {discussion.tags.length > 0 && (
                              <div className="flex gap-1 mt-3">
                                {discussion.tags.slice(0, 3).map((tag) => (
                                  <Badge
                                    key={tag}
                                    variant="secondary"
                                    className="text-xs"
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                                {discussion.tags.length > 3 && (
                                  <Badge
                                    variant="secondary"
                                    className="text-xs"
                                  >
                                    +{discussion.tags.length - 3} more
                                  </Badge>
                                )}
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))
                    )}
                  </TabsContent>

                  <TabsContent value="trending" className="space-y-4">
                    {trendingDiscussions.map((discussion) => (
                      <Card
                        key={discussion.id}
                        className="hover:shadow-md transition-shadow"
                      >
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="default" className="text-xs">
                              Trending
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {discussion.category}
                            </Badge>
                          </div>
                          <CardTitle className="text-lg hover:text-primary cursor-pointer">
                            <Link to={`/discussion/${discussion.id}`}>
                              {discussion.title}
                            </Link>
                          </CardTitle>
                          <CardDescription className="line-clamp-2">
                            {discussion.content}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center gap-4 text-sm text-stargaze-600 dark:text-stargaze-400">
                            <div className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              {discussion.views} views
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageSquare className="h-3 w-3" />
                              {discussion.replies} replies
                            </div>
                            <div className="flex items-center gap-1">
                              <ThumbsUp className="h-3 w-3" />
                              {discussion.likes} likes
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>

                  <TabsContent value="pinned" className="space-y-4">
                    {pinnedDiscussions.map((discussion) => (
                      <Card
                        key={discussion.id}
                        className="hover:shadow-md transition-shadow border-primary/20"
                      >
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="default" className="text-xs">
                              Pinned
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {discussion.category}
                            </Badge>
                          </div>
                          <CardTitle className="text-lg hover:text-primary cursor-pointer">
                            <Link to={`/discussion/${discussion.id}`}>
                              {discussion.title}
                            </Link>
                          </CardTitle>
                          <CardDescription className="line-clamp-2">
                            {discussion.content}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center gap-4 text-sm text-stargaze-600 dark:text-stargaze-400">
                            <div className="flex items-center gap-1">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={discussion.author.avatar} />
                                <AvatarFallback>
                                  {discussion.author.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <span>{discussion.author.name}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageSquare className="h-3 w-3" />
                              {discussion.replies} replies
                            </div>
                            <div className="flex items-center gap-1">
                              <ThumbsUp className="h-3 w-3" />
                              {discussion.likes} likes
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>
                </Tabs>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
