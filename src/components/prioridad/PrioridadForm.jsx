import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { usuariosService, prioridadesService } from "../../api/api"
import CrudForm from "../common/CrudForm"

function PrioridadForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditing = !!id

  const [formData, setFormData] = useState({
    nombre: "",
  })

  const [prioridades, setPrioridades] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const prioridadesRes = await prioridadesService.getAll()
        setPrioridades(prioridadesRes.data)

        if (isEditing) {
          const prioridadRes = await prioridadesService.getById(id)
          const prioridad = prioridadRes.data
          setFormData({
            nombre: prioridad.nombre || ""
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
      const prioridadData = { ...data }
      if (isEditing && !prioridadData.password) {
        delete prioridadData.password
      }

      if (isEditing) {
        await prioridadesService.update(id, prioridadData)
      } else {
        await prioridadesService.create(prioridadData)
      }

      return true // Éxito
    } catch (error) {
      console.error("Error al guardar prioridad:", error)
      setError("Error al guardar el prioridad. Intente nuevamente.")
      return false
    } finally {
      setLoading(false)
    }
  }

  const fields = [
    {
      name: "descripcion",
      label: "Nombre",
      type: "text",
      required: true,
      placeholder: "Ingrese el nombre del prioridad",
    }
  ]

  return (
    <CrudForm
      title="Prioridad"
      initialData={formData}
      fields={fields}
      onSubmit={handleSubmit}
      loading={loading}
      error={error}
      basePath="prioridades"
      isEditing={isEditing}
    />
  )
}

export default PrioridadForm

