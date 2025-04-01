import { useState, useEffect } from "react";
import ReportTable from "../components/ReportTable.jsx";
import { fetchReports } from "../api/Auth.js";

function ResultPage() {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const loadReports = async () => {
            const data = await fetchReports();
            setReports(data);
        };
        loadReports();
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">📋 Reporte de Imperfecciones</h1>
            <ReportTable reports={reports} />
        </div>
    );
}

export default ResultPage;
