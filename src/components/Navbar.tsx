
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!email || !email.includes("@")) {
      alert("Por favor ingresa un correo válido.");
      return;
    }

    console.log("Correo registrado:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/lovable-uploads/f383ae74-d18b-4d9a-8055-f4fb754459c9.png"
            alt="Skin.AI Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-skinai-darkText font-medium hover:text-skinai-coral transition-colors">
            Características
          </a>
          <a href="#how-it-works" className="text-skinai-darkText font-medium hover:text-skinai-coral transition-colors">
            Cómo Funciona
          </a>
          <a href="#benefits" className="text-skinai-darkText font-medium hover:text-skinai-coral transition-colors">
            Beneficios
          </a>
          <a href="#testimonials" className="text-skinai-darkText font-medium hover:text-skinai-coral transition-colors">
            Testimonios
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-skinai-coral hover:bg-opacity-90 text-white px-8 py-6 text-lg cta-button">
                Descargar App
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>🚧 Disponible próximamente</DialogTitle>
                <DialogDescription>
                  Ingresa tu correo y te avisaremos cuando la aplicación esté lista.
                </DialogDescription>
              </DialogHeader>

              {!submitted ? (
                <div className="space-y-4 mt-4">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tucorreo@ejemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button onClick={handleSubmit} className="w-full bg-skinai-coral text-white">
                    Notificarme
                  </Button>
                </div>
              ) : (
                <p className="text-green-600 mt-4">
                  ✅ ¡Gracias! Te notificaremos cuando esté disponible.
                </p>
              )}
            </DialogContent>
          </Dialog>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-skinai-darkText" />
            ) : (
              <Menu className="h-6 w-6 text-skinai-darkText" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white z-50 shadow-md p-4">
          <nav className="flex flex-col space-y-4">
            <a
              href="#features"
              onClick={() => setIsMenuOpen(false)}
              className="text-skinai-darkText font-medium hover:text-skinai-coral transition-colors"
            >
              Características
            </a>
            <a
              href="#how-it-works"
              onClick={() => setIsMenuOpen(false)}
              className="text-skinai-darkText font-medium hover:text-skinai-coral transition-colors"
            >
              Cómo Funciona
            </a>
            <a
              href="#benefits"
              onClick={() => setIsMenuOpen(false)}
              className="text-skinai-darkText font-medium hover:text-skinai-coral transition-colors"
            >
              Beneficios
            </a>
            <a
              href="#testimonials"
              onClick={() => setIsMenuOpen(false)}
              className="text-skinai-darkText font-medium hover:text-skinai-coral transition-colors"
            >
              Testimonios
            </a>
            <Button
              onClick={() => setIsMenuOpen(false)}
              className="bg-skinai-coral hover:bg-opacity-90 text-white w-full"
            >
              Descargar App
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
