
import React from "react";
import { Helmet } from "react-helmet";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: 'website' | 'article' | 'profile';
  twitterCard?: 'summary' | 'summary_large_image';
}

export const SEO: React.FC<SEOProps> = ({
  title = "Stargaze Mentors | Connect with Expert Startup Mentors",
  description = "Get guidance from experienced startup mentors. Book sessions, access resources, and accelerate your entrepreneurial journey.",
  keywords = "startup mentors, mentorship, entrepreneurship, founder coaching, startup advice",
  ogImage = "/og-image.jpg",
  ogUrl,
  ogType = "website",
  twitterCard = "summary_large_image"
}) => {
  const siteUrl = ogUrl || "https://yourwebsite.com";
  const fullTitle = title.includes("Stargaze") ? title : `${title} | Stargaze Mentors`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={siteUrl} />
    </Helmet>
  );
};
