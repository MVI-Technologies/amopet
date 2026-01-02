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
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            O que nossos <span className="text-gradient">clientes falam</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais de 5.000 pets felizes e famílias satisfeitas!
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-card shadow-card hover:shadow-card-hover flex items-center justify-center text-foreground hover:text-primary transition-all hover:scale-110"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-card shadow-card hover:shadow-card-hover flex items-center justify-center text-foreground hover:text-primary transition-all hover:scale-110"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6 px-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <article
                key={`${testimonial.id}-${currentIndex}`}
                className="relative bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Quote Icon */}
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.pet}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-muted hover:bg-primary/50'
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
