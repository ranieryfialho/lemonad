import React, { memo } from 'react';
import { motion } from "framer-motion";
import { useResponsiveVariants, useIsMobile } from "@/lib/useIsMobile"; //

import ImgRuan from '@/assets/images/img_ruan.png'; //
import ImgTalyta from '@/assets/images/img_talyta.png'; //

const founders = [
  {
    name: "Ruan Gomes",
    imageUrl: ImgRuan, //
    description: "Fundador da LemonAD, especialista em vendas, tráfego pago e CRM, focado em performance e resultados.", //
  },
  {
    name: "Talyta Garcez",
    imageUrl: ImgTalyta, //
    description: "Liderança criativa da LemonAD, social media e storyteller, focada em criatividade e conexão humana.", //
  },
];

// Componente interno para o card do fundador
const FounderCard = ({ founder, initial, whileInView, viewport, variants }) => (
  <motion.div
    initial={initial}
    whileInView={whileInView}
    viewport={viewport}
    variants={variants}
    className="flex flex-col items-center text-center p-4 bg-foreground/5 rounded-lg border border-border/50" //
  >
    {/* Container da imagem */}
    <div className="relative w-128 h-128 rounded-lg bg-muted flex items-center justify-center mb-4 overflow-hidden border-2 border-primary"> {/* */}

      {/* Imagem */}
      {founder.imageUrl === "URL_FOTO_RUAN_AQUI" || founder.imageUrl === "URL_FOTO_TALYTA_AQUI" ? (
         <span className="text-xs text-muted-foreground">Foto</span> //
      ) : (
        <img src={founder.imageUrl} alt={founder.name} className="w-full h-full object-cover" /> //
      )}

      {/* Tag com o Nome - ▼▼▼ MODIFICAÇÃO: px-6 -> px-8 ▼▼▼ */}
      <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary text-lemonad-black px-8 py-1 rounded-md font-lemonad text-lg shadow-md"> {/* */}
        {founder.name}
      </h3>
    </div>

    {/* Descrição */}
    <p className="text-base text-muted-foreground mt-2">{founder.description}</p> {/* */}
  </motion.div>
);

// Componente principal da seção, memoizado
const AboutUsSectionComponent = () => {
  const isMobile = useIsMobile(); //
  const variants = useResponsiveVariants(); //

  const title = "Quem Somos Nós"; //
  // Descrição geral da agência
  const description = "A LemonAD nasceu para transformar o digital em um campo de vendas previsível. Com mais de 5 anos no mercado, nosso foco é em método, clareza e processo para gerar vendas todos os dias, sem achismos ou fórmulas mágicas."; //

  return (
    <section id="about-us" className="py-24 bg-foreground/5"> {/* */}
      <div className="container mx-auto px-6"> {/* */}

        {/* Título e Descrição Principal */}
        <motion.div
          initial="hidden" //
          whileInView="visible" //
          viewport={{ once: true, amount: 0.2 }} //
          variants={variants.itemWithMotion} //
          className="text-center max-w-3xl mx-auto mb-16" //
        >
          <h2 className="text-4xl md:text-5xl font-lemonad mb-4"> {/* */}
            {title}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground"> {/* */}
            {description}
          </p>
        </motion.div>

        {/* Grid para os Fundadores */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:max-w-3xl mx-auto" //
        >
          {/* Mapeia os dados dos fundadores para os componentes FounderCard */}
          {founders.map((founder, index) => ( //
            <FounderCard
              key={founder.name} //
              founder={founder} //
              // Aplica animação individual a cada card
              initial="hidden" //
              whileInView="visible" //
              viewport={{ once: true, amount: 0.3 }} //
              variants={variants.item} //
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Aplica memoização ao componente para otimizar re-renderizações
const AboutUsSection = memo(AboutUsSectionComponent); //
// Define um nome de exibição para facilitar a depuração
AboutUsSection.displayName = 'AboutUsSection'; //

export default AboutUsSection; //