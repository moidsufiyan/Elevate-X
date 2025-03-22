
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { MessageSquare } from "lucide-react";

interface MentorCardProps {
  mentor: {
    id: string;
    name: string;
    role: string;
    company: string;
    expertise: string[];
    image: string;
    available: boolean;
  };
  className?: string;
}

export const MentorCard = ({ mentor, className }: MentorCardProps) => {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-2xl transition-all duration-500",
        "bg-white dark:bg-stargaze-900",
        "border border-stargaze-100 dark:border-stargaze-800",
        "shadow-subtle hover:shadow-md",
        className
      )}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img 
          src={mentor.image} 
          alt={mentor.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {mentor.available && (
          <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full shadow-md">
            Available
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative p-5">
        <h4 className="text-xl font-bold text-stargaze-900 dark:text-white">{mentor.name}</h4>
        <p className="text-stargaze-600 dark:text-stargaze-400 mb-2">{mentor.role} at {mentor.company}</p>
        
        {/* Expertise Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {mentor.expertise.map((skill, index) => (
            <span 
              key={index} 
              className="inline-block px-2 py-1 text-xs rounded-full bg-stargaze-100 dark:bg-stargaze-800 text-stargaze-700 dark:text-stargaze-300"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <Button 
          variant="ghost" 
          size="sm" 
          className="w-full justify-center mt-2 border border-stargaze-200 dark:border-stargaze-700"
          leftIcon={<MessageSquare className="h-4 w-4" />}
        >
          Connect
        </Button>
      </div>
    </div>
  );
};
