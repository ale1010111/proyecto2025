import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import publicApi from "../../services/publicApi";  // <-- aquí el cambio
import MainLayout from "../../layouts/MainLayout";


export default function NewsList() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        // usamos la instancia pública, sin token
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

  if (loading) return (<MainLayout>
  <p>Cargando noticias…</p>;
  </MainLayout>);

  if (news.length === 0) return (<MainLayout>
  <p>No hay noticias disponibles.</p>;
  </MainLayout>);

  return (<MainLayout>
    <section>
      <h1>Noticias</h1>
      <ul>
        {news.map(item => (
          <li key={item.id}>
            <Link to={`/noticias/${item.slug}`}>{item.titulo}</Link>
          </li>
        ))}
      </ul>
    </section>
  </MainLayout>
  );
}
