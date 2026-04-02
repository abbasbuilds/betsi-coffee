"use client";

import { motion } from "framer-motion";

const menuItems = [
  {
    category: "Food",
    items: [
      { name: "Beef Wraps", price: "$12.85", note: "Hearty and fresh" },
      { name: "Betsi Breakfast Chicken Muffin", price: "$8.99", note: "A morning staple" },
      { name: "Bacon and Egg Muffin", price: "$7.69", note: "Classic done right" },
      { name: "Cinnamon Brioche", price: "$5.85", note: "Baked in-house" },
      { name: "Vegetarian Sambuusa", price: "Market", note: "Ethiopian classic" },
    ],
  },
  {
    category: "Drinks",
    items: [
      { name: "Caramel Cream Cold Brew", price: "$3.65", note: "Smooth, sweet, bold" },
      { name: "Vanilla Cream Cold Brew", price: "Market", note: "Ethiopian cold brew" },
      { name: "Iced Coffee with Milk", price: "Market", note: "Simple and perfect" },
      { name: "Brewed Ethiopian Coffee", price: "Market", note: "Hot or cold" },
      { name: "Espresso Drinks", price: "Market", note: "Full specialty bar" },
    ],
  },
];

export function Menu() {
  return (
    <section id="menu" className="py-24 lg:py-36 bg-brand-charcoal">
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
            Discover Our Menu
          </span>
          <h2 className="font-cormorant text-brand-cream text-[clamp(2.8rem,6vw,5rem)] leading-[0.92] font-light italic">
            Taste the Best.
          </h2>
        </motion.div>

        {/* Two-column categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {menuItems.map(({ category, items }, ci) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: ci * 0.1 }}
              className="border border-brand-gold/12 rounded-2xl overflow-hidden"
            >
              <div className="px-8 py-5 bg-brand-olive/20 border-b border-brand-gold/12">
                <span className="font-cormorant text-brand-gold text-2xl italic font-light">
                  {category}
                </span>
              </div>
              <div className="divide-y divide-brand-gold/8">
                {items.map(({ name, price, note }) => (
                  <div
                    key={name}
                    className="px-8 py-5 flex items-start justify-between gap-4 hover:bg-brand-olive/10 transition-colors"
                  >
                    <div>
                      <p className="font-dm text-brand-cream font-medium text-sm">
                        {name}
                      </p>
                      <p className="font-dm text-brand-cream/40 text-xs mt-0.5">
                        {note}
                      </p>
                    </div>
                    <span className="font-cormorant text-brand-gold text-xl font-light shrink-0">
                      {price}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
