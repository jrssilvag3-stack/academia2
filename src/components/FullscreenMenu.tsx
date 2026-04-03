"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: Array<{ label: string; href: string }>;
}

const menuVariants = {
  hidden: { y: "-100%" },
  visible: { 
    y: "0%", 
    transition: { 
      duration: 0.7, 
      ease: [0.76, 0, 0.24, 1] as const 
    } 
  },
  exit: { 
    y: "-100%", 
    transition: { 
      duration: 0.45, 
      ease: [0.32, 0, 0.67, 0] as const 
    } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.35 + i * 0.07,
      duration: 0.55,
      ease: [0.25, 1, 0.5, 1] as const,
    },
  }),
  exit: { 
    opacity: 0, 
    y: 20, 
    transition: { duration: 0.2 } 
  },
};

export default function FullscreenMenu({
  isOpen,
  onClose,
  links,
}: FullscreenMenuProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a]"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-4 text-white hover:opacity-60 transition-opacity"
            aria-label="Close menu"
          >
            <motion.svg
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: 90, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </motion.svg>
          </button>

          <nav>
            <ul className="flex flex-col items-center gap-3">
              {links.map((link, index) => (
                <motion.li
                  key={link.label}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <a
                    href={link.href}
                    onClick={() => onClose()}
                    className="group relative inline-block text-[#c8c8c8] font-[300] tracking-tighter"
                    style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.8rem)" }}
                  >
                    <motion.span
                      className="inline-block"
                      whileHover={{ x: 8, color: "#ffffff" }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                    >
                      {link.label}
                    </motion.span>
                    <span className="block h-px bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// EXEMPLO DE USO:
// <FullscreenMenu isOpen={isOpen} onClose={() => setIsOpen(false)} links={[{label: "Home", href: "/"}]} />
