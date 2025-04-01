
import {useForm} from "react-hook-form"
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom"

function LoginPage() {
  const { register, handleSubmit } = useForm();
  const {login, isAuthenticated } = useAuth();
  const navigate = useNavigate();


  useEffect(() => {
    if (isAuthenticated) navigate('/Dashboard')
  },[isAuthenticated])

  const onSubmit = handleSubmit(async(values) =>{
    login(values);
  })

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <form 
      onSubmit={onSubmit}
      >
          <h2 className="text-white text-2xl font-semibold text-center mb-6">Iniciar Sesión</h2>
              <label className="text-gray-400 text-sm">Usuario</label>
              <input
                type="text"
                {...register("username", {required: true })}
                className="w-full p-2 bg-gray-700 text-white px-4 py-2 rounded-md my-2 focus:border-yellow-400 transition"
                placeholder="username"
                autoComplete="username"
              />
      
              <label className="text-gray-400 text-sm">Contraseña</label>
              <input
                type="password"
                {...register("clave", {required: true })}
                className="w-full p-2 bg-gray-700 text-white px-4 py-2 rounded-md my-2 focus:border-yellow-400 transition"
                placeholder="clave"
                autoComplete="clave"
              />

          <div className="flex justify-between text-gray-400 text-sm mt-3">
            <a href="#" className="hover:underline">¿Olvidaste tu contraseña?</a>
            <a href="#" className="hover:underline">Crear cuenta</a>
          </div>

          <button  type="submit" className="w-full mt-5 p-2 bg-slate-600 text-white rounded-md hover:bg-blue-700 transition">
            Login
          </button>
      </form>
    </div>
  );
}

export default LoginPage;
