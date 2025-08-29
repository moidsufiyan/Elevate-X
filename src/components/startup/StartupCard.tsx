import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  MapPin,
  TrendingUp,
  Bookmark,
  BookmarkCheck,
  Building,
  Calendar,
  Users,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Startup } from "@/data/startups";

interface StartupCardProps {
  startup: Startup;
  className?: string;
}

export const StartupCard = ({ startup, className }: StartupCardProps) => {
  const [isInterested, setIsInterested] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [interestedCount, setInterestedCount] = useState(
    startup.interestedCount
  );
  const { toast } = useToast();

  const handleInterestClick = () => {
    if (!isInterested) {
      setIsInterested(true);
      setInterestedCount((prevCount) => prevCount + 1);
      toast({
        title: "Interest Shown",
        description: `You've shown interest in ${startup.name}. The startup will be notified.`,
        duration: 3000,
      });
    } else {
      setIsInterested(false);
      setInterestedCount((prevCount) => Math.max(0, prevCount - 1));
      toast({
        title: "Interest Removed",
        description: `You've removed your interest in ${startup.name}.`,
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);

    toast({
      title: isBookmarked ? "Removed from Bookmarks" : "Added to Bookmarks",
      description: isBookmarked
        ? `${startup.name} has been removed from your bookmarks.`
        : `${startup.name} has been added to your bookmarks for later.`,
      duration: 3000,
    });
  };

  return (
    <Card
      className={cn(
        "group relative overflow-hidden transition-all duration-300",
        "hover:shadow-lg hover:-translate-y-1",
        "h-full flex flex-col",
        className
      )}
    >
      {/* Header */}
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <div className="w-12 h-12 bg-white dark:bg-stargaze-800 rounded-lg shadow-sm flex items-center justify-center flex-shrink-0">
              <img
                src={startup.logo}
                alt={startup.name}
                className="w-10 h-10 object-cover rounded-md"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/placeholder.svg";
                }}
              />
            </div>
            <div className="flex-1 min-w-0">
              <Link
                to={`/startup/${startup.id}`}
                className="block hover:text-primary transition-colors"
              >
                <h3 className="text-lg font-bold text-stargaze-900 dark:text-white line-clamp-1">
                  {startup.name}
                </h3>
              </Link>
              <p className="text-primary font-medium text-sm line-clamp-1">
                {startup.industry}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2">
            <Badge variant="outline" className="text-xs">
              {startup.fundingStage}
            </Badge>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBookmarkClick}
              className="h-auto p-1"
            >
              {isBookmarked ? (
                <BookmarkCheck className="h-4 w-4 text-primary" />
              ) : (
                <Bookmark className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Location and Founded */}
        <div className="flex items-center gap-4 mt-3 text-xs text-stargaze-500">
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            <span>{startup.location}</span>
          </div>
          {startup.foundingYear && (
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>Founded {startup.foundingYear}</span>
            </div>
          )}
          {startup.teamSize && (
            <div className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              <span>{startup.teamSize} employees</span>
            </div>
          )}
        </div>
      </CardHeader>

      {/* Content */}
      <CardContent className="pb-4 flex-grow">
        <p className="text-stargaze-700 dark:text-stargaze-300 text-sm leading-relaxed line-clamp-3 mb-4">
          {startup.shortPitch}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {startup.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {startup.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{startup.tags.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="pt-0">
        <div className="flex items-center justify-between w-full gap-3">
          <div className="flex items-center gap-4 text-xs text-stargaze-500">
            <div className="flex items-center gap-1">
              <Heart
                className={cn(
                  "h-3 w-3",
                  isInterested ? "text-red-500 fill-current" : ""
                )}
              />
              <span>{interestedCount}</span>
            </div>
            {startup.funding && (
              <div className="flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                <span>{startup.funding}</span>
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleInterestClick}
              className={cn(
                "gap-1 text-xs",
                isInterested &&
                  "border-red-200 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400"
              )}
            >
              <Heart
                className={cn("h-3 w-3", isInterested && "fill-current")}
              />
              {isInterested ? "Interested" : "Show Interest"}
            </Button>

            <Link to={`/startup/${startup.id}`}>
              <Button size="sm" className="text-xs">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
