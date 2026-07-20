import { Code2, Github, Linkedin, Mail } from "lucide-react";

import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";

const founders = [
  {
    id: 1,
    name: "Chethan S",
    role: "Full Stack Developer",
    image: "/image/chethan.jpeg",
    imageClass: "object-top",
    bio: "Experienced in developing responsive websites, APIs, cloud-based applications, and business solutions using modern technologies.",
    socials: {
      github: "#",
      linkedin: "https://www.linkedin.com/in/chethan-s-623073250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "#",
    },
  },
  {
    id: 2,
    name: "Venkataramana T",
    role: "Full Stack Developer & Cloud Manager",
    image: "/image/venktrammna.jpeg",
    imageClass: "object-top",
    bio: "Strategic architect specializing in cloud infrastructure, DevOps, and building enterprise-grade solutions.",
    socials: {
      github: "#",
      linkedin: "https://www.linkedin.com/in/venkataramana-t-b3081a368?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "#",
    },
  },
  {
    id: 3,
    name: "Darshan AB",
    role: "Full Stack Developer",
    image: "/image/drashan a b.jpeg",
    imageClass: "object-top",
    bio: "I am a Full Stack Developer specializing in creating fast, secure, and scalable web applications. From frontend UI design to backend architecture and cloud deployment, I develop complete digital solutions that deliver real business value.",
    socials: {
      github: "#",
      linkedin: "https://www.linkedin.com/in/darshan-ab-aa2631331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "#",
    },
  },
  {
    id: 4,
    name: "Jithin G K",
    role: "Full Stack Developer & UI/UX Designer",
    image: "/image/jithin.jpeg",
    imageClass: "object-top",
    bio: "Design-focused developer passionate about creating beautiful interfaces and exceptional user experiences.",
    socials: {
      github: "#",
      linkedin: "https://www.linkedin.com/in/jithin-gk-19671b2a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "#",
    },
  },
  {
    id: 5,
    name: "Mallikarjun Patil",
    role: "Web & Mobile App Development",
    image: "/image/mallikarjuna.png",
    imageClass: "object-top",
    bio: "We build modern, scalable, and high-performance web and mobile applications designed to help businesses grow in the digital world. From startups to enterprises, our solutions combine creativity, technology.",
    socials: {
      github: "#",
      linkedin: "https://www.linkedin.com/in/mallikarjun-patil-b95b5b348/",
      email: "#",
    },
  },
  {
    id: 6,
    name: "Yashwanth CK",
    role: "AWS Developer",
    image: "/image/yashwanth ck.png",
    imageClass: "object-top",
    bio: "AWS Developer & Cloud Solutions Architect passionate about building scalable, secure. Specialized in cloud deployment, server management, backend systems, and performance optimization AWS technologies.",
    socials: {
      github: "#",
      linkedin: "https://www.linkedin.com/in/yashwantha-c-k-028198396/",
      email: "#",
    },
  },
];

const Founders = () => {
  return (
    <main className="page-transition pt-24">


      {/* Hero Section */}
      <section className="relative py-12 md:py-20">
        <div className="absolute top-1/4 left-1/3 w-48 md:w-96 h-48 md:h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-48 md:w-96 h-48 md:h-96 bg-accent/20 rounded-full blur-[120px]" style={{ animationDelay: "0.5s" }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
              Meet Our Team
            </span>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ animationDelay: "100ms" }}>
              Meet Our {" "}
              <span className="gradient-text">Team</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto" style={{ animationDelay: "200ms" }}>
              A passionate team united by a shared vision to
              build extraordinary digital experiences that transform ideas into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Grid */}
      <section className="relative py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {founders.map((founder, index) => (
              <div
                key={founder.id}
              >
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full flex flex-col">
                  {/* Image inside the card */}
                  <div className="relative px-6 pt-6 flex justify-center">
                    <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white bg-white shadow-lg flex-shrink-0">
                      {founder.image ? (
                        <img
                          src={founder.image}
                          alt={founder.name}
                          className={`w-full h-full object-cover bg-white ${founder.imageClass || "object-top"}`}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                          <Code2 className="w-12 h-12 text-blue-300" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center flex-1 flex flex-col">
                    <h3 className="font-display text-lg font-bold text-gray-900 mb-1">
                      {founder.name}
                    </h3>
                    <p className="text-sm text-blue-600 font-semibold mb-3">
                      {founder.role}
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">
                      {founder.bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-3 justify-center">
                      <a
                        href={founder.socials.github}
                        className="p-2 rounded-lg bg-gray-50 hover:bg-blue-50 text-gray-400 hover:text-blue-600 transition-all duration-300"
                        aria-label="GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={founder.socials.linkedin}
                        className="p-2 rounded-lg bg-gray-50 hover:bg-blue-50 text-gray-400 hover:text-blue-600 transition-all duration-300"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a
                        href={founder.socials.email}
                        className="p-2 rounded-lg bg-gray-50 hover:bg-blue-50 text-gray-400 hover:text-blue-600 transition-all duration-300"
                        aria-label="Email"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-xl sm:text-2xl md:text-4xl font-bold mb-4 md:mb-6 px-2">
              Ready to Work With Us?
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-6 md:mb-8 px-4">
              Whether you have a groundbreaking project or just want to collaborate,
              we'd love to hear from you. Let's create something exceptional together.
            </p>
            <div>
              <Button size="lg" className="hover:scale-110 transition-transform duration-300">Get In Touch</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Founders;
