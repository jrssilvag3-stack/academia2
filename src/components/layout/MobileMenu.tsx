"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Benefícios", href: "/#benefits" },
  { name: "Planos", href: "/#plans" },
  { name: "Estrutura", href: "/#gallery" },
  { name: "Depoimentos", href: "/#testimonials" },
  { name: "Admin", href: "/admin" },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-45 lg:hidden overflow-hidden"
        >
          {/* Overlay mask with blur */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-background/60 backdrop-blur-3xl"
          />

          {/* Animated background shape */}
          <motion.div
            initial={{ x: "100%", skewX: -10 }}
            animate={{ x: 0, skewX: 0 }}
            exit={{ x: "100%", skewX: 10 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background border-l border-white/5 shadow-[-20px_0_40px_rgba(0,0,0,0.5)]"
          />

          <div className="relative h-full flex flex-col p-10 pt-32">
            <nav className="flex flex-col space-y-6">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ x: 80, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 40, opacity: 0 }}
                  transition={{
                    delay: 0.1 + index * 0.08,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="group relative inline-block"
                  >
                    <span className="text-5xl md:text-6xl font-black uppercase tracking-tighter transition-all duration-500 group-hover:text-primary group-hover:pl-4 inline-block text-glow">
                      {item.name}
                    </span>
                    <motion.div 
                      className="absolute -left-6 top-1/2 -translate-y-1/2 w-4 h-0.5 bg-primary opacity-0 group-hover:opacity-100 transition-all duration-500"
                      layoutId="activeIndicator"
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-auto pt-10 border-t border-white/5 flex flex-col gap-8"
            >
              <div className="flex flex-col gap-2">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/30">Matrículas e Informações</p>
                <Link href="https://wa.me/5547999116889" className="text-xl font-bold hover:text-primary transition-colors">+55 (47) 99911-6889</Link>
              </div>

              <div className="flex gap-6">
                {["Instagram", "Facebook", "YouTube"].map((social) => (
                  <Link 
                    key={social} 
                    href="#" 
                    className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-primary transition-all duration-300"
                  >
                    {social}
                  </Link>
                ))}
              </div>

              <footer className="text-white/20 text-[10px] font-bold uppercase tracking-widest">
                © {new Date().getFullYear()} SWELL Academia Guaratuba. PERFORMANCE DE ELITE NO LITORAL.
              </footer>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
