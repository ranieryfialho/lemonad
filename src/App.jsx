import { cn } from "@/lib/utils";
import { useScrollPosition } from './lib/useScrollPosition';
import { Dock, DockIcon } from "@/components/ui/dock";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { buttonVariants } from "@/components/ui/button";
import { HomeIcon, LayoutGrid, MessageSquare, BarChart2, Briefcase, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './sections/HeroSection';
import ServicesSection from "./sections/ServicesSection";
import MetricsSection from './sections/MetricsSection';
import PortfolioSection from './sections/PortfolioSection';
import TestimonialsSection from './sections/TestimonialsSection';
import ContactSection from './sections/ContactSection';
import { ParticlesBackground } from './components/ui/ParticlesBackground.jsx';

const DOCK_DATA = [
  { label: "Início", href: "#home", icon: HomeIcon },
  { label: "Nossos Serviços", href: "#services", icon: LayoutGrid },
  { label: "Métricas", href: "#metrics", icon: BarChart2 },
  { label: "Portfólio", href: "#portfolio", icon: Briefcase },
  { label: "Depoimentos", href: "#testimonials", icon: Users },
  { label: "Fale Conosco", href: "#contact", icon: MessageSquare },
];

function App() {
  const isScrolled = useScrollPosition(80);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Detecta qual seção está visível na tela (melhorado)
  useEffect(() => {
    const handleScroll = () => {
      const sections = DOCK_DATA.map(item => item.href);
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Centro da viewport
      
      // Verifica se está no final da página
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      
      if (isBottom) {
        // Se estiver no final, ativa a última seção (contact)
        setActiveSection("#contact");
        return;
      }

      // Loop reverso para pegar a seção mais próxima do topo
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.querySelector(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionMiddle = sectionTop + (sectionHeight / 2);

          if (scrollPosition >= sectionTop - 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    handleScroll(); // Chama ao montar
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    
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
    <div className="min-h-screen text-foreground relative flex flex-col">
      <ParticlesBackground />
      <Header />
      <main className="flex-grow bg-background">
        <HeroSection />
        <ServicesSection />
        <MetricsSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />

      <motion.div
        animate={{
          top: isMobile ? "auto" : (isScrolled ? "0.5rem" : "auto"),
          bottom: isMobile ? "1.5rem" : (isScrolled ? "auto" : "2.5rem"),
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed left-1/2 -translate-x-1/2 z-50"
      >
        <TooltipProvider>
          <Dock direction="middle" className="border border-white/10 bg-background/30 backdrop-blur-lg shadow-lg">
            {DOCK_DATA.map((item) => {
              const isActive = activeSection === item.href;
              
              return (
                <DockIcon key={item.label}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a 
                        href={item.href} 
                        onClick={(e) => handleScroll(e, item.href)}
                        aria-label={item.label} 
                        className={cn(
                          buttonVariants({ variant: "ghost", size: "icon" }),
                          "size-12 rounded-full transition-all cursor-pointer",
                          isActive 
                            ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                            : "hover:text-primary"
                        )}
                      >
                        <item.icon className="size-5" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent><p>{item.label}</p></TooltipContent>
                  </Tooltip>
                </DockIcon>
              );
            })}
          </Dock>
        </TooltipProvider>
      </motion.div>
    </div>
  );
}

export default App;