"use client"

import { useState } from "react"
import { Upload, X } from "./Icons"

export default function ReportForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    priority: "media",
    image: "",
    description: "",
    color: "",
    panel: "",
    lote: "",
    estado: "pendiente",
  })

  const [imagePreview, setImagePreview] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const result = reader.result
        setImagePreview(result)
        setFormData((prev) => ({ ...prev, image: result }))
      }
      reader.readAsDataURL(file)
    }
  }

  const clearImage = () => {
    setImagePreview(null)
    setFormData((prev) => ({ ...prev, image: "" }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
    // Reset form
    setFormData({
      priority: "media",
      image: "",
      description: "",
      color: "",
      panel: "",
      lote: "",
      estado: "pendiente",
    })
    setImagePreview(null)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 overflow-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="priority" className="block text-sm font-medium mb-1">
              Prioridad
            </label>
            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="baja">Baja</option>
              <option value="media">Media</option>
              <option value="alta">Alta</option>
            </select>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-1">
              Descripción
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Descripción detallada del reporte"
              required
              className="w-full min-h-[100px] rounded-md border border-gray-300 bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="color" className="block text-sm font-medium mb-1">
              Color
            </label>
            <input
              id="color"
              name="color"
              value={formData.color}
              onChange={handleChange}
              placeholder="Color"
              required
              className="w-full h-10 rounded-md border border-gray-300 bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="panel" className="block text-sm font-medium mb-1">
              Panel
            </label>
            <input
              id="panel"
              name="panel"
              value={formData.panel}
              onChange={handleChange}
              placeholder="Panel"
              required
              className="w-full h-10 rounded-md border border-gray-300 bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="lote" className="block text-sm font-medium mb-1">
              Lote
            </label>
            <input
              id="lote"
              name="lote"
              value={formData.lote}
              onChange={handleChange}
              placeholder="Número de lote"
              required
              className="w-full h-10 rounded-md border border-gray-300 bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="estado" className="block text-sm font-medium mb-1">
              Estado
            </label>
            <select
              id="estado"
              name="estado"
              value={formData.estado}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="pendiente">Pendiente</option>
              <option value="en proceso">En proceso</option>
              <option value="completado">Completado</option>
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="image" className="block text-sm font-medium mb-1">
          Imagen
        </label>
        <div className="flex flex-col items-center gap-4">
          {imagePreview ? (
            <div className="relative">
              <img
                src={imagePreview || "/placeholder.svg"}
                alt="Vista previa"
                className="w-full max-w-xs h-auto object-contain rounded-md border"
              />
              <button
                type="button"
                className="absolute top-2 right-2 h-8 w-8 bg-red-500 text-white rounded-md flex items-center justify-center hover:bg-red-600"
                onClick={clearImage}
              >
                <X />
              </button>
            </div>
          ) : (
            <div className="border border-dashed border-gray-300 rounded-md p-8 w-full max-w-xs flex flex-col items-center justify-center gap-2">
              <Upload className="h-8 w-8 text-gray-400" />
              <p className="text-sm text-gray-500">Arrastra una imagen o haz clic para seleccionar</p>
              <input id="image" type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
              <button
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50"
                onClick={() => document.getElementById("image")?.click()}
              >
                Seleccionar imagen
              </button>
            </div>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white rounded-md h-10 font-medium hover:bg-blue-700 transition-colors"
      >
        Guardar Reporte
      </button>
    </form>
  )
}

