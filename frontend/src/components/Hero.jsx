export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-700 to-teal-600 text-white h-[60vh] flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold">Agencia Nacional de Hidrocarburos</h1>
      <p className="mt-4 text-lg md:text-2xl">Regulamos la energía que fluye en Bolivia</p>
      <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500">
        Conoce más
      </button>
    </section>
  )
}
