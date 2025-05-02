
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

interface PageTemplateProps {
  title: string;
  description: string;
  keywords?: string;
  children: React.ReactNode;
}

export const PageTemplate = ({
  title,
  description,
  keywords = "",
  children,
}: PageTemplateProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO title={title} description={description} keywords={keywords} />
      <Navbar />
      <main className="pt-24 pb-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};
