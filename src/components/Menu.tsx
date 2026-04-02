"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const food = [
  { name: "Beef Wraps", price: "$12.85", note: "Hearty, fresh, wrapped to order" },
  { name: "Betsi Breakfast Chicken Muffin", price: "$8.99", note: "A morning staple" },
  { name: "Bacon and Egg Muffin", price: "$7.69", note: "Classic done right" },
  { name: "Cinnamon Brioche", price: "$5.85", note: "Baked in-house, warm & fragrant" },
  { name: "Vegetarian Sambuusa", price: "Ask us", note: "Ethiopian classic" },
];

const drinks = [
  { name: "Caramel Cream Cold Brew", price: "$3.65", note: "Smooth, sweet, bold" },
  { name: "Vanilla Cream Cold Brew", price: "Ask us", note: "Creamy Ethiopian cold brew" },
  { name: "Iced Coffee with Milk", price: "Ask us", note: "Simple and perfect" },
  { name: "Brewed Ethiopian Coffee", price: "Ask us", note: "Hot or cold — the real thing" },
  { name: "Full Espresso Bar", price: "Ask us", note: "Latte, cappuccino, macchiato & more" },
];

export function Menu() {
  return (
    <section id="menu" className="py-24 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="font-dm text-brand-gold uppercase tracking-[0.28em] text-[0.68rem] font-medium mb-3 block">
            Taste the Best
          </span>
          <h2 className="font-cormorant text-brand-dark text-[clamp(2.8rem,6vw,5rem)] leading-[0.92] font-light italic">
            Discover Our Menu.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Food */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative h-52 rounded-2xl overflow-hidden mb-6">
              <Image
                src="https://images.unsplash.com/photo-1675782277944-cd30cf9ee8f0?w=800&auto=format&fit=crop&q=80"
                alt="Cinnamon Brioche — Betsi Coffee"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
              <span className="absolute bottom-4 left-5 font-cormorant text-white text-2xl italic font-light">
                Food
              </span>
            </div>
            <div className="divide-y divide-brand-border">
              {food.map(({ name, price, note }) => (
                <div key={name} className="flex items-start justify-between gap-4 py-4">
                  <div>
                    <p className="font-dm text-brand-dark font-medium text-sm">{name}</p>
                    <p className="font-dm text-brand-muted text-xs mt-0.5">{note}</p>
                  </div>
                  <span className="font-cormorant text-brand-green text-xl font-light shrink-0">
                    {price}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Drinks */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="relative h-52 rounded-2xl overflow-hidden mb-6">
              <Image
                src="https://images.unsplash.com/photo-1531835207745-506a1bc035d8?w=800&auto=format&fit=crop&q=80"
                alt="Iced Cold Brew — Betsi Coffee"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
              <span className="absolute bottom-4 left-5 font-cormorant text-white text-2xl italic font-light">
                Drinks
              </span>
            </div>
            <div className="divide-y divide-brand-border">
              {drinks.map(({ name, price, note }) => (
                <div key={name} className="flex items-start justify-between gap-4 py-4">
                  <div>
                    <p className="font-dm text-brand-dark font-medium text-sm">{name}</p>
                    <p className="font-dm text-brand-muted text-xs mt-0.5">{note}</p>
                  </div>
                  <span className="font-cormorant text-brand-green text-xl font-light shrink-0">
                    {price}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
