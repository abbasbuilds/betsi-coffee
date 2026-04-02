"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "4.8", label: "Star Rating" },
  { value: "4,853", label: "Google Reviews" },
  { value: "11+", label: "Menu Items" },
  { value: "4,723", label: "Positive Reviews" },
];

export function Story() {
  return (
    <section id="story" className="py-24 lg:py-36 bg-brand-espresso">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="font-dm text-brand-gold uppercase tracking-[0.28em] text-[0.68rem] font-medium mb-5 block">
              Our Story
            </span>
            <h2 className="font-cormorant text-brand-cream text-[clamp(2.8rem,6vw,5rem)] leading-[0.92] font-light italic mb-8">
              The Café That Had Guts.
            </h2>
            <div className="space-y-5 font-dm text-brand-cream/60 text-[0.95rem] leading-relaxed">
              <p>
                It takes something to open a specialty coffee bar directly
                opposite the biggest coffee chain in Canada. Betsi Coffee did it
                anyway — and Ottawa noticed.
              </p>
              <p>
                Tucked inside what looks like a corner store on Bank Street,
                Betsi Coffee is a genuine Ethiopian specialty experience.
                Walk in, and you&apos;ll find a full espresso bar, hand-roasted
                Ethiopian coffee, and drinks that hold their own against
                anything a franchise can produce.
              </p>
              <p>
                Every bean is roasted in-house. Every cup is brewed with intent.
                The pastries are real. The prices are honest. The coffee
                speaks for itself.
              </p>
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="grid grid-cols-2 gap-px bg-brand-gold/10 border border-brand-gold/10 rounded-2xl overflow-hidden"
          >
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="bg-brand-charcoal px-8 py-10 flex flex-col gap-2"
              >
                <span className="font-cormorant text-[3.2rem] text-brand-gold font-light leading-none">
                  {value}
                </span>
                <span className="font-dm text-brand-cream/50 text-xs uppercase tracking-[0.15em]">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
