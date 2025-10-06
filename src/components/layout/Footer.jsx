import { Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-12 text-center lg:text-left">
        <div>
          <h3 className="text-2xl font-lemonad text-primary">LemonAD</h3>
          <p className="text-xs font-engravers tracking-widest uppercase text-muted-foreground">Marketing Digital</p>
          <p className="mt-4 text-sm text-muted-foreground">
            Transformando ideias em resultados com sabor de sucesso.
          </p>
        </div>

        <div className="flex flex-col items-center lg:items-end">
          <h4 className="font-lemonad text-lg mb-3">Nossas Redes</h4>
          <div className="flex justify-center gap-4">
            <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors"><Instagram /></a>
            <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors"><Facebook /></a>
          </div>
        </div>
      </div>

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