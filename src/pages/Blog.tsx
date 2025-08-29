import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Search, Clock, User, ArrowRight, Calendar } from "lucide-react";
import {
  blogPosts,
  blogCategories,
  getBlogPostsByCategory,
} from "@/data/blogs";
import { useState } from "react";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter posts based on category and search query
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch && post.status === "published";
  });

  const featuredPost = blogPosts.find(
    (post) => post.featured && post.status === "published"
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <AnimatedSection className="py-12 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-stargaze-900 dark:text-white mb-6">
                Startup Insights & Stories
              </h1>
              <p className="text-xl text-stargaze-600 dark:text-stargaze-300 max-w-3xl mx-auto">
                Discover the latest trends, success stories, and actionable
                insights from India's thriving startup ecosystem.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 max-w-4xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-stargaze-400" />
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto">
                {blogCategories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="whitespace-nowrap"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Featured Article */}
        {featuredPost && (
          <AnimatedSection className="py-8 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 mb-12">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="default">Featured</Badge>
                  <Badge variant="outline">{featuredPost.category}</Badge>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-stargaze-900 dark:text-white mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-stargaze-600 dark:text-stargaze-300 mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <img
                          src={featuredPost.author.avatar}
                          alt={featuredPost.author.name}
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="text-sm text-stargaze-600 dark:text-stargaze-400">
                          {featuredPost.author.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-stargaze-500">
                        <Calendar className="h-4 w-4" />
                        {new Date(
                          featuredPost.publishedAt
                        ).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-stargaze-500">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime} min read
                      </div>
                    </div>
                    <Link to={`/blog/${featuredPost.id}`}>
                      <Button className="gap-2">
                        Read Article
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <div>
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Blog Grid */}
        <AnimatedSection className="py-8 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-stargaze-900 dark:text-white">
                Latest Articles
              </h2>
              <p className="text-stargaze-600 dark:text-stargaze-400">
                {filteredPosts.length} articles found
              </p>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-stargaze-600 dark:text-stargaze-400 text-lg">
                  No articles found matching your criteria.
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white dark:bg-stargaze-900 rounded-xl overflow-hidden shadow-sm border border-stargaze-100 dark:border-stargaze-800 hover:shadow-md transition-shadow"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                        {post.featured && (
                          <Badge variant="default" className="text-xs">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-stargaze-600 dark:text-stargaze-300 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-6 h-6 rounded-full"
                          />
                          <span className="text-sm text-stargaze-600 dark:text-stargaze-400">
                            {post.author.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-stargaze-500">
                          <Clock className="h-3 w-3" />
                          {post.readTime}m
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-stargaze-100 dark:border-stargaze-800">
                        <Link to={`/blog/${post.id}`}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="w-full gap-2"
                          >
                            Read More
                            <ArrowRight className="h-3 w-3" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </AnimatedSection>

        {/* Newsletter Subscription */}
        <AnimatedSection className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-primary/10 dark:bg-primary/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-stargaze-900 dark:text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-stargaze-600 dark:text-stargaze-300 mb-6">
                Get the latest startup insights and stories delivered to your
                inbox weekly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  placeholder="Enter your email"
                  type="email"
                  className="flex-1"
                />
                <Button className="gap-2">
                  Subscribe
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-stargaze-500 mt-3">
                No spam, unsubscribe at any time.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
