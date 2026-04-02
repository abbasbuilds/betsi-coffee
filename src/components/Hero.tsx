"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-svh w-full overflow-hidden bg-brand-espresso">
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-espresso via-brand-charcoal to-brand-espresso" />
        {/* Warm olive glow — centre-right */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_72%_38%,_rgba(58,75,40,0.45)_0%,_transparent_70%)]" />
        {/* Gold glow — bottom left */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_15%_80%,_rgba(200,136,26,0.12)_0%,_transparent_65%)]" />
      </div>

      {/* Content — bottom-left anchored like hookah-masterz */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto flex flex-col justify-end px-6 pb-16 lg:px-12 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="font-dm text-brand-gold uppercase tracking-[0.3em] text-[0.68rem] font-medium mb-6 block">
            260 Bank St · Ottawa · Ethiopian Specialty Coffee
          </span>

          <h1 className="font-cormorant leading-[0.88] flex flex-col">
            <span className="text-[clamp(4rem,11vw,9.5rem)] text-brand-cream font-light italic">
              Bold as
            </span>
            <span className="text-[clamp(4rem,11vw,9.5rem)] text-brand-gold font-semibold">
              Ethiopia.
            </span>
          </h1>

          <p className="font-dm text-brand-cream/60 text-[clamp(0.875rem,1.4vw,1.05rem)] max-w-[480px] mt-5 leading-relaxed">
            Hand-roasted Ethiopian specialty coffee, brewed fresh daily. Hiding
            inside a corner store at 260 Bank St — and outperforming every
            franchise on the block.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-10">
            <a
              href="#menu"
              className="px-8 py-3.5 bg-brand-gold text-brand-espresso font-dm font-semibold text-sm tracking-[0.15em] uppercase rounded-full hover:bg-brand-gold-muted transition-colors"
            >
              View Menu →
            </a>
            <a
              href="#visit"
              className="px-8 py-3.5 border border-brand-cream/20 text-brand-cream font-dm text-sm tracking-[0.15em] uppercase rounded-full hover:bg-brand-cream/6 transition-colors"
            >
              Find Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center gap-3">
        <div className="flex items-center gap-3 origin-right rotate-90 translate-y-16">
          <span className="font-dm text-brand-gold text-[0.62rem] tracking-[0.3em] font-semibold">
            SCROLL
          </span>
          <div className="w-10 h-[1px] bg-brand-gold/50" />
        </div>
      </div>
    </section>
  );
}
