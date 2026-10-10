/**
 * Small, distinct engineering-inspired motif for each engagement model.
 * Pure SVG + CSS (group-hover) animation — no JS, no layout cost.
 *
 * custom       → concept dot travels a path to a launch square (idea → launch)
 * subscription → a queue of bars flowing through, one highlighted (active)
 * fde          → a core node embedded among connected business nodes
 */
export function ModelMotif({
  motif,
  className,
}: {
  motif: "custom" | "subscription" | "fde";
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id={`mm-gold-${motif}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#F4E5A1" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
      </defs>

      {motif === "custom" && (
        <>
          <path
            d="M14 54 C 36 54, 44 18, 66 18 S 92 40, 106 40"
            stroke={`url(#mm-gold-${motif})`}
            strokeWidth="2"
            strokeDasharray="3 5"
            className="opacity-70"
          />
          <circle cx="14" cy="54" r="5" fill="#00754A" />
          <rect
            x="96"
            y="30"
            width="20"
            height="20"
            rx="4"
            fill="#006241"
            stroke={`url(#mm-gold-${motif})`}
            strokeWidth="1.5"
          />
          <circle
            cx="14"
            cy="54"
            r="3.5"
            fill={`url(#mm-gold-${motif})`}
            className="motif-dot"
          />
        </>
      )}

      {motif === "subscription" && (
        <>
          {[0, 1, 2, 3].map((i) => (
            <rect
              key={i}
              x={12 + i * 26}
              y={i === 1 ? 20 : 28}
              width="18"
              height={i === 1 ? 32 : 24}
              rx="4"
              fill={i === 1 ? "#006241" : "#E6EFE9"}
              stroke={`url(#mm-gold-${motif})`}
              strokeWidth="1.5"
              className={i === 1 ? "motif-active" : "opacity-80"}
            />
          ))}
          <path
            d="M6 58 L114 58"
            stroke={`url(#mm-gold-${motif})`}
            strokeWidth="1.5"
            className="opacity-50"
          />
        </>
      )}

      {motif === "fde" && (
        <>
          <g stroke={`url(#mm-gold-${motif})`} strokeWidth="1.5" className="opacity-60">
            <line x1="60" y1="36" x2="24" y2="16" />
            <line x1="60" y1="36" x2="98" y2="16" />
            <line x1="60" y1="36" x2="22" y2="56" />
            <line x1="60" y1="36" x2="100" y2="54" />
          </g>
          {[
            [24, 16],
            [98, 16],
            [22, 56],
            [100, 54],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="5" fill="#E6EFE9" stroke={`url(#mm-gold-${motif})`} strokeWidth="1.5" />
          ))}
          <circle cx="60" cy="36" r="11" fill="#006241" stroke={`url(#mm-gold-${motif})`} strokeWidth="2" className="motif-core" />
          <path d="M53 36 L63 32 L63 35 L69 36 L63 37 L63 40 Z" fill={`url(#mm-gold-${motif})`} />
        </>
      )}
    </svg>
  );
}
