// src/sections/AboutUsSection.jsx
import { motion } from "framer-motion";
import { useResponsiveVariants, useIsMobile } from "@/lib/useIsMobile";

const AboutUsSection = () => {
  const isMobile = useIsMobile();
  const variants = useResponsiveVariants();

  // Conteúdo placeholder - personalize depois
  const title = "Quem Somos Nós";
  const description = "Somos uma equipe apaixonada por marketing digital, focada em transformar desafios em oportunidades e ideias em resultados concretos. Combinamos criatividade, estratégia e tecnologia para impulsionar o sucesso dos nossos clientes.";
  const imageUrl = "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop"; // Imagem placeholder

  // Mobile
  if (isMobile) {
    return (
      <section id="about-us" className="py-24 bg-foreground/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-lemonad mb-4">
            {title}
          </h2>
          <img src={imageUrl} alt="Quem Somos Nós" className="w-full h-64 object-cover rounded-lg my-8" />
          <p className="text-base md:text-lg text-muted-foreground">
            {description}
          </p>
        </div>
      </section>
    );
  }

  // Desktop
  return (
    <section id="about-us" className="py-24 bg-foreground/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={variants.container}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={variants.itemWithMotion} className="text-left">
            <h2 className="text-5xl font-lemonad mb-4">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {description}
            </p>
          </motion.div>
          <motion.div variants={variants.itemWithMotion} className="flex items-center justify-center">
             <img src={imageUrl} alt={title} className="w-full max-w-lg h-auto rounded-lg shadow-lg" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;