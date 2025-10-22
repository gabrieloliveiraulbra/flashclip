import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { CheckCircle } from "lucide-react";

const Inscricao = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    birthdate: "",
    gender: "",
    course: "",
  });

  const courses = [
    "Desvendando a lógica com Prolog",
    "Python para Iniciantes",
    "Programação em C++",
    "JavaScript Essencial",
    "Banco de Dados com SQL",
    "Controle de Versão com Git",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Inscrição realizada com sucesso! Verifique seu e-mail.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      birthdate: "",
      gender: "",
      course: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-gradient mb-4">Inscreva-se no FlashClip</h1>
          <p className="text-xl text-muted-foreground">
            Preencha o formulário abaixo e garanta sua vaga
          </p>
        </div>

        <Card className="p-6 lg:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Nome Completo *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <Label htmlFor="email">E-mail *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <Label htmlFor="phone">Telefone (WhatsApp) *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1"
                placeholder="(63) 98421-0122"
              />
            </div>

            <div>
              <Label htmlFor="birthdate">Data de Nascimento *</Label>
              <Input
                id="birthdate"
                name="birthdate"
                type="date"
                value={formData.birthdate}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="gender">Gênero *</Label>
              <Select
                value={formData.gender}
                onValueChange={(value) =>
                  setFormData({ ...formData, gender: value })
                }
                required
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Selecione seu gênero" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="masculino">Masculino</SelectItem>
                  <SelectItem value="feminino">Feminino</SelectItem>
                  <SelectItem value="prefiro-nao-dizer">
                    Prefiro não dizer
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="course">Curso Desejado *</Label>
              <Select
                value={formData.course}
                onValueChange={(value) =>
                  setFormData({ ...formData, course: value })
                }
                required
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Escolha seu curso" />
                </SelectTrigger>
                <SelectContent>
                  {courses.map((course) => (
                    <SelectItem key={course} value={course}>
                      {course}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                className="w-full glow-neon-strong"
                size="lg"
              >
                <CheckCircle className="mr-2" size={20} />
                Confirmar Inscrição
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              * Campos obrigatórios. Ao se inscrever, você concorda com nossos
              Termos de Uso e Política de Privacidade.
            </p>
          </form>
        </Card>

        <div className="mt-8 p-6 bg-card border border-border rounded-lg">
          <h3 className="text-lg font-bold mb-3 text-primary">
            ℹ️ Informações da Inscrição
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Inscrições gratuitas e limitadas</li>
            <li>• Confirmação será enviada por e-mail em até 24h</li>
            <li>• Certificado digital ao final do evento</li>
            <li>• Vagas limitadas - garanta a sua!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Inscricao;
