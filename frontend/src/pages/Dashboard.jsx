import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    API.get("me/")
      .then((res) => setUser(res.data))
      .catch(() => {
        alert("Sesión no válida");
        navigate("/");
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate("/");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg hidden md:block">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold text-blue-600">Panel</h2>
        </div>
        <nav className="p-4 space-y-2 text-gray-700">
          <button className="w-full text-left px-4 py-2 rounded hover:bg-blue-100">Inicio</button>
          <button className="w-full text-left px-4 py-2 rounded hover:bg-blue-100">Usuarios</button>
          <button className="w-full text-left px-4 py-2 rounded hover:bg-blue-100">Ventas</button>
          <button className="w-full text-left px-4 py-2 rounded hover:bg-blue-100">Reportes</button>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
          >
            Cerrar sesión
          </button>
        </header>

        <main className="flex-1 p-6 overflow-y-auto">
          {user ? (
            <div>
              <h2 className="text-2xl font-bold text-gray-700 mb-4">Bienvenido, {user.username}</h2>
              <p className="text-gray-600">Correo: {user.email}</p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-100 p-4 rounded-xl shadow text-blue-700 text-center font-medium">
                  Módulo A
                </div>
                <div className="bg-green-100 p-4 rounded-xl shadow text-green-700 text-center font-medium">
                  Módulo B
                </div>
                <div className="bg-yellow-100 p-4 rounded-xl shadow text-yellow-700 text-center font-medium">
                  Módulo C
                </div>
              </div>
            </div>
          ) : (
            <p>Cargando información del usuario...</p>
          )}
        </main>
      </div>
    </div>
  );
}
