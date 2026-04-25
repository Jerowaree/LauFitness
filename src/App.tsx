import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./sections/Navbar.tsx";
import { Footer } from "./sections/Footer.tsx";
import { Home } from "./pages/Home.tsx";
import { ContactPage } from "./pages/ContactPage.tsx";
import { SEO } from "./components/SEO.tsx";
import { WhatsAppButton } from "./components/WhatsAppButton.tsx";

// Helper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-brand-black text-white selection:bg-brand-red">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-brand-red focus:text-white focus:rounded-lg focus:font-bold"
        >
          Saltar al contenido principal
        </a>
        <SEO />
        <Navbar />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
