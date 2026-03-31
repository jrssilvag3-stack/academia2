"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500 px-6 py-4",
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link 
            href="/" 
            className="text-2xl font-black text-primary tracking-tighter flex items-center gap-2 group"
          >
            <div className="w-8 h-8 bg-primary rounded-sm rotate-45 group-hover:rotate-90 transition-transform duration-500" />
            <span className="text-glow uppercase">SWELL</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-10">
            {["Benefícios", "Planos", "Estrutura", "Depoimentos"].map((item) => (
              <Link 
                key={item}
                href={`/#${item.toLowerCase()}`} 
                className="text-sm font-medium text-white/70 hover:text-primary transition-colors hover:translate-y-[-1px] transform duration-200"
              >
                {item}
              </Link>
            ))}
            <Link
              href="https://wa.me/5511999999999"
              target="_blank"
              className="bg-primary text-background px-8 py-2.5 rounded-full text-sm font-bold hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              MATRICULE-SE
            </Link>
          </nav>

          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2 text-white hover:text-primary transition-colors focus:outline-none"
            aria-label="Abrir menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
