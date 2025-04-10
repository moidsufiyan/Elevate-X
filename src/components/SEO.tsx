
import React from "react";
import { Helmet } from "react-helmet";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = "Elevate X | Connect with Expert Startup Mentors",
  description = "Get guidance from experienced startup mentors. Book sessions, access resources, and accelerate your entrepreneurial journey.",
  keywords = "startup mentors, mentorship, entrepreneurship, founder coaching, startup advice",
  ogImage = "/og-image.jpg",
  ogUrl,
  ogType = "website",
  twitterCard = "summary_large_image"
}) => {
  const siteUrl = ogUrl || "https://yourwebsite.com";
  const fullTitle = title.includes("Elevate X") ? title : `${title} | Elevate X`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical link */}
      <link rel="canonical" href={siteUrl} />
    </Helmet>
  );
};
