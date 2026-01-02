import { Search, ShoppingCart, Truck } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Escolha',
    description: 'Navegue pelos nossos produtos e serviços. Use filtros para encontrar exatamente o que seu pet precisa.',
    emoji: '🔍',
  },
  {
    number: '02',
    icon: ShoppingCart,
    title: 'Compra ou Agende',
    description: 'Adicione ao carrinho e finalize com segurança, ou agende um serviço no horário ideal para você.',
    emoji: '🛒',
  },
  {
    number: '03',
    icon: Truck,
    title: 'Entrega ou Atendimento',
    description: 'Receba em casa com rapidez ou traga seu pet para o cuidado especial da nossa equipe.',
    emoji: '🎉',
  },
];

const HowItWorks = () => {
  return (
    <section className="section-padding bg-cream-dark">
      <div className="container-amopet">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-4">
            Como Funciona
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Simples e <span className="text-gradient">rápido</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Em apenas 3 passos, seu pet recebe o melhor cuidado.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-border -translate-y-1/2" />
          <div className="hidden md:block absolute top-1/2 left-0 right-1/2 h-1 bg-primary -translate-y-1/2 animate-pulse-gentle" />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Number Circle */}
                <div className="relative z-10 w-24 h-24 mx-auto mb-6 rounded-full bg-card shadow-card flex items-center justify-center group hover:shadow-card-hover transition-all duration-300 hover:scale-110">
                  <span className="absolute -top-2 -right-2 text-3xl group-hover:animate-wiggle">
                    {step.emoji}
                  </span>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Step Number */}
                <span className="inline-block text-primary font-heading font-bold text-sm mb-2">
                  Passo {step.number}
                </span>

                {/* Title */}
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
