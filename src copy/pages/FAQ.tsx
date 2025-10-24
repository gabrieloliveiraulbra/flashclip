import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      question: "Preciso ter conhecimento prévio em programação?",
      answer:
        "Não! Todos os cursos do FlashClip são voltados para iniciantes. Começamos do zero e construímos o conhecimento passo a passo. A única exigência é sua curiosidade e vontade de aprender.",
    },
    {
      question: "Quanto custa a inscrição?",
      answer:
        "As inscrições para o FlashClip são completamente gratuitas! Queremos tornar a educação em programação acessível a todos os estudantes.",
    },
    {
      question: "Preciso levar meu próprio notebook?",
      answer:
        "Recomendamos trazer seu notebook para uma melhor experiência. No entanto, disponibilizamos computadores nos laboratórios para quem não puder levar.",
    },
    {
      question: "Quanto tempo dura o evento?",
      answer:
        "O FlashClip acontece em um único dia, das 14h às 17h30, incluindo coffee-break. Cada curso tem duração total de 3 horas divididas em dois módulos.",
    },
    {
      question: "Receberei certificado?",
      answer:
        "Sim! Todos os participantes que completarem o curso receberão um certificado digital por e-mail em até 7 dias após o evento.",
    },
    {
      question: "Posso fazer mais de um curso?",
      answer:
        "Cada participante pode se inscrever em apenas um curso por edição do evento. Isso garante melhor aproveitamento e mais vagas para outros estudantes.",
    },
    {
      question: "Como funciona o coffee-break?",
      answer:
        "Haverá um intervalo de 20 minutos durante o evento com café, lanches e bebidas. É uma ótima oportunidade para networking com outros participantes e instrutores.",
    },
    {
      question: "E se eu tiver que cancelar minha inscrição?",
      answer:
        "Você pode cancelar sua inscrição até 24 horas antes do evento através do e-mail de confirmação. Assim liberamos a vaga para outro estudante na lista de espera.",
    },
    {
      question: "Há vagas limitadas?",
      answer:
        "Sim, as vagas são limitadas para garantir qualidade no ensino e uma experiência mais personalizada. Recomendamos se inscrever o quanto antes.",
    },
    {
      question: "Posso trazer um amigo que não é aluno da Ulbra?",
      answer:
        "O evento é aberto a todos os estudantes universitários, não apenas da Ulbra. Convidamos seu amigo a fazer a inscrição oficial para garantir sua vaga.",
    },
    {
      question: "Como escolho qual curso fazer?",
      answer:
        "Na página de Cursos você encontra descrições detalhadas de cada opção. Se ainda tiver dúvidas, entre em contato conosco que te ajudaremos a escolher o melhor curso para você.",
    },
    {
      question: "Haverá outras edições do FlashClip?",
      answer:
        "Sim! Planejamos realizar o FlashClip regularmente. Siga nossas redes sociais para não perder as próximas edições.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-gradient mb-4">Perguntas Frequentes</h1>
          <p className="text-xl text-muted-foreground">
            Tire suas dúvidas sobre o FlashClip
          </p>
        </div>

        <Card className="p-6 lg:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        <div className="mt-8 p-6 bg-card border border-border rounded-lg text-center">
          <h3 className="text-xl font-bold mb-3">Ainda tem dúvidas?</h3>
          <p className="text-muted-foreground mb-4">
            Nossa equipe está pronta para ajudar você
          </p>
          <a href="/contato">
            <button className="px-6 py-3 bg-primary text-background rounded-lg font-medium hover:scale-105 transition-all glow-neon">
              Entre em Contato
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
