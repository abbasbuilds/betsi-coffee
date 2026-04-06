"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-svh w-full overflow-hidden">
      {/* Mural background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('/ethio-image.jpeg')`,
          backgroundPosition: "center top",
        }}
      />
      {/* Overlays — vertical base + left-side text protection */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-brand-dark/40 via-brand-dark/10 to-brand-dark/55" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-brand-dark/75 via-brand-dark/30 to-transparent" />

      {/* Content — vertically centered, left-anchored */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto flex flex-col justify-center px-6 pt-20 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-[52%] lg:max-w-[46%]"
        >
          <span className="font-dm text-brand-gold uppercase tracking-[0.3em] text-[0.68rem] font-medium mb-5 block">
            Ethiopian Coffee
          </span>

          <h1
            className="font-cormorant leading-[0.9] flex flex-col"
            style={{ textShadow: "0 2px 32px rgba(0,0,0,0.55)" }}
          >
            <span className="text-[clamp(3.2rem,5.5vw,6.5rem)] text-white font-bold">
              Rich &amp; Flavorful
            </span>
            <span className="text-[clamp(3.2rem,5.5vw,6.5rem)] text-brand-gold font-bold italic">
              Brew.
            </span>
          </h1>

          <p className="font-dm text-white/70 text-[clamp(0.875rem,1.1vw,0.975rem)] max-w-[420px] mt-6 leading-relaxed">
            Experience the bold and aromatic taste of our brewed Ethiopian
            coffee. Sip and savour the authentic flavours that will transport
            you to the coffee farms of Ethiopia — now at 260 Bank St, Ottawa.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-10">
            <a
              href="#menu"
              className="px-8 py-3.5 bg-brand-espresso text-white font-dm font-semibold text-sm tracking-[0.15em] uppercase rounded-full hover:bg-brand-espresso-light transition-colors"
            >
              View Menu →
            </a>
            <a
              href="https://www.ubereats.com/ca/store/betsi-coffee-bank/TeoY_xNQVby7gJPs7XWC2w"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-brand-gold/60 text-brand-gold font-dm text-sm tracking-[0.15em] uppercase rounded-full hover:bg-brand-gold/10 transition-colors"
            >
              Order on UberEats
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
