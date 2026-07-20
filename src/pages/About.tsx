import { Target, Eye, Heart, Lightbulb, Users, Award, Shield, CheckCircle2, ArrowRight } from "lucide-react";

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



      {/* Hero Section - Static, no slideshow */}
      <section className="relative py-12 md:py-20">
        <div className="absolute top-0 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-secondary/20 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <GlassCard
            hover3D={false}
            glowColor="secondary"
            className="max-w-4xl mx-auto text-center p-8 md:p-12 lg:p-16 border border-white/40 shadow-2xl bg-white/40 backdrop-blur-xl relative overflow-hidden rounded-[2rem]"
          >
            {/* Inner subtle glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
            <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-50 text-blue-600 border border-blue-200/50 mb-6 shadow-sm">
                About CrafZio
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight text-slate-900">
                Pioneering the <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  Digital Frontier
                </span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
                We're a team of innovators, creators, and problem-solvers dedicated 
                to transforming businesses through technology.
              </p>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <SectionHeading
                badge="Our Story"
                title="Born from Innovation"
                subtitle=""
                centered={false}
              />
              <div className="space-y-3 md:space-y-4 text-sm md:text-base text-muted-foreground mb-8">
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
                  new technologies like AI, and while staying true to our 
                  core values of quality, innovation, and client success.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
                <GlassCard className="text-center py-4" glowColor="primary">
                  <div className="text-xl md:text-2xl font-display font-bold gradient-text mb-1">5+</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground">Years Experience</div>
                </GlassCard>
                <GlassCard className="text-center py-4" glowColor="secondary">
                  <div className="text-xl md:text-2xl font-display font-bold gradient-text-secondary mb-1">150+</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground">Projects</div>
                </GlassCard>
                <GlassCard className="text-center py-4" glowColor="secondary">
                  <div className="text-xl md:text-2xl font-display font-bold gradient-text mb-1">50+</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground">Happy Clients</div>
                </GlassCard>
                <GlassCard className="text-center py-4" glowColor="accent">
                  <div className="text-xl md:text-2xl font-display font-bold gradient-text-secondary mb-1">4</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground">Team Members</div>
                </GlassCard>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/20">
                <img 
                  src="/@fs/C:/Users/Mallikarjun%20Patil/.gemini/antigravity/brain/57b0bb8c-6536-411c-91b9-5a330f2d6ae0/about_team_office_1779684376055.png" 
                  alt="CrafZio Team at Work" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -left-8 md:-left-12 bottom-12 glass-card px-4 md:px-6 py-3 md:py-4 rounded-2xl flex items-center gap-3 md:gap-4 shadow-xl">
                <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Shield className="w-5 md:w-6 h-5 md:h-6 text-blue-500" />
                </div>
                <div>
                  <div className="text-xs md:text-sm text-muted-foreground">Trusted by</div>
                  <div className="text-sm md:text-base font-bold">Businesses Worldwide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MSME Registration */}
      <section className="relative py-12 md:py-20 bg-slate-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_2px_20px_rgb(0,0,0,0.03)] border border-slate-100 flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-6 relative overflow-hidden">
              {/* Left Logo - Recreated from screenshot */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0 flex items-center justify-center">
                {/* Background decorative rings */}
                <div className="absolute inset-0 rounded-full border-[0.5px] border-slate-200/50" />
                <div className="absolute inset-4 rounded-full border border-slate-100/50" />
                <div className="absolute inset-[-10px] rounded-full border border-dashed border-slate-200/40 animate-[spin_40s_linear_infinite]" />
                
                {/* Floating blue element (from screenshot) */}
                <div className="absolute bottom-6 left-4 w-7 h-7 bg-blue-500/10 backdrop-blur-md rounded-lg -rotate-12 flex items-center justify-center border border-blue-200/50 z-20 shadow-lg">
                   <div className="w-2.5 h-2.5 bg-blue-600 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
                </div>

                {/* Small tick markers on outer ring */}
                <div className="absolute top-10 -left-2 text-slate-300 text-xs transform -rotate-45">/</div>
                <div className="absolute top-4 right-10 text-slate-300 text-xs transform rotate-45">/</div>

                {/* Main Badge */}
                <div className="relative w-[85%] h-[85%] bg-white rounded-full shadow-[0_12px_45px_rgba(0,0,0,0.06)] border border-slate-50 flex flex-col items-center justify-center p-4 z-10 overflow-hidden">
                  
                  {/* Subtle inner ring */}
                  <div className="absolute inset-1.5 rounded-full border border-slate-100/50" />

                  {/* Circular Text SVG */}
                  <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full pointer-events-none">
                    {/* Top curve (left to right) */}
                    <path id="curve-top" d="M 45 100 A 55 55 0 0 1 155 100" fill="transparent" />
                    <text className="text-[11px] font-bold fill-slate-500 tracking-[0.2em] uppercase" style={{ fontFamily: "Inter, sans-serif" }}>
                      <textPath href="#curve-top" startOffset="50%" textAnchor="middle">Registered</textPath>
                    </text>

                    {/* Bottom curve (right to left) */}
                    <path id="curve-bottom" d="M 165 110 A 65 65 0 0 1 35 110" fill="transparent" />
                    <text className="text-[13px] font-bold fill-slate-800 tracking-[0.15em] uppercase" style={{ fontFamily: "Inter, sans-serif" }}>
                      <textPath href="#curve-bottom" startOffset="50%" textAnchor="middle">Govt. of India</textPath>
                    </text>
                  </svg>

                  {/* Center Content */}
                  <div className="flex flex-col items-center justify-center space-y-1 relative z-10 mt-1">
                    {/* Indian Emblem (Using Wikimedia commons SVG) */}
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
                      alt="Emblem" 
                      className="w-7 h-10 mb-1 opacity-80 mix-blend-multiply filter grayscale" 
                    />
                    
                    {/* UDYAM MSME Text */}
                    <div className="text-center flex flex-col items-center justify-center leading-[1.1]">
                      <span className="font-display text-[26px] md:text-[32px] font-black text-[#0f172a] tracking-tight">UDYAM</span>
                      <span className="font-display text-[22px] md:text-[28px] font-extrabold text-[#0f172a] tracking-tight">MSME</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="flex-1 space-y-6 text-center md:text-left z-10">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-slate-800">
                    UDYAM MSME Registered
                  </h3>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl">
                    CrafZio is a UDYAM MSME registered digital services startup recognized by the Government of India.
                    Our MSME registration ensures transparency, credibility, and compliance in every project we deliver.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="text-center md:text-left">
                      <div className="text-xs font-bold text-slate-800 mb-0.5">Registered & Verified</div>
                      <div className="text-[10px] text-slate-500">By Government of India</div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="text-center md:text-left">
                      <div className="text-xs font-bold text-slate-800 mb-0.5">Transparent & Reliable</div>
                      <div className="text-[10px] text-slate-500">Business Practices</div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Target className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="text-center md:text-left">
                      <div className="text-xs font-bold text-slate-800 mb-0.5">Growth-Focused</div>
                      <div className="text-[10px] text-slate-500">Digital Partner</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Banner */}
            <div className="bg-[#f4f7ff] rounded-2xl p-6 text-center border border-blue-50">
              <p className="text-xs md:text-sm text-slate-600 mb-1.5">
                We specialize in custom website and mobile app development for startups, businesses, and professionals.
              </p>
              <p className="text-sm md:text-base font-bold text-blue-600">
                Work with a registered, reliable, and growth-focused digital partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-12 md:py-20 bg-slate-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Mission Card */}
            <div className="relative bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_4px_25px_rgb(0,0,0,0.03)] border border-slate-50 overflow-hidden group">
              {/* Background removed as requested */}
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-50/80 flex items-center justify-center shadow-sm">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-slate-800">Our Mission</h3>
                </div>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-sm">
                  To empower businesses with innovative digital solutions that drive growth, 
                  enhance efficiency, and create lasting value. We strive to be the catalyst 
                  for digital transformation, helping our clients navigate the ever-evolving 
                  technology landscape with confidence.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="relative bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_4px_25px_rgb(0,0,0,0.03)] border border-slate-50 overflow-hidden group">
              {/* Background removed as requested */}
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-50/80 flex items-center justify-center shadow-sm">
                    <Eye className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-slate-800">Our Vision</h3>
                </div>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-sm">
                  To become the global leader in innovative technology solutions, recognized 
                  for our commitment to excellence, creativity, and client success. We envision 
                  a future where technology seamlessly enhances every aspect of business and life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-12 md:py-20 bg-slate-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 mb-4 shadow-sm border border-blue-100">
              What Drives Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are as a team.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value.title}
              >
                <div className="h-full bg-white rounded-[2rem] p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-50 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-blue-50 rounded-full blur-xl opacity-60"></div>
                    <value.icon className={`w-8 h-8 relative z-10 ${
                      index === 0 ? 'text-blue-500' :
                      index === 1 ? 'text-emerald-500' :
                      index === 2 ? 'text-purple-500' :
                      'text-orange-500'
                    }`} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-800 mb-3">{value.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-12 md:py-20 bg-slate-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 rounded-[2.5rem] p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 100% 50%, rgba(255,255,255,0.4) 0%, transparent 60%)" }}></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-400 rounded-full blur-[80px] opacity-50"></div>
            
            <div className="relative z-10 text-center md:text-left">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Let's Build Something <br className="hidden md:block"/>
                Amazing Together
              </h2>
              <p className="text-blue-100 text-sm md:text-base max-w-lg mx-auto md:mx-0">
                Ready to transform your vision into reality? Get in touch with our team today.
              </p>
              <p className="text-blue-200/80 text-xs mt-4 flex items-center justify-center md:justify-start gap-2">
                <CheckCircle2 className="w-3 h-3" /> We typically respond within 24 hours
              </p>
            </div>
            
            <div className="relative z-10 flex-shrink-0">
              <a href="/contact" className="inline-flex items-center gap-3 bg-white text-blue-600 font-semibold px-6 py-3.5 rounded-full shadow-lg transition-all text-sm md:text-base">
                Start a Conversation
                <div className="bg-blue-600 text-white rounded-full p-1">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
