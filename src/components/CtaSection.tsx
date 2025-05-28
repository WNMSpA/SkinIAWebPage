import { useState } from "react";
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
import { Button } from "@/components/ui/button";

const CtaSection = () => {
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
    <section className="py-32 md:py-52">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-skinai-coral/20 to-skinai-blue/20 rounded-2xl p-8 md:p-12 lg:p-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-skinai-darkText mb-6">
              Comienza a cuidar tu piel de forma inteligente
            </h2>
            <p className="text-lg md:text-xl text-skinai-darkText mb-10">
              Descarga Skin.AI ahora y únete a miles de chilenos que están revolucionando la forma de cuidar su salud dermatológica.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <Button variant="outline" className="border-skinai-coral text-skinai-darkText hover:bg-skinai-coral/10 px-8 py-6 text-lg">
                Conocer Planes Premium
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                alt="Download on App Store" 
                className="h-12 w-auto"
              />
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Get it on Google Play" 
                className="h-12 w-auto"
              />
            </div>
            
            <div className="mt-8 text-skinai-lightText">
              Disponible para iOS y Android
            </div>
            
            <div className="flex justify-center mt-10 gap-8">
              <div className="flex items-center">
                <div className="mr-2 text-xl font-bold text-skinai-coral">4.8</div>
                <div className="flex text-skinai-coral">
                  ★★★★★
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-2 font-semibold text-skinai-darkText">10,000+</div>
                <div className="text-skinai-lightText">descargas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
