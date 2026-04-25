import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SITE_DATA } from "../data/siteData";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-brand-black">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px]">Asistencia</span>
          <h2 className="text-4xl md:text-6xl font-black mt-4 tracking-[0.12em] uppercase italic">
            Dudas <span className="text-brand-red">Frecuentes</span>
          </h2>
        </div>

        <div className="space-y-4">
          {SITE_DATA.faq.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={`w-full p-8 rounded-3xl text-left transition-all duration-300 border flex items-center justify-between gap-4 ${
                  openIndex === i 
                    ? "bg-brand-medium/20 border-brand-red/30 shadow-2xl shadow-brand-red/5" 
                    : "bg-brand-dark border-white/5 hover:border-white/10"
                }`}
              >
                <span className={`text-lg md:text-xl font-bold transition-colors ${openIndex === i ? "text-white" : "text-white/70"}`}>
                  {item.question}
                </span>
                <div className={`shrink-0 p-2 rounded-full transition-all duration-300 ${openIndex === i ? "bg-brand-red rotate-0" : "bg-white/5 rotate-90"}`}>
                  {openIndex === i ? <Minus className="w-5 h-5 text-white" /> : <Plus className="w-5 h-5 text-white/40" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 pt-4 text-white/50 text-lg leading-relaxed border-x border-b border-white/5 rounded-b-3xl mx-4">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
