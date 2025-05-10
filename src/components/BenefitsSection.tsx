
import { Button } from "@/components/ui/button";

const BenefitsSection = () => {
  return (
    <section className="py-16 md:py-24" id="benefits">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Benefits Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-skinai-darkText mb-4">
                Beneficios de Usar Skin.AI
              </h2>
              <p className="text-lg text-skinai-lightText">
                Nuestra aplicación revoluciona la manera en que cuidas tu piel, 
                ofreciendo ventajas que combinan tecnología avanzada con experiencia dermatológica.
              </p>
            </div>

            <div className="space-y-6">
              {/* Benefit 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-skinai-coral/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-skinai-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-skinai-darkText mb-1">Acceso Rápido y Conveniente</h3>
                  <p className="text-skinai-lightText">
                    Evalúa tu piel desde casa en cualquier momento, sin esperas ni desplazamientos.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-skinai-blue/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-skinai-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-skinai-darkText mb-1">Detección Temprana</h3>
                  <p className="text-skinai-lightText">
                    Identifica posibles problemas dermatológicos en etapas iniciales, cuando el tratamiento es más efectivo.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-skinai-teal/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-skinai-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-skinai-darkText mb-1">Información Transparente</h3>
                  <p className="text-skinai-lightText">
                    Conoce exactamente qué contienen tus productos y cómo afectan a tu tipo específico de piel.
                  </p>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-skinai-coral/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-skinai-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-skinai-darkText mb-1">Cuidado Personalizado</h3>
                  <p className="text-skinai-lightText">
                    Recomendaciones adaptadas a tu tipo de piel, tono y necesidades específicas.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Button className="bg-skinai-coral hover:bg-opacity-90 text-white px-8 py-6 text-lg cta-button">
                Descargar Ahora
              </Button>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold text-skinai-darkText mb-6">
              ¿Por Qué Elegir Skin.AI?
            </h2>

            <div className="space-y-6">
              {/* Differentiator 1 */}
              <div className="border-l-4 border-skinai-coral pl-4 py-2">
                <h3 className="text-lg font-semibold text-skinai-darkText mb-1">
                  Enfoque en Pieles Latinas
                </h3>
                <p className="text-skinai-lightText">
                  Nuestra IA está especialmente entrenada para reconocer condiciones en pieles latinas y chilenas, 
                  a diferencia de otras soluciones internacionales.
                </p>
              </div>

              {/* Differentiator 2 */}
              <div className="border-l-4 border-skinai-blue pl-4 py-2">
                <h3 className="text-lg font-semibold text-skinai-darkText mb-1">
                  Solución Integral
                </h3>
                <p className="text-skinai-lightText">
                  Combinamos detección, análisis de productos y acceso a tratamientos en una sola plataforma, 
                  ofreciendo un enfoque holístico para el cuidado de tu piel.
                </p>
              </div>

              {/* Differentiator 3 */}
              <div className="border-l-4 border-skinai-teal pl-4 py-2">
                <h3 className="text-lg font-semibold text-skinai-darkText mb-1">
                  Tecnología Avanzada
                </h3>
                <p className="text-skinai-lightText">
                  Respaldados por dermatólogos profesionales y algoritmos de IA de última generación 
                  que mejoran continuamente con cada escaneo.
                </p>
              </div>

              {/* Premium Teaser */}
              <div className="mt-8 bg-gradient-to-r from-skinai-coral/20 to-skinai-blue/20 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-skinai-darkText mb-2">
                  Versión Premium
                </h3>
                <p className="text-skinai-lightText mb-2">
                  Accede a análisis más detallados, seguimiento de condiciones, consultas con especialistas 
                  vía telemedicina y más funcionalidades avanzadas.
                </p>
                <p className="text-skinai-coral font-medium">
                  Descubre todas las ventajas dentro de la app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
