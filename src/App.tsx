import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { ScrollToTopWrapper } from "@/components/ScrollToTopWrapper";
import { Suspense, useEffect } from "react";

// ─── Pages ───────────────────────────────────────────────────────────────────
import Index from "./pages/Index";

// Auth
import Auth from "./pages/auth/Auth";
import Profile from "./pages/auth/Profile";

// Mentors
import Mentors from "./pages/mentors/Mentors";
import MentorDetail from "./pages/mentors/MentorDetail";
import MentorBooking from "./pages/mentors/MentorBooking";
import MentorProfile from "./pages/mentors/MentorProfile";
import MentorDashboard from "./pages/mentors/MentorDashboard";
import MentorshipMatching from "./pages/mentors/MentorshipMatching";

// Startups
import StartupDetail from "./pages/startups/StartupDetail";
import StartupProfile from "./pages/startups/StartupProfile";
import StartupShowcase from "./pages/startups/StartupShowcase";

// Dashboards
import FounderDashboard from "./pages/dashboards/FounderDashboard";

// Community
import Community from "./pages/community/Community";
import Communities from "./pages/community/Communities";

// Company
import About from "./pages/company/About";
import Contact from "./pages/company/Contact";
import Careers from "./pages/company/Careers";
import Press from "./pages/company/Press";

// Blog
import Blog from "./pages/blog/Blog";
import BlogPost from "./pages/blog/BlogPost";
import BlogManagement from "./pages/blog/BlogManagement";

// Resources
import Resources from "./pages/Resources";
import ResourceDetail from "./pages/ResourceDetail";
import Documentation from "./pages/resources/Documentation";
import Guides from "./pages/resources/Guides";
import FAQs from "./pages/resources/FAQs";
import SuccessStories from "./pages/resources/SuccessStories";
import Events from "./pages/resources/Events";

// Investors
import Investors from "./pages/Investors";
import InvestorDetail from "./pages/InvestorDetail";

// Legal
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import CookiePolicy from "./pages/legal/CookiePolicy";
import DataProcessing from "./pages/legal/DataProcessing";

// Misc
import DiscussionDetail from "./pages/DiscussionDetail";
import FileUploadGuide from "./pages/FileUploadGuide";
import Messaging from "./pages/Messaging";
import SessionHistory from "./pages/SessionHistory";
import Sitemap from "./pages/Sitemap";
import { NotFound } from "./pages/NotFound";
import { Unauthorized } from "./pages/Unauthorized";

// ─────────────────────────────────────────────────────────────────────────────

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
  </div>
);

function App() {
  useEffect(() => {
    // Preload the Inter variable font used across the app
    const fontLink = document.createElement("link");
    fontLink.rel = "preload";
    fontLink.href = "/fonts/inter-var.woff2";
    fontLink.as = "font";
    fontLink.type = "font/woff2";
    fontLink.crossOrigin = "anonymous";
    document.head.appendChild(fontLink);
  }, []);

  return (
    <TooltipProvider>
      <SEO />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTopWrapper>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* ── Public ── */}
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/unauthorized" element={<Unauthorized />} />

              {/* ── Mentors ── */}
              <Route path="/mentors" element={<Mentors />} />
              <Route path="/mentor/:id" element={<MentorDetail />} />
              <Route path="/mentor/:id/book" element={<MentorBooking />} />
              <Route path="/mentor-profile" element={<MentorProfile />} />
              <Route path="/mentor-dashboard" element={<MentorDashboard />} />
              <Route path="/mentorship-matching" element={<MentorshipMatching />} />

              {/* ── Startups ── */}
              <Route path="/startup/:id" element={<StartupDetail />} />
              <Route path="/startup-profile" element={<StartupProfile />} />
              <Route path="/startup-showcase" element={<StartupShowcase />} />

              {/* ── Dashboards ── */}
              <Route path="/founder-dashboard" element={<FounderDashboard />} />
              <Route path="/profile" element={<Profile />} />

              {/* ── Community ── */}
              <Route path="/community" element={<Community />} />
              <Route path="/communities" element={<Communities />} />
              <Route path="/discussion/:id" element={<DiscussionDetail />} />

              {/* ── Resources ── */}
              <Route path="/resources" element={<Resources />} />
              <Route path="/resource/:id" element={<ResourceDetail />} />
              <Route path="/resources/documentation" element={<Documentation />} />
              <Route path="/resources/guides" element={<Guides />} />
              <Route path="/resources/faqs" element={<FAQs />} />
              <Route path="/resources/success-stories" element={<SuccessStories />} />
              <Route path="/resources/events" element={<Events />} />

              {/* ── Investors ── */}
              <Route path="/investors" element={<Investors />} />
              <Route path="/investor/:id" element={<InvestorDetail />} />

              {/* ── Blog ── */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/blog-management" element={<BlogManagement />} />

              {/* ── Company ── */}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/press" element={<Press />} />

              {/* ── Misc ── */}
              <Route path="/messaging" element={<Messaging />} />
              <Route path="/file-upload-guide" element={<FileUploadGuide />} />
              <Route path="/session-history" element={<SessionHistory />} />
              <Route path="/sitemap" element={<Sitemap />} />

              {/* ── Legal ── */}
              <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/legal/terms-of-service" element={<TermsOfService />} />
              <Route path="/legal/cookie-policy" element={<CookiePolicy />} />
              <Route path="/legal/data-processing" element={<DataProcessing />} />

              {/* ── Catch-all ── */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ScrollToTopWrapper>
      </BrowserRouter>
    </TooltipProvider>
  );
}

export default App;
