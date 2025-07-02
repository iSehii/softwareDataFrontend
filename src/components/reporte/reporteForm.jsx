import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { reportesService, prioridadesService, imperfeccionesService, carroceriasService } from "../../api/api"
import CrudForm from "../common/CrudForm"

function ReporteForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditing = !!id

  const [formData, setFormData] = useState({ nombre: "" })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  // Estados para las opciones de los selects
  const [prioridades, setPrioridades] = useState([])
  const [imperfecciones, setImperfecciones] = useState([])
  const [carrocerias, setCarrocerias] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Carga las opciones de los selects
        const [prioridadesRes, imperfeccionesRes, carroceriasRes] = await Promise.all([
          prioridadesService.getAll(),
          imperfeccionesService.getAll(),
          carroceriasService.getAll(),
        ])
        setPrioridades(prioridadesRes.data)
        setImperfecciones(imperfeccionesRes.data)
        setCarrocerias(carroceriasRes.data)

        if (isEditing) {
          const reporteRes = await reportesService.getById(id)
          const reporte = reporteRes.data
          setFormData({
            id_prioridad: reporte.id_prioridad || "",
            descripcion: reporte.descripcion || "",
            id_imperfecciones: reporte.id_imperfecciones || "",
            id_carrocerias: reporte.id_carrocerias || "",
            // id_usuario lo manejas tú
          })
        }
      } catch (error) {
        console.error("Error al cargar datos:", error)
        setError("Error al cargar los datos. Intente nuevamente.")
      }
    }
    fetchData()
  }, [id, isEditing])

  const handleSubmit = async (data) => {
    setLoading(true)
    setError("")
    try {
      const reporteData = { ...data }
      if (isEditing) {
        await reportesService.update(id, reporteData)
      } else {
        await reportesService.create(reporteData)
      }
      return true
    } catch (error) {
      console.error("Error al guardar la reporte:", error)
      setError("Error al guardar la reporte. Intente nuevamente.")
      return false
    } finally {
      setLoading(false)
    }
  }

  // Mapea las opciones para los selects
  const fields = [
    {
      name: "id_prioridad",
      label: "Prioridad",
      type: "select",
      required: true,
      options: prioridades.map(p => ({ value: p.id, label: p.nombre })),
      placeholder: "Selecciona la prioridad"
    },
    {
      name: "descripcion",
      label: "Descripción",
      type: "text",
      required: true,
      placeholder: "Ingrese la descripción del reporte"
    },
    {
      name: "id_imperfecciones",
      label: "Imperfección",
      type: "select",
      required: false,
      options: imperfecciones.map(i => ({ value: i.id, label: i.nombre })),
      placeholder: "Selecciona la imperfección"
    },
    {
      name: "id_carrocerias",
      label: "Carrocería",
      type: "select",
      required: true,
      options: carrocerias.map(c => ({ value: c.id, label: c.lote })),
      placeholder: "Selecciona la carrocería"
    },
    {
      name: "id_usuario",
      label: "",
      type: "hidden"
    }
  ]

  return (
    <CrudForm
      title="Reporte"
      initialData={formData}
      fields={fields}
      onSubmit={handleSubmit}
      loading={loading}
      error={error}
      basePath="reportes"
      isEditing={isEditing}
    />
  )
}

export default ReporteForm