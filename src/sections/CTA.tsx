import { MessageCircle, ArrowRight } from "lucide-react";
import { SITE_DATA } from "../data/siteData";
import { motion } from "framer-motion";

export const CTA = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-6 bg-brand-black">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl sm:rounded-[40px] overflow-hidden bg-brand-red p-6 sm:p-10 md:p-16 lg:p-24 text-center"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[26vw] sm:text-[20vw] font-black text-black select-none tracking-tighter">LAU FIT</span>
            </div>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-black text-white mb-6 sm:mb-8 tracking-[0.08em] sm:tracking-[0.12em] uppercase leading-tight md:leading-none">
              ¿ESTÁS LISTO PARA EL <span className="text-black">SIGUIENTE NIVEL?</span>
            </h2>
            <p className="text-white/90 text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-xl mx-auto leading-relaxed">
              No dejes para mañana la transformación que puedes empezar hoy. Únete a la élite de Los Olivos.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a
                href={SITE_DATA.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-black text-white px-6 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black text-base sm:text-lg transition-all hover:scale-105 shadow-2xl active:scale-95"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                CONTÁCTANOS POR WHATSAPP
              </a>
              <a
                href="#planes"
                className="flex items-center gap-2 text-white font-bold text-sm sm:text-base hover:translate-x-2 transition-transform"
              >
                Ver promociones vigentes <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <p className="mt-10 sm:mt-12 text-black/60 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
              Garantía de satisfacción • Ambiente profesional • Los Olivos, Lima
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
