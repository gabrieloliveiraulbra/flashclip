import { Instagram, Youtube } from "lucide-react";
import { LogoFlashClip } from "@/components/LogoFlashClip";

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram FlashClip",
      icon: Instagram,
      url: "https://instagram.com/flashclip",
    },
    {
      name: "Instagram Computação em Movimento",
      icon: Instagram,
      url: "https://instagram.com/computacaomovimento",
    },
    {
      name: "Instagram Ulbra",
      icon: Instagram,
      url: "https://instagram.com/ulbra",
    },
    {
      name: "YouTube Ulbra",
      icon: Youtube,
      url: "https://youtube.com/ulbra",
    },
  ];

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <LogoFlashClip size="sm" rounded />
          {/* Copyright */}
          <div className="text-sm text-muted-foreground text-center md:text-left">
            <p>© 2025 FlashClip. Todos os direitos reservados.</p>
            <div className="flex gap-4 mt-2 justify-center md:justify-start">
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <span>|</span>
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:glow-neon flex items-center justify-center transition-all duration-300"
                  aria-label={social.name}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
