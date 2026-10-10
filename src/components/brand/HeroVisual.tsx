"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * An abstract, tasteful composition of software "components" assembling into a
 * working system — the idea→software metaphor. Decorative only (aria-hidden).
 * Respects prefers-reduced-motion: renders a calm, static version.
 *
 * variant "light" reads on cream backgrounds; "dark" reads on emerald.
 */
export function HeroVisual({
  className,
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  const reduce = useReducedMotion();
  const dark = variant === "dark";

  // Palette that keeps contrast on either background.
  const blockFill = "#E6EFE9";
  const blockText = "#00754A";
  const accentBlockFill = dark ? "#F8F6F0" : "#006241";
  const accentBlockText = dark ? "#00754A" : "#F8F6F0";
  const coreFill = dark ? "#F8F6F0" : "#006241";
  const coreDot = dark ? "#006241" : "#006241";
  const glowColor = dark ? "#F4E5A1" : "#00754A";

  const float = (dy: number, delay: number) =>
    reduce
      ? {}
      : {
          animate: { y: [0, dy, 0] },
          transition: {
            duration: 5 + delay,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay,
          },
        };

  return (
    <div className={className} aria-hidden="true">
      <svg
        viewBox="0 0 420 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        role="presentation"
      >
        <defs>
          <linearGradient id="hv-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#F4E5A1" />
            <stop offset="100%" stopColor="#B8860B" />
          </linearGradient>
          <radialGradient id="hv-glow" cx="50%" cy="45%" r="60%">
            <stop offset="0%" stopColor={glowColor} stopOpacity={dark ? 0.16 : 0.14} />
            <stop offset="100%" stopColor={glowColor} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* soft organic glow */}
        <circle cx="210" cy="195" r="190" fill="url(#hv-glow)" />

        {/* connecting lines */}
        <g stroke="url(#hv-gold)" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.7">
          <motion.line
            x1="120" y1="120" x2="210" y2="205"
            animate={reduce ? undefined : { strokeDashoffset: [0, -20] }}
            transition={reduce ? undefined : { duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <motion.line
            x1="305" y1="135" x2="210" y2="205"
            animate={reduce ? undefined : { strokeDashoffset: [0, -20] }}
            transition={reduce ? undefined : { duration: 3.4, repeat: Infinity, ease: "linear" }}
          />
          <motion.line
            x1="120" y1="300" x2="210" y2="205"
            animate={reduce ? undefined : { strokeDashoffset: [0, -20] }}
            transition={reduce ? undefined : { duration: 3.1, repeat: Infinity, ease: "linear" }}
          />
          <motion.line
            x1="305" y1="300" x2="210" y2="205"
            animate={reduce ? undefined : { strokeDashoffset: [0, -20] }}
            transition={reduce ? undefined : { duration: 3.6, repeat: Infinity, ease: "linear" }}
          />
        </g>

        {/* component block — top left */}
        <motion.g {...float(-8, 0.2)}>
          <rect x="70" y="86" width="104" height="66" rx="10" fill={blockFill} stroke="url(#hv-gold)" strokeWidth="1.5" />
          <rect x="84" y="102" width="40" height="7" rx="3.5" fill={blockText} />
          <rect x="84" y="116" width="62" height="5" rx="2.5" fill={blockText} opacity="0.4" />
          <rect x="84" y="128" width="50" height="5" rx="2.5" fill={blockText} opacity="0.4" />
        </motion.g>

        {/* component block — top right (accent) */}
        <motion.g {...float(-10, 0.9)}>
          <rect x="258" y="100" width="96" height="60" rx="10" fill={accentBlockFill} stroke="url(#hv-gold)" strokeWidth="1.5" />
          <circle cx="278" cy="120" r="7" fill="url(#hv-gold)" />
          <rect x="294" y="116" width="46" height="6" rx="3" fill={accentBlockText} opacity="0.9" />
          <rect x="294" y="130" width="36" height="5" rx="2.5" fill={accentBlockText} opacity="0.45" />
        </motion.g>

        {/* component block — bottom left */}
        <motion.g {...float(9, 1.3)}>
          <rect x="72" y="268" width="100" height="62" rx="10" fill={blockFill} stroke="url(#hv-gold)" strokeWidth="1.5" />
          <rect x="86" y="284" width="30" height="6" rx="3" fill={blockText} />
          <rect x="86" y="298" width="56" height="5" rx="2.5" fill={blockText} opacity="0.4" />
          <rect x="86" y="310" width="44" height="5" rx="2.5" fill={blockText} opacity="0.4" />
        </motion.g>

        {/* component block — bottom right */}
        <motion.g {...float(8, 0.6)}>
          <rect x="260" y="272" width="94" height="58" rx="10" fill={blockFill} stroke="url(#hv-gold)" strokeWidth="1.5" />
          <rect x="274" y="288" width="52" height="6" rx="3" fill={blockText} />
          <rect x="274" y="301" width="38" height="5" rx="2.5" fill={blockText} opacity="0.4" />
        </motion.g>

        {/* central assembled "system" */}
        <motion.g {...float(-5, 0.45)}>
          <rect x="168" y="168" width="84" height="74" rx="12" fill={coreFill} stroke="url(#hv-gold)" strokeWidth="2" />
          {/* fish motif inside the core */}
          <path
            d="M186 205 L214 193 L214 199 L230 205 L214 211 L214 217 Z"
            fill="url(#hv-gold)"
          />
          <circle cx="220" cy="202" r="1.6" fill={coreDot} />
        </motion.g>

        {/* travelling pulse along a connector */}
        {!reduce && (
          <motion.circle
            r="3.5"
            fill="url(#hv-gold)"
            animate={{
              cx: [120, 210],
              cy: [120, 205],
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </svg>
    </div>
  );
}
