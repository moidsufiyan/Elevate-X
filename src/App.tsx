
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import MentorshipMatching from "./pages/MentorshipMatching";
import Communities from "./pages/Communities";
import StartupShowcase from "./pages/StartupShowcase";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Press from "./pages/Press";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import CookiePolicy from "./pages/legal/CookiePolicy";
import DataProcessing from "./pages/legal/DataProcessing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/mentor/:id" element={<MentorDetail />} />
          <Route path="/mentor/:id/book" element={<MentorBooking />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/community" element={<Community />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/startup-profile" element={<StartupProfile />} />
          <Route path="/mentor-profile" element={<MentorProfile />} />
          <Route path="/mentor-dashboard" element={<MentorDashboard />} />
          <Route path="/mentorship-matching" element={<MentorshipMatching />} />
          <Route path="/startup-showcase" element={<StartupShowcase />} />
          <Route path="/auth" element={<Auth />} />
          
          {/* New Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/press" element={<Press />} />
          
          {/* Legal Pages */}
          <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/legal/terms-of-service" element={<TermsOfService />} />
          <Route path="/legal/cookie-policy" element={<CookiePolicy />} />
          <Route path="/legal/data-processing" element={<DataProcessing />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
