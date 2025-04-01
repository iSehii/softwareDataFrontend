import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://inspeccion-de-calidad-api.onrender.com/',  
    
});


export default instance; 