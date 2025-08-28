const TestimonialsSection = () => {
  return <section className="py-32 md:py-48 bg-skinai-lightBg" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-skinai-darkText mb-4">
            Lo Que Dicen Nuestros Usuarios
          </h2>
          <p className="text-lg text-skinai-lightText max-w-2xl mx-auto">
            Descubre cómo Skin.AI está transformando la manera en que las personas cuidan su piel en Chile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 relative">
            <div className="absolute -top-4 -right-4 bg-skinai-coral text-white rounded-full w-8 h-8 flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.039 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
              </svg>
            </div>
            <p className="text-skinai-lightText mb-6">
              "Gracias a Skin.AI detecté un lunar sospechoso a tiempo. La app me recomendó visitar a un dermatólogo y 
              resultó ser un melanoma en etapa inicial. Literalmente me salvó la vida."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-skinai-coral/20 rounded-full flex items-center justify-center text-skinai-coral font-bold">
                CL
              </div>
              <div className="ml-3">
                <h4 className="font-semibold text-skinai-darkText">Carmen Gloria</h4>
                <p className="text-xs text-skinai-lightText">Santiago, Chile</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 relative">
            <div className="absolute -top-4 -right-4 bg-skinai-coral text-white rounded-full w-8 h-8 flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.039 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
              </svg>
            </div>
            <p className="text-skinai-lightText mb-6">
              "El escáner de productos me ha ayudado muchísimo. Descubrí que varios productos que usaba tenían ingredientes 
              que empeoraban mi rosácea. Ahora mi piel está mucho más saludable gracias a estas recomendaciones."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-skinai-blue/20 rounded-full flex items-center justify-center text-skinai-blue font-bold">
                JM
              </div>
              <div className="ml-3">
                <h4 className="font-semibold text-skinai-darkText">Juan Arriagada</h4>
                <p className="text-xs text-skinai-lightText">Concepción, Chile</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 relative">
            <div className="absolute -top-4 -right-4 bg-skinai-coral text-white rounded-full w-8 h-8 flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.039 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
              </svg>
            </div>
            <p className="text-skinai-lightText mb-6">
              "Vivo en Puerto Williams y no tenemos dermatólogos. Skin.AI me ayudó a identificar un brote de dermatitis y 
              me recomendó productos que pude comprar directamente desde la app. Una solución completa."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-skinai-teal/20 rounded-full flex items-center justify-center text-skinai-teal font-bold">
                GV
              </div>
              <div className="ml-3">
                <h4 className="font-semibold text-skinai-darkText">Gabriela Vásquez</h4>
                <p className="text-xs text-skinai-lightText">Puerto Williams, Chile</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>;
};
export default TestimonialsSection;