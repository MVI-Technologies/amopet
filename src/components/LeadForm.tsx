import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Gift, Dog, Cat, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const LeadForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    petType: '',
    whatsapp: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: '🎉 Cupom enviado!',
      description: 'Verifique seu email para resgatar os 15% de desconto.',
    });
  };

  if (isSubmitted) {
    return (
      <section className="section-padding bg-primary">
        <div className="container-amopet">
          <div className="max-w-2xl mx-auto text-center text-primary-foreground animate-scale-in">
            <CheckCircle className="w-20 h-20 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Parabéns! 🎉
            </h2>
            <p className="text-xl opacity-90 mb-6">
              Seu cupom de 15% foi enviado para seu email.
              Aproveite para mimar seu pet!
            </p>
            <Button variant="gold" size="xl">
              Começar a Comprar
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="cupom" className="section-padding bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl opacity-20 animate-float">🐾</div>
        <div className="absolute bottom-10 right-10 text-6xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>🐾</div>
        <div className="absolute top-1/2 left-1/4 text-4xl opacity-10 animate-float" style={{ animationDelay: '2s' }}>❤️</div>
      </div>

      <div className="container-amopet relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center md:text-left text-primary-foreground animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Gift className="w-5 h-5" />
                <span className="font-medium">Oferta Especial</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
                Ganhe 15% na primeira compra!
              </h2>

              <p className="text-lg opacity-90 mb-6">
                Assine nossa newsletter e receba ofertas exclusivas, dicas de cuidados e novidades para seu pet.
              </p>

              <div className="flex flex-wrap gap-4 text-sm opacity-80">
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Cupom exclusivo
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Dicas semanais
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Ofertas antecipadas
                </span>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card rounded-3xl p-8 shadow-lg-coral animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-foreground">
                    Seu nome
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Como podemos te chamar?"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="city" className="text-foreground">
                    Cidade
                  </Label>
                  <Input
                    id="city"
                    type="text"
                    placeholder="Onde você mora?"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label className="text-foreground mb-3 block">
                    Tipo de pet
                  </Label>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, petType: 'dog' })}
                      className={`flex-1 p-4 rounded-xl border-2 transition-all ${
                        formData.petType === 'dog'
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <Dog className="w-8 h-8 mx-auto mb-2 text-foreground" />
                      <span className="text-sm font-medium text-foreground">Cachorro</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, petType: 'cat' })}
                      className={`flex-1 p-4 rounded-xl border-2 transition-all ${
                        formData.petType === 'cat'
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <Cat className="w-8 h-8 mx-auto mb-2 text-foreground" />
                      <span className="text-sm font-medium text-foreground">Gato</span>
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="whatsapp"
                    checked={formData.whatsapp}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, whatsapp: checked as boolean })
                    }
                  />
                  <Label htmlFor="whatsapp" className="text-sm text-muted-foreground cursor-pointer">
                    Quero receber ofertas pelo WhatsApp
                  </Label>
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Enviando...
                    </span>
                  ) : (
                    <>
                      <Gift className="w-5 h-5" />
                      Quero meu cupom de 15%
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Ao se cadastrar, você concorda com nossa{' '}
                  <a href="#" className="text-primary hover:underline">
                    Política de Privacidade
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
