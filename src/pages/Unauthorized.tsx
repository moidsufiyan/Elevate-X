
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Home, ArrowLeft } from "lucide-react";
import { useAuth } from "@/components/auth/AuthContext";

const Unauthorized = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-stargaze-50 to-white dark:from-stargaze-950 dark:to-stargaze-900">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto w-16 h-16 bg-red-100 dark:bg-red-900/20 flex items-center justify-center rounded-full mb-6">
          <Shield className="h-8 w-8 text-red-500" />
        </div>
        
        <h1 className="text-3xl font-bold text-stargaze-900 dark:text-white mb-2">
          Access Denied
        </h1>
        
        <p className="text-stargaze-600 dark:text-stargaze-300 mb-8">
          {user ? 
            `Sorry, your account (${user.role}) doesn't have permission to access this area.` : 
            "You don't have permission to access this area."}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="outline" 
            className="w-full sm:w-auto"
            asChild
          >
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          
          <Button
            className="w-full sm:w-auto"
            asChild
          >
            <Link to="/profile">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Profile
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
