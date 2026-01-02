import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Qual o prazo de entrega?',
    answer: 'Para a região metropolitana, entregamos em até 24 horas úteis. Para outras localidades, o prazo varia de 2 a 5 dias úteis. Você receberá um código de rastreamento assim que o pedido for enviado.',
  },
  {
    question: 'Posso trocar ou devolver um produto?',
    answer: 'Sim! Você tem até 7 dias após o recebimento para solicitar troca ou devolução. O produto deve estar lacrado e na embalagem original. Para rações e alimentos abertos, aceitamos devolução apenas em caso de defeito comprovado.',
  },
  {
    question: 'Os pagamentos são seguros?',
    answer: 'Totalmente! Utilizamos criptografia SSL e trabalhamos com as principais bandeiras de cartão e plataformas de pagamento. Seus dados estão sempre protegidos. Também aceitamos PIX e boleto bancário.',
  },
  {
    question: 'Qual o horário de funcionamento?',
    answer: 'Nossa loja física funciona de segunda a sexta das 8h às 20h, e sábados das 8h às 18h. A loja online funciona 24 horas! O atendimento via WhatsApp está disponível das 8h às 22h.',
  },
  {
    question: 'Como funciona o programa de fidelidade?',
    answer: 'A cada R$ 1 em compras, você acumula 1 ponto. Ao atingir 500 pontos, você pode trocar por R$ 25 em desconto. Os pontos não expiram e você pode acompanhar seu saldo pelo site ou app.',
  },
  {
    question: 'Vocês atendem pets com necessidades especiais?',
    answer: 'Sim! Nossa equipe é treinada para atender pets idosos, com mobilidade reduzida ou condições de saúde específicas. Informe na hora do agendamento para prepararmos o melhor atendimento.',
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-amopet">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-slide-up">
            <span className="inline-block text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Perguntas Frequentes
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Dúvidas? <span className="text-gradient">A gente responde!</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              As perguntas mais comuns dos nossos clientes.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl border-none shadow-card px-6 data-[state=open]:shadow-card-hover transition-shadow animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left font-heading font-bold text-foreground hover:text-primary hover:no-underline py-5 text-base md:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact CTA */}
          <div className="text-center mt-12 p-8 bg-muted rounded-2xl animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-foreground mb-2">
              Não encontrou sua resposta?
            </p>
            <a
              href="https://wa.me/5511999999999"
              className="inline-flex items-center gap-2 text-primary font-heading font-bold hover:underline"
            >
              <span className="text-xl">💬</span>
              Fale com a gente no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
