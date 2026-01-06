import AnimatedBackground from "@/components/AnimatedBackground";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";

const techCategories = [
  {
    title: "Frontend",
    techs: [
      { name: "React", color: "#61DAFB" },
      { name: "Vue.js", color: "#4FC08D" },
      { name: "Next.js", color: "#ffffff" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Tailwind CSS", color: "#06B6D4" },
      { name: "Svelte", color: "#FF3E00" },
      { name: "Angular", color: "#DD0031" },
    ],
  },
  {
    title: "Backend",
    techs: [
      { name: "Node.js", color: "#339933" },
      { name: "Python", color: "#3776AB" },
      { name: "Go", color: "#00ADD8" },
      { name: "Java", color: "#ED8B00" },
      { name: "GraphQL", color: "#E10098" },
      { name: "Express.js", color: "#000000" },
      { name: "FastAPI", color: "#009688" },
    ],
  },
  {
    title: "Mobile",
    techs: [
      { name: "React Native", color: "#61DAFB" },
      { name: "Flutter", color: "#02569B" },
      { name: "Swift", color: "#FA7343" },
      { name: "Kotlin", color: "#7F52FF" },
      { name: "Expo", color: "#000000" },
    ],
  },
  {
    title: "Cloud & DevOps",
    techs: [
      { name: "AWS", color: "#FF9900" },
      { name: "Google Cloud", color: "#4285F4" },
      { name: "Azure", color: "#0078D4" },
      { name: "Docker", color: "#2496ED" },
      { name: "Kubernetes", color: "#326CE5" },
      { name: "Vercel", color: "#000000" },
      { name: "Netlify", color: "#00C7B7" },
    ],
  },
  {
    title: "Database",
    techs: [
      { name: "PostgreSQL", color: "#336791" },
      { name: "MongoDB", color: "#13AA52" },
      { name: "Firebase", color: "#FFCA28" },
      { name: "Redis", color: "#DC382D" },
      { name: "MySQL", color: "#00758F" },
      { name: "Supabase", color: "#3ECF8E" },
    ],
  },
  {
    title: "AI & Automation",
    techs: [
      { name: "TensorFlow", color: "#FF6F00" },
      { name: "PyTorch", color: "#EE4C2C" },
      { name: "OpenAI", color: "#00A67E" },
      { name: "LangChain", color: "#1C3C3C" },
      { name: "WhatsApp API", color: "#25D366" },
    ],
  },
];

const Technologies = () => {
  return (
    <main className="page-transition pt-24">
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative py-12 md:py-20">
        <div className="absolute top-1/4 left-1/3 w-48 md:w-96 h-48 md:h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-48 md:w-96 h-48 md:h-96 bg-secondary/20 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4 md:mb-6">
              Tech Stack
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 px-2">
              Cutting-Edge{" "}
              <span className="gradient-text">Technologies</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              We leverage the latest technologies and frameworks to build 
              robust, scalable, and future-proof solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Grid */}
      <section className="relative py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {techCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${categoryIndex * 100}ms`, animationFillMode: "forwards" }}
              >
                <GlassCard className="h-full p-6 md:p-8">
                  <h3 className="font-display text-lg md:text-xl font-bold mb-4 md:mb-6 gradient-text">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {category.techs.map((tech, techIndex) => (
                      <div
                        key={tech.name}
                        className="group relative px-3 md:px-4 py-1.5 md:py-2 rounded-xl glass-card cursor-pointer transition-all duration-300 hover:scale-105"
                        style={{
                          animationDelay: `${(categoryIndex * 100) + (techIndex * 50)}ms`,
                        }}
                      >
                        <div
                          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                          style={{ backgroundColor: tech.color }}
                        />
                        <span className="relative text-xs md:text-sm font-medium text-foreground">
                          {tech.name}
                        </span>
                        <div
                          className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ backgroundColor: tech.color }}
                        />
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Orbiting Animation Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-2">
              Interconnected{" "}
              <span className="gradient-text">Ecosystem</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto px-4">
              Our technologies work together seamlessly to deliver 
              comprehensive solutions.
            </p>
          </div>

          {/* Orbital Animation */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center">
            {/* Center */}
            <div className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center z-10 glow-primary shadow-2xl">
              <span className="font-display font-bold text-primary-foreground text-sm sm:text-base md:text-lg">CZ</span>
            </div>

            {/* Orbit Ring 1 - Fast */}
            <div className="absolute w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full border-2 border-border/40 animate-spin-slow" style={{ animationDuration: "15s" }}>
              <div className="absolute -top-2 sm:-top-3 md:-top-4 left-1/2 -translate-x-1/2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg bg-cyan-400/90 flex items-center justify-center text-xs sm:text-sm font-bold shadow-lg">
                ⚛️
              </div>
              <div className="absolute bottom-1/2 -right-2 sm:-right-3 md:-right-4 translate-y-1/2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg bg-blue-500/90 flex items-center justify-center text-xs sm:text-sm font-bold shadow-lg">
                📱
              </div>
              <div className="absolute top-1/2 -bottom-2 sm:-bottom-3 md:-bottom-4 -translate-x-1/2 left-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg bg-purple-500/90 flex items-center justify-center text-xs sm:text-sm font-bold shadow-lg">
                🚀
              </div>
              <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg bg-pink-500/90 flex items-center justify-center text-xs sm:text-sm font-bold shadow-lg">
                💾
              </div>
            </div>

            {/* Orbit Ring 2 - Medium */}
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border-2 border-border/30 animate-spin-slow" style={{ animationDuration: "25s", animationDirection: "reverse" }}>
              <div className="absolute -top-2 sm:-top-3 md:-top-4 left-1/2 -translate-x-1/2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg bg-violet-500/90 flex items-center justify-center text-xs sm:text-sm font-bold shadow-lg">
                🐍
              </div>
              <div className="absolute bottom-1/2 -right-2 sm:-right-3 md:-right-4 translate-y-1/2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg bg-orange-500/90 flex items-center justify-center text-xs sm:text-sm font-bold shadow-lg">
                ☁️
              </div>
              <div className="absolute top-1/2 -bottom-2 sm:-bottom-3 md:-bottom-4 -translate-x-1/2 left-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg bg-green-500/90 flex items-center justify-center text-xs sm:text-sm font-bold shadow-lg">
                🔧
              </div>
              <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg bg-red-500/90 flex items-center justify-center text-xs sm:text-sm font-bold shadow-lg">
                📊
              </div>
            </div>

            {/* Orbit Ring 3 - Slow */}
            <div className="absolute w-[360px] h-[360px] sm:w-[450px] sm:h-[450px] md:w-[540px] md:h-[540px] rounded-full border-2 border-border/20 animate-spin-slow" style={{ animationDuration: "40s" }}>
              <div className="absolute -top-2 sm:-top-3 md:-top-4 left-1/2 -translate-x-1/2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg bg-pink-400/90 flex items-center justify-center text-xs sm:text-sm font-bold shadow-lg">
                💡
              </div>
              <div className="absolute bottom-1/2 -right-2 sm:-right-3 md:-right-4 translate-y-1/2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg bg-indigo-500/90 flex items-center justify-center text-xs sm:text-sm font-bold shadow-lg">
                🤖
              </div>
              <div className="absolute top-1/2 -bottom-2 sm:-bottom-3 md:-bottom-4 -translate-x-1/2 left-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg bg-cyan-500/90 flex items-center justify-center text-xs sm:text-sm font-bold shadow-lg">
                ⚡
              </div>
              <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg bg-yellow-500/90 flex items-center justify-center text-xs sm:text-sm font-bold shadow-lg">
                🌐
              </div>
            </div>

            {/* Glow effects */}
            <div className="absolute w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full bg-primary/10 blur-[80px] opacity-40" />
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-secondary/10 blur-[80px] opacity-40" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Technologies;
