
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <Button className="bg-skinai-coral hover:bg-opacity-90 text-white cta-button">
            Descargar App
          </Button>
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
