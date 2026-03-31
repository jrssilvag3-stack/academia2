"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { title: "Área de Musculação", src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800" },
  { title: "Zona de Performance", src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800" },
  { title: "Cross Training", src: "https://images.unsplash.com/photo-1534367610445-39497eef8193?q=80&w=800" },
  { title: "Recovery Area", src: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=800" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-surface/10 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter"
          >
            NOSSA <span className="text-primary text-glow font-black italic">ESTRUTURA</span>
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(0,243,255,0.8)]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[400px] overflow-hidden rounded-2xl cursor-pointer"
            >
              <img 
                src={img.src} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-6 left-6">
                <p className="text-primary text-[10px] font-black tracking-widest uppercase mb-1 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">Explorar</p>
                <h4 className="text-xl font-bold uppercase tracking-tighter">{img.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
