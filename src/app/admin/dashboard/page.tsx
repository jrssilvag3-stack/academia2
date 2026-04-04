"use client";

export const dynamic = "force-dynamic";

import { motion } from "framer-motion";
import { Dumbbell, MessageSquare, TrendingUp, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  { name: "Alunos Estimados", value: "500+", icon: Users, color: "text-blue-500" },
  { name: "Planos Ativos", value: "3", icon: Dumbbell, color: "text-primary text-glow" },
  { name: "Depoimentos", value: "12", icon: MessageSquare, color: "text-purple-500" },
  { name: "Crescimento Mensal", value: "15%", icon: TrendingUp, color: "text-green-500" },
];

export default function DashboardOverview() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-black tracking-tighter uppercase mb-2">Visão Geral</h1>
        <p className="text-white/50 italic">Bem-vindo ao centro de comando da SWELL.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={cn("p-3 rounded-xl bg-white/[0.03] group-hover:scale-110 transition-transform duration-300", stat.color)}>
                <stat.icon size={24} />
              </div>
            </div>
            <p className="text-sm font-medium text-white/50 mb-1">{stat.name}</p>
            <p className="text-3xl font-black tracking-tighter">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass p-8 rounded-3xl border border-white/5">
          <h2 className="text-xl font-bold mb-6 uppercase tracking-wider">Ações Rápidas</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all text-sm font-medium text-left hover:border-primary/30">
              Novos Planos
            </button>
            <button className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all text-sm font-medium text-left hover:border-primary/30">
              Adicionar Depoimento
            </button>
            <button className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all text-sm font-medium text-left hover:border-primary/30">
              Gerenciar Galeria
            </button>
            <button className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all text-sm font-medium text-left hover:border-primary/30">
              Configurações Site
            </button>
          </div>
        </div>

        <div className="glass p-8 rounded-3xl border border-white/5 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <TrendingUp size={24} className="text-primary" />
          </div>
          <h3 className="font-bold mb-2 uppercase">Status do Sistema</h3>
          <p className="text-white/50 text-sm italic">O site da SWELL está operando em alta performance.</p>
          <div className="mt-6 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Live</span>
          </div>
        </div>
      </div>
    </div>
  );
}
