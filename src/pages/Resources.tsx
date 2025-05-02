
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  FileDown, 
  HelpCircle, 
  Calendar, 
  TrendingUp,
  Search,
  ArrowRight
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";

const Resources = () => {
  const resourceCategories = [
    {
      title: "Documentation",
      description: "Comprehensive documentation on startup formation, compliance, and growth in India",
      icon: <FileDown className="h-10 w-10 text-primary" />,
      link: "/resources/documentation",
      color: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      title: "Guides",
      description: "Step-by-step guides for navigating the Indian startup ecosystem",
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      link: "/resources/guides",
      color: "bg-green-50 dark:bg-green-900/20"
    },
    {
      title: "FAQs",
      description: "Answers to common questions about starting and running a business in India",
      icon: <HelpCircle className="h-10 w-10 text-primary" />,
      link: "/resources/faqs",
      color: "bg-amber-50 dark:bg-amber-900/20"
    },
    {
      title: "Success Stories",
      description: "Case studies of successful Indian startups that have used our platform",
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      link: "/resources/success-stories",
      color: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
      title: "Events",
      description: "Upcoming workshops, webinars, and networking events across India",
      icon: <Calendar className="h-10 w-10 text-primary" />,
      link: "/resources/events",
      color: "bg-rose-50 dark:bg-rose-900/20"
    }
  ];

  const featuredResources = [
    {
      title: "Ultimate GST Guide for Indian Startups",
      description: "Everything you need to know about Goods and Services Tax compliance for startups in India",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21ed6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      tags: ["Finance", "Compliance"]
    },
    {
      title: "Navigating Term Sheets for Indian Founders",
      description: "A comprehensive breakdown of term sheets and what Indian founders should pay attention to",
      image: "https://images.unsplash.com/photo-1606836591695-4d58a73acba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      tags: ["Funding", "Legal"]
    },
    {
      title: "Building an Effective GTM Strategy for the Indian Market",
      description: "Learn how to create go-to-market strategies tailored for India's diverse consumer base",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      tags: ["Marketing", "Strategy"]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Startup Resources | Elevate X"
        description="Access guides, documents, and tools designed to help Indian startups and entrepreneurs succeed."
        keywords="startup resources, entrepreneur tools, business guides, startup events, success stories"
      />
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-stargaze-50 to-transparent dark:from-stargaze-950/50 dark:to-transparent py-16 px-4 sm:px-6 lg:px-8">
          <AnimatedSection threshold={0.1}>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stargaze-900 dark:text-white mb-6">
                Resources for Indian Startups
              </h1>
              <p className="text-xl text-stargaze-600 dark:text-stargaze-300 mb-8">
                Everything you need to build, grow, and scale your startup in the Indian ecosystem
              </p>
              
              <div className="relative max-w-lg mx-auto mb-10">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stargaze-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search for resources, guides, templates..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-stargaze-200 dark:border-stargaze-700 bg-white dark:bg-stargaze-900"
                />
              </div>
              
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                <span className="px-3 py-1 bg-stargaze-100 dark:bg-stargaze-800 rounded-full text-stargaze-800 dark:text-stargaze-300">
                  Popular: 
                </span>
                <span className="px-3 py-1 bg-stargaze-100 dark:bg-stargaze-800 rounded-full text-stargaze-800 dark:text-stargaze-300 hover:bg-primary/10 hover:text-primary cursor-pointer">
                  Fundraising
                </span>
                <span className="px-3 py-1 bg-stargaze-100 dark:bg-stargaze-800 rounded-full text-stargaze-800 dark:text-stargaze-300 hover:bg-primary/10 hover:text-primary cursor-pointer">
                  GST Compliance
                </span>
                <span className="px-3 py-1 bg-stargaze-100 dark:bg-stargaze-800 rounded-full text-stargaze-800 dark:text-stargaze-300 hover:bg-primary/10 hover:text-primary cursor-pointer">
                  Marketing
                </span>
                <span className="px-3 py-1 bg-stargaze-100 dark:bg-stargaze-800 rounded-full text-stargaze-800 dark:text-stargaze-300 hover:bg-primary/10 hover:text-primary cursor-pointer">
                  Team Building
                </span>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Resource Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection threshold={0.1} className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-stargaze-900 dark:text-white text-center mb-12">
                Explore Resources
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resourceCategories.map((category, index) => (
                  <AnimatedSection key={category.title} threshold={0.1} delay={index * 100}>
                    <Link to={category.link} className="block">
                      <div className="flex flex-col h-full bg-white dark:bg-stargaze-900 rounded-xl shadow-sm border border-stargaze-100 dark:border-stargaze-800 overflow-hidden transition-all hover:shadow-md hover:border-primary/30">
                        <div className={`p-6 ${category.color}`}>
                          <div className="w-16 h-16 rounded-lg bg-white dark:bg-stargaze-900 shadow-sm flex items-center justify-center">
                            {category.icon}
                          </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="text-xl font-semibold text-stargaze-900 dark:text-white mb-2">
                            {category.title}
                          </h3>
                          <p className="text-stargaze-600 dark:text-stargaze-400 mb-5 flex-1">
                            {category.description}
                          </p>
                          <Button variant="ghost" className="justify-start pl-0 text-primary">
                            Explore <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-stargaze-50 dark:bg-stargaze-900/30">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection threshold={0.1} className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-stargaze-900 dark:text-white text-center mb-4">
                Featured Resources
              </h2>
              <p className="text-center text-stargaze-600 dark:text-stargaze-400 max-w-3xl mx-auto mb-12">
                Handpicked resources curated by our expert mentors specifically for the Indian startup ecosystem
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredResources.map((resource, index) => (
                  <AnimatedSection key={index} threshold={0.1} delay={index * 100}>
                    <Card className="overflow-hidden">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={resource.image} 
                          alt={resource.title}
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {resource.tags.map(tag => (
                            <span 
                              key={tag} 
                              className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-lg font-semibold text-stargaze-900 dark:text-white mb-2">
                          {resource.title}
                        </h3>
                        <p className="text-sm text-stargaze-600 dark:text-stargaze-400 mb-4">
                          {resource.description}
                        </p>
                        <Button variant="outline" size="sm" className="w-full">
                          Read More
                        </Button>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <AnimatedSection threshold={0.1}>
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/5 rounded-xl p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-stargaze-900 dark:text-white mb-4">
                Need personalized guidance?
              </h2>
              <p className="text-stargaze-600 dark:text-stargaze-300 mb-8 max-w-2xl mx-auto">
                Connect with experienced mentors who understand the Indian market and can provide tailored advice for your specific startup challenges.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/mentors">
                  <Button size="lg">
                    Find a Mentor
                  </Button>
                </Link>
                <Link to="/mentorship-matching">
                  <Button size="lg" variant="outline">
                    Get Matched
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
