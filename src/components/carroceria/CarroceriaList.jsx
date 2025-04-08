import { useState, useEffect, useRef } from "react"
import { carroceriasService, rolesService, usuariosService } from "../../api/api"
import CrudList from "../common/CrudList"

function CarroceriaList() {
  const [carrocerias, setCarrocerias] = useState([]) 
  const [usuarios, setUsuarios] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("") 

useEffect(() => {
  const fetchData = async () => {
    try {
      const [carroceriasRes, usuariosRes] = await Promise.all([
        carroceriasService.getAll(),
        usuariosService.getAll(),
      ]);

      setCarrocerias(carroceriasRes.data);
      setUsuarios(usuariosRes.data);

    } catch (error) {
      console.error("Error al cargar los datos:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []); 

  

  const handleDelete = async (id) => {
    if (window.confirm("¿Está seguro de eliminar esta carroceria?")) {
      try {
        await carroceriasService.delete(id)
        setUsuarios(carrocerias.filter((carroceria) => carroceria.id !== id))
      } catch (error) {
        console.error("Error al eliminar carroceria:", error)
        setError("Error al eliminar el carroceria. Intente nuevamente.")
      }
    }
  }

  const getNombreUsuario = (id_usuario) => {
    const usuario = usuarios.find((r) => r.id === id_usuario)
    return usuario ? usuario.nombre : "N/A"
  }

  const columns = [
    { key: "id", header: "ID" },
    { key: "no_parte", header: "No. Parte" },
    { key: "panel", header: "Panel" },
    { 
      key: "id_usuario",
      header: "Creado por",
      render: (carroceria) => (
        <span>
          {getNombreUsuario(carroceria.id_usuario)}
        </span>
      ),
    },
    {
      key: "estado",
      header: "Estado",
      render: (carroceria) => (
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
            carroceria.estado ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {carroceria.estado ? "Activo" : "Inactivo"}
        </span>
      ),
    },
  ]
  

  return (
    <CrudList
      title="Carrocerias"
      items={carrocerias}
      columns={columns}
      loading={loading}
      error={error}
      basePath="carrocerias"
      onDelete={handleDelete}
      searchFields={["no_parte", "panel", "id_usuario"]}
    />
  )
}

export default CarroceriaList

