
import { PageTemplate } from "@/components/ui/page-template";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const Guides = () => {
  const guideCategories = [
    {
      title: "Funding & Finance",
      guides: [
        {
          title: "Navigating Angel Investment in India",
          description: "A complete guide to securing angel investment for your Indian startup",
          readTime: "15 min read",
          image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        },
        {
          title: "Government Schemes for Indian Startups",
          description: "Explore various funding schemes offered by the Indian government",
          readTime: "12 min read",
          image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        }
      ]
    },
    {
      title: "Growth & Scaling",
      guides: [
        {
          title: "Expanding Your Startup Across Indian Metros",
          description: "Strategies for growth in Delhi, Mumbai, Bangalore, and beyond",
          readTime: "18 min read",
          image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        },
        {
          title: "Rural Market Penetration in India",
          description: "How to adapt your products for India's massive rural market",
          readTime: "14 min read",
          image: "https://images.unsplash.com/photo-1513086670993-297792bacf69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        }
      ]
    },
    {
      title: "Legal & Compliance",
      guides: [
        {
          title: "Navigating Indian Intellectual Property Rights",
          description: "Protecting your innovations in the Indian legal framework",
          readTime: "20 min read",
          image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        },
        {
          title: "GST Compliance for Indian Startups",
          description: "Simplifying Goods and Services Tax requirements for your business",
          readTime: "16 min read",
          image: "https://images.unsplash.com/photo-1554224154-26032ffc0910?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        }
      ]
    }
  ];

  return (
    <PageTemplate 
      title="Startup Guides | Elevate X"
      description="Access practical guides on funding, compliance, growth, and more for Indian startups."
      keywords="startup guides, Indian startups, funding guides, compliance guides, growth strategies"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection threshold={0.1} className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-stargaze-900 dark:text-white mb-4">
            Startup Guides
          </h1>
          <p className="text-xl text-stargaze-600 dark:text-stargaze-300 max-w-3xl">
            Practical, actionable guides to help Indian startups at every stage of growth. From funding to scaling, our experts have curated knowledge specifically for the Indian market.
          </p>
        </AnimatedSection>
          
        {guideCategories.map((category, index) => (
          <AnimatedSection key={index} threshold={0.1} delay={100 * index} className="mb-16">
            <h2 className="text-2xl font-bold text-stargaze-900 dark:text-white mb-2">
              {category.title}
            </h2>
            <Separator className="mb-6" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.guides.map((guide, idx) => (
                <Card key={idx} className="overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={guide.image} 
                      alt={guide.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-stargaze-500 dark:text-stargaze-400 mb-2">
                      <BookOpen className="mr-2 h-4 w-4" />
                      <span>{guide.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
                    <p className="text-stargaze-600 dark:text-stargaze-300 mb-4">
                      {guide.description}
                    </p>
                    <Button variant="outline" className="w-full justify-between">
                      Read Guide
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </PageTemplate>
  );
};

export default Guides;
