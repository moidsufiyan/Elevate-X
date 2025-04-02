
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-8 max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-stargaze-900 dark:text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-stargaze-600 dark:text-stargaze-300">
              Last updated: January 1, 2023
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={100} className="bg-white dark:bg-stargaze-900 rounded-xl shadow-subtle p-8 max-w-4xl mx-auto">
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Please read these Terms of Service ("Terms") carefully before using the Startup Stargaze website and platform (the "Service") operated by Startup Stargaze, Inc. ("us", "we", or "our").
              </p>
              
              <p>
                Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who wish to access or use the Service.
              </p>
              
              <p>
                By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you do not have permission to access the Service.
              </p>
              
              <h2>Accounts</h2>
              
              <p>
                When you create an account with us, you guarantee that the information you provide is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Service.
              </p>
              
              <p>
                You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your password is with our Service or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
              </p>
              
              <h2>Intellectual Property</h2>
              
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property of Startup Stargaze, Inc. and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Startup Stargaze, Inc.
              </p>
              
              <h2>User Content</h2>
              
              <p>
                Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("User Content"). You are responsible for the User Content that you post on or through the Service, including its legality, reliability, and appropriateness.
              </p>
              
              <p>
                By posting User Content on or through the Service, you represent and warrant that: (i) the User Content is yours and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, and (ii) that the posting of your User Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity. We reserve the right to terminate the account of anyone found to be infringing on a copyright.
              </p>
              
              <p>
                You retain any and all of your rights to any User Content you submit, post or display on or through the Service and you are responsible for protecting those rights. We take no responsibility and assume no liability for User Content you or any third party posts on or through the Service.
              </p>
              
              <h2>Links To Other Web Sites</h2>
              
              <p>
                Our Service may contain links to third party web sites or services that are not owned or controlled by Startup Stargaze, Inc.
              </p>
              
              <p>
                Startup Stargaze, Inc. has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third party web sites or services. We do not warrant the offerings of any of these entities/individuals or their websites.
              </p>
              
              <p>
                You acknowledge and agree that Startup Stargaze, Inc. shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such third party web sites or services.
              </p>
              
              <h2>Termination</h2>
              
              <p>
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
              </p>
              
              <p>
                If you wish to terminate your account, you may simply discontinue using the Service or contact us to delete your account.
              </p>
              
              <p>
                All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
              </p>
              
              <h2>Limitation Of Liability</h2>
              
              <p>
                In no event shall Startup Stargaze, Inc., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
              </p>

              <h2>Contact Us</h2>
              
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              
              <p>
                Startup Stargaze<br />
                123 Startup Avenue<br />
                San Francisco, CA 94107<br />
                Email: legal@startupstargaze.com
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
