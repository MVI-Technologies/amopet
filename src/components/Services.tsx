import { Button } from '@/components/ui/button';
import { Scissors, Syringe, Home, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Banho & Tosa',
    description: 'Banho completo com produtos premium, tosa higiênica ou na tesoura, hidratação e perfume. Seu pet vai sair cheiroso e lindo!',
    price: 'A partir de R$ 65',
    cta: 'Agendar Agora',
    emoji: '🛁',
    color: 'bg-coral-light',
  },
  {
    icon: Syringe,
    title: 'Vacinação',
    description: 'Vacinas essenciais aplicadas por veterinários credenciados. Calendário completo de imunização com carteirinha digital.',
    price: 'Consulte valores',
    cta: 'Saiba Mais',
    emoji: '💉',
    color: 'bg-ocean-light',
  },
  {
    icon: Home,
    title: 'Hospedagem & Daycare',
    description: 'Ambiente seguro e aconchegante para seu pet enquanto você viaja. Monitoramento 24h e muito carinho!',
    price: 'A partir de R$ 89/dia',
    cta: 'Ver Vagas',
    emoji: '🏠',
    color: 'bg-gold/30',
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-cream-dark">
      <div className="container-amopet">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Cuidado profissional com{' '}
            <span className="text-gradient">muito amor</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Equipe especializada pronta para cuidar do seu pet como se fosse da família.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative bg-card rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Background Decoration */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${service.color} rounded-full -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:scale-150 transition-transform duration-500`} />

              {/* Emoji */}
              <span className="absolute top-6 right-6 text-4xl group-hover:animate-wiggle">
                {service.emoji}
              </span>

              {/* Icon */}
              <div className="relative w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="relative text-2xl font-heading font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="relative text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Price */}
              <p className="relative text-lg font-heading font-bold text-primary mb-6">
                {service.price}
              </p>

              {/* CTA */}
              <Button variant="outline" className="relative w-full group/btn">
                {service.cta}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
