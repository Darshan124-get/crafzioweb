import { Lightbulb, Target, Palette, Code2, TestTube, Rocket, ArrowRight } from "lucide-react";

import Button from "@/components/Button";

const steps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Idea & Research",
    description: "Understand your vision, goals, and target audience through deep market research.",
    bgClass: "bg-gradient-to-br from-violet-500 to-purple-600",
    badgeBg: "bg-violet-400/30",
  },
  {
    number: "02",
    icon: Target,
    title: "Planning & Strategy",
    description: "Create a clear roadmap with milestones, timelines, and technical architecture.",
    bgClass: "bg-gradient-to-br from-blue-500 to-indigo-600",
    badgeBg: "bg-blue-400/30",
  },
  {
    number: "03",
    icon: Palette,
    title: "UI/UX Design",
    description: "Craft beautiful, intuitive interfaces aligned with your brand identity.",
    bgClass: "bg-gradient-to-br from-pink-500 to-rose-600",
    badgeBg: "bg-pink-400/30",
  },
  {
    number: "04",
    icon: Code2,
    title: "Development",
    description: "Build with cutting-edge technologies and clean, maintainable code.",
    bgClass: "bg-gradient-to-br from-emerald-500 to-teal-600",
    badgeBg: "bg-emerald-400/30",
  },
  {
    number: "05",
    icon: TestTube,
    title: "Testing & QA",
    description: "Rigorous testing ensures bug-free, secure performance across all devices.",
    bgClass: "bg-gradient-to-br from-amber-500 to-orange-600",
    badgeBg: "bg-amber-400/30",
  },
  {
    number: "06",
    icon: Rocket,
    title: "Launch & Support",
    description: "Deploy, monitor, and provide ongoing support for peak performance.",
    bgClass: "bg-gradient-to-br from-cyan-500 to-blue-600",
    badgeBg: "bg-cyan-400/30",
  },
];

const Process = () => {
  return (
    <main className="page-transition pt-24">


      {/* Hero Section */}
      <section className="relative py-12 md:py-20">
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
              A proven 6-step methodology that delivers successful projects 
              from concept to launch.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps Grid */}
      <section className="relative py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
              >
                <div className={`${step.bgClass} rounded-2xl p-6 md:p-8 text-white h-full flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] relative overflow-hidden`}>
                  {/* Large faded step number in background */}
                  <span className="absolute -top-4 -right-2 text-[8rem] font-display font-black text-white/10 leading-none select-none pointer-events-none">
                    {step.number}
                  </span>

                  {/* Icon badge */}
                  <div className={`w-12 h-12 rounded-xl ${step.badgeBg} flex items-center justify-center mb-5 relative z-10`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Step number + Title */}
                  <div className="relative z-10 mb-3">
                    <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">Step {step.number}</span>
                    <h3 className="font-display text-xl md:text-2xl font-bold mt-1">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-white/80 leading-relaxed relative z-10 flex-1">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Connector arrows between steps (visible on desktop) */}
          <div className="hidden lg:flex items-center justify-center mt-12 gap-3">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${step.bgClass} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-12 lg:p-16 max-w-2xl mx-auto">
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
          </div>
        </div>
      </section>
    </main>
  );
};

export default Process;
