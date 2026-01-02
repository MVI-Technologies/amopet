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
        <div className="section-header animate-slide-up">
          <span className="section-label">
            Nossos Serviços
          </span>
          <h2 className="section-title">
            Cuidado profissional com{' '}
            <span className="text-gradient">muito amor</span>
          </h2>
          <p className="section-description">
            Equipe especializada pronta para cuidar do seu pet como se fosse da família.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid-3-cols">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative bg-card rounded-xl md:rounded-2xl lg:rounded-3xl p-5 md:p-6 lg:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-slide-up flex flex-col"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Background Decoration */}
              <div className={`absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 ${service.color} rounded-full -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:scale-150 transition-transform duration-500`} />

              {/* Emoji */}
              <span className="absolute top-4 md:top-6 right-4 md:right-6 text-3xl md:text-4xl group-hover:animate-wiggle">
                {service.emoji}
              </span>

              {/* Icon */}
              <div className="relative w-12 h-12 md:w-14 lg:w-16 md:h-14 lg:h-16 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 md:w-7 lg:w-8 md:h-7 lg:h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="relative text-xl md:text-2xl font-heading font-bold text-foreground mb-2 md:mb-3">
                {service.title}
              </h3>
              <p className="relative text-muted-foreground text-sm md:text-base mb-3 md:mb-4 leading-relaxed flex-grow">
                {service.description}
              </p>

              {/* Price */}
              <p className="relative text-base md:text-lg font-heading font-bold text-primary mb-4 md:mb-6">
                {service.price}
              </p>

              {/* CTA */}
              <Button variant="outline" className="relative w-full group/btn">
                <span>{service.cta}</span>
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
