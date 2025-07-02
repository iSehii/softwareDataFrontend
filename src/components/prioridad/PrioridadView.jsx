import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { prioridadesService } from "../../api/api";
import CrudView from "../common/CrudView"; // Asegúrate que la ruta sea correcta
import Layout from "../layout/layout"; // Importa tu Layout si CrudView no lo hace

function PrioridadView() {
    const { id } = useParams();
    const [prioridadData, setPrioridadData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchPrioridad = async () => {
            if (!id) return;
            setLoading(true);
            try {
                const response = await prioridadesService.getById(id);
                setPrioridadData(response.data);
            } catch (err) {
                console.error("Error al cargar los datos de la prioridad:", err);
                setError("No se pudieron cargar los detalles. Intente más tarde.");
            } finally {
                setLoading(false);
            }
        };

        fetchPrioridad();
    }, [id]);

    const fields = [
        { name: "no_parte", label: "Número de parte", type: "number" },
        { name: "color", label: "Color", type: "colores" },
        { name: "panel", label: "Panel", type: "text" },
        { name: "lote", label: "Lote", type: "text" },
        { name: "descripcion", label: "Descripción", type: "textarea", fullWidth: true },
        { name: "estado", label: "Estado", type: "checkbox" },
        { name: "id_usuario", label: "", type: "hidden" }, // CrudView lo ocultará
        { name: "id_imagen", label: "Imágen", type: "camera" },
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
            data={prioridadData}
            fields={fields}
            basePath="prioridades"
        />
    );
}

export default PrioridadView;