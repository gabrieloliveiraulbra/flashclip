import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, User } from "lucide-react";

const Cursos = () => {
  const courses = [
    {
      id: 1,
      category: "Prolog",
      title: "Desvendando a lógica com Prolog",
      description:
        "Mergulhe no mundo da programação lógica e aprenda a resolver problemas complexos usando Prolog.",
      duration: "3 horas",
      instructors: ["Prof. João Silva", "Dra. Maria Santos"],
      prerequisite: "Nenhum",
      icon: "🧩",
    },
    {
      id: 2,
      category: "Python",
      title: "Python para Iniciantes",
      description:
        "Dê seus primeiros passos no mundo da programação com Python, uma das linguagens mais populares.",
      duration: "3 horas",
      instructors: ["Prof. Carlos Oliveira"],
      prerequisite: "Nenhum",
      icon: "🐍",
    },
    {
      id: 3,
      category: "C++",
      title: "Programação em C++",
      description:
        "Aprenda os fundamentos de C++, uma linguagem poderosa usada em sistemas críticos e jogos.",
      duration: "3 horas",
      instructors: ["Prof. Ana Paula", "MSc. Roberto Lima"],
      prerequisite: "Nenhum",
      icon: "⚡",
    },
    {
      id: 4,
      category: "JavaScript",
      title: "JavaScript Essencial",
      description:
        "Domine JavaScript e crie aplicações web interativas do zero.",
      duration: "3 horas",
      instructors: ["Prof. Pedro Costa"],
      prerequisite: "Nenhum",
      icon: "⚛️",
    },
    {
      id: 5,
      category: "SQL",
      title: "Banco de Dados com SQL",
      description:
        "Aprenda a gerenciar e consultar dados usando SQL, a linguagem padrão para bancos de dados.",
      duration: "3 horas",
      instructors: ["Dra. Juliana Ferreira"],
      prerequisite: "Nenhum",
      icon: "🗄️",
    },
    {
      id: 6,
      category: "Git",
      title: "Controle de Versão com Git",
      description:
        "Domine o Git e aprenda a colaborar efetivamente em projetos de software.",
      duration: "3 horas",
      instructors: ["Prof. Lucas Mendes"],
      prerequisite: "Nenhum",
      icon: "🔀",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-gradient mb-4">Conheça nossos cursos</h1>
          <p className="text-xl text-muted-foreground">
            Escolha o curso perfeito para começar sua jornada na programação
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="p-6 hover:border-primary hover:glow-neon transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-5xl">{course.icon}</span>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/20 text-primary">
                  {course.category}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {course.description}
              </p>

              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock size={16} className="text-primary" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <User size={16} className="text-primary mt-0.5" />
                  <div className="flex flex-wrap gap-1">
                    {course.instructors.map((instructor, idx) => (
                      <span key={idx}>
                        {instructor}
                        {idx < course.instructors.length - 1 && ","}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-muted-foreground">
                  <strong className="text-primary">Pré-requisito:</strong>{" "}
                  {course.prerequisite}
                </div>
              </div>

              <Button className="w-full">Ver Detalhes</Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cursos;
