import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { ScrollToTopWrapper } from "@/components/ScrollToTopWrapper";
import { Suspense, useEffect, lazy } from "react";
import { ProtectedRoute } from "@/components/ProtectedRoute";

// ─── Pages ───────────────────────────────────────────────────────────────────
const Index = lazy(() => import("./pages/Index"));

// Auth
const Auth = lazy(() => import("./pages/auth/Auth"));
const Profile = lazy(() => import("./pages/auth/Profile"));

// Mentors
const Mentors = lazy(() => import("./pages/mentors/Mentors"));
const MentorDetail = lazy(() => import("./pages/mentors/MentorDetail"));
const MentorBooking = lazy(() => import("./pages/mentors/MentorBooking"));
const MentorProfile = lazy(() => import("./pages/mentors/MentorProfile"));
const MentorDashboard = lazy(() => import("./pages/mentors/MentorDashboard"));
const MentorshipMatching = lazy(() => import("./pages/mentors/MentorshipMatching"));

// Startups
const StartupDetail = lazy(() => import("./pages/startups/StartupDetail"));
const StartupProfile = lazy(() => import("./pages/startups/StartupProfile"));
const StartupShowcase = lazy(() => import("./pages/startups/StartupShowcase"));

// Dashboards
const FounderDashboard = lazy(() => import("./pages/dashboards/FounderDashboard"));

// Community
const Community = lazy(() => import("./pages/community/Community"));
const Communities = lazy(() => import("./pages/community/Communities"));

// Company
const About = lazy(() => import("./pages/company/About"));
const Contact = lazy(() => import("./pages/company/Contact"));
const Careers = lazy(() => import("./pages/company/Careers"));
const Press = lazy(() => import("./pages/company/Press"));

// Blog
const Blog = lazy(() => import("./pages/blog/Blog"));
const BlogPost = lazy(() => import("./pages/blog/BlogPost"));
const BlogManagement = lazy(() => import("./pages/blog/BlogManagement"));

// Resources
const Resources = lazy(() => import("./pages/Resources"));
const ResourceDetail = lazy(() => import("./pages/ResourceDetail"));
const Documentation = lazy(() => import("./pages/resources/Documentation"));
const Guides = lazy(() => import("./pages/resources/Guides"));
const FAQs = lazy(() => import("./pages/resources/FAQs"));
const SuccessStories = lazy(() => import("./pages/resources/SuccessStories"));
const Events = lazy(() => import("./pages/resources/Events"));

// Investors
const Investors = lazy(() => import("./pages/Investors"));
const InvestorDetail = lazy(() => import("./pages/InvestorDetail"));

// Legal
const PrivacyPolicy = lazy(() => import("./pages/legal/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/legal/TermsOfService"));
const CookiePolicy = lazy(() => import("./pages/legal/CookiePolicy"));
const DataProcessing = lazy(() => import("./pages/legal/DataProcessing"));

// Misc
const DiscussionDetail = lazy(() => import("./pages/DiscussionDetail"));
const FileUploadGuide = lazy(() => import("./pages/FileUploadGuide"));
const Messaging = lazy(() => import("./pages/Messaging"));
const SessionHistory = lazy(() => import("./pages/SessionHistory"));
const Sitemap = lazy(() => import("./pages/Sitemap"));
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
              <Route path="/mentor/:id/book" element={
                <ProtectedRoute>
                  <MentorBooking />
                </ProtectedRoute>
              } />
              <Route path="/mentor-profile" element={
                <ProtectedRoute allowedRoles={["mentor"]}>
                  <MentorProfile />
                </ProtectedRoute>
              } />
              <Route path="/mentor-dashboard" element={
                <ProtectedRoute allowedRoles={["mentor"]}>
                  <MentorDashboard />
                </ProtectedRoute>
              } />
              <Route path="/mentorship-matching" element={<MentorshipMatching />} />

              {/* ── Startups ── */}
              <Route path="/startup/:id" element={<StartupDetail />} />
              <Route path="/startup-profile" element={
                <ProtectedRoute allowedRoles={["founder"]}>
                  <StartupProfile />
                </ProtectedRoute>
              } />
              <Route path="/startup-showcase" element={<StartupShowcase />} />

              {/* ── Dashboards ── */}
              <Route path="/founder-dashboard" element={
                <ProtectedRoute allowedRoles={["founder"]}>
                  <FounderDashboard />
                </ProtectedRoute>
              } />
              <Route path="/profile" element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } />

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
              <Route path="/blog-management" element={
                <ProtectedRoute>
                  <BlogManagement />
                </ProtectedRoute>
              } />

              {/* ── Company ── */}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/press" element={<Press />} />

              {/* ── Misc ── */}
              <Route path="/messaging" element={
                <ProtectedRoute>
                  <Messaging />
                </ProtectedRoute>
              } />
              <Route path="/file-upload-guide" element={<FileUploadGuide />} />
              <Route path="/session-history" element={
                <ProtectedRoute>
                  <SessionHistory />
                </ProtectedRoute>
              } />
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
