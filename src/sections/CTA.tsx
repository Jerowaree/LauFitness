import { MessageCircle, ArrowRight } from "lucide-react";
import { SITE_DATA } from "../data/siteData";
import { motion } from "framer-motion";

export const CTA = () => {
  return (
    <section className="py-24 px-6 bg-brand-black">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[40px] overflow-hidden bg-brand-red p-12 md:p-24 text-center"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[20vw] font-black text-black select-none tracking-tighter">LAU FIT</span>
            </div>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-[0.12em] uppercase leading-none">
              ¿ESTÁS LISTO PARA EL <span className="text-black">SIGUIENTE NIVEL?</span>
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed">
              No dejes para mañana la transformación que puedes empezar hoy. Únete a la élite de Los Olivos.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href={SITE_DATA.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-black text-white px-10 py-5 rounded-2xl font-black text-lg transition-all hover:scale-105 shadow-2xl active:scale-95"
              >
                <MessageCircle className="w-6 h-6" />
                CONTÁCTANOS POR WHATSAPP
              </a>
              <a
                href="#planes"
                className="flex items-center gap-2 text-white font-bold hover:translate-x-2 transition-transform"
              >
                Ver promociones vigentes <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <p className="mt-12 text-black/60 text-xs font-bold uppercase tracking-widest">
              Garantía de satisfacción • Ambiente profesional • Los Olivos, Lima
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
