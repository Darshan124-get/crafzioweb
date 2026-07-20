import { LucideIcon } from "lucide-react";
import GlassCard from "./GlassCard";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, image, delay = 0 }: ServiceCardProps) => {
  return (
    <div className="h-full">
      <GlassCard className="h-full group cursor-pointer overflow-hidden p-0 flex flex-col" glowColor="primary">
        <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
          {image ? (
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10" />
          )}
          {/* Subtle gradient overlay to ensure text/icon visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
          
          {/* Icon Container floating on the image */}
          <div className="absolute -bottom-6 left-6 w-14 h-14 rounded-2xl bg-background flex items-center justify-center shadow-xl border border-border group-hover:-translate-y-2 group-hover:shadow-primary/20 transition-all duration-300 z-10">
            <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
          </div>
        </div>

        <div className="p-6 pt-10 flex-1 flex flex-col relative bg-card">
          <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed flex-1">
            {description}
          </p>

          {/* Bottom Gradient Line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </GlassCard>
    </div>
  );
};

export default ServiceCard;
