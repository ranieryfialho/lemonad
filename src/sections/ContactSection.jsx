import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariantsLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const itemVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="container mx-auto py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <motion.div variants={itemVariantsLeft} className="text-left">
          <h2 className="text-5xl font-lemonad mb-4">Fale com a <span className="text-primary">Gente</span></h2>
          <p className="text-lg text-muted-foreground">
            Adoramos ouvir sobre novos projetos e desafios. Preencha o formulário ao lado ou nos envie um e-mail. Estamos prontos para transformar sua ideia em resultado.
          </p>
          <p className="font-engravers mt-8 text-primary">contato@agencialemonad.com.br</p>
        </motion.div>

        <motion.form
          variants={itemVariantsRight}
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
          <Button type="submit" size="lg" className="w-full font-engravers">Enviar Mensagem</Button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default ContactSection;