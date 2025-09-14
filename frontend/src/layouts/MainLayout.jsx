// src/components/Layouts/MainLayout.jsx
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* grow hace que este main ocupe todo el espacio disponible */}
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
