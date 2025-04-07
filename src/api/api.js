import axios from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create({
  baseURL: 'https://inspeccion-de-calidad-api.onrender.com/',
});

instance.interceptors.request.use(
    (config) => {
      const token = Cookies.get("token"); 
      if (token) {
        config.headers.authorization = `${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  instance.interceptors.response.use(
    (response) => response, 
    (error) => {
      if (error.response && error.response.status === 401) {
        Cookies.remove('token');
        Cookies.remove('user');
      
        window.location.href = '/Login';
      }
      return Promise.reject(error); 
    }
  );

  export const usuariosService = {
    getAll: () => instance.get("/usuarios"),
    getById: (id) => instance.get(`/usuarios/${id}`),
    create: (data) => api.post("/usuarios", data),
    update: (id, data) => api.put(`/usuarios/${id}`, data),
    delete: (id) => api.delete(`/usuarios/${id}`),
  }
  
  export const rolesService = {
    getAll: () => instance.get("/roles"),
    getById: (id) => instance.get(`/roles/${id}`),
    create: (data) => api.post("/roles", data),
    update: (id, data) => api.put(`/roles/${id}`, data),
    delete: (id) => api.delete(`/roles/${id}`),
  }
  
  export const reportesService = {
    getAll: () => instance.get("/reportes"),
    getById: (id) => instance.get(`/reportes/${id}`),
    create: (data) => api.post("/reportes", data),
    update: (id, data) => api.put(`/reportes/${id}`, data),
    delete: (id) => api.delete(`/reportes/${id}`),
    uploadImage: (id, formData) =>
      api.post(`/reportes/${id}/imagen`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      }),
  }
  
  export const severidadesService = {
    getAll: () => instance.get("/severidades"),
    getById: (id) => instance.get(`/severidades/${id}`),
    create: (data) => api.post("/severidades", data),
    update: (id, data) => api.put(`/severidades/${id}`, data),
    delete: (id) => api.delete(`/severidades/${id}`),
  }
  
  export const carroceriasService = {
    getAll: () => instance.get("/carrocerias"),
    getById: (id) => instance.get(`/carrocerias/${id}`),
    create: (data) => api.post("/carrocerias", data),
    update: (id, data) => api.put(`/carrocerias/${id}`, data),
    delete: (id) => api.delete(`/carrocerias/${id}`),
  }
  
  export const prioridadesService = {
    getAll: () => instance.get("/prioridades"),
    getById: (id) => instance.get(`/prioridades/${id}`),
    create: (data) => api.post("/prioridades", data),
    update: (id, data) => api.put(`/prioridades/${id}`, data),
    delete: (id) => api.delete(`/prioridades/${id}`),
  }
  
  export const imperfeccionesService = {
    getAll: () => instance.get("/imperfecciones"),
    getById: (id) => instance.get(`/imperfecciones/${id}`),
    create: (data) => api.post("/imperfecciones", data),
    update: (id, data) => api.put(`/imperfecciones/${id}`, data),
    delete: (id) => api.delete(`/imperfecciones/${id}`),
  }
  

export default instance;
