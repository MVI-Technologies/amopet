import { Button } from '@/components/ui/button';
import { Sparkles, Calendar } from 'lucide-react';
import heroPets from '@/assets/hero-pets.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden pt-24 pb-12 lg:pt-28 lg:pb-16">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-4 md:left-10 w-16 md:w-20 h-16 md:h-20 rounded-full bg-primary/10 animate-float" />
        <div className="absolute top-48 right-8 md:right-20 w-24 md:w-32 h-24 md:h-32 rounded-full bg-secondary/10 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-12 md:w-16 h-12 md:h-16 rounded-full bg-gold/20 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-amopet relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-card/90 backdrop-blur-sm px-4 py-2.5 rounded-full shadow-card mb-6">
              <Sparkles className="w-4 h-4 text-gold flex-shrink-0" />
              <span className="text-sm font-medium text-foreground">
                Ganhe 15% na primeira compra!
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-foreground leading-[1.15] mb-6">
              AmoPet — onde seu pet é{' '}
              <span className="text-gradient ">tratado como família</span>
              <span className="inline-block animate-wiggle ml-2 text-3xl sm:text-4xl md:text-5xl">🐾</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Produtos, serviços e carinho para o seu pet — entrega rápida e atendimento local personalizado.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mr-5 justify-center lg:justify-start ">
              <Button variant="hero" size="xl" className="w-full sm:w-auto min-h-[56px]">
                <Sparkles className="w-5 h-5 flex-shrink-0" />
                <span>Ganhe 15% na 1ª compra</span>
              </Button>
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto min-h-[56px]">
                <Calendar className="w-5 h-5 flex-shrink-0" />
                <span>Agende Banho e Tosa</span>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-10 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl">⭐</span>
                <span>4.9 no Google</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl">🚚</span>
                <span>Entrega Expressa</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl">💳</span>
                <span>Até 12x sem juros</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="ml-6 relative order-1 lg:order-2 animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              {/* Main Image */}
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg-coral aspect-[4/3] lg:aspect-auto">
                <img
                  src={heroPets}
                  alt="Família feliz com cachorro golden retriever e gato laranja"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
              </div>

              {/* Floating Card - Hidden on very small screens */}
              <div className="hidden sm:flex absolute -bottom-6 -left-4 lg:-bottom-6 lg:-left-6 bg-card p-3 lg:p-4 rounded-xl lg:rounded-2xl shadow-card-hover animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-success-light flex items-center justify-center">
                    <span className="text-lg lg:text-2xl">✓</span>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground text-sm lg:text-base">+5.000</p>
                    <p className="text-xs lg:text-sm text-muted-foreground">Pets Felizes</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 bg-primary text-primary-foreground px-3 lg:px-4 py-1.5 lg:py-2 rounded-full shadow-md-coral animate-bounce-gentle font-heading font-bold text-xs lg:text-sm">
                Frete Grátis! 📦
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
