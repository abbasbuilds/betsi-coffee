"use client";

import { motion } from "framer-motion";
import { MapPin, ShoppingBag, Clock, Phone } from "lucide-react";

const details = [
  {
    icon: MapPin,
    label: "Address",
    value: "260 Bank St, Ottawa, ON K2P 1X4",
    href: "https://maps.google.com/?q=Melaku+Coffee+260+Bank+St+Ottawa+ON",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri 7:30 AM–7:00 PM · Sat 9:30 AM–7:00 PM · Sun 11:00 AM–7:00 PM",
    href: null,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(819) 208-9729",
    href: "tel:+18192089729",
  },
  {
    icon: ShoppingBag,
    label: "Order Ahead",
    value: "Available on UberEats — pickup & delivery",
    href: "https://www.ubereats.com/ca/store/betsi-coffee-bank/TeoY_xNQVby7gJPs7XWC2w",
  },
];

export function VisitUs() {
  return (
    <section id="visit" className="py-24 lg:py-36 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-dm text-brand-gold uppercase tracking-[0.28em] text-[0.68rem] font-medium mb-5 block">
              Find Us
            </span>
            <h2 className="font-cormorant text-brand-dark text-[clamp(2.8rem,6vw,5rem)] leading-[0.92] font-light italic mb-10">
              260 Bank St.
            </h2>

            <div className="space-y-6 mb-10">
              {details.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="font-dm text-brand-muted text-[0.68rem] uppercase tracking-[0.15em] mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-dm text-brand-dark text-sm hover:text-brand-green transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-dm text-brand-dark text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://maps.google.com/?q=Melaku+Coffee+260+Bank+St+Ottawa+ON"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-green text-white font-dm font-semibold text-sm tracking-[0.15em] uppercase rounded-full hover:bg-brand-green-light transition-colors"
            >
              Get Directions →
            </a>
          </motion.div>

          {/* Google Maps embed */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="h-[420px] rounded-2xl overflow-hidden border border-brand-border shadow-sm"
          >
            <iframe
              src="https://maps.google.com/maps?q=260+Bank+St,+Ottawa,+ON+K2P+1X4,+Canada&output=embed&z=16"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Melaku location — 260 Bank St, Ottawa"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
