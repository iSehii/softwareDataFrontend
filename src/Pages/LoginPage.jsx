
import {useForm} from "react-hook-form"
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom"
import { ColorRing } from "react-loader-spinner";
import { useState } from "react";

function LoginPage() {
  const { register, handleSubmit } = useForm();
  const {login, isAuthenticated} = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [badAuth, setBadAuth] = useState(false);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    if (isAuthenticated) navigate('/Dashboard')
  },[isAuthenticated])

  const onSubmit = handleSubmit(async(values) => {
    setIsLoading(true);
    try {
      const autenticacion = await login(values);
      if (autenticacion != null) {
        setBadAuth(true);
        setMensaje(autenticacion);
      }
    } finally {
      setIsLoading(false);
    }
  })

  return (
<div className="flex items-center justify-center min-h-screen bg-gray-900 py-6 px-6">
  <form onSubmit={onSubmit} className="bg-gray-800 p-12 rounded-lg shadow-lg max-w-lg w-full">
    <h2 className="text-white text-3xl font-semibold text-center mb-6">Iniciar sesión</h2>

    <label className="text-gray-400 text-sm">Usuario</label>
    <input
      type="text"
      {...register("username", { required: true })}
      className="w-full p-3 bg-gray-700 text-white rounded-md my-2 focus:border-gray-400 focus:ring-2 focus:ring-gray-400 transition"
      placeholder="Nombre de usuario o correo electrónico"
      autoComplete="username"
    />

    <label className="text-gray-400 text-sm">Contraseña</label>
    <input
      type="password"
      {...register("clave", { required: true })}
      className="w-full p-3 bg-gray-700 text-white rounded-md my-2 focus:border-gray-400 focus:ring-2 focus:ring-gray-400 transition"
      placeholder="Ingresa tu contraseña"
      autoComplete="clave"
    />

    <div className="flex justify-between text-gray-400 text-sm">
      <a href="#" className="hover:underline">¿Olvidaste tu contraseña?</a>
      <a href="#" className="hover:underline">Crear cuenta</a>
    </div>

    <button 
      type="submit" 
      disabled={isLoading}
      className={`w-full mt-5 p-3 bg-slate-600 text-white rounded-md hover:bg-blue-900 transition ${isLoading ? 'opacity-90 cursor-not-allowed' : ''}`}
    >
      {isLoading ? (
        <ColorRing
          visible={true}
          height="40"
          width="100%"
          ariaLabel="color-ring-loading"
          wrapperClass="color-ring-wrapper"
          colors={['#E6F3FF', '#E0F2FE', '#DEEAF6', '#D4E6F1', '#C9E4EC', '#BDE0E6', '#B2DDE6', '#A8D5E5', '#9FD3E4', '#94D1E3', '#8ACDE2', '#81C9E1', '#75C6E0', '#6ABEE0', '#5ABDE0', '#4AA9E0', '#3A99E0', '#2A8BE0', '#1A7AE0', '#0078D4']}
        />
      ) : (
        'Iniciar sesión'
      )}
    </button>

    {badAuth && (
      <div className="mt-4">
        <p className="text-red-400 text-sm text-center">
          {mensaje}
        </p>
      </div>
    )}

    <div className="mt-4">
      <p className="text-gray-400 text-sm text-center">
        Al iniciar sesión, aceptas nuestros{' '}
        <a href="#" className="text-blue-500 hover:underline">
          Términos y condiciones
        </a>.
      </p>
    </div>
  </form>
</div>


  );
}

export default LoginPage;