import { cn } from "@/lib/utils";
import { useScrollPosition } from './lib/useScrollPosition';
import { Dock, DockIcon } from "@/components/ui/dock";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { buttonVariants } from "@/components/ui/button";
// ▼▼▼ ADICIONE os novos ícones UsersRound e PlayCircle ▼▼▼
import { HomeIcon, LayoutGrid, MessageSquare, BarChart2, Users, UsersRound, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './sections/HeroSection';
// ▼▼▼ IMPORTE os novos componentes ▼▼▼
import AboutUsSection from "./sections/AboutUsSection";
import ServicesSection from "./sections/ServicesSection";
import MetricsSection from './sections/MetricsSection';
import MethodSection from "./sections/MethodSection"; // Importa a seção do método
// PortfolioSection foi removido
import TestimonialsSection from './sections/TestimonialsSection';
import ContactSection from './sections/ContactSection';
import { ParticlesBackground } from './components/ui/ParticlesBackground.jsx';

// ▼▼▼ ATUALIZE A ORDEM E ADICIONE OS NOVOS ITENS ▼▼▼
const DOCK_DATA = [
  { label: "Início", href: "#home", icon: HomeIcon },
  { label: "Quem Somos", href: "#about-us", icon: UsersRound }, // Nova seção
  { label: "Resultados", href: "#metrics", icon: BarChart2 }, // Renomeado de Métricas
  { label: "Serviços", href: "#services", icon: LayoutGrid }, // Renomeado
  { label: "Nosso Método", href: "#method", icon: PlayCircle }, // Nova seção
  { label: "Feedbacks", href: "#testimonials", icon: Users }, // Renomeado de Depoimentos
  { label: "Contato", href: "#contact", icon: MessageSquare }, // Renomeado
];
// ▲▲▲ FIM DA ATUALIZAÇÃO ▲▲▲

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

  // Detecta qual seção está visível na tela (mantém lógica anterior)
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
      const headerOffset = 80; // Ajuste conforme a altura do seu header fixo
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      // Atualiza a seção ativa imediatamente após o clique para feedback visual
      setActiveSection(targetId);
    }
  };


  return (
    <div className="min-h-screen text-foreground relative flex flex-col">
      <ParticlesBackground />
      <Header />
      {/* ▼▼▼ REORDENE OS COMPONENTES AQUI ▼▼▼ */}
      <main className="flex-grow bg-background">
        <HeroSection />          {/* 1 - Bem vindo */}
        <AboutUsSection />       {/* 2 - Quem somos nós */}
        <MetricsSection />       {/* 3 - Nossos Resultados */}
        <ServicesSection />      {/* 4 - Nossos serviços */}
        <MethodSection />        {/* 5 - Nosso método */}
        <TestimonialsSection />  {/* 6 - Feedbacks */}
        <ContactSection />       {/* Formulário por último */}
      </main>
      {/* ▲▲▲ FIM DA REORDENAÇÃO ▲▲▲ */}
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