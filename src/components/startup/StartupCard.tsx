
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, MapPin, TrendingUp, Bookmark, BookmarkCheck } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Startup } from "@/shared/types/models";

interface StartupCardProps {
  startup: Startup;
  className?: string;
}

export const StartupCard = ({ startup, className }: StartupCardProps) => {
  const [isInterested, setIsInterested] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [interestedCount, setInterestedCount] = useState(0); // Default to 0 if not provided
  const { toast } = useToast();
  
  const handleInterestClick = () => {
    if (!isInterested) {
      setIsInterested(true);
      setInterestedCount(prevCount => prevCount + 1);
      toast({
        title: "Interest Shown",
        description: `You've shown interest in ${startup.name}. The startup will be notified.`,
      });
    } else {
      setIsInterested(false);
      setInterestedCount(prevCount => Math.max(0, prevCount - 1));
      toast({
        title: "Interest Removed",
        description: `You've removed your interest in ${startup.name}.`,
        variant: "destructive",
      });
    }
  };
  
  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
    
    toast({
      title: isBookmarked ? "Removed from Bookmarks" : "Added to Bookmarks",
      description: isBookmarked ? `${startup.name} has been removed from your bookmarks.` : `${startup.name} has been added to your bookmarks for later.`,
    });
  };
  
  return (
    <Card className={cn("overflow-hidden transition-all duration-300 hover:shadow-md h-full flex flex-col", className)}>
      <div className="aspect-video relative overflow-hidden bg-stargaze-100 dark:bg-stargaze-800">
        <img 
          src={startup.logo} 
          alt={`${startup.name} logo`} 
          className="w-full h-full object-cover"
        />
        <button 
          onClick={handleBookmarkClick}
          className="absolute top-3 right-3 bg-white/80 dark:bg-stargaze-800/80 p-2 rounded-full backdrop-blur-sm transition-colors hover:bg-white dark:hover:bg-stargaze-700"
        >
          {isBookmarked ? (
            <BookmarkCheck className="h-4 w-4 text-primary" />
          ) : (
            <Bookmark className="h-4 w-4 text-stargaze-600 dark:text-stargaze-300" />
          )}
        </button>
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-stargaze-900 dark:text-white">
              <Link to={`/startup/${startup.id}`} className="hover:text-primary transition-colors">
                {startup.name}
              </Link>
            </h3>
            <div className="flex items-center gap-2 text-xs text-stargaze-500 dark:text-stargaze-400 mt-1">
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                <span>{startup.location}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                <span>{startup.stage}</span>
              </div>
            </div>
          </div>
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
            {startup.industry}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pb-4 flex-grow">
        <p className="text-sm text-stargaze-600 dark:text-stargaze-300 line-clamp-3">
          {startup.description}
        </p>
        
        <div className="flex flex-wrap gap-1.5 mt-4">
          {/* If no tags are available, show industry as a tag */}
          {[startup.industry].map((tag, index) => (
            <span 
              key={index} 
              className="inline-block px-2 py-1 text-xs rounded-full bg-stargaze-100 dark:bg-stargaze-800 text-stargaze-700 dark:text-stargaze-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <div className="w-full grid grid-cols-2 gap-2">
          <Button 
            onClick={handleInterestClick} 
            variant={isInterested ? "default" : "outline"}
            className={cn(
              "w-full flex items-center justify-center gap-1.5",
              isInterested && "bg-primary text-primary-foreground"
            )}
          >
            <Heart className={cn("h-4 w-4", isInterested && "fill-current")} />
            <span className="text-sm">
              {isInterested ? "Interested" : "Show Interest"}
            </span>
          </Button>
          
          <Button 
            variant="secondary" 
            className="w-full"
            asChild
          >
            <Link to={`/startup/${startup.id}`}>
              View Details
            </Link>
          </Button>
          
          <div className="col-span-2 mt-2 text-xs text-center text-stargaze-500 dark:text-stargaze-400">
            <span className="font-medium">{interestedCount}</span> investors interested
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
