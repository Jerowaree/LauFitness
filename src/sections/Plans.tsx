import { Check } from "lucide-react";
import { cn } from "../lib/utils";
import { SITE_DATA } from "../data/siteData";
import { motion } from "framer-motion";

export const Plans = () => {
  return (
    <section id="planes" className="py-32 bg-brand-black relative">
      <div className="container">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px]"
          >
            Membresías 2026
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black mt-6 tracking-[0.12em] uppercase italic"
          >
            INVIERTE EN <span className="text-brand-red text-gradient">TI MISMO</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {SITE_DATA.plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={cn(
                "flex flex-col p-10 rounded-[40px] transition-all duration-500 border group",
                plan.recommended 
                  ? "bg-brand-red border-transparent shadow-[0_30px_60px_-15px_rgba(214,0,0,0.3)] scale-105 z-10" 
                  : "bg-brand-dark border-white/5 hover:border-white/20 hover:bg-brand-medium/20"
              )}
            >
              <div className="mb-10">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-black uppercase tracking-[0.15em] italic">{plan.name}</h3>
                  {plan.recommended && (
                    <span className="bg-white text-brand-red text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                      Recomendado
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-black tracking-tighter">{plan.price}</span>
                  <span className={cn("text-sm font-bold uppercase tracking-widest", plan.recommended ? "text-white/70" : "text-white/40")}>
                    / {plan.period}
                  </span>
                </div>
              </div>

              <div className="w-full h-px bg-white/10 mb-10" />

              <ul className="space-y-5 mb-12 flex-grow">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-4 text-sm md:text-base font-medium">
                    <div className={cn(
                      "shrink-0 w-6 h-6 rounded-full flex items-center justify-center",
                      plan.recommended ? "bg-white/20" : "bg-brand-red/10"
                    )}>
                      <Check className={cn("w-3.5 h-3.5", plan.recommended ? "text-white" : "text-brand-red")} />
                    </div>
                    <span className={plan.recommended ? "text-white" : "text-white/80"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={SITE_DATA.whatsapp}
                className={cn(
                  "w-full py-5 rounded-2xl font-black text-center text-lg transition-all active:scale-95 uppercase tracking-wider shadow-xl",
                  plan.recommended
                    ? "bg-white text-brand-red hover:shadow-white/20 hover:-translate-y-1"
                    : "bg-brand-red text-white hover:bg-red-700 hover:-translate-y-1"
                )}
              >
                ADQUIRIR AHORA
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-16 text-white/30 text-xs font-bold uppercase tracking-widest">
          * Todas las membresías incluyen evaluación física inicial.
        </p>
      </div>
    </section>
  );
};
