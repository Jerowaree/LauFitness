import { motion } from "framer-motion";
import { Camera, ExternalLink } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { SITE_DATA } from "../data/siteData";

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
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-brand-red/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-4 backdrop-blur-sm">
                <FaInstagram className="w-8 h-8 text-white mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500" />
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
