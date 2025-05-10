
const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-skinai-blue/10" id="how-it-works">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-skinai-darkText mb-4">
            ¿Cómo Funciona Skin.AI?
          </h2>
          <p className="text-lg text-skinai-lightText max-w-2xl mx-auto">
            Un proceso simple que te permite cuidar tu piel con conocimiento profesional
            desde la comodidad de tu hogar.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line (visible on md screens and above) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-skinai-coral/30 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative z-10">
              <div className="bg-white rounded-xl shadow-md p-8 text-center h-full">
                <div className="w-16 h-16 bg-skinai-coral text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold text-skinai-darkText mb-4">Escanea</h3>
                <p className="text-skinai-lightText">
                  Toma una foto de tu piel o escanea el código de barras de tu producto 
                  dermocosmético usando la cámara de tu teléfono.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative z-10">
              <div className="bg-white rounded-xl shadow-md p-8 text-center h-full">
                <div className="w-16 h-16 bg-skinai-coral text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold text-skinai-darkText mb-4">Analiza</h3>
                <p className="text-skinai-lightText">
                  Nuestra tecnología de IA procesa la imagen y ofrece resultados inmediatos 
                  sobre posibles condiciones o la composición del producto.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative z-10">
              <div className="bg-white rounded-xl shadow-md p-8 text-center h-full">
                <div className="w-16 h-16 bg-skinai-coral text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-xl font-bold text-skinai-darkText mb-4">Actúa</h3>
                <p className="text-skinai-lightText">
                  Recibe recomendaciones personalizadas, accede a productos adecuados 
                  o conecta con especialistas según la gravedad de tu caso.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-skinai-lightText italic">
            "Skin.AI está diseñado como una herramienta informativa. Para condiciones que requieran 
            atención médica, siempre te recomendaremos consultar con un dermatólogo profesional."
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
