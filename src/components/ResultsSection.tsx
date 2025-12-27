import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import resultsImage from "@/assets/results-showcase.jpg";

const ResultsSection = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Confira Alguns{" "}
            <span className="text-gradient-gold">Resultados</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Método Lipo Manual HD
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div 
              key={item}
              className="group relative aspect-square rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <img 
                src={resultsImage} 
                alt={`Resultado ${item}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-medium text-primary">-45cm eliminados</p>
                  <p className="text-xs text-muted-foreground">1ª sessão</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Box */}
        <div className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm rounded-2xl border border-primary/30 p-8 md:p-12">
          <div className="text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-serif font-bold">
              A técnica secreta das clínicas de luxo que elimina até{" "}
              <span className="text-gradient-gold">45cm</span> de gordura localizada em sessão única.
            </h3>
            <p className="text-muted-foreground">
              Em menos de 1 hora, você e suas clientes já percebem um antes e depois IMPACTANTE, 
              reduzindo gordura localizada NA HORA, sem cortes e sem cirurgias.
            </p>
            <Button 
              variant="cta" 
              size="xl"
              onClick={scrollToPricing}
            >
              <span>Quero Acesso Imediato</span>
              <CheckCircle className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
