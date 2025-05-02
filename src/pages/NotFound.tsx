import { Link } from "react-router-dom";
import { Button } from "@/components/Button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ArrowLeft } from "lucide-react";

export const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted">
      <AnimatedSection className="text-center">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button asChild leftIcon={<ArrowLeft className="h-4 w-4" />}>
          <Link to="/">Go Back Home</Link>
        </Button>
      </AnimatedSection>
    </div>
  );
};
