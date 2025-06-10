import { useState, useEffect, useRef } from "react";
import imagenLogo from '../assets/Imagen.png'; 


export default function DiccionarioPage() {

    let fechaActual = new Date().toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
  
    // Cerrar dropdown si se hace click fuera
    useEffect(() => {
      function handleClickOutside(event) {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target)
        ) {
          setOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  

  return (
    <div className="bg-gray-900 min-h-screen text-white py-6">
      <div className="container m-auto bg-gray-800 shadow-lg my-6 rounded-lg p-8">
        <div className="max-w-4xl mx-auto p-8 text-center">
          <div className="mx-auto w-48 h-48 mb-6 rounded-lg overflow-hidden shadow-lg bg-indigo-100 flex items-center justify-center">
          <img
            src={imagenLogo}
            alt="Lumet Inspection Logo"
            className="mx-auto w-48 h-48 object-cover rounded-lg shadow-lg"
          /></div>




          <h1 className="text-5xl font-extrabold text-gray-50 mb-2">
            Lumet Inspection
          </h1>
          <h2 className="text-3xl font-semibold text-indigo-400 mb-1">
            Diccionario de la base de datos.
          </h2>
          <p>
            <em className="text-gray-500 text-sm">{ fechaActual }</em>
          </p>

          {/* Dropdown */}
          <div className="max-w-md mx-auto relative mt-8" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              aria-haspopup="true"
              aria-expanded={open}
              className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-md shadow-md flex justify-between items-center px-4 hover:bg-indigo-700 transition"
            >
              Ir a la tabla
              <svg
                className={`w-5 h-5 ml-2 transform transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            <ul
              className={`absolute left-0 right-0 mt-1 bg-gray-800 border border-gray-900 rounded-md shadow-lg max-h-60 overflow-auto z-10 ${
                open ? "" : "hidden"
              }`}
            >
              <li>
                <a
                  href="#carrocerias"
                  className="block px-4 py-2 hover:bg-indigo-600 hover:text-white transition"
                  onClick={() => setOpen(false)}
                >
                  carrocerias
                </a>
              </li>
              <li>
                <a
                  href="#imperfecciones"
                  className="block px-4 py-2 hover:bg-indigo-600 hover:text-white transition"
                  onClick={() => setOpen(false)}
                >
                  imperfecciones
                </a>
              </li>
              <li>
                <a
                  href="#imperfecciones_carrocerias"
                  className="block px-4 py-2 hover:bg-indigo-600 hover:text-white transition"
                  onClick={() => setOpen(false)}
                >
                  imperfecciones_carrocerias
                </a>
              </li>
              <li>
                <a
                  href="#prioridades"
                  className="block px-4 py-2 hover:bg-indigo-600 hover:text-white transition"
                  onClick={() => setOpen(false)}
                >
                  prioridades
                </a>
              </li>
              <li>
                <a
                  href="#reportes"
                  className="block px-4 py-2 hover:bg-indigo-600 hover:text-white transition"
                  onClick={() => setOpen(false)}
                >
                  reportes
                </a>
              </li>
              <li>
                <a
                  href="#roles"
                  className="block px-4 py-2 hover:bg-indigo-600 hover:text-white transition"
                  onClick={() => setOpen(false)}
                >
                  Roles
                </a>
              </li>
              <li>
                <a
                  href="#severidades"
                  className="block px-4 py-2 hover:bg-indigo-600 hover:text-white transition"
                  onClick={() => setOpen(false)}
                >
                  Severidades
                </a>
              </li>
              <li>
                <a
                  href="#usuarios"
                  className="block px-4 py-2 hover:bg-indigo-600 hover:text-white transition"
                  onClick={() => setOpen(false)}
                >
                  usuarios
                </a>
              </li>
            </ul>
          </div>
        </div>
        <table id='carrocerias' className="min-w-full border-collapse border border-gray-900 shadow-md mx-auto mt-8">
  <caption className="text-lg font-semibold text-gray-50 pt-2 pb-2 caption-top bg-blue-950">
    Carrocerias
  </caption>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200"><td colspan='11'></td></tr>
  <thead className="bg-blue-950 text-white">
    <tr className="bg-black">
      <th className="border border-gray-300 px-4 py-2 text-left">Nombre de la columna</th>
      <th className="border border-gray-300 px-4 py-2 text-left">Tipo de dato</th>
      <th className="border border-gray-300 px-2 py-2" title="Primary Key">
        <abbr className="cursor-help" title="Primary Key">
          PK
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Not Null">
        <abbr className="cursor-help" title="Not Null">
          NN
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Unique">
        <abbr className="cursor-help" title="Unique">
          UQ
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Binary">
        <abbr className="cursor-help" title="Binary">
          BIN
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Unsigned">
        <abbr className="cursor-help" title="Unsigned">
          UN
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Zero Fill">
        <abbr className="cursor-help" title="Zero Fill">
          ZF
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Auto Increment">
        <abbr className="cursor-help" title="Auto Increment">
          AI
        </abbr>
      </th>
      <th className="border border-gray-300 px-4 py-2 text-left">Default</th>
      <th className="border border-gray-300 px-4 py-2 text-left">Comment</th>
    </tr>
  </thead>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">id</td>
            <td className="border border-gray-300 px-4 py-2">INT</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">no_parte</td>
            <td className="border border-gray-300 px-4 py-2">INT</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 attr">&nbsp;</td>
            <td className="border border-gray-300 px-4 py-2">NULL</td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">color</td>
            <td className="border border-gray-300 px-4 py-2">VARCHAR(45)</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 attr">&nbsp;</td>
            <td className="border border-gray-300 px-4 py-2">NULL</td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">panel</td>
            <td className="border border-gray-300 px-4 py-2">VARCHAR(45)</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 attr">&nbsp;</td>
            <td className="border border-gray-300 px-4 py-2">NULL</td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">descripcion</td>
            <td className="border border-gray-300 px-4 py-2">VARCHAR(45)</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 attr">&nbsp;</td>
            <td className="border border-gray-300 px-4 py-2">NULL</td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">lote</td>
            <td className="border border-gray-300 px-4 py-2">VARCHAR(45)</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 attr">&nbsp;</td>
            <td className="border border-gray-300 px-4 py-2">NULL</td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">estado</td>
            <td className="border border-gray-300 px-4 py-2">INT</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 attr">&nbsp;</td>
            <td className="border border-gray-300 px-4 py-2">NULL</td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">id_usuario</td>
            <td className="border border-gray-300 px-4 py-2">INT</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 attr">&nbsp;</td>
            <td className="border border-gray-300 px-4 py-2">NULL</td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">createdAt</td>
            <td className="border border-gray-300 px-4 py-2">DATETIME</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 attr">&nbsp;</td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">updatedAt</td>
            <td className="border border-gray-300 px-4 py-2">DATETIME</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 attr">&nbsp;</td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        </table>
        <table id='imperfecciones' className="min-w-full border-collapse border border-gray-900 shadow-md mx-auto mt-8">
  <caption className="text-lg font-semibold text-gray-50 pt-2 pb-2 caption-top bg-blue-950">
    Imperfecciones
  </caption>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200"><td colspan='11'></td></tr>
  <thead className="bg-blue-950 text-white">
    <tr className="bg-black">
      <th className="border border-gray-300 px-4 py-2 text-left">Nombre de la columna</th>
      <th className="border border-gray-300 px-4 py-2 text-left">Tipo de dato</th>
      <th className="border border-gray-300 px-2 py-2" title="Primary Key">
        <abbr className="cursor-help" title="Primary Key">
          PK
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Not Null">
        <abbr className="cursor-help" title="Not Null">
          NN
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Unique">
        <abbr className="cursor-help" title="Unique">
          UQ
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Binary">
        <abbr className="cursor-help" title="Binary">
          BIN
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Unsigned">
        <abbr className="cursor-help" title="Unsigned">
          UN
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Zero Fill">
        <abbr className="cursor-help" title="Zero Fill">
          ZF
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Auto Increment">
        <abbr className="cursor-help" title="Auto Increment">
          AI
        </abbr>
      </th>
      <th className="border border-gray-300 px-4 py-2 text-left">Default</th>
      <th className="border border-gray-300 px-4 py-2 text-left">Comment</th>
    </tr>
  </thead>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">id</td>
            <td className="border border-gray-300 px-4 py-2">INT</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">coordenadas</td>
            <td className="border border-gray-300 px-4 py-2">VARCHAR(45)</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 attr">&nbsp;</td>
            <td className="border border-gray-300 px-4 py-2">NULL</td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">id_severidad</td>
            <td className="border border-gray-300 px-4 py-2">INT</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 attr">&nbsp;</td>
            <td className="border border-gray-300 px-4 py-2">NULL</td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">id_usuario</td>
            <td className="border border-gray-300 px-4 py-2">INT</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 attr">&nbsp;</td>
            <td className="border border-gray-300 px-4 py-2">NULL</td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">createdAt</td>
            <td className="border border-gray-300 px-4 py-2">DATETIME</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 attr">&nbsp;</td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">updatedAt</td>
            <td className="border border-gray-300 px-4 py-2">DATETIME</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 attr">&nbsp;</td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        </table>
        <table id='imperfecciones_carrocerias' className="min-w-full border-collapse border border-gray-900 shadow-md mx-auto mt-8">
  <caption className="text-lg font-semibold text-gray-50 pt-2 pb-2 caption-top bg-blue-950">
    Imperfecciones_carrocerias
  </caption>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200"><td colspan='11'></td></tr>
  <thead className="bg-blue-950 text-white">
    <tr className="bg-black">
      <th className="border border-gray-300 px-4 py-2 text-left">Nombre de la columna</th>
      <th className="border border-gray-300 px-4 py-2 text-left">Tipo de dato</th>
      <th className="border border-gray-300 px-2 py-2" title="Primary Key">
        <abbr className="cursor-help" title="Primary Key">
          PK
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Not Null">
        <abbr className="cursor-help" title="Not Null">
          NN
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Unique">
        <abbr className="cursor-help" title="Unique">
          UQ
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Binary">
        <abbr className="cursor-help" title="Binary">
          BIN
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Unsigned">
        <abbr className="cursor-help" title="Unsigned">
          UN
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Zero Fill">
        <abbr className="cursor-help" title="Zero Fill">
          ZF
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Auto Increment">
        <abbr className="cursor-help" title="Auto Increment">
          AI
        </abbr>
      </th>
      <th className="border border-gray-300 px-4 py-2 text-left">Default</th>
      <th className="border border-gray-300 px-4 py-2 text-left">Comment</th>
    </tr>
  </thead>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">id_imperfecciones</td>
            <td className="border border-gray-300 px-4 py-2">INT</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 attr">&nbsp;</td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">id_carrocerias</td>
            <td className="border border-gray-300 px-4 py-2">INT</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 attr">&nbsp;</td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        </table>
        <table id='prioridades' className="min-w-full border-collapse border border-gray-900 shadow-md mx-auto mt-8">
  <caption className="text-lg font-semibold text-gray-50 pt-2 pb-2 caption-top bg-blue-950">
    Prioridades
  </caption>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200"><td colspan='11'></td></tr>
  <thead className="bg-blue-950 text-white">
    <tr className="bg-black">
      <th className="border border-gray-300 px-4 py-2 text-left">Nombre de la columna</th>
      <th className="border border-gray-300 px-4 py-2 text-left">Tipo de dato</th>
      <th className="border border-gray-300 px-2 py-2" title="Primary Key">
        <abbr className="cursor-help" title="Primary Key">
          PK
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Not Null">
        <abbr className="cursor-help" title="Not Null">
          NN
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Unique">
        <abbr className="cursor-help" title="Unique">
          UQ
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Binary">
        <abbr className="cursor-help" title="Binary">
          BIN
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Unsigned">
        <abbr className="cursor-help" title="Unsigned">
          UN
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Zero Fill">
        <abbr className="cursor-help" title="Zero Fill">
          ZF
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Auto Increment">
        <abbr className="cursor-help" title="Auto Increment">
          AI
        </abbr>
      </th>
      <th className="border border-gray-300 px-4 py-2 text-left">Default</th>
      <th className="border border-gray-300 px-4 py-2 text-left">Comment</th>
    </tr>
  </thead>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">id</td>
            <td className="border border-gray-300 px-4 py-2">INT</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">userPrioridadname</td>
            <td className="border border-gray-300 px-4 py-2">VARCHAR(45)</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 attr">&nbsp;</td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">createdAt</td>
            <td className="border border-gray-300 px-4 py-2">DATETIME</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 attr">&nbsp;</td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">updatedAt</td>
            <td className="border border-gray-300 px-4 py-2">DATETIME</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 attr">&nbsp;</td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        </table>
        <table id='reportes' className="min-w-full border-collapse border border-gray-900 shadow-md mx-auto mt-8">
  <caption className="text-lg font-semibold text-gray-50 pt-2 pb-2 caption-top bg-blue-950">
    Reportes
  </caption>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200"><td colspan='11'></td></tr>
  <thead className="bg-blue-950 text-white">
    <tr className="bg-black">
      <th className="border border-gray-300 px-4 py-2 text-left">Nombre de la columna</th>
      <th className="border border-gray-300 px-4 py-2 text-left">Tipo de dato</th>
      <th className="border border-gray-300 px-2 py-2" title="Primary Key">
        <abbr className="cursor-help" title="Primary Key">
          PK
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Not Null">
        <abbr className="cursor-help" title="Not Null">
          NN
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Unique">
        <abbr className="cursor-help" title="Unique">
          UQ
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Binary">
        <abbr className="cursor-help" title="Binary">
          BIN
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Unsigned">
        <abbr className="cursor-help" title="Unsigned">
          UN
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Zero Fill">
        <abbr className="cursor-help" title="Zero Fill">
          ZF
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Auto Increment">
        <abbr className="cursor-help" title="Auto Increment">
          AI
        </abbr>
      </th>
      <th className="border border-gray-300 px-4 py-2 text-left">Default</th>
      <th className="border border-gray-300 px-4 py-2 text-left">Comment</th>
    </tr>
  </thead>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">id</td>
            <td className="border border-gray-300 px-4 py-2">INT</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">id_prioridad</td>
            <td className="border border-gray-300 px-4 py-2">INT</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 attr">&nbsp;</td>
            <td className="border border-gray-300 px-4 py-2">NULL</td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">descripcion</td>
            <td className="border border-gray-300 px-4 py-2">VARCHAR(255)</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 attr">&nbsp;</td>
            <td className="border border-gray-300 px-4 py-2">NULL</td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">id_imperfecciones</td>
            <td className="border border-gray-300 px-4 py-2">INT</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 attr">&nbsp;</td>
            <td className="border border-gray-300 px-4 py-2">NULL</td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">id_carrocerias</td>
            <td className="border border-gray-300 px-4 py-2">INT</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 attr">&nbsp;</td>
            <td className="border border-gray-300 px-4 py-2">NULL</td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">id_usuario</td>
            <td className="border border-gray-300 px-4 py-2">INT</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 attr">&nbsp;</td>
            <td className="border border-gray-300 px-4 py-2">NULL</td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">createdAt</td>
            <td className="border border-gray-300 px-4 py-2">DATETIME</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 attr">&nbsp;</td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">updatedAt</td>
            <td className="border border-gray-300 px-4 py-2">DATETIME</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 attr">&nbsp;</td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        </table>
        <table id="roles" className="min-w-full border-collapse border border-gray-900 shadow-md mx-auto mt-8">
  <caption className="text-lg font-semibold text-gray-50 pt-2 pb-2 caption-top bg-blue-950">
    Roles
  </caption>
  <thead className="bg-blue-950 text-white">
    <tr className="bg-black">
      <th className="border border-gray-300 px-4 py-2 text-left">Nombre de la columna</th>
      <th className="border border-gray-300 px-4 py-2 text-left">Tipo de dato</th>
      <th className="border border-gray-300 px-2 py-2" title="Primary Key">
        <abbr className="cursor-help" title="Primary Key">
          PK
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Not Null">
        <abbr className="cursor-help" title="Not Null">
          NN
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Unique">
        <abbr className="cursor-help" title="Unique">
          UQ
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Binary">
        <abbr className="cursor-help" title="Binary">
          BIN
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Unsigned">
        <abbr className="cursor-help" title="Unsigned">
          UN
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Zero Fill">
        <abbr className="cursor-help" title="Zero Fill">
          ZF
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Auto Increment">
        <abbr className="cursor-help" title="Auto Increment">
          AI
        </abbr>
      </th>
      <th className="border border-gray-300 px-4 py-2 text-left">Default</th>
      <th className="border border-gray-300 px-4 py-2 text-left">Comment</th>
    </tr>
  </thead>
  <tbody className="bg-white">
    <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
      <td className="border border-gray-300 px-4 py-2">id</td>
      <td className="border border-gray-300 px-4 py-2">INT</td>
      <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
      <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
      <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
      <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
      <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
      <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
      <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
      <td className="border border-gray-300 px-4 py-2"></td>
      <td className="border border-gray-300 px-4 py-2"></td>
    </tr>
    <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
      <td className="border border-gray-300 px-4 py-2">nombre</td>
      <td className="border border-gray-300 px-4 py-2">VARCHAR(50)</td>
      <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
      <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
      <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
      <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
      <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
      <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
      <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
      <td className="border border-gray-300 px-4 py-2"></td>
      <td className="border border-gray-300 px-4 py-2"></td>
    </tr>
  </tbody>
        </table>
        <table id='severidades' className="min-w-full border-collapse border border-gray-900 shadow-md mx-auto mt-8">
  <caption className="text-lg font-semibold text-gray-50 pt-2 pb-2 caption-top bg-blue-950">
    Severidades
  </caption>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200"><td colspan='11'></td></tr>
  <thead className="bg-blue-950 text-white">
    <tr className="bg-black">
      <th className="border border-gray-300 px-4 py-2 text-left">Nombre de la columna</th>
      <th className="border border-gray-300 px-4 py-2 text-left">Tipo de dato</th>
      <th className="border border-gray-300 px-2 py-2" title="Primary Key">
        <abbr className="cursor-help" title="Primary Key">
          PK
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Not Null">
        <abbr className="cursor-help" title="Not Null">
          NN
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Unique">
        <abbr className="cursor-help" title="Unique">
          UQ
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Binary">
        <abbr className="cursor-help" title="Binary">
          BIN
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Unsigned">
        <abbr className="cursor-help" title="Unsigned">
          UN
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Zero Fill">
        <abbr className="cursor-help" title="Zero Fill">
          ZF
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Auto Increment">
        <abbr className="cursor-help" title="Auto Increment">
          AI
        </abbr>
      </th>
      <th className="border border-gray-300 px-4 py-2 text-left">Default</th>
      <th className="border border-gray-300 px-4 py-2 text-left">Comment</th>
    </tr>
  </thead>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">id</td>
            <td className="border border-gray-300 px-4 py-2">INT</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">descripcion</td>
            <td className="border border-gray-300 px-4 py-2">VARCHAR(45)</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 attr">&nbsp;</td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">createdAt</td>
            <td className="border border-gray-300 px-4 py-2">DATETIME</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 attr">&nbsp;</td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">updatedAt</td>
            <td className="border border-gray-300 px-4 py-2">DATETIME</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 attr">&nbsp;</td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        </table>
        <table id='usuarios' className="min-w-full border-collapse border border-gray-900 shadow-md mx-auto mt-8">
  <caption className="text-lg font-semibold text-gray-50 pt-2 pb-2 caption-top bg-blue-950">
    Usuarios
  </caption>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200"><td colspan='11'></td></tr>
  <thead className="bg-blue-950 text-white">
    <tr className="bg-black">
      <th className="border border-gray-300 px-4 py-2 text-left">Nombre de la columna</th>
      <th className="border border-gray-300 px-4 py-2 text-left">Tipo de dato</th>
      <th className="border border-gray-300 px-2 py-2" title="Primary Key">
        <abbr className="cursor-help" title="Primary Key">
          PK
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Not Null">
        <abbr className="cursor-help" title="Not Null">
          NN
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Unique">
        <abbr className="cursor-help" title="Unique">
          UQ
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Binary">
        <abbr className="cursor-help" title="Binary">
          BIN
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Unsigned">
        <abbr className="cursor-help" title="Unsigned">
          UN
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Zero Fill">
        <abbr className="cursor-help" title="Zero Fill">
          ZF
        </abbr>
      </th>
      <th className="border border-gray-300 px-2 py-2" title="Auto Increment">
        <abbr className="cursor-help" title="Auto Increment">
          AI
        </abbr>
      </th>
      <th className="border border-gray-300 px-4 py-2 text-left">Default</th>
      <th className="border border-gray-300 px-4 py-2 text-left">Comment</th>
    </tr>
  </thead>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">id</td>
            <td className="border border-gray-300 px-4 py-2">INT</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">username</td>
            <td className="border border-gray-300 px-4 py-2">VARCHAR(45)</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 attr">&nbsp;</td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">nombre</td>
            <td className="border border-gray-300 px-4 py-2">VARCHAR(100)</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 attr">&nbsp;</td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">correo</td>
            <td className="border border-gray-300 px-4 py-2">VARCHAR(100)</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 attr">&nbsp;</td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">clave</td>
            <td className="border border-gray-300 px-4 py-2">VARCHAR(255)</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 attr">&nbsp;</td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">id_rol</td>
            <td className="border border-gray-300 px-4 py-2">INT</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 attr">&nbsp;</td>
            <td className="border border-gray-300 px-4 py-2">NULL</td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">createdAt</td>
            <td className="border border-gray-300 px-4 py-2">DATETIME</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 attr">&nbsp;</td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        <tr className="even:bg-gray-800 bg-gray-700 hover:bg-black transition-colors duration-200">
            <td className="border border-gray-300 px-4 py-2">updatedAt</td>
            <td className="border border-gray-300 px-4 py-2">DATETIME</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 text-center text-green-600">&#10004;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2">&nbsp;</td>
            <td className="border border-gray-300 px-2 py-2 attr">&nbsp;</td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
        </tr>
        </table>
      </div>
    </div>
  );
}