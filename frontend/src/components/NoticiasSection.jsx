export default function NoticiasSection() {
  const noticias = [
    { id: 1, titulo: "Nueva normativa para operadores", desc: "Se publicó la nueva normativa..." },
    { id: 2, titulo: "Supervisión de estaciones", desc: "Visitas técnicas realizadas en..." },
    { id: 3, titulo: "Campaña Bicentenario", desc: "La ANH participa en..." },
  ]

  return (
    <section id="noticias" className="py-12 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center text-green-700">Noticias</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {noticias.map(noticia => (
          <div key={noticia.id} className="border p-4 rounded-lg shadow hover:shadow-lg">
            <h3 className="font-semibold text-lg">{noticia.titulo}</h3>
            <p className="text-gray-600 mt-2">{noticia.desc}</p>
            <a href="#" className="text-green-700 mt-4 block">Leer más</a>
          </div>
        ))}
      </div>
    </section>
  )
}
