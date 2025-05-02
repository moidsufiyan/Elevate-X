import { Link } from "react-router-dom";
import { Button } from "@/components/Button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ArrowLeft } from "lucide-react";

export const Unauthorized = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted">
      <AnimatedSection className="text-center">
        <h1 className="text-9xl font-bold text-primary mb-4">403</h1>
        <h2 className="text-3xl font-semibold mb-6">Unauthorized Access</h2>
        <p className="text-muted-foreground mb-8">
          You don't have permission to access this page.
        </p>
        <div className="space-x-4">
          <Button asChild leftIcon={<ArrowLeft className="h-4 w-4" />}>
            <Link to="/">Go Back Home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/auth">Sign In</Link>
          </Button>
        </div>
      </AnimatedSection>
    </div>
  );
};
