
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Search, Clock, User, ArrowRight, Calendar } from "lucide-react";

const blogPosts = [
  {
    id: "1",
    title: "10 Essential Tips for Finding the Right Mentor for Your Startup",
    excerpt: "Finding the right mentor can make all the difference in your startup journey. Learn how to identify and connect with mentors who can truly help your business grow.",
    image: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    author: "Sarah Johnson",
    date: "June 15, 2023",
    readTime: "8 min read",
    category: "Mentorship"
  },
  {
    id: "2",
    title: "How to Create a Compelling Pitch Deck That Attracts Investors",
    excerpt: "Your pitch deck is often your first impression with potential investors. Learn the key elements that make a pitch deck stand out and attract funding.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    author: "Michael Chen",
    date: "May 22, 2023",
    readTime: "10 min read",
    category: "Fundraising"
  },
  {
    id: "3",
    title: "Building a Strong Company Culture in a Remote-First World",
    excerpt: "Remote work presents unique challenges for building company culture. Discover strategies for fostering connection and engagement with distributed teams.",
    image: "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    author: "Priya Patel",
    date: "April 10, 2023",
    readTime: "7 min read",
    category: "Culture"
  },
  {
    id: "4",
    title: "From Idea to MVP: A Practical Guide for First-Time Founders",
    excerpt: "Turning your idea into a minimum viable product is a critical first step. Learn the practical steps to validate your concept and build your first MVP.",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    author: "David Rodriguez",
    date: "March 5, 2023",
    readTime: "12 min read",
    category: "Product Development"
  },
  {
    id: "5",
    title: "Navigating Startup Legal Challenges: What Every Founder Should Know",
    excerpt: "Legal issues can sink a promising startup. Understand the key legal considerations for your business to avoid common pitfalls.",
    image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    author: "Jennifer Lee",
    date: "February 18, 2023",
    readTime: "9 min read",
    category: "Legal"
  }
];

const categories = [
  "All",
  "Mentorship",
  "Fundraising",
  "Product Development",
  "Marketing",
  "Legal",
  "Culture",
  "Growth",
  "Strategy"
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-12 max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-stargaze-900 dark:text-white mb-6">
              Startup Insights Blog
            </h1>
            <p className="text-xl text-stargaze-600 dark:text-stargaze-300">
              Expert advice, founder stories, and resources to help you build a successful startup.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={100} className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stargaze-400 h-4 w-4" />
                <Input 
                  placeholder="Search articles..." 
                  className="pl-10"
                />
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center md:justify-end">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={category === "All" ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary/10"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </AnimatedSection>
          
          {/* Featured Article */}
          <AnimatedSection animation="fade-up" delay={150} className="mb-12">
            <div className="bg-white dark:bg-stargaze-900 rounded-xl shadow-subtle overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-10 flex flex-col justify-between">
                  <div>
                    <Badge>{blogPosts[0].category}</Badge>
                    <h2 className="text-2xl md:text-3xl font-bold text-stargaze-900 dark:text-white mt-4 mb-3">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-stargaze-600 dark:text-stargaze-300 mb-4">
                      {blogPosts[0].excerpt}
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center text-sm text-stargaze-500 dark:text-stargaze-400 mb-4">
                      <User className="h-4 w-4 mr-2" />
                      <span>{blogPosts[0].author}</span>
                      <span className="mx-2">•</span>
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{blogPosts[0].date}</span>
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                    
                    <Link to={`/blog/${blogPosts[0].id}`}>
                      <Button className="gap-2">
                        Read Article <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Article Grid */}
          <AnimatedSection animation="fade-up" delay={200} className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <Link 
                  key={post.id} 
                  to={`/blog/${post.id}`}
                  className="bg-white dark:bg-stargaze-900 rounded-xl shadow-subtle overflow-hidden hover:-translate-y-1 transition-all border border-stargaze-100 dark:border-stargaze-800"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <Badge>{post.category}</Badge>
                    <h3 className="text-xl font-bold text-stargaze-900 dark:text-white mt-3 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-stargaze-600 dark:text-stargaze-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-stargaze-500 dark:text-stargaze-400">
                      <User className="h-3 w-3 mr-1" />
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={300} className="text-center">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </AnimatedSection>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
