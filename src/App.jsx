import { cn } from "@/lib/utils";
import { useScrollPosition } from './lib/useScrollPosition';
import { Dock, DockIcon } from "@/components/ui/dock";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { buttonVariants } from "@/components/ui/button";
import { HomeIcon, LayoutGrid, MessageSquare, BarChart2, Users, UsersRound, PlayCircle, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './sections/HeroSection';
import AboutUsSection from "./sections/AboutUsSection";
import ServicesSection from "./sections/ServicesSection";
import MetricsSection from './sections/MetricsSection';
import MethodSection from "./sections/MethodSection";
import TestimonialsSection from './sections/TestimonialsSection';
import ContactSection from './sections/ContactSection';
import { ParticlesBackground } from './components/ui/ParticlesBackground.jsx';

const DOCK_DATA = [
  { label: "Início", href: "#home", icon: HomeIcon },
  { label: "Quem Somos", href: "#about-us", icon: UsersRound },
  { label: "Resultados", href: "#metrics", icon: BarChart2 },
  { label: "Serviços", href: "#services", icon: LayoutGrid },
  { label: "Nosso Método", href: "#method", icon: PlayCircle },
  { label: "Feedbacks", href: "#testimonials", icon: Star },
  { label: "Contato", href: "#contact", icon: MessageSquare },
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

  useEffect(() => {
    const handleScroll = () => {
      const sections = DOCK_DATA.map(item => item.href);
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;

      if (isBottom) {
        setActiveSection("#contact");
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.querySelector(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop - 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    handleScroll();
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
      setActiveSection(targetId);
    }
  };


  return (
    <div className="min-h-screen text-foreground relative flex flex-col">
      <ParticlesBackground />
      <Header />
      <main className="flex-grow bg-background">
        <HeroSection />
        <AboutUsSection />
        <MetricsSection />
        <ServicesSection />
        <MethodSection />
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