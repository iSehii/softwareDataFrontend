import { useContext } from 'react';
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { carroceriasService, rolesService } from "../../api/api"
import CrudForm from "../common/CrudForm"
import { AuthContext } from '../../context/AuthContext';

function CarroceriaForm() {
const { user } = useContext(AuthContext)

  const { id } = useParams()
  const navigate = useNavigate()
  const isEditing = !!id

  const [formData, setFormData] = useState({
    no_parte: "",
    color: "",
    panel: "",
    descripcion: "",
    lote: "",
    estado: false,
    id_usuario: user.id,
  })

  const [roles, setRoles] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rolesRes = await rolesService.getAll()
        setRoles(rolesRes.data)

        if (isEditing) {
          const carroceriaRes = await carroceriasService.getById(id)
          const carroceria = carroceriaRes.data
          setFormData({
            no_parte: carroceria.no_parte || "",
            color: carroceria.color || "",
            panel: carroceria.panel || "",
            descripcion: carroceria.descripcion || "",
            lote: carroceria.lote || "",
            estado: carroceria.estado || false,
            id_usuario: carroceria.id_usuario,
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
      const carroceriaData = { ...data,
        id_usuario: user.id || formData.id_usuario
       }

      if (isEditing) {
        await carroceriasService.update(id, carroceriaData)
      } else {
        await carroceriasService.create(carroceriaData)
      }

      return true // Éxito
    } catch (error) {
      console.error("Error al guardar la carrocería:", error)
      setError("Error al guardar la carrocería. Intente nuevamente.")
      return false
    } finally {
      setLoading(false)
    }
  }
  const fields = [
    {
      name: "no_parte",
      label: "Número de parte",
      type: "number",
      required: true,
      placeholder: "Ingrese el número de parte",
    },
    {
      name: "color",
      label: "Color",
      type: "colores",
      required: true,
      placeholder: "Ingrese el color",
    },
    {
      name: "panel",
      label: "Panel",
      type: "text",
      required: true,
      placeholder: "Ingrese el panel",
    },
    {
      name: "lote",
      label: "Lote",
      type: "text",
      required: true,
      placeholder: "Ingrese el lote",
    },
    {
      name: "descripcion",
      label: "Descripción",
      type: "textarea",
      required: true,
      placeholder: "Ingrese la descripción",
    },
    {
      name: "estado",
      label: "Estado",
      type: "checkbox",
      checkboxLabel: "Activo",
    },
    {
      name: "id_usuario",
      label: "",
      type: "hidden",
    },
  ]

  return (
    <CrudForm
      title="Carrocería"
      initialData={formData}
      fields={fields}
      onSubmit={handleSubmit}
      loading={loading}
      error={error}
      basePath="carrocerias"
      isEditing={isEditing}
    />
  )
}

export default CarroceriaForm

