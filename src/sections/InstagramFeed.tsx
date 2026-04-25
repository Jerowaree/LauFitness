import { motion } from "framer-motion";
import { Camera, ExternalLink } from "lucide-react";
import { SITE_DATA } from "../data/siteData";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export const InstagramFeed = () => {
  return (
    <section className="py-24 bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px]"
          >
            Nuestra Comunidad
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mt-4 tracking-[0.12em] uppercase italic italic"
          >
            VIVE LA <span className="text-brand-red">EXPERIENCIA</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
          {SITE_DATA.instagram.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-2xl md:rounded-3xl bg-brand-dark"
            >
              <img
                src={item.url}
                alt={`Lau Fitness Gallery ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                loading="lazy"
                decoding="async"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-brand-red/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-4 backdrop-blur-sm">
                <InstagramIcon className="w-8 h-8 text-white mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500" />
                <span className="text-white font-black text-[10px] uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  @laufitnessclub
                </span>
                <a 
                  href={SITE_DATA.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 p-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-white" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href={SITE_DATA.social.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-dark hover:bg-white/5 text-white font-black text-xs uppercase tracking-widest rounded-2xl border border-white/5 transition-all hover:-translate-y-1 group"
          >
            <Camera className="w-5 h-5 text-brand-red group-hover:scale-110 transition-transform" />
            Ver más en Instagram
          </a>
        </div>
      </div>
    </section>
  );
};
