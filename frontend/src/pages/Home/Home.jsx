import Navbar from "../../components/Navbar/Navbar"
import Hero from "../../components/Hero"
import OdecoSection from "../../components/Odeco"
import NoticiasSection from "../../features/news/components/NoticiasSection.jsx";
import EstacionesSection from "../../components/EstacionesSection"
import Footer from "../../components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <OdecoSection />
      <NoticiasSection />
      <EstacionesSection />
      <Footer />
    </>
  )
}
