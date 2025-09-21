import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./auth/ProtectedRoute";
import NewsPage from "./pages/News/NewsPage.jsx";
import NewsDetailPage from "./pages/News/NewsDetailPage.jsx";
import NoticiasSection from "./features/news/components/NoticiasSection.jsx";

export default function App() {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/noticias" element={<NoticiasSection />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/noticias/:slug" element={<NewsDetailPage />} />

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
