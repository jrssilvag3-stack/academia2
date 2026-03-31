"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Standard",
    price: "149",
    description: "Ideal para quem está começando sua jornada.",
    features: [
      "Acesso à área de musculação",
      "Vestiário completo",
      "App de monitoramento",
      "Suporte básico"
    ],
    is_popular: false,
  },
  {
    name: "Performance",
    price: "199",
    description: "O plano mais equilibrado para resultados reais.",
    features: [
      "Tudo do Standard",
      "Aulas coletivas limitadas",
      "Avaliação física mensal",
      "1 sessões com coach/mês",
      "Priority Support"
    ],
    is_popular: true,
  },
  {
    name: "Elite",
    price: "299",
    description: "Para quem busca o ápice da performance.",
    features: [
      "Tudo do Performance",
      "Acesso ilimitado total",
      "Coaching personalizado",
      "Plano nutricional incluso",
      "Recovery Zone access"
    ],
    is_popular: false,
  },
];

export function Plans() {
  return (
    <section id="planos" className="py-24 bg-surface/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter"
          >
            ESCOLHA SEU <span className="text-primary text-glow font-black italic">PLANO</span>
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(0,243,255,0.8)]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "glass p-10 rounded-3xl relative flex flex-col transition-all duration-300",
                plan.is_popular ? "border-primary/50 bg-primary/5 scale-105 z-10" : "hover:border-white/20"
              )}
            >
              {plan.is_popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-background text-[10px] font-black px-4 py-1 rounded-full tracking-widest uppercase">
                  MAIS ESCOLHIDO
                </span>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 uppercase">{plan.name}</h3>
                <p className="text-white/50 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-black text-primary italic">R$</span>
                <span className="text-6xl font-black tracking-tighter">{plan.price}</span>
                <span className="text-white/30 text-sm font-medium">/mês</span>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-white/70">
                    <Check size={18} className="text-primary mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={`https://wa.me/5511999999999?text=Olá, tenho interesse no plano ${plan.name}`}
                target="_blank"
                className={cn(
                  "w-full py-4 rounded-xl font-bold text-center transition-all duration-300 uppercase tracking-widest text-sm",
                  plan.is_popular 
                    ? "bg-primary text-background hover:shadow-[0_0_20px_rgba(0,243,255,0.4)]" 
                    : "bg-white/5 text-white hover:bg-white/10"
                )}
              >
                QUERO ESTE PLANO
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
