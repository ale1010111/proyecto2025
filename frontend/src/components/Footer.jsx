export default function Footer() {
  return (
    <footer id="contacto" className="bg-green-700 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p>&copy; {new Date().getFullYear()} ANH - Agencia Nacional de Hidrocarburos</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>
    </footer>
  )
}
