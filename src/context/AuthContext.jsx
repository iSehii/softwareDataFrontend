import { createContext, useState, useContext, useEffect } from "react";
import { loginRequest } from "../api/Auth";
import Cookies from 'js-cookie';
export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("Debe estar dentro del Provider")
    }
    return context;
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const login = async (user) => {
        try {
            const res = await loginRequest(user)
            console.log(res);
            setUser(res.data);
            setIsAuthenticated(true)
        } catch (error) {
           console.log(error)
        }
    };


    useEffect(() =>{
        const cookies = Cookies.get();
     
        if (cookies.token){
            console.log(cookies.token)
        }
    }
, [])

    return(
        //Todos los componentes que esten dentro van a poder llamar los datos
        <AuthContext.Provider 
        value={{
            login,
            user,
            isAuthenticated
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}