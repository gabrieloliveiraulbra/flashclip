import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const Inscricao = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-gradient mb-4">Inscrições</h1>
        </div>

        <Card className="p-8 md:p-16 bg-card/50 backdrop-blur-sm border-primary/20">
          <div className="flex flex-col items-center justify-center text-center space-y-6">
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 blur-2xl rounded-full"></div>
              <CheckCircle2 className="w-24 h-24 text-secondary relative z-10" strokeWidth={2} />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Inscrições Encerradas!
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              As inscrições para o evento foram encerradas. Agradecemos o seu interesse e 
              esperamos te ver na próxima edição!
            </p>

            <div className="pt-4 text-sm text-muted-foreground/80">
              Fique atento às nossas redes sociais para novidades sobre futuros eventos.
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Inscricao;