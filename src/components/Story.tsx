"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "4.8★", label: "Star Rating" },
  { value: "4,853", label: "Google Reviews" },
  { value: "11+", label: "Menu Items" },
  { value: "4,723", label: "Positive Reviews" },
];

export function Story() {
  return (
    <section id="story" className="py-24 lg:py-36 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-dm text-brand-gold uppercase tracking-[0.28em] text-[0.68rem] font-medium mb-5 block">
              Our Story
            </span>
            <h2 className="font-cormorant text-brand-dark text-[clamp(2.8rem,6vw,5rem)] leading-[0.92] font-light italic mb-8">
              The Café That Had Guts.
            </h2>
            <div className="space-y-5 font-dm text-brand-text text-[0.95rem] leading-relaxed">
              <p>
                It takes something to open a specialty coffee bar directly
                opposite the biggest coffee chain in Canada. Betsi Coffee did
                it anyway — and Ottawa noticed.
              </p>
              <p>
                Tucked inside what looks like a corner store on Bank Street,
                Betsi Coffee is a genuine Ethiopian specialty experience.
                Walk in and you&apos;ll find a full espresso bar, hand-roasted
                Ethiopian coffee, and drinks that rival anything a franchise
                produces.
              </p>
              <p>
                Every bean is roasted in-house. Every cup brewed with intent.
                The pastries are real. The prices are honest.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-px mt-10 border border-brand-border rounded-xl overflow-hidden">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-white px-6 py-7 flex flex-col gap-1"
                >
                  <span className="font-cormorant text-brand-green text-[2.6rem] font-light leading-none">
                    {value}
                  </span>
                  <span className="font-dm text-brand-muted text-[0.68rem] uppercase tracking-[0.15em]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Photos */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            {/* Main shop photo */}
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <Image
                src="https://cdn.menu-world.com/betsi-coffee-bank/2.jpg"
                alt="Betsi Coffee interior — Bank St Ottawa"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            {/* Ethiopian ceremony photo */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1631166092772-d07aed54b9a0?w=600&auto=format&fit=crop&q=80"
                  alt="Ethiopian coffee jebena ceremony"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1619109961290-691f165fb72d?w=600&auto=format&fit=crop&q=80"
                  alt="Freshly brewed Ethiopian coffee"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
