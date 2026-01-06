import { Target, Eye, Heart, Lightbulb, Users, Award } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We constantly push boundaries and embrace emerging technologies to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our priority. We listen, understand, and deliver beyond expectations.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in everything we do, from code quality to user experience.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We love what we do, and that passion drives us to create remarkable digital experiences.",
  },
];

const About = () => {
  return (
    <main className="page-transition pt-24">
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative py-12 md:py-20">
        <div className="absolute top-0 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-secondary/20 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4 md:mb-6">
              About CrafZio
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 px-2">
              Pioneering the{" "}
              <span className="gradient-text">Digital Frontier</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              We're a team of innovators, creators, and problem-solvers dedicated 
              to transforming businesses through technology.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="opacity-0 animate-slide-in-left" style={{ animationFillMode: "forwards" }}>
              <SectionHeading
                badge="Our Story"
                title="Born from Innovation"
                subtitle=""
                centered={false}
              />
              <div className="space-y-3 md:space-y-4 text-sm md:text-base text-muted-foreground">
                <p>
                  CrafZio was founded with a singular vision: to bridge the gap between 
                  innovative technology and business success. What started as a small 
                  team of passionate developers has grown into a full-service digital 
                  agency serving clients worldwide.
                </p>
                <p>
                  We believe that every business, regardless of size, deserves access 
                  to cutting-edge technology solutions. Our approach combines technical 
                  excellence with creative thinking to deliver solutions that not only 
                  meet but exceed expectations.
                </p>
                <p>
                  Today, we continue to push the boundaries of what's possible, exploring 
                  new technologies like AI, IoT, and blockchain while staying true to our 
                  core values of quality, innovation, and client success.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4 opacity-0 animate-slide-in-right" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
              <GlassCard className="text-center py-6 md:py-8" glowColor="primary">
                <div className="text-2xl md:text-4xl font-display font-bold gradient-text mb-2">5+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Years Experience</div>
              </GlassCard>
              <GlassCard className="text-center py-6 md:py-8" glowColor="secondary">
                <div className="text-2xl md:text-4xl font-display font-bold gradient-text-secondary mb-2">150+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Projects Completed</div>
              </GlassCard>
              <GlassCard className="text-center py-6 md:py-8" glowColor="secondary">
                <div className="text-2xl md:text-4xl font-display font-bold gradient-text mb-2">50+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Happy Clients</div>
              </GlassCard>
              <GlassCard className="text-center py-6 md:py-8" glowColor="accent">
                <div className="text-2xl md:text-4xl font-display font-bold gradient-text-secondary mb-2">4</div>
                <div className="text-xs md:text-sm text-muted-foreground">Team Members</div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <GlassCard className="p-6 md:p-8" glowColor="primary">
              <div className="w-12 md:w-14 h-12 md:h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 md:mb-6">
                <Target className="w-6 md:w-7 h-6 md:h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold mb-3 md:mb-4 gradient-text">Our Mission</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth, 
                enhance efficiency, and create lasting value. We strive to be the catalyst 
                for digital transformation, helping our clients navigate the ever-evolving 
                technology landscape with confidence.
              </p>
            </GlassCard>

            <GlassCard className="p-6 md:p-8" glowColor="secondary">
              <div className="w-12 md:w-14 h-12 md:h-14 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center mb-4 md:mb-6">
                <Eye className="w-6 md:w-7 h-6 md:h-7 text-secondary" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold mb-3 md:mb-4 gradient-text-secondary">Our Vision</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                To become the global leader in innovative technology solutions, recognized 
                for our commitment to excellence, creativity, and client success. We envision 
                a future where technology seamlessly enhances every aspect of business and life.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            badge="What Drives Us"
            title="Our Core Values"
            subtitle="The principles that guide everything we do and define who we are as a team."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <GlassCard className="h-full text-center p-6 md:p-8">
                  <div className="w-12 md:w-14 h-12 md:h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 md:mb-6 mx-auto">
                    <value.icon className="w-6 md:w-7 h-6 md:h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-semibold mb-2 md:mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm">{value.description}</p>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 px-2">
            Let's Build Something{" "}
            <span className="gradient-text">Amazing</span> Together
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 max-w-xl mx-auto px-4">
            Ready to transform your vision into reality? Get in touch with our team today.
          </p>
          <Button href="/contact" size="lg">
            Start a Conversation
          </Button>
        </div>
      </section>
    </main>
  );
};

export default About;
