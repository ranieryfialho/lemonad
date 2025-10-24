import { cn } from "@/lib/utils";
import { useScrollPosition } from "@/lib/useScrollPosition";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// Importa as duas logos
import LogoVerde from "@/assets/images/logo-lemonad.png";
import LogoPB from "@/assets/images/logo-lemonad-pb.png";

const Header = () => {
  const isScrolled = useScrollPosition(10);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('light');

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const updateTheme = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setCurrentTheme(isDark ? 'dark' : 'light');
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, [mounted]);

  if (!mounted) {
    return (
      <header 
        className={cn(
          "sticky top-0 z-40 transition-colors duration-300",
          isScrolled 
            ? "bg-background" 
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto flex h-20 items-center justify-between p-4 text-foreground">
          <div className="flex items-center gap-3">
            {/* Placeholder durante o carregamento */}
            <div className="h-12 w-12 bg-transparent" />
            <div>
              <h1 className="text-2xl font-lemonad text-primary">LemonAD</h1>
              <p className="text-xs font-engravers tracking-widest uppercase">Marketing Digital</p>
            </div>
          </div>
          
          <AnimatedThemeToggler />
        </div>
      </header>
    );
  }

  const isDark = currentTheme === 'dark';
  const currentLogo = isDark ? LogoVerde : LogoPB;

  return (
    <header 
      className={cn(
        "sticky top-0 z-40 transition-colors duration-300",
        isScrolled 
          ? "bg-background" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between p-4 text-foreground">
        <div className="flex items-center gap-3">
          {/* Logo que muda conforme o tema */}
          <img
            key={currentTheme}
            src={currentLogo}
            alt="Logo LemonAD"
            className="h-12 w-12 object-contain transition-opacity duration-300"
          />
          <div>
            <h1 className="text-2xl font-lemonad text-primary">LemonAD</h1>
            <p className="text-xs font-engravers tracking-widest uppercase">Marketing Digital</p>
          </div>
        </div>
        
        <AnimatedThemeToggler />
      </div>
    </header>
  );
};

export default Header;