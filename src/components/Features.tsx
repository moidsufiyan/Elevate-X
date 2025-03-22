
import { cn } from "@/lib/utils";
import { AnimatedSection } from "./AnimatedSection";
import { 
  Users, MessageCircle, BookOpen, 
  Rocket, BarChart, Award
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Connect with industry leaders who provide personalized guidance for your startup journey.",
  },
  {
    icon: MessageCircle,
    title: "Community Discussions",
    description: "Engage in meaningful conversations with fellow entrepreneurs and mentors.",
  },
  {
    icon: BookOpen,
    title: "Learning Resources",
    description: "Access a comprehensive library of guides, templates, and video tutorials.",
  },
  {
    icon: Rocket,
    title: "Startup Showcasing",
    description: "Showcase your startup to potential investors and gain visibility.",
  },
  {
    icon: BarChart,
    title: "Growth Analytics",
    description: "Track your progress with detailed analytics and actionable insights.",
  },
  {
    icon: Award,
    title: "Success Stories",
    description: "Get inspired by entrepreneurs who have successfully scaled their businesses.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-stargaze-50/50 to-transparent dark:from-stargaze-950/50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection threshold={0.1} className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Features</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-stargaze-900 dark:text-white mb-6">
            Everything You Need to Succeed
          </h3>
          <p className="max-w-2xl mx-auto text-stargaze-600 dark:text-stargaze-300 text-lg">
            Our platform provides all the tools and resources entrepreneurs need to transform ideas into thriving businesses.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection
              key={index}
              threshold={0.1}
              delay={100 + index * 100}
              className="h-full"
            >
              <div className={cn(
                "relative h-full p-6 rounded-2xl transition-all duration-300",
                "bg-white/50 dark:bg-stargaze-900/30 backdrop-blur-sm",
                "border border-stargaze-100 dark:border-stargaze-800",
                "shadow-subtle hover:shadow-md hover:-translate-y-1"
              )}>
                <div className="flex flex-col h-full">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-xl font-semibold text-stargaze-900 dark:text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-stargaze-600 dark:text-stargaze-300 flex-grow">
                    {feature.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
