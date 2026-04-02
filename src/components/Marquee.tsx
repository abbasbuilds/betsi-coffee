const items = [
  "⭐ 4.8 Rating",
  "4,853 Reviews",
  "Hand-Roasted Ethiopian Coffee",
  "260 Bank St · Ottawa",
  "4,723 Positive Reviews",
  "Cold Brew · Espresso · Pastries",
  "Roasted In-House",
  "Specialty Coffee Since Day One",
];

export function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden py-4 bg-brand-olive/20 border-y border-brand-gold/12">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 mx-6 font-dm text-[0.72rem] text-brand-cream/55 uppercase tracking-[0.18em]"
          >
            {item}
            <span className="text-brand-gold/50 text-base">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
