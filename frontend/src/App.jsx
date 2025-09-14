import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./auth/ProtectedRoute";
import NewsList from "./pages/News/NewsList";
import NewsDetail from "./pages/News/NewsDetail";
import NoticiasSection from "./components/News/NoticiasSection";

export default function App() {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/noticias" element={<NoticiasSection />} />
      <Route path="/news" element={<NewsList />} />
       <Route path="/noticia/:slug" element={<NewsDetail />} />

      {/* Ruta protegida */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
