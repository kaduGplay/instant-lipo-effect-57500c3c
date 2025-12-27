import { Clock, DollarSign, Play, CheckCircle, Video, Award, Gift, Users } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "TEMPO",
    description: "45 minutos com a Lipo Manual eliminam medidas visíveis, enquanto clínicas comuns levam meses."
  },
  {
    icon: DollarSign,
    title: "ECONOMIA",
    description: "Invista R$97 vs. milhares em outros cursos que não dão resultados imediatos."
  },
  {
    icon: Play,
    title: "PASSO A PASSO PRÁTICO",
    description: "Em vídeo, simples que você assiste e replica em suas clientes."
  },
  {
    icon: Award,
    title: "PROTOCOLO COMPLETO",
    description: "Os mesmos resultados de clínicas famosas, agora no seu atendimento."
  },
  {
    icon: Video,
    title: "VÍDEO AULAS",
    description: "Diretas ao ponto com método para diminuir gordura localizada de forma IMEDIATA."
  },
  {
    icon: CheckCircle,
    title: "RESULTADOS IMEDIATOS",
    description: "De -30cm a -45cm em suas clientes por sessão."
  },
  {
    icon: Users,
    title: "SUPORTE + ACESSO",
    description: "1 ano de acesso ao curso + suporte personalizado."
  },
  {
    icon: Gift,
    title: "SUPER BÔNUS",
    description: "Cronograma alimentar, guia de chás secretos e Criolipólise Caseira."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gradient-radial">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Confira O Que Você Vai{" "}
            <span className="text-gradient-gold">Dominar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Com o Método Lipo Manual HD
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-gold"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold font-serif mb-2 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
