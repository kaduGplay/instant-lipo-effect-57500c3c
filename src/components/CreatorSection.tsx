import { Button } from "@/components/ui/button";
import creatorImage from "@/assets/creator-portrait.png";

const CreatorSection = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border-gradient shadow-elegant">
              <img 
                src={creatorImage} 
                alt="Viviane Moreno - Esteticista"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-gold rounded-2xl p-4 shadow-gold">
              <p className="text-primary-foreground font-bold text-lg">+8 anos</p>
              <p className="text-primary-foreground/80 text-sm">de experiência</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <p className="text-primary font-medium uppercase tracking-wider mb-2">Criado pela Esteticista</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold">
                Viviane <span className="text-gradient-gold">Moreno</span>
              </h2>
              <p className="text-muted-foreground mt-2">Especialista em massagens redutoras</p>
            </div>

            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                Oi mulher, tudo bem?
              </p>
              <p>
                Nos últimos 8 anos, atendi milhares de mulheres com massagens redutoras e descobri algo 
                que mudou meu jogo: <span className="text-primary font-semibold">resultados imediatos são o que realmente fidelizam e lotam agenda.</span>
              </p>
              <p>
                Com a agenda cheia, percebi que minha metodologia era única: protocolos com efeito de lipoaspiração, em apenas 45 minutos.
              </p>
              <p>
                Decidi então compartilhar essa técnica com profissionais de todo o Brasil, ensinando o passo a passo 
                e entregando todos os insights que me fizeram construir autoridade e reconhecimento.
              </p>
              <p>
                Hoje, a <span className="text-gradient-gold font-bold">LIPO MANUAL</span> é o método que vai transformar você em referência na sua região.
              </p>
            </div>

            <Button 
              variant="gold" 
              size="xl"
              onClick={scrollToPricing}
            >
              Quero Acesso Imediato
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorSection;
