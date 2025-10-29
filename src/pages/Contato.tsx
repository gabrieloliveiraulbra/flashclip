import { Card } from "@/components/ui/card";
import { Mail, Phone, Clock, MapPin } from "lucide-react";

const Contato = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-gradient mb-4">Entre em Contato</h1>
          <p className="text-xl text-muted-foreground">
            Estamos à disposição para esclarecer suas dúvidas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">E-mail</p>
                    <a
                      href="mailto:contato.flashclip@gmail.com"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      contato.flashclip@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Telefone</p>
                    <a
                      href="tel:+5563984210122"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      +55 (63) 98421-0122
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Horário de Atendimento</p>
                    <p className="text-sm text-muted-foreground">
                      Segunda a Sexta, 9h–18h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Endereço</p>
                    <p className="text-sm text-muted-foreground">
                      Ulbra Palmas
                      <br />
                      Palmas, TO
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Map */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Localização</h3>
              <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1387.9768102689961!2d-48.33419208792172!3d-10.278396208495096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x933b37991fd1e717%3A0xd41754067bb3ac4!2sCi%C3%AAncia%20da%20Computa%C3%A7%C3%A3o%20-%20Ulbra%20Palmas!5e0!3m2!1spt-BR!2sbr!4v1761416483531!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa Ulbra Palmas"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;
