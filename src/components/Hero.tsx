import { Button } from '@/components/ui/button';
import { Sparkles, Calendar } from 'lucide-react';
import heroPets from '@/assets/hero-pets.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden pt-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 animate-float" />
        <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-secondary/10 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-16 h-16 rounded-full bg-gold/20 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/3 text-6xl animate-bounce-gentle">🐾</div>
      </div>

      <div className="container-amopet relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-card mb-6">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-foreground">
                Ganhe 15% na primeira compra!
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-foreground leading-tight mb-6">
              AmoPet — cuidado que faz{' '}
              <span className="text-gradient">o rabo balançar</span>
              <span className="inline-block animate-wiggle ml-2">🐕</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Produtos, serviços e carinho para o seu pet — entrega rápida e atendimento local personalizado.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl">
                <Sparkles className="w-5 h-5" />
                Ganhe 15% na 1ª compra
              </Button>
              <Button variant="heroOutline" size="xl">
                <Calendar className="w-5 h-5" />
                Agende Banho e Tosa
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-10 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span>4.9 no Google</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🚚</span>
                <span>Entrega Expressa</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💳</span>
                <span>Até 12x sem juros</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-lg-coral">
                <img
                  src={heroPets}
                  alt="Família feliz com cachorro golden retriever e gato laranja"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-card-hover animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-success-light flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground">+5.000</p>
                    <p className="text-sm text-muted-foreground">Pets Felizes</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-md-coral animate-bounce-gentle font-heading font-bold">
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
