import { FaInstagram, FaTiktok, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SITE_DATA } from "../data/siteData";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Col */}
          <div className="space-y-6">
            <a href="#inicio" className="flex items-center group">
              <span className="text-3xl font-logo tracking-normal text-white uppercase italic">
                <span className="text-brand-red">LAU</span>FITNESS
              </span>
            </a>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              El gimnasio más potente de Los Olivos. Equipamiento pro, comunidad real y resultados garantizados.
            </p>
            <div className="flex gap-4">
              <a href={SITE_DATA.social.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-white/50 hover:bg-brand-red hover:text-white transition-all">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href={SITE_DATA.social.tiktok} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-white/50 hover:bg-brand-red hover:text-white transition-all">
                <FaTiktok className="w-4 h-4" />
              </a>
              <a href={SITE_DATA.social.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-white/50 hover:bg-brand-red hover:text-white transition-all">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href={SITE_DATA.whatsapp} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-white/50 hover:bg-brand-red hover:text-white transition-all">
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/50 text-sm">
                <MapPin className="w-5 h-5 text-brand-red shrink-0" />
                <span>{SITE_DATA.location}</span>
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <Phone className="w-5 h-5 text-brand-red shrink-0" />
                <span>+51 {SITE_DATA.contact}</span>
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <Mail className="w-5 h-5 text-brand-red shrink-0" />
                <span>{SITE_DATA.email}</span>
              </li>
            </ul>
          </div>

          {/* Hours Col */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Horario</h4>
            <ul className="space-y-4">
              {SITE_DATA.hours.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/50 text-sm">
                  <Clock className="w-5 h-5 text-brand-red shrink-0" />
                  <div>
                    <p className="font-bold text-white/80">{item.day}</p>
                    <p>{item.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Map Col (Local SEO) */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Ubicación</h4>
            <div className="w-full h-40 rounded-2xl overflow-hidden bg-brand-dark grayscale hover:grayscale-0 transition-all duration-500">
               {/* Embed Google Maps placeholder or real iframe */}
               <iframe 
                src="https://maps.google.com/maps?q=-11.941196364261566,-77.07818025792987&z=17&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Lau Fitness Location"
               ></iframe>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-white/30 text-xs">
            © {currentYear} {SITE_DATA.name}. Todos los derechos reservados. <br className="md:hidden" />
            <span className="hidden md:inline"> | </span> 
            Gimnasio en Los Olivos, Lima Norte.
          </p>
          <div className="flex gap-8 text-[10px] font-black text-white/30 uppercase tracking-widest">
            <a href="#" className="hover:text-brand-red transition-colors">Privacidad</a>
            <a href="#" className="hover:text-brand-red transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
