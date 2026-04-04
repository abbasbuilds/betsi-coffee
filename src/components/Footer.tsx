"use client";

import { MapPin, Clock, ShoppingBag, Instagram, Facebook } from "lucide-react";

const links = [
  { label: "Our Menu", href: "#menu" },
  { label: "Our Story", href: "#story" },
  { label: "Reviews", href: "#reviews" },
  { label: "Find Us", href: "#visit" },
  { label: "Order on UberEats ↗", href: "https://www.ubereats.com/ca/store/betsi-coffee-bank/TeoY_xNQVby7gJPs7XWC2w", external: true },
];

const hours = [
  { days: "Mon – Fri", time: "7:30 AM – 7:00 PM" },
  { days: "Saturday",  time: "9:30 AM – 7:00 PM" },
  { days: "Sunday",    time: "11:00 AM – 7:00 PM" },
];

export function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/[0.07]">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">

        {/* Col 1 — Brand */}
        <div>
          <span className="font-cormorant text-3xl text-white italic font-light tracking-wide block mb-3">
            Melaku
          </span>
          <p className="font-dm text-white/40 text-[0.8rem] leading-relaxed mb-8">
            Ethiopian specialty coffee, roasted in-house and brewed with ceremony.
            Hidden inside a corner store on Bank St — worth finding.
          </p>
          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/betsicoffee/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-brand-gold hover:border-brand-gold/40 transition-colors"
            >
              <Instagram size={15} />
            </a>
            <a
              href="https://www.facebook.com/betsicoffee/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-brand-gold hover:border-brand-gold/40 transition-colors"
            >
              <Facebook size={15} />
            </a>
            <a
              href="https://www.ubereats.com/ca/store/betsi-coffee-bank/TeoY_xNQVby7gJPs7XWC2w"
              target="_blank"
              rel="noopener noreferrer"
              className="font-dm text-[0.65rem] uppercase tracking-[0.2em] text-brand-gold border border-brand-gold/30 px-3 py-1.5 rounded-full hover:bg-brand-gold/10 transition-colors"
            >
              Order Now
            </a>
          </div>
        </div>

        {/* Col 2 — Quick Links */}
        <div>
          <p className="font-dm text-[0.65rem] uppercase tracking-[0.25em] text-white/30 mb-6">
            Navigate
          </p>
          <ul className="space-y-3">
            {links.map(({ label, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="font-dm text-[0.85rem] text-white/50 hover:text-white transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Visit */}
        <div>
          <p className="font-dm text-[0.65rem] uppercase tracking-[0.25em] text-white/30 mb-6">
            Visit Us
          </p>
          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <MapPin size={14} className="text-brand-gold mt-0.5 shrink-0" />
              <div>
                <a
                  href="https://maps.google.com/?q=Betsi+Coffee+260+Bank+St+Ottawa+ON"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-dm text-[0.85rem] text-white/60 hover:text-white transition-colors leading-relaxed"
                >
                  260 Bank St<br />Ottawa, ON K2P 1X4
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock size={14} className="text-brand-gold mt-0.5 shrink-0" />
              <div className="space-y-1">
                {hours.map(({ days, time }) => (
                  <p key={days} className="font-dm text-[0.8rem] text-white/50 leading-snug">
                    <span className="text-white/30">{days}</span>
                    {" · "}
                    <span>{time}</span>
                  </p>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ShoppingBag size={14} className="text-brand-gold mt-0.5 shrink-0" />
              <a
                href="https://www.ubereats.com/ca/store/betsi-coffee-bank/TeoY_xNQVby7gJPs7XWC2w"
                target="_blank"
                rel="noopener noreferrer"
                className="font-dm text-[0.85rem] text-white/60 hover:text-white transition-colors"
              >
                Available on UberEats
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-dm text-white/20 text-[0.72rem] tracking-[0.08em]">
            © {new Date().getFullYear()} Melaku · 260 Bank St, Ottawa
          </p>
          <p className="font-dm text-white/15 text-[0.72rem] tracking-[0.08em]">
            Ethiopian Specialty Coffee · In-House Roasted
          </p>
        </div>
      </div>
    </footer>
  );
}
