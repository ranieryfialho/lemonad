import { motion } from "framer-motion";
import { useResponsiveVariants, useIsMobile } from "@/lib/useIsMobile";
import { Play } from "lucide-react";

const MethodSection = () => {
  const isMobile = useIsMobile();
  const variants = useResponsiveVariants();

  const title = "Nosso Método";
  const description = "Descubra como nossa abordagem única combina análise de dados, criatividade e execução estratégica para entregar resultados excepcionais.";
  
  // URL do YouTube com parâmetros para autoplay mudo e controles mínimos
  const youtubeEmbedUrl = "https://www.youtube.com/embed/y0kBX3K2eJ0?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0&showinfo=0&fs=1&playsinline=1";

  // Mobile
  if (isMobile) {
    return (
      <section id="method" className="relative min-h-screen bg-black flex flex-col">
        {/* Cabeçalho compacto */}
        <div className="flex-shrink-0 bg-gradient-to-b from-background to-transparent pt-6 pb-4 px-4 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-2">
              <span className="text-[10px] font-engravers uppercase tracking-widest text-primary/80 bg-primary/10 px-3 py-1 rounded-full">
                Nosso Método
              </span>
            </div>
            <h2 className="text-xl font-lemonad leading-tight text-white">
              {title}
            </h2>
          </div>
        </div>
        
        {/* Video ocupando todo o espaço disponível */}
        <div className="flex-1 relative w-full bg-black">
          <iframe
            src={youtubeEmbedUrl}
            title="Vídeo - Nosso Método LemonAD"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full bg-black"
            loading="lazy"
          />
        </div>

        {/* Rodapé compacto */}
        <div className="flex-shrink-0 bg-gradient-to-t from-background to-transparent py-4 px-4 relative z-10">
          <div className="text-center">
            <p className="text-[10px] text-muted-foreground flex items-center justify-center gap-1.5">
              <Play className="h-3 w-3 text-primary" />
              Veja nosso método em ação
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Desktop
  return (
    <section id="method" className="py-24 bg-gradient-to-b from-background to-foreground/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={variants.itemWithMotion}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-engravers uppercase tracking-wider text-primary/80 bg-primary/10 px-6 py-2 rounded-full">
              Nosso Método
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-lemonad mb-6 leading-tight">
            <span className="text-primary relative inline-block">
              {title}
              <svg className="absolute -bottom-3 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                <path d="M0 6C50 6 50 6 100 6C150 6 150 6 200 6" stroke="currentColor" strokeWidth="3" className="text-primary/30"/>
              </svg>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mx-auto max-w-3xl">
            {description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative aspect-video bg-black rounded-xl overflow-hidden border border-border/50 shadow-2xl group">
            {/* Decorative gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
            
            {/* YouTube iframe */}
            <iframe
              src={youtubeEmbedUrl}
              title="Vídeo - Nosso Método LemonAD"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
              loading="lazy"
            />

            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/20 rounded-tl-xl pointer-events-none z-20" />
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/20 rounded-tr-xl pointer-events-none z-20" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-primary/20 rounded-bl-xl pointer-events-none z-20" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/20 rounded-br-xl pointer-events-none z-20" />
          </div>

          {/* Optional: Video description or CTA below */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <Play className="h-4 w-4 text-primary" />
              Assista e descubra como transformamos negócios
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodSection;