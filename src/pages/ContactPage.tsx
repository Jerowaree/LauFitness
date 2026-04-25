import { motion } from "framer-motion";
import { Contact } from "../sections/Contact.tsx";
import { CTA } from "../sections/CTA.tsx";

export const ContactPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-brand-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Contact />
        <div className="pb-24">
          <CTA />
        </div>
      </motion.div>
    </div>
  );
};
