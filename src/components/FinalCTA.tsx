"use client";

import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="relative py-32 lg:py-44 bg-brand-green overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,_rgba(255,245,225,0.06)_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <span className="font-dm text-brand-gold uppercase tracking-[0.3em] text-[0.68rem] font-medium mb-6 block">
            Come Find Us
          </span>
          <h2 className="font-cormorant text-white text-[clamp(3rem,8vw,7rem)] leading-[0.9] font-light italic mb-8">
            The best cup you&apos;ll have all week.
          </h2>
          <p className="font-dm text-white/60 text-[0.95rem] leading-relaxed mb-12 max-w-xl mx-auto">
            260 Bank St. It looks like a corner store on the outside.
            Walk in anyway.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#menu"
              className="px-10 py-4 bg-white text-brand-green font-dm font-semibold text-sm tracking-[0.15em] uppercase rounded-full hover:bg-brand-cream transition-colors"
            >
              View Menu
            </a>
            <a
              href="https://maps.google.com/?q=Betsi+Coffee+260+Bank+St+Ottawa+ON"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border border-white/30 text-white font-dm text-sm tracking-[0.15em] uppercase rounded-full hover:bg-white/10 transition-colors"
            >
              Get Directions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
