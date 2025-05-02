
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { MessageSquare, Star, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Mentor } from "@/shared/types/models";

interface MentorCardProps {
  mentor: Mentor;
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
      <Link to={`/mentor/${mentor.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img 
            src={mentor.avatar || "/placeholder.svg"}
            alt={mentor.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/placeholder.svg";
            }}
          />
          {mentor.availability && mentor.availability.length > 0 && (
            <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full shadow-md">
              Available
            </div>
          )}
          
          {mentor.rating > 0 && (
            <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-stargaze-800/90 backdrop-blur-sm text-xs px-2 py-1 rounded-full shadow-md flex items-center gap-1">
              <Star className="h-3 w-3 text-amber-500" fill="currentColor" />
              <span className="text-stargaze-900 dark:text-white font-medium">{mentor.rating}</span>
            </div>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="relative p-5">
        {/* Badge for Featured Mentors */}
        {mentor.featured && (
          <div className="absolute -top-4 right-4 flex gap-2">
            <Badge
              variant="default"
              className="text-xs shadow-md"
            >
              Featured
            </Badge>
          </div>
        )}

        <Link to={`/mentor/${mentor.id}`} className="block">
          <h4 className="text-xl font-bold text-stargaze-900 dark:text-white group-hover:text-primary transition-colors">{mentor.name}</h4>
          <p className="text-stargaze-600 dark:text-stargaze-400 mb-2">{mentor.role} at {mentor.company}</p>
        </Link>
        
        {/* Expertise Tags */}
        {mentor.expertise && mentor.expertise.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {mentor.expertise.slice(0, 3).map((skill, index) => (
              <span 
                key={index} 
                className="inline-block px-2 py-1 text-xs rounded-full bg-stargaze-100 dark:bg-stargaze-800 text-stargaze-700 dark:text-stargaze-300"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
        
        {/* Bio (if provided) */}
        {mentor.bio && (
          <p className="text-sm text-stargaze-600 dark:text-stargaze-400 mb-4 line-clamp-3">
            {mentor.bio}
          </p>
        )}
        
        {/* Sessions Count (if provided) */}
        {mentor.sessions > 0 && (
          <div className="text-xs text-stargaze-500 dark:text-stargaze-400 mb-4">
            {mentor.sessions} mentoring sessions completed
          </div>
        )}

        {/* CTA Buttons - Ensuring they direct to proper detail pages */}
        <div className="flex gap-2">
          <Link to={`/mentor/${mentor.id}`} className="flex-1">
            <Button 
              variant="ghost" 
              size="sm" 
              className="w-full justify-center border border-stargaze-200 dark:border-stargaze-700"
              leftIcon={<MessageSquare className="h-4 w-4" />}
            >
              Connect
            </Button>
          </Link>
          <Link to={`/mentor/${mentor.id}/book`} className="flex-1">
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full justify-center border border-stargaze-200 dark:border-stargaze-700"
              leftIcon={<Calendar className="h-4 w-4" />}
            >
              Book
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
