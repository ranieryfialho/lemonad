import React from "react";
import { Link } from "react-scroll";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/ui/dock";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { buttonVariants } from "@/components/ui/button";
import { HomeIcon, LayoutGrid, MessageSquare, BarChart2 } from "lucide-react";

const DOCK_DATA = [
  { label: "Início", to: "home", icon: HomeIcon },
  { label: "Nossos Serviços", to: "services", icon: LayoutGrid },
  { label: "Métricas", to: "metrics", icon: BarChart2 },
  { label: "Fale Conosco", to: "contact", icon: MessageSquare },
];

export const DockContent = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <TooltipProvider>
      <Dock direction="middle" className="border border-white/10 bg-background/30 backdrop-blur-lg shadow-lg">
        {DOCK_DATA.map((item) => (
          <DockIcon key={item.label}>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={`#${item.to}`}
                  onClick={(e) => handleScroll(e, item.to)}
                  aria-label={item.label} 
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full hover:text-primary transition-colors cursor-pointer"
                  )}
                >
                  <item.icon className="size-5" />
                </a>
              </TooltipTrigger>
              <TooltipContent><p>{item.label}</p></TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
      </Dock>
    </TooltipProvider>
  );
};