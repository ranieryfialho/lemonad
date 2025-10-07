import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Ana Silva",
    title: "CEO, Sabor Natural",
    quote: "A LemonAD transformou nossa presença online. O novo e-commerce é um sucesso e nossas vendas aumentaram 200% em três meses. Incrível!",
    avatarUrl: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Carlos Mendes",
    title: "Diretor, Studio Criativo",
    quote: "O trabalho de branding e gestão de redes sociais foi impecável. Eles realmente entendem do nosso público e criaram uma comunidade engajada.",
    avatarUrl: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Juliana Costa",
    title: "Fundadora, Conecta Vagas",
    quote: "Desde o UI/UX até a estratégia de lançamento do nosso app, a equipe da LemonAD foi essencial. Profissionalismo e criatividade de ponta a ponta.",
    avatarUrl: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Marcos Pereira",
    title: "Sócio, Advocacia Digital",
    quote: "Nosso ranqueamento no Google nunca foi tão bom. O trabalho de SEO e conteúdo da LemonAD nos colocou no topo do mercado.",
    avatarUrl: "https://i.pravatar.cc/150?img=8",
  },
];

const TestimonialsSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const titleVariants = {
    hidden: { opacity: 0, y: isMobile ? 20 : 50 },
    visible: { opacity: 1, y: 0, transition: { duration: isMobile ? 0.3 : 0.5 } },
  };

  return (
    <section id="testimonials" className="py-24 bg-foreground/5">
      <div className="container mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={titleVariants}
        >
          <h2 className="text-5xl font-lemonad mb-4">O que Nossos <span className="text-primary">Clientes Dizem</span></h2>
          <p className="text-lg text-muted-foreground mx-auto max-w-2xl mb-12">
            Resultados reais contados por quem mais importa: nossos parceiros de sucesso.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: isMobile ? 20 : 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.3 : 0.5, delay: isMobile ? 0.1 : 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="flex flex-col justify-between h-full bg-background/50 border-border/50 text-left p-6">
                      <CardContent className="p-0">
                        <div className="flex text-primary mb-2">
                          {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                        </div>
                        <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                      </CardContent>
                      <div className="flex items-center gap-4 mt-6">
                        <img 
                          src={testimonial.avatarUrl} 
                          alt={testimonial.name} 
                          className="h-12 w-12 rounded-full object-cover"
                          loading="lazy"
                        />
                        <div>
                          <p className="font-lemonad text-base">{testimonial.name}</p>
                          <p className="font-engravers text-xs text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;