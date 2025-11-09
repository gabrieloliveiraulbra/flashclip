import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Countdown from "@/components/Countdown";
import { Award, BookOpen, Clock, Users } from "lucide-react";
import { LogoFlashClip } from "@/components/LogoFlashClip";
import { StarryBackground } from "@/components/StarryBackground";
import cppIcon from "@/assets/languages/cpp.png";
import jsIcon from "@/assets/languages/javascript.png";
import elixirIcon from "@/assets/languages/elixir.png";

const Home = () => {
  const courses = [
    {
      id: 1,
      title: "Programação em C++",
      description: "Aprenda os fundamentos de C++, uma linguagem poderosa",
      image: cppIcon,
    },
    {
      id: 2,
      title: "JavaScript Essencial",
      description: "Domine JavaScript e crie aplicações web interativas",
      image: jsIcon,
    },
    {
      id: 3,
      title: "Programação Funcional com Elixir",
      description: "Explore o mundo da programação funcional com Elixir",
      image: elixirIcon,
    },
  ];

  const benefits = [
    {
      icon: BookOpen,
      title: "Introdução à Programação",
      description: "Aprenda os fundamentos e dê seus primeiros passos no código",
    },
    {
      icon: Clock,
      title: "Curso Rápido e Focado",
      description: "Apenas 3 horas de duração com conteúdo objetivo",
    },
    {
      icon: Users,
      title: "Aprendizado Colaborativo",
      description: "Aprenda de forma prática junto com seus colegas",
    },
    {
      icon: Award,
      title: "Certificado Digital",
      description: "Receba um certificado para adicionar ao seu currículo",
    },
  ];

  return (
    <div className="min-h-screen relative">
      <StarryBackground />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Constellation halo effect */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse-slow"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8 flex justify-center animate-fade-in">
            <LogoFlashClip variant="icon" size="xl" className="drop-shadow-[0_0_40px_rgba(109,74,255,0.8)]" />
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12">
            Conecte-se ao futuro da programação
          </p>

          <div className="mb-12">
            <Countdown />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/inscricao">
              <Button
                size="lg"
                className="glow-neon-strong hover:scale-105 transition-all duration-300"
              >
                Inscreva-se Agora
              </Button>
            </Link>
            <Link to="/sobre">
              <Button
                size="lg"
                variant="outline"
                className="border-primary hover:bg-primary/10"
              >
                Saiba Mais
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            📍 Local: Ulbra Palmas, TO | 📅 Data: 22/11/2025 às 14h
          </p>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-center mb-12 text-gradient">Nossos Parceiros</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-full bg-muted border-2 border-border hover:border-primary hover:glow-neon transition-all duration-300 flex items-center justify-center"
              >
                <span className="text-4xl">🏢</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Participate Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-center mb-12 text-gradient">Por que participar?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="card-uniform p-6 hover:border-primary hover:glow-neon hover:scale-[1.03] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Courses Preview Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-center mb-12 text-gradient">Nossos Cursos</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {courses.map((course) => (
              <Card
                key={course.id}
                className="card-uniform p-6 hover:border-primary hover:glow-neon hover:scale-[1.03] transition-all duration-300"
              >
                <div className="w-20 h-20 flex items-center justify-center mb-4 mx-auto">
                  <img 
                    src={course.image} 
                    alt={`${course.title} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-muted-foreground mb-4">{course.description}</p>
                <Link to="/cursos">
                  <Button variant="outline" className="w-full">
                    Ver Cursos
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link to="/cursos">
              <Button size="lg" className="glow-neon">
                Ver Todos os Cursos
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
