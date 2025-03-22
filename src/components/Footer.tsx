
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { Mail } from "lucide-react";

const footerLinks = [
  {
    title: "Platform",
    links: [
      { name: "Features", href: "#features" },
      { name: "Mentors", href: "#mentors" },
      { name: "Resources", href: "#resources" },
      { name: "Startups", href: "#startups" },
      { name: "Community", href: "#community" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Press", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", href: "#" },
      { name: "Guides", href: "#" },
      { name: "FAQs", href: "#" },
      { name: "Success Stories", href: "#" },
      { name: "Events", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Data Processing", href: "#" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-stargaze-50 dark:bg-stargaze-900 border-t border-stargaze-100 dark:border-stargaze-800">
      <div className="container mx-auto px-6 py-12 md:py-16">
        {/* Newsletter */}
        <div className="mb-12 pb-10 border-b border-stargaze-200 dark:border-stargaze-800">
          <div className="max-w-3xl mx-auto text-center">
            <h4 className="text-2xl font-bold text-stargaze-900 dark:text-white mb-4">
              Stay updated with startup trends
            </h4>
            <p className="text-stargaze-600 dark:text-stargaze-300 mb-6">
              Join our newsletter to receive the latest insights, success stories, and resources.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <div className="relative w-full max-w-md">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stargaze-400 h-5 w-5" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={cn(
                    "w-full pl-10 pr-4 py-2.5 rounded-lg",
                    "bg-white dark:bg-stargaze-800",
                    "border border-stargaze-200 dark:border-stargaze-700",
                    "text-stargaze-900 dark:text-stargaze-200",
                    "focus:outline-none focus:ring-2 focus:ring-primary",
                    "shadow-subtle"
                  )}
                />
              </div>
              <Button className="whitespace-nowrap">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-8 mb-12">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h5 className="font-semibold text-stargaze-900 dark:text-white mb-4">
                {group.title}
              </h5>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-stargaze-600 dark:text-stargaze-400 hover:text-stargaze-900 dark:hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-stargaze-200 dark:border-stargaze-800">
          <Link
            to="/"
            className="flex items-center space-x-2 text-xl font-bold tracking-tight mb-4 md:mb-0"
          >
            <span className="text-primary">Startup</span>
            <span className="text-stargaze-900 dark:text-white">Stargaze</span>
          </Link>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-6">
              {["Twitter", "LinkedIn", "Instagram", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-sm text-stargaze-600 dark:text-stargaze-400 hover:text-stargaze-900 dark:hover:text-white transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
            <div className="text-sm text-stargaze-500 dark:text-stargaze-500">
              © {new Date().getFullYear()} Startup Stargaze. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
