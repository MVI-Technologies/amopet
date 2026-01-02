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
          <div className="section-header animate-slide-up">
            <span className="section-label">
              Perguntas Frequentes
            </span>
            <h2 className="section-title">
              Dúvidas? <span className="text-gradient">A gente responde!</span>
            </h2>
            <p className="section-description">
              As perguntas mais comuns dos nossos clientes.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl md:rounded-2xl border-none shadow-card px-4 md:px-6 data-[state=open]:shadow-card-hover transition-shadow animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left font-heading font-bold text-foreground hover:text-primary hover:no-underline py-4 md:py-5 text-sm md:text-base lg:text-lg gap-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 md:pb-5 leading-relaxed text-sm md:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact CTA */}
          <div className="text-center mt-10 md:mt-12 p-6 md:p-8 bg-muted rounded-xl md:rounded-2xl animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-foreground mb-2 text-sm md:text-base">
              Não encontrou sua resposta?
            </p>
            <a
              href="https://wa.me/5511999999999"
              className="inline-flex items-center gap-2 text-primary font-heading font-bold hover:underline text-sm md:text-base"
            >
              <span className="text-lg md:text-xl">💬</span>
              Fale com a gente no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
