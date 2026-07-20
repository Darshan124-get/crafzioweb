import { Smartphone, ShoppingCart, Cloud, ArrowRight, CheckCircle, Monitor, Users, Server, UploadCloud, MessageSquare, Lightbulb, Settings, Rocket, BarChart, Sparkles } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    description: "We design and develop modern, responsive, and scalable websites tailored to business needs.",
    features: ["Static Websites", "Dynamic Websites", "Custom Solutions", "Business Websites"],
    color: "primary" as const,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Smartphone,
    title: "Application Development",
    description: "We build reliable and scalable applications designed for real-world use.",
    features: ["Android Apps", "Web Applications", "Business Utility Apps", "Internal Systems"],
    color: "secondary" as const,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Users,
    title: "CRM Development",
    description: "We create custom CRM solutions to manage customers, operations, and business workflows efficiently.",
    features: ["Lead Management", "Sales Tracking", "Role-based Access", "Analytics Dashboards"],
    color: "accent" as const,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "We develop complete e-commerce platforms to help businesses sell online with confidence.",
    features: ["Online Store", "Inventory Management", "Cart & Checkout", "Payment Integration"],
    color: "primary" as const,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Server,
    title: "Deployment & Maintenance Services",
    description: "We help you launch, manage, and maintain your digital products smoothly.",
    features: ["Website Deployment", "Server Configuration", "Cloud Hosting Setup", "Ongoing Maintenance"],
    color: "secondary" as const,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: UploadCloud,
    title: "Play Store Publishing Support",
    description: "If your application is ready and you want to go live, we support the complete Play Store publishing process.",
    features: ["App Bundle Upload", "Store Listing", "Version Updates", "Compliance Help"],
    color: "accent" as const,
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Cloud,
    title: "Application Hosting & Play Store Platform",
    description: "If you are a small developer or startup looking for a platform to host and publish your app, we provide support through our Play Store presence.",
    features: ["Application Hosting", "Play Store Publishing", "App Management", "Developer Support"],
    color: "primary" as const,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Automation",
    description: "We automate WhatsApp communication to improve customer engagement and business efficiency.",
    features: ["Automated Replies", "Customer Notifications", "Order Updates", "Lead Handling"],
    color: "secondary" as const,
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&q=80"
  },
];

const Services = () => {
  return (
    <main className="page-transition pt-24">


      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-slate-50/30">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-[1000px] mx-auto bg-gradient-to-br from-[#f5f8ff] to-[#eef2ff] rounded-[2.5rem] md:rounded-[3.5rem] border-[1.5px] border-white shadow-[0_8px_40px_rgb(37,99,235,0.06)] relative overflow-hidden px-6 py-16 md:py-24 text-center">
            
            {/* Background elements to match the image */}
            {/* Top right gradient circle */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-200/40 rounded-full blur-[80px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
            
            {/* Bottom left waves/gradients using SVG */}
            <div className="absolute bottom-0 left-0 w-full h-[250px] pointer-events-none overflow-hidden opacity-60">
               <svg viewBox="0 0 1000 250" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-full text-blue-100">
                 <path fill="currentColor" d="M0,150 C250,50 400,200 1000,100 L1000,250 L0,250 Z" />
                 <path fill="#dbeafe" className="opacity-70" d="M0,180 C300,100 500,250 1000,150 L1000,250 L0,250 Z" />
               </svg>
            </div>
            
            {/* Abstract Line / Swoosh */}
            <div className="absolute top-1/2 left-0 w-1/3 h-[200px] pointer-events-none opacity-30">
              <svg viewBox="0 0 300 200" fill="none" className="w-full h-full stroke-blue-400" strokeWidth="1">
                <path d="M -50 100 C 50 150 150 -50 250 100" />
                <circle cx="100" cy="85" r="4" fill="#3b82f6" stroke="none" />
              </svg>
            </div>
            
            {/* Dotted Grids */}
            <div className="absolute top-8 left-8 text-blue-300/40 pointer-events-none">
               <svg width="80" height="80" className="fill-current">
                 <pattern id="dots-top" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                   <circle fill="currentColor" cx="3" cy="3" r="2.5"></circle>
                 </pattern>
                 <rect x="0" y="0" width="100%" height="100%" fill="url(#dots-top)"></rect>
               </svg>
            </div>
            <div className="absolute bottom-20 right-16 text-blue-300/40 pointer-events-none">
               <svg width="64" height="48" className="fill-current">
                 <pattern id="dots-bottom" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                   <circle fill="currentColor" cx="3" cy="3" r="2.5"></circle>
                 </pattern>
                 <rect x="0" y="0" width="100%" height="100%" fill="url(#dots-bottom)"></rect>
               </svg>
            </div>

            {/* Abstract Star/Sparkle */}
            <div className="absolute right-12 top-1/2 text-blue-400/50 pointer-events-none hidden md:block">
               <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                 <path d="M12 0 L13 10 L23 11 L13 12 L12 22 L11 12 L1 11 L11 10 Z" />
               </svg>
            </div>

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-[#e6f0ff] text-blue-600 border border-blue-100/50 mb-8 shadow-sm">
                <div className="w-3.5 h-3.5 text-blue-600 flex items-center justify-center">
                   <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                     <circle cx="12" cy="6" r="3"/>
                     <circle cx="6" cy="12" r="3"/>
                     <circle cx="18" cy="12" r="3"/>
                     <circle cx="12" cy="18" r="3"/>
                   </svg>
                </div>
                Our Services
              </span>
              
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black mb-6 tracking-tight text-slate-900 leading-[1.1]">
                Comprehensive <span className="text-blue-600">Digital</span><br />
                <span className="text-blue-600">Solutions</span>
              </h1>
              
              {/* Separator */}
              <div className="flex items-center justify-center gap-2 mb-8 opacity-80">
                <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent to-blue-400"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                <div className="w-20 h-[1.5px] bg-gradient-to-l from-transparent to-blue-400"></div>
              </div>

              <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-4 mb-16 font-medium leading-relaxed">
                From concept to deployment, we provide end-to-end services<br className="hidden md:block" />
                to help your business thrive in the digital age.
              </p>

              {/* Bottom White Pill with 4 Icons */}
              <div className="inline-flex flex-wrap justify-center items-center gap-8 md:gap-14 bg-white/80 backdrop-blur-xl rounded-[2rem] px-8 md:px-14 py-5 shadow-[0_12px_40px_rgb(0,0,0,0.06)] border border-white">
                <div className="flex flex-col items-center gap-2 group cursor-default">
                   <div className="text-blue-600">
                     <Lightbulb className="w-7 h-7" strokeWidth={2.5} />
                   </div>
                   <span className="text-xs font-bold text-slate-700">Concept</span>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-default">
                   <div className="text-blue-600">
                     <Settings className="w-7 h-7" strokeWidth={2.5} />
                   </div>
                   <span className="text-xs font-bold text-slate-700">Development</span>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-default">
                   <div className="text-blue-600">
                     <Rocket className="w-7 h-7" strokeWidth={2.5} />
                   </div>
                   <span className="text-xs font-bold text-slate-700">Deployment</span>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-default">
                   <div className="text-blue-600">
                     <BarChart className="w-7 h-7" strokeWidth={2.5} />
                   </div>
                   <span className="text-xs font-bold text-slate-700">Growth</span>
                </div>
              </div>

            </div>
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
                >
                <GlassCard className="p-0 overflow-hidden" glowColor={service.color} hover3D={false}>
                  <div className="flex flex-col lg:flex-row h-full">
                    {/* Image & Icon Side */}
                    <div className="w-full lg:w-2/5 xl:w-1/3 relative min-h-[200px] lg:min-h-full">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      
                      <div className={`absolute bottom-4 left-4 lg:bottom-6 lg:left-6 w-12 md:w-14 h-12 md:h-14 rounded-2xl flex items-center justify-center bg-background/90 backdrop-blur shadow-xl border border-white/10`}>
                        <service.icon className={`w-6 md:w-7 h-6 md:h-7 ${
                          service.color === "primary" 
                            ? "text-primary" 
                            : service.color === "secondary"
                            ? "text-secondary"
                            : "text-accent"
                        }`} />
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="flex-1 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                      <h3 className="font-display text-xl md:text-2xl font-bold mb-3">
                        {service.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-xs md:text-sm font-medium text-foreground/80">
                            <CheckCircle className={`w-4 h-4 flex-shrink-0 ${
                              service.color === "primary" ? "text-primary" : service.color === "secondary" ? "text-secondary" : "text-accent"
                            }`} />
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
