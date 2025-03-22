
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { MessageSquare, Star } from "lucide-react";

interface MentorCardProps {
  mentor: {
    id: string;
    name: string;
    role: string;
    company: string;
    expertise: string[];
    image: string;
    available: boolean;
    bio?: string;
    rating?: number;
    sessions?: number;
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
        
        {mentor.rating && (
          <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-stargaze-800/90 backdrop-blur-sm text-xs px-2 py-1 rounded-full shadow-md flex items-center gap-1">
            <Star className="h-3 w-3 text-amber-500" fill="currentColor" />
            <span className="text-stargaze-900 dark:text-white font-medium">{mentor.rating}</span>
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
        
        {/* Bio (if provided) */}
        {mentor.bio && (
          <p className="text-sm text-stargaze-600 dark:text-stargaze-400 mb-4 line-clamp-3">
            {mentor.bio}
          </p>
        )}
        
        {/* Sessions Count (if provided) */}
        {mentor.sessions && (
          <div className="text-xs text-stargaze-500 dark:text-stargaze-400 mb-4">
            {mentor.sessions} mentoring sessions completed
          </div>
        )}

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
