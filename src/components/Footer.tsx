const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <p className="text-2xl font-serif font-bold text-gradient-gold">
            LIPO MANUAL HD
          </p>
          <p className="text-muted-foreground text-sm">
            Todos os direitos reservados © {new Date().getFullYear()}
          </p>
          <p className="text-muted-foreground/60 text-xs max-w-2xl mx-auto">
            Os resultados podem variar de pessoa para pessoa. As informações contidas neste site são apenas para fins informativos 
            e não substituem orientação de profissionais de saúde.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
