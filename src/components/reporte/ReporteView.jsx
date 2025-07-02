import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { reportesService } from "../../api/api";
import CrudView from "../common/CrudView"; // Asegúrate que la ruta sea correcta
import Layout from "../layout/layout"; // Importa tu Layout si CrudView no lo hace

function ReporteView() {
    const { id } = useParams();
    const [reporteData, setReporteData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchReporte = async () => {
            if (!id) return;
            setLoading(true);
            try {
                const response = await reportesService.getById(id);
                setReporteData(response.data);
            } catch (err) {
                console.error("Error al cargar los datos de la reporte:", err);
                setError("No se pudieron cargar los detalles. Intente más tarde.");
            } finally {
                setLoading(false);
            }
        };

        fetchReporte();
    }, [id]);

    const fields = [
        { name: "nombre", label: "Nombre", type: "text" },
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
            data={reporteData}
            fields={fields}
            basePath="reportes"
        />
    );
}

export default ReporteView;