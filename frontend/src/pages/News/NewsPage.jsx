import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import publicApi from "@services/publicApi";
import MainLayout from "@layouts/MainLayout";

export default function NewsPage() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await publicApi.get(
          "noticias/?estado=publicado&ordering=-fecha_publicacion"
        );
        setNews(res.data);
      } catch (error) {
        console.error("Error al cargar noticias:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  if (loading)
    return (
      <MainLayout>
        <p className="text-center mt-10">Cargando noticias…</p>
      </MainLayout>
    );

  if (news.length === 0)
    return (
      <MainLayout>
        <p className="text-center mt-10">No hay noticias disponibles.</p>
      </MainLayout>
    );

  return (
    <MainLayout>
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-green-700 mb-8 text-center">
          Últimas Noticias
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <Link
              to={`/noticias/${item.slug}`}
              key={item.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
            >
              {/* Imagen */}
              {item.imagen && (
                <img
                  src={item.imagen}
                  alt={item.titulo}
                  className="h-48 w-full object-cover"
                />
              )}

              {/* Contenido */}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.titulo}
                </h2>
                <p className="text-gray-600 text-sm flex-grow line-clamp-3">
                  {item.descripcion || "Leer más sobre esta noticia..."}
                </p>
                <span className="mt-4 inline-block text-green-700 font-semibold hover:underline">
                  Leer más →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}
