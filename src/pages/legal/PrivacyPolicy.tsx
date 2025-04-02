
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-8 max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-stargaze-900 dark:text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-stargaze-600 dark:text-stargaze-300">
              Last updated: January 1, 2023
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={100} className="bg-white dark:bg-stargaze-900 rounded-xl shadow-subtle p-8 max-w-4xl mx-auto">
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Startup Stargaze ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Startup Stargaze.
              </p>
              
              <h2>Information We Collect</h2>
              
              <p>
                We collect information about you in various ways when you use our website or services.
              </p>
              
              <h3>Information You Provide to Us</h3>
              
              <p>
                We collect information you provide directly to us, such as when you create an account, fill out a form, participate in interactive features, apply for a job, communicate with us via third-party social media sites, request customer support, or otherwise communicate with us.
              </p>
              
              <p>
                The types of information we may collect include your name, email address, phone number, company information, job title, biography, professional experience, expertise, social media profiles, profile picture, and any other information you choose to provide.
              </p>
              
              <h3>Information We Collect Automatically</h3>
              
              <p>
                When you access or use our services, we may automatically collect information about you, including:
              </p>
              
              <ul>
                <li>
                  <strong>Log Information:</strong> We collect log information about your use of our services, including your browser type, access times, pages viewed, your IP address, and the page you visited before navigating to our services.
                </li>
                <li>
                  <strong>Device Information:</strong> We collect information about the computer or mobile device you use to access our services, including the hardware model, operating system and version, unique device identifiers, and mobile network information.
                </li>
                <li>
                  <strong>Usage Information:</strong> We collect information about your usage of our services, such as the actions you take and the features you engage with.
                </li>
                <li>
                  <strong>Location Information:</strong> We may collect information about your location when you access our services, including through your IP address or device's GPS if you enable location services.
                </li>
              </ul>
              
              <h3>Information Collected by Cookies and Other Tracking Technologies</h3>
              
              <p>
                We and our service providers use various technologies to collect information, including cookies and web beacons. Cookies are small data files stored on your hard drive or in device memory that help us improve our services and your experience, see which areas and features of our services are popular, and count visits. Web beacons are electronic images that may be used in our services or emails and help deliver cookies, count visits, and understand usage and campaign effectiveness.
              </p>
              
              <h2>How We Use Your Information</h2>
              
              <p>
                We may use information about you for various purposes, including to:
              </p>
              
              <ul>
                <li>Provide, maintain, and improve our services;</li>
                <li>Match mentors and startups based on expertise, industry, and goals;</li>
                <li>Process and complete transactions;</li>
                <li>Send you technical notices, updates, security alerts, and administrative messages;</li>
                <li>Respond to your comments, questions, and requests;</li>
                <li>Provide customer service;</li>
                <li>Communicate with you about products, services, offers, and events, and provide other news or information about us and our select partners;</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our services;</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities and protect the rights and property of Startup Stargaze and others;</li>
                <li>Personalize and improve the services and provide content or features that match user profiles or interests;</li>
                <li>Facilitate contests, sweepstakes, and promotions and process and deliver entries and rewards;</li>
                <li>Link or combine with information we get from others to help understand your needs and provide you with better service; and</li>
                <li>Carry out any other purpose described to you at the time the information was collected.</li>
              </ul>
              
              <h2>Sharing of Information</h2>
              
              <p>
                We may share information about you as follows or as otherwise described in this Privacy Policy:
              </p>
              
              <ul>
                <li>With mentors or startups as necessary to facilitate the mentorship relationship;</li>
                <li>With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf;</li>
                <li>In response to a request for information if we believe disclosure is in accordance with, or required by, any applicable law or legal process;</li>
                <li>If we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property, and safety of Startup Stargaze or others;</li>
                <li>In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company;</li>
                <li>Between and among Startup Stargaze and our current and future parents, affiliates, subsidiaries, and other companies under common control and ownership; and</li>
                <li>With your consent or at your direction.</li>
              </ul>

              <h2>Contact Us</h2>
              
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              
              <p>
                Startup Stargaze<br />
                123 Startup Avenue<br />
                San Francisco, CA 94107<br />
                Email: privacy@startupstargaze.com
              </p>
            </div>
          </AnimatedSection>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
