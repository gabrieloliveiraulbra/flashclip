import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Instagram, Globe } from "lucide-react";

const Patrocinadores = () => {
  const [filter, setFilter] = useState("todos");

  const sponsors = [
    {
      name: "TechCorp Solutions",
      tier: "diamante",
      description:
        "Líder em soluções de tecnologia empresarial com foco em transformação digital",
      logo: "💎",
      website: "https://techcorp.com",
      instagram: "@techcorp",
    },
    {
      name: "CodeHub Brasil",
      tier: "diamante",
      description:
        "Plataforma de ensino de programação com milhares de alunos formados",
      logo: "🚀",
      website: "https://codehub.com.br",
      instagram: "@codehub_br",
    },
    {
      name: "DevTools Inc",
      tier: "prata",
      description:
        "Ferramentas de desenvolvimento que impulsionam a produtividade",
      logo: "🛠️",
      website: "https://devtools.io",
      instagram: "@devtools",
    },
    {
      name: "CloudStack",
      tier: "prata",
      description: "Infraestrutura em nuvem de alta performance",
      logo: "☁️",
      website: "https://cloudstack.com",
      instagram: "@cloudstack",
    },
    {
      name: "DataFlow Analytics",
      tier: "prata",
      description: "Análise de dados e business intelligence",
      logo: "📊",
      website: "https://dataflow.com",
      instagram: "@dataflow",
    },
    {
      name: "ByteCafe",
      tier: "bronze",
      description: "Cafeteria especializada para desenvolvedores",
      logo: "☕",
      website: "https://bytecafe.com.br",
      instagram: "@bytecafe",
    },
    {
      name: "CodeBooks",
      tier: "bronze",
      description: "Editora especializada em livros de programação",
      logo: "📚",
      website: "https://codebooks.com.br",
      instagram: "@codebooks",
    },
    {
      name: "GamerDev Studios",
      tier: "bronze",
      description: "Estúdio de desenvolvimento de jogos indie",
      logo: "🎮",
      website: "https://gamerdev.com",
      instagram: "@gamerdev",
    },
  ];

  const filteredSponsors =
    filter === "todos"
      ? sponsors
      : sponsors.filter((s) => s.tier === filter);

  const tierColors = {
    diamante: "from-cyan-400 to-blue-600",
    prata: "from-gray-300 to-gray-500",
    bronze: "from-orange-400 to-orange-600",
  };

  const tierLabels = {
    diamante: "Patrocinador Diamante",
    prata: "Patrocinador Prata",
    bronze: "Patrocinador Bronze",
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-gradient mb-4">Nossos Patrocinadores</h1>
          <p className="text-xl text-muted-foreground">
            Conheça as empresas que tornam o FlashClip possível
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["todos", "diamante", "prata", "bronze"].map((tier) => (
            <Button
              key={tier}
              variant={filter === tier ? "default" : "outline"}
              onClick={() => setFilter(tier)}
              className={filter === tier ? "glow-neon" : ""}
            >
              {tier.charAt(0).toUpperCase() + tier.slice(1)}
            </Button>
          ))}
        </div>

        {/* Sponsors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSponsors.map((sponsor, index) => (
            <Card
              key={index}
              className="card-uniform p-6 hover:border-primary hover:glow-neon hover:scale-[1.03] transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="text-6xl mb-4 text-center">{sponsor.logo}</div>

                <h3 className="text-xl font-bold mb-2 text-center">
                  {sponsor.name}
                </h3>

                <div
                  className={`text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r ${
                    tierColors[sponsor.tier as keyof typeof tierColors]
                  } text-white inline-block mx-auto mb-3`}
                >
                  {tierLabels[sponsor.tier as keyof typeof tierLabels]}
                </div>

                <p className="text-sm text-muted-foreground mb-4 flex-grow text-center">
                  {sponsor.description}
                </p>

                <div className="flex gap-2 justify-center mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2"
                    asChild
                  >
                    <a
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe size={16} />
                      Site
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2"
                    asChild
                  >
                    <a
                      href={`https://instagram.com/${sponsor.instagram.replace(
                        "@",
                        ""
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram size={16} />
                      Instagram
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center p-8 bg-card border border-border rounded-lg">
          <h3 className="text-2xl font-bold mb-4">
            Quer ser um patrocinador?
          </h3>
          <p className="text-muted-foreground mb-6">
            Entre em contato conosco e descubra como sua empresa pode apoiar o
            FlashClip
          </p>
          <Button size="lg" className="glow-neon">
            <ExternalLink className="mr-2" size={20} />
            Fale Conosco
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Patrocinadores;
