import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    location: "São Paulo, SP",
    text: "Já na primeira sessão minhas clientes ficaram impressionadas! O método realmente funciona.",
    rating: 5
  },
  {
    name: "Ana Carolina",
    location: "Rio de Janeiro, RJ",
    text: "Minha agenda lotou depois que comecei a aplicar a Lipo Manual. Resultados incríveis!",
    rating: 5
  },
  {
    name: "Juliana Costa",
    location: "Belo Horizonte, MG",
    text: "Investi R$97 e já recuperei o valor na primeira semana. Melhor investimento que fiz!",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-radial">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Veja O Que Nossas Clientes{" "}
            <span className="text-gradient-gold">Falam</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Após Aplicar a Lipo Manual
          </p>
        </div>

        {/* Written Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
