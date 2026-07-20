import { useState } from "react";
import { ExternalLink, Globe, Smartphone, Cpu, ImageOff } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";

const categories = ["All", "Mobile", "Website"];

const projects = [
  {
    title: "DialDesk – Admission Automation System",
    category: "Mobile",
    description: "Comprehensive admission automation application for colleges that streamlines student outreach using auto-calling technology. The system enables colleges to contact students and parents automatically during the admission process, saving time and operational effort. Features dual-panel architecture with Admin module for campaign management and User module for tracking calls and assigned tasks.",
    image: "/image/dial desk.jpeg",
    tags: ["React Native", "Firebase", "Call API", "Automation"],
    icon: Smartphone,
  },
  {
    title: "Quick Commerce App",
    category: "Mobile",
    description: "Customer app with admin panel for product management, orders, and delivery flow. Currently in development.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    tags: ["React Native", "Firebase", "Admin Panel"],
    icon: Smartphone,
  },
  {
    title: "Live Bus Tracking System",
    category: "Mobile",
    description: "Real-time GPS tracking with Firebase integration. Features driver-side & user-side modules with route mapping and ETA updates.",
    image: "/image/tracking bus .jpeg",
    images: ["/image/tracking bus .jpeg", "/image/tracking bus 2.jpeg"],
    tags: ["React Native", "Firebase", "Google Maps"],
    icon: Smartphone,
  },
  {
    title: "KrishiMitra – Smart Farming App",
    category: "Mobile",
    description: "AI-powered farming solution with AI Plant Doctor, market price tracking, weather alerts, and multilingual support.",
    image: "/image/krishi mithra.jpeg",
    tags: ["Flutter", "AI/ML", "Firebase"],
    icon: Smartphone,
  },
  {
    title: "QuickID – Student ID Management System",
    category: "Mobile",
    description: "Centralized student ID management with photo capture, digital ID generation, and instant Excel export for schools and colleges.",
    image: "/image/quick id.jpeg",
    tags: ["React Native", "Firebase", "Excel Export"],
    icon: Smartphone,
  },
  {
    title: "Learn Dart",
    category: "Mobile",
    description: "Mobile learning application available on Google Play Store for learning Dart programming language.",
    image: "/image/learn dart .jpeg",
    tags: ["Flutter", "Play Store", "Education"],
    icon: Smartphone,
  },
  {
    title: "Learn Java",
    category: "Mobile",
    description: "Comprehensive mobile learning app for Java programming with interactive lessons and hands-on practice.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
    tags: ["React Native", "Firebase", "Education"],
    icon: Smartphone,
  },
  {
    title: "Real-Time Chat Application",
    category: "Mobile",
    description: "Modern messaging app with real-time notifications, group chats, file sharing, and user presence indicators.",
    image: "https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=800&h=600&fit=crop",
    tags: ["React Native", "Firebase", "Realtime DB"],
    icon: Smartphone,
  },
  {
    title: "WhatsApp Chatbot",
    category: "Mobile",
    description: "Automated WhatsApp bot for customer engagement, inquiries, and support automation.",
    image: "https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=800&h=600&fit=crop",
    tags: ["WhatsApp API", "Node.js", "Automation"],
    icon: Smartphone,
  },
  {
    title: "Tumkur Tourist Guide App",
    category: "Mobile",
    description: "Location-based tourist guide app for exploring Tumkur with place details and travel information.",
    image: "/image/tourist_ tumakuru.jpeg",
    tags: ["React Native", "Google Maps", "Firebase"],
    icon: Smartphone,
  },
  {
    title: "SOS – Women Safety App",
    category: "Mobile",
    description: "Emergency safety application designed for women with one-tap SOS alerts, real-time location sharing with trusted contacts, emergency services integration, and immediate notification system during distress situations.",
    image: "/image/sos.jpeg",
    tags: ["React Native", "Firebase", "GPS", "Emergency API"],
    icon: Smartphone,
  },
  {
    title: "Portfolio Websites",
    category: "Website",
    description: "Professional portfolio websites showcasing client work and expertise.",
    image: "https://images.unsplash.com/photo-1460925895917-adf4ea918635?w=800&h=600&fit=crop",
    tags: ["React", "Next.js", "Tailwind CSS"],
    icon: Globe,
  },
  {
    title: "College Website",
    category: "Website",
    description: "Complete college information portal with student management, admissions, and event features.",
    image: "https://images.unsplash.com/photo-1427504494785-cdafb3a3ceca?w=800&h=600&fit=crop",
    tags: ["Next.js", "CMS", "Responsive"],
    icon: Globe,
  },
  {
    title: "Medical Appointment Portal",
    category: "Website",
    description: "Healthcare platform for managing medical appointments and patient records.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "MongoDB"],
    icon: Globe,
  },
  {
    title: "Student Marks & Results Management",
    category: "Website",
    description: "Academic management system for tracking student marks and results with analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["React", "PostgreSQL", "Charts"],
    icon: Globe,
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [imageErrors, setImageErrors] = useState(new Set());
  const [selectedProject, setSelectedProject] = useState(null);

  const handleImageError = (title: string) => {
    setImageErrors(prev => new Set([...prev, title]));
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <main className="page-transition pt-24">


      {/* Hero Section */}
      <section className="relative py-12 md:py-20">
        <div className="absolute top-1/4 right-1/3 w-48 md:w-96 h-48 md:h-96 bg-secondary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-48 md:w-96 h-48 md:h-96 bg-primary/20 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4 md:mb-6">
              Our Work
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 px-2">
              Featured{" "}
              <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Explore our portfolio of successful projects that showcase our 
              expertise across various domains and technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="relative py-6 md:py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-center gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground"
                    : "glass-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className="group cursor-pointer"
                onClick={() => handleProjectSelect(project)}
              >
                <GlassCard hover3D={false} className="overflow-hidden h-full hover:shadow-2xl transition-shadow duration-300">
                  {/* Image */}
                  <div className="relative h-40 md:h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    {!imageErrors.has(project.title) ? (
                      <>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          onError={() => handleImageError(project.title)}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-3 text-center p-4">
                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                          <ImageOff className="w-8 h-8 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">Image not available</p>
                      </div>
                    )}
                    
                    {/* Category Badge */}
                    <div className="absolute top-2 md:top-4 left-2 md:left-4 flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-0.5 md:py-1 rounded-full glass-card text-xs z-10">
                      {project.category !== "Web" && project.category !== "Website" && (
                        <project.icon className="w-2.5 md:w-3 h-2.5 md:h-3 text-primary" />
                      )}
                      {project.category}
                    </div>

                    {/* View Project */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/50 backdrop-blur-sm z-20">
                      <button 
                        className="flex items-center gap-1.5 md:gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full bg-primary text-primary-foreground font-medium text-xs md:text-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProjectSelect(project);
                        }}
                      >
                        View Details
                        <ExternalLink className="w-3 md:w-4 h-3 md:h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-6">
                    <h3 className="font-display text-lg md:text-xl font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-xs md:text-sm line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 md:p-4"
          onClick={() => setSelectedProject(null)}
        >
          <GlassCard 
            className="max-w-2xl w-full max-h-[95vh] md:max-h-[90vh] overflow-y-auto p-4 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 md:top-4 right-2 md:right-4 w-7 md:w-8 h-7 md:h-8 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors text-sm md:text-base"
            >
              ✕
            </button>

            {/* Project Image */}
            <div className="relative h-48 md:h-64 -mx-4 md:-mx-8 -mt-4 md:-mt-8 mb-4 md:mb-6 rounded-t-lg overflow-hidden group bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              {!imageErrors.has(selectedProject.title) ? (
                <>
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={selectedProject.image || selectedProject.images?.[0] || ""}
                      alt={selectedProject.title}
                      className="max-w-full max-h-full object-contain"
                      onError={() => handleImageError(selectedProject.title)}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <ImageOff className="w-16 h-16 text-primary/50" />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="space-y-4 md:space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                  {selectedProject.category !== "Web" && selectedProject.category !== "Website" && (
                    <selectedProject.icon className="w-5 md:w-6 h-5 md:h-6 text-primary" />
                  )}
                  <span className="px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                    {selectedProject.category}
                  </span>
                </div>
                <h2 className="font-display text-xl md:text-3xl font-bold mb-2 md:mb-3">
                  {selectedProject.title}
                </h2>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  About This Project
                </h3>
                <p className="text-sm md:text-base text-foreground leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Call to Action */}
              <div className="pt-3 md:pt-4 border-t border-border/50">
                <button 
                  className="w-full flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium text-sm md:text-base"
                  onClick={() => setSelectedProject(null)}
                >
                  Close Details
                  <ExternalLink className="w-3 md:w-4 h-3 md:h-4" />
                </button>
              </div>
            </div>
          </GlassCard>
        </div>
      )}
    </main>
  );
};

export default Portfolio;

