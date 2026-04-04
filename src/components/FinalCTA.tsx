"use client";

import { motion } from "framer-motion";
import { EthiopianBorder } from "./EthiopianBorder";

/* Subtle repeating diamond outline grid — adds depth without competing with text */
const DIAMOND_BG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cpolygon points='40,4 76,40 40,76 4,40' fill='none' stroke='rgba(255,255,255,0.07)' stroke-width='1.5'/%3E%3Cpolygon points='40,16 64,40 40,64 16,40' fill='none' stroke='rgba(252,221,9,0.08)' stroke-width='1'/%3E%3C/svg%3E")`;

export function FinalCTA() {
  return (
    <div className="overflow-hidden">
      <EthiopianBorder id="tb-cta-top" />

      <section className="relative py-32 lg:py-44 bg-brand-green overflow-hidden">
        {/* Diamond grid texture */}
        <div
          className="absolute inset-0 z-0"
          style={{ backgroundImage: DIAMOND_BG, backgroundSize: "80px 80px" }}
        />

        {/* Radial glow center */}
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,_rgba(232,184,75,0.09)_0%,_transparent_70%)]" />

        {/* Corner tibeb accents — top-left & bottom-right */}
        <div
          className="absolute top-0 left-0 w-40 h-40 z-[2] opacity-20"
          style={{
            background:
              "radial-gradient(circle at top left, #DA291C 0%, #FCDD09 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-40 h-40 z-[2] opacity-20"
          style={{
            background:
              "radial-gradient(circle at bottom right, #078930 0%, #FCDD09 40%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            {/* Eyebrow with decorative diamonds */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-[#DA291C] text-xs">◆</span>
              <span className="font-dm text-brand-gold-vivid uppercase tracking-[0.3em] text-[0.68rem] font-medium">
                Come Find Us
              </span>
              <span className="text-[#078930] text-xs">◆</span>
            </div>

            <h2 className="font-cormorant text-white text-[clamp(3rem,8vw,7rem)] leading-[0.9] font-light italic mb-8">
              The best cup you&apos;ll have{" "}
              <span className="text-brand-gold-vivid">all week.</span>
            </h2>

            <p className="font-dm text-white/60 text-[0.95rem] leading-relaxed mb-12 max-w-xl mx-auto">
              260 Bank St. It looks like a corner store on the outside.
              Walk in anyway.
            </p>

            {/* Thin gold divider */}
            <div className="flex items-center justify-center gap-3 mb-10 opacity-40">
              <div className="w-16 h-[1px] bg-brand-gold" />
              <span className="text-[#FCDD09] text-[10px]">◆</span>
              <div className="w-16 h-[1px] bg-brand-gold" />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://www.ubereats.com/ca/store/betsi-coffee-bank/TeoY_xNQVby7gJPs7XWC2w"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-white text-brand-green font-dm font-semibold text-sm tracking-[0.15em] uppercase rounded-full hover:bg-brand-cream transition-colors"
              >
                Order on UberEats ↗
              </a>
              <a
                href="#menu"
                className="px-10 py-4 border border-white/30 text-white font-dm text-sm tracking-[0.15em] uppercase rounded-full hover:bg-white/10 transition-colors"
              >
                View Menu
              </a>
              <a
                href="https://maps.google.com/?q=Melaku+Coffee+260+Bank+St+Ottawa+ON"
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

      <EthiopianBorder id="tb-cta-bot" flip />
    </div>
  );
}
