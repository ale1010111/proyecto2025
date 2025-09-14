import { useEffect, useState } from "react";
import { Link } from "react-router-dom";         // ✅ NUEVO: para navegar sin recargar
import PublicAPI from "../../services/publicApi";
import Button from "../../components/Button/Button";               // ✅ NUEVO: botón reutilizable (explicado abajo)

export default function NoticiasSection() {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    PublicAPI.get("noticias/?estado=publicado&ordering=-fecha_publicacion")
      .then((res) => {
        setNoticias(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error cargando noticias:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center py-6">Cargando noticias...</p>;

  return (
    <section className="py-10 px-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center">Últimas Noticias</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {noticias.map((noticia) => (
          <div
            key={noticia.id}
            className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition"
          >
            {noticia.imagen_principal && (
              <img
                src={`http://127.0.0.1:8000${noticia.imagen_principal}`}
                alt={noticia.titulo}
                className="rounded-xl mb-4 w-full h-48 object-cover"
              />
            )}
            <h3 className="text-xl font-semibold mb-2">{noticia.titulo}</h3>
            <p className="text-gray-600 text-sm mb-3">{noticia.resumen}</p>
            <Link
              to={`/noticia/${noticia.slug}`}
              className="text-blue-600 font-medium hover:underline"
            >
              Leer más →
            </Link>
          </div>
        ))}
      </div>

      {/* ✅ Botón que lleva a la vista NewsList */}
      <div className="text-center">
        <Link to="/news">
          <Button>Ver todas las noticias</Button>
        </Link>
      </div>
    </section>
  );
}
