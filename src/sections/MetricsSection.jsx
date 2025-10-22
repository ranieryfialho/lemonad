import { useEffect, useRef } from "react";
import { animate, motion, useInView } from "framer-motion";
import { useIsMobile } from "@/lib/useIsMobile"; //

// Componente AnimatedNumber (permanece o mesmo)
function AnimatedNumber({ to, isMobile }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      animate(0, to, {
        duration: isMobile ? 1 : 1.5, // Mais rápido no mobile
        onUpdate(value) {
          if (ref.current) {
            // Formata com ponto como separador de milhar
            ref.current.textContent = Math.round(value).toLocaleString("pt-BR");
          }
        },
      });
    }
  }, [inView, to, isMobile]);

  return <span ref={ref}>0</span>;
}

// ▼▼▼ MÉTRICAS ATUALIZADAS AQUI ▼▼▼
const metrics = [
  { value: 500, suffix: "K+", label: "Investidos em Anúncios" }, //
  { value: 100, suffix: "+", label: "Empresas Atendidas" },      //
  { value: 10, suffix: "M+", label: "Faturados para Clientes" }, //
  // Adicionei um quarto item para manter o layout de 4 colunas, pode ajustar ou remover
  // Se remover, ajuste o grid para md:grid-cols-3
  { value: 5, suffix: "+", label: "Anos no Mercado" }, // Exemplo, baseado no texto "Com mais de 5 anos"
];
// ▲▲▲ FIM DA ATUALIZAÇÃO ▲▲▲

const MetricsSection = () => {
  const isMobile = useIsMobile(); //

  // Mobile: sem animação, sem blur, sem shadow
  if (isMobile) {
    return (
      <section id="metrics" className="py-20"> {/* */}
        <div className="container mx-auto bg-foreground/5 border border-white/10 rounded-3xl p-8"> {/* */}
          {/* Mantém 4 colunas em telas médias para consistência, mesmo com 3 métricas principais */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"> {/* */}
            {metrics.map((metric, index) => (
              <div key={index}>
                <h3 className="text-5xl md:text-6xl font-lemonad text-primary"> {/* */}
                  {/* Passa o valor numérico para animação */}
                  <AnimatedNumber to={metric.value} isMobile={isMobile} />
                  {/* Exibe o sufixo (K+, +, M+) */}
                  {metric.suffix}
                </h3>
                <p className="mt-2 font-engravers text-sm uppercase tracking-wider text-muted-foreground"> {/* */}
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop: com todas as animações
  return (
    <section id="metrics" className="py-20"> {/* */}
      <motion.div
        className="container mx-auto bg-foreground/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl" //
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"> {/* */}
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h3 className="text-5xl md:text-6xl font-lemonad text-primary"> {/* */}
                 {/* Passa o valor numérico para animação */}
                 <AnimatedNumber to={metric.value} isMobile={isMobile} />
                 {/* Exibe o sufixo (K+, +, M+) */}
                 {metric.suffix}
              </h3>
              <p className="mt-2 font-engravers text-sm uppercase tracking-wider text-muted-foreground"> {/* */}
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default MetricsSection;