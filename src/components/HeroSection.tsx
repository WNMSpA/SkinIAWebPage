import { useState } from "react";
import { Button } from "@/components/ui/button";
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

const HeroSection = () => {
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
    <section className="py-32 md:py-52 overflow-hidden relative"  style={{ color: "var(--skinai-dark)" }}>
      <div className="absolute inset-0 bg-gradient-to-r from-skinai-blue/20 to-skinai-coral/20 -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

          {/* Text Content */}
          <div className="md:col-span-7 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight" style={{ color: "var(--skinai-rose)" , fontFamily: "var(--font-primary)" }}>
              Democratiza tu salud dermatológica con SkinAI
            </h1>
            <p className="text-lg md:text-xl text-skinai-lightText mb-8 max-w-2xl" style={{ color: "var(--skinai-darkText)" , fontFamily: "var(--font-secondary)" }}>
              Una aplicación inteligente que te permite evaluar tu piel, entender tus productos dermocosméticos y acceder a soluciones personalizadas, todo desde tu celular.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
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
              <a href="#how-it-works" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="border-skinai-coral text-skinai-darkText hover:bg-skinai-coral/10 px-8 py-6 text-lg w-full"
                >
                  Saber Más
                </Button>
              </a>

            </div>

            {/* App Store Badges */}
            <div className="mt-8 flex flex-wrap gap-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="Download on App Store"
                className="h-10 w-auto"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-10 w-auto"
              />
            </div>
          </div>

          {/* Hero Image */}
          <div className="md:col-span-5 animate-scale-in">
            <div className="relative">
              <div className="app-screenshot mx-auto max-w-xs">
                <img
                  src="image1.jpg"
                  alt="Skin.AI App Demo - Senior using skin scanning feature"
                  className="w-full h-auto"
                />
                <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-skinai-coral rounded-full p-2 shadow-lg">
                  <div className="text-white text-xs font-bold">IA</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
