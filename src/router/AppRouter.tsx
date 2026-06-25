import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";

// Main Pages
import Index from "../pages/Index";

// Mentor Pages
import Mentors from "../pages/mentors/Mentors";
import MentorDetail from "../pages/mentors/MentorDetail";
import MentorBooking from "../pages/mentors/MentorBooking";
import MentorProfile from "../pages/mentors/MentorProfile";
import MentorDashboard from "../pages/mentors/MentorDashboard";
import MentorMatching from "../pages/mentors/MentorMatching";
import MentorshipMatching from "../pages/mentors/MentorshipMatching";

// Startup Pages
import StartupDetail from "../pages/startups/StartupDetail";
import StartupProfile from "../pages/startups/StartupProfile";
import StartupShowcase from "../pages/startups/StartupShowcase";

// Community Pages
import Community from "../pages/community/Community";
import Communities from "../pages/community/Communities";

// Blog Pages
import Blog from "../pages/blog/Blog";
import BlogPost from "../pages/blog/BlogPost";
import BlogManagement from "../pages/blog/BlogManagement";

// Auth Pages
import Auth from "../pages/auth/Auth";
import Profile from "../pages/auth/Profile";

// Dashboard Pages
import FounderDashboard from "../pages/dashboards/FounderDashboard";

// Company Pages
import About from "../pages/company/About";
import Contact from "../pages/company/Contact";
import Careers from "../pages/company/Careers";
import Press from "../pages/company/Press";

// Resource Pages
import Resources from "../pages/Resources";
import ResourceDetail from "../pages/ResourceDetail";
import Documentation from "../pages/resources/Documentation";
import Guides from "../pages/resources/Guides";
import FAQs from "../pages/resources/FAQs";
import SuccessStories from "../pages/resources/SuccessStories";
import Events from "../pages/resources/Events";

// Other Pages
import Investors from "../pages/Investors";
import InvestorDetail from "../pages/InvestorDetail";
import DiscussionDetail from "../pages/DiscussionDetail";
import FileUploadGuide from "../pages/FileUploadGuide";
import Messaging from "../pages/Messaging";
import SessionHistory from "../pages/SessionHistory";
import Sitemap from "../pages/Sitemap";

// Legal Pages
import PrivacyPolicy from "../pages/legal/PrivacyPolicy";
import TermsOfService from "../pages/legal/TermsOfService";
import CookiePolicy from "../pages/legal/CookiePolicy";
import DataProcessing from "../pages/legal/DataProcessing";

// Error Pages
import { NotFound } from "../pages/NotFound";
import { Unauthorized } from "../pages/Unauthorized";

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
  </div>
);

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          
          {/* Mentor Routes */}
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/mentor/:id" element={<MentorDetail />} />
          <Route path="/mentor/:id/book" element={<MentorBooking />} />
          <Route path="/mentor-profile" element={<MentorProfile />} />
          <Route path="/mentor-dashboard" element={<MentorDashboard />} />
          <Route path="/mentor-matching" element={<MentorMatching />} />
          <Route path="/mentorship-matching" element={<MentorshipMatching />} />
          
          {/* Startup Routes */}
          <Route path="/startup/:id" element={<StartupDetail />} />
          <Route path="/startup-profile" element={<StartupProfile />} />
          <Route path="/startup-showcase" element={<StartupShowcase />} />
          
          {/* Community Routes */}
          <Route path="/community" element={<Community />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/discussion/:id" element={<DiscussionDetail />} />
          
          {/* Blog Routes */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/blog-management" element={<BlogManagement />} />
          
          {/* Auth Routes */}
          <Route path="/auth" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
          
          {/* Dashboard Routes */}
          <Route path="/founder-dashboard" element={<FounderDashboard />} />
          
          {/* Resource Routes */}
          <Route path="/resources" element={<Resources />} />
          <Route path="/resource/:id" element={<ResourceDetail />} />
          <Route path="/resources/documentation" element={<Documentation />} />
          <Route path="/resources/guides" element={<Guides />} />
          <Route path="/resources/faqs" element={<FAQs />} />
          <Route path="/resources/success-stories" element={<SuccessStories />} />
          <Route path="/resources/events" element={<Events />} />
          
          {/* Investor Routes */}
          <Route path="/investors" element={<Investors />} />
          <Route path="/investor/:id" element={<InvestorDetail />} />
          
          {/* Company Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press" element={<Press />} />
          
          {/* Other Routes */}
          <Route path="/messaging" element={<Messaging />} />
          <Route path="/session-history" element={<SessionHistory />} />
          <Route path="/file-upload-guide" element={<FileUploadGuide />} />
          <Route path="/sitemap" element={<Sitemap />} />
          
          {/* Legal Routes */}
          <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/legal/terms-of-service" element={<TermsOfService />} />
          <Route path="/legal/cookie-policy" element={<CookiePolicy />} />
          <Route path="/legal/data-processing" element={<DataProcessing />} />
          
          {/* Error Routes */}
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

