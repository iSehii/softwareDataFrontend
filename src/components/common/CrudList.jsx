"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Plus, Edit, Trash2, Search } from "lucide-react"
import Layout from "../layout/layout";

function CrudList({ title, items, columns, loading, error, basePath, onDelete, searchFields = [] }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredItems, setFilteredItems] = useState(items)

  // Filtrar elementos cuando cambia el término de búsqueda o los elementos
  useState(() => {
    if (searchTerm && searchFields.length > 0) {
      const filtered = items.filter((item) =>
        searchFields.some((field) => item[field]?.toString().toLowerCase().includes(searchTerm.toLowerCase())),
      )
      setFilteredItems(filtered)
    } else {
      setFilteredItems(items)
    }
  }, [searchTerm, items, searchFields])

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-50">{title}</h1>
          <Link
            to={`/${basePath}/nuevo`}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md flex items-center"
          >
            <Plus className="h-5 w-5 mr-2" />
            Nuevo {title.slice(0, -1)}
          </Link>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        <div className="bg-black rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          {searchFields.length > 0 && (
            <div className="p-4 border-b">
              <div className="relative w-full sm:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-50" />
                </div>
                <input
                  type="text"
                  placeholder={`Buscar ${title.toLowerCase()}...`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-700">
                <tr>
                  {columns.map((column) => (
                    <th
                      key={column.key}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider"
                    >
                      {column.header}
                    </th>
                  ))}
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-200">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
                    <tr key={item.id}>
                      {columns.map((column) => (
                        <td
                          key={`${item.id}-${column.key}`}
                          className="px-6 py-4 whitespace-nowrap text-sm text-gray-200"
                        >
                          {column.render ? column.render(item) : item[column.key]}
                        </td>
                      ))}
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <Link to={`/${basePath}/editar/${item.id}`} className="text-indigo-600 hover:text-indigo-900">
                            <Edit className="h-5 w-5" />
                          </Link>
                          <button onClick={() => onDelete(item.id)} className="text-red-600 hover:text-red-900">
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={columns.length + 1} className="px-6 py-4 text-center text-sm text-gray-200">
                      No se encontraron registros
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CrudList

