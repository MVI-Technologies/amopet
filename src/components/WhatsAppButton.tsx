import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '5511999999999';
  const message = encodeURIComponent('Olá! Vim pelo site e gostaria de mais informações.');

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-12 h-12 md:w-14 md:h-14 bg-success rounded-full shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all group"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground fill-primary-foreground" />
      
      {/* Tooltip - Desktop only */}
      <span className="hidden md:block absolute right-full mr-3 bg-card text-foreground text-sm font-medium px-4 py-2 rounded-lg shadow-card whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Fale conosco!
      </span>

      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-success animate-ping opacity-30" />
    </a>
  );
};

export default WhatsAppButton;
