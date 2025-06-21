import { useState } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../context/AuthContext';
import {
  ChartBar,
  FileText,
  Camera,
  UserPlus,
  Settings,
  X,
  Menu
} from 'lucide-react';

import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Overview', to: '/dashboard', icon: <ChartBar className="h-5 w-5" /> },
    { label: 'Reportes', to: '/reportes', icon: <FileText className="h-5 w-5" /> },
    { label: 'Usuarios', to: '/usuarios', icon: <UserPlus className="h-5 w-5" /> },
    { label: 'Severidades', to: '/severidades', icon: <Settings className="h-5 w-5" /> },
    { label: 'Prioridades', to: '/prioridades', icon: <Settings className="h-5 w-5" /> },
    { label: 'Carrocerías', to: '/carrocerias', icon: <Settings className="h-5 w-5" /> },
  ];

  return (
    <div>
      {/* Botón hamburguesa visible en móvil */}
      <div className="md:hidden p-2 bg-gray-900 text-white flex items-center justify-between">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        <span className="text-sm">Menú</span>
      </div>

      {/* Sidebar en escritorio */}
      <Card className="hidden md:block h-[calc(100vh-4rem)] w-full max-w-[12em] text-white bg-gray-800 p-2">
        <List>
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.to}
              className='flex w-full h-10 items-center px-2 rounded hover:bg-gray-700'
            >
              <ListItemPrefix>{item.icon}</ListItemPrefix>
              {item.label}
            </Link>
          ))}
          <button
            onClick={logout}
            className='flex w-full h-10 items-center px-2 text-red-400 hover:bg-red-700 hover:text-white rounded mt-2'
          >
            <ListItemPrefix><X className="h-5 w-5" /></ListItemPrefix>
            Cerrar sesión
          </button>
        </List>
      </Card>

      {/* Sidebar móvil desplegable */}
      {isOpen && (
        <Card className="md:hidden w-full bg-gray-800 text-white p-2">
          <List>
            {menuItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.to}
                className='flex w-full h-10 items-center px-2 rounded hover:bg-gray-700'
                onClick={() => setIsOpen(false)}
              >
                <ListItemPrefix>{item.icon}</ListItemPrefix>
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => {
                logout();
                setIsOpen(false);
              }}
              className='flex w-full h-10 px-2 text-red-400 hover:bg-red-700 hover:text-white rounded mt-2'
            >
              Cerrar sesión
              <ListItemPrefix><X className="h-5 w-5" /></ListItemPrefix>
            </button>
          </List>
        </Card>
      )}
    </div>
  );
}

export default Sidebar;