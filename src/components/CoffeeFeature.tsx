"use client";

import { motion } from "framer-motion";

export function CoffeeFeature() {
  return (
    <section className="relative h-[55vh] min-h-[420px] overflow-hidden">
      {/* Original coffee photo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1630861412757-d9743d318312?w=1920&q=85&fit=crop&crop=center')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-brand-dark/30" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-lg"
        >
          <span className="font-dm text-brand-gold uppercase tracking-[0.28em] text-[0.68rem] font-medium mb-4 block">
            Roasted In-House
          </span>
          <h2 className="font-cormorant text-white text-[clamp(2.4rem,5vw,4.2rem)] leading-[0.92] font-bold italic mb-5">
            Every cup tells a story<br />from the source.
          </h2>
          <p className="font-dm text-white/60 text-sm leading-relaxed max-w-sm">
            Single-origin Ethiopian beans, roasted in small batches and brewed
            fresh daily. From Yirgacheffe highlands to your hands.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
