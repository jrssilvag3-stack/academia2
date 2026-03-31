"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />
        <div className="absolute inset-0 bg-grid opacity-20" />
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
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
            Elite Performance Training
          </span>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black subpixel-antialiased tracking-tighter leading-[0.9] mb-8">
            DOMINE O SEU <br />
            <span className="text-primary text-glow">POTENCIAL</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-10 leading-relaxed">
            Treinamento de alto nível, estrutura state-of-the-art e uma comunidade focada em resultados reais. Sua evolução começa aqui.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="https://wa.me/5511999999999"
              target="_blank"
              className="group relative px-10 py-5 bg-primary text-background font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
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
          </div>
        </motion.div>
      </div>

      {/* Stats Scroll */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
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
