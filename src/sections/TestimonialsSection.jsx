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
    quote: "Não conhecia sobre tráfego e estratégia digital. Ruan e Talyta conseguiram entregar mais do que conhecimento técnico na minha empresa, houve empatia, comunicação, transparência e cuidado desde o começo até os dias de hoje. Me sinto abençoado em ter fechado essa parceira de sucesso. E tenho certeza de que cada negócio que eles cuidam prosperam de uma forma sensacional!",
    avatarUrl: "https://i.pravatar.cc/150?img=10",
    rating: 5,
  },
  {
    name: "Emilly Ecilia",
    title: "Cliente LemonAD",
    quote: "Quero parabenizar e agradecer pelo excelente trabalho desenvolvido. A equipe demonstra profissionalismo, criatividade e dedicação em cada projeto. É nítido o cuidado em entender as necessidades do cliente e entregar soluções personalizadas que realmente geram resultado. Além disso, são super atenciosos e ágil, sempre me orientando e ajudando, transmitindo confiança e comprometimento. Não troco por nada 🥰",
    avatarUrl: "https://i.pravatar.cc/150?img=11",
    rating: 5,
  },
  {
    name: "Indy Estetica",
    title: "Cliente LemonAD",
    quote: "Vcs são o melhor investimento que fiz! Estamos indo para o terceiro mês. E foi a melhor coisa que fiz. Eu não tinha $, vocês concederam uma condição especial e eu peguei um cartão e parcelei em muitas vezes kakaka pq eu sei do quanto o marketing bem feito traz resultados. O melhor é que vcs SUPERARAM todas minhas expectativas. Eu nunca havia tido uma equipe tão prestativa, humanizado e dedicado com o cliente. Pq assim como eu, tem diversos profissionais que não tem tempo de criar conteúdo, não tem tempo de pensar em ideias enfim... eles pensam em tudo e te entregam prontinho... script só pra vc replicar. Nunca ninguém havia feito um questionário comigo antes pra saber a fundo como é minha ideia, modelo de negócio, visão, valores... enfim, vai faltar espaço aqui se fosse falar detalhe por detalhe o que eles fizeram nesses 2 meses por mim e pela minha empresa. Se eu pudesse te dar um conselho seria: INVESTE SEM MEDO. De o primeiro passo que vai dar certo! Eles são excepcionais. Eu fui sem medo e sem dinheiro kakak peguei um cartão e parcelei e já estou tendo retorno. Minha VITRINE de vendas está cada dia mais linda e com propósito!!! ❤️ gratidão 🙏",
    avatarUrl: "https://i.pravatar.cc/150?img=11",
    rating: 5,
  },
  {
    name: "Neta Oliveira",
    title: "Cliente LemonAD",
    quote: "Ele é topíssimo e paciente com seus clientes. Obrigada Ruan 🙌👏🙌",
    avatarUrl: "https://i.pravatar.cc/150?img=11",
    rating: 5,
  },
  {
    name: "M4 Móveis Planejados",
    title: "Cliente LemonAD",
    quote: "Gente que cara incrível, realmente quantas vezes vim quase chorando pq não estava sabendo vender. E o Ruan mudou isso, virou o jogo. Antes vendia x e hoje triplicou minhas vendas através da ajuda dele. Obrigada 🙏",
    avatarUrl: "https://i.pravatar.cc/150?img=11",
    rating: 5,
  },
  {
    name: "Jú Flores",
    title: "Cliente LemonAD",
    quote: "Estou adorando Talyta teu trabalho. Exatamente isso desde o início teria que ter feito ❤️ Com certeza estaria mais forte agora as prospecções ❤️",
    avatarUrl: "https://i.pravatar.cc/150?img=11",
    rating: 5,
  },
  {
    name: "No Meio do Mundo",
    title: "Cliente LemonAD",
    quote: "Sem sombra de dúvidas o melhor que o mercado pode ter, @ruahgomes um cara que se diferencia dos outros não só pelo resultado, mas por toda atenção e acompanhamento para ter resultados surreais. Obrigado por seus serviços meu querido, vamos juntos alcançar grandes metas. 💜✈️🔥",
    avatarUrl: "https://i.pravatar.cc/150?img=11",
    rating: 5,
  },
  {
    name: "Max Silva",
    title: "Cliente LemonAD",
    quote: "Esse eu assino embaixo. Parabéns pelo excelente trabalho que faz. 🙌🔥",
    avatarUrl: "https://i.pravatar.cc/150?img=11",
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial, isMobile }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Ajusta o limite de caracteres baseado no tamanho do depoimento
  const getMaxLength = () => {
    const length = testimonial.quote.length;
    if (isMobile) {
      return length > 400 ? 150 : length > 250 ? 180 : 200;
    }
    return length > 500 ? 180 : length > 350 ? 220 : 250;
  };
  
  const maxLength = getMaxLength();
  const needsTruncation = testimonial.quote.length > maxLength;
  const displayQuote = !isExpanded && needsTruncation
    ? testimonial.quote.slice(0, maxLength) + "..."
    : testimonial.quote;

  return (
    <Card className="group relative overflow-hidden bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 h-full">
      <CardContent className="p-6 h-full flex flex-col">
        {/* Quote Icon decorativo */}
        <div className="absolute -top-2 -right-2 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
          <Quote className="h-24 w-24 text-primary" />
        </div>

        {/* Rating Stars */}
        <div className="flex gap-1 mb-4 flex-shrink-0 relative z-10">
          {testimonial.rating && typeof testimonial.rating === 'number' && [...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 fill-primary text-primary transition-transform duration-300 group-hover:scale-110"
              style={{ transitionDelay: `${i * 50}ms` }}
            />
          ))}
        </div>

        {/* Blockquote - área expansível */}
        <blockquote className="flex-grow mb-6 relative z-10 min-h-0">
          <div className={`${isExpanded ? 'max-h-none' : 'max-h-[300px]'} overflow-hidden transition-all duration-300`}>
            <p className="text-foreground/90 text-sm md:text-base leading-relaxed italic">
              "{displayQuote}"
            </p>
          </div>
          {needsTruncation && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary text-xs font-medium mt-3 hover:underline focus:outline-none focus:ring-2 focus:ring-primary/20 rounded px-1 inline-flex items-center gap-1 transition-colors"
              aria-expanded={isExpanded}
              aria-label={isExpanded ? "Ver menos do depoimento" : "Ler mais do depoimento"}
            >
              {isExpanded ? "Ver menos" : "Ler mais"}
              <span className="text-[10px] transition-transform duration-200" style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                ▼
              </span>
            </button>
          )}
        </blockquote>

        {/* Author Info */}
        <div className="flex items-center gap-3 pt-4 border-t border-border/50 flex-shrink-0 relative z-10">
          <div className="relative flex-shrink-0">
            <img
              src={testimonial.avatarUrl}
              alt={`Foto de ${testimonial.name}`}
              className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300"
              loading="lazy"
            />
            <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-1">
              <svg className="h-3 w-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
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
              O que Nossos{' '}
              <span className="text-primary">Clientes</span>{" "}
              {' '}Dizem
            </h2>
            <p className="text-sm text-muted-foreground mx-auto max-w-md">
              Resultados reais de parceiros que cresceram com a gente
            </p>
          </div>

          <div className="relative">
            <Carousel
              opts={{ align: "center", loop: true }}
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
                    <div className="min-h-[320px]">
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
                  onClick={() => {
                    // Você pode adicionar navegação aqui se necessário
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-8 bg-primary"
                      : "w-2 bg-primary/20 hover:bg-primary/40"
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                  aria-current={index === currentSlide ? "true" : "false"}
                />
              ))}
            </div>

            <p className="text-center text-xs text-muted-foreground/60 mt-4 flex items-center justify-center gap-2">
              <span aria-hidden="true">←</span>
              Deslize para ver mais
              <span aria-hidden="true">→</span>
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
            O que Nossos{' '}
            <span className="text-primary relative inline-block">
              Clientes
              <svg className="absolute -bottom-3 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                <path d="M0 6C50 6 50 6 100 6C150 6 150 6 200 6" stroke="currentColor" strokeWidth="3" className="text-primary/30"/>
              </svg>
            </span>
           {' '}Dizem
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
            opts={{ align: "start", loop: true }}
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
                    className="h-full min-h-[360px]"
                  >
                    <TestimonialCard testimonial={testimonial} isMobile={false} />
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