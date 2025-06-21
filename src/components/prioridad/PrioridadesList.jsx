import { useState, useEffect, useRef } from "react"
import {  prioridadesService } from "../../api/api"
import CrudList from "../common/CrudList"

function PrioridadesList() {
  const [prioridades, setPrioridades] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("") 

  let prioridadesRef = useRef([]) 

useEffect(() => {
  const fetchData = async () => {
    try {
      const [prioridadesRes] = await Promise.all([
        prioridadesService.getAll(),
      ]);

      setPrioridades(prioridadesRes.data);

    } catch (error) {
      console.error("Error al cargar los datos:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []); 

  

  const handleDelete = async (id) => {
    if (window.confirm("¿Está seguro de eliminar este prioridad?")) {
      try {
        await prioridadesService.delete(id)
        setUsuarios(prioridades.filter((prioridad) => prioridad.id !== id))
      } catch (error) {
        console.error("Error al eliminar el prioridad:", error)
        setError("Error al eliminar el prioridad. Intente nuevamente.")
      }
    }
  }

  const columns = [
    { key: "id", header: "ID" },
    { key: "descripcion", header: "Nombre" },
  ]
  

  return (
    <CrudList
      title="Prioridades"
      items={prioridades}
      columns={columns}
      loading={loading}
      error={error}
      basePath="prioridades"
      onDelete={handleDelete}
      searchFields={["id", "nombre"]}
    />
  )
}

export default PrioridadesList

