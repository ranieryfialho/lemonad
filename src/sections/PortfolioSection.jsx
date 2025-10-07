import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "E-commerce Sabor Natural",
    description: "Loja virtual completa com foco em conversão.",
    services: ["E-commerce", "Tráfego Pago", "SEO"],
    imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Branding Studio Criativo",
    description: "Identidade visual e posicionamento de marca.",
    services: ["Branding", "Redes Sociais"],
    imageUrl: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072&auto=format&fit=crop",
  },
  {
    title: "App Conecta Vagas",
    description: "Design de interface e estratégia de lançamento.",
    services: ["UI/UX", "Lançamento"],
    imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop",
  },
];

const PortfolioSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: isMobile ? 0.05 : 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 10 : 50 },
    visible: { opacity: 1, y: 0, transition: { duration: isMobile ? 0.3 : 0.5 } },
  };

  return (
    <section id="portfolio" className="container mx-auto py-24 text-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={itemVariants}
      >
        <h2 className="text-5xl font-lemonad mb-4">Projetos em <span className="text-primary">Destaque</span></h2>
        <p className="text-lg text-muted-foreground mx-auto max-w-2xl mb-12">
          Confira alguns dos resultados que entregamos, combinando criatividade, estratégia e tecnologia.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="grid md:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="bg-foreground/5 border-border/50 text-left overflow-hidden h-full group transition-all hover:scale-105 hover:shadow-2xl">
              <div className="overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-lemonad text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service, i) => (
                    <Badge key={i} variant="outline" className="font-engravers">
                      {service}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PortfolioSection;