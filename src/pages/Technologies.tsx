import { Code2, Server, Smartphone, Cloud, Database, Bot } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import SectionHeading from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

// Inline SVG illustrations for each tech category - guaranteed to always display
const frontendSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220"><defs><linearGradient id="bg1" x1="0%25" y1="0%25" x2="100%25" y2="100%25"><stop offset="0%25" stop-color="%23f3e8ff"/><stop offset="100%25" stop-color="%23ede9fe"/></linearGradient><linearGradient id="card1" x1="0%25" y1="0%25" x2="100%25" y2="100%25"><stop offset="0%25" stop-color="%238b5cf6"/><stop offset="100%25" stop-color="%236d28d9"/></linearGradient></defs><rect width="400" height="220" fill="url(%23bg1)" rx="12"/><rect x="60" y="30" width="180" height="120" rx="10" fill="url(%23card1)" opacity="0.9"/><rect x="68" y="38" width="164" height="8" rx="4" fill="%23ffffff" opacity="0.3"/><rect x="68" y="54" width="100" height="6" rx="3" fill="%23ffffff" opacity="0.5"/><rect x="68" y="66" width="140" height="6" rx="3" fill="%23ffffff" opacity="0.4"/><rect x="68" y="78" width="80" height="6" rx="3" fill="%23c4b5fd" opacity="0.7"/><rect x="68" y="90" width="120" height="6" rx="3" fill="%23ffffff" opacity="0.3"/><rect x="68" y="102" width="90" height="6" rx="3" fill="%23a78bfa" opacity="0.6"/><rect x="150" y="60" width="160" height="100" rx="10" fill="%23ffffff" opacity="0.95" style="filter:drop-shadow(0 8px 16px rgba(109,40,217,0.2))"/><rect x="160" y="72" width="140" height="8" rx="4" fill="%23e9d5ff"/><rect x="160" y="86" width="100" height="6" rx="3" fill="%23ddd6fe"/><rect x="160" y="98" width="120" height="6" rx="3" fill="%23ede9fe"/><circle cx="330" cy="155" r="22" fill="%238b5cf6" opacity="0.15"/><circle cx="330" cy="155" r="14" fill="%238b5cf6" opacity="0.25"/><text x="330" y="160" text-anchor="middle" font-size="14" fill="%236d28d9" font-weight="bold">⚛</text><circle cx="70" cy="175" r="16" fill="%23a78bfa" opacity="0.2"/><text x="70" y="180" text-anchor="middle" font-size="12" fill="%236d28d9">&lt;/&gt;</text></svg>`;

const backendSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220"><defs><linearGradient id="bg2" x1="0%25" y1="0%25" x2="100%25" y2="100%25"><stop offset="0%25" stop-color="%23e0f2fe"/><stop offset="100%25" stop-color="%23bae6fd"/></linearGradient><linearGradient id="server" x1="0%25" y1="0%25" x2="100%25" y2="100%25"><stop offset="0%25" stop-color="%230ea5e9"/><stop offset="100%25" stop-color="%230369a1"/></linearGradient></defs><rect width="400" height="220" fill="url(%23bg2)" rx="12"/><rect x="140" y="20" width="120" height="28" rx="6" fill="url(%23server)"/><rect x="148" y="28" width="8" height="12" rx="2" fill="%23ffffff" opacity="0.7"/><circle cx="245" cy="34" r="5" fill="%2300ff88" opacity="0.9"/><rect x="140" y="56" width="120" height="28" rx="6" fill="url(%23server)" opacity="0.85"/><rect x="148" y="64" width="8" height="12" rx="2" fill="%23ffffff" opacity="0.7"/><circle cx="245" cy="70" r="5" fill="%2300ff88" opacity="0.9"/><rect x="140" y="92" width="120" height="28" rx="6" fill="url(%23server)" opacity="0.7"/><rect x="148" y="100" width="8" height="12" rx="2" fill="%23ffffff" opacity="0.7"/><circle cx="245" cy="106" r="5" fill="%2300ff88" opacity="0.9"/><ellipse cx="200" cy="140" rx="60" ry="18" fill="%230ea5e9" opacity="0.12"/><path d="M170 125 Q200 160 230 125" stroke="%230ea5e9" stroke-width="2" fill="none" opacity="0.4"/><rect x="280" y="80" width="60" height="40" rx="8" fill="%23ffffff" opacity="0.9"/><text x="310" y="104" text-anchor="middle" font-size="14" fill="%230369a1" font-weight="bold">&lt;/&gt;</text><ellipse cx="200" cy="180" rx="80" ry="15" fill="%230ea5e9" opacity="0.08"/></svg>`;

const mobileSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220"><defs><linearGradient id="bg3" x1="0%25" y1="0%25" x2="100%25" y2="100%25"><stop offset="0%25" stop-color="%23d1fae5"/><stop offset="100%25" stop-color="%23a7f3d0"/></linearGradient><linearGradient id="phone" x1="0%25" y1="0%25" x2="100%25" y2="100%25"><stop offset="0%25" stop-color="%2310b981"/><stop offset="100%25" stop-color="%23047857"/></linearGradient></defs><rect width="400" height="220" fill="url(%23bg3)" rx="12"/><rect x="155" y="10" width="90" height="160" rx="16" fill="url(%23phone)" opacity="0.9"/><rect x="163" y="22" width="74" height="120" rx="8" fill="%23ffffff" opacity="0.15"/><rect x="170" y="30" width="60" height="8" rx="4" fill="%23ffffff" opacity="0.6"/><rect x="170" y="44" width="40" height="6" rx="3" fill="%23a7f3d0" opacity="0.8"/><rect x="170" y="56" width="50" height="6" rx="3" fill="%23ffffff" opacity="0.4"/><circle cx="185" cy="85" r="14" fill="%2300d4ff" opacity="0.8"/><text x="185" y="90" text-anchor="middle" font-size="12" fill="white">⚛</text><circle cx="215" cy="85" r="14" fill="%230079ff" opacity="0.8"/><text x="215" y="90" text-anchor="middle" font-size="12" fill="white">🦋</text><circle cx="185" cy="115" r="14" fill="%23ff6b00" opacity="0.8"/><text x="185" y="120" text-anchor="middle" font-size="12" fill="white">🍎</text><circle cx="215" cy="115" r="14" fill="%23a855f7" opacity="0.8"/><text x="215" y="120" text-anchor="middle" font-size="12" fill="white">K</text><rect x="185" y="162" width="30" height="4" rx="2" fill="%23ffffff" opacity="0.4"/><ellipse cx="200" cy="195" rx="55" ry="12" fill="%2310b981" opacity="0.1"/><path d="M130 90 Q155 130 130 160" stroke="%2310b981" stroke-width="2" fill="none" opacity="0.3" stroke-dasharray="4,3"/><path d="M270 90 Q245 130 270 160" stroke="%2310b981" stroke-width="2" fill="none" opacity="0.3" stroke-dasharray="4,3"/></svg>`;

const cloudSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220"><defs><linearGradient id="bg4" x1="0%25" y1="0%25" x2="100%25" y2="100%25"><stop offset="0%25" stop-color="%23ffedd5"/><stop offset="100%25" stop-color="%23fed7aa"/></linearGradient></defs><rect width="400" height="220" fill="url(%23bg4)" rx="12"/><ellipse cx="180" cy="80" rx="70" ry="45" fill="%23f97316" opacity="0.85"/><ellipse cx="145" cy="95" rx="45" ry="32" fill="%23f97316" opacity="0.85"/><ellipse cx="215" cy="95" rx="45" ry="32" fill="%23f97316" opacity="0.85"/><rect x="165" y="95" width="30" height="50" rx="2" fill="%23ffffff" opacity="0.9"/><polygon points="155,95 225,95 195,55" fill="%23ffffff" opacity="0.9"/><rect x="80" y="130" width="50" height="40" rx="6" fill="%23fb923c" opacity="0.7"/><rect x="86" y="136" width="10" height="10" rx="2" fill="%23fff" opacity="0.6"/><rect x="100" y="136" width="10" height="10" rx="2" fill="%23fff" opacity="0.6"/><rect x="86" y="150" width="24" height="6" rx="2" fill="%23fff" opacity="0.4"/><rect x="260" y="100" width="60" height="50" rx="10" fill="%23ffffff" opacity="0.9"/><circle cx="290" cy="120" r="14" fill="%230070e0" opacity="0.8"/><path d="M282 120 L290 112 L298 120" stroke="%23fff" stroke-width="2" fill="none"/><path d="M282 122 L290 130 L298 122" stroke="%23fff" stroke-width="2" fill="none"/><ellipse cx="200" cy="190" rx="90" ry="14" fill="%23f97316" opacity="0.08"/></svg>`;

const databaseSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220"><defs><linearGradient id="bg5" x1="0%25" y1="0%25" x2="100%25" y2="100%25"><stop offset="0%25" stop-color="%23ccfbf1"/><stop offset="100%25" stop-color="%2399f6e4"/></linearGradient><linearGradient id="cyl" x1="0%25" y1="0%25" x2="100%25" y2="100%25"><stop offset="0%25" stop-color="%2306b6d4"/><stop offset="100%25" stop-color="%230f766e"/></linearGradient></defs><rect width="400" height="220" fill="url(%23bg5)" rx="12"/><ellipse cx="160" cy="55" rx="50" ry="15" fill="url(%23cyl)"/><rect x="110" y="55" width="100" height="65" fill="url(%23cyl)" opacity="0.85"/><ellipse cx="160" cy="120" rx="50" ry="15" fill="%2306b6d4"/><ellipse cx="160" cy="80" rx="50" ry="12" fill="%2367e8f9" opacity="0.4"/><ellipse cx="160" cy="100" rx="50" ry="12" fill="%2367e8f9" opacity="0.3"/><ellipse cx="160" cy="185" rx="50" ry="15" fill="%2306b6d4" opacity="0.7"/><rect x="110" y="155" width="100" height="30" fill="%2306b6d4" opacity="0.6"/><circle cx="160" cy="155" r="12" fill="%2322c55e" opacity="0.9"/><text x="160" y="159" text-anchor="middle" font-size="10" fill="white">🌿</text><rect x="230" y="50" width="120" height="90" rx="8" fill="%23ffffff" opacity="0.9"/><rect x="238" y="60" width="104" height="10" rx="2" fill="%23e0fdfa" opacity="0.8"/><rect x="238" y="74" width="104" height="10" rx="2" fill="%23ccfbf1" opacity="0.7"/><rect x="238" y="88" width="104" height="10" rx="2" fill="%23e0fdfa" opacity="0.8"/><rect x="238" y="102" width="104" height="10" rx="2" fill="%23ccfbf1" opacity="0.7"/><rect x="238" y="116" width="104" height="10" rx="2" fill="%23e0fdfa" opacity="0.8"/><rect x="238" y="58" width="34" height="74" fill="%2306b6d4" opacity="0.08"/></svg>`;

const aiSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 220"><defs><linearGradient id="bg6" x1="0%25" y1="0%25" x2="100%25" y2="100%25"><stop offset="0%25" stop-color="%23fce7f3"/><stop offset="100%25" stop-color="%23fbcfe8"/></linearGradient></defs><rect width="400" height="220" fill="url(%23bg6)" rx="12"/><ellipse cx="145" cy="120" rx="80" ry="85" fill="%23ec4899" opacity="0.15"/><ellipse cx="145" cy="120" rx="60" ry="65" fill="%23ec4899" opacity="0.2"/><circle cx="145" cy="75" r="8" fill="%23ec4899" opacity="0.8"/><circle cx="115" cy="90" r="6" fill="%23f472b6" opacity="0.7"/><circle cx="175" cy="90" r="6" fill="%23f472b6" opacity="0.7"/><circle cx="105" cy="115" r="6" fill="%23f472b6" opacity="0.7"/><circle cx="185" cy="115" r="6" fill="%23f472b6" opacity="0.7"/><circle cx="115" cy="140" r="6" fill="%23f472b6" opacity="0.7"/><circle cx="175" cy="140" r="6" fill="%23f472b6" opacity="0.7"/><circle cx="145" cy="155" r="8" fill="%23ec4899" opacity="0.8"/><line x1="145" y1="75" x2="115" y2="90" stroke="%23ec4899" stroke-width="1.5" opacity="0.5"/><line x1="145" y1="75" x2="175" y2="90" stroke="%23ec4899" stroke-width="1.5" opacity="0.5"/><line x1="115" y1="90" x2="105" y2="115" stroke="%23ec4899" stroke-width="1.5" opacity="0.5"/><line x1="175" y1="90" x2="185" y2="115" stroke="%23ec4899" stroke-width="1.5" opacity="0.5"/><line x1="105" y1="115" x2="115" y2="140" stroke="%23ec4899" stroke-width="1.5" opacity="0.5"/><line x1="185" y1="115" x2="175" y2="140" stroke="%23ec4899" stroke-width="1.5" opacity="0.5"/><line x1="115" y1="140" x2="145" y2="155" stroke="%23ec4899" stroke-width="1.5" opacity="0.5"/><line x1="175" y1="140" x2="145" y2="155" stroke="%23ec4899" stroke-width="1.5" opacity="0.5"/><rect x="260" y="80" width="18" height="80" rx="4" fill="%23a855f7" opacity="0.4"/><rect x="282" y="80" width="18" height="60" rx="4" fill="%23a855f7" opacity="0.5"/><ellipse cx="278" cy="165" rx="20" ry="6" fill="%23a855f7" opacity="0.3"/><rect x="268" y="80" width="30" height="6" rx="3" fill="%23a855f7" opacity="0.3"/><rect x="270" y="90" width="5" height="50" rx="2" fill="%23a855f7" opacity="0.5"/><rect x="283" y="90" width="5" height="40" rx="2" fill="%23a855f7" opacity="0.5"/><rect x="296" y="90" width="5" height="55" rx="2" fill="%23a855f7" opacity="0.5"/><circle cx="310" cy="130" r="20" fill="%23ec4899" opacity="0.12"/><path d="M298 125 Q310 115 322 125 Q315 140 310 150 Q305 140 298 125Z" fill="%23ec4899" opacity="0.3"/></svg>`;

const techCategories = [
  {
    title: "Frontend",
    description: "Build beautiful and interactive user interfaces.",
    icon: Code2,
    borderClass: "border-[#e9d5ff]/60",
    shadowClass: "shadow-[0_8px_30px_rgba(139,92,246,0.08)] hover:shadow-[0_16px_40px_rgba(139,92,246,0.18)] hover:-translate-y-2",
    badgeClass: "bg-[#F3E8FF]/80 text-[#6D28D9] hover:bg-[#E9D5FF]",
    iconBgClass: "bg-[#7C3AED] text-white",
    techs: ["React", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS", "Svelte", "Angular"],
    image: frontendSvg,
    accent: "from-[#f3e8ff] to-white"
  },
  {
    title: "Backend",
    description: "Server-side development and APIs.",
    icon: Server,
    borderClass: "border-[#bae6fd]/60",
    shadowClass: "shadow-[0_8px_30px_rgba(14,165,233,0.08)] hover:shadow-[0_16px_40px_rgba(14,165,233,0.18)] hover:-translate-y-2",
    badgeClass: "bg-[#E0F2FE]/80 text-[#0369A1] hover:bg-[#BAE6FD]",
    iconBgClass: "bg-[#0ea5e9] text-white",
    techs: ["Node.js", "Python", "Go", "Java", "GraphQL", "Express.js", "FastAPI"],
    image: backendSvg,
    accent: "from-[#e0f2fe] to-white"
  },
  {
    title: "Mobile",
    description: "Build native and cross-platform apps.",
    icon: Smartphone,
    borderClass: "border-[#a7f3d0]/60",
    shadowClass: "shadow-[0_8px_30px_rgba(16,185,129,0.08)] hover:shadow-[0_16px_40px_rgba(16,185,129,0.18)] hover:-translate-y-2",
    badgeClass: "bg-[#D1FAE5]/80 text-[#047857] hover:bg-[#A7F3D0]",
    iconBgClass: "bg-[#10B981] text-white",
    techs: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"],
    image: mobileSvg,
    accent: "from-[#d1fae5] to-white"
  },
  {
    title: "Cloud & DevOps",
    description: "Deploy, automate and scale with confidence.",
    icon: Cloud,
    borderClass: "border-[#fed7aa]/60",
    shadowClass: "shadow-[0_8px_30px_rgba(249,115,22,0.08)] hover:shadow-[0_16px_40px_rgba(249,115,22,0.18)] hover:-translate-y-2",
    badgeClass: "bg-[#FFEDD5]/80 text-[#C2410C] hover:bg-[#FED7AA]",
    iconBgClass: "bg-[#F97316] text-white",
    techs: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Vercel", "Netlify"],
    image: cloudSvg,
    accent: "from-[#ffedd5] to-white"
  },
  {
    title: "Database",
    description: "Store, manage and query your data.",
    icon: Database,
    borderClass: "border-[#99f6e4]/60",
    shadowClass: "shadow-[0_8px_30px_rgba(6,182,212,0.08)] hover:shadow-[0_16px_40px_rgba(6,182,212,0.18)] hover:-translate-y-2",
    badgeClass: "bg-[#CCFBF1]/80 text-[#0F766E] hover:bg-[#99F6E4]",
    iconBgClass: "bg-[#06B6D4] text-white",
    techs: ["PostgreSQL", "MongoDB", "Firebase", "Redis", "MySQL", "Supabase"],
    image: databaseSvg,
    accent: "from-[#ccfbf1] to-white"
  },
  {
    title: "AI & Automation",
    description: "Integrate AI and automate workflows.",
    icon: Bot,
    borderClass: "border-[#fbcfe8]/60",
    shadowClass: "shadow-[0_8px_30px_rgba(236,72,153,0.08)] hover:shadow-[0_16px_40px_rgba(236,72,153,0.18)] hover:-translate-y-2",
    badgeClass: "bg-[#FCE7F3]/80 text-[#BE185D] hover:bg-[#FBCFE8]",
    iconBgClass: "bg-[#EC4899] text-white",
    techs: ["TensorFlow", "PyTorch", "OpenAI", "LangChain", "WhatsApp API"],
    image: aiSvg,
    accent: "from-[#fce7f3] to-white"
  },
];

const Technologies = () => {
  return (
    <main className="page-transition bg-slate-50/50 min-h-screen text-slate-900 pb-20 pt-24">

      {/* Header Section */}
      <section className="relative py-12 md:py-16">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-100/50 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-50 text-blue-600 border border-blue-100 mb-6 shadow-sm">
            Tech Stack
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-slate-900">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Technologies</span>
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We leverage the latest technologies and frameworks to build 
            robust, scalable, and future-proof solutions.
          </p>
        </div>
      </section>

      {/* Tech Grid matching the beautiful screenshot */}
      <section className="relative z-10 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {techCategories.map((category, index) => (
              <div
                key={category.title}
                className="h-full"
              >
                <div className={cn(
                  "relative flex flex-col h-full rounded-[1.5rem] border-[1px] overflow-hidden transition-all duration-500 group bg-white",
                  category.borderClass,
                  category.shadowClass
                )}>
                  
                  {/* Content Container */}
                  <div className="p-6 md:p-8 flex-1 relative z-10">
                    {/* Header Row */}
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-display text-2xl md:text-[28px] font-bold text-slate-900 mb-2 tracking-tight">
                          {category.title}
                        </h3>
                      </div>
                      
                      {/* Top Right Icon */}
                      <div className={cn(
                        "w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm",
                        category.iconBgClass
                      )}>
                        <category.icon className="w-6 h-6" />
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 max-w-[85%]">
                      {category.description}
                    </p>

                    {/* Skill Pills */}
                    <div className="flex flex-wrap gap-2.5 relative z-20">
                      {category.techs.map((tech) => (
                        <span
                          key={tech}
                          className={cn(
                            "px-3.5 py-1.5 rounded-lg text-[13px] font-semibold tracking-wide transition-all duration-300 cursor-default",
                            category.badgeClass
                          )}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>


                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default Technologies;
