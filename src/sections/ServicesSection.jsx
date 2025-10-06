import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const services = [
  "Gestão de Tráfego Pago (Google & Meta Ads)",
  "Desenvolvimento de E-commerce",
  "Gestão de Redes Sociais",
  "SEO e Otimização de Conteúdo",
  "Automação de Marketing e CRM",
];

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariantsLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const itemVariantsRight = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="container mx-auto py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="text-left">
          <motion.h2 variants={itemVariantsLeft} className="text-5xl font-lemonad mb-4">
            Nossos <span className="text-primary">Serviços</span>
          </motion.h2>
          <motion.p variants={itemVariantsLeft} className="text-lg text-muted-foreground mb-8">
            Oferecemos um cardápio completo de soluções em marketing digital, criadas para gerar resultados tangíveis e impulsionar o crescimento do seu negócio.
          </motion.p>
          <ul className="space-y-4">
            {services.map((service, index) => (
              <motion.li key={index} variants={itemVariantsLeft} className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                <span className="font-engravers text-base">{service}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div variants={itemVariantsRight} className="flex items-center justify-center">
          <div className="w-full h-96 bg-foreground/5 rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Ilustração em breve...</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;