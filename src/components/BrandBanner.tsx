"use client";

import { motion } from "framer-motion";

export function BrandBanner() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: "clamp(280px, 45vw, 560px)" }}>
      {/* Brand image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/melaku-brand.jpeg')` }}
      />
      {/* Subtle edge vignette so it bleeds into surrounding sections */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-espresso/70 via-transparent to-brand-espresso/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-espresso/40 via-transparent to-brand-espresso/40" />

      {/* Optional entrance animation overlay */}
      <motion.div
        className="absolute inset-0 bg-brand-espresso"
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      />
    </section>
  );
}
