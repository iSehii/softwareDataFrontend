// Importaciones
import { useRef, useEffect, useState } from "react";
import { X } from "lucide-react";
// Declaracion de constante
const Camera = () => {
  const vid = useRef(null);
  const captura = useRef(null);
  const subimg = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);
// Inicador de la camara
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (vid.current) {
        vid.current.srcObject = stream;
        setIsCameraOn(true);
      }
    } catch (error) {
      console.error("Error al acceder a la cámara:", error);
    }
  };
// Apagar camara
  const stopCamera = () => {
    if (vid.current && vid.current.srcObject) {
      const stream = vid.current.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      vid.current.srcObject = null;
      setIsCameraOn(false);
    }
  };
// Funcion para tomar la foto
  const takePhoto = () => {
    if (vid.current && captura.current) {
      const canvas = captura.current;
      const context = canvas.getContext("2d");
      canvas.width = vid.current.videoWidth;
      canvas.height = vid.current.videoHeight;
      context.drawImage(vid.current, 0, 0, canvas.width, canvas.height);
      setPhoto(canvas.toDataURL("image/png"));
    }
  };
// Funcion para subir una imagen desde el almacenamiento del dispositivo
  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
// Enviar la imagen al API, sin consumir el API "No se aun como hacerlo XD"
  const sendToAPI = async () => {
    if (!photo) {
      alert("No hay imagen para enviar.");
      return;
    }

    setUploading(true);

    try {
      const response = await fetch("https://example.com/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: photo }),
      });

      if (response.ok) {
        alert("Imagen enviada con éxito");
      } else {
        alert("Error al enviar la imagen");
      }
    } catch (error) {
      console.error("Error en la subida:", error);
      alert("Error al conectar con la API");
    } finally {
      setUploading(false);
    }
  };
// Declaración del entorno visual
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div className="relative w-full max-w-md">
        <video ref={vid} autoPlay playsInline className="w-full border rounded-lg shadow-lg" />
        {/* Botón de cerrar cámara con un tache ❌ */}
        {isCameraOn && (
          <button 
            onClick={stopCamera} 
            className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full shadow-lg"
          >
            <X size={24} />
          </button>
        )}
      </div>
      
      <canvas ref={captura} className="hidden" />

      <div className="flex gap-2">
        {!isCameraOn && (
          <button 
            onClick={startCamera} 
            className="px-4 py-2 bg-[#556B2F] text-white rounded-lg"
          >
            Abrir Cámara
          </button>
        )}
        <button 
          onClick={takePhoto} 
          disabled={!isCameraOn} 
          className="px-4 py-2 bg-[#008080] text-white rounded-lg"
        >
          Tomar Foto
        </button>
      </div>

      <div className="flex gap-2">
        <input 
          type="file" 
          accept="image/*" 
          ref={subimg} 
          onChange={handleUpload} 
          className="hidden"
        />
        <button 
          onClick={() => subimg.current.click()} 
          className="px-4 py-2 bg-[#A9A9A9] text-white rounded-lg"
        >
          Subir Foto
        </button>
      </div>

      {photo && (
        <div className="flex flex-col items-center mt-4">
          <img src={photo} alt="Foto" className="w-full max-w-md border rounded-lg shadow-lg" />
          <a href={photo} download="imagen.png" className="mt-2 px-4 py-2 bg-[#6B8E23] text-white rounded-lg">
            Descargar Foto
          </a>
          <button
            onClick={sendToAPI}
            disabled={uploading}
            className="mt-2 px-4 py-2 bg-[#708090] text-white rounded-lg"
          >
            {uploading ? "Enviando..." : "Enviar a API"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Camera;
