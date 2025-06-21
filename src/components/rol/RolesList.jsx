import { useState, useEffect, useRef } from "react"
import {  rolesService } from "../../api/api"
import CrudList from "../common/CrudList"

function RolesList() {
  const [roles, setRoles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("") 

  let rolesRef = useRef([]) 

useEffect(() => {
  const fetchData = async () => {
    try {
      const [rolesRes] = await Promise.all([
        rolesService.getAll(),
      ]);

      setRoles(rolesRes.data);

    } catch (error) {
      console.error("Error al cargar los datos:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []); 

  

  const handleDelete = async (id) => {
    if (window.confirm("¿Está seguro de eliminar este rol?")) {
      try {
        await rolesService.delete(id)
        setUsuarios(roles.filter((rol) => rol.id !== id))
      } catch (error) {
        console.error("Error al eliminar el rol:", error)
        setError("Error al eliminar el rol. Intente nuevamente.")
      }
    }
  }

  const columns = [
    { key: "id", header: "ID" },
    { key: "nombre", header: "Nombre" },
  ]
  

  return (
    <CrudList
      title="Roles"
      items={roles}
      columns={columns}
      loading={loading}
      error={error}
      basePath="roles"
      onDelete={handleDelete}
      searchFields={["id", "nombre"]}
    />
  )
}

export default RolesList

