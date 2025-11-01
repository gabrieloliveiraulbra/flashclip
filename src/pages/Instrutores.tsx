import { Card } from "@/components/ui/card";
import cppIcon from "@/assets/languages/cpp.png";
import jsIcon from "@/assets/languages/javascript.png";
import elixirIcon from "@/assets/languages/elixir.png";
import phpIcon from "@/assets/languages/php.png";
import prologIcon from "@/assets/languages/prolog.png";

const Instrutores = () => {
  const instructorsByLanguage = {
    "C++": [
      { name: "JOÃO VITOR ARAUJO", photo: "joao-vitor.png" },
      { name: "EDOARDO", photo: "edoardo.png" },
      { name: "GUILHERME MOREIRA", photo: "guilherme-moreira.png" },
      { name: "ARTUR MURADA", photo: "artur-murada.png" },
      { name: "NICOLLAS", photo: "nicollas.png" },
      { name: "VINICIUS FELIPE", photo: "vinicius-felipe.png" },
    ],
    "JavaScript": [
      { name: "LUIZ ARTHUR", photo: "luiz-arthur.png" },
      { name: "GUILHERME MOTTA", photo: "guilherme-motta.png" },
      { name: "GABRIEL LOPES", photo: "gabriel-lopes.png" },
      { name: "MATHEUS CARVALHO", photo: "matheus-carvalho.png" },
      { name: "THIAGO SILVA", photo: "thiago-silva.png" },
      { name: "SAMUEL ABADE", photo: "samuel-abade.png" },
    ],
    "Elixir": [
      { name: "GABRIEL", photo: "gabriel.png" },
      { name: "KARINY FERREIRA", photo: "kariny-ferreira.png" },
      { name: "FELIPE SOUSA", photo: "felipe-sousa.png" },
      { name: "ANA CAROLINA", photo: "ana-carolina.png" },
      { name: "LARISSA", photo: "larissa.png" },
      { name: "DEBORAH", photo: "deborah.png" },
    ],
    "PHP": [
      { name: "LUCAS LEAL", photo: "lucas-leal.png" },
      { name: "JONAS", photo: "jonas.png" },
      { name: "IGOR", photo: "igor.png" },
      { name: "SAMUEL MATSUKAMI", photo: "samuel-matsukami.png" },
      { name: "EDUARDO", photo: "eduardo.png" },
    ],
    "Prolog": [
      { name: "ANA LARESSA", photo: "ana-laressa.png" },
      { name: "TAYLANNE", photo: "taylanne.png" },
      { name: "JOAO PEDRO", photo: "joao-pedro.png" },
      { name: "DANIEL MARTINS", photo: "daniel-martins.png" },
      { name: "RODRIGO FOLHA", photo: "rodrigo-folha.png" },
    ],
  };

  const languageIcons: Record<string, string> = {
    "C++": cppIcon,
    "JavaScript": jsIcon,
    "Elixir": elixirIcon,
    "PHP": phpIcon,
    "Prolog": prologIcon,
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-gradient mb-4">Nossos Instrutores</h1>
          <p className="text-xl text-muted-foreground">
            Conheça os profissionais que vão guiar sua jornada
          </p>
        </div>

        <div className="space-y-16">
          {Object.entries(instructorsByLanguage).map(([language, instructors]) => (
            <div key={language} className="animate-fade-in">
              <div className="flex items-center gap-4 mb-8">
                <img 
                  src={languageIcons[language]} 
                  alt={`${language} logo`}
                  className="w-12 h-12 object-contain"
                />
                <h2 className="text-3xl font-bold text-gradient">
                  Instrutores de {language}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {instructors.map((instructor, index) => (
                  <Card
                    key={index}
                    className="card-uniform p-6 hover:border-primary hover:glow-neon hover:scale-[1.03] transition-all duration-300 text-center"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="w-24 h-24 rounded-full bg-card border-2 border-primary/20 flex items-center justify-center overflow-hidden">
                        {/* Substitua [NOME_DA_FOTO] pelo nome real do arquivo na pasta src/assets/instructors/ */}
                        <img 
                          src={`/src/assets/instructors/${instructor.photo}`}
                          alt={instructor.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback para quando a foto não existir
                            e.currentTarget.src = languageIcons[language];
                            e.currentTarget.className = "w-16 h-16 object-contain";
                          }}
                        />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold mb-2">{instructor.name}</h3>
                    
                    <div className="text-xs font-medium px-3 py-1 rounded-full bg-primary/20 text-primary inline-block">
                      {language}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instrutores;
