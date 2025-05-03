
// Update the App.tsx file to use the new directory structure
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { AuthProvider } from "@/hooks/useAuth";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";

// Import pages from the new directory structure when possible
import Index from "./pages/Index";
import Mentors from "./pages/Mentors";
import MentorDetail from "./pages/MentorDetail";
import MentorBooking from "./pages/MentorBooking";
import Resources from "./pages/Resources";
import Community from "./pages/Community";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import StartupProfile from "./pages/StartupProfile";
import MentorProfile from "./pages/MentorProfile";
import MentorDashboard from "./pages/MentorDashboard";
import FounderDashboard from "./pages/FounderDashboard";
import MentorshipMatching from "./pages/MentorshipMatching";
import Communities from "./pages/Communities";
import StartupShowcase from "./pages/StartupShowcase";
import StartupDetail from "./pages/StartupDetail";
import { NotFound } from "./pages/NotFound";
import { Unauthorized } from "./pages/Unauthorized";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogManagement from "./pages/BlogManagement";
import Press from "./pages/Press";
import Sitemap from "./pages/Sitemap";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import CookiePolicy from "./pages/legal/CookiePolicy";
import DataProcessing from "./pages/legal/DataProcessing";
import FileUploadGuide from "./pages/FileUploadGuide";
import Messaging from "./pages/Messaging";

// Import new resource pages
import Documentation from "./pages/resources/Documentation";
import Guides from "./pages/resources/Guides";
import FAQs from "./pages/resources/FAQs";
import SuccessStories from "./pages/resources/SuccessStories";
import Events from "./pages/resources/Events";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <SEO /> {/* Default SEO tags */}
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Index />} />
              <Route path="/mentors" element={<Mentors />} />
              <Route path="/mentor/:id" element={<MentorDetail />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/community" element={<Community />} />
              <Route path="/communities" element={<Communities />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/startup-showcase" element={<StartupShowcase />} />
              <Route path="/startup/:id" element={<StartupDetail />} />
              <Route path="/unauthorized" element={<Unauthorized />} />

              {/* New Resources Subpages */}
              <Route
                path="/resources/documentation"
                element={<Documentation />}
              />
              <Route path="/resources/guides" element={<Guides />} />
              <Route path="/resources/faqs" element={<FAQs />} />
              <Route
                path="/resources/success-stories"
                element={<SuccessStories />}
              />
              <Route path="/resources/events" element={<Events />} />

              {/* Protected Routes */}
              <Route
                path="/mentor/:id/book"
                element={
                  <ProtectedRoute>
                    <MentorBooking />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/startup-profile"
                element={
                  <ProtectedRoute requiredRole="founder">
                    <StartupProfile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/mentor-profile"
                element={
                  <ProtectedRoute requiredRole="mentor">
                    <MentorProfile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/mentor-dashboard"
                element={
                  <ProtectedRoute requiredRole="mentor">
                    <MentorDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/blog-management"
                element={
                  <ProtectedRoute requiredRole={["admin", "mentor"]}>
                    <BlogManagement />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/founder-dashboard"
                element={
                  <ProtectedRoute requiredRole="founder">
                    <FounderDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/mentorship-matching"
                element={
                  <ProtectedRoute>
                    <MentorshipMatching />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/messaging"
                element={
                  <ProtectedRoute>
                    <Messaging />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/file-upload-guide"
                element={
                  <ProtectedRoute>
                    <FileUploadGuide />
                  </ProtectedRoute>
                }
              />

              {/* Blog Routes */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />

              {/* Page Routes */}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/press" element={<Press />} />
              <Route path="/sitemap" element={<Sitemap />} />

              {/* Legal Pages */}
              <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
              <Route
                path="/legal/terms-of-service"
                element={<TermsOfService />}
              />
              <Route path="/legal/cookie-policy" element={<CookiePolicy />} />
              <Route
                path="/legal/data-processing"
                element={<DataProcessing />}
              />

              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
