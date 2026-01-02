import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, ShoppingCart, Heart } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#beneficios', label: 'Benefícios' },
    { href: '#produtos', label: 'Produtos' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-card py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-amopet">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative">
              <Heart className="w-8 h-8 text-primary fill-primary group-hover:animate-wiggle" />
              <span className="absolute -top-1 -right-1 text-xs">🐾</span>
            </div>
            <span className="text-2xl font-heading font-bold text-foreground">
              Amo<span className="text-primary">Pet</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+5511999999999"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>(11) 99999-9999</span>
            </a>
            <Button variant="default" size="default">
              <ShoppingCart className="w-4 h-4" />
              Compre Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-4 py-4 border-t border-border">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <a
                href="tel:+5511999999999"
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Phone className="w-4 h-4" />
                <span>(11) 99999-9999</span>
              </a>
              <Button variant="default" className="w-full">
                <ShoppingCart className="w-4 h-4" />
                Compre Agora
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
