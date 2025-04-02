"use client"

import { useState } from "react"
import { Search } from "./Icons"

export default function ReportList({ reports }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterPriority, setFilterPriority] = useState("all")
  const [filterEstado, setFilterEstado] = useState("all")

  const filteredReports = reports.filter((report) => {
    const matchesSearch =
      report.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.lote.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.panel.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.color.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesPriority = filterPriority === "all" || report.priority === filterPriority
    const matchesEstado = filterEstado === "all" || report.estado === filterEstado

    return matchesSearch && matchesPriority && matchesEstado
  })

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case "alta":
        return (
          <span className="inline-flex items-center rounded-full border border-transparent bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-800">
            Alta
          </span>
        )
      case "media":
        return (
          <span className="inline-flex items-center rounded-full border border-transparent bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800">
            Media
          </span>
        )
      case "baja":
        return (
          <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-400 px-2.5 py-0.5 text-xs font-semibold text-gray-700">
            Baja
          </span>
        )
      default:
        return (
          <span className="inline-flex items-center rounded-full border border-transparent bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-800">
            {priority}
          </span>
        )
    }
  }

  const getEstadoBadge = (estado) => {
    switch (estado) {
      case "pendiente":
        return (
          <span className="inline-flex items-center rounded-full border border-transparent bg-yellow-100 px-2.5 py-0.5 text-xs font-semibold text-yellow-800">
            Pendiente
          </span>
        )
      case "en proceso":
        return (
          <span className="inline-flex items-center rounded-full border border-transparent bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800">
            En proceso
          </span>
        )
      case "completado":
        return (
          <span className="inline-flex items-center rounded-full border border-transparent bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800">
            Completado
          </span>
        )
      default:
        return (
          <span className="inline-flex items-center rounded-full border border-transparent bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-800">
            {estado}
          </span>
        )
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <div className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400">
            <Search />
          </div>
          <input
            type="search"
            placeholder="Buscar por descripción, lote, panel o color..."
            className="w-full h-10 pl-8 rounded-md border border-gray-300 bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <select
            value={filterPriority}
            onChange={(e) => setFilterPriority(e.target.value)}
            className="w-[130px] rounded-md border border-gray-300 bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Todas</option>
            <option value="alta">Alta</option>
            <option value="media">Media</option>
            <option value="baja">Baja</option>
          </select>
          <select
            value={filterEstado}
            onChange={(e) => setFilterEstado(e.target.value)}
            className="w-[130px] rounded-md border border-gray-300 bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Todos</option>
            <option value="pendiente">Pendiente</option>
            <option value="en proceso">En proceso</option>
            <option value="completado">Completado</option>
          </select>
        </div>
      </div>

      <div className="rounded-md border border-gray-00 overflow-hidden">
        <div className="w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="border-b border-gray-200 bg-gray-700">
              <tr>
                <th className="h-12 px-4 text-left align-middle font-medium text-gray-50">Prioridad</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-gray-50 hidden md:table-cell">
                  Descripción
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-gray-50">Color</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-gray-50 hidden md:table-cell">
                  Panel
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-gray-50">Lote</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-gray-50">Estado</th>
              </tr>
            </thead>
            <tbody>
              {filteredReports.length > 0 ? (
                filteredReports.map((report) => (
                  <tr key={report.id} className="border-b border-gray-200 hover:bg-gray-800">
                    <td className="p-4 align-middle">{getPriorityBadge(report.priority)}</td>
                    <td className="p-4 align-middle hidden md:table-cell max-w-[200px] truncate">
                      {report.description}
                    </td>
                    <td className="p-4 align-middle">{report.color}</td>
                    <td className="p-4 align-middle hidden md:table-cell">{report.panel}</td>
                    <td className="p-4 align-middle">{report.lote}</td>
                    <td className="p-4 align-middle">{getEstadoBadge(report.estado)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="text-center py-4 text-gray-500">
                    No se encontraron reportes con los filtros aplicados
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

