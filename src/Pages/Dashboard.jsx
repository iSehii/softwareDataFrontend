import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from '../components/layout/layout.jsx';
import { reportesService, usuariosService, carroceriasService, severidadesService, imperfeccionesService, rolesService } from "../api/api";
import { FileText, Users, Car, AlertCircle, Plus, DnaIcon, ZapIcon } from "lucide-react";

function Dashboard() {
  const [stats, setStats] = useState({
    reportes: 0,
    usuarios: 0,
    carrocerias: 0,
    imperfecciones: 0,
    severidades: 0,
    roles: 0,
  });
  const [recentReportes, setRecentReportes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [reportesRes, usuariosRes, carroceriasRes, imperfeccionesRes, rolesRes, severidadesRes] = await Promise.all([
          reportesService.getAll(),
          usuariosService.getAll(),
          carroceriasService.getAll(),
          imperfeccionesService.getAll(),
          rolesService.getAll(),
          severidadesService.getAll(),
        ]);

        setStats({
          reportes: reportesRes.data.length,
          usuarios: usuariosRes.data.length,
          carrocerias: carroceriasRes.data.length,
          imperfecciones: imperfeccionesRes.data.length,
          roles: rolesRes.data.length,
          severidades: severidadesRes.data.length
        });

        const sortedReportes = [...reportesRes.data]
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 5);

        setRecentReportes(sortedReportes);
      } catch (error) {
        console.error("Error al cargar datos del dashboard:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const StatCard = ({ title, value, icon, color, linkTo }) => (
    <Link to={linkTo} className="bg-gray-800 p-4 rounded-lg">
      <div className="flex items-center">
        <div className={`p-3 rounded-full ${color} text-white mr-4`}>{icon}</div>
        <div>
          <p className="text-emerald-400">{title}</p>
          <p className="text-white text-2xl font-bold">{value}</p>
        </div>
      </div>
    </Link>
  );

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="Reportes"
          value={stats.reportes}
          icon={<FileText className="h-6 w-6" />}
          color="bg-blue-500"
          linkTo="/reportes"
        />
        <StatCard
          title="Severidades"
          value={stats.severidades}
          icon={<ZapIcon className="h-6 w-6" />}
          color="bg-blue-500"
          linkTo="/severidades"
        />
        <StatCard
          title="Usuarios"
          value={stats.usuarios}
          icon={<Users className="h-6 w-6" />}
          color="bg-emerald-500"
          linkTo="/usuarios"
        />
        <StatCard
          title="Carrocerías"
          value={stats.carrocerias}
          icon={<Car className="h-6 w-6" />}
          color="bg-amber-500"
          linkTo="/carrocerias"
        />
        <StatCard
          title="Imperfecciones"
          value={stats.imperfecciones}
          icon={<AlertCircle className="h-6 w-6" />}
          color="bg-red-500"
          linkTo="/imperfecciones"
        />
        <StatCard
          title="Roles"
          value={stats.roles}
          icon={<Plus className="h-6 w-6" />}
          color="bg-purple-500"
          linkTo="/roles"
        />
      </div>

      <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div className="bg-gray-800 p-6 rounded-lg col-span-2">
          <p className="text-emerald-400">Estadísticas</p>
          <div className="h-32 bg-gray-700 mt-4 rounded"></div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <p className="text-emerald-400">Tendencia</p>
          <div className="h-32 bg-gray-700 mt-4 rounded"></div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
