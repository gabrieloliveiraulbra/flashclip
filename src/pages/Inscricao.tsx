import { Card } from "@/components/ui/card";

const Inscricao = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-gradient mb-4">Inscreva-se</h1>
          <p className="text-xl text-muted-foreground">
            Preencha o formulário abaixo para garantir sua vaga
          </p>
        </div>

        <Card className="p-4 md:p-8">
          <div className="w-full overflow-hidden">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeTEhuMZF688AgllkEo_cfvxL1Dvi9vWofSmeyVyJan-YCaMw/viewform?embedded=true"
              width="100%"
              height="2200"
              frameBorder="0"
              className="w-full h-[1580px] rounded-lg"
            >
              Carregando…
            </iframe>
          </div>
        </Card>


        <div className="mt-8 p-6 bg-card border border-border rounded-lg">
          <h3 className="text-lg font-bold mb-3 text-primary">
            ℹ️ Informações da Inscrição
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Inscrições gratuitas e limitadas</li>
            <li>• Confirmação será enviada por e-mail após o envio</li>
            <li>• Certificado digital ao final do evento</li>
            <li>• Vagas limitadas - garanta a sua!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Inscricao;