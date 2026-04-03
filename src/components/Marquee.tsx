import { EthiopianBorder } from "./EthiopianBorder";

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

// Cycling separator colors: Ethiopian flag
const sepColors = ["#DA291C", "#FCDD09", "#078930", "#FCDD09"];

export function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <EthiopianBorder id="tb-marquee-top" />
      <div className="py-3.5 bg-brand-dark border-y border-white/[0.06]">
        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 mx-6 font-dm text-[0.7rem] text-white/80 uppercase tracking-[0.18em]"
            >
              {item}
              <span
                className="text-sm font-bold"
                style={{ color: sepColors[i % sepColors.length] }}
              >
                ◆
              </span>
            </span>
          ))}
        </div>
      </div>
      <EthiopianBorder id="tb-marquee-bot" flip />
    </div>
  );
}
