"use client";

import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="py-32 lg:py-44 bg-brand-olive/20 border-y border-brand-gold/10 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,_rgba(200,136,26,0.08)_0%,_transparent_70%)]" />

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
          <h2 className="font-cormorant text-brand-cream text-[clamp(3rem,8vw,7rem)] leading-[0.9] font-light italic mb-8">
            The best cup you&apos;ll
            <br />
            have all week.
          </h2>
          <p className="font-dm text-brand-cream/50 text-[0.95rem] leading-relaxed mb-12 max-w-xl mx-auto">
            260 Bank St. It looks like a corner store. Walk in anyway.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#menu"
              className="px-10 py-4 bg-brand-gold text-brand-espresso font-dm font-semibold text-sm tracking-[0.15em] uppercase rounded-full hover:bg-brand-gold-muted transition-colors"
            >
              View Menu
            </a>
            <a
              href="https://maps.google.com/?q=260+Bank+St+Ottawa"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border border-brand-cream/20 text-brand-cream font-dm text-sm tracking-[0.15em] uppercase rounded-full hover:bg-brand-cream/6 transition-colors"
            >
              Get Directions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
