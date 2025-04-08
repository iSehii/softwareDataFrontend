import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { usuariosService, rolesService } from "../../api/api"
import CrudForm from "../common/CrudForm"

function UsuarioForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditing = !!id

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    username: "",
    id_rol: "",
    activo: true,
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
          const usuarioRes = await usuariosService.getById(id)
          const usuario = usuarioRes.data
          setFormData({
            nombre: usuario.nombre || "",
            correo: usuario.correo || "",
            username: usuario.username || "",
            password: "", 
            id_rol: usuario.id_rol || "",
            activo: usuario.activo !== undefined ? usuario.activo : true,
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
      const userData = { ...data }
      if (isEditing && !userData.password) {
        delete userData.password
      }

      if (isEditing) {
        await usuariosService.update(id, userData)
      } else {
        await usuariosService.create(userData)
      }

      return true // Éxito
    } catch (error) {
      console.error("Error al guardar usuario:", error)
      setError("Error al guardar el usuario. Intente nuevamente.")
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
      placeholder: "Ingrese el nombre completo",
    },
    {
      name: "correo",
      label: "Correo",
      type: "email",
      required: true,
      placeholder: "Ingrese el correo electrónico",
    },
    {
      name: "username",
      label: "Nombre de usuario",
      type: "text",
      required: true,
      placeholder: "Ingrese el username",
    },
    {
      name: "clave",
      label: "Contraseña",
      type: "password",
      required: !isEditing,
      placeholder: isEditing ? "Dejar en blanco para mantener la actual" : "Ingrese la contraseña",
      helpText: isEditing ? "Dejar en blanco para mantener la contraseña actual" : "",
    },
    {
      name: "id_rol",
      label: "Rol",
      type: "select",
      required: true,
      options: roles.map((rol) => ({
        value: rol.id,
        label: rol.nombre,
      })),
    },
    {
      name: "activo",
      label: "Estado",
      type: "checkbox",
      checkboxLabel: "Usuario activo",
    },
  ]

  return (
    <CrudForm
      title="Usuario"
      initialData={formData}
      fields={fields}
      onSubmit={handleSubmit}
      loading={loading}
      error={error}
      basePath="usuarios"
      isEditing={isEditing}
    />
  )
}

export default UsuarioForm

