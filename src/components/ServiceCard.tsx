import { LucideIcon } from "lucide-react";
import GlassCard from "./GlassCard";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) => {
  return (
    <div 
      className="opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      <GlassCard className="h-full group cursor-pointer" glowColor="primary">
        <div className="relative">
          {/* Icon Container */}
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-7 h-7 text-primary" />
          </div>

          {/* Floating Glow Effect */}
          <div className="absolute -top-2 -left-2 w-20 h-20 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Content */}
          <h3 className="font-display text-xl font-semibold mb-3 group-hover:gradient-text transition-all duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>

          {/* Bottom Gradient Line */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
        </div>
      </GlassCard>
    </div>
  );
};

export default ServiceCard;
