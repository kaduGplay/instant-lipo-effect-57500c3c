import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "O que é a Lipo Manual Habilitando Profissionais?",
    answer: "É um curso online completo com videoaulas práticas que ensinam o método Lipo Manual HD, um protocolo validado para eliminar até 45cm de gordura localizada em uma única sessão de 45 minutos."
  },
  {
    question: "Como vou receber o curso?",
    answer: "Assim que confirmar a compra, você receberá o acesso imediato no seu e-mail. O curso é 100% online e você pode assistir quando e onde quiser."
  },
  {
    question: "Em quanto tempo vou ter resultados com o que vou aprender?",
    answer: "Já na primeira aplicação do método em suas clientes, você verá resultados de -30cm a -45cm. O protocolo foi validado em mais de 4.739 mulheres."
  },
  {
    question: "Como vou receber acesso ao método?",
    answer: "O acesso é enviado automaticamente para o e-mail cadastrado na compra. Você terá 1 ano de acesso ao curso completo + suporte personalizado."
  },
  {
    question: "Existe alguma garantia que o programa funciona?",
    answer: "Sim! O método foi validado por mais de 4.739 mulheres e é inspirado em técnicas renomadas. Além disso, oferecemos suporte personalizado para garantir seus resultados."
  },
  {
    question: "Posso aplicar em qualquer biotipo de clientes?",
    answer: "Sim! O protocolo é aplicável e reproduzível em qualquer cliente, independente do biotipo. As videoaulas mostram a aplicação prática em diferentes casos."
  }
];

const FAQSection = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Dúvidas{" "}
            <span className="text-gradient-gold">Frequentes</span>
          </h2>
          <p className="text-muted-foreground">(Clique em cima)</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
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

export default FAQSection;
