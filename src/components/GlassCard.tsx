import { HTMLAttributes, ReactNode, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  hover3D?: boolean;
  glowColor?: "primary" | "secondary" | "accent";
}

const GlassCard = ({ 
  children, 
  className, 
  hover3D = true,
  glowColor = "primary",
  style,
  onMouseMove,
  onMouseLeave,
  ...props
}: GlassCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hover3D || !cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform("");
  };

  const glowClasses = {
    primary: "hover:shadow-[0_0_30px_hsl(187_100%_42%/0.3)]",
    secondary: "hover:shadow-[0_0_30px_hsl(262_83%_58%/0.3)]",
    accent: "hover:shadow-[0_0_30px_hsl(330_81%_60%/0.3)]",
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "glass-card p-6 transition-all duration-300",
        glowClasses[glowColor],
        className
      )}
      style={{
        transform: transform,
        transition: transform ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
        ...style
      }}
      onMouseMove={(e) => {
        handleMouseMove(e);
        onMouseMove?.(e);
      }}
      onMouseLeave={(e) => {
        handleMouseLeave();
        onMouseLeave?.(e);
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
