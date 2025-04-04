import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './Pages/LoginPage';
import Dashboard from './Pages/Dashboard';
import PicturePage from './Pages/PicturePage';
import ResultPage from './Pages/ResultPage';
import AltaPage from './Pages/AltaPage';
import ReportPage from './Pages/ReportPage';
import ProtectedRoute from './ProtectedRoute';
import UsuariosList from './components/UsuariosList';
import UsuarioForm from './components/UsuarioForm';

function App() {
  return (     
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/Login' element={<LoginPage />} />

          {/* RUTAS PROTEGIDAS */}
          <Route element={<ProtectedRoute />}>
            <Route path='/Alta' element={<AltaPage />} />
            <Route path='/' element={<Dashboard />} />
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/Reportes' element={<ReportPage />} />
            <Route path='/Picture' element={<PicturePage />} />
            <Route path='/Result' element={<ResultPage />} />
            <Route path="/usuarios" element={<UsuariosList />} />
            <Route path="/usuarios/nuevo" element={<UsuarioForm />} />
            <Route path="/usuarios/editar/:id" element={<UsuarioForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider> 
  );
}

export default App;
