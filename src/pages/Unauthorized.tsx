
import { Link, useNavigate, useEffect } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Home, ArrowLeft } from "lucide-react";
import { useAuth } from "@/components/auth/AuthContext";

const Unauthorized = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  // Auto-redirect back to the previous page after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(-1);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-elevate-50 to-white dark:from-elevate-950 dark:to-elevate-900">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto w-16 h-16 bg-red-100 dark:bg-red-900/20 flex items-center justify-center rounded-full mb-6">
          <Shield className="h-8 w-8 text-red-500" />
        </div>
        
        <h1 className="text-3xl font-bold text-elevate-900 dark:text-white mb-2">
          Redirecting You...
        </h1>
        
        <p className="text-elevate-600 dark:text-elevate-300 mb-8">
          Automatically sending you to the requested page.
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
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
