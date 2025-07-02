import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { severidadesService } from "../../api/api"
import CrudForm from "../common/CrudForm"

function SeveridadForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditing = !!id

  const [formData, setFormData] = useState({
    nombre: "",
  })

  const [severidades, setSeveridades] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const severidadesRes = await severidadesService.getAll()
        setSeveridades(severidadesRes.data)

        if (isEditing) {
          const severidadRes = await severidadesService.getById(id)
          const severidad = severidadRes.data
          setFormData({
            descripcion: severidad.descripcion || ""
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
      const severidadData = { ...data }

      if (isEditing) {
        await severidadesService.update(id, severidadData)
      } else {
        await severidadesService.create(severidadData)
      }

      return true // Éxito
    } catch (error) {
      console.error("Error al guardar la severidad:", error)
      setError("Error al guardar la severidad. Intente nuevamente.")
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
      placeholder: "Ingrese la descripción de la severidad",
    }
  ]

  return (
    <CrudForm
      title="Severidad"
      initialData={formData}
      fields={fields}
      onSubmit={handleSubmit}
      loading={loading}
      error={error}
      basePath="severidades"
      isEditing={isEditing}
    />
  )
}

export default SeveridadForm

