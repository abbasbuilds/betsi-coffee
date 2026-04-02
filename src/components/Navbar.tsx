"use client";

import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-brand-espresso/96 backdrop-blur-md py-3 border-b border-brand-gold/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <span className="font-cormorant text-2xl text-brand-cream tracking-wide italic font-light">
          Betsi Coffee
        </span>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Menu", href: "#menu" },
            { label: "Our Story", href: "#story" },
            { label: "Reviews", href: "#reviews" },
            { label: "Find Us", href: "#visit" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-dm text-xs text-brand-cream/60 hover:text-brand-gold transition-colors tracking-[0.12em] uppercase"
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#menu"
          className="px-5 py-2 bg-brand-gold text-brand-espresso font-dm font-semibold text-xs tracking-[0.12em] uppercase rounded-full hover:bg-brand-gold-muted transition-colors"
        >
          Order Now
        </a>
      </div>
    </nav>
  );
}
