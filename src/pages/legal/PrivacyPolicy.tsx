
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-8 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-stargaze-900 dark:text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-stargaze-600 dark:text-stargaze-300 mb-2">
              Your privacy is important to us. This policy explains how ElevateX collects, uses, and protects your information.
            </p>
            <p className="text-sm text-stargaze-500 dark:text-stargaze-400">
              Last updated: December 15, 2024 | Effective Date: January 1, 2024
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={100} className="bg-white dark:bg-stargaze-900 rounded-xl shadow-subtle p-8 max-w-4xl mx-auto">
            <div className="prose dark:prose-invert max-w-none">
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Quick Summary</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm mb-0">
                  ElevateX is committed to protecting your privacy. We collect information to provide better mentorship matching, 
                  improve our platform, and connect entrepreneurs across India. We never sell your personal data to third parties.
                </p>
              </div>

              <p className="text-lg">
                ElevateX Private Limited ("we," "our," "us," or "ElevateX") is committed to protecting your privacy. 
                This Privacy Policy explains how your personal information is collected, used, disclosed, and protected 
                when you use our entrepreneurship platform and related services.
              </p>

              <p>
                <strong>Company Details:</strong><br/>
                ElevateX Private Limited<br/>
                Registered Office: Bangalore, Karnataka, India<br/>
                CIN: [Company Identification Number]<br/>
                Email: privacy@elevatex.in
              </p>
              
              <h2>1. Information We Collect</h2>
              
              <p>
                We collect different types of information to provide and improve our services for India's entrepreneurial community.
              </p>
              
              <h3>1.1 Information You Provide Directly</h3>
              
              <p>
                When you register, create profiles, or interact with our platform, you may provide:
              </p>
              
              <ul>
                <li><strong>Account Information:</strong> Name, email address, phone number, password, date of birth</li>
                <li><strong>Profile Information:</strong> Professional bio, skills, expertise areas, industry experience, educational background</li>
                <li><strong>Business Information:</strong> Company name, designation, business stage, funding status, revenue information</li>
                <li><strong>Communication Data:</strong> Messages sent through our platform, support requests, feedback</li>
                <li><strong>Payment Information:</strong> Billing details for premium services (processed through secure payment gateways)</li>
                <li><strong>Identity Verification:</strong> Government-issued ID, PAN card, GST registration (for business verification)</li>
                <li><strong>Content:</strong> Photos, documents, presentations, pitch decks, business plans you upload</li>
              </ul>
              
              <h3>1.2 Information We Collect Automatically</h3>
              
              <p>
                When you use ElevateX, we automatically collect certain information:
              </p>
              
              <ul>
                <li><strong>Device Information:</strong> IP address, browser type, device type, operating system, screen resolution</li>
                <li><strong>Usage Data:</strong> Pages visited, features used, time spent on platform, click patterns, search queries</li>
                <li><strong>Location Data:</strong> General location based on IP address (city/state level, not precise GPS)</li>
                <li><strong>Technical Data:</strong> Log files, error reports, performance metrics</li>
                <li><strong>Cookies & Tracking:</strong> Session data, preferences, authentication tokens</li>
              </ul>
              
              <h3>1.3 Information from Third Parties</h3>
              
              <p>
                We may receive information from:
              </p>
              
              <ul>
                <li><strong>Social Media:</strong> Profile information when you connect LinkedIn, Twitter accounts</li>
                <li><strong>Partners:</strong> Information from startup accelerators, incubators, educational institutions</li>
                <li><strong>Public Sources:</strong> Publicly available information about your company or professional achievements</li>
                <li><strong>Referrals:</strong> Information provided by users who refer you to our platform</li>
              </ul>
              
              <h2>2. How We Use Your Information</h2>
              
              <p>
                We use your information to provide, improve, and personalize our services. Specific purposes include:
              </p>
              
              <h3>2.1 Core Platform Services</h3>
              <ul>
                <li><strong>Mentorship Matching:</strong> Connect entrepreneurs with relevant mentors based on industry, expertise, and goals</li>
                <li><strong>Profile Management:</strong> Display your information to potential mentors, investors, or collaborators</li>
                <li><strong>Communication:</strong> Enable messaging, video calls, and collaboration between users</li>
                <li><strong>Event Management:</strong> Register you for events, workshops, and networking sessions</li>
                <li><strong>Resource Sharing:</strong> Recommend relevant content, tools, and opportunities</li>
              </ul>

              <h3>2.2 Business Operations</h3>
              <ul>
                <li><strong>Account Management:</strong> Create and maintain your account, authenticate access</li>
                <li><strong>Payment Processing:</strong> Handle transactions for premium services</li>
                <li><strong>Customer Support:</strong> Respond to inquiries and provide assistance</li>
                <li><strong>Security:</strong> Detect fraud, prevent abuse, and ensure platform safety</li>
                <li><strong>Legal Compliance:</strong> Meet regulatory requirements and legal obligations</li>
              </ul>

              <h3>2.3 Platform Improvement</h3>
              <ul>
                <li><strong>Analytics:</strong> Analyze usage patterns to improve user experience</li>
                <li><strong>Personalization:</strong> Customize content and recommendations</li>
                <li><strong>Research:</strong> Conduct studies to enhance our services (anonymized data only)</li>
                <li><strong>Marketing:</strong> Send relevant updates, newsletters, and promotional content</li>
              </ul>
              
              <h2>3. Information Sharing and Disclosure</h2>
              
              <p>
                We respect your privacy and limit information sharing to specific circumstances:
              </p>

              <h3>3.1 With Other Users</h3>
              <ul>
                <li><strong>Profile Information:</strong> Your public profile is visible to other users for networking</li>
                <li><strong>Mentorship Connections:</strong> Relevant information shared to facilitate mentor-mentee relationships</li>
                <li><strong>Event Participation:</strong> Your participation in events may be visible to other attendees</li>
                <li><strong>Community Features:</strong> Posts, comments, and discussions you make in public forums</li>
              </ul>

              <h3>3.2 With Service Providers</h3>
              <ul>
                <li><strong>Technology Partners:</strong> Cloud hosting, analytics, and communication tools</li>
                <li><strong>Payment Processors:</strong> Razorpay, PayU, and other payment gateways (India-based)</li>
                <li><strong>Marketing Services:</strong> Email delivery, SMS services, and advertising platforms</li>
                <li><strong>Support Tools:</strong> Customer service and helpdesk platforms</li>
              </ul>

              <h3>3.3 Legal and Safety Requirements</h3>
              <ul>
                <li><strong>Legal Compliance:</strong> When required by Indian law, court orders, or regulatory authorities</li>
                <li><strong>Safety Protection:</strong> To protect users from harm, fraud, or illegal activities</li>
                <li><strong>Business Transactions:</strong> In case of merger, acquisition, or sale of assets</li>
                <li><strong>Consent:</strong> With your explicit permission for specific purposes</li>
              </ul>

              <h2>4. Data Security and Protection</h2>
              
              <p>
                We implement comprehensive security measures to protect your information:
              </p>

              <ul>
                <li><strong>Encryption:</strong> All data transmission uses SSL/TLS encryption</li>
                <li><strong>Access Controls:</strong> Limited employee access on a need-to-know basis</li>
                <li><strong>Data Centers:</strong> Information stored in secure, certified data centers in India</li>
                <li><strong>Regular Audits:</strong> Periodic security assessments and vulnerability testing</li>
                <li><strong>Incident Response:</strong> Procedures for handling any security breaches</li>
              </ul>

              <h2>5. Your Rights and Choices</h2>
              
              <p>
                Under Indian data protection laws, you have several rights regarding your personal information:
              </p>

              <h3>5.1 Access and Correction</h3>
              <ul>
                <li>View and update your profile information anytime</li>
                <li>Request a copy of all data we have about you</li>
                <li>Correct any inaccurate or outdated information</li>
              </ul>

              <h3>5.2 Data Control</h3>
              <ul>
                <li>Delete your account and associated data</li>
                <li>Opt-out of marketing communications</li>
                <li>Control visibility of your profile information</li>
                <li>Export your data in a portable format</li>
              </ul>

              <h3>5.3 Communication Preferences</h3>
              <ul>
                <li>Unsubscribe from newsletters and promotional emails</li>
                <li>Adjust notification settings for platform updates</li>
                <li>Control SMS and WhatsApp communications</li>
              </ul>

              <h2>6. Data Retention</h2>
              
              <p>
                We retain your information for as long as necessary to provide services and comply with legal obligations:
              </p>

              <ul>
                <li><strong>Active Accounts:</strong> Information retained while your account is active</li>
                <li><strong>Deleted Accounts:</strong> Most data deleted within 30 days of account deletion</li>
                <li><strong>Legal Requirements:</strong> Some data retained longer for compliance (tax records, transaction history)</li>
                <li><strong>Anonymized Data:</strong> Aggregated, non-personal data may be retained for analytics</li>
              </ul>

              <h2>7. International Data Transfers</h2>
              
              <p>
                Your data is primarily stored and processed in India. If we need to transfer data internationally:
              </p>

              <ul>
                <li>We ensure adequate protection through appropriate safeguards</li>
                <li>We comply with Indian data localization requirements</li>
                <li>We inform you of any significant changes to data storage locations</li>
              </ul>

              <h2>8. Children's Privacy</h2>
              
              <p>
                ElevateX is intended for users 18 years and older. We do not knowingly collect information from children under 18. 
                If we discover we have collected information from a child under 18, we will delete it immediately.
              </p>

              <h2>9. Changes to This Policy</h2>
              
              <p>
                We may update this Privacy Policy periodically. When we make changes:
              </p>

              <ul>
                <li>We'll notify you via email or platform notification</li>
                <li>We'll post the updated policy on our website</li>
                <li>Significant changes will require your renewed consent</li>
                <li>You can always access the current version at elevatex.in/privacy</li>
              </ul>

              <h2>10. Contact Information</h2>
              
              <p>
                For any privacy-related questions, concerns, or requests, please contact us:
              </p>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mt-4">
                <p className="mb-2"><strong>ElevateX Private Limited</strong></p>
                <p className="mb-2">Data Protection Officer</p>
                <p className="mb-2">Address: [Office Address], Bangalore, Karnataka 560001, India</p>
                <p className="mb-2">Email: privacy@elevatex.in</p>
                <p className="mb-2">Phone: +91-80-XXXX-XXXX</p>
                <p className="mb-0">Response Time: We aim to respond within 72 hours</p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mt-8">
                <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Grievance Officer</h3>
                <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                  As required by Indian IT Rules, you can also contact our Grievance Officer for any complaints or concerns:<br/>
                  <strong>Email:</strong> grievance@elevatex.in<br/>
                  <strong>Address:</strong> Same as above<br/>
                  <strong>Response Time:</strong> 15 days as per IT Rules 2021
                </p>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mt-8 pt-4 border-t">
                This Privacy Policy is governed by Indian law and complies with the Information Technology Act, 2000, 
                and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal 
                Data or Information) Rules, 2011.
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
