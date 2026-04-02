"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    author: "Nim Ja",
    rating: 5,
    text: "You gotta have serious guts to open up a coffee shop opposite a Tim Hortons! I'm happy to tell you it was excellent. Feedback from earlier has clearly been taken on board — had a vanilla latte for under $5. Great.",
  },
  {
    author: "Mel M",
    rating: 5,
    text: "It looks like a normal corner store from outside, but just inside the door there's an amazing coffee bar. They can do the whole range of specialty drinks you'd expect from a full coffee shop. Incredible hidden gem.",
  },
  {
    author: "Just Hach",
    rating: 5,
    text: "If you can get past the fact that yes, this is in a corner store — definitely worth a look. Shockingly affordable and genuinely great quality. The coffee rivals anything downtown has to offer.",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="relative py-24 lg:py-36 overflow-hidden">
      {/* Photo background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://cdn.menu-world.com/betsi-coffee-bank/3.jpg')`,
        }}
      />
      <div className="absolute inset-0 z-[1] bg-brand-dark/75" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <span className="font-dm text-brand-gold uppercase tracking-[0.28em] text-[0.68rem] font-medium mb-3 block">
            People Talk
          </span>
          <h2 className="font-cormorant text-white text-[clamp(2.8rem,6vw,5rem)] leading-[0.92] font-light italic">
            Our Guestbook.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map(({ author, rating, text }, i) => (
            <motion.div
              key={author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="bg-white rounded-2xl p-7 flex flex-col gap-4"
            >
              <div className="flex gap-1">
                {Array.from({ length: rating }).map((_, si) => (
                  <span key={si} className="text-brand-gold text-sm">★</span>
                ))}
              </div>
              <p className="font-dm text-brand-text text-sm leading-relaxed flex-1">
                &ldquo;{text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-brand-border">
                <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center">
                  <span className="font-cormorant text-white text-sm font-semibold">
                    {author[0]}
                  </span>
                </div>
                <span className="font-dm text-brand-muted text-xs">— {author}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 text-center font-dm text-white/35 text-xs uppercase tracking-[0.2em]"
        >
          4.8 stars · 4,853 Google reviews · 4,723 positive
        </motion.p>
      </div>
    </section>
  );
}
