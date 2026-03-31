"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Target, Users } from "lucide-react";

const benefits = [
  {
    title: "Alta Performance",
    description: "Metodologias validadas para levar seu corpo ao próximo nível.",
    icon: Zap,
  },
  {
    title: "Comunidade Viva",
    description: "Um ambiente motivador onde todos buscam o mesmo objetivo.",
    icon: Users,
  },
  {
    title: "Foco em Resultados",
    description: "Planejamento individualizado para sua evolução constante.",
    icon: Target,
  },
  {
    title: "Equipamentos Premium",
    description: "Tecnologia de ponta para segurança e eficiência no treino.",
    icon: Shield,
  },
];

export function Benefits() {
  return (
    <section id="benefícios" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter"
          >
            POR QUE ESCOLHER A <span className="text-primary text-glow">SWELL</span>?
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(0,243,255,0.8)]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-2xl hover:bg-white/[0.05] transition-colors group cursor-default"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{benefit.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
