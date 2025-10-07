import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";

const ContactSection = () => {
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
      transition: isMobile ? { duration: 0.2 } : { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: isMobile ? 0.2 : 0.5 }
    }
  };

  // Mobile: sem animações
  if (isMobile) {
    return (
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-lemonad mb-4">
                Fale com a <span className="text-primary">Gente</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Adoramos ouvir sobre novos projetos e desafios. Preencha o formulário ao lado ou nos envie um e-mail. Estamos prontos para transformar sua ideia em resultado.
              </p>
              <p className="font-engravers mt-8 text-primary text-sm md:text-base">contato@agencialemonad.com.br</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Seu Nome</Label>
                  <Input id="name" placeholder="Nome Completo" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Seu E-mail</Label>
                  <Input id="email" type="email" placeholder="email@exemplo.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Assunto</Label>
                <Input id="subject" placeholder="Sobre o que vamos conversar?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Sua Mensagem</Label>
                <Textarea id="message" placeholder="Conte-nos um pouco sobre seu projeto..." />
              </div>
              <Button type="submit" size="lg" className="w-full font-engravers">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </section>
    );
  }

  // Desktop: com animações
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="text-left">
            <h2 className="text-5xl font-lemonad mb-4">
              Fale com a <span className="text-primary">Gente</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Adoramos ouvir sobre novos projetos e desafios. Preencha o formulário ao lado ou nos envie um e-mail. Estamos prontos para transformar sua ideia em resultado.
            </p>
            <p className="font-engravers mt-8 text-primary">contato@agencialemonad.com.br</p>
          </motion.div>

          <motion.form
            variants={itemVariants}
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Seu Nome</Label>
                <Input id="name" placeholder="Nome Completo" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Seu E-mail</Label>
                <Input id="email" type="email" placeholder="email@exemplo.com" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Assunto</Label>
              <Input id="subject" placeholder="Sobre o que vamos conversar?" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Sua Mensagem</Label>
              <Textarea id="message" placeholder="Conte-nos um pouco sobre seu projeto..." />
            </div>
            <Button type="submit" size="lg" className="w-full font-engravers">
              Enviar Mensagem
            </Button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;