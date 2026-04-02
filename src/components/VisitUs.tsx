"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

const details = [
  {
    icon: MapPin,
    label: "Address",
    value: "260 Bank St, Ottawa, ON",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon – Sat · Open Daily",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "Visit us in person",
  },
];

export function VisitUs() {
  return (
    <section id="visit" className="py-24 lg:py-36 bg-brand-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-dm text-brand-gold uppercase tracking-[0.28em] text-[0.68rem] font-medium mb-5 block">
              Find Us
            </span>
            <h2 className="font-cormorant text-brand-cream text-[clamp(2.8rem,6vw,5rem)] leading-[0.92] font-light italic mb-10">
              260 Bank St.
            </h2>

            <div className="space-y-6">
              {details.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-olive/30 border border-brand-gold/15 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="font-dm text-brand-cream/40 text-[0.68rem] uppercase tracking-[0.15em] mb-0.5">
                      {label}
                    </p>
                    <p className="font-dm text-brand-cream text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://maps.google.com/?q=260+Bank+St+Ottawa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-10 px-8 py-3.5 bg-brand-gold text-brand-espresso font-dm font-semibold text-sm tracking-[0.15em] uppercase rounded-full hover:bg-brand-gold-muted transition-colors"
            >
              Get Directions →
            </a>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="aspect-square rounded-2xl bg-brand-espresso border border-brand-gold/12 overflow-hidden relative"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <MapPin size={40} className="text-brand-gold/40" />
              <p className="font-cormorant text-brand-cream/30 text-2xl italic font-light">
                260 Bank St, Ottawa
              </p>
              <p className="font-dm text-brand-cream/20 text-xs uppercase tracking-[0.15em]">
                Opposite Tim Hortons
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
