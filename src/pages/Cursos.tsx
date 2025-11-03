import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import cppIcon from "@/assets/languages/cpp.png";
import jsIcon from "@/assets/languages/javascript.png";
import elixirIcon from "@/assets/languages/elixir.png";
import phpIcon from "@/assets/languages/php.png";
import prologIcon from "@/assets/languages/prolog.png";

const Cursos = () => {
  const courses = [
    {
      id: 1,
      category: "C++",
      title: "Programação em C++",
      description:
        "Aprenda os fundamentos de C++, uma linguagem poderosa usada em sistemas críticos e jogos.",
      duration: "3 horas",
      instructors: ["JOÃO VITOR ARAUJO", "EDOARDO", "GUILHERME MOREIRA", "ARTUR MURADA", "NICOLLAS", "VINICIUS FELIPE"],
      prerequisite: "Nenhum",
      image: cppIcon,
    },
    {
      id: 2,
      category: "JavaScript",
      title: "JavaScript Essencial",
      description:
        "Domine JavaScript e crie aplicações web interativas do zero.",
      duration: "3 horas",
      instructors: ["LUIZ ARTHUR", "GUILHERME MOTTA", "GABRIEL LOPES", "MATHEUS CARVALHO", "THIAGO SILVA", "SAMUEL ABADE"],
      prerequisite: "Nenhum",
      image: jsIcon,
    },
    {
      id: 3,
      category: "Elixir",
      title: "Programação Funcional com Elixir",
      description:
        "Explore o mundo da programação funcional com Elixir, uma linguagem moderna e escalável.",
      duration: "3 horas",
      instructors: ["GABRIEL", "KARINY FERREIRA", "FELIPE SOUSA", "ANA CAROLINA", "LARISSA", "DEBORAH"],
      prerequisite: "Nenhum",
      image: elixirIcon,
    },
    {
      id: 4,
      category: "PHP",
      title: "Desenvolvimento Web com PHP",
      description:
        "Aprenda PHP e construa aplicações web dinâmicas e poderosas.",
      duration: "3 horas",
      instructors: ["LUCAS LEAL", "JONAS", "IGOR", "SAMUEL MATSUKAMI", "EDUARDO"],
      prerequisite: "Nenhum",
      image: phpIcon,
    },
    {
      id: 5,
      category: "Prolog",
      title: "Desvendando a lógica com Prolog",
      description:
        "Mergulhe no mundo da programação lógica e aprenda a resolver problemas complexos usando Prolog.",
      duration: "3 horas",
      instructors: ["ANA LARESSA", "TAYLANNE", "JOAO PEDRO", "DANIEL MARTINS", "RODRIGO FOLHA"],
      prerequisite: "Nenhum",
      image: prologIcon,
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
              className="card-uniform p-6 hover:border-primary hover:glow-neon hover:scale-[1.03] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <img 
                    src={course.image} 
                    alt={`${course.category} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/20 text-primary">
                  {course.category}
                </span>
              </div>

              <div className="card-uniform-content">
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {course.description}
                </p>
              </div>

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

              <Link to="/inscricao" className="w-full">
                <Button className="w-full">Inscreva-se</Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cursos;
