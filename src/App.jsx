import {BrowserRouter, Routes, Route, Form } from 'react-router-dom'
import {AuthProvider} from './context/AuthContext'
import LoginPage from './Pages/LoginPage' ;
import Dashboard from './Pages/Dashboard';
import PicturePage from './Pages/PicturePage';
import ResultPage from './Pages/ResultPage';
import AltaPage from './Pages/AltaPage';

import ProtectedRoute from './ProtectedRoute'

function App() {
  return (     
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Home page</h1>} />
          <Route path='/LoginPage' element={<LoginPage/>} />
          <Route path='/AltaPage' element={<AltaPage/>}/>

          <Route element={<ProtectedRoute/>}>
            <Route path='/Dashboard' element={<Dashboard/>} />
            <Route path='/PicturePage' element={<PicturePage/>} />
            <Route path='/ResultPage' element={<ResultPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider> 
        
  );
}

export default App;
