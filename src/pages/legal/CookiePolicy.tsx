
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-8 max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-stargaze-900 dark:text-white mb-4">
              Cookie Policy
            </h1>
            <p className="text-stargaze-600 dark:text-stargaze-300">
              Last updated: January 1, 2023
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={100} className="bg-white dark:bg-stargaze-900 rounded-xl shadow-subtle p-8 max-w-4xl mx-auto">
            <div className="prose dark:prose-invert max-w-none">
              <p>
                This Cookie Policy explains how Startup Stargaze ("we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our website at startupstargaze.com ("Website"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>
              
              <h2>What are cookies?</h2>
              
              <p>
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
              </p>
              
              <p>
                Cookies set by the website owner (in this case, Startup Stargaze) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
              </p>
              
              <h2>Why do we use cookies?</h2>
              
              <p>
                We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Website. Third parties serve cookies through our Website for advertising, analytics, and other purposes. This is described in more detail below.
              </p>
              
              <h2>Types of cookies we use</h2>
              
              <p>The specific types of first and third-party cookies served through our Website and the purposes they perform are described below:</p>
              
              <h3>Essential Cookies</h3>
              
              <p>
                These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas. Because these cookies are strictly necessary to deliver the Website, you cannot refuse them without impacting how our Website functions.
              </p>
              
              <h3>Performance and Functionality Cookies</h3>
              
              <p>
                These cookies are used to enhance the performance and functionality of our Website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.
              </p>
              
              <h3>Analytics and Customization Cookies</h3>
              
              <p>
                These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are, or to help us customize our Website for you in order to enhance your experience.
              </p>
              
              <h3>Advertising Cookies</h3>
              
              <p>
                These cookies are used to make advertising messages more relevant to you and your interests. They also perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some cases selecting advertisements that are based on your interests.
              </p>
              
              <h3>Social Media Cookies</h3>
              
              <p>
                These cookies are used to enable you to share pages and content that you find interesting on our Website through third-party social networking and other websites. These cookies may also be used for advertising purposes as well.
              </p>
              
              <h2>How can you control cookies?</h2>
              
              <p>
                You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our Website though your access to some functionality and areas of our Website may be restricted. As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser's help menu for more information.
              </p>
              
              <p>
                In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">http://www.aboutads.info/choices/</a> or <a href="http://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer">http://www.youronlinechoices.com</a>.
              </p>
              
              <h2>How often will we update this Cookie Policy?</h2>
              
              <p>
                We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
              </p>
              
              <p>
                The date at the top of this Cookie Policy indicates when it was last updated.
              </p>
              
              <h2>Where can you find more information?</h2>
              
              <p>
                If you have any questions about our use of cookies or other technologies, please contact us at:
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

export default CookiePolicy;
