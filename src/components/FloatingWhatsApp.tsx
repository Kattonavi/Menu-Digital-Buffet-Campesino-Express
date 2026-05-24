"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { mainContact } from "@/data/menu";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={buildWhatsAppUrl({
        phone: mainContact.phone,
        message: mainContact.message,
      })}
      target="_blank"
      rel="noreferrer"
      aria-label="Pedir por WhatsApp"
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-verde text-white shadow-cta transition-all duration-200 ease-out hover:scale-105 hover:bg-[#246a29] active:scale-95 active:bg-[#1e5c24] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amarillo"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.7, duration: 0.35, ease: "easeOut" }}
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </motion.a>
  );
}
