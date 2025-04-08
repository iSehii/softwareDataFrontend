"use client"

import { useState } from "react"
import { Save, ArrowLeft } from "lucide-react"
import { Plus } from "lucide-react";
import { Link } from "react-router-dom"
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
    <div >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-50">Reportes</h1>
          {activeTab === "lista" ? (
            <div onClick={() => setActiveTab("form")} className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md flex items-center">
              <Plus className="h-5 w-5 mr-2" />
              Nuevo reporte
            </div>
          ) : (
            <button onClick={() => setActiveTab("lista")} className="flex items-center text-gray-50 hover:text-red-500 cursor-pointer">
              <ArrowLeft className="h-5 w-5 mr-1 mt-1 text-white hover:text-red-500 cursor-pointer" />
              Volver
            </button>
          )}
        </div>

      <div className="p-[0]">
        <div className="w-full">
              <div className="bg-black rounded-lg border border-gray-200 shadow-sm">
          {activeTab === "lista" ? <ReportList reports={reports} /> : <ReportForm onSubmit={addReport} />}
              </div>
        </div>
      </div>
    </div>
  )
}

