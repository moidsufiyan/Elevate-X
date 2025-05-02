import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import {
  EyeIcon,
  EyeOffIcon,
  GithubIcon,
  MailIcon,
  LinkedinIcon,
  ArrowLeft,
  Loader2,
} from "lucide-react";
import { loginUser, signupUser } from "@/services/api";
import { useAuth } from "@/components/auth/AuthContext";

// Form validation schemas
const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

const signupSchema = z
  .object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z.string(),
    accountType: z.enum(["founder", "mentor", "investor"]),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState<
    "founder" | "mentor" | "investor"
  >("founder");
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const { refreshUser } = useAuth();

  // Get the "from" location from state, or default to "/"
  const from = (location.state as any)?.from?.pathname || "/";

  // Form state
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "founder" as "founder" | "mentor" | "investor",
  });

  // Validation errors
  const [loginErrors, setLoginErrors] = useState<{ [key: string]: string }>({});
  const [signupErrors, setSignupErrors] = useState<{ [key: string]: string }>(
    {}
  );

  // Handle login form input changes
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field when user types
    if (loginErrors[name]) {
      setLoginErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Handle signup form input changes
  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupForm((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field when user types
    if (signupErrors[name]) {
      setSignupErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Handle login form submission
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Validate form
      loginSchema.parse(loginForm);

      // Call API to login
      const response = await loginUser(loginForm);

      if (response.success) {
        // Refresh user context
        await refreshUser();

        // Show success and redirect
        toast({
          title: "Login successful",
          description: "Welcome back!",
        });

        // Redirect to the page the user was trying to access, or fallback to profile
        navigate(from, { replace: true });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Format Zod validation errors
        const formattedErrors: { [key: string]: string } = {};
        error.errors.forEach((err) => {
          if (err.path) {
            formattedErrors[err.path[0]] = err.message;
          }
        });
        setLoginErrors(formattedErrors);
      } else if (error instanceof Error) {
        // Handle API errors
        toast({
          title: "Login failed",
          description:
            error.message || "Invalid email or password. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Handle signup form submission
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Set account type from state
      const formWithAccountType = {
        ...signupForm,
        accountType,
      };

      // Validate form
      signupSchema.parse(formWithAccountType);

      // Call API to signup
      const response = await signupUser(formWithAccountType);

      if (response.success) {
        // Refresh user context
        await refreshUser();

        // Show success and redirect
        toast({
          title: "Account created successfully",
          description: "Welcome to our platform!",
        });

        // Redirect based on account type
        if (accountType === "founder") {
          navigate("/startup-profile", { replace: true });
        } else if (accountType === "mentor") {
          navigate("/mentor-profile", { replace: true });
        } else {
          navigate("/profile", { replace: true });
        }
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Format Zod validation errors
        const formattedErrors: { [key: string]: string } = {};
        error.errors.forEach((err) => {
          if (err.path) {
            formattedErrors[err.path[0]] = err.message;
          }
        });
        setSignupErrors(formattedErrors);
      } else if (error instanceof Error) {
        // Handle API errors
        toast({
          title: "Signup failed",
          description:
            error.message ||
            "There was an error creating your account. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      if (isLogin) {
        await handleLogin(e);
      } else {
        await handleSignup(e);
      }
    } catch (err) {
      setError("Authentication failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stargaze-50 dark:bg-stargaze-950">
      <div className="container flex flex-1 items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="w-full max-w-md">
          <Link to="/" className="flex items-center text-primary mb-8 ml-1">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>

          <Card className="border-stargaze-200 dark:border-stargaze-800 shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">
                {isLogin ? "Sign in to your account" : "Create an account"}
              </CardTitle>
              <CardDescription className="text-center">
                {isLogin
                  ? "Enter your credentials to access your account"
                  : "Fill in the details below to create your account"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Tabs
                value={isLogin ? "login" : "signup"}
                onValueChange={(value) => setIsLogin(value === "login")}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="login">Sign In</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>

                {/* Login Form */}
                <TabsContent value="login">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={loginErrors.email ? "border-red-500" : ""}
                        required
                      />
                      {loginErrors.email && (
                        <p className="text-xs text-red-500">
                          {loginErrors.email}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className={
                            loginErrors.password
                              ? "border-red-500 pr-10"
                              : "pr-10"
                          }
                          required
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-stargaze-500 hover:text-stargaze-700"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOffIcon className="h-4 w-4" />
                          ) : (
                            <EyeIcon className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                      {loginErrors.password && (
                        <p className="text-xs text-red-500">
                          {loginErrors.password}
                        </p>
                      )}
                    </div>

                    {error && (
                      <div className="text-red-500 text-sm text-center">
                        {error}
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Signing in...
                        </>
                      ) : (
                        "Sign In"
                      )}
                    </Button>

                    <div className="relative my-4">
                      <div className="absolute inset-0 flex items-center">
                        <Separator />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-card px-2 text-muted-foreground">
                          Or continue with
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <Button
                        variant="outline"
                        type="button"
                        className="w-full"
                      >
                        <MailIcon className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        type="button"
                        className="w-full"
                      >
                        <GithubIcon className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        type="button"
                        className="w-full"
                      >
                        <LinkedinIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </TabsContent>

                {/* Signup Form */}
                <TabsContent value="signup">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={signupErrors.name ? "border-red-500" : ""}
                        required
                      />
                      {signupErrors.name && (
                        <p className="text-xs text-red-500">
                          {signupErrors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={signupForm.email}
                        onChange={handleSignupChange}
                        className={signupErrors.email ? "border-red-500" : ""}
                        required
                      />
                      {signupErrors.email && (
                        <p className="text-xs text-red-500">
                          {signupErrors.email}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          value={signupForm.password}
                          onChange={handleSignupChange}
                          className={
                            signupErrors.password
                              ? "border-red-500 pr-10"
                              : "pr-10"
                          }
                          required
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-stargaze-500 hover:text-stargaze-700"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOffIcon className="h-4 w-4" />
                          ) : (
                            <EyeIcon className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                      {signupErrors.password && (
                        <p className="text-xs text-red-500">
                          {signupErrors.password}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <div className="relative">
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="••••••••"
                          value={signupForm.confirmPassword}
                          onChange={handleSignupChange}
                          className={
                            signupErrors.confirmPassword
                              ? "border-red-500 pr-10"
                              : "pr-10"
                          }
                          required
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-stargaze-500 hover:text-stargaze-700"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                        >
                          {showConfirmPassword ? (
                            <EyeOffIcon className="h-4 w-4" />
                          ) : (
                            <EyeIcon className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                      {signupErrors.confirmPassword && (
                        <p className="text-xs text-red-500">
                          {signupErrors.confirmPassword}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label>Account Type</Label>
                      <div className="grid grid-cols-3 gap-2">
                        <Button
                          type="button"
                          variant={
                            accountType === "founder" ? "default" : "outline"
                          }
                          className="w-full"
                          onClick={() => setAccountType("founder")}
                        >
                          Founder
                        </Button>
                        <Button
                          type="button"
                          variant={
                            accountType === "mentor" ? "default" : "outline"
                          }
                          className="w-full"
                          onClick={() => setAccountType("mentor")}
                        >
                          Mentor
                        </Button>
                        <Button
                          type="button"
                          variant={
                            accountType === "investor" ? "default" : "outline"
                          }
                          className="w-full"
                          onClick={() => setAccountType("investor")}
                        >
                          Investor
                        </Button>
                      </div>
                    </div>

                    {error && (
                      <div className="text-red-500 text-sm text-center">
                        {error}
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Creating Account...
                        </>
                      ) : (
                        "Create Account"
                      )}
                    </Button>

                    <div className="relative my-4">
                      <div className="absolute inset-0 flex items-center">
                        <Separator />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-card px-2 text-muted-foreground">
                          Or continue with
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <Button
                        variant="outline"
                        type="button"
                        className="w-full"
                      >
                        <MailIcon className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        type="button"
                        className="w-full"
                      >
                        <GithubIcon className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        type="button"
                        className="w-full"
                      >
                        <LinkedinIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <p className="text-xs text-center text-stargaze-500">
                By continuing, you agree to our{" "}
                <Link to="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
              <div className="mt-4 text-center">
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-sm text-primary hover:underline"
                >
                  {isLogin
                    ? "Don't have an account? Sign Up"
                    : "Already have an account? Sign In"}
                </button>
              </div>
            </CardFooter>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Auth;
