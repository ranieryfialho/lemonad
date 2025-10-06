import { cn } from "@/lib/utils";
import { useScrollPosition } from "@/lib/useScrollPosition";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

const Header = () => {
  const isScrolled = useScrollPosition(10);

  return (
    <header 
      className={cn(
        "sticky top-0 z-40 transition-colors duration-300",
        // ▼▼▼ MUDANÇA: Removemos a borda e o glassmorphism, deixando apenas o fundo sólido ▼▼▼
        isScrolled 
          ? "bg-background" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between p-4 text-foreground">
        <div>
          <h1 className="text-2xl font-lemonad text-primary">LemonAD</h1>
          <p className="text-xs font-engravers tracking-widest uppercase">Marketing Digital</p>
        </div>
        
        <AnimatedThemeToggler />
      </div>
    </header>
  );
};

export default Header;