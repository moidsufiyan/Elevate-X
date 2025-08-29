import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-8 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-stargaze-900 dark:text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-stargaze-600 dark:text-stargaze-300 mb-2">
              Please read these terms carefully before using ElevateX platform
              and services.
            </p>
            <p className="text-sm text-stargaze-500 dark:text-stargaze-400">
              Last updated: December 15, 2024 | Effective Date: January 1, 2024
            </p>
          </AnimatedSection>

          <AnimatedSection
            animation="fade-up"
            delay={100}
            className="bg-white dark:bg-stargaze-900 rounded-xl shadow-subtle p-8 max-w-4xl mx-auto"
          >
            <div className="prose dark:prose-invert max-w-none">
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Agreement Overview
                </h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm mb-0">
                  By using ElevateX, you agree to these terms. We provide a
                  platform connecting entrepreneurs, mentors, and investors
                  across India. Please read carefully as these terms govern your
                  use of our services.
                </p>
              </div>

              <p className="text-lg">
                These Terms of Service ("Terms", "Agreement") govern your use of
                the ElevateX platform and services ("Platform", "Service")
                operated by ElevateX Private Limited ("Company", "we", "us",
                "our").
              </p>

              <p>
                <strong>Company Details:</strong>
                <br />
                ElevateX Private Limited
                <br />
                Registered Office: Bangalore, Karnataka, India
                <br />
                CIN: [Company Identification Number]
                <br />
                Email: legal@elevatex.in
              </p>

              <p>
                Your access to and use of the Service is conditioned upon your
                acceptance of and compliance with these Terms. These Terms apply
                to all visitors, users, mentors, entrepreneurs, investors, and
                others who access or use the Service.
              </p>

              <p>
                <strong>
                  By accessing or using our Service, you agree to be bound by
                  these Terms.
                </strong>{" "}
                If you disagree with any part of these terms, you may not access
                the Service.
              </p>

              <h2>1. Acceptance and Eligibility</h2>

              <h3>1.1 Age Requirement</h3>
              <p>
                You must be at least 18 years old to use ElevateX. By using our
                platform, you represent that you are of legal age to form a
                binding contract under Indian law.
              </p>

              <h3>1.2 Business Use</h3>
              <p>
                ElevateX is designed for business and professional use. You may
                use our platform for:
              </p>
              <ul>
                <li>Finding mentorship and guidance for your business</li>
                <li>Offering mentorship services to entrepreneurs</li>
                <li>Connecting with investors and funding opportunities</li>
                <li>Accessing business resources and educational content</li>
                <li>
                  Participating in entrepreneurship events and community
                  discussions
                </li>
              </ul>

              <h2>2. Account Registration and Security</h2>

              <h3>2.1 Account Creation</h3>
              <p>
                To access certain features of our Service, you must create an
                account. When creating an account, you must:
              </p>
              <ul>
                <li>Provide accurate, complete, and current information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Choose a secure password and keep it confidential</li>
                <li>
                  Accept responsibility for all activities under your account
                </li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>

              <h3>2.2 Profile Information</h3>
              <p>
                You agree to provide truthful information in your profile,
                including:
              </p>
              <ul>
                <li>Professional background and experience</li>
                <li>Business information and current status</li>
                <li>Skills, expertise, and areas of interest</li>
                <li>Contact information for networking purposes</li>
              </ul>

              <h3>2.3 Verification</h3>
              <p>
                We may verify your identity, business credentials, or
                professional background. Providing false information may result
                in account suspension or termination.
              </p>

              <h2>3. Platform Services</h2>

              <h3>3.1 Service Description</h3>
              <p>
                ElevateX provides a digital platform that connects
                entrepreneurs, mentors, and investors within the Indian startup
                ecosystem. Our services include:
              </p>
              <ul>
                <li>
                  Mentor-entrepreneur matching based on industry and expertise
                </li>
                <li>
                  Access to startup resources, guides, and educational content
                </li>
                <li>
                  Networking opportunities through events and community forums
                </li>
                <li>Investor connection and funding opportunity listings</li>
                <li>Business tools and templates for startup development</li>
              </ul>

              <h3>3.2 Service Availability</h3>
              <p>
                We strive to provide continuous service availability, but we do
                not guarantee uninterrupted access. We may temporarily suspend
                services for maintenance, updates, or technical issues.
              </p>

              <h2>4. User Conduct and Responsibilities</h2>

              <h3>4.1 Acceptable Use</h3>
              <p>
                You agree to use ElevateX for legitimate business and
                professional purposes only. You will not:
              </p>
              <ul>
                <li>Post false, misleading, or fraudulent information</li>
                <li>Harass, abuse, or threaten other users</li>
                <li>
                  Share confidential information without proper authorization
                </li>
                <li>Use the platform for illegal activities or spam</li>
                <li>Attempt to hack, disrupt, or damage our systems</li>
                <li>Create multiple accounts to circumvent restrictions</li>
                <li>Use automated tools to scrape or collect user data</li>
              </ul>

              <h3>4.2 Professional Conduct</h3>
              <p>
                As a professional networking platform, we expect all users to
                maintain:
              </p>
              <ul>
                <li>Respectful and courteous communication</li>
                <li>Honest representation of skills and experience</li>
                <li>Confidentiality of sensitive business information</li>
                <li>Compliance with applicable laws and regulations</li>
              </ul>

              <h2>5. Intellectual Property Rights</h2>

              <h3>5.1 Platform Content</h3>
              <p>
                The ElevateX platform, including its design, features, content,
                trademarks, and functionality, is owned by ElevateX Private
                Limited and protected by Indian and international copyright,
                trademark, and other intellectual property laws.
              </p>

              <h3>5.2 User Content</h3>
              <p>
                You retain ownership of content you create and share on ElevateX
                ("User Content"), including:
              </p>
              <ul>
                <li>Profile information and business descriptions</li>
                <li>Posts, comments, and forum discussions</li>
                <li>Documents, presentations, and media files</li>
                <li>Business plans and pitch materials</li>
              </ul>

              <h3>5.3 Content License</h3>
              <p>
                By posting User Content, you grant ElevateX a non-exclusive,
                worldwide, royalty-free license to:
              </p>
              <ul>
                <li>Display your content on the platform</li>
                <li>
                  Enable other users to view and interact with your content
                </li>
                <li>Use your content for platform promotion and marketing</li>
                <li>Create aggregated, anonymized data for analytics</li>
              </ul>

              <h2>6. Privacy and Data Protection</h2>

              <p>
                Your privacy is important to us. Our collection, use, and
                protection of your personal information is governed by our
                Privacy Policy, which is incorporated into these Terms by
                reference.
              </p>

              <h2>7. Payment Terms</h2>

              <h3>7.1 Free and Paid Services</h3>
              <p>
                ElevateX offers both free and premium paid services. Paid
                features may include:
              </p>
              <ul>
                <li>Advanced mentor matching and priority connections</li>
                <li>Premium business resources and templates</li>
                <li>Enhanced profile visibility and features</li>
                <li>Exclusive events and masterclasses</li>
              </ul>

              <h3>7.2 Payment Processing</h3>
              <p>
                Payments are processed through secure Indian payment gateways
                (Razorpay, PayU, etc.). All prices are in Indian Rupees (INR)
                and include applicable taxes.
              </p>

              <h2>8. Third-Party Services and Links</h2>

              <p>
                ElevateX may contain links to third-party websites, services, or
                resources. We do not endorse or control these external services
                and are not responsible for their content, privacy practices, or
                terms of use.
              </p>

              <h2>9. Account Termination</h2>

              <h3>9.1 Termination by You</h3>
              <p>
                You may terminate your account at any time by contacting our
                support team or using the account deletion feature in your
                profile settings.
              </p>

              <h3>9.2 Termination by Us</h3>
              <p>We may suspend or terminate your account if you:</p>
              <ul>
                <li>Violate these Terms or our community guidelines</li>
                <li>Engage in fraudulent or illegal activities</li>
                <li>Provide false information or impersonate others</li>
                <li>Fail to pay for premium services</li>
              </ul>

              <h2>10. Limitation of Liability</h2>

              <p>
                To the maximum extent permitted by Indian law, ElevateX Private
                Limited shall not be liable for:
              </p>
              <ul>
                <li>Indirect, incidental, special, or consequential damages</li>
                <li>
                  Loss of profits, data, business opportunities, or goodwill
                </li>
                <li>Damages resulting from third-party actions or content</li>
                <li>Service interruptions or technical failures</li>
                <li>
                  Actions or omissions of mentors, investors, or other users
                </li>
              </ul>

              <p>
                Our total liability for any claim shall not exceed the amount
                you paid for our services in the 12 months preceding the claim.
              </p>

              <h2>11. Dispute Resolution</h2>

              <p>
                Any disputes arising from these Terms or your use of ElevateX
                will be resolved through:
              </p>
              <ul>
                <li>First, good faith negotiation between the parties</li>
                <li>
                  If unresolved, binding arbitration under Indian Arbitration
                  Act
                </li>
                <li>Arbitration to be conducted in Bangalore, Karnataka</li>
                <li>Governing law: Laws of India</li>
              </ul>

              <h2>12. Changes to Terms</h2>

              <p>
                We may update these Terms periodically. When we make significant
                changes:
              </p>
              <ul>
                <li>We'll notify you via email or platform notification</li>
                <li>Changes become effective 30 days after notification</li>
                <li>Continued use constitutes acceptance of new terms</li>
                <li>
                  You may terminate your account if you disagree with changes
                </li>
              </ul>

              <h2>13. Contact Information</h2>

              <p>
                For questions about these Terms of Service, please contact us:
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mt-4">
                <p className="mb-2">
                  <strong>ElevateX Private Limited</strong>
                </p>
                <p className="mb-2">Legal Department</p>
                <p className="mb-2">
                  Address: [Office Address], Bangalore, Karnataka 560001, India
                </p>
                <p className="mb-2">Email: legal@elevatex.in</p>
                <p className="mb-2">Phone: +91-80-XXXX-XXXX</p>
                <p className="mb-0">
                  Business Hours: Monday-Friday, 9:00 AM - 6:00 PM IST
                </p>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mt-8 pt-4 border-t">
                These Terms of Service are governed by and construed in
                accordance with the laws of India. Any legal action or
                proceeding arising under these Terms will be brought exclusively
                in the courts of Bangalore, Karnataka, India.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
