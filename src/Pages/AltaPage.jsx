import { useEffect, useState } from "react";
import { FaTrash, FaEdit, FaPlus } from "react-icons/fa";
import { obtenerUsuarios } from "../api/Auth.js";
import Layout from '../components/layout/layout.jsx';

function AltaPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await obtenerUsuarios();
        if (Array.isArray(data)) setUsers(data);
        else setUsers([]);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
        setUsers([]);
      }
    };
    loadUsers();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto p-4">
        {/* Botón Agregar y Buscar */}
        <div className="flex justify-between items-center mb-4">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded flex items-center">
            <FaPlus className="mr-2" /> Agregar
          </button>
          <input
            type="text"
            placeholder="Buscar usuario..."
            className="border border-gray-300 px-4 py-2 rounded w-1/3"
          />
        </div>

        {/* Tabla de Usuarios */}
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-500 text-white">
                <th className="p-3">Usuario</th>
                <th className="p-3">Nombre</th>
                <th className="p-3">Correo</th>
                <th className="p-3">Clave</th>
                <th className="p-3">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b odd:bg-gray-100 even:bg-white"
                >
                  <td className="p-3">{user.username}</td>
                  <td className="p-3">{user.nombre || "-"}</td>
                  <td className="p-3">{user.correo || "-"}</td>
                  <td className="p-3">{user.clave || "-"}</td>
                  <td className="p-3 flex space-x-2">
                    <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded flex items-center">
                      <FaTrash className="mr-1" /> Borrar
                    </button>
                    <button className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 rounded flex items-center">
                      <FaEdit className="mr-1" /> Modificar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default AltaPage;