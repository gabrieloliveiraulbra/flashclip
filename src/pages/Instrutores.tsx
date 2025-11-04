import { Card } from "@/components/ui/card";
import cppIcon from "@/assets/languages/cpp.png";
import jsIcon from "@/assets/languages/javascript.png";
import elixirIcon from "@/assets/languages/elixir.png";
import phpIcon from "@/assets/languages/php.png";
import prologIcon from "@/assets/languages/prolog.png";

const Instrutores = () => {
  const instructorsByLanguage = {
    "C++": [
      { name: "JOÃO VITOR ARAUJO", photo: "https://i.ibb.co/ch8GcLS3/joao.png" },
      { name: "EDOARDO", photo: "https://i.ibb.co/20gtyCWX/edoardo-tombolesi.png" },
      { name: "GUILHERME MOREIRA", photo: "https://i.ibb.co/ymShqJbL/guilherme-moreira.png" },
      { name: "ARTUR MURADA", photo: "https://i.ibb.co/01WP1fL/artur.png" },
      { name: "NICOLLAS", photo: "https://i.ibb.co/yFgPvbmr/nicollas-souza.png" },
      { name: "VINICIUS FELIPE", photo: "https://i.ibb.co/kVHvV5fM/vinicius-felipe.png" },
    ],
    "JavaScript": [
      { name: "LUIZ ARTHUR", photo: "" },
      { name: "GUILHERME MOTTA", photo: "" },
      { name: "GABRIEL LOPES", photo: "" },
      { name: "MATHEUS CARVALHO", photo: "" },
      { name: "THIAGO SILVA", photo: "" },
      { name: "SAMUEL ABADE", photo: "" },
    ],
    "Elixir": [
      { name: "GABRIEL", photo: "https://i.ibb.co/GvtdHLdv/gabriel.png" },
      { name: "KARINY FERREIRA", photo: "https://i.ibb.co/xKjf724b/kariny-ferreira.png" },
      { name: "FELIPE SOUSA", photo: "https://i.ibb.co/4wgpCvx5/felipe-sousa.png" },
      { name: "ANA CAROLINA", photo: "https://i.ibb.co/ynXBZvG4/ana-carolina.jpg" },
      { name: "LARISSA", photo: "https://i.ibb.co/WNPPDfvb/larissa.jpg" },
      { name: "DEBORAH", photo: "https://i.ibb.co/MxvCdrm6/deborah.png" },
    ],
    "PHP": [
      { name: "LUCAS LEAL", photo: "https://i.ibb.co/YrX3Tf7/lucas-leal.png" },
      { name: "JONAS", photo: "https://i.ibb.co/PZmfRx83/jonas.png" },
      { name: "IGOR", photo: "https://i.ibb.co/277rktvn/igor.png" },
      { name: "SAMUEL MATSUKAMI", photo: "https://i.ibb.co/hxPqYkzP/samuel-matsukami.png" },
      { name: "EDUARDO", photo: "https://i.ibb.co/KpZ7cyMr/eduardo.png" },
    ],
    "Prolog": [
      { name: "ANA LARESSA", photo: "https://i.ibb.co/7dQwq61r/ana-laressa.png" },
      { name: "TAYLANNE", photo: "https://i.ibb.co/Y7f6qbNH/taylanne.png" },
      { name: "JOAO PEDRO", photo: "" },
      { name: "DANIEL MARTINS", photo: "https://i.ibb.co/93mFMYPX/daniel-martins.png" },
      { name: "RODRIGO FOLHA", photo: "https://i.ibb.co/VWKZndkT/rodrigo-folha.png" },
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
                        <img 
                          src={instructor.photo || languageIcons[language]}
                          alt={instructor.name}
                          className={instructor.photo ? "w-full h-full object-cover" : "w-16 h-16 object-contain"}
                          loading="lazy"
                          onError={(e) => {
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
