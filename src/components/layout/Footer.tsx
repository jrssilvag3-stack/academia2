"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Camera, Play, Globe } from "lucide-react";

// SVGs customizados para redes sociais (independente de versão da biblioteca)
const Instagram = ({ size }: { size: number | string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const Facebook = ({ size }: { size: number | string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const Youtube = ({ size }: { size: number | string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.42 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.42-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
);

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="text-3xl font-black text-primary tracking-tighter uppercase italic text-glow">
              SWELL <span className="text-sm not-italic font-bold opacity-50 tracking-normal">GUARATUBA</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              A melhor academia de Guaratuba. Elevando o padrão de treinamento e performance no litoral paranaense.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-background transition-all" aria-label="Instagram">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-background transition-all" aria-label="Facebook">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-background transition-all" aria-label="Youtube">
                <Youtube size={20} />
              </Link>
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
              <li className="flex items-center gap-3 focus:outline-none"><Phone size={18} className="text-primary" /> (47) 99911-6889</li>
              <li className="flex items-center gap-3 focus:outline-none"><Mail size={18} className="text-primary" /> contato@swellacademia.com.br</li>
              <li className="flex items-center gap-3 focus:outline-none"><MapPin size={18} className="text-primary" /> R. dos Andradas, 444 - Brejatuba, Guaratuba - PR</li>
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
            © {new Date().getFullYear()} SWELL Academia Guaratuba. Performance de Elite no Litoral.
          </p>
        </div>
      </div>
    </footer>
  );
}
