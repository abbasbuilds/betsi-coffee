"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    author: "Nim Ja",
    rating: 5,
    text: "You gotta have serious guts to open up a coffee shop opposite a Tim Hortons! I'm happy to tell you it was excellent. The quality and flavor truly shines — making it a must-visit for any coffee lover in Ottawa.",
  },
  {
    author: "Mel M",
    rating: 5,
    text: "It looks like a normal corner store from outside, but just inside the door there's an amazing coffee bar. They can do the whole range of specialty drinks you'd expect from a proper coffee shop. Incredible find.",
  },
  {
    author: "Just Hach",
    rating: 5,
    text: "If you can get past the fact that yes, this is in a corner store — definitely worth a look. Shockingly affordable and great quality. The coffee here genuinely rivals anything downtown has to offer.",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 lg:py-36 bg-brand-espresso">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="font-dm text-brand-gold uppercase tracking-[0.28em] text-[0.68rem] font-medium mb-4 block">
            People Talk
          </span>
          <h2 className="font-cormorant text-brand-cream text-[clamp(2.8rem,6vw,5rem)] leading-[0.92] font-light italic">
            Our Guestbook.
          </h2>
        </motion.div>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map(({ author, rating, text }, i) => (
            <motion.div
              key={author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="bg-brand-charcoal border border-brand-gold/12 rounded-2xl p-8 flex flex-col gap-5"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: rating }).map((_, si) => (
                  <span key={si} className="text-brand-gold text-sm">
                    ★
                  </span>
                ))}
              </div>

              <p className="font-dm text-brand-cream/65 text-sm leading-relaxed flex-1">
                &ldquo;{text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-brand-gold/10">
                <div className="w-8 h-8 rounded-full bg-brand-olive/40 flex items-center justify-center">
                  <span className="font-cormorant text-brand-gold text-sm font-semibold">
                    {author[0]}
                  </span>
                </div>
                <span className="font-dm text-brand-cream/50 text-xs tracking-wide">
                  — {author}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Aggregate */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="font-dm text-brand-cream/35 text-xs uppercase tracking-[0.2em]">
            4.8 stars · 4,853 Google reviews · 4,723 positive
          </p>
        </motion.div>
      </div>
    </section>
  );
}
