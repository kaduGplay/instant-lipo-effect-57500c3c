import { Button } from "@/components/ui/button";
import { CheckCircle, Volume2 } from "lucide-react";
import { useState, useRef } from "react";

const resultVideos = [
  { src: "/videos/result-1.mp4", label: "-45cm eliminados", session: "1ª sessão" },
  { src: "/videos/result-2.mp4", label: "-38cm eliminados", session: "1ª sessão" },
  { src: "/videos/result-3.mp4", label: "-42cm eliminados", session: "1ª sessão" },
  { src: "/videos/result-4.mp4", label: "-35cm eliminados", session: "1ª sessão" },
  { src: "/videos/result-5.mp4", label: "-40cm eliminados", session: "1ª sessão" },
  { src: "/videos/result-6.mp4", label: "-45cm eliminados", session: "1ª sessão" },
];

const VideoCard = ({ video }: { video: typeof resultVideos[0] }) => {
  const [hasAudio, setHasAudio] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnableAudio = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false;
      setHasAudio(true);
      videoRef.current.play();
    }
  };

  return (
    <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 bg-secondary/30">
      <video
        ref={videoRef}
        src={video.src}
        className="w-full h-full object-cover"
        controls={hasAudio}
        playsInline
        autoPlay
        loop
        muted
        preload="auto"
      />

      {!hasAudio && (
        <div
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
          onClick={handleEnableAudio}
        >
          <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
            <Volume2 className="w-6 h-6 text-primary-foreground" />
          </div>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-4 pointer-events-none">
        <p className="text-sm font-medium text-primary">{video.label}</p>
        <p className="text-xs text-muted-foreground">{video.session}</p>
      </div>
    </div>
  );
};
const CHECKOUT_URL = "https://checkout.institutoduramais.site/VCCL1O8SCNJ9";

const ResultsSection = () => {
  const goToCheckout = () => {
    window.open(CHECKOUT_URL, '_blank');
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {resultVideos.map((video, index) => (
            <VideoCard key={index} video={video} />
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
              onClick={goToCheckout}
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
