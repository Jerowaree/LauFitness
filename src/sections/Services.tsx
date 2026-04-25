import { motion } from "framer-motion";
import { SITE_DATA } from "../data/siteData";
import { ChevronRight } from "lucide-react";

export const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-red font-bold uppercase tracking-widest text-xs">Servicios Premium</span>
            <h2 className="text-4xl md:text-6xl font-black mt-2 tracking-[0.15em] uppercase">Nuestras áreas de <span className="text-brand-red">entrenamiento</span></h2>
          </div>
          <a href={SITE_DATA.whatsapp} className="text-white/60 hover:text-white flex items-center gap-2 transition-colors group">
            Ver todos los servicios <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SITE_DATA.services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative h-[500px] overflow-hidden rounded-3xl"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500">
                <h3 className="text-2xl font-black mb-2 uppercase tracking-[0.15em]">{service.title}</h3>
                <p className="text-white/70 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {service.description}
                </p>
                <a
                  href={SITE_DATA.whatsapp}
                  className="inline-flex items-center gap-2 text-brand-red font-bold text-sm uppercase tracking-wider group/link"
                >
                  Más información
                  <div className="w-8 h-[2px] bg-brand-red group-hover/link:w-12 transition-all duration-300" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
