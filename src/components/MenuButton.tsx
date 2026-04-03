"use client";

import React from "react";
import { motion } from "framer-motion";

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export function MenuButton({ isOpen, onClick }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative z-[10000] p-4 text-white flex flex-col items-center justify-center gap-1.5 focus:outline-none group"
      aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
    >
      <motion.span
        animate={isOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className="w-8 h-0.5 bg-primary block origin-center"
      />
      <motion.span
        animate={isOpen ? { scaleX: 0, opacity: 0 } : { scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
        className="w-8 h-0.5 bg-primary block"
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className="w-8 h-0.5 bg-primary block origin-center"
      />
    </button>
  );
}
