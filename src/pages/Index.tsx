import { ArrowRight, Zap, Smartphone, Cloud, ShoppingCart, CheckCircle2, Monitor, Users, Server, UploadCloud, MessageSquare } from "lucide-react";

import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    description: "We design and develop modern, responsive, and scalable websites tailored to business needs.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Smartphone,
    title: "Application Development",
    description: "We build reliable and scalable applications designed for real-world use.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Users,
    title: "CRM Development",
    description: "We create custom CRM solutions to manage customers, operations, and business workflows efficiently.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "We develop complete e-commerce platforms to help businesses sell online with confidence.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Server,
    title: "Deployment & Maintenance",
    description: "We help you launch, manage, and maintain your digital products smoothly.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: UploadCloud,
    title: "Play Store Publishing Support",
    description: "If your application is ready and you want to go live, we support the complete Play Store publishing process.",
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Cloud,
    title: "Application Hosting",
    description: "We provide support for hosting and publishing apps through our Play Store presence.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Automation",
    description: "We automate WhatsApp communication to improve customer engagement and business efficiency.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&q=80"
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


      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-[150px]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="text-center lg:text-left">
              {/* Badges */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-8">
                {/* Pioneering Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">Pioneering Digital Innovation</span>
                </div>
                
                {/* Google Play Verified Badge */}
                <a 
                  href="https://play.google.com/store/apps/dev?id=9092775155164182538" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 hover:from-primary/30 hover:to-secondary/30 border border-primary/30 text-sm transition-all duration-300 hover:scale-105"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Google Play Verified</span>
                  <ArrowRight className="w-3 h-3 text-primary" />
                </a>
              </div>

              {/* Main Heading */}
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                Crafting Digital{" "}
                <span className="gradient-text">Experiences</span>
                <br />
                for the{" "}
                <span className="gradient-text-secondary">Future</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0">
                We transform visionary ideas into powerful digital solutions. 
                From web development to AI, we're your partners in innovation.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button href="/contact" size="lg" icon={Zap}>
                  Start Your Project
                </Button>
                <Button href="/services" variant="outline" size="lg" icon={ArrowRight}>
                  Explore Services
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative mt-12 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white/10 backdrop-blur-sm p-2">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" 
                  alt="Digital Experience Dashboard" 
                  className="w-full h-auto rounded-xl object-cover"
                />
                
                {/* Floating Elements */}
                <div className="absolute -left-2 sm:-left-6 top-10 glass-card px-4 py-3 rounded-xl flex items-center gap-3 scale-90 sm:scale-100">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Monitor className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Smart Solutions</div>
                    <div className="text-xs text-muted-foreground">AI-Powered</div>
                  </div>
                </div>

                <div className="absolute -right-2 sm:-right-6 bottom-10 glass-card px-4 py-3 rounded-xl flex items-center gap-3 scale-90 sm:scale-100">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Fast</div>
                    <div className="text-xs text-muted-foreground">Performance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
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


      </section>

      {/* Services Preview Section */}
      <section className="relative py-32">
        <div className="container mx-auto px-6">
          <SectionHeading
            badge="What We Do"
            title="Our Services"
            subtitle="Comprehensive digital solutions tailored to accelerate your business growth and digital transformation."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                image={service.image}
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
