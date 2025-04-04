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

export const usuariosService = {
  getAll: () => instance.get("usuarios"),
  getById: (id) => instance.get(`usuarios/${id}`),
  create: (data) => instance.post("usuarios", data),
  update: (id, data) => instance.put(`usuarios/${id}`, data),
  delete: (id) => instance.delete(`usuarios/${id}`),
};

export const rolesService = {
    getAll: () => instance.get("roles"),
    getById: (id) => instance.get(`roles/${id}`),
    create: (data) => instance.post("roles", data),
    update: (id, data) => instance.put(`roles/${id}`, data),
    delete: (id) => instance.delete(`roles/${id}`),
  }
  

export default instance;
