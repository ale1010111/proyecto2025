import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import publicApi from "@services/publicApi";
import MainLayout from "@layouts/MainLayout";

export default function NewsDetailPage() {
  const { slug } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNewsItem() {
      try {
        const res = await publicApi.get(`noticias/${slug}/`);
        setNewsItem(res.data);
      } catch (error) {
        console.error("Error al cargar la noticia:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchNewsItem();
  }, [slug]);

  if (loading)
    return (
      <MainLayout>
        <p className="text-center mt-10">Cargando noticia…</p>
      </MainLayout>
    );

  if (!newsItem)
    return (
      <MainLayout>
        <p className="text-center mt-10">No se encontró la noticia.</p>
      </MainLayout>
    );

  const fecha = new Date(newsItem.fecha_publicacion).toLocaleDateString(
    "es-BO",
    { day: "numeric", month: "long", year: "numeric" }
  );

  return (
    <MainLayout>
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Título */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          {newsItem.titulo}
        </h1>

        {/* Fecha */}
        <p className="text-sm text-gray-500 mb-6">{fecha}</p>

        {/* Imagen destacada */}
        {newsItem.imagen && (
          <img
            src={newsItem.imagen}
            alt={newsItem.titulo}
            className="w-full h-96 object-cover rounded-lg shadow-md mb-10"
          />
        )}

        {/* Contenido */}
        <div
          className="prose prose-lg prose-green max-w-none text-justify"
          dangerouslySetInnerHTML={{ __html: newsItem.contenido }}
        />

        {/* Botón volver */}
        <div className="mt-12">
          <a
            href="/noticias"
            className="inline-block bg-green-700 text-white px-5 py-2 rounded-md shadow hover:bg-green-800 transition"
          >
            ← Volver a Noticias
          </a>
        </div>
      </article>
    </MainLayout>
  );
}
