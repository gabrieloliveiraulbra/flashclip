import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/flashclip-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Cursos", path: "/cursos" },
    { name: "Programação", path: "/programacao" },
    { name: "Instrutores", path: "/instrutores" },
    { name: "Patrocinadores", path: "/patrocinadores" },
    { name: "Contato", path: "/contato" },
    { name: "Sobre", path: "/sobre" },
    { name: "FAQ", path: "/faq" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logoImage} 
              alt="FlashClip Logo" 
              className="h-10 w-auto transition-all duration-300 group-hover:brightness-125 group-hover:-translate-y-0.5 drop-shadow-[0_0_8px_rgba(0,209,255,0.5)] group-hover:drop-shadow-[0_0_16px_rgba(0,209,255,0.8)]"
            />
            <span className="text-xl font-bold hidden sm:inline-block">
              Flash<span className="text-primary">Clip</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/inscricao">
              <Button className="glow-neon hover:glow-neon-strong transition-all duration-300">
                Inscreva-se
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-3 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/inscricao" onClick={() => setIsOpen(false)}>
              <Button className="w-full glow-neon">Inscreva-se</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
