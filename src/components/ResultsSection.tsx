import { Button } from "@/components/ui/button";
import { CheckCircle, Play } from "lucide-react";
import { useState, useRef } from "react";

const resultVideos = [
  { src: "/videos/result-1.mp4", label: "-45cm eliminados", session: "1ª sessão" },
  { src: "/videos/result-2.mp4", label: "-38cm eliminados", session: "1ª sessão" },
  { src: "/videos/result-3.mp4", label: "-42cm eliminados", session: "1ª sessão" },
  { src: "/videos/result-4.mp4", label: "-35cm eliminados", session: "1ª sessão" },
  { src: "/videos/result-5.mp4", label: "-40cm eliminados", session: "1ª sessão" },
  { src: "/videos/result-6.mp4", label: "-45cm eliminados", session: "1ª sessão" },
];

const VideoCard = ({ video, index }: { video: typeof resultVideos[0]; index: number }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
    }
  };

  // Gera thumbnail do primeiro frame do vídeo
  const generateThumbnail = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (video && canvas && video.readyState >= 2) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
        setThumbnailUrl(dataUrl);
      }
    }
  };

  const handleLoadedData = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0.5;
    }
  };

  const handleSeeked = () => {
    generateThumbnail();
  };

  return (
    <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 bg-secondary/30">
      {/* Canvas escondido para gerar thumbnail */}
      <canvas ref={canvasRef} className="hidden" />
      
      {/* Thumbnail estática */}
      {thumbnailUrl && !isPlaying && (
        <img 
          src={thumbnailUrl} 
          alt={video.label}
          className="absolute inset-0 w-full h-full object-cover z-10"
        />
      )}
      
      {/* Vídeo */}
      <video
        ref={videoRef}
        src={video.src}
        className={`w-full h-full object-cover ${!isPlaying && thumbnailUrl ? 'opacity-0' : 'opacity-100'}`}
        controls={isPlaying}
        playsInline
        preload="auto"
        muted
        onLoadedData={handleLoadedData}
        onSeeked={handleSeeked}
      />
      
      {/* Overlay com botão de play */}
      {!isPlaying && (
        <div
          className="absolute inset-0 flex items-center justify-center cursor-pointer bg-background/30 z-20"
          onClick={handlePlay}
        >
          <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
            <Play className="w-6 h-6 text-primary-foreground ml-1" />
          </div>
        </div>
      )}
      
      {/* Labels */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-4 pointer-events-none z-20">
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
            <VideoCard key={index} video={video} index={index} />
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
