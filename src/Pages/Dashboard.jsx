import { useState } from "react";
import { Link } from 'react-router-dom';
import Layout from '../components/layout/layout.jsx';
function Dashboard(){

    const [menuOpen, setMenuOpen] = useState(false);
    return(
      <Layout>
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
      </Layout>
    )
}
export default Dashboard;
