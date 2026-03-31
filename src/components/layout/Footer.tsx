"use client";

import Link from "next/link";
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="text-3xl font-black text-primary tracking-tighter uppercase italic text-glow">
              SWELL
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              Elevando o padrão de treinamento e performance. Onde atletas de elite e iniciantes se encontram para superar limites.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-background transition-all" aria-label="Rede Social">
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li><Link href="#benefícios" className="hover:text-primary transition-colors">Benefícios</Link></li>
              <li><Link href="#planos" className="hover:text-primary transition-colors">Planos</Link></li>
              <li><Link href="#gallery" className="hover:text-primary transition-colors">Estrutura</Link></li>
              <li><Link href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Contato</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li className="flex items-center gap-3 focus:outline-none"><Phone size={18} className="text-primary" /> (11) 99999-9999</li>
              <li className="flex items-center gap-3 focus:outline-none"><Mail size={18} className="text-primary" /> contato@swell.com</li>
              <li className="flex items-center gap-3 focus:outline-none"><MapPin size={18} className="text-primary" /> Av. Paulista, 1000 - São Paulo</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Newsletter</h4>
            <p className="text-white/50 text-sm mb-4">Receba dicas de treino e novidades.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary/50 flex-grow text-white"
              />
              <button className="bg-primary text-background font-bold px-4 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity uppercase tracking-tighter">
                OK
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 text-center">
          <p className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-bold">
            © {new Date().getFullYear()} SWELL Training Center. Built for Performance.
          </p>
        </div>
      </div>
    </footer>
  );
}
