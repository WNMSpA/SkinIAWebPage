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
import './responsive.css'

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
    <header
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-md py-4 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="Logo-SkinAi-sinFondo.png"
            alt="Skin.AI Logo"
            className="h-12 w-auto navbar-logo-full"
          />
          <img
            src="Logo-SkinAi-sinFondo-simbolo.png"
            alt="Skin.AI Logo"
            className="h-12 w-auto navbar-logo-icon"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="navbar-links space-x-8">
          <a
            href="#features"
            className="group relative font-medium transition-colors"
            style={{ color: "var(--skinai-dark)" }}
          >
            Características
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#bb9c87] to-[#d5ad95] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#how-it-works"
            className="group relative text-skinai-darkText font-medium transition-colors"
            style={{ color: "var(--skinai-dark)" }}
          >
            Cómo Funciona
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#bb9c87] to-[#d5ad95] transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a href="#benefits" className="group relative text-skinai-darkText font-medium transition-colors" style={{ color: "var(--skinai-dark)" }}>
            Beneficios
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#bb9c87] to-[#d5ad95] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#testimonials" className="group relative text-skinai-darkText font-medium transition-colors" style={{ color: "var(--skinai-dark)" }}>
            Testimonios
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#bb9c87] to-[#d5ad95] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="navbar-download">
          <Dialog>
            <DialogTrigger asChild>
              <Button className=" hover:bg-opacity-90 text-white px-8 py-6 text-lg cta-button" style={{ backgroundColor: "var(--skinai-rose)" }}>
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
                  <Button onClick={handleSubmit} className="w-full  text-white" style={{ backgroundColor: "var(--skinai-rose)" }}>
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
        <div className="navbar-menu-button" >
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
        <div className="navbar-sidebar absolute top-16 left-0 right-0 bg-white z-50 shadow-md p-4" >
          <nav className="flex flex-col space-y-4">
            <a
              href="#features"
              onClick={() => setIsMenuOpen(false)}
              style={{ color: "var(--skinai-dark)" }}
              className="text-skinai-darkText font-medium transition-colors"
            >
              Características
            </a>
            <a
              href="#how-it-works"
              onClick={() => setIsMenuOpen(false)}
              style={{ color: "var(--skinai-dark)" }}
              className="text-skinai-darkText font-medium transition-colors"
            >
              Cómo Funciona
            </a>
            <a
              href="#benefits"
              onClick={() => setIsMenuOpen(false)}
              style={{ color: "var(--skinai-dark)" }}
              className="text-skinai-darkText font-medium transition-colors"
            >
              Beneficios
            </a>
            <a
              href="#testimonials"
              onClick={() => setIsMenuOpen(false)}
              style={{ color: "var(--skinai-dark)" }}
              className="text-skinai-darkText font-medium transition-colors"
            >
              Testimonios
            </a>
            <Dialog>
            <DialogTrigger asChild>
              <Button className=" hover:bg-opacity-90 text-white px-8 py-6 text-lg cta-button" style={{ backgroundColor: "var(--skinai-rose)" }}>
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
                  <Button onClick={handleSubmit} className="w-full  text-white" style={{ backgroundColor: "var(--skinai-rose)" }}>
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
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
