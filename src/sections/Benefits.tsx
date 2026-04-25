import { motion } from "framer-motion";
import { Users, Dumbbell, Apple, Zap, type LucideIcon } from "lucide-react";
import { SITE_DATA } from "../data/siteData";

const iconMap: Record<string, LucideIcon> = {
  Users: Users,
  Dumbbell: Dumbbell,
  Apple: Apple,
  Zap: Zap,
};

export const Benefits = () => {
  return (
    <section id="beneficios" className="py-32 bg-brand-black relative">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-red font-black uppercase tracking-[0.5em] text-xs"
            >
              Nuestros Pilares
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black mt-4 mb-8 tracking-[0.15em] leading-none"
            >
              NO ES SOLO ENTRENAR, <br />
              <span className="text-brand-red">ES EVOLUCIONAR.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white/50 text-xl max-w-xl leading-relaxed"
            >
              En Lau Fitness combinamos ciencia deportiva, tecnología y una comunidad inquebrantable para llevarte al siguiente nivel.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SITE_DATA.benefits.map((benefit, i) => {
              const Icon = iconMap[benefit.icon] ?? Users;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group p-8 rounded-3xl bg-brand-dark border border-white/5 hover:border-brand-red/30 transition-all hover:bg-brand-medium/30 relative overflow-hidden"
                >
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-brand-red rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-brand-red/20">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-black mb-3 uppercase italic tracking-[0.15em]">{benefit.title}</h3>
                    <p className="text-white/40 leading-tight text-sm">
                      {benefit.description}
                    </p>
                  </div>
                  {/* Decorative number */}
                  <span className="absolute -bottom-4 -right-4 text-8xl font-black text-white/[0.02] select-none group-hover:text-brand-red/[0.05] transition-colors">
                    0{i + 1}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
