const items = [
  "⭐ 4.8 Rating",
  "4,853 Google Reviews",
  "Hand-Roasted Ethiopian Coffee",
  "260 Bank St · Ottawa",
  "4,723 Positive Reviews",
  "Cold Brew · Espresso · Pastries",
  "Roasted In-House Daily",
  "Open on Bank Street",
];

export function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden py-3.5 bg-brand-green border-y border-brand-green-dark">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 mx-6 font-dm text-[0.7rem] text-white/75 uppercase tracking-[0.18em]"
          >
            {item}
            <span className="text-brand-gold text-sm">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
