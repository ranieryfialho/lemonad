import { Instagram } from 'lucide-react';
import { TikTokIcon } from '@/components/icons/TikTokIcon';

const Footer = () => {
  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 px-4 py-12 text-center lg:text-left">
        {/* Logo e Descrição */}
        <div>
          <h3 className="text-2xl font-lemonad text-primary">LemonAD</h3>
          <p className="text-xs font-engravers tracking-widest uppercase text-muted-foreground">Marketing Digital</p>
          <p className="mt-4 text-sm text-muted-foreground max-w-md mx-auto lg:mx-0">
            Transformando ideias em resultados com sabor de sucesso.
          </p>
        </div>

        {/* Redes Sociais */}
        <div className="flex flex-col items-center lg:items-end">
          <h4 className="font-lemonad text-lg mb-3">Nossas Redes</h4>
          <div className="flex justify-center gap-4">
            <a 
              href="https://www.instagram.com/lemonadmkt/" 
              aria-label="Instagram" 
              target='_blank' 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a 
              href="https://www.tiktok.com/@lemonadmkt" 
              aria-label="TikTok" 
              target='_blank' 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <TikTokIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border">
        <div className="container mx-auto py-4 px-4 text-center text-xs text-muted-foreground font-engravers flex flex-col md:flex-row justify-between items-center gap-2">
          <p>
            © {new Date().getFullYear()} LemonAD - Todos os direitos reservados.
          </p>
          <p>
            Desenvolvido por <a href="https://rafiweb.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">rafiweb</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;