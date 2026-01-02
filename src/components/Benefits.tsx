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
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-4">
            Por que escolher a AmoPet?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Cuidado completo para seu{' '}
            <span className="text-gradient">melhor amigo</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos tudo que seu pet precisa com a qualidade e carinho que ele merece.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Emoji Badge */}
              <span className="absolute -top-3 -right-3 text-3xl group-hover:animate-wiggle">
                {benefit.emoji}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">
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
