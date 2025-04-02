"use client"

import { useState } from "react"
import ReportForm from "./report-form"
import ReportList from "./report-list"

export default function ReportInterface() {
  const [activeTab, setActiveTab] = useState("lista")
  const [reports, setReports] = useState([
    {
      id: "1",
      priority: "alta",
      image: "/placeholder.svg?height=100&width=100",
      description: "Defecto en la superficie",
      color: "rojo",
      panel: "Panel frontal",
      lote: "L-2023-001",
      estado: "pendiente",
    },
    {
      id: "2",
      priority: "media",
      image: "/placeholder.svg?height=100&width=100",
      description: "Desalineación en bordes",
      color: "azul",
      panel: "Panel lateral",
      lote: "L-2023-002",
      estado: "en proceso",
    },
    {
      id: "3",
      priority: "baja",
      image: "/placeholder.svg?height=100&width=100",
      description: "Pequeña mancha",
      color: "verde",
      panel: "Panel trasero",
      lote: "L-2023-003",
      estado: "completado",
    },
  ])

  const addReport = (report) => {
    const newReport = {
      ...report,
      id: Math.random().toString(36).substring(2, 9),
    }
    setReports([...reports, newReport])
    setActiveTab("lista") 
  }

  return (
    <div className="bg-black rounded-lg border border-gray-200 shadow-sm">
      <div className="p-6">
        <div className="w-full">
          <div className="flex mb-6 bg-gray-700 rounded-md p-1">
            <button
              className={`flex-1 px-3 py-1.5 text-sm font-medium rounded-sm ${
                activeTab === "lista" ? "bg-gray-600 shadow-sm" : "text-gray-500"
              }`}
              onClick={() => setActiveTab("lista")}
            >
              Lista de Reportes
            </button>
            <button
              className={`flex-1 px-3 py-1.5 text-sm font-medium rounded-sm ${
                activeTab === "nuevo" ? "bg-gray-600 shadow-sm" : "text-gray-500"
              }`}
              onClick={() => setActiveTab("nuevo")}
            >
              Nuevo Reporte
            </button>
          </div>

          {activeTab === "lista" ? <ReportList reports={reports} /> : <ReportForm onSubmit={addReport} />}
        </div>
      </div>
    </div>
  )
}

