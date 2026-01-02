import { Heart, MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    produtos: [
      { label: 'Rações', href: '#' },
      { label: 'Brinquedos', href: '#' },
      { label: 'Acessórios', href: '#' },
      { label: 'Higiene', href: '#' },
      { label: 'Medicamentos', href: '#' },
    ],
    servicos: [
      { label: 'Banho e Tosa', href: '#' },
      { label: 'Vacinação', href: '#' },
      { label: 'Hospedagem', href: '#' },
      { label: 'Daycare', href: '#' },
      { label: 'Consulta Veterinária', href: '#' },
    ],
    institucional: [
      { label: 'Sobre Nós', href: '#' },
      { label: 'Trabalhe Conosco', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Programa de Fidelidade', href: '#' },
    ],
    suporte: [
      { label: 'Central de Ajuda', href: '#' },
      { label: 'Trocas e Devoluções', href: '#' },
      { label: 'Política de Privacidade', href: '#' },
      { label: 'Termos de Uso', href: '#' },
    ],
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container-amopet py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <Heart className="w-8 h-8 text-primary fill-primary" />
              <span className="text-2xl font-heading font-bold">
                Amo<span className="text-primary">Pet</span>
              </span>
            </a>
            <p className="text-primary-foreground/70 mb-6 max-w-xs">
              Cuidando do seu pet com amor e dedicação. Produtos de qualidade, serviços profissionais e muito carinho!
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <a href="#" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors">
                <MapPin className="w-4 h-4 text-primary" />
                Rua dos Pets, 123 - São Paulo, SP
              </a>
              <a href="tel:+5511999999999" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                (11) 99999-9999
              </a>
              <a href="mailto:contato@amopet.com.br" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                contato@amopet.com.br
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <Clock className="w-4 h-4 text-primary" />
                Seg-Sex: 8h-20h | Sáb: 8h-18h
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Youtube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Produtos</h3>
            <ul className="space-y-2">
              {footerLinks.produtos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2">
              {footerLinks.servicos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Institucional</h3>
            <ul className="space-y-2">
              {footerLinks.institucional.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Suporte</h3>
            <ul className="space-y-2">
              {footerLinks.suporte.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-amopet py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60 text-center md:text-left">
              © {currentYear} AmoPet. Todos os direitos reservados. CNPJ: 00.000.000/0001-00
            </p>

            {/* Payment Methods */}
            <div className="flex items-center gap-4 text-2xl">
              <span title="PIX">💳</span>
              <span title="Visa">💳</span>
              <span title="Mastercard">💳</span>
              <span title="Boleto">📄</span>
            </div>

            {/* Security Badges */}
            <div className="flex items-center gap-3 text-xs text-primary-foreground/60">
              <span className="flex items-center gap-1">
                🔒 Site Seguro
              </span>
              <span className="flex items-center gap-1">
                ✓ SSL
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
