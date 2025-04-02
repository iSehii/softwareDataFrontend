import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function Navbar({ menuOpen, setMenuOpen }) {
  const { user } = useContext(AuthContext)
  return (
    <nav className="flex justify-between items-center pb-6 border-b border-gray-700 relative">
      <div className="text-2xl font-bold text-emerald-400">Software Data - <span className='text-white font-thin'>{user.nombre}</span></div>
      <div className="flex space-x-6 items-center">
        <input className="px-4 py-2 bg-gray-800 rounded" placeholder="🔎Search..." />
        <button className="p-2 bg-gray-800 rounded">🔔</button>
        <button className="p-2 bg-gray-800 rounded">🧑🏻‍💻</button>
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
  );
}

export default Navbar;