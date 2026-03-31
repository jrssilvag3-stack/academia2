"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export function WhatsAppButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <Link
        href="https://wa.me/5511999999999"
        target="_blank"
        className="group relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
      >
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25" />
        <MessageCircle size={32} fill="white" stroke="white" />
        
        {/* Tooltip */}
        <span className="absolute right-20 bg-surface text-white text-[10px] font-black px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border border-white/10 uppercase tracking-widest">
          Fale com um consultor
        </span>
      </Link>
    </motion.div>
  );
}
