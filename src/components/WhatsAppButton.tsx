import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '5511999999999';
  const message = encodeURIComponent('Olá! Vim pelo site e gostaria de mais informações.');

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-success rounded-full shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all group"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-primary-foreground fill-primary-foreground" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 bg-card text-foreground text-sm font-medium px-4 py-2 rounded-lg shadow-card whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Fale conosco!
      </span>

      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-success animate-ping opacity-30" />
    </a>
  );
};

export default WhatsAppButton;
