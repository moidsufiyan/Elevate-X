import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { SEO } from "@/components/common/SEO";
import {
  Target,
  Heart,
  Users,
  TrendingUp,
  Award,
  Globe,
  Lightbulb,
  Shield,
  Star,
  CheckCircle,
  ArrowRight,
  MapPin,
  Calendar,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Building2,
  Rocket,
  BookOpen,
  MessageSquare,
} from "lucide-react";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const stats = [
    {
      label: "Startups Supported",
      value: "2,500+",
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      label: "Expert Mentors",
      value: "500+",
      icon: <Users className="w-6 h-6" />,
    },
    {
      label: "Funding Raised",
      value: "₹850 Cr",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      label: "Success Stories",
      value: "150+",
      icon: <Award className="w-6 h-6" />,
    },
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Empowering Bharat",
      description:
        "We believe in the potential of every Indian entrepreneur, from tier-1 cities to rural areas. Our mission is to democratize access to mentorship, funding, and resources across the entire Indian subcontinent.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Community First",
      description:
        "Building a strong, supportive ecosystem where entrepreneurs, mentors, and investors collaborate to create lasting impact. We foster meaningful connections that go beyond transactions.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Innovation & Excellence",
      description:
        "We champion innovative solutions to India's unique challenges while maintaining the highest standards of quality, integrity, and professionalism in everything we do.",
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Inclusive Growth",
      description:
        "Committed to creating opportunities for entrepreneurs from all backgrounds, especially women, minorities, and underrepresented communities in the startup ecosystem.",
    },
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Former VP at Flipkart, serial entrepreneur with 3 successful exits. Passionate about building India's startup ecosystem.",
      linkedin: "https://linkedin.com/in/rajesh-kumar",
      twitter: "https://twitter.com/rajeshkumar",
    },
    {
      name: "Priya Sharma",
      role: "Co-Founder & CTO",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=300&h=300&fit=crop&crop=face",
      bio: "Ex-Google engineer, AI/ML expert. Led technology teams at multiple unicorn startups. MIT alumna with deep tech expertise.",
      linkedin: "https://linkedin.com/in/priya-sharma",
      twitter: "https://twitter.com/priyasharma",
    },
    {
      name: "Arjun Mehta",
      role: "Head of Community",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Former startup founder turned community builder. Expert in scaling startup ecosystems and building meaningful connections.",
      linkedin: "https://linkedin.com/in/arjun-mehta",
      twitter: "https://twitter.com/arjunmehta",
    },
    {
      name: "Kavya Reddy",
      role: "Head of Partnerships",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
      bio: "Investment banking background with 8+ years in venture capital. Specializes in connecting startups with the right investors.",
      linkedin: "https://linkedin.com/in/kavya-reddy",
      twitter: "https://twitter.com/kavyareddy",
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Foundation",
      description:
        "ElevateX founded with a vision to transform India's startup ecosystem through mentorship and community building.",
    },
    {
      year: "2021",
      title: "First 100 Startups",
      description:
        "Reached our first milestone of supporting 100 startups across various sectors, with a focus on tier-2 and tier-3 cities.",
    },
    {
      year: "2022",
      title: "Mentor Network Launch",
      description:
        "Launched our comprehensive mentor network with 200+ industry experts from successful startups and corporations.",
    },
    {
      year: "2023",
      title: "Funding Milestone",
      description:
        "Our supported startups collectively raised over ₹500 crores in funding, creating thousands of jobs across India.",
    },
    {
      year: "2024",
      title: "Pan-India Expansion",
      description:
        "Expanded operations to 25+ cities, launched vernacular language support, and introduced specialized programs for rural entrepreneurs.",
    },
  ];

  const achievements = [
    "Featured in Economic Times as 'Top Startup Enabler 2023'",
    "Winner of 'Best Community Platform' at India Startup Awards 2023",
    "Recognized by NASSCOM as 'Emerging Technology Platform'",
    "Featured case study in Harvard Business Review",
    "Partnership with Government of India's Startup India initiative",
    "Collaboration with IIT Delhi, IIM Bangalore, and other premier institutions",
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About ElevateX | Empowering India's Startup Ecosystem"
        description="Learn about ElevateX's mission to transform India's entrepreneurial landscape through mentorship, community, and innovation. Our story, values, and team."
        keywords="about elevateX, Indian startup ecosystem, entrepreneurship, mentorship platform, startup community India"
      />

      <main className="pt-20">
        {/* Hero Section */}
        <AnimatedSection animation="fade-in" duration="normal" delay={100}>
          <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-primary/5">
            <div className="max-w-7xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6">
                Empowering India's Entrepreneurs Since 2020
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Building India's
                <span className="text-primary block">Startup Future</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                We're on a mission to democratize entrepreneurship in India by
                connecting promising startups with experienced mentors,
                investors, and resources. From Mumbai to Mangalore, from Delhi
                to Dharamshala - we're building bridges for every entrepreneur's
                journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/auth">Join Our Community</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Stats Section */}
        <AnimatedSection animation="fade-up" duration="normal" delay={200}>
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <Card
                    key={index}
                    className="text-center border-0 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="pt-6">
                      <div className="flex justify-center mb-4 text-primary">
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold text-foreground mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Our Story Section */}
        <AnimatedSection animation="fade-up" duration="normal" delay={300}>
          <section className="py-16 px-4 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Our Story
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="text-lg">
                      ElevateX was born from a simple observation: India has
                      incredible entrepreneurial talent, but many promising
                      startups fail not due to lack of innovation, but due to
                      lack of guidance, connections, and resources.
                    </p>
                    <p>
                      In 2020, our founders - successful entrepreneurs
                      themselves - decided to bridge this gap. Having
                      experienced the challenges of building startups in India
                      firsthand, they understood the unique obstacles faced by
                      Indian entrepreneurs: from navigating complex regulations
                      to understanding local market dynamics.
                    </p>
                    <p>
                      What started as a small community of 50 entrepreneurs in
                      Bangalore has now grown into India's largest startup
                      mentorship platform, spanning 25+ cities and supporting
                      over 2,500 startups across diverse sectors - from fintech
                      to agritech, from healthcare to education.
                    </p>
                    <p>
                      Today, we're not just a platform; we're a movement. A
                      movement to make entrepreneurship accessible to every
                      Indian, regardless of their background, location, or
                      resources. We believe that the next big idea could come
                      from anywhere in India, and we're here to help it
                      flourish.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                    alt="Indian startup ecosystem"
                    className="rounded-lg shadow-lg w-full"
                  />
                  <div className="absolute inset-0 bg-primary/10 rounded-lg"></div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Mission & Vision */}
        <AnimatedSection animation="fade-up" duration="normal" delay={400}>
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="w-8 h-8 text-primary" />
                      <CardTitle className="text-2xl">Our Mission</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      To democratize entrepreneurship in India by providing
                      every startup founder with access to world-class
                      mentorship, resources, and networks. We're committed to
                      building an inclusive ecosystem where great ideas can
                      flourish regardless of geography, background, or initial
                      resources.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <Rocket className="w-8 h-8 text-primary" />
                      <CardTitle className="text-2xl">Our Vision</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      To make India the global hub for innovation and
                      entrepreneurship by 2030. We envision a future where every
                      Indian startup has the support system needed to compete
                      globally, creating millions of jobs and solving the
                      world's most pressing challenges.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Values Section */}
        <AnimatedSection animation="fade-up" duration="normal" delay={500}>
          <section className="py-16 px-4 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Our Values
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  These core principles guide everything we do and shape how we
                  serve India's entrepreneurial community
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="pt-8">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">{value.icon}</div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-3">
                            {value.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Journey Timeline */}
        <AnimatedSection animation="fade-up" duration="normal" delay={600}>
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Our Journey
                </h2>
                <p className="text-xl text-muted-foreground">
                  Key milestones in our mission to transform India's startup
                  ecosystem
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
                <div className="space-y-12">
                  {milestones.map((milestone, index) => (
                    <div
                      key={index}
                      className={`flex items-center ${
                        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                      }`}
                    >
                      <div
                        className={`w-1/2 ${
                          index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                        }`}
                      >
                        <Card className="border-0 shadow-md">
                          <CardContent className="pt-6">
                            <Badge variant="secondary" className="mb-3">
                              {milestone.year}
                            </Badge>
                            <h3 className="text-xl font-semibold text-foreground mb-2">
                              {milestone.title}
                            </h3>
                            <p className="text-muted-foreground">
                              {milestone.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                      <div className="relative flex items-center justify-center w-12 h-12 bg-primary rounded-full border-4 border-background shadow-lg z-10">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div className="w-1/2"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Team Section */}
        <AnimatedSection animation="fade-up" duration="normal" delay={700}>
          <section className="py-16 px-4 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Leadership Team
                </h2>
                <p className="text-xl text-muted-foreground">
                  Meet the passionate leaders driving India's entrepreneurial
                  transformation
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                {team.map((member, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <CardContent className="pt-6 text-center">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium mb-3">
                        {member.role}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        {member.bio}
                      </p>
                      <div className="flex justify-center gap-3">
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={member.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Twitter className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Achievements */}
        <AnimatedSection animation="fade-up" duration="normal" delay={800}>
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Recognition & Achievements
                </h2>
                <p className="text-xl text-muted-foreground">
                  Our work has been recognized by leading organizations and
                  media outlets
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg"
                  >
                    <Award className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Contact Info */}
        <AnimatedSection animation="fade-up" duration="normal" delay={900}>
          <section className="py-16 px-4 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Get In Touch
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Have questions about our platform or want to partner with
                    us? We'd love to hear from you.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">Headquarters</p>
                        <p className="text-muted-foreground">
                          Koramangala, Bengaluru 560095, India
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">
                          hello@elevatex.in
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-muted-foreground">
                          +91-80-4040-8000
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <Button variant="outline" size="sm">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm">
                      <Twitter className="w-4 h-4 mr-2" />
                      Twitter
                    </Button>
                  </div>
                </div>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Quick Links</CardTitle>
                    <CardDescription>
                      Explore our platform and join the community
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full justify-between"
                    >
                      <Link to="/mentors">
                        <span className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          Browse Mentors
                        </span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full justify-between"
                    >
                      <Link to="/investors">
                        <span className="flex items-center gap-2">
                          <Building2 className="w-4 h-4" />
                          Find Investors
                        </span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full justify-between"
                    >
                      <Link to="/resources">
                        <span className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          Access Resources
                        </span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full justify-between"
                    >
                      <Link to="/community">
                        <span className="flex items-center gap-2">
                          <MessageSquare className="w-4 h-4" />
                          Join Community
                        </span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animation="fade-up" duration="normal" delay={1000}>
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of entrepreneurs who are building the future of
                India with ElevateX.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/auth">Get Started Today</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/startup-showcase">Explore Startups</Link>
                </Button>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>
    </div>
  );
};

export default About;

