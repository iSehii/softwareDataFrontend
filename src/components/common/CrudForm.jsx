import { useContext } from 'react';
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Save, ArrowLeft } from "lucide-react"
import { ColorPicker } from 'primereact/colorpicker';
import Layout from "../layout/layout";
import { AuthContext } from '../../context/AuthContext';

function CrudForm({ title, initialData, fields, onSubmit, loading, error, basePath, isEditing }) {
  const [formData, setFormData] = useState(initialData || {})
  const [colorHEX, setColorHEX] = useState("FFFFFF");
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)

  useEffect(() => {
    setFormData(initialData || {})
  }, [initialData])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const success = await onSubmit(formData)
    if (success) {
      navigate(`/${basePath}`)
    }
  }

  return (
    <Layout>
      <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-50">{isEditing ? `Editar ${title}` : `Nuevo ${title}`}</h1>
          <button
            onClick={() => navigate(`/${basePath}`)}
            className="flex items-center text-gray-50 hover:text-red-500 cursor-pointer"
          >
            <ArrowLeft className="h-5 w-5 mr-1 mt-1 text-white hover:text-red-500 cursor-pointer" />
            Volver
          </button>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        <div className="bg-black border-gray-50 border rounded-lg shadow p-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fields.map((field) => (
                <div key={field.name} className={field.fullWidth ? "md:col-span-2" : ""}>
                  <label className="block text-sm font-medium text-gray-50 mb-1">{field.label}</label>

                  {field.type === "select" ? (
                    <select
                      name={field.name}
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                      required={field.required}
                      disabled={field.disabled}
                      className="w-full px-3 py-2 border border-gray-300 bg-gray-900 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="">{field.placeholder || `Seleccionar ${field.label}`}</option>
                      {field.options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  ) : field.type === "textarea" ? (
                    <textarea
                      name={field.name}
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                      required={field.required}
                      disabled={field.disabled}
                      rows={field.rows || 3}
                      placeholder={field.placeholder || ""}
                      className="w-full px-3 py-2 border bg-gray-900 border-gray-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                    ></textarea>
                  ) : field.type === "checkbox" ? (
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name={field.name}
                        checked={formData[field.name] || false}
                        value={(formData[field.name]) ? true : false}
                        onChange={handleChange}
                        disabled={field.disabled}
                        className="h-4 w-4 text-emerald-600 bg-gray-900 focus:ring-emerald-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-600">{field.checkboxLabel}</span>
                    </div>
                  ) : field.type === "colores" ? (
<div className="flex items-center justify-between gap-2 w-full">
  {/* Input de tipo color como fondo */}
  <div className="w-full relative">
    <input
      type="color"
      value={formData[field.name] || "#FFFFFF"}
      name={field.name}
      onChange={(e) => {
        const hex = e.target.value;
        setColorHEX(hex.substring(1));
        handleChange({
          target: {
            name: field.name,
            value: hex,
            type: "text"
          }
        });
      }}
      className="w-full px-[2px] py-[1px] h-[2.6em] bg-gray-900 border bg-transparent rounded-md cursor-pointer focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
    />
  </div>

  {/* Input de texto que muestra el valor HEX */}
  <input
    type="text"
    value={formData[field.name] || "#FFFFFF"}
    name={field.name}
    required={field.required}
    onChange={(e) => {
      const hex = e.target.value.startsWith("#") ? e.target.value : "#" + e.target.value;
      setColorHEX(hex.substring(1));
      handleChange({
        target: {
          name: field.name,
          value: hex,
          type: "text"
        }
      });
    }}
    className="w-[50%] px-3 py-2 border bg-gray-900 border-gray-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
  />
</div>



                  )  : field.type === "hidden" ? (
                    <input
                      type={field.type || "text"}
                      name={field.name}
                      value={formData[field.name] || user.id}
                      onChange={handleChange}
                      required={field.required}
                      disabled={field.disabled}
                      placeholder={field.placeholder || ""}
                      className=""
                    />

                )  : (
                    <input
                      type={field.type || "text"}
                      name={field.name}
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                      required={field.required}
                      disabled={field.disabled}
                      placeholder={field.placeholder || ""}
                      className="w-full px-3 py-2 border bg-gray-900 border-gray-300 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  )}

                  {field.helpText && <p className="mt-1 text-xs text-gray-500">{field.helpText}</p>}
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-center gap-4">
              <button
                type="button"
                onClick={() => navigate(`/${basePath}`)}
                className="mr-3 px-4 py-2 border w-[200px] bg-red-900 border-red-900 rounded-md text-sm font-medium text-gray-100 hover:text-red-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 border w-[200px] flex justify-center text-center border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 flex items-center disabled:bg-emerald-400 disabled:cursor-not-allowed"
              >
                <Save className="h-4 w-4 mr-2" />
                {loading ? "Guardando..." : "Guardar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default CrudForm

