import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MapPin, Phone, ShieldCheck, AlertTriangle, Loader2, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SITE_DATA } from "../data/siteData";

// Zod Schema for strict validation
const contactSchema = z.object({
  name: z.string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .max(50, "El nombre es demasiado largo")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "El nombre solo debe contener letras"),
  phone: z.string()
    .regex(/^9\d{8}$/, "El número debe empezar con 9 y tener 9 dígitos"),
  interest: z.enum(["Membresía Premium", "Musculación", "Entrenamiento Funcional", "Nutrición"]),
  message: z.string()
    .min(10, "El mensaje es muy corto (mín. 10 caracteres)")
    .max(500, "El mensaje excede los 500 caracteres"),
  _honey: z.string().max(0, "Bot detected").optional(), // Honeypot field
});

type ContactFormData = z.infer<typeof contactSchema>;

interface FormStatus {
  type: "idle" | "submitting" | "success" | "error";
  message: string;
}

export const Contact = () => {
  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      interest: "Membresía Premium",
      _honey: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Honeypot check (extra safety)
    if (data._honey) return;

    setStatus({ type: "submitting", message: "Enviando mensaje..." });

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      setStatus({ type: "success", message: "¡Mensaje enviado con éxito!" });
      reset();
      
      // Auto-reset status after 5 seconds
      setTimeout(() => setStatus({ type: "idle", message: "" }), 5000);
    } catch {
      setStatus({ type: "error", message: "Error en el servidor. Inténtalo más tarde." });
    }
  };

  return (
    <section id="contacto" className="pt-12 pb-32 bg-brand-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-brand-red font-black uppercase tracking-[0.5em] text-xs"
            >
              <ShieldCheck className="w-4 h-4" />
              Tus datos están seguros
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black mt-4 mb-8 tracking-[0.12em] uppercase italic leading-none"
            >
              HABLEMOS DE <br />
              <span className="text-brand-red text-gradient">TU OBJETIVO.</span>
            </motion.h2>
            
            <div className="space-y-8 mt-12">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-brand-dark border border-white/5 flex items-center justify-center group-hover:bg-brand-red transition-all">
                  <MapPin className="w-6 h-6 text-brand-red group-hover:text-white" />
                </div>
                <div>
                  <p className="text-white font-bold uppercase tracking-widest text-[10px] mb-1">Visítanos</p>
                  <p className="text-white/60 text-sm">{SITE_DATA.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-brand-dark border border-white/5 flex items-center justify-center group-hover:bg-brand-red transition-all">
                  <Phone className="w-6 h-6 text-brand-red group-hover:text-white" />
                </div>
                <div>
                  <p className="text-white font-bold uppercase tracking-widest text-[10px] mb-1">WhatsApp</p>
                  <p className="text-white/60 text-sm">+51 {SITE_DATA.contact}</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-6 rounded-3xl bg-brand-dark/30 border border-white/5 flex gap-4 items-center max-w-sm">
              <ShieldCheck className="w-8 h-8 text-brand-red shrink-0" />
              <p className="text-[10px] text-white/40 uppercase font-black tracking-widest leading-relaxed">
                Toda la información que compartes se mantiene privada y protegida en todo momento.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-dark/50 backdrop-blur-xl border border-white/5 p-8 md:p-12 rounded-[40px] shadow-2xl relative"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Honeypot */}
              <input type="text" {...register("_honey")} className="hidden" tabIndex={-1} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Nombre</label>
                  <input 
                    {...register("name")}
                    className={`w-full bg-brand-black border rounded-2xl px-6 py-4 text-white focus:outline-none transition-all placeholder:text-white/10 ${errors.name ? 'border-red-500/50' : 'border-white/5 focus:border-brand-red/50'}`}
                  />
                  {errors.name && <p className="text-[10px] text-red-500 ml-2 font-bold uppercase">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">WhatsApp</label>
                  <input 
                    {...register("phone")}
                    placeholder="9XXXXXXXX"
                    className={`w-full bg-brand-black border rounded-2xl px-6 py-4 text-white focus:outline-none transition-all placeholder:text-white/10 ${errors.phone ? 'border-red-500/50' : 'border-white/5 focus:border-brand-red/50'}`}
                  />
                  {errors.phone && <p className="text-[10px] text-red-500 ml-2 font-bold uppercase">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Interés</label>
                <select 
                  {...register("interest")}
                  className="w-full bg-brand-black border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-red/50 transition-all appearance-none cursor-pointer"
                >
                  <option value="Membresía Premium">Membresía Premium</option>
                  <option value="Musculación">Musculación</option>
                  <option value="Entrenamiento Funcional">Entrenamiento Funcional</option>
                  <option value="Nutrición">Nutrición</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Mensaje</label>
                <textarea 
                  {...register("message")}
                  rows={4}
                  className={`w-full bg-brand-black border rounded-2xl px-6 py-4 text-white focus:outline-none transition-all placeholder:text-white/10 resize-none ${errors.message ? 'border-red-500/50' : 'border-white/5 focus:border-brand-red/50'}`}
                ></textarea>
                {errors.message && <p className="text-[10px] text-red-500 ml-2 font-bold uppercase">{errors.message.message}</p>}
              </div>

              <AnimatePresence>
                {status.type !== "idle" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-4 rounded-2xl flex items-center gap-3 text-xs font-bold uppercase tracking-widest ${
                      status.type === "success" ? "bg-green-500/10 text-green-500 border border-green-500/20" :
                      status.type === "error" ? "bg-red-500/10 text-red-500 border border-red-500/20" :
                      "bg-blue-500/10 text-blue-500 border border-blue-500/20"
                    }`}
                  >
                    {status.type === "success" && <CheckCircle2 className="w-4 h-4" />}
                    {status.type === "error" && <AlertTriangle className="w-4 h-4" />}
                    {status.type === "submitting" && <Loader2 className="w-4 h-4 animate-spin" />}
                    {status.message}
                  </motion.div>
                )}
              </AnimatePresence>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-brand-red hover:bg-red-700 text-white font-black rounded-2xl transition-all disabled:opacity-50 shadow-xl shadow-brand-red/20 flex items-center justify-center gap-3 uppercase tracking-widest group"
              >
                {isSubmitting ? "Enviando..." : "Enviar Ahora"}
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
