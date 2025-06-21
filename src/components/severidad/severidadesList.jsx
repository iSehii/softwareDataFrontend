import { useState, useEffect, useRef } from "react"
import {  severidadesService } from "../../api/api"
import CrudList from "../common/CrudList"

function SeveridadesList() {
  const [severidades, setSeveridades] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("") 

  let severidadesRef = useRef([]) 

useEffect(() => {
  const fetchData = async () => {
    try {
      const [severidadesRes] = await Promise.all([
        severidadesService.getAll(),
      ]);

      setSeveridades(severidadesRes.data);

    } catch (error) {
      console.error("Error al cargar los datos:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []); 

  

  const handleDelete = async (id) => {
    if (window.confirm("¿Está seguro de eliminar esta severidad?")) {
      try {
        await severidadesService.delete(id)
        setUsuarios(severidades.filter((severidad) => severidad.id !== id))
      } catch (error) {
        console.error("Error al eliminar la severidad:", error)
        setError("Error al eliminar la severtidad. Intente nuevamente.")
      }
    }
  }

  const columns = [
    { key: "id", header: "ID" },
    //{ key: "nombre", header: "Nombre" },
    { key: "descripcion", header: "Descripcion" },
  ]
  

  return (
    <CrudList
      title="Severidades"
      items={severidades}
      columns={columns}
      loading={loading}
      error={error}
      basePath="severidades"
      onDelete={handleDelete}
      searchFields={["id", "descripcion"]}
    />
  )
}

export default SeveridadesList

