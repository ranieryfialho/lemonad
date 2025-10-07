import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator.jsx";
import { RocketImage } from "@/components/icons/RocketImage.jsx";
import { FunnelImage } from "@/components/icons/FunnelImage.jsx";
import { ResultadoImage } from "@/components/icons/ResultadoImage.jsx";
import { LemonadeGlassImage } from "@/components/icons/LemonadeGlassImage.jsx";
import { LemonImage } from "@/components/icons/LemonImage.jsx";

const HeroSection = () => {
  const heroRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event) => {
    if (!heroRef.current) return;
    const { clientX, clientY } = event;
    const { left, top, width, height } = heroRef.current.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const parallaxX1 = useTransform(mouseX, [-0.5, 0.5], ["-15px", "15px"]);
  const parallaxY1 = useTransform(mouseY, [-0.5, 0.5], ["-10px", "10px"]);
  const parallaxX2 = useTransform(mouseX, [-0.5, 0.5], ["20px", "-20px"]);
  const parallaxY2 = useTransform(mouseY, [-0.5, 0.5], ["12px", "-12px"]);
  const parallaxX3 = useTransform(mouseX, [-0.5, 0.5], ["-8px", "8px"]);
  const parallaxY3 = useTransform(mouseY, [-0.5, 0.5], ["-18px", "18px"]);
  const parallaxX4 = useTransform(mouseX, [-0.5, 0.5], ["25px", "-25px"]);
  const parallaxY4 = useTransform(mouseY, [-0.5, 0.5], ["-15px", "15px"]);
  const parallaxX5 = useTransform(mouseX, [-0.5, 0.5], ["-22px", "22px"]);
  const parallaxY5 = useTransform(mouseY, [-0.5, 0.5], ["20px", "-20px"]);
  const parallaxX6 = useTransform(mouseX, [-0.5, 0.5], ["10px", "-10px"]);
  const parallaxY6 = useTransform(mouseY, [-0.5, 0.5], ["-25px", "25px"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section 
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center justify-center text-center"
    >
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div style={{ x: parallaxX1, y: parallaxY1 }} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} className="absolute top-10 left-10 hidden lg:block">
          <RocketImage className="w-48 h-auto opacity-10 dark:opacity-40" />
        </motion.div>
        <motion.div style={{ x: parallaxX2, y: parallaxY2 }} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }} className="absolute -bottom-20 -right-20 hidden lg:block">
          <FunnelImage className="w-64 h-auto opacity-5 dark:opacity-20" />
        </motion.div>
        <motion.div style={{ x: parallaxX3, y: parallaxY3 }} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }} className="absolute top-1/3 left-[20%] hidden lg:block">
          <ResultadoImage className="w-32 h-auto opacity-5 dark:opacity-25" />
        </motion.div>
        <motion.div style={{ x: parallaxX4, y: parallaxY4 }} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.5 }} viewport={{ once: true }} className="absolute top-10 right-10 hidden md:block">
          <LemonadeGlassImage className="w-32 h-auto opacity-5 dark:opacity-20" />
        </motion.div>
        <motion.div style={{ x: parallaxX5, y: parallaxY5 }} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.6 }} viewport={{ once: true }} className="absolute bottom-1/4 left-[5%]">
          <LemonImage className="w-16 h-auto lg:w-24 opacity-10 dark:opacity-30" />
        </motion.div>
        <motion.div style={{ x: parallaxX6, y: parallaxY6 }} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.7 }} viewport={{ once: true }} className="absolute top-1/4 right-[5%] hidden md:block">
          <ResultadoImage className="w-24 h-auto md:w-40 opacity-5 dark:opacity-20" />
        </motion.div>
      </div>

      <div className="container mx-auto z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center" 
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-lemonad font-bold">
            Marketing com gosto de <br /> <span className="text-primary">Resultado.</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="mx-auto mt-6 max-w-2xl font-engravers text-lg tracking-wider text-muted-foreground">
            Transformamos ideias em resultados impactantes. Estratégias de marketing digital que dão sabor ao seu sucesso.
          </motion.p>
          <motion.div variants={itemVariants} className="mt-16"> 
            <ScrollIndicator />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;