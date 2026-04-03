"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MobileMenu } from "./MobileMenu";
import { MenuButton } from "../MenuButton";
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
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500 px-6 py-1.5",
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-1" : "bg-transparent py-2"
        )}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link 
            href="/" 
            className="flex items-center gap-4 group"
          >
            <div className="flex items-center gap-3 md:gap-4 py-0.5">
              <Image 
                src="/logo2.png" 
                alt="SWELL Logo" 
                width={300}
                height={150}
                className="h-[108px] md:h-[144px] w-auto object-contain drop-shadow-[0_0_8px_rgba(0,243,255,0.3)] translate-y-[8px] md:translate-y-[12px]"
                style={{ clipPath: 'inset(30% 0 40% 0)' }}
                priority
              />
              <Image 
                src="/guaratuba_transparent.png" 
                alt="Guaratuba" 
                width={200}
                height={50}
                className="h-[23px] md:h-[34px] w-auto object-contain hidden sm:block translate-y-[5px]"
              />
            </div>
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
              href="https://wa.me/5547999116889"
              target="_blank"
              className="bg-primary text-background px-8 py-2.5 rounded-full text-sm font-bold hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              MATRICULE-SE
            </Link>
          </nav>

          <div className="lg:hidden">
            <MenuButton 
              isOpen={isOpen} 
              onClick={() => setIsOpen(!isOpen)} 
            />
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
