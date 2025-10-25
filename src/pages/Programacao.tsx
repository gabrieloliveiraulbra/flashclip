import { Card } from "@/components/ui/card";
import { Clock, MapPin } from "lucide-react";

const Programacao = () => {
  const schedule = [
    {
      time: "14:00",
      duration: "80 minutos",
      title: "Início dos Cursos",
      description:
        "Início dos cursos, com apresentação dos patrocinadores e a programação geral.",
      location: "Labins",
    },
    {
      time: "15:20",
      duration: "10 minutos",
      title: "Intervalo",
      description:
        "Intervalo de 10 minutos, para ir ao banheiro e tomar água.",
      location: "",
    },
    {
      time: "15:30",
      duration: "55 minutos",
      title: "Retorno às Salas",
      description: "Retornar ao labin para a conclusão dos cursos.",
      location: "Labins",
    },
    {
      time: "16:25",
      duration: "35 minutos",
      title: "Coffee-break",
      description:
        "Finalização dos cursos com coffee-break para os participantes.",
      location: "",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-gradient mb-4">Programação do Evento</h1>
          <p className="text-xl text-muted-foreground">
            Confira a agenda completa do Bem Viver
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block" />

          <div className="space-y-6">
            {schedule.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-8 top-6 w-4 h-4 rounded-full bg-primary glow-neon transform -translate-x-1/2 hidden md:block" />

                <Card className="md:ml-16 p-6 hover:border-primary hover:glow-neon transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:min-w-[100px]">
                      <div className="inline-block px-3 py-1 rounded-lg bg-primary/20 text-primary font-bold text-lg">
                        {item.time}
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground mb-3">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock size={16} className="text-primary" />
                          <span>{item.duration}</span>
                        </div>
                        {item.location && (
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin size={16} className="text-primary" />
                            <span>{item.location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 p-6 bg-card border border-border rounded-lg">
          <h3 className="text-lg font-bold mb-3 text-primary">
            📌 Informações Importantes
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Chegue com pelo menos 15 minutos de antecedência</li>
            <li>• Coffee-break e materiais inclusos na inscrição</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Programacao;