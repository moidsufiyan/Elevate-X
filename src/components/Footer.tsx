
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Mail, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube, 
  ArrowRight, 
  ChevronRight 
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = [
  {
    title: "Platform",
    links: [
      { name: "Features", href: "/#features" },
      { name: "Mentors", href: "/mentors" },
      { name: "Resources", href: "/resources" },
      { name: "Startups", href: "/startup-showcase" },
      { name: "Community", href: "/community" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
      { name: "Press", href: "/press" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", href: "/resources/documentation" },
      { name: "Guides", href: "/resources/guides" },
      { name: "FAQs", href: "/resources/faqs" },
      { name: "Success Stories", href: "/resources/success-stories" },
      { name: "Events", href: "/resources/events" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/legal/privacy-policy" },
      { name: "Terms of Service", href: "/legal/terms-of-service" },
      { name: "Cookie Policy", href: "/legal/cookie-policy" },
      { name: "Data Processing", href: "/legal/data-processing" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-stargaze-950 border-t border-stargaze-100 dark:border-stargaze-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div>
            <h4 className="text-xl sm:text-2xl font-bold text-stargaze-900 dark:text-white mb-4">
              Join the Elevate X community
            </h4>
            <p className="text-stargaze-600 dark:text-stargaze-400 mb-6 max-w-lg">
              Stay updated with the latest startup trends, resources, and opportunities. 
              No spam, just valuable insights to help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stargaze-400 h-5 w-5" />
                <Input 
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 pr-4 py-2 h-11 bg-white dark:bg-stargaze-900"
                />
              </div>
              <Button className="h-11 px-5 gap-2">
                Subscribe <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:justify-end lg:ml-auto">
            <div className="flex flex-col items-center justify-center text-center p-5 rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20">
              <p className="text-3xl font-bold text-primary mb-1">100+</p>
              <p className="text-sm text-stargaze-600 dark:text-stargaze-400">Expert Mentors</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-5 rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20">
              <p className="text-3xl font-bold text-primary mb-1">500+</p>
              <p className="text-sm text-stargaze-600 dark:text-stargaze-400">Startups</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-5 rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20">
              <p className="text-3xl font-bold text-primary mb-1">50K+</p>
              <p className="text-sm text-stargaze-600 dark:text-stargaze-400">Community Members</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-5 rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20">
              <p className="text-3xl font-bold text-primary mb-1">10K+</p>
              <p className="text-sm text-stargaze-600 dark:text-stargaze-400">Success Stories</p>
            </div>
          </div>
        </div>

        <Separator className="mb-12" />

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-4 xl:col-span-1">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-xl font-bold tracking-tight mb-6"
            >
              <span className="text-primary">Elevate</span>
              <span className="text-stargaze-900 dark:text-white">X</span>
            </Link>
            <p className="text-sm text-stargaze-600 dark:text-stargaze-400 mb-6 xl:max-w-xs">
              Connecting ambitious founders with expert mentors to build successful startups. Our platform empowers entrepreneurs with the guidance, resources, and community they need to thrive.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-stargaze-100 hover:bg-primary/10 dark:bg-stargaze-800 dark:hover:bg-primary/20 text-stargaze-600 hover:text-primary dark:text-stargaze-400 dark:hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-stargaze-100 hover:bg-primary/10 dark:bg-stargaze-800 dark:hover:bg-primary/20 text-stargaze-600 hover:text-primary dark:text-stargaze-400 dark:hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-stargaze-100 hover:bg-primary/10 dark:bg-stargaze-800 dark:hover:bg-primary/20 text-stargaze-600 hover:text-primary dark:text-stargaze-400 dark:hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-stargaze-100 hover:bg-primary/10 dark:bg-stargaze-800 dark:hover:bg-primary/20 text-stargaze-600 hover:text-primary dark:text-stargaze-400 dark:hover:text-primary transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
          
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h5 className="font-semibold text-stargaze-900 dark:text-white mb-4">
                {group.title}
              </h5>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('/#') ? (
                      <a
                        href={link.href}
                        className="text-sm flex items-center gap-1 text-stargaze-600 dark:text-stargaze-400 hover:text-primary dark:hover:text-primary transition-colors"
                      >
                        <ChevronRight className="h-3 w-3" />
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm flex items-center gap-1 text-stargaze-600 dark:text-stargaze-400 hover:text-primary dark:hover:text-primary transition-colors"
                      >
                        <ChevronRight className="h-3 w-3" />
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-stargaze-500 dark:text-stargaze-500">
            © {new Date().getFullYear()} Elevate X. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-stargaze-500 dark:text-stargaze-500">
            <Link to="/legal/privacy-policy" className="hover:text-primary dark:hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link to="/legal/terms-of-service" className="hover:text-primary dark:hover:text-primary transition-colors">
              Terms
            </Link>
            <Link to="/legal/cookie-policy" className="hover:text-primary dark:hover:text-primary transition-colors">
              Cookies
            </Link>
            <Link to="/sitemap" className="hover:text-primary dark:hover:text-primary transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
