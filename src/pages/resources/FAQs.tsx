
import { useState } from "react";
import { PageTemplate } from "@/components/ui/page-template";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const FAQs = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = [
    {
      category: "Getting Started",
      faqs: [
        {
          question: "How do I register my startup in India?",
          answer: "To register a startup in India, you'll need to: 1) Choose a business structure (Private Limited, LLP, etc.), 2) Get a Digital Signature Certificate, 3) Apply for Director Identification Number, 4) Register with the Ministry of Corporate Affairs, 5) Apply for GST registration if applicable, and 6) Register with Startup India for additional benefits."
        },
        {
          question: "What benefits does Startup India provide?",
          answer: "Startup India offers several benefits including: tax exemption for 3 years, easy patent filing, self-certification compliance, SIDBI funding, faster exits, and incubator support. Your startup must be registered with DPIIT to avail these benefits."
        },
        {
          question: "Do I need to register for GST as a startup in India?",
          answer: "In India, GST registration is mandatory if your annual turnover exceeds ₹40 lakhs (₹20 lakhs for special category states). Even below this threshold, GST registration may be beneficial as it allows you to claim input tax credits and appear more credible to clients and investors."
        }
      ]
    },
    {
      category: "Funding & Investments",
      faqs: [
        {
          question: "What funding options are available for early-stage Indian startups?",
          answer: "Early-stage Indian startups can explore multiple funding avenues including: bootstrapping, angel investors (networks like Indian Angel Network), incubators and accelerators (T-Hub, Startup India), crowdfunding platforms, government schemes (SIDBI Fund of Funds), venture capital firms focusing on early-stage investments, and various bank loans under government schemes for startups."
        },
        {
          question: "How do I approach investors in India?",
          answer: "To approach investors in India: 1) Research investors who fund your sector and stage, 2) Prepare a compelling pitch deck and business plan, 3) Network at startup events and conferences, 4) Get introductions through mentors or other founders, 5) Participate in pitch competitions, 6) Apply to accelerator programs with investor networks, and 7) Use online platforms like LetsVenture or AngelList India."
        },
        {
          question: "What equity percentage should I offer to investors?",
          answer: "The equity percentage offered to investors in India typically ranges from 10-25% for seed rounds and 15-30% for Series A. However, this varies based on your startup's valuation, growth stage, sector, and funding amount. Early-stage startups usually give up more equity. Consider future funding rounds to avoid excessive dilution, and consult with mentors or advisors before finalizing equity offers."
        }
      ]
    },
    {
      category: "Legal & Compliance",
      faqs: [
        {
          question: "What are the essential legal documents for an Indian startup?",
          answer: "Essential legal documents for Indian startups include: Certificate of Incorporation, Memorandum of Association (MOA), Articles of Association (AOA), Shareholders Agreement, Employee Agreements, Non-Disclosure Agreements (NDAs), Intellectual Property assignments, Terms of Service and Privacy Policies (for digital businesses), GST registration, and applicable industry-specific licenses."
        },
        {
          question: "How does the new Personal Data Protection Bill affect Indian startups?",
          answer: "The Personal Data Protection Bill impacts Indian startups by requiring: explicit consent for data collection, purpose limitation for data usage, data minimization practices, implementation of data security measures, appointment of a Data Protection Officer for certain companies, localization of sensitive data within India, and compliance with user rights like data access and deletion. Startups should prepare by auditing their data practices and implementing necessary compliance measures."
        }
      ]
    }
  ];

  const filteredFAQs = searchQuery 
    ? faqCategories.map(category => ({
        ...category,
        faqs: category.faqs.filter(faq => 
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.faqs.length > 0)
    : faqCategories;

  return (
    <PageTemplate 
      title="Frequently Asked Questions | Elevate X"
      description="Get answers to common questions about starting and growing a business in India."
      keywords="startup FAQs, Indian startup questions, business registration, funding questions, legal compliance"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection threshold={0.1} className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-stargaze-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-stargaze-600 dark:text-stargaze-300 mb-8 max-w-3xl">
            Find answers to common questions about founding and scaling startups in the Indian ecosystem
          </p>
          
          <div className="relative mb-10">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-stargaze-400" />
            <Input 
              type="text" 
              placeholder="Search FAQs..." 
              className="w-full md:w-2/3 pl-11 pr-4 py-3" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </AnimatedSection>
        
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((category, index) => (
            category.faqs.length > 0 && (
              <AnimatedSection key={index} threshold={0.1} delay={100 * index} className="mb-12">
                <h2 className="text-2xl font-bold text-stargaze-900 dark:text-white mb-6">
                  {category.category}
                </h2>
                
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, idx) => (
                    <AccordionItem key={idx} value={`item-${index}-${idx}`}>
                      <AccordionTrigger className="text-left font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-stargaze-600 dark:text-stargaze-300">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AnimatedSection>
            )
          ))
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-stargaze-900 dark:text-white mb-2">No results found</h3>
            <p className="text-stargaze-600 dark:text-stargaze-400">
              Try adjusting your search terms or browse the categories below
            </p>
          </div>
        )}
      </div>
    </PageTemplate>
  );
};

export default FAQs;
