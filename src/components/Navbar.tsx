"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Menu",      href: "#menu" },
  { label: "Our Story", href: "#story" },
  { label: "Reviews",   href: "#reviews" },
  { label: "Find Us",   href: "#visit" },
];

export function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-espresso/97 backdrop-blur-sm py-3 border-b border-brand-gold/15 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className={`font-cormorant text-3xl sm:text-4xl italic font-light tracking-wide transition-colors ${
            scrolled ? "text-brand-gold" : "text-white"
          }`}
        >
          Melaku
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-dm text-xs uppercase tracking-[0.12em] transition-colors text-white/80 hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="https://www.ubereats.com/ca/store/betsi-coffee-bank/TeoY_xNQVby7gJPs7XWC2w"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex px-5 py-2 bg-brand-espresso text-white font-dm font-semibold text-xs tracking-[0.12em] uppercase rounded-full hover:bg-brand-espresso-light border border-brand-gold/20 transition-colors"
        >
          Order Now
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-espresso/98 backdrop-blur-md border-t border-brand-gold/10 px-6 py-6 space-y-4">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="block font-dm text-sm text-white/70 hover:text-brand-gold transition-colors uppercase tracking-[0.12em]"
            >
              {label}
            </a>
          ))}
          <a
            href="https://www.ubereats.com/ca/store/betsi-coffee-bank/TeoY_xNQVby7gJPs7XWC2w"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center px-5 py-3 bg-brand-gold text-brand-dark font-dm font-semibold text-sm tracking-[0.12em] uppercase rounded-full mt-2"
          >
            Order on UberEats
          </a>
        </div>
      )}
    </nav>
  );
}
