import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Flame, Shield, Clock } from "lucide-react";

const PricingSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 50,
    seconds: 33
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { minutes: 50, seconds: 33 }; // Reset timer
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const features = [
    "Acesso imediato ao curso completo",
    "Videoaulas práticas passo a passo",
    "Aplicação em modelo demonstrada",
    "Protocolo Lipo Manual HD",
    "1 ano de acesso ao curso",
    "Suporte personalizado",
    "Bônus: Cronograma alimentar",
    "Bônus: Guia de chás secretos",
    "Bônus: Criolipólise Caseira"
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-radial">
      <div className="container mx-auto px-4">
        {/* Urgency Timer */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/20 border border-accent/30 mb-6">
            <Flame className="w-5 h-5 text-accent animate-pulse" />
            <span className="text-accent font-semibold">PROMOÇÃO ENCERRA EM POUCOS MINUTOS</span>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 min-w-[100px] border border-border/50">
              <p className="text-4xl font-bold text-gradient-gold font-serif">{String(timeLeft.minutes).padStart(2, '0')}</p>
              <p className="text-sm text-muted-foreground">Minutos</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 min-w-[100px] border border-border/50">
              <p className="text-4xl font-bold text-gradient-gold font-serif">{String(timeLeft.seconds).padStart(2, '0')}</p>
              <p className="text-sm text-muted-foreground">Segundos</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-accent">
            <Clock className="w-4 h-4" />
            <p className="font-medium">APENAS 100 ACESSOS LIBERADOS POR MÊS - RESTAM APENAS 02 VAGAS</p>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="max-w-xl mx-auto">
          <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl border-gradient p-8 md:p-12 shadow-elegant">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-gold px-6 py-2 rounded-full">
              <p className="text-primary-foreground font-bold text-sm">OFERTA ESPECIAL</p>
            </div>

            <div className="text-center space-y-6 pt-4">
              <h3 className="text-2xl font-serif font-bold">LIPO MANUAL + SUPORTE</h3>
              
              {/* Price */}
              <div className="space-y-2">
                <p className="text-muted-foreground line-through text-xl">R$ 297,00</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-muted-foreground text-lg">Por apenas</span>
                </div>
                <p className="text-6xl font-bold text-gradient-gold font-serif">R$97</p>
                <p className="text-muted-foreground">ou 12x de R$8,83</p>
              </div>

              {/* Features */}
              <div className="space-y-3 text-left py-6 border-t border-b border-border/50">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/90">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button variant="cta" size="xxl" className="w-full">
                <Flame className="w-5 h-5" />
                <span>Quero Acesso Imediato por R$97</span>
              </Button>

              {/* Guarantee */}
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Shield className="w-4 h-4" />
                <span className="text-sm">Compra 100% segura</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
