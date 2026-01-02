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
        <div className="section-header animate-slide-up">
          <span className="section-label">
            Como Funciona
          </span>
          <h2 className="section-title">
            Simples e <span className="text-gradient">rápido</span>
          </h2>
          <p className="section-description">
            Em apenas 3 passos, seu pet recebe o melhor cuidado.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection Line - Desktop only */}
          <div className="hidden md:block absolute top-12 left-[16.67%] right-[16.67%] h-0.5 bg-border" />
          <div className="hidden md:block absolute top-12 left-[16.67%] w-1/3 h-0.5 bg-primary animate-pulse-gentle" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Number Circle */}
                <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 mx-auto mb-5 md:mb-6 rounded-full bg-card shadow-card flex items-center justify-center group hover:shadow-card-hover transition-all duration-300 hover:scale-105">
                  <span className="absolute -top-1.5 -right-1.5 md:-top-2 md:-right-2 text-2xl md:text-3xl group-hover:animate-wiggle">
                    {step.emoji}
                  </span>
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                </div>

                {/* Step Number */}
                <span className="inline-block text-primary font-heading font-bold text-xs md:text-sm mb-1.5 md:mb-2">
                  Passo {step.number}
                </span>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-heading font-bold text-foreground mb-2 md:mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-[280px] mx-auto">
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
