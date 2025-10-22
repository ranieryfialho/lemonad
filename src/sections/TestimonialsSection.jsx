import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Quote } from "lucide-react";
import { useResponsiveVariants, useIsMobile } from "@/lib/useIsMobile";
import { useState } from "react";

const testimonials = [
  {
    name: "Hayaly Soares",
    title: "Cliente LemonAD",
    quote: "Não conhecia sobre tráfego e estratégia digital. Ruan e Talyta conseguiram entregar mais do que conhecimento técnico na minha empresa, houve empatia, comunicação, transparência e cuidado desde o começo até os dias de hoje. Me sinto abençoado em ter fechado essa parceira de sucesso. E tenho certeza de que cada negócio que eles cuidam prosperam de uma forma sensacional!", //
    avatarUrl: "https://i.pravatar.cc/150?img=10",
    rating: 5,
  },
  {
    name: "Emilly Ecilia",
    title: "Cliente LemonAD",
    quote: "Quero parabenizar e agradecer pelo excelente trabalho desenvolvido. A equipe demonstra profissionalismo, criatividade e dedicação em cada projeto. É nítido o cuidado em entender as necessidades do cliente e entregar soluções personalizadas que realmente geram resultado. Além disso, são super atenciosos e ágil, sempre me orientando e ajudando, transmitindo confiança e comprometimento. A qualidade dos serviços prestados e a clareza na comunicação tornam a experiência ainda mais positiva. Recomendo fortemente para quem busca uma empresa de marketing séria, inovadora e focada em trazer crescimento para os negócios. Não troco por nada 🥰",
    avatarUrl: "https://i.pravatar.cc/150?img=11",
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial, isMobile }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = isMobile ? 180 : 200;
  const needsTruncation = testimonial.quote.length > maxLength;
  const displayQuote = !isExpanded && needsTruncation
    ? testimonial.quote.slice(0, maxLength) + "..."
    : testimonial.quote;

  return (
    <Card className="group relative overflow-hidden bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 h-full"> {/* */}
      <CardContent className="p-6 h-full flex flex-col">
        <div className="absolute -top-2 -right-2 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
          <Quote className="h-24 w-24 text-primary" />
        </div>

        <div className="flex gap-1 mb-4 flex-shrink-0 relative z-10">
          {testimonial.rating && typeof testimonial.rating === 'number' && [...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 fill-primary text-primary transition-transform duration-300 group-hover:scale-110"
              style={{ transitionDelay: `${i * 50}ms` }}
            />
          ))}
        </div>

        <blockquote className="flex-grow mb-6 relative z-10">
          <p className="text-foreground/90 text-sm md:text-base leading-relaxed italic">
            "{displayQuote}"
          </p>
          {needsTruncation && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary text-xs font-medium mt-3 hover:underline focus:outline-none focus:ring-2 focus:ring-primary/20 rounded px-1 inline-flex items-center gap-1 transition-colors"
            >
              {isExpanded ? "Ver menos" : "Ler mais"}
              <span className="text-[10px]">{isExpanded ? "▲" : "▼"}</span>
            </button>
          )}
        </blockquote>

        <div className="flex items-center gap-3 pt-4 border-t border-border/50 flex-shrink-0 relative z-10">
          <div className="relative">
            <img
              src={testimonial.avatarUrl}
              alt={testimonial.name}
              className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300"
              loading="lazy"
            />
            <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-1">
              <svg className="h-3 w-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
              </svg>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-lemonad text-base text-foreground truncate">
              {testimonial.name}
            </p>
            <p className="font-engravers text-xs text-muted-foreground truncate">
              {testimonial.title}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};


const TestimonialsSection = () => {
  const isMobile = useIsMobile();
  const variants = useResponsiveVariants();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mobile
  if (isMobile) {
    return (
      <section id="testimonials" className="py-16 md:py-20 bg-gradient-to-b from-background via-foreground/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-block mb-3">
              <span className="text-xs font-engravers uppercase tracking-widest text-primary/80 bg-primary/10 px-4 py-1.5 rounded-full">
                Depoimentos
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-lemonad mb-3 leading-tight">
              O que Nossos
              <span className="text-primary">Clientes</span>{" "}
              Dizem
            </h2>
            <p className="text-sm text-muted-foreground mx-auto max-w-md">
              Resultados reais de parceiros que cresceram com a gente
            </p>
          </div>

          <div className="relative">
            <Carousel
              opts={{ align: "center", loop: true, }}
              className="w-full"
              setApi={(api) => {
                if (!api) return;
                api.on("select", () => {
                  setCurrentSlide(api.selectedScrollSnap());
                });
              }}
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-4 basis-[90%] sm:basis-[85%]">
                    <div className="h-[340px]">
                      <TestimonialCard testimonial={testimonial} isMobile={true} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Indicadores de Ponto */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-8 bg-primary"
                      : "w-2 bg-primary/20 hover:bg-primary/40"
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>

            <p className="text-center text-xs text-muted-foreground/60 mt-4 flex items-center justify-center gap-2"> {/* */}
              <span>←</span>
              Deslize para ver mais
              <span>→</span>
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Desktop
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-background via-foreground/5 to-background overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={variants.itemWithMotion}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-engravers uppercase tracking-wider text-primary/80 bg-primary/10 px-6 py-2 rounded-full">
              Depoimentos
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-lemonad mb-6 leading-tight">
            O que Nossos
            <span className="text-primary relative inline-block">
              Clientes
              <svg className="absolute -bottom-3 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                <path d="M0 6C50 6 50 6 100 6C150 6 150 6 200 6" stroke="currentColor" strokeWidth="3" className="text-primary/30"/>
              </svg>
            </span>
            Dizem
          </h2>
          <p className="text-lg text-muted-foreground mx-auto max-w-2xl">
            Resultados reais de parceiros que cresceram com a gente
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Carousel
            opts={{ align: "start", loop: true, }}
            className="w-full max-w-7xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-[380px]"
                  >
                    <TestimonialCard testimonial={testimonial} isMobile={false} /> {/* */}
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex -left-12 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300" />
            <CarouselNext className="hidden lg:flex -right-12 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;