import { Lightbulb, Target, Palette, Code2, TestTube, Rocket, ArrowRight } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";

const steps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Idea & Research",
    description: "We start by understanding your vision, goals, and target audience. Deep market research helps us identify opportunities and challenges.",
    color: "primary",
  },
  {
    number: "02",
    icon: Target,
    title: "Planning & Strategy",
    description: "Creating a comprehensive roadmap with clear milestones, timelines, and deliverables. We define the technical architecture and project scope.",
    color: "secondary",
  },
  {
    number: "03",
    icon: Palette,
    title: "UI/UX Design",
    description: "Our designers craft beautiful, intuitive interfaces that align with your brand and delight your users at every interaction.",
    color: "accent",
  },
  {
    number: "04",
    icon: Code2,
    title: "Development",
    description: "Our expert developers bring the designs to life using cutting-edge technologies and best practices for clean, maintainable code.",
    color: "primary",
  },
  {
    number: "05",
    icon: TestTube,
    title: "Testing & QA",
    description: "Rigorous testing ensures your product is bug-free, secure, and performs flawlessly across all devices and platforms.",
    color: "secondary",
  },
  {
    number: "06",
    icon: Rocket,
    title: "Launch & Support",
    description: "We handle deployment, monitoring, and provide ongoing support to ensure your product continues to perform at its best.",
    color: "accent",
  },
];

const Process = () => {
  return (
    <main className="page-transition pt-24">
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative py-12 md:py-20">
        <div className="absolute top-1/3 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-accent/20 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4 md:mb-6">
              How We Work
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 px-2">
              Our Development{" "}
              <span className="gradient-text">Process</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              A proven methodology that ensures successful project delivery 
              from concept to launch and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

            <div className="space-y-8 md:space-y-12 lg:space-y-24">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-8 opacity-0 animate-fade-in-up ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ animationDelay: `${index * 150}ms`, animationFillMode: "forwards" }}
                >
                  {/* Content */}
                  <div className={`flex-1 w-full ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <GlassCard className="p-6 md:p-8 inline-block w-full md:max-w-md" glowColor={step.color as "primary" | "secondary" | "accent"}>
                      <div className={`flex items-center gap-3 md:gap-4 mb-3 md:mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                        <div className={`w-10 md:w-12 h-10 md:h-12 rounded-xl flex items-center justify-center ${
                          step.color === "primary" 
                            ? "bg-primary/20" 
                            : step.color === "secondary"
                            ? "bg-secondary/20"
                            : "bg-accent/20"
                        }`}>
                          <step.icon className={`w-5 md:w-6 h-5 md:h-6 ${
                            step.color === "primary" 
                              ? "text-primary" 
                              : step.color === "secondary"
                              ? "text-secondary"
                              : "text-accent"
                          }`} />
                        </div>
                        <span className={`font-display text-2xl md:text-4xl font-bold opacity-20 ${
                          step.color === "primary" 
                            ? "text-primary" 
                            : step.color === "secondary"
                            ? "text-secondary"
                            : "text-accent"
                        }`}>
                          {step.number}
                        </span>
                      </div>
                      <h3 className="font-display text-lg md:text-xl font-bold mb-2 md:mb-3">{step.title}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </GlassCard>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden md:flex absolute left-4 md:left-8 lg:left-1/2 lg:-translate-x-1/2 w-3 md:w-4 h-3 md:h-4 rounded-full bg-gradient-to-br from-primary to-secondary glow-primary z-10" />

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <GlassCard className="p-8 md:p-12 lg:p-16 inline-block w-full max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-2">
              Ready to Start Your{" "}
              <span className="gradient-text">Journey</span>?
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 max-w-xl mx-auto px-4">
              Let's transform your idea into reality with our proven development process.
            </p>
            <Button href="/contact" size="lg" icon={ArrowRight}>
              Get Started Today
            </Button>
          </GlassCard>
        </div>
      </section>
    </main>
  );
};

export default Process;
