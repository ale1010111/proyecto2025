import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import publicApi from "../../services/publicApi";
import MainLayout from "../../layouts/MainLayout";

export default function NewsDetail() {
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
      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{newsItem.titulo}</h1>
        <p className="text-sm text-gray-500 mb-6">{fecha}</p>

        {newsItem.imagen && (
          <img
            src={newsItem.imagen}
            alt={newsItem.titulo}
            className="w-full rounded-lg shadow-md mb-8"
          />
        )}

        <div
          className="prose prose-lg max-w-none text-justify"
          dangerouslySetInnerHTML={{ __html: newsItem.contenido }}
        />
      </article>
    </MainLayout>
  );
}
