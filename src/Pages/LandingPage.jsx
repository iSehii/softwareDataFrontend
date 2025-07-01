import imagenLogo from '../assets/Imagen.png';
import ia from '../assets/ia1.jpg';
import ia2 from '../assets/ia2.jpg';
import ia3 from '../assets/ia3.jpg';
import { useNavigate } from 'react-router-dom';
import { Eye, Zap, Target, CheckCircle } from "lucide-react";
function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-black to-gray-900 pt-12 pb-16 text-center">
        <div className="container mx-auto px-6">
          <img
            src={imagenLogo}
            alt="Logo Lumet"
            className="w-100 h-100 mx-auto mb-4 drop-shadow-xl animate-pulse rounded-2xl"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-2 leading-tight">Bienvenido a</h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-500 italic mb-4">Lumet Inspection</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Revoluciona el control de calidad automotriz con inteligencia artificial
          </p>
        </div>
      </section>
      {/* Problema planteado */}
      <section className="bg-gray-950 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 leading-tight">
            ¿Tu planta automotriz enfrenta desafíos en la detección precisa de imperfecciones en pintura?
          </h3>
          <p className="text-xl text-gray-400 mb-8">
            Nuestro sistema inteligente de inspección transforma el proceso tradicional.
          </p>
        </div>
      </section>
      {/* Características / Ventajas */}
      <section className="bg-black py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Visión por Computadora", desc: "Alta precisión en análisis visual", icono: <Eye className="w-10 h-10 text-blue-500" /> },
            { title: "IA de Última Generación", desc: "Entrenada para identificar imperfecciones", icono: <Zap className="w-10 h-10 text-blue-500" /> },
            { title: "Cámaras Estratégicas", desc: "Ubicación estratégica con iluminación controlada", icono: <Target className="w-10 h-10 text-blue-500" /> },
            { title: "Detección en Tiempo Real", desc: "Más precisa que métodos manuales", icono: <CheckCircle className="w-10 h-10 text-blue-500" /> }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 hover:bg-gray-800 transition duration-300 p-6 text-center rounded-xl shadow-md"
            >
              <div className="mb-3 flex justify-center">
                {item.icono}
              </div>
              <h4 className="font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Lista de beneficios */}
      <section className="bg-gray-950 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8">Ventajas de Nuestro Sistema</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Visión por computadora de alta precisión",
              "IA de última generación entrenada para identificar imperfecciones",
              "Cámaras estratégicamente ubicadas con iluminación controlada",
              "Detección en tiempo real, más precisa que métodos manuales"
            ].map((text, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-blue-500 rounded-full mt-1 flex-shrink-0" />
                <p className="text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Galería de imágenes */}
      <section className="bg-black py-12 px-6">
        <div className="flex flex-wrap justify-center gap-x-25 gap-y-10">
          <img
            src={ia2}
            alt="Inspección Visual"
            className="w-80 h-80 object-cover rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300"
            title='Analiza la imagen'
          />
          <img
            src={ia3}
            alt="Inspección Automotriz"
            className="w-80 h-80 object-cover rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300"
            title='Ubica la inperfeccion'
          />
          <img
            src={ia}
            alt="Sistema IA"
            className="w-80 h-80 object-cover rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300"
            title='Genera reporte'
          />
        </div>
      </section>
      {/* Llamado a la acción */}
      <section className="bg-gray-950 py-14 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">¿Listo para Transformar tu Control de Calidad?</h3>
          <p className="text-lg text-gray-400 mb-6">
            Únete al futuro de la inspección automotriz con nuestra solución impulsada por IA.
          </p>
          <button
            onClick={() => navigate('/Login')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full transition duration-300 shadow-lg text-lg"
          >
            Comenzar Ahora
          </button>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 py-6 px-6 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Lumet Inspection. Todos los derechos reservados.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Desarrollado por <a href="https://67ae33c7a3854.site123.me/" className="text-blue-500 hover:underline">Software Data</a>
        </p>
      </footer>
    </div>
  );
}

export default LandingPage;
