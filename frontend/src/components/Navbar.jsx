export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/anh-logo.png" alt="ANH" className="h-10" />
          <span className="font-bold text-lg">ANH</span>
        </div>

        {/* Menú */}
        <ul className="hidden md:flex gap-6 font-semibold">
          <li><a href="#odeco">Odeco</a></li>
          <li><a href="#noticias">Noticias</a></li>
          <li><a href="#info">Información</a></li>
          <li><a href="#estaciones">EE.SS</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>
    </nav>
  )
}
