import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Countdown from "@/components/Countdown";
import { Award, BookOpen, Clock, Users } from "lucide-react";
import logoImage from "@/assets/flashclip-logo.png";

const Home = () => {
  const courses = [
    {
      id: 1,
      title: "Desvendando a lógica com Prolog",
      description: "Aprenda os fundamentos da programação lógica",
      icon: "🧩",
    },
    {
      id: 2,
      title: "Python para Iniciantes",
      description: "Dê seus primeiros passos no mundo da programação",
      icon: "🐍",
    },
    {
      id: 3,
      title: "Programação em C++",
      description: "Domine uma das linguagens mais poderosas",
      icon: "⚡",
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Starry background effect */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-1/3 w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-60 left-1/2 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-32 right-1/4 w-1 h-1 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8 flex justify-center animate-fade-in">
            <img 
              src={logoImage} 
              alt="FlashClip Logo" 
              className="h-48 md:h-64 w-auto drop-shadow-[0_0_30px_rgba(0,209,255,0.6)] hover:drop-shadow-[0_0_50px_rgba(0,209,255,0.8)] transition-all duration-500 animate-pulse-slow"
            />
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
            📍 Local: Ulbra Palmas, TO | 📅 Data: 28/11/2025 às 14h
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
                  className="p-6 hover:border-primary hover:glow-neon transition-all duration-300"
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
                className="p-6 hover:border-primary hover:glow-neon transition-all duration-300"
              >
                <div className="text-5xl mb-4">{course.icon}</div>
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-muted-foreground mb-4">{course.description}</p>
                <Link to="/cursos">
                  <Button variant="outline" className="w-full">
                    Ver Detalhes
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
