import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PublicAPI from "../services/publicApi";

export default function NewsDetail() {
  const { slug } = useParams(); // obtener el slug de la URL
  const [noticia, setNoticia] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    PublicAPI.get(`noticias/${slug}/`) // endpoint individual
      .then((res) => {
        setNoticia(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error cargando noticia:", err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <p className="text-center py-6">Cargando noticia...</p>;
  if (!noticia) return <p className="text-center py-6">No se encontró la noticia.</p>;

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-4">{noticia.titulo}</h1>
      <p className="text-gray-500 text-sm mb-6">
        Publicada el {new Date(noticia.fecha_publicacion).toLocaleDateString()}
      </p>
      {noticia.imagen_principal && (
        <img
          src={`http://127.0.0.1:8000${noticia.imagen_principal}`}
          alt={noticia.titulo}
          className="rounded-xl mb-6 w-full object-cover"
        />
      )}
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: noticia.contenido }} />
    </div>
  );
}
