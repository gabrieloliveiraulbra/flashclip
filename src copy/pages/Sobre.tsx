import { Card } from "@/components/ui/card";
import { Target, Users, Rocket, Heart } from "lucide-react";

const Sobre = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-gradient mb-4">Sobre o FlashClip</h1>
          <p className="text-xl text-muted-foreground">
            Conectando estudantes ao mundo da programação
          </p>
        </div>

        <div className="space-y-8">
          <Card className="p-6 lg:p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Target className="text-primary" size={28} />
              Nossa Missão
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              O FlashClip é um evento universitário criado para democratizar o
              acesso ao conhecimento em programação. Nossa missão é proporcionar
              uma introdução rápida, prática e acessível ao mundo da tecnologia,
              permitindo que estudantes de todas as áreas descubram o
              fascinante universo do código.
            </p>
          </Card>

          <Card className="p-6 lg:p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Rocket className="text-primary" size={28} />
              O Que Oferecemos
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Cursos intensivos de 3 horas que cobrem desde os fundamentos até
                aplicações práticas em diversas linguagens de programação. Cada
                curso é cuidadosamente elaborado para maximizar o aprendizado em
                um curto período.
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Instrutores qualificados com experiência prática no mercado
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Metodologia hands-on com projetos práticos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Certificado digital reconhecido</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Networking com colegas e profissionais da área</span>
                </li>
              </ul>
            </div>
          </Card>

          <Card className="p-6 lg:p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Users className="text-primary" size={28} />
              Para Quem é o Evento
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O FlashClip é para todos que têm curiosidade sobre programação,
              independente do nível de experiência:
            </p>
            <ul className="space-y-2 ml-4 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>
                  Estudantes universitários de qualquer curso que querem aprender
                  a programar
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>
                  Profissionais de outras áreas buscando transição de carreira
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>
                  Entusiastas de tecnologia que querem expandir seus
                  conhecimentos
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>
                  Iniciantes absolutos sem nenhuma experiência prévia
                </span>
              </li>
            </ul>
          </Card>

          <Card className="p-6 lg:p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Heart className="text-primary" size={28} />
              Nossos Valores
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold text-primary mb-2">Acessibilidade</h3>
                <p className="text-sm text-muted-foreground">
                  Educação de qualidade deve ser acessível a todos
                </p>
              </div>
              <div>
                <h3 className="font-bold text-primary mb-2">Prática</h3>
                <p className="text-sm text-muted-foreground">
                  Aprender fazendo é a melhor forma de absorver conhecimento
                </p>
              </div>
              <div>
                <h3 className="font-bold text-primary mb-2">Comunidade</h3>
                <p className="text-sm text-muted-foreground">
                  Crescemos juntos através da colaboração
                </p>
              </div>
              <div>
                <h3 className="font-bold text-primary mb-2">Excelência</h3>
                <p className="text-sm text-muted-foreground">
                  Comprometidos com a melhor experiência de aprendizado
                </p>
              </div>
            </div>
          </Card>

          <div className="text-center p-8 bg-card border border-border rounded-lg">
            <h3 className="text-2xl font-bold mb-3">
              Pronto para começar sua jornada?
            </h3>
            <p className="text-muted-foreground mb-6">
              Junte-se a centenas de estudantes que já transformaram suas
              carreiras através da programação
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/inscricao">
                <button className="px-6 py-3 bg-primary text-background rounded-lg font-medium hover:scale-105 transition-all glow-neon-strong">
                  Inscreva-se Agora
                </button>
              </a>
              <a href="/cursos">
                <button className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-all">
                  Ver Cursos
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
