import { Button } from "@/components/ui/button";
import { Clock, DollarSign, CheckCircle, Star, Sparkles, Play } from "lucide-react";
import { useState, useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const CHECKOUT_URL = "https://checkout.institutoduramais.site/VCCL1O8SCNJ9";

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePlayVideo = () => {
    setIsPlaying(true);
    videoRef.current?.play();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Método Validado por +4.739 Mulheres</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
            O Método Que Elimina Até{" "}
            <span className="text-gradient-gold">-45CM</span>{" "}
            Em 1 Única Sessão
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Siga o passo a passo simples e leve essa transformação para suas clientes! 
            Domine a técnica que as clínicas mais caras escondem e aplique em <span className="text-primary font-semibold">45 minutos</span>.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 py-6 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">45 min/sessão</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">-30 a -45cm</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">R$5k-10k/mês</span>
            </div>
          </div>

          {/* Video Player */}
          <div className="relative w-full max-w-xs mx-auto animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative aspect-[9/16] overflow-hidden rounded-lg">
              <video
                ref={videoRef}
                src="/videos/hero-video.mp4"
                poster="/videos/hero-video.mp4#t=0.1"
                className="w-full h-full object-cover bg-background block"
                controls={isPlaying}
                playsInline
                preload="metadata"
              />
              {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                  onClick={handlePlayVideo}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 text-primary-foreground ml-1" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4 animate-fade-up px-4" style={{ animationDelay: '0.5s' }}>
            <Button 
              variant="cta" 
              size="xxl" 
              onClick={scrollToPricing}
              className="group w-full sm:w-auto text-sm sm:text-base px-4 sm:px-8"
            >
              <span className="whitespace-nowrap">Quero Acesso Imediato</span>
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
            </Button>
            <p className="text-xs sm:text-sm text-muted-foreground mt-4 text-center">
              🔥 Apenas <span className="text-accent font-bold">02 vagas</span> restantes este mês
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
