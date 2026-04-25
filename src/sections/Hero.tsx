import { motion } from "framer-motion";
import { ChevronRight, Play } from "lucide-react";
import { SITE_DATA } from "../data/siteData";

export const Hero = () => {
  return (
    <section id="inicio" className="relative h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="Lau Fitness Training"
          className="w-full h-full object-cover opacity-60"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        {/* Overlays for Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-transparent to-brand-black/30" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Content Layer */}
      <div className="container relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center px-4">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-8xl font-black mb-8 leading-[1.2] tracking-[0.05em] uppercase italic"
          >
            {SITE_DATA.hero.title.split(' ').map((word, i) => (
              <span key={i} className={i % 2 !== 0 ? "text-brand-red" : "text-white"}>
                {word}{' '}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto leading-tight font-medium"
          >
            {SITE_DATA.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href={SITE_DATA.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-12 py-5 bg-brand-red hover:bg-red-700 text-white font-black text-xl rounded-2xl transition-all hover:scale-105 hover:-rotate-1 shadow-2xl shadow-brand-red/40 flex items-center justify-center gap-3 active:scale-95"
            >
              {SITE_DATA.hero.cta}
              <ChevronRight className="w-6 h-6" />
            </a>
            <button className="w-full sm:w-auto px-12 py-5 bg-white/5 hover:bg-white/10 text-white font-bold text-xl rounded-2xl transition-all border border-white/10 flex items-center justify-center gap-3 backdrop-blur-xl group">
              VER TOUR VIRTUAL
              <Play className="w-5 h-5 fill-current group-hover:scale-125 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-black to-transparent z-20" />
    </section>
  );
};
