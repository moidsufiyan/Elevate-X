import { cn } from "@/utils/utils";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { MessageSquare, Star, MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mentor } from "@/data/mentors";

interface MentorCardProps {
  mentor: Mentor;
  className?: string;
}

export const MentorCard = ({ mentor, className }: MentorCardProps) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl transition-all duration-300",
        "bg-white dark:bg-stargaze-900",
        "border border-stargaze-100 dark:border-stargaze-800",
        "shadow-sm hover:shadow-lg hover:-translate-y-1",
        "h-full flex flex-col",
        className
      )}
    >
      {/* Header with Avatar and Status */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={mentor.image} alt={mentor.name} />
            <AvatarFallback className="text-lg font-semibold">
              {mentor.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-end gap-2">
            {mentor.available && (
              <div className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 text-xs px-2 py-1 rounded-full font-medium">
                Available
              </div>
            )}
            {mentor.rating && (
              <div className="flex items-center gap-1 text-sm">
                <Star className="h-4 w-4 text-amber-500 fill-current" />
                <span className="font-medium">{mentor.rating}</span>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Link
            to={`/mentor/${mentor.id}`}
            className="block hover:text-primary transition-colors"
          >
            <h3 className="text-lg font-bold text-stargaze-900 dark:text-white line-clamp-1">
              {mentor.name}
            </h3>
          </Link>

          <p className="text-primary font-medium text-sm line-clamp-1">
            {mentor.role}
          </p>

          <p className="text-stargaze-600 dark:text-stargaze-400 text-sm line-clamp-1">
            {mentor.company}
          </p>
        </div>

        {/* Location and Experience */}
        <div className="flex items-center gap-4 mt-3 text-xs text-stargaze-500">
          {mentor.location && (
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>{mentor.location}</span>
            </div>
          )}
          {mentor.sessions && (
            <div className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              <span>{mentor.sessions} sessions</span>
            </div>
          )}
        </div>
      </div>

      {/* Bio */}
      <div className="px-6 pb-4 flex-grow">
        <p className="text-stargaze-700 dark:text-stargaze-300 text-sm leading-relaxed line-clamp-3">
          {mentor.bio}
        </p>
      </div>

      {/* Expertise Tags */}
      <div className="px-6 pb-4">
        <div className="flex flex-wrap gap-1">
          {mentor.expertise.slice(0, 3).map((skill, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
          {mentor.expertise.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{mentor.expertise.length - 3}
            </Badge>
          )}
        </div>
      </div>

      {/* Footer with CTA */}
      <div className="p-6 pt-0 mt-auto">
        <div className="flex gap-2">
          <Link to={`/mentor/${mentor.id}`} className="flex-1">
            <Button variant="outline" size="sm" className="w-full text-xs">
              View Profile
            </Button>
          </Link>
          <Button size="sm" className="gap-1 text-xs">
            <MessageSquare className="h-3 w-3" />
            Connect
          </Button>
        </div>
      </div>
    </div>
  );
};
