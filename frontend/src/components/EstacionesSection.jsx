export default function EstacionesSection() {
  return (
    <section id="estaciones" className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-green-700">Ubicación de EE.SS</h2>
      <div className="mt-6 max-w-5xl mx-auto">
        <iframe
          title="Mapa EE.SS"
          src="https://www.google.com/maps/embed?pb=!1m18!..." 
          width="100%" height="400"
          className="rounded-lg border-2 border-green-700"
          allowFullScreen="" loading="lazy"
        ></iframe>
      </div>
    </section>
  )
}
