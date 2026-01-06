import { ArrowRight, Zap, Globe, Smartphone, Cloud, MessageCircle, ShoppingCart, CheckCircle2 } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "We design and develop modern, responsive, and scalable websites tailored to business needs.",
  },
  {
    icon: Smartphone,
    title: "Application Development",
    description: "We build reliable and scalable applications designed for real-world use.",
  },
  {
    icon: Zap,
    title: "CRM Development",
    description: "We create custom CRM solutions to manage customers, operations, and business workflows efficiently.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "We develop complete e-commerce platforms to help businesses sell online with confidence.",
  },
  {
    icon: Cloud,
    title: "Deployment & Maintenance Services",
    description: "We help you launch, manage, and maintain your digital products smoothly.",
  },
  {
    icon: Smartphone,
    title: "Play Store Publishing Support",
    description: "If your application is ready and you want to go live, we support the complete Play Store publishing process.",
  },
  {
    icon: Smartphone,
    title: "Application Hosting & Play Store Platform",
    description: "We provide support for hosting and publishing apps through our Play Store presence.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Automation",
    description: "We automate WhatsApp communication to improve customer engagement and business efficiency.",
  },
];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

const Index = () => {
  return (
    <main className="page-transition">
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-[150px]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
              {/* Pioneering Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-muted-foreground">Pioneering Digital Innovation</span>
              </div>
              
              {/* Google Play Verified Badge */}
              <a 
                href="https://play.google.com/store/apps/dev?id=9092775155164182538" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 hover:from-primary/30 hover:to-secondary/30 border border-primary/30 text-sm transition-all duration-300 hover:scale-105 animate-fade-in"
              >
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Google Play Verified</span>
                <ArrowRight className="w-3 h-3 text-primary" />
              </a>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight opacity-0 animate-fade-in-up" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
              Crafting Digital{" "}
              <span className="gradient-text">Experiences</span>
              <br />
              for the{" "}
              <span className="gradient-text-secondary">Future</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
              We transform visionary ideas into powerful digital solutions. 
              From web development to AI, we're your partners in innovation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
              <Button href="/contact" size="lg" icon={Zap}>
                Start Your Project
              </Button>
              <Button href="/services" variant="outline" size="lg" icon={ArrowRight}>
                Explore Services
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
              {stats.map((stat, index) => (
                <GlassCard key={index} className="py-6" hover3D={false}>
                  <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
          <span className="text-xs text-muted-foreground">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-primary animate-bounce" />
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-6">
          <SectionHeading
            badge="What We Do"
            title="Our Services"
            subtitle="Comprehensive digital solutions tailored to accelerate your business growth and digital transformation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 100}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/services" variant="outline" icon={ArrowRight}>
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
            <div className="absolute inset-0 grid-bg opacity-30" />
            
            <div className="relative px-8 py-20 md:px-16 md:py-24 text-center">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                Ready to Build the{" "}
                <span className="gradient-text">Future</span>?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                Let's collaborate to turn your vision into reality. Our team of experts 
                is ready to help you create something extraordinary.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/contact" size="lg" icon={Zap}>
                  Get Started Today
                </Button>
                <Button href="/portfolio" variant="ghost" size="lg" icon={ArrowRight}>
                  View Our Work
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
