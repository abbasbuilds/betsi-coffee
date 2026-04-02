"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-svh w-full overflow-hidden">
      {/* Real photo background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://cdn.menu-world.com/betsi-coffee-bank/1.jpg')`,
        }}
      />
      {/* Overlays — vertical base + strong left-side text protection */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-brand-dark/55 via-brand-dark/30 to-brand-dark/80" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-brand-dark/80 via-brand-dark/40 to-transparent" />

      {/* Content — bottom-left */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto flex flex-col justify-end px-6 pb-16 lg:px-12 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-[55%] lg:max-w-[50%]"
        >
          <span className="font-dm text-brand-gold uppercase tracking-[0.3em] text-[0.68rem] font-medium mb-5 block">
            260 Bank St · Ottawa · Ethiopian Specialty Coffee
          </span>

          <h1 className="font-cormorant leading-[0.85] flex flex-col" style={{ textShadow: "0 2px 24px rgba(0,0,0,0.4)" }}>
            <span className="text-[clamp(4.5rem,8vw,8.5rem)] text-white font-light italic">
              Bold as
            </span>
            <span className="text-[clamp(4.5rem,8vw,8.5rem)] text-brand-gold font-bold">
              Ethiopia.
            </span>
          </h1>

          <p className="font-dm text-white/70 text-[clamp(0.875rem,1.2vw,1rem)] max-w-[440px] mt-6 leading-relaxed">
            Hand-roasted Ethiopian specialty coffee, brewed fresh daily. Hiding
            inside a corner store at 260 Bank St — and outperforming every
            franchise on the block.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-10">
            <a
              href="#menu"
              className="px-8 py-3.5 bg-brand-green text-white font-dm font-semibold text-sm tracking-[0.15em] uppercase rounded-full hover:bg-brand-green-light transition-colors"
            >
              View Menu →
            </a>
            <a
              href="#visit"
              className="px-8 py-3.5 border border-white/35 text-white font-dm text-sm tracking-[0.15em] uppercase rounded-full hover:bg-white/10 transition-colors"
            >
              Find Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center">
        <div className="flex items-center gap-3 origin-right rotate-90 translate-y-14">
          <span className="font-dm text-brand-gold text-[0.62rem] tracking-[0.3em]">SCROLL</span>
          <div className="w-10 h-[1px] bg-brand-gold/60" />
        </div>
      </div>
    </section>
  );
}
