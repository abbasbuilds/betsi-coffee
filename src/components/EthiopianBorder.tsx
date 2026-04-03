/**
 * EthiopianBorder — a tibeb-style SVG divider strip.
 * Repeating nested-diamond motif in Ethiopian flag colors (red / gold / green)
 * with thin color stripes top and bottom.
 *
 * Usage:
 *   <EthiopianBorder id="tb-1" />          ← standard (stripes: red top, green bottom)
 *   <EthiopianBorder id="tb-2" flip />     ← flipped (stripes: green top, red bottom)
 */
export function EthiopianBorder({
  id = "tb",
  flip = false,
  height = 32,
}: {
  id?: string;
  flip?: boolean;
  height?: number;
}) {
  return (
    <svg
      width="100%"
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", transform: flip ? "scaleY(-1)" : undefined }}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={id}
          x="0"
          y="0"
          width="48"
          height={height}
          patternUnits="userSpaceOnUse"
        >
          {/* ── Stripe: Ethiopian red ── */}
          <rect x="0" y="0" width="48" height="3" fill="#DA291C" />
          {/* ── Stripe: bright gold ── */}
          <rect x="0" y="3" width="48" height="2" fill="#FCDD09" />

          {/* ── Diamond band background ── */}
          <rect x="0" y="5" width="48" height={height - 10} fill="#1C2010" />

          {/* ── Outer diamond — warm gold ── */}
          <polygon
            points={`0,${height / 2} 24,5 48,${height / 2} 24,${height - 5}`}
            fill="#C59D5F"
          />
          {/* ── Ring 1 — dark ── */}
          <polygon
            points={`5,${height / 2} 24,9 43,${height / 2} 24,${height - 9}`}
            fill="#1C2010"
          />
          {/* ── Ring 2 — Ethiopian red ── */}
          <polygon
            points={`9,${height / 2} 24,11 39,${height / 2} 24,${height - 11}`}
            fill="#DA291C"
          />
          {/* ── Ring 3 — bright gold ── */}
          <polygon
            points={`14,${height / 2} 24,13 34,${height / 2} 24,${height - 13}`}
            fill="#FCDD09"
          />
          {/* ── Center — Ethiopian green ── */}
          <circle cx="24" cy={height / 2} r="2.4" fill="#078930" />

          {/* ── Stripe: bright gold ── */}
          <rect x="0" y={height - 5} width="48" height="2" fill="#FCDD09" />
          {/* ── Stripe: Ethiopian green ── */}
          <rect x="0" y={height - 3} width="48" height="3" fill="#078930" />
        </pattern>
      </defs>
      <rect width="100%" height={height} fill={`url(#${id})`} />
    </svg>
  );
}
