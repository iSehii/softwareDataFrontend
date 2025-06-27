import imagenLogo from '../assets/Imagen.png'; 
import ia from '../assets/ia1.jpg';
import ia2 from '../assets/ia2.jpg';
import { useNavigate } from 'react-router-dom';
function LandingPage() {
    const navigate = useNavigate();
  return (
    <div className="relative min-h-screen w-full bg-gray-900 fill-transparent overflow-hidden">
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-4 text-white">Bienvenido a:</h1>
            <h2 className="text-2xl font-semibold mb-4 text-white">Lumet Inspection</h2>
            <div className="flex justify-center">
                <img src={imagenLogo} alt="Logo" className="w-70 h-70 " />
            </div>
            <p className="text-lg mb-8 text-white">¡Revoluciona el control de calidad automotriz con inteligencia artificial!</p>
        </div>
        <hr className='border-t border-white-700 my-8' />
        <div className="flex flex-col items-center justify-center">
            <h3 className="text-lg mb-8 text-white">¿Tu planta automotriz enfrenta desafíos en la detección precisa de imperfecciones en pintura? </h3>
            <p className="text-lg mb-8 text-white">Nuestro sistema inteligente de inspección ha sido diseñado para transformar ese proceso. A través de visión por computadora, </p>
            <p className="text-lg mb-8 text-white">IA de última generación y cámaras estratégicamente ubicadas con iluminación controlada, </p>
            <p className="text-lg mb-8 text-white">detectamos defectos en tiempo real con una precisión superior a los métodos tradicionales.</p>
            <div className="flex flex-row justify-center items-center gap-8 mt-6">
                <img src={ia} alt="ia1" className="w-72 h-72 object-contain" />
                <img src={ia2} alt="ia2" className="w-72 h-72 object-contain" />
            </div>
            <br />
            <button 
                onClick={() => navigate('/Login')}
                className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Iniciar Sesión
            </button>
        </div>
    </div>
  );
}
export default LandingPage;