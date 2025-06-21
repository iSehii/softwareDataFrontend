import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { reportesService } from "../../api/api"
import CrudForm from "../common/CrudForm"

function ReporteForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditing = !!id

  const [formData, setFormData] = useState({
    nombre: "",
  })

  const [reportes, setReportees] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reportesRes = await reportesService.getAll()
        setReportees(reportesRes.data)

        if (isEditing) {
          const reporteRes = await reportesService.getById(id)
          const reporte = reporteRes.data
          setFormData({
            descripcion: reporte.descripcion || ""
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

      return true // Éxito
    } catch (error) {
      console.error("Error al guardar la reporte:", error)
      setError("Error al guardar la reporte. Intente nuevamente.")
      return false
    } finally {
      setLoading(false)
    }
  }

  const fields = [
    {
      name: "descripcion",
      label: "descripcion",
      type: "text",
      required: true,
      placeholder: "Ingrese la descripción de la reporte",
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

