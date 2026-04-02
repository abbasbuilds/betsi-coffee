"use client";

import { Clock } from "lucide-react";

const hours = [
  { days: "Mon – Fri", time: "7:30 AM – 7:00 PM" },
  { days: "Saturday", time: "9:30 AM – 7:00 PM" },
  { days: "Sunday", time: "11:00 AM – 7:00 PM" },
];

function isOpenNow(): boolean {
  const now = new Date();
  const day = now.getDay(); // 0 = Sun, 1 = Mon … 6 = Sat
  const hour = now.getHours() + now.getMinutes() / 60;

  if (day >= 1 && day <= 5) return hour >= 7.5 && hour < 19;   // Mon–Fri 7:30–19:00
  if (day === 6) return hour >= 9.5 && hour < 19;               // Sat 9:30–19:00
  if (day === 0) return hour >= 11 && hour < 19;                // Sun 11:00–19:00
  return false;
}

export function HoursStrip() {
  const open = isOpenNow();

  return (
    <div className="bg-brand-dark border-y border-white/[0.07] py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
        {/* Status pill */}
        <span
          className={`inline-flex items-center gap-1.5 font-dm text-[0.65rem] uppercase tracking-[0.2em] font-semibold px-3 py-1 rounded-full ${
            open
              ? "bg-brand-green/20 text-brand-green border border-brand-green/30"
              : "bg-white/5 text-white/40 border border-white/10"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${open ? "bg-brand-green animate-pulse" : "bg-white/30"}`}
          />
          {open ? "Open Now" : "Closed"}
        </span>

        {/* Divider */}
        <div className="hidden sm:block w-[1px] h-4 bg-white/15" />

        {/* Clock icon */}
        <Clock size={13} className="text-brand-gold hidden sm:block" />

        {/* Hours */}
        {hours.map(({ days, time }, i) => (
          <div key={days} className="flex items-center gap-6">
            <span className="font-dm text-[0.72rem] text-white/50 tracking-[0.08em]">
              {days}&nbsp;
              <span className="text-white/80 font-medium">{time}</span>
            </span>
            {i < hours.length - 1 && (
              <div className="hidden md:block w-[1px] h-3 bg-white/15" />
            )}
          </div>
        ))}

        {/* Divider */}
        <div className="hidden sm:block w-[1px] h-4 bg-white/15" />

        {/* UberEats quick link */}
        <a
          href="https://www.ubereats.com/ca/store/betsi-coffee-bank/TeoY_xNQVby7gJPs7XWC2w"
          target="_blank"
          rel="noopener noreferrer"
          className="font-dm text-[0.65rem] uppercase tracking-[0.2em] text-brand-gold hover:text-brand-gold/70 transition-colors font-semibold"
        >
          Order Delivery ↗
        </a>
      </div>
    </div>
  );
}
