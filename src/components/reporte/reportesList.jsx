import { useState, useEffect, useRef } from "react"
import {  reportesService } from "../../api/api"
import CrudList from "../common/CrudList"

function ReportesList() {
  const [reportes, setReportes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("") 

  let reportesRef = useRef([]) 

useEffect(() => {
  const fetchData = async () => {
    try {
      const [reportesRes] = await Promise.all([
        reportesService.getAll(),
      ]);

      setReportes(reportesRes.data);

    } catch (error) {
      console.error("Error al cargar los datos:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []); 

  

  const handleDelete = async (id) => {
    if (window.confirm("¿Está seguro de eliminar esta reporte?")) {
      try {
        await reportesService.delete(id)
        setUsuarios(roles.filter((rol) => rol.id !== id))
      } catch (error) {
        console.error("Error al eliminar la reporte:", error)
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
      title="Reportes"
      items={reportes}
      columns={columns}
      loading={loading}
      error={error}
      basePath="reportes"
      onDelete={handleDelete}
      searchFields={["id", "descripcion"]}
    />
  )
}

export default ReportesList

