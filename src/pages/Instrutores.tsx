import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Instrutores = () => {
  const instructors = [
    {
      name: "Prof. João Silva",
      course: "Desvendando a lógica com Prolog",
      bio: "Doutor em Ciência da Computação com especialização em Programação Lógica",
    },
    {
      name: "Dra. Maria Santos",
      course: "Desvendando a lógica com Prolog",
      bio: "Professora e pesquisadora em Inteligência Artificial há 15 anos",
    },
    {
      name: "Prof. Carlos Oliveira",
      course: "Python para Iniciantes",
      bio: "Especialista em Python com mais de 10 anos de experiência em desenvolvimento",
    },
    {
      name: "Prof. Ana Paula",
      course: "Programação em C++",
      bio: "Engenheira de Software com foco em sistemas de alto desempenho",
    },
    {
      name: "MSc. Roberto Lima",
      course: "Programação em C++",
      bio: "Mestre em Computação e desenvolvedor de jogos AAA",
    },
    {
      name: "Prof. Pedro Costa",
      course: "JavaScript Essencial",
      bio: "Full-stack developer e instrutor de desenvolvimento web",
    },
    {
      name: "Dra. Juliana Ferreira",
      course: "Banco de Dados com SQL",
      bio: "Doutora em Sistemas de Informação e especialista em Big Data",
    },
    {
      name: "Prof. Lucas Mendes",
      course: "Controle de Versão com Git",
      bio: "DevOps engineer e evangelista de boas práticas de desenvolvimento",
    },
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
              className="p-6 hover:border-primary hover:glow-neon transition-all duration-300 text-center"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center glow-neon">
                <GraduationCap size={40} className="text-background" />
              </div>

              <h3 className="text-lg font-bold mb-2">{instructor.name}</h3>
              
              <div className="text-xs font-medium px-3 py-1 rounded-full bg-primary/20 text-primary inline-block mb-3">
                {instructor.course}
              </div>

              <p className="text-sm text-muted-foreground">{instructor.bio}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instrutores;
