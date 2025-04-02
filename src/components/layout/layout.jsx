// src/components/layout/layout.js
import { useState } from "react";
import { Link } from 'react-router-dom';
import Navbar from './navbar.jsx.jsx';
import Sidebar from './sidebar.jsx';

function layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        <Sidebar />
        <div className="col-span-3">{children}</div>
      </div>
    </div>
  );
}

export default layout;