import { motion } from "framer-motion";
import { Quote, Star, User } from "lucide-react";
import { SITE_DATA } from "../data/siteData";

export const Testimonials = () => {
  return (
    <section className="py-24 bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-red font-bold uppercase tracking-[0.4em] text-xs">Testimonios</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 tracking-[0.12em] uppercase">Voces de la <span className="text-brand-red">comunidad</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SITE_DATA.testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-10 rounded-3xl bg-brand-dark border border-white/5 relative group"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 group-hover:text-brand-red/10 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-brand-red text-brand-red" />
                ))}
              </div>

              <p className="text-xl text-white/90 italic mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 border-2 border-brand-red/20 flex items-center justify-center">
                  <User className="w-6 h-6 text-white/70" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-white/50">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
