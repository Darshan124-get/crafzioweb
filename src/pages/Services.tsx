import { Globe, Smartphone, Zap, ShoppingCart, Cloud, Smartphone as PhoneStore, Smartphone as Store, MessageCircle, ArrowRight, CheckCircle } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "We design and develop modern, responsive, and scalable websites tailored to business needs.",
    features: ["Static Websites", "Dynamic Websites", "Custom Solutions", "Business Websites"],
    color: "primary" as const,
  },
  {
    icon: Smartphone,
    title: "Application Development",
    description: "We build reliable and scalable applications designed for real-world use.",
    features: ["Android Apps", "Web Applications", "Business Utility Apps", "Internal Systems"],
    color: "secondary" as const,
  },
  {
    icon: Zap,
    title: "CRM Development",
    description: "We create custom CRM solutions to manage customers, operations, and business workflows efficiently.",
    features: ["Lead Management", "Sales Tracking", "Role-based Access", "Analytics Dashboards"],
    color: "accent" as const,
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "We develop complete e-commerce platforms to help businesses sell online with confidence.",
    features: ["Online Store", "Inventory Management", "Cart & Checkout", "Payment Integration"],
    color: "primary" as const,
  },
  {
    icon: Cloud,
    title: "Deployment & Maintenance Services",
    description: "We help you launch, manage, and maintain your digital products smoothly.",
    features: ["Website Deployment", "Server Configuration", "Cloud Hosting Setup", "Ongoing Maintenance"],
    color: "secondary" as const,
  },
  {
    icon: PhoneStore,
    title: "Play Store Publishing Support",
    description: "If your application is ready and you want to go live, we support the complete Play Store publishing process.",
    features: ["App Bundle Upload", "Store Listing", "Version Updates", "Compliance Help"],
    color: "accent" as const,
  },
  {
    icon: Store,
    title: "Application Hosting & Play Store Platform",
    description: "If you are a small developer or startup looking for a platform to host and publish your app, we provide support through our Play Store presence.",
    features: ["Application Hosting", "Play Store Publishing", "App Management", "Developer Support"],
    color: "primary" as const,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Automation",
    description: "We automate WhatsApp communication to improve customer engagement and business efficiency.",
    features: ["Automated Replies", "Customer Notifications", "Order Updates", "Lead Handling"],
    color: "secondary" as const,
  },
];

const Services = () => {
  return (
    <main className="page-transition pt-24">
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative py-12 md:py-20">
        <div className="absolute top-0 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-secondary/20 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4 md:mb-6">
              Our Services
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 px-2">
              Comprehensive{" "}
              <span className="gradient-text">Digital Solutions</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              From concept to deployment, we provide end-to-end services to help 
              your business thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-6 md:space-y-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <GlassCard className="p-6 md:p-8 lg:p-10" glowColor={service.color}>
                  <div className="grid lg:grid-cols-3 gap-6 md:gap-8 items-start lg:items-center">
                    {/* Icon & Title */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                        <div className={`w-12 md:w-14 h-12 md:h-14 rounded-2xl flex items-center justify-center ${
                          service.color === "primary" 
                            ? "bg-gradient-to-br from-primary/20 to-primary/10" 
                            : service.color === "secondary"
                            ? "bg-gradient-to-br from-secondary/20 to-secondary/10"
                            : "bg-gradient-to-br from-accent/20 to-accent/10"
                        }`}>
                          <service.icon className={`w-6 md:w-7 h-6 md:h-7 ${
                            service.color === "primary" 
                              ? "text-primary" 
                              : service.color === "secondary"
                              ? "text-secondary"
                              : "text-accent"
                          }`} />
                        </div>
                      </div>
                      <h3 className="font-display text-xl md:text-2xl font-bold mb-2">
                        {service.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="lg:col-span-1">
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="lg:col-span-1">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                            <CheckCircle className="w-3 md:w-4 h-3 md:h-4 text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <GlassCard className="p-8 md:p-12 lg:p-16 text-center">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-2">
              Not Sure What You Need?
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 max-w-xl mx-auto px-4">
              Schedule a free consultation with our experts to discuss your project 
              requirements and find the perfect solution for your business.
            </p>
            <Button href="/contact" size="lg" icon={ArrowRight}>
              Get Free Consultation
            </Button>
          </GlassCard>
        </div>
      </section>
    </main>
  );
};

export default Services;
