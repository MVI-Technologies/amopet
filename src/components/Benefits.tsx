import { Truck, Award, Package, Gift } from 'lucide-react';

const benefits = [
  {
    icon: Truck,
    title: 'Entrega Expressa',
    description: 'Receba em até 24h na sua região. Rastreamento em tempo real.',
    emoji: '🚀',
  },
  {
    icon: Award,
    title: 'Profissionais Qualificados',
    description: 'Equipe certificada e apaixonada por pets. Cuidado garantido.',
    emoji: '⭐',
  },
  {
    icon: Package,
    title: 'Produtos Selecionados',
    description: 'Apenas marcas premium e aprovadas por veterinários.',
    emoji: '✨',
  },
  {
    icon: Gift,
    title: 'Programa de Fidelidade',
    description: 'Acumule pontos e troque por descontos exclusivos.',
    emoji: '🎁',
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="section-padding bg-cream-dark">
      <div className="container-amopet">
        {/* Section Header */}
        <div className="section-header animate-slide-up">
          <span className="section-label">
            Por que escolher a AmoPet?
          </span>
          <h2 className="section-title">
            Cuidado completo para seu{' '}
            <span className="text-gradient">melhor amigo</span>
          </h2>
          <p className="section-description">
            Oferecemos tudo que seu pet precisa com a qualidade e carinho que ele merece.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid-4-cols">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative bg-card rounded-xl md:rounded-2xl p-5 md:p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Emoji Badge */}
              <span className="absolute -top-2 -right-2 md:-top-3 md:-right-3 text-2xl md:text-3xl group-hover:animate-wiggle">
                {benefit.emoji}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg md:text-xl font-heading font-bold text-foreground mb-2">
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

export default Benefits;
