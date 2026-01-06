import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import GlassCard from "@/components/GlassCard";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "CrafZio transformed our vision into reality. Their attention to detail and innovative approach exceeded our expectations. The team's expertise in both design and development is truly remarkable.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, InnovateLab",
    content: "Working with CrafZio was a game-changer for our startup. They delivered a world-class mobile app that our users love. Their IoT expertise helped us create a truly connected experience.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "CTO, DataFlow",
    content: "The AI solutions CrafZio implemented have revolutionized our data processing. Their team understood our complex requirements and delivered beyond what we imagined possible.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Director, SmartBuild",
    content: "From concept to deployment, CrafZio was with us every step. Their process is transparent, efficient, and produces outstanding results. Highly recommended for any tech project.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "Product Lead, HealthTech",
    content: "The team's UI/UX expertise is exceptional. They created an intuitive interface that our healthcare professionals love. The ongoing support has been fantastic too.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <main className="page-transition pt-24">
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative py-12 md:py-20">
        <div className="absolute top-1/3 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-accent/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-primary/20 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4 md:mb-6">
              Client Feedback
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 px-2">
              What Our Clients{" "}
              <span className="gradient-text">Say</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Don't just take our word for it. Here's what our clients have to 
              say about working with CrafZio.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="relative py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <GlassCard className="p-6 md:p-8 lg:p-12 relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 md:top-8 md:right-8 opacity-10">
                <Quote className="w-16 h-16 md:w-24 md:h-24 text-primary" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex gap-0.5 md:gap-1 mb-4 md:mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-sm md:text-base lg:text-lg text-foreground leading-relaxed italic">
                  "{testimonials[currentIndex].content}"
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-6 md:mt-8 pt-6 md:pt-8 border-t border-border">
                <button
                  onClick={goToPrevious}
                  className="p-2 md:p-3 rounded-xl glass-card hover:bg-muted transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                </button>

                <div className="flex gap-1.5 md:gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setIsAutoPlaying(false);
                        setCurrentIndex(index);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "w-6 md:w-8 bg-primary"
                          : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={goToNext}
                  className="p-2 md:p-3 rounded-xl glass-card hover:bg-muted transition-colors"
                >
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="relative py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-display text-xl md:text-2xl font-bold text-center mb-8 md:mb-12 px-2">
            More <span className="gradient-text">Success Stories</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <GlassCard className="h-full p-4 md:p-6">
                  <div className="flex gap-0.5 mb-2 md:mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 md:w-3 md:h-3 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-4">
                    "{testimonial.content}"
                  </p>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;
