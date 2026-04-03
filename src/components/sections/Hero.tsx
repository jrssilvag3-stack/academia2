"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const [showLogo, setShowLogo] = useState(false);
  const words = ["DOMINE", "O", "SEU", "POTENCIAL"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 8500); // 4s static + ~3s animation + 1.5s pause
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/gym/hero.png" 
          alt="SWELL Academia Guaratuba Interior" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background z-10" />
        <div className="absolute inset-0 bg-grid opacity-20 z-11" />
        
        {/* Animated Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <AnimatePresence mode="wait">
          {!showLogo ? (
            <motion.div
              key="text-stage"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="flex flex-col items-center justify-center"
            >
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-12"
              >
                Elite Performance Training
              </motion.span>
              
              <h1 className="flex flex-wrap justify-center gap-x-6 gap-y-4 text-6xl md:text-8xl lg:text-9xl font-black subpixel-antialiased tracking-tighter leading-[0.9]">
                {words.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 4, filter: "blur(20px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{
                      delay: 4 + (i * 0.4),
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className={word === "POTENCIAL" ? "text-primary text-glow" : "text-white"}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
            </motion.div>
          ) : (
            <motion.div
              key="logo-stage"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center justify-center space-y-12"
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 -my-20 md:-my-32">
                <motion.img 
                  src="/logo2.png" 
                  alt="SWELL Logo" 
                  initial={{ 
                    opacity: 0,
                    scale: 0.8
                  }}
                  animate={{ 
                    opacity: 1,
                    scale: 1,
                    filter: [
                      "drop-shadow(0 0 30px rgba(0,243,255,0.3))",
                      "drop-shadow(0 0 60px rgba(0,243,255,0.5))",
                      "drop-shadow(0 0 30px rgba(0,243,255,0.3))"
                    ]
                  }}
                  transition={{ 
                    filter: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    opacity: { duration: 1.5 },
                    scale: { duration: 1.5 }
                  }}
                  className="h-80 md:h-[576px] w-auto object-contain"
                  style={{ clipPath: 'inset(15% 0 15% 0)' }}
                />
              </div>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 leading-relaxed italic"
              >
                Treinamento de alto nível, estrutura state-of-the-art e uma comunidade focada em resultados reais. Sua evolução começa aqui.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
              >
                <Link
                  href="https://wa.me/5547999116889"
                  target="_blank"
                  className="group relative px-10 py-5 bg-primary text-background font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,243,255,0.3)]"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative flex items-center gap-2">
                    COMEÇAR AGORA <ArrowRight size={20} />
                  </span>
                </Link>
                
                <button className="flex items-center gap-3 text-white font-bold hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all">
                    <Play size={20} fill="currentColor" className="ml-1" />
                  </div>
                  CONHEÇA A SWELL
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Stats Scroll */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 9, duration: 1 }}
        className="absolute bottom-10 left-0 right-0 hidden md:block"
      >
        <div className="flex justify-center gap-20 text-white/30 font-medium text-sm tracking-widest uppercase">
          <div className="flex flex-col items-center">
            <span className="text-white text-2xl font-bold mb-1">500+</span>
            ALUNOS ATIVOS
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white text-2xl font-bold mb-1">12+</span>
            COACHES EXPERTS
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white text-2xl font-bold mb-1">1200m²</span>
            ÁREA DE TREINO
          </div>
        </div>
      </motion.div>
    </section>
  );
}
