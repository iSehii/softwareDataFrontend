import { useState } from "react";
import { Link } from 'react-router-dom'
function Dashboard(){

    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <div className="bg-gray-900 text-white min-h-screen p-6">
      {/* Navbar */}
      <nav className="flex justify-between items-center pb-6 border-b border-gray-700 relative">
        <div className="text-2xl font-bold text-emerald-400">SoftwareData</div>
        <div className="flex space-x-6 items-center">
          <input className="px-4 py-2 bg-gray-800 rounded"  placeholder="🔎Search..." />
          <button className="p-2 bg-gray-800 rounded">🔔</button>
          <button className="p-2 bg-gray-800 rounded">🧑🏻‍💻</button>
          
          {/* Hamburger Menu */}
          <div className="relative">
            <button 
              className="p-2 bg-gray-800 rounded" 
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded shadow-lg">
                <ul className="py-2 text-white">
                  <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Ver Perfil</li>
                  <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Modificar Datos</li>
                  <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Salir</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
      
      
      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        {/* Sidebar */}
        <div className="bg-gray-800 p-4 rounded-lg col-span-1">
          <ul className="space-y-4">
            <li className="text-emerald-400">📌 Dashboard</li>

            <li>
              {/* El Link se usa para poder moverse de pagina */}
              <Link
              to="/ResultPage"
              >
              📊 Reportes
              </Link>
              </li>

            <li>
              <Link
              to="/ResultPage"
              >
              🗃 Archivos
              </Link>
            </li>

            <li>
              <Link
              to="/PicturePage"
              >
               📷 Imagen
              </Link>
            </li>

            <li>
              <Link
              to="/AltaPage"
              >
              🧑🏻‍💻 Alta Usuario
              </Link>
            </li>

            <li>
              <Link
              to="">
              ⚙️ Configuraciones
              </Link>
            </li>

          </ul>
        </div>
        
        {/* Dashboard Content */}
        <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-emerald-400">%</p>
            <p>Performance</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-emerald-400">%</p>
            <p>Progreso</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-emerald-400">.</p>
            <p>Datos</p>
          </div>
          
          {/* Charts */}
          <div className="bg-gray-800 p-6 rounded-lg col-span-2">
            <p className="text-emerald-400">Estadisticas</p>
            <div className="h-32 bg-gray-700 mt-4 rounded"></div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <p className="text-emerald-400">Tendencia</p>
            <div className="h-32 bg-gray-700 mt-4 rounded"></div>
          </div>
        </div>
      </div>
    </div>
    )
}
export default Dashboard;
