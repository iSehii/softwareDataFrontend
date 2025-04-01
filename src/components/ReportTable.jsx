function ReportTable({ reports }) {
    return (
        <div className="overflow-x-auto" >
            <table className="min-w-full border border-gray-300 shadow-lg rounded-lg">
                <thead className="bg-blue-500 text-white">
                    <tr>
                        <th className="px-6 py-3 text-left">Fecha</th>
                        <th className="px-6 py-3 text-left">Hora</th>
                        <th className="px-6 py-3 text-left">Detalle de Imperfección</th>
                        <th className="px-6 py-3 text-left">Inspector</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.length > 0 ? (
                        reports.map((report) => (
                            <tr key={report.id} className="border-b hover:bg-gray-100">
                                <td className="px-6 py-3">{report.fecha}</td>
                                <td className="px-6 py-3">{report.hora}</td>
                                <td className="px-6 py-3">{report.imperfeccion}</td>
                                <td className="px-6 py-3">{report.inspector}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center px-6 py-4 text-gray-500">
                                No hay reportes disponibles
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ReportTable;
