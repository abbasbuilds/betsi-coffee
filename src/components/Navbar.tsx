"use client";

import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/97 backdrop-blur-sm py-3 border-b border-brand-border shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <span
          className={`font-cormorant text-2xl italic font-light tracking-wide transition-colors ${
            scrolled ? "text-brand-green" : "text-white"
          }`}
        >
          Melaku
        </span>

        {/* Links */}
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
              className={`font-dm text-xs uppercase tracking-[0.12em] transition-colors ${
                scrolled
                  ? "text-brand-text hover:text-brand-green"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://www.ubereats.com/ca/store/betsi-coffee-bank/TeoY_xNQVby7gJPs7XWC2w"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 bg-brand-green text-white font-dm font-semibold text-xs tracking-[0.12em] uppercase rounded-full hover:bg-brand-green-light transition-colors"
        >
          Order Now
        </a>
      </div>
    </nav>
  );
}
