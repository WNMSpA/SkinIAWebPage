
import { Camera, Search, Users } from "lucide-react";

const FeaturesSection = () => {
  return (
    <div>
      {/* Problem Statement Section */}
      <section className="py-32 md:py-48 bg-skinai-lightBg" id="problem">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-skinai-darkText mb-4">
              El desafío del acceso a la dermatología en Chile
            </h2>
            <p className="text-lg text-skinai-lightText mb-8">
              En Chile, la espera para una consulta dermatológica puede superar los 
              <span className="font-semibold"> 255 días</span>. Muchas regiones tienen acceso limitado 
              a especialistas, mientras que el riesgo de cáncer de piel va en aumento.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-4xl font-bold text-skinai-coral mb-2">255+</div>
                <p className="text-skinai-darkText">días de espera para una consulta dermatológica</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-4xl font-bold text-skinai-coral mb-2">47%</div>
                <p className="text-skinai-darkText">de regiones con acceso limitado a especialistas</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-4xl font-bold text-skinai-coral mb-2">15%</div>
                <p className="text-skinai-darkText">aumento en casos de cáncer de piel en la última década</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 md:py-48" id="features">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-skinai-darkText mb-4">
              Nuestra Solución: Skin.AI
            </h2>
            <p className="text-lg text-skinai-lightText max-w-2xl mx-auto">
              Una plataforma integral que combina inteligencia artificial, 
              información transparente y acceso a productos de calidad para democratizar 
              la salud dermatológica en Chile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="feature-card bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="w-14 h-14 bg-skinai-coral/20 rounded-lg flex items-center justify-center mb-6">
                <Camera className="h-7 w-7 text-skinai-coral" />
              </div>
              <h3 className="text-xl font-bold text-skinai-darkText mb-3">
                Detección Inteligente
              </h3>
              <p className="text-skinai-lightText mb-4">
                Evalúa lunares o manchas con la cámara de tu teléfono. 
                Nuestra IA, adaptada a pieles latinas, te brinda información inicial sobre 
                posibles condiciones dermatológicas.
              </p>
              <p className="text-xs text-skinai-lightText italic">
                *Herramienta informativa, no reemplaza el diagnóstico médico profesional.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feature-card bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="w-14 h-14 bg-skinai-blue/20 rounded-lg flex items-center justify-center mb-6">
                <Search className="h-7 w-7 text-skinai-teal" />
              </div>
              <h3 className="text-xl font-bold text-skinai-darkText mb-3">
                Escáner de Productos
              </h3>
              <p className="text-skinai-lightText mb-4">
                Conoce los ingredientes de tus productos dermocosméticos y su clasificación.
                Identifica componentes nocivos o beneficiosos para tu tipo específico de piel.
              </p>
              <p className="text-skinai-lightText">
                Transparencia total para decisiones informadas.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="feature-card bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="w-14 h-14 bg-skinai-teal/20 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-skinai-blue" />
              </div>
              <h3 className="text-xl font-bold text-skinai-darkText mb-3">
                Marketplace Integrado
              </h3>
              <p className="text-skinai-lightText mb-4">
                Accede a productos dermocosméticos seleccionados y de calidad, compatibles con tu tipo de piel.
                Recomendaciones personalizadas y envío directo a tu hogar.
              </p>
              <p className="text-skinai-lightText">
                Cuidado integral desde la evaluación hasta el tratamiento.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesSection;
