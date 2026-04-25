import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
        <SEO />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
