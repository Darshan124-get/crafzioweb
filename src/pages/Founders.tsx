import { Code2, Github, Linkedin, Mail } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";

const founders = [
  {
    id: 1,
    name: "Chethan S",
    role: "Full Stack Developer",
    image: "/image/chethan s.jpeg",
    bio: "Passionate full stack developer with expertise in building scalable web applications and innovative digital solutions.",
    socials: {
      github: "#",
      linkedin: "https://www.linkedin.com/in/chethan-s-623073250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "#",
    },
  },
  {
    id: 2,
    name: "Darshan AB",
    role: "Full Stack Developer",
    image: "/image/darshan a b.jpg",
    bio: "Creative technologist focused on building robust backend systems and seamless user experiences.",
    socials: {
      github: "#",
      linkedin: "https://www.linkedin.com/in/darshan-ab-aa2631331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "#",
    },
  },
  {
    id: 3,
    name: "Venkataramana T",
    role: "Full Stack Developer & Cloud Manager",
    image: "/image/venkataraman t.jpg",
    bio: "Strategic architect specializing in cloud infrastructure, DevOps, and building enterprise-grade solutions.",
    socials: {
      github: "#",
      linkedin: "https://www.linkedin.com/in/venkataramana-t-b3081a368?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "#",
    },
  },
  {
    id: 4,
    name: "Jithin G K",
    role: "Full Stack Developer & UI/UX Designer",
    image: "/image/JITHIN GK.jpeg",
    bio: "Design-focused developer passionate about creating beautiful interfaces and exceptional user experiences.",
    socials: {
      github: "#",
      linkedin: "https://www.linkedin.com/in/jithin-gk-19671b2a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "#",
    },
  },
];

const Founders = () => {
  return (
    <main className="page-transition pt-24">
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative py-12 md:py-20">
        <div className="absolute top-1/4 left-1/3 w-48 md:w-96 h-48 md:h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-48 md:w-96 h-48 md:h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "0.5s" }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6 animate-fade-in-down">
              Meet Our Team
            </span>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              The Visionaries Behind{" "}
              <span className="gradient-text">CrafZio</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              Four passionate full-stack developers united by a shared vision to 
              build extraordinary digital experiences that transform ideas into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Grid */}
      <section className="relative py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 auto-rows-fr">
            {founders.map((founder, index) => (
              <div 
                key={founder.id} 
                className="flex flex-col items-center opacity-0 animate-fade-in-up h-full"
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: "forwards" }}
              >
                {/* Circular Image */}
                <div className="w-32 md:w-48 h-32 md:h-48 rounded-full overflow-hidden flex items-center justify-center border-4 border-background bg-gradient-to-br from-primary/20 to-accent/20 mb-4 md:mb-6 group hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:border-primary/50 relative flex-shrink-0 neon-border">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {founder.image ? (
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover hover:scale-125 transition-transform duration-500 relative z-10"
                    />
                  ) : (
                    <Code2 className="w-20 h-20 text-primary/40 animate-bounce" />
                  )}
                </div>

                {/* Card with Content */}
                <GlassCard className="w-full text-center hover:scale-105 transition-transform duration-300 h-full flex flex-col neon-border">
                  <div className="p-4 md:p-6 flex flex-col flex-1">
                    <h3 className="font-display text-xl font-bold mb-1 animate-fade-in" style={{ animationDelay: `${index * 150 + 100}ms` }}>
                      {founder.name}
                    </h3>
                    <p className="text-sm text-primary font-semibold mb-3 animate-fade-in" style={{ animationDelay: `${index * 150 + 150}ms` }}>
                      {founder.role}
                    </p>
                    <p className="text-sm text-muted-foreground mb-6 line-clamp-3 animate-fade-in flex-1" style={{ animationDelay: `${index * 150 + 200}ms` }}>
                      {founder.bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-3 justify-center">
                      <a
                        href={founder.socials.github}
                        className="inline-flex items-center justify-center p-2 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1 animate-fade-in-up"
                        style={{ animationDelay: `${index * 150 + 250}ms` }}
                        aria-label="GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={founder.socials.linkedin}
                        className="inline-flex items-center justify-center p-2 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1 animate-fade-in-up"
                        style={{ animationDelay: `${index * 150 + 300}ms` }}
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a
                        href={founder.socials.email}
                        className="inline-flex items-center justify-center p-2 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1 animate-fade-in-up"
                        style={{ animationDelay: `${index * 150 + 350}ms` }}
                        aria-label="Email"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 animate-pulse" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-xl sm:text-2xl md:text-4xl font-bold mb-4 md:mb-6 animate-fade-in-up px-2">
              Ready to Work With Us?
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-6 md:mb-8 animate-fade-in-up px-4" style={{ animationDelay: "100ms" }}>
              Whether you have a groundbreaking project or just want to collaborate,
              we'd love to hear from you. Let's create something exceptional together.
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <Button size="lg" className="hover:scale-110 transition-transform duration-300">Get In Touch</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Founders;
