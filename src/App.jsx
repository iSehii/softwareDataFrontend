import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './Pages/LoginPage';
import Dashboard from './Pages/Dashboard';
import RolesPage from './Pages/RolesPage';
import AltaPage from './Pages/AltaPage';
import SeveridadesPage from './Pages/SeveridadesPage';
import ReportesPage from './Pages/ReportesPage';
import SeveridadForm from './components/severidad/SeveridadForm';
import ReporteForm from './components/reporte/reporteForm';
import PrioridadesPage from './Pages/PrioridadesPage';
import PrioridadForm from './components/prioridad/PrioridadForm';
import ProtectedRoute from './ProtectedRoute';
import RolForm from './components/rol/RolForm';
import RolView from './components/rol/RolView';
import UsuarioView from './components/usuario/UsuarioView';
import SeveridadView from './components/severidad/SeveridadView';
import ReporteView from './components/reporte/ReporteView';
import CarroceriasView from './components/carroceria/CarroceriaView';
import PrioridadView from './components/prioridad/PrioridadView';
import UsuarioForm from './components/usuario/UsuarioForm';
import CarroceriasForm from './components/carroceria/CarroceriaForm';
import UsuariosPage from './Pages/UsuariosPage';
import CarroceriasPage from './Pages/CarroceriasPage';
import DiccionarioPage from './Pages/DiccionarioPage';
import LandingPage from './Pages/LandingPage';

function App() {
  return (     
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/diccionario' element={<DiccionarioPage />} />
          <Route path='/Login' element={<LoginPage />} />
          <Route path='/Landing' element={<LandingPage />} />

          {/* RUTAS PROTEGIDAS */}
          <Route element={<ProtectedRoute />}>
            <Route path='/Alta' element={<AltaPage />} />
            <Route path='/' element={<Dashboard />} />
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path="/roles" element={<RolesPage />} />
            <Route path="/roles/nuevo" element={<RolForm />} />
            <Route path="/roles/editar/:id" element={<RolForm />} />
            <Route path="/roles/ver/:id" element={<RolView />} />
            <Route path="/usuarios" element={<UsuariosPage />} />
            <Route path="/usuarios/nuevo" element={<UsuarioForm />} />
            <Route path="/usuarios/editar/:id" element={<UsuarioForm />} />
            <Route path="/usuarios/ver/:id" element={<UsuarioView />} />
            <Route path="/severidades" element={<SeveridadesPage />} />
            <Route path="/severidades/nuevo" element={<SeveridadForm />} />
            <Route path="/severidades/editar/:id" element={<SeveridadForm />} />
            <Route path="/severidades/ver/:id" element={<SeveridadView />} />
            <Route path="/reportes" element={<ReportesPage />} />
            <Route path="/reportes/nuevo" element={<ReporteForm />} />
            <Route path="/reportes/editar/:id" element={<ReporteForm />} />
            <Route path="/reportes/ver/:id" element={<ReporteView />} />
            <Route path="/carrocerias" element={<CarroceriasPage />} />
            <Route path="/carrocerias/nuevo" element={<CarroceriasForm />} />
            <Route path="/carrocerias/editar/:id" element={<CarroceriasForm />} />
            <Route path="/carrocerias/ver/:id" element={<CarroceriasView />} />
            <Route path="/prioridades" element={<PrioridadesPage />} />
            <Route path="/prioridades/nuevo" element={<PrioridadForm />} />
            <Route path="/prioridades/editar/:id" element={<PrioridadForm />} />
            <Route path="/prioridades/ver/:id" element={<PrioridadView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider> 
  );
}

export default App;
