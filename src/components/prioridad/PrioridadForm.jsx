import { useContext, useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { prioridadesService } from "../../api/api"
import CrudForm from "../common/CrudForm"
import { AuthContext } from '../../context/AuthContext';

function PrioridadForm() {
  const { user } = useContext(AuthContext)
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditing = !!id

  const [formData, setFormData] = useState({
    nombre: "",
    id_usuario: user.id
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isEditing) {
          const prioridadRes = await prioridadesService.getById(id)
          const prioridad = prioridadRes.data
          setFormData({
            nombre: prioridad.nombre || "",
            id_usuario: prioridad.id_usuario || user.id
          })
        }
      } catch (error) {
        console.error("Error al cargar datos:", error)
        setError("Error al cargar los datos. Intente nuevamente.")
      }
    }
    fetchData()
  }, [id, isEditing, user.id])

  const handleSubmit = async (data) => {
    setLoading(true)
    setError("")
    try {
      const prioridadData = { ...data, id_usuario: user.id }
      if (isEditing) {
        await prioridadesService.update(id, prioridadData)
      } else {
        await prioridadesService.create(prioridadData)
      }
      return true
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
      name: "nombre",
      label: "Nombre",
      type: "text",
      required: true,
      placeholder: "Ingrese el nombre de la prioridad",
    },
    {
      name: "id_usuario",
      label: "",
      type: "hidden"
    },
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