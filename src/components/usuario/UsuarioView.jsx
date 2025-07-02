import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { usuariosService, rolesService } from "../../api/api";
import CrudView from "../common/CrudView"; // Asegúrate que la ruta sea correcta
import Layout from "../layout/layout"; // Importa tu Layout si CrudView no lo hace

function UsuarioView() {
    const { id } = useParams();
    const [usuarioData, setUsuarioData] = useState(null);
    const [roles, setRoles] = useState([])
    const [loading, setLoading] = useState(true);   
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUsuario = async () => {
            if (!id) return;
            setLoading(true);
            try {
                const [rolesRes] = await Promise.all([
                    rolesService.getAll()
                ]);
                setRoles(rolesRes.data);
                const response = await usuariosService.getById(id);
                setUsuarioData(response.data);
            } catch (err) {
                console.error("Error al cargar los datos de la usuario:", err);
                setError("No se pudieron cargar los detalles. Intente más tarde.");
            } finally {
                setLoading(false);
            }
        };

        fetchUsuario();
    }, [id]);

  const getRolNombre = (id_rol) => {
    const rol = roles.find((r) => r.id === id_rol)
    return rol ? rol.nombre : "N/A"
  }

    const fields = [
        { name: "id", label: "ID", type: "string"},
        { name: "nombre", label: "Nombre",  type: "string"},
        { name: "correo", label: "Correo", type: "string"},
        {
        name: "id_rol",
        label: "Rol",
        render: (usuario) => getRolNombre(usuario.id_rol),
         type: "string"
        }
    ];
    
    // Mientras carga o si hay un error, puedes mostrar un mensaje.
    if (loading) {
        return <Layout><p className="text-center text-white">Cargando...</p></Layout>;
    }
    
    if (error) {
        return <Layout><p className="text-center text-red-500">{error}</p></Layout>;
    }

    return (
        <CrudView
            title="Carrocería"
            data={usuarioData}
            fields={fields}
            basePath="usuarios"
        />
    );
}

export default UsuarioView;