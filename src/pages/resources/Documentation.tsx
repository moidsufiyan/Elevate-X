
import { PageTemplate } from "@/components/ui/page-template";
import { Button } from "@/components/ui/button";
import { FileDown, BookOpen, Search } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { AnimatedSection } from "@/components/AnimatedSection";

const Documentation = () => {
  const documentationCategories = [
    {
      title: "Getting Started",
      description: "Essential guides for new startup founders in India",
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      resources: [
        { title: "India Startup Ecosystem Overview", downloadLink: "#" },
        { title: "Legal Requirements for Indian Startups", downloadLink: "#" },
        { title: "GST Registration Guide", downloadLink: "#" },
        { title: "Fundraising in the Indian Market", downloadLink: "#" }
      ]
    },
    {
      title: "Technical Resources",
      description: "Technical documentation for building your product",
      icon: <FileDown className="h-6 w-6 text-primary" />,
      resources: [
        { title: "Indian Payment Gateway Integration", downloadLink: "#" },
        { title: "UPI Implementation Guide", downloadLink: "#" },
        { title: "Compliance with Indian Data Protection Laws", downloadLink: "#" },
        { title: "Multilingual App Development for Indian Markets", downloadLink: "#" }
      ]
    }
  ];

  return (
    <PageTemplate 
      title="Documentation | Elevate X"
      description="Access comprehensive documentation for Indian startups on legal requirements, technical resources, and growth strategies."
      keywords="startup documentation, Indian startup guides, legal requirements, technical resources"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection threshold={0.1} className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-elevate-900 dark:text-white mb-4">
            Documentation
          </h1>
          <p className="text-xl text-elevate-600 dark:text-elevate-300 mb-8">
            Access comprehensive resources designed specifically for Indian startups
          </p>
          <div className="relative">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-elevate-400" />
            <input 
              type="text" 
              placeholder="Search documentation..." 
              className="w-full md:w-2/3 pl-11 pr-4 py-3 rounded-lg border border-elevate-200 dark:border-elevate-700 bg-white dark:bg-elevate-900"
            />
          </div>
        </AnimatedSection>
        
        <Separator className="my-8" />
        
        {documentationCategories.map((category, index) => (
          <AnimatedSection key={index} threshold={0.1} delay={100 * index} className="mb-12">
            <div className="flex items-start mb-4">
              <div className="mr-4 p-3 bg-primary/10 rounded-lg">
                {category.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-elevate-900 dark:text-white">{category.title}</h2>
                <p className="text-elevate-600 dark:text-elevate-400">{category.description}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {category.resources.map((resource, idx) => (
                <div key={idx} className="border border-elevate-200 dark:border-elevate-700 rounded-lg p-4 bg-white dark:bg-elevate-900 flex justify-between items-center">
                  <p className="font-medium">{resource.title}</p>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <FileDown className="h-4 w-4" />
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </PageTemplate>
  );
};

export default Documentation;
