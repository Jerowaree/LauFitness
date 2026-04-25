import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SITE_DATA } from "../data/siteData";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  type NavLink = {
    name: string;
    href: string;
    id?: string;
    isPage?: boolean;
  };

  const navLinks: NavLink[] = [
    { name: "Inicio", href: "/", id: "inicio" },
    { name: "Beneficios", href: "/", id: "beneficios" },
    { name: "Servicios", href: "/", id: "servicios" },
    { name: "Planes", href: "/", id: "planes" },
    { name: "Contacto", href: "/contacto", isPage: true },
  ];

  const handleNavigation = (link: NavLink) => {
    setIsOpen(false);
    if (link.isPage) {
      navigate(link.href);
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation and then scroll
      setTimeout(() => {
        const el = link.id ? document.getElementById(link.id) : null;
        if (el) {
          const yOffset = -80;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
      return;
    }

    const el = link.id ? document.getElementById(link.id) : null;
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 ${
        scrolled ? "bg-brand-black/90 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <span className="text-3xl font-logo tracking-normal text-white uppercase italic">
            <span className="text-brand-red">LAU</span>FITNESS
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavigation(link)}
              className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors hover:text-brand-red ${
                (link.isPage && location.pathname === link.href) || (!link.isPage && location.pathname === "/") 
                ? "text-white" 
                : "text-white/50"
              }`}
            >
              {link.name}
            </button>
          ))}
          <a 
            href={SITE_DATA.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="bg-brand-red text-white px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-red-700 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg shadow-brand-red/20"
          >
            Entrena Hoy
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100vh - 72px)" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-brand-black border-t border-white/5 overflow-hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 p-6 overflow-y-auto pb-24">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavigation(link)}
                  className="text-2xl font-black uppercase tracking-[0.3em] text-white hover:text-brand-red transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <a
                href={SITE_DATA.whatsapp}
                className="w-full bg-brand-red text-white py-6 rounded-2xl font-black text-center text-xl uppercase tracking-widest"
              >
                EMPEZAR AHORA
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
