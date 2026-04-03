"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Rivera",
    role: "Atleta Amador",
    content: "A SWELL mudou minha percepção de treino. A estrutura é impecável e os coaches realmente sabem o que fazem.",
    avatar: "CR",
  },
  {
    name: "Juliana Mendes",
    role: "Empresária",
    content: "O ambiente é incrível. Sinto que faço parte de uma comunidade, não é apenas uma academia comum.",
    avatar: "JM",
  },
  {
    name: "Marcos Paulo",
    role: "Crossfitter",
    content: "Os melhores equipamentos que já usei. O foco em performance aqui é levado a sério.",
    avatar: "MP",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black mb-20 uppercase tracking-tighter"
        >
          O QUE DIZEM NOSSOS <span className="text-primary text-glow italic font-black">ALUNOS</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass p-8 rounded-3xl relative hover:border-primary/30 transition-all duration-300"
            >
              <Quote className="absolute top-8 right-8 text-primary/10" size={48} />
              <div className="flex gap-1 mb-6 text-primary">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-white/80 mb-8 italic leading-relaxed">&quot;{t.content}&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary border border-primary/20">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-white/40 text-xs uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
