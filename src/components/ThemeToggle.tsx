import { Moon, Sun, Zap } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('cyber');
    else setTheme('light');
  };

  return (
    <button
      onClick={cycleTheme}
      className="relative w-10 h-10 flex items-center justify-center rounded-full glass-card hover:bg-muted transition-colors"
      aria-label="Toggle theme"
      title={`Current Theme: ${theme}`}
    >
      {theme === 'light' && <Sun className="w-5 h-5 text-primary" />}
      {theme === 'dark' && <Moon className="w-5 h-5 text-primary" />}
      {theme === 'cyber' && <Zap className="w-5 h-5 text-primary" />}
    </button>
  );
}
