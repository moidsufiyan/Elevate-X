import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, MapPin, TrendingUp, Bookmark, BookmarkCheck, Globe, Users } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
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
  const [interestedCount, setInterestedCount] = useState(Math.floor(Math.random() * 50)); // Random count for demo
  const { toast } = useToast();
  
  const handleInterestClick = () => {
    if (!isInterested) {
      setIsInterested(true);
      setInterestedCount(prevCount => prevCount + 1);
      toast({
        title: "Interest Shown",
        description: `You've shown interest in ${startup.name}. The startup will be notified.`,
        duration: 3000,
      });
    } else {
      setIsInterested(false);
      setInterestedCount(prevCount => Math.max(0, prevCount - 1));
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
      description: isBookmarked ? `${startup.name} has been removed from your bookmarks.` : `${startup.name} has been added to your bookmarks for later.`,
      duration: 3000,
    });
  };
  
  // Format founding year to show years active
  const yearsActive = new Date().getFullYear() - startup.foundingYear;
  
  return (
    <Card className={cn("overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col", className)}>
      {/* Image container */}
      <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-stargaze-100 to-stargaze-200 dark:from-stargaze-800 dark:to-stargaze-900">
        <img 
          src={startup.logo} 
          alt={`${startup.name} logo`} 
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback for failed image loads
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x225?text=Logo+Not+Available';
          }}
        />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
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
            </TooltipTrigger>
            <TooltipContent>
              <p>{isBookmarked ? "Remove from bookmarks" : "Add to bookmarks"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        {startup.featured && (
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-primary/90 text-white border-primary/20 backdrop-blur-sm">
              Featured
            </Badge>
          </div>
        )}
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-stargaze-900 dark:text-white">
              <Link to={`/startup/${startup.id}`} className="hover:text-primary transition-colors">
                {startup.name}
              </Link>
            </h3>
            <div className="flex items-center gap-2 text-xs text-stargaze-500 dark:text-stargaze-400 mt-1 flex-wrap">
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                <span>{startup.location}</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                <span>{startup.stage}</span>
              </div>
              {yearsActive > 0 && (
                <>
                  <span className="hidden sm:inline">•</span>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>{startup.employees > 0 ? `${startup.employees} employees` : "Stealth team"}</span>
                  </div>
                </>
              )}
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
        
        {startup.website && (
          <div className="mt-3">
            <a 
              href={startup.website} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-xs text-primary hover:underline"
            >
              <Globe className="h-3 w-3 mr-1" /> 
              {new URL(startup.website).hostname}
            </a>
          </div>
        )}
        
        <div className="flex flex-wrap gap-1.5 mt-4">
          {/* Show funding information as a tag if available */}
          {startup.funding !== "Unknown" && (
            <span 
              className="inline-block px-2 py-1 text-xs rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
            >
              {startup.funding}
            </span>
          )}
          
          {/* Show founding year */}
          <span 
            className="inline-block px-2 py-1 text-xs rounded-full bg-stargaze-100 dark:bg-stargaze-800 text-stargaze-700 dark:text-stargaze-300"
          >
            Founded {startup.foundingYear} • {yearsActive === 0 ? "New" : `${yearsActive}y`}
          </span>
          
          {/* Show industry as a tag */}
          <span 
            className="inline-block px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
          >
            {startup.industry}
          </span>
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
            <span className="font-medium">{interestedCount}</span> {interestedCount === 1 ? 'investor' : 'investors'} interested
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
