import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Instrutores = () => {
  const instructors = [
    { name: "JOÃO VITOR ARAUJO", course: "C++" },
    { name: "EDOARDO", course: "C++" },
    { name: "GUILHERME MOREIRA", course: "C++" },
    { name: "ARTUR MURADA", course: "C++" },
    { name: "NICOLLAS", course: "C++" },
    { name: "VINICIUS FELIPE", course: "C++" },
    { name: "LUIZ ARTHUR", course: "JavaScript" },
    { name: "GUILHERME MOTTA", course: "JavaScript" },
    { name: "GABRIEL LOPES", course: "JavaScript" },
    { name: "MATHEUS CARVALHO", course: "JavaScript" },
    { name: "THIAGO SILVA", course: "JavaScript" },
    { name: "SAMUEL ABADE", course: "JavaScript" },
    { name: "GABRIEL", course: "Elixir" },
    { name: "KARINY FERREIRA", course: "Elixir" },
    { name: "FELIPE SOUSA", course: "Elixir" },
    { name: "ANA CAROLINA", course: "Elixir" },
    { name: "LARISSA", course: "Elixir" },
    { name: "DEBORAH", course: "Elixir" },
    { name: "LUCAS LEAL", course: "PHP" },
    { name: "JONAS", course: "PHP" },
    { name: "IGOR", course: "PHP" },
    { name: "SAMUEL MATSUKAMI", course: "PHP" },
    { name: "EDUARDO", course: "PHP" },
    { name: "ANA LARESSA", course: "Prolog" },
    { name: "TAYLANNE", course: "Prolog" },
    { name: "JOAO PEDRO", course: "Prolog" },
    { name: "DANIEL MARTINS", course: "Prolog" },
    { name: "RODRIGO FOLHA", course: "Prolog" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-gradient mb-4">Nossos Instrutores</h1>
          <p className="text-xl text-muted-foreground">
            Conheça os profissionais que vão guiar sua jornada
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {instructors.map((instructor, index) => (
            <Card
              key={index}
              className="card-uniform p-6 hover:border-primary hover:glow-neon hover:scale-[1.03] transition-all duration-300 text-center"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center glow-neon">
                <GraduationCap size={40} className="text-background" />
              </div>

              <h3 className="text-lg font-bold mb-2">{instructor.name}</h3>
              
              <div className="text-xs font-medium px-3 py-1 rounded-full bg-primary/20 text-primary inline-block">
                {instructor.course}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instrutores;
