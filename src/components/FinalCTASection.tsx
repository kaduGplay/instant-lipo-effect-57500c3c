import { Button } from "@/components/ui/button";
import { CheckCircle, Flame } from "lucide-react";

const FinalCTASection = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-radial relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight">
            Rolou a Página Toda Pro Final?
            <br />
            <span className="text-gradient-gold">Então Leia Esse Resumo...</span>
          </h2>

          <div className="space-y-6 text-foreground/90 text-lg leading-relaxed">
            <p>
              O que você encontra aqui é o exato protocolo que eu usei para me tornar referência na estética 
              — e que agora você pode usar para transformar sua carreira e suas clientes.
            </p>
            <p>
              Com o <span className="text-gradient-gold font-bold">Efeito Lipo HD Manual</span>, você terá acesso imediato ao passo a passo validado, 
              bônus exclusivos de CRIO CASEIRA e poderá entregar resultados imediatos que clínicas comuns não conseguem.
            </p>
            <p>
              Invista hoje apenas <span className="text-primary font-bold">12x de R$8,83</span> e leve um protocolo 
              que pode lotar sua agenda e elevar seu nome na região.
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-primary/30 p-8 space-y-4">
            <h3 className="text-xl font-serif font-bold text-gradient-gold">MÉTODO DISPONÍVEL</h3>
            <p className="text-muted-foreground">
              Sinta o impacto do método Lipo Manual já nos primeiros minutos de aplicação. 
              Execute o método e nos marque <span className="text-primary">@vivianemoreno.boss</span> — 
              iremos repostar seus resultados!
            </p>
          </div>

          <div className="pt-4">
            <Button 
              variant="cta" 
              size="xxl"
              onClick={scrollToPricing}
              className="group"
            >
              <Flame className="w-5 h-5" />
              <span>Quero Acesso Imediato</span>
              <CheckCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
