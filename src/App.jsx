import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './Pages/LoginPage';
import Dashboard from './Pages/Dashboard';
import PicturePage from './Pages/PicturePage';
import ResultPage from './Pages/ResultPage';
import AltaPage from './Pages/AltaPage';
import ReportPage from './Pages/ReportPage';
import ProtectedRoute from './ProtectedRoute';
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
            <Route path='/Reportes' element={<ReportPage />} />
            <Route path='/Picture' element={<PicturePage />} />
            <Route path='/Result' element={<ResultPage />} />
            <Route path="/usuarios" element={<UsuariosPage />} />
            <Route path="/carrocerias" element={<CarroceriasPage />} />
            <Route path="/usuarios/nuevo" element={<UsuarioForm />} />
            <Route path="/usuarios/editar/:id" element={<UsuarioForm />} />
            <Route path="/carrocerias/nuevo" element={<CarroceriasForm />} />
            <Route path="/carrocerias/editar/:id" element={<CarroceriasForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider> 
  );
}

export default App;
