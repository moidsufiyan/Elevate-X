// Update the App.tsx file to use the new directory structure
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { ScrollToTopWrapper } from "@/components/ScrollToTopWrapper";

// Import pages from the new directory structure when possible
import Index from "./pages/Index";
import Mentors from "./pages/Mentors";
import MentorDetail from "./pages/MentorDetail";
import StartupDetail from "./pages/StartupDetail";
import ResourceDetail from "./pages/ResourceDetail";
import DiscussionDetail from "./pages/DiscussionDetail";
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
import Investors from "./pages/Investors";
import InvestorDetail from "./pages/InvestorDetail";

// Import new resource pages
import Documentation from "./pages/resources/Documentation";
import Guides from "./pages/resources/Guides";
import FAQs from "./pages/resources/FAQs";
import SuccessStories from "./pages/resources/SuccessStories";
import Events from "./pages/resources/Events";

function App() {
  return (
    <TooltipProvider>
      <SEO /> {/* Default SEO tags */}
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTopWrapper>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/mentor/:id" element={<MentorDetail />} />
            <Route path="/startup/:id" element={<StartupDetail />} />
            <Route path="/resource/:id" element={<ResourceDetail />} />
            <Route path="/discussion/:id" element={<DiscussionDetail />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/investor/:id" element={<InvestorDetail />} />
            <Route path="/community" element={<Community />} />
            <Route path="/communities" element={<Communities />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/startup-showcase" element={<StartupShowcase />} />
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

            {/* All Routes are now Public */}
            <Route path="/mentor/:id/book" element={<MentorBooking />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/startup-profile" element={<StartupProfile />} />
            <Route path="/mentor-profile" element={<MentorProfile />} />
            <Route path="/mentor-dashboard" element={<MentorDashboard />} />
            <Route path="/blog-management" element={<BlogManagement />} />
            <Route path="/founder-dashboard" element={<FounderDashboard />} />
            <Route
              path="/mentorship-matching"
              element={<MentorshipMatching />}
            />
            <Route path="/messaging" element={<Messaging />} />
            <Route path="/file-upload-guide" element={<FileUploadGuide />} />

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
            <Route path="/legal/data-processing" element={<DataProcessing />} />

            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ScrollToTopWrapper>
      </BrowserRouter>
    </TooltipProvider>
  );
}

export default App;
