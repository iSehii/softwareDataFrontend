import axios from './axios';

export const loginRequest = user => axios.post(`/auth/login`, user) 

export const obtenerUsuarios = user => axios.get(`/usuarios`, user)




// Reportes
export const fetchReports = async () => {
    try {
        const response = await axios.get(`/reports`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener los reportes:", error);
        return [];
    }
};
