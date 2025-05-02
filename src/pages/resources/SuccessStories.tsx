
import { PageTemplate } from "@/components/ui/page-template";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const SuccessStories = () => {
  const successStories = [
    {
      id: 1,
      companyName: "TechVidya",
      founderName: "Priya Sharma",
      industry: "EdTech",
      story: "Starting with just a small team in Bengaluru, TechVidya has grown to become one of India's leading EdTech platforms, reaching over 2 million students across 500+ cities. Mentor guidance helped us refine our business model and secure Series B funding of ₹150 crores.",
      image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      mentorQuote: "Priya and her team had exceptional product vision. They just needed guidance on scaling strategies and investor connections.",
      mentorName: "Rajiv Menon, Venture Partner",
      results: ["₹150 crore Series B funding", "2M+ users nationwide", "Team growth from 5 to 150+"]
    },
    {
      id: 2,
      companyName: "KhanaFresh",
      founderName: "Vikram Reddy",
      industry: "FoodTech",
      story: "KhanaFresh revolutionized the regional food delivery market by focusing on authentic homemade meals from local chefs. Our mentors helped us navigate regulatory challenges and optimize our logistics model. Today we operate in 12 tier-2 cities with 5000+ home chefs on our platform.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      mentorQuote: "KhanaFresh identified a unique gap in India's food delivery market. Their execution of the home chef network model is exemplary.",
      mentorName: "Anjali Kumar, Food Industry Expert",
      results: ["5000+ home chefs onboarded", "Operations in 12 tier-2 cities", "3.2 lakh monthly orders"]
    },
    {
      id: 3,
      companyName: "RuralFintech",
      founderName: "Amit Patel",
      industry: "FinTech",
      story: "When we started RuralFintech, bringing digital financial services to underserved rural communities seemed impossible. With mentor guidance on regulatory compliance and strategic partnerships with local institutions, we've now enabled banking services for over 3 million rural Indians.",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      mentorQuote: "Amit's vision for financial inclusion paired with strategic execution has truly transformed banking access in rural India.",
      mentorName: "Shantanu Ghosh, Ex-RBI Regional Director",
      results: ["3M+ rural users", "Partnerships with 35 district cooperative banks", "₹75 crore funding secured"]
    }
  ];

  return (
    <PageTemplate 
      title="Success Stories | Elevate X"
      description="Discover inspiring success stories of Indian startups that overcame challenges and achieved growth with mentorship."
      keywords="startup success stories, Indian entrepreneurs, startup case studies, entrepreneur journeys"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection threshold={0.1} className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-stargaze-900 dark:text-white mb-4">
            Success Stories
          </h1>
          <p className="text-xl text-stargaze-600 dark:text-stargaze-300 max-w-3xl">
            Inspiring journeys of Indian founders and startups who overcame challenges and achieved remarkable growth with the right mentorship and resources.
          </p>
        </AnimatedSection>
        
        <div className="space-y-16">
          {successStories.map((story, index) => (
            <AnimatedSection key={story.id} threshold={0.1} delay={100 * index}>
              <Card className="overflow-hidden border-none shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  <div className="lg:col-span-2 h-64 lg:h-auto relative">
                    <img 
                      src={story.image} 
                      alt={story.companyName} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 lg:hidden">
                      <h2 className="text-2xl font-bold text-white">{story.companyName}</h2>
                      <p className="text-white/80">Founded by {story.founderName}</p>
                    </div>
                  </div>
                  
                  <CardContent className="lg:col-span-3 p-6 lg:p-8 bg-white dark:bg-stargaze-900">
                    <div className="hidden lg:block mb-4">
                      <h2 className="text-2xl font-bold text-stargaze-900 dark:text-white">{story.companyName}</h2>
                      <p className="text-stargaze-600 dark:text-stargaze-400">Founded by {story.founderName} | {story.industry}</p>
                    </div>
                    
                    <p className="text-stargaze-600 dark:text-stargaze-300 mb-6">
                      {story.story}
                    </p>
                    
                    <div className="bg-stargaze-50 dark:bg-stargaze-800 p-4 rounded-lg mb-6">
                      <div className="flex items-start">
                        <Quote className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <p className="italic text-stargaze-600 dark:text-stargaze-300">"{story.mentorQuote}"</p>
                          <p className="text-sm font-medium text-stargaze-900 dark:text-stargaze-200 mt-2">— {story.mentorName}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-stargaze-900 dark:text-white uppercase tracking-wider mb-3">Results</h3>
                      <ul className="space-y-1">
                        {story.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-stargaze-600 dark:text-stargaze-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button variant="outline" className="w-full justify-between">
                      Read Full Story
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection threshold={0.1} delay={400} className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-stargaze-900 dark:text-white mb-4">
            Your success story could be next
          </h2>
          <p className="text-stargaze-600 dark:text-stargaze-300 mb-6 max-w-2xl mx-auto">
            Connect with expert mentors and access the resources you need to overcome challenges and accelerate your startup's growth.
          </p>
          <Button size="lg">
            Get Started Today
          </Button>
        </AnimatedSection>
      </div>
    </PageTemplate>
  );
};

export default SuccessStories;
