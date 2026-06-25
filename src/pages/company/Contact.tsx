import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SEO } from "@/components/common/SEO";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  MessageSquare,
  HelpCircle,
  Users,
  Building2,
  Briefcase,
  Globe,
  Send,
  CheckCircle,
} from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "",
    company: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - Frontend only demo
    setTimeout(() => {
      toast.success(
        "Thank you for reaching out! We'll get back to you within 24 hours. (Demo only - no actual email sent)"
      );
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        inquiryType: "",
        company: "",
        phone: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "Send us an email and we'll respond within 24 hours.",
      contact: "hello@elevatex.in",
      action: "mailto:hello@elevatex.in",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      description: "Speak with our team during business hours.",
      contact: "+91-80-4040-8000",
      action: "tel:+918040408000",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      description: "Our headquarters in India's Silicon Valley.",
      contact: "Koramangala, Bengaluru 560095, India",
      action: "https://maps.google.com",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Live Chat",
      description: "Chat with our support team instantly.",
      contact: "Available 24/7",
      action: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      url: "https://linkedin.com/company/elevatex",
      handle: "@elevatex",
      color: "text-blue-600",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      name: "Twitter",
      url: "https://twitter.com/elevatex",
      handle: "@elevatex",
      color: "text-blue-400",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram",
      url: "https://instagram.com/elevatex",
      handle: "@elevatex",
      color: "text-pink-600",
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      name: "YouTube",
      url: "https://youtube.com/@elevatex",
      handle: "@elevatex",
      color: "text-red-600",
    },
  ];

  const inquiryTypes = [
    "General Inquiry",
    "Partnership Opportunity",
    "Mentorship Application",
    "Investor Relations",
    "Technical Support",
    "Media & Press",
    "Event Collaboration",
    "Other",
  ];

  const faqs = [
    {
      question: "How do I become a mentor on ElevateX?",
      answer:
        "Apply through our mentor application form. We review applications based on experience, expertise, and commitment to helping entrepreneurs.",
    },
    {
      question: "Is ElevateX free for startups?",
      answer:
        "Yes! Our basic platform is free for startups. We also offer premium services for advanced features and personalized support.",
    },
    {
      question: "How do you match startups with mentors?",
      answer:
        "Our AI-powered matching system considers industry, stage, location, and specific needs to connect startups with the most relevant mentors.",
    },
    {
      question: "Can international startups join ElevateX?",
      answer:
        "While we focus on the Indian ecosystem, we welcome international startups looking to enter or expand in the Indian market.",
    },
  ];

  return (<><SEO
        title="Contact Us | ElevateX - Get in Touch"
        description="Contact ElevateX for partnerships, mentorship opportunities, investor relations, or general inquiries. We're here to support your entrepreneurial journey."
        keywords="contact elevatex, startup support, mentorship inquiries, partnership opportunities, investor relations"
      />

      <main className="pt-20">
        {/* Hero Section */}
        <AnimatedSection animation="fade-in" duration="normal" delay={100}>
          <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-background to-primary/5">
            <div className="max-w-7xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6">
                We're Here to Help
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Get In Touch
                <span className="text-primary block">With Our Team</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Whether you're a startup seeking mentorship, an experienced
                professional wanting to give back, or an investor looking for
                opportunities - we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="#contact-form">Send Message</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+918040408000">Call Now</a>
                </Button>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Contact Info Cards */}
        <AnimatedSection animation="fade-up" duration="normal" delay={200}>
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="pt-6 text-center">
                      <div className="flex justify-center mb-4 text-primary">
                        {info.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {info.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {info.description}
                      </p>
                      <Button variant="outline" size="sm" asChild>
                        <a href={info.action}>{info.contact}</a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Contact Form */}
        <AnimatedSection animation="fade-up" duration="normal" delay={300}>
          <section id="contact-form" className="py-16 px-4 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Send Us a Message
                </h2>
                <p className="text-xl text-muted-foreground">
                  We'd love to hear from you. Fill out the form below and we'll
                  get back to you soon.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Contact Form */}
                <div className="lg:col-span-2">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label
                              htmlFor="name"
                              className="text-sm font-medium text-foreground"
                            >
                              Full Name *
                            </label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Rajesh Kumar"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <label
                              htmlFor="email"
                              className="text-sm font-medium text-foreground"
                            >
                              Email Address *
                            </label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="rajesh@company.com"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label
                              htmlFor="phone"
                              className="text-sm font-medium text-foreground"
                            >
                              Phone Number
                            </label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+91 98765 43210"
                            />
                          </div>

                          <div className="space-y-2">
                            <label
                              htmlFor="company"
                              className="text-sm font-medium text-foreground"
                            >
                              Company/Organization
                            </label>
                            <Input
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              placeholder="Your Company Name"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label
                            htmlFor="inquiryType"
                            className="text-sm font-medium text-foreground"
                          >
                            Inquiry Type *
                          </label>
                          <Select
                            value={formData.inquiryType}
                            onValueChange={(value) =>
                              setFormData({ ...formData, inquiryType: value })
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                            <SelectContent>
                              {inquiryTypes.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <label
                            htmlFor="subject"
                            className="text-sm font-medium text-foreground"
                          >
                            Subject *
                          </label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="How can we help you?"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <label
                            htmlFor="message"
                            className="text-sm font-medium text-foreground"
                          >
                            Message *
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Please describe your question, inquiry, or how we can help you..."
                            rows={6}
                            required
                          />
                        </div>

                        <Button
                          type="submit"
                          className="w-full"
                          size="lg"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar Info */}
                <div className="space-y-6">
                  {/* Business Hours */}
                  <Card className="border-0 shadow-md">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-primary" />
                        Business Hours
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Monday - Friday
                        </span>
                        <span className="font-medium">
                          9:00 AM - 7:00 PM IST
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Saturday</span>
                        <span className="font-medium">
                          10:00 AM - 4:00 PM IST
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sunday</span>
                        <span className="font-medium">Closed</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Response Time */}
                  <Card className="border-0 shadow-md">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="font-medium">Quick Response</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        We typically respond to all inquiries within 24 hours
                        during business days.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Quick Links */}
                  <Card className="border-0 shadow-md">
                    <CardHeader>
                      <CardTitle>Quick Links</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-start"
                        asChild
                      >
                        <Link to="/mentors">
                          <Users className="w-4 h-4 mr-2" />
                          Find Mentors
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-start"
                        asChild
                      >
                        <Link to="/investors">
                          <Building2 className="w-4 h-4 mr-2" />
                          Connect with Investors
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-start"
                        asChild
                      >
                        <Link to="/resources">
                          <Briefcase className="w-4 h-4 mr-2" />
                          Access Resources
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Social Media */}
        <AnimatedSection animation="fade-up" duration="normal" delay={400}>
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Connect With Us
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Follow us on social media for the latest updates, startup
                stories, and community highlights
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {socialLinks.map((social, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <CardContent className="pt-6 text-center">
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div
                          className={`flex justify-center mb-3 ${social.color}`}
                        >
                          {social.icon}
                        </div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {social.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {social.handle}
                        </p>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection animation="fade-up" duration="normal" delay={500}>
          <section className="py-16 px-4 bg-muted/30">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-muted-foreground">
                  Quick answers to common questions about ElevateX
                </p>
              </div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <Card key={index} className="border-0 shadow-md">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <HelpCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">
                            {faq.question}
                          </h3>
                          <p className="text-muted-foreground">{faq.answer}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-8">
                <p className="text-muted-foreground mb-4">
                  Can't find what you're looking for?
                </p>
                <Button variant="outline" asChild>
                  <Link to="/resources/faqs">View All FAQs</Link>
                </Button>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animation="fade-up" duration="normal" delay={600}>
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of entrepreneurs who are building the future with
                ElevateX
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/auth">Join Our Community</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>
    </>);
};

export default Contact;

