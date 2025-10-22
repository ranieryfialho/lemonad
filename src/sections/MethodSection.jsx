import { motion } from "framer-motion";
import { useResponsiveVariants, useIsMobile } from "@/lib/useIsMobile";

const MethodSection = () => {
  const isMobile = useIsMobile();
  const variants = useResponsiveVariants();

  const title = "Nosso Método";
  const description = "Descubra como nossa abordagem única combina análise de dados, criatividade e execução estratégica para entregar resultados excepcionais. Assista ao vídeo e veja nosso método em ação.";
  // REMOVE a variável videoUrl, não é mais necessária por enquanto
  // const videoUrl = "URL_DO_SEU_VIDEO_AQUI"; 

  // Mobile
  if (isMobile) {
    return (
      <section id="method" className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-lemonad mb-4">
            {title}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8">
            {description}
          </p>
          <div className="aspect-video bg-foreground/10 rounded-lg flex items-center justify-center border border-border/50">
            <p className="text-muted-foreground text-sm">Vídeo será adicionado em breve</p>
          </div>
        </div>
      </section>
    );
  }

  // Desktop
  return (
    <section id="method" className="py-24">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={variants.itemWithMotion}
        >
          <h2 className="text-5xl font-lemonad mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground mx-auto max-w-3xl mb-12">
            {description}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="aspect-video max-w-4xl mx-auto"
        >
          <div className="w-full h-full bg-foreground/10 rounded-lg flex items-center justify-center border border-border/50 shadow-xl">
             <p className="text-muted-foreground">Vídeo será adicionado em breve</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodSection;