import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useTheme } from "next-themes";
import { useResponsiveVariants, useIsMobile } from "@/lib/useIsMobile";
import { useEffect, useState } from "react";

// Importa as duas logos
import LogoVerde from "@/assets/images/logo-lemonad.png";
import LogoPB from "@/assets/images/logo-lemonad-pb.png";

const services = [
  "Gestão de Tráfego Pago (Google, Meta & TikTok Ads)",
  "Desenvolvimento de E-commerce",
  "Gestão de Redes Sociais",
  "SEO e Otimização de Conteúdo",
  "Identidade Visual",
  "Automação de Marketing",
  "Implantação de CRM",
];

const ServicesSection = () => {
  const isMobile = useIsMobile();
  const variants = useResponsiveVariants();
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
    return null;
  }

  const isDark = currentTheme === 'dark';
  const currentLogo = isDark ? LogoVerde : LogoPB;

  // ----- VERSÃO MOBILE -----
  if (isMobile) {
    return (
      <section id="services" className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-lemonad mb-4">
                Nossos <span className="text-primary">Serviços</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-8">
                Oferecemos um cardápio completo de soluções em marketing digital, criadas para gerar resultados tangíveis e impulsionar o crescimento do seu negócio.
              </p>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="font-engravers text-sm md:text-base">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full h-96 rounded-lg flex items-center justify-center p-4">
                <img
                  key={currentTheme}
                  src={currentLogo}
                  alt="Logo LemonAD"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ----- VERSÃO DESKTOP -----
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={variants.container}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="text-left">
            <motion.h2 variants={variants.itemWithMotion} className="text-5xl font-lemonad mb-4">
              Nossos <span className="text-primary">Serviços</span>
            </motion.h2>
            <motion.p variants={variants.itemWithMotion} className="text-lg text-muted-foreground mb-8">
              Oferecemos um cardápio completo de soluções em marketing digital, criadas para gerar resultados tangíveis e impulsionar o crescimento do seu negócio.
            </motion.p>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <motion.li key={index} variants={variants.item} className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span className="font-engravers text-base">{service}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div 
            variants={variants.itemWithMotion} 
            className="flex items-center justify-center"
          >
            <div className="w-full h-96 rounded-lg flex items-center justify-center p-4">
              <motion.img
                key={currentTheme}
                src={currentLogo}
                alt="Logo LemonAD"
                className="max-h-full max-w-full object-contain"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;