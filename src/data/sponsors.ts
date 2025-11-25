export interface Sponsor {
  name: string;
  tier: "diamante" | "prata" | "bronze";
  description: string;
  logo: string;
  website: string;
  instagram: string;
}

export const sponsors: Sponsor[] = [
  {
    name: "SUA Internet",
    tier: "diamante",
    description:
      "Sua Internet é uma empresa de internet que oferece serviços de internet para residências e empresas.",
    logo: "https://i.ibb.co/nqCT8t9f/Logo.png",
    website: "https://suainternet.com.br/",
    instagram: "suainternet",
  },
  {
    name: "Posto Ipanema",
    tier: "prata",
    description: "Posto de combustível e serviços: troca de óleo, loja de conveniência e calibragem de pneus",
    logo: "https://i.ibb.co/RGxhcB04/posto-ipanema.png",
    website: "",
    instagram: "postoipanemapmw",
  },
  {
    name: "CRP Tecnologia",
    tier: "bronze",
    description: "CRP Tecnologia, uma empresa de desenvolvimento de software com mais de 18 anos de experiência no mercado nacional e internacional",
    logo: "https://i.ibb.co/XZxvTy5y/CRP-TECNOLOGIA.png",
    website: "https://crptecnologia.com.br/",
    instagram: "crptecnologia",
  },
];
