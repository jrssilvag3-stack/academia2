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
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-xl p-8 lg:hidden"
        >
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="p-2 text-white hover:text-primary transition-colors focus:outline-none"
              aria-label="Fecar menu"
            >
              <X size={32} />
            </button>
          </div>

          <nav className="flex flex-col items-center justify-center flex-1 space-y-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2 + index * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="text-4xl font-bold hover:text-primary transition-all duration-300 hover:scale-105 inline-block text-glow"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          <footer className="mt-auto text-center text-white/50 text-sm">
            © {new Date().getFullYear()} SWELL Training Center. Todos os direitos reservados.
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
