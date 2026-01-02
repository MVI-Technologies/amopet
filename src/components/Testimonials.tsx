import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Maria Silva',
    pet: 'Thor, Golden Retriever',
    avatar: '🐕',
    rating: 5,
    text: 'Melhor petshop da região! O Thor ama ir tomar banho lá, a equipe é super carinhosa. Recomendo demais!',
  },
  {
    id: 2,
    name: 'Carlos Santos',
    pet: 'Mia, Gato Persa',
    avatar: '🐱',
    rating: 5,
    text: 'A Mia é muito estressada, mas na AmoPet ela fica super tranquila. Os produtos de qualidade e a entrega é sempre no prazo.',
  },
  {
    id: 3,
    name: 'Ana Oliveira',
    pet: 'Bob, Bulldog Francês',
    avatar: '🐶',
    rating: 5,
    text: 'Programa de fidelidade excelente! Já acumulei muitos pontos e sempre ganho descontos. O Bob só come ração daqui!',
  },
  {
    id: 4,
    name: 'Pedro Costa',
    pet: 'Luna, SRD',
    avatar: '🐕‍🦺',
    rating: 5,
    text: 'Deixei a Luna na hospedagem durante a viagem e recebi fotos todos os dias. Voltei tranquilo sabendo que ela estava bem cuidada!',
  },
  {
    id: 5,
    name: 'Juliana Mendes',
    pet: 'Simba, Gato Maine Coon',
    avatar: '😺',
    rating: 5,
    text: 'Atendimento nota 10! Sempre me ajudam a escolher os melhores produtos pro Simba. Equipe muito preparada!',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section id="depoimentos" className="section-padding bg-background overflow-hidden">
      <div className="container-amopet">
        {/* Section Header */}
        <div className="section-header animate-slide-up">
          <span className="section-label">
            Depoimentos
          </span>
          <h2 className="section-title">
            O que nossos <span className="text-gradient">clientes falam</span>
          </h2>
          <p className="section-description">
            Mais de 5.000 pets felizes e famílias satisfeitas!
          </p>
        </div>

        {/* Carousel */}
        <div className="relative px-2 md:px-0">
          {/* Navigation Buttons - Desktop only */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-4 z-10 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-card shadow-card hover:shadow-card-hover items-center justify-center text-foreground hover:text-primary transition-all hover:scale-110"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-4 z-10 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-card shadow-card hover:shadow-card-hover items-center justify-center text-foreground hover:text-primary transition-all hover:scale-110"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>

          {/* Testimonials Grid - Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 md:px-6 lg:px-8">
            {/* Mobile: Show only current */}
            <article className="md:hidden relative bg-card rounded-xl p-5 shadow-card animate-fade-in">
              <Quote className="absolute top-4 right-4 w-6 h-6 text-primary/20" />
              <div className="flex gap-1 mb-3">
                {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed italic text-sm">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-xl">
                  {testimonials[currentIndex].avatar}
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground text-sm">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonials[currentIndex].pet}
                  </p>
                </div>
              </div>
            </article>

            {/* Desktop: Show 3 */}
            {getVisibleTestimonials().map((testimonial, index) => (
              <article
                key={`${testimonial.id}-${currentIndex}`}
                className="hidden md:block relative bg-card rounded-xl lg:rounded-2xl p-5 lg:p-6 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Quote className="absolute top-4 right-4 w-6 h-6 lg:w-8 lg:h-8 text-primary/20" />
                <div className="flex gap-1 mb-3 lg:mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-foreground mb-4 lg:mb-6 leading-relaxed italic text-sm lg:text-base">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-muted flex items-center justify-center text-xl lg:text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground text-sm lg:text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-xs lg:text-sm text-muted-foreground">
                      {testimonial.pet}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary w-6 md:w-8'
                    : 'bg-muted hover:bg-primary/50 w-2.5'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
