import { Link } from 'react-router-dom';
import { logout } from '../../context/AuthContext';
import { ChartBar, FileText, Camera, UserPlus, Settings, X } from 'lucide-react';
    import {
      Card,
      Typography,
      List,
      ListItem,
      ListItemPrefix,
      ListItemSuffix,
      Chip,
    } from "@material-tailwind/react";
    import {
      PresentationChartBarIcon,
      ShoppingBagIcon,
      UserCircleIcon,
      Cog6ToothIcon,
      InboxIcon,
      PowerIcon,
    } from "@heroicons/react/24/solid";
     
    export function Sidebar() {
      return (
        <Card className="h-[calc(100vh-9rem)] w-full max-w-[12em] text-white bg-gray-800 p-2 shadow-xl shadow-blue-gray-900/5">
          <List>
            <Link className='flex w-full p-[0] h-10 content-center items-center' to={"/dashboard"}>
              <ListItemPrefix className='text-left flex flex-start justify-start'>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              Overview
            </Link>
            <Link className='flex w-full p-[0] h-10 content-center items-center' to={"/reportes"}>
              <ListItemPrefix className='text-left flex flex-start justify-start'>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              Reportes
            </Link>
            <Link className='flex w-full p-[0] h-10 content-center items-center' to={"/usuarios"}>
              <ListItemPrefix className='text-left flex flex-start justify-start'>
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              Usuarios
            </Link>
            <Link className='flex w-full p-[0] h-10 content-center items-center' to={"/severidades"}>
              <ListItemPrefix className='text-left flex flex-start justify-start'>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Severidades
            </Link>
            <Link className='flex w-full p-[0] h-10 content-center items-center' to={"/prioridades"}>
              <ListItemPrefix className='text-left flex flex-start justify-start'>
                <Cog6ToothIcon className="h-5 w-5" />
              </ListItemPrefix>
              Prioridades
            </Link>
            <Link className='flex w-full p-[0] h-10 content-center items-center' to={"/carrocerias"}>
              <ListItemPrefix className='text-left flex flex-start justify-start'>
                <Cog6ToothIcon className="h-5 w-5" />
              </ListItemPrefix>
              Carrocerías
            </Link>
            <Link onClick={logout}  className='flex w-full p-[0] h-10 content-center items-center'>
              <ListItemPrefix className='text-left flex flex-start justify-start'>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              Cerrar sesión
            </Link>
          </List>
        </Card>
      );
    }
    // <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
    //   <ul className="space-y-4">
    //     <li>
    //       <Link to="/dashboard" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
    //         <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 4l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1H9m2 6a9 9 0 11-18 0 9 9 0 011 18z" />
    //         </svg>
    //         <span>Overview</span>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="/" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
    //         <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14m0 0a2 2 0 01-2-2h2a2 2 0 01-2 2m0 0v-6a2 2 0 012-2h2a2 2 0 012 2v6" />
    //         </svg>
    //         <span>Reportes</span>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="/usuarios" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
    //         <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h18M3 16h18" />
    //         </svg>
    //         <span>Usuarios</span>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="/Picture" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
    //         <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h1.89a2 2 0 01.894.745L15.23 4h2.77a2 2 0 01.74 1.453l-2 16a2 2 0 01-.365.682m-2.65-2.65l.02.02a2.26 2.26 0 00.01.01L3 9zm0 6a2 2 0 012-2h1.89a2 2 0 01.894.745L15.23 13h2.77a2 2 0 01.74 1.453l-2 16a2 2 0 01-.365.682m-2.65-2.65l.02.02a2.26 2.26 0 00.01.01L3 15zm11.23-1.19L9 19v-2a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 001.66-.32l.61-.13a2 2 0 01.74-1.53M12 9v2m0 4h.01" />
    //         </svg>
    //         <span>Imagen</span>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="/Alta" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
    //         <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v12H6V9M4 6h16v14H4V6z" />
    //         </svg>
    //         <span>Alta Usuario</span>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="/reportes" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
    //         <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065c.426-1.756.426-3.35 0-3.35a1.724 1.724 0 00-1.066-2.572A1.724 1.724 0 003 3.3c0 .426.426 1.756.426 3.35A1.724 1.724 0 103.3 21.573a1.724 1.724 0 00-2.572 1.065c-.426 1.756-.426 3.35 0 3.35a1.724 1.724 0 001.066 2.572c1.543.94 3.31-.826 2.37-2.37z" />
    //         </svg>
    //         <span>Reportes</span>
    //       </Link>
    //     </li>
    //     <li>
    //       <button 
    //         onClick={logout}
    //         className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-red-500 hover:text-red-100"
    //       >
    //         <svg className="h-5 w-5 text-red-500 hover:text-red-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0H7m0 0l-4 4m4-4v16" />
    //         </svg>
    //         <span>Cerrar sesión</span>
    //       </button>
    //     </li>
    //   </ul>
    // </div>
//   );
// }

export default Sidebar;