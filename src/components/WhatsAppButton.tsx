import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { SITE_DATA } from "../data/siteData";

export const WhatsAppButton = () => {
  return (
    <motion.a
      href={SITE_DATA.whatsapp}
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 group"
      aria-label="WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8 transition-transform group-hover:scale-110" />
      <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
        ¡Hablemos ahora!
      </span>
    </motion.a>
  );
};
