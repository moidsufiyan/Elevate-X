
import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";
import { Mail, Lock, User, ArrowRight, Github, Linkedin } from "lucide-react";

// Auth modes
type AuthMode = "signin" | "signup";

const Auth = () => {
  const [mode, setMode] = useState<AuthMode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("entrepreneur");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would connect to your authentication service
    console.log("Form submitted:", { mode, email, password, name, role });
  };
  
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md">
          <AnimatedSection animation="fade-up">
            <Link to="/" className="flex items-center mb-8 text-2xl font-bold tracking-tight">
              <span className="text-primary">Startup</span>
              <span>Stargaze</span>
            </Link>
            
            <h1 className="text-3xl font-bold mb-2 text-stargaze-900 dark:text-white">
              {mode === "signin" ? "Welcome back" : "Join our community"}
            </h1>
            <p className="text-stargaze-600 dark:text-stargaze-300 mb-8">
              {mode === "signin" 
                ? "Sign in to access your account and continue your journey."
                : "Create an account to connect with mentors and grow your startup."
              }
            </p>
            
            <div className="flex gap-4 mb-6">
              <button
                type="button"
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg",
                  "border border-stargaze-200 dark:border-stargaze-700",
                  "text-stargaze-700 dark:text-stargaze-300",
                  "hover:bg-stargaze-50 dark:hover:bg-stargaze-800 transition-colors"
                )}
              >
                <Github className="h-5 w-5" />
                <span className="text-sm">GitHub</span>
              </button>
              <button
                type="button"
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg",
                  "border border-stargaze-200 dark:border-stargaze-700",
                  "text-stargaze-700 dark:text-stargaze-300",
                  "hover:bg-stargaze-50 dark:hover:bg-stargaze-800 transition-colors"
                )}
              >
                <Linkedin className="h-5 w-5" />
                <span className="text-sm">LinkedIn</span>
              </button>
            </div>
            
            <div className="relative flex items-center justify-center mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-stargaze-200 dark:border-stargaze-700"></div>
              </div>
              <div className="relative bg-white dark:bg-stargaze-950 px-4 text-sm text-stargaze-500 dark:text-stargaze-400">
                or continue with
              </div>
            </div>
            
            <form onSubmit={handleSubmit}>
              {mode === "signup" && (
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-stargaze-700 dark:text-stargaze-300 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stargaze-400 h-5 w-5" />
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className={cn(
                        "w-full pl-10 pr-4 py-2.5 rounded-lg",
                        "bg-white dark:bg-stargaze-900",
                        "border border-stargaze-200 dark:border-stargaze-700",
                        "text-stargaze-900 dark:text-stargaze-200",
                        "focus:outline-none focus:ring-2 focus:ring-primary",
                      )}
                      required
                    />
                  </div>
                </div>
              )}
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-stargaze-700 dark:text-stargaze-300 mb-1">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stargaze-400 h-5 w-5" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className={cn(
                      "w-full pl-10 pr-4 py-2.5 rounded-lg",
                      "bg-white dark:bg-stargaze-900",
                      "border border-stargaze-200 dark:border-stargaze-700",
                      "text-stargaze-900 dark:text-stargaze-200",
                      "focus:outline-none focus:ring-2 focus:ring-primary",
                    )}
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-stargaze-700 dark:text-stargaze-300 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stargaze-400 h-5 w-5" />
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className={cn(
                      "w-full pl-10 pr-4 py-2.5 rounded-lg",
                      "bg-white dark:bg-stargaze-900",
                      "border border-stargaze-200 dark:border-stargaze-700",
                      "text-stargaze-900 dark:text-stargaze-200",
                      "focus:outline-none focus:ring-2 focus:ring-primary",
                    )}
                    required
                  />
                </div>
              </div>
              
              {mode === "signup" && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-stargaze-700 dark:text-stargaze-300 mb-2">
                    I am a:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {["entrepreneur", "mentor", "investor"].map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setRole(option)}
                        className={cn(
                          "py-2 px-4 rounded-lg text-sm capitalize transition-colors",
                          role === option
                            ? "bg-primary text-white"
                            : "bg-white dark:bg-stargaze-900 text-stargaze-700 dark:text-stargaze-300 border border-stargaze-200 dark:border-stargaze-700"
                        )}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {mode === "signin" && (
                <div className="flex justify-end mb-6">
                  <a href="#" className="text-sm text-primary hover:underline">
                    Forgot your password?
                  </a>
                </div>
              )}
              
              <Button
                type="submit"
                className="w-full justify-center mb-4"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                {mode === "signin" ? "Sign In" : "Create Account"}
              </Button>
              
              <p className="text-center text-sm text-stargaze-600 dark:text-stargaze-400">
                {mode === "signin" ? "Don't have an account? " : "Already have an account? "}
                <button
                  type="button"
                  onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
                  className="text-primary hover:underline font-medium"
                >
                  {mode === "signin" ? "Sign Up" : "Sign In"}
                </button>
              </p>
            </form>
          </AnimatedSection>
        </div>
      </div>
      
      {/* Right Side - Image */}
      <div className="hidden md:block md:w-1/2 bg-stargaze-100 dark:bg-stargaze-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary opacity-10"></div>
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Startup team working together"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="bg-white/80 dark:bg-stargaze-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-stargaze-900 dark:text-white">
              Connect. Learn. Grow.
            </h2>
            <p className="text-stargaze-700 dark:text-stargaze-300 mb-6">
              Join a community of entrepreneurs, mentors, and investors who are passionate about building successful startups and making a positive impact.
            </p>
            <div className="space-y-4">
              {[
                "Access to expert mentors with proven track records",
                "Connect with fellow entrepreneurs and share experiences",
                "Learn from comprehensive resources and guides",
                "Get feedback on your ideas and growth strategies",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-primary/20 text-primary flex items-center justify-center mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm text-stargaze-700 dark:text-stargaze-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
