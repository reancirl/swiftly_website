"use client";

import * as React from "react";
import gsap from "gsap";

const FISH_COUNT = 6;

const subscribe = () => () => {};
/** Returns false on the server, true on the client. */
function useIsClient() {
  return React.useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}

/**
 * Branded entrance loader. Plays on every fresh page load (hard reload, first
 * visit, deep link). Internal Next.js navigation does NOT remount the root
 * layout, so the loader will not fire between routes.
 */
export function BrandLoader() {
  const isClient = useIsClient();
  const [phase, setPhase] = React.useState<"visible" | "leaving" | "hidden">(
    "visible",
  );
  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const fishRefs = React.useRef<Array<HTMLDivElement | null>>([]);
  const wordmarkRef = React.useRef<HTMLDivElement | null>(null);

  // Drive the GSAP timeline once visible.
  React.useEffect(() => {
    if (!isClient) return;
    if (phase !== "visible") return;
    if (!rootRef.current) return;

    const fishes = fishRefs.current.filter(
      (el): el is HTMLDivElement => el !== null,
    );
    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
      onComplete: () => setPhase("leaving"),
    });

    gsap.set(fishes, { x: () => -240, opacity: 0 });
    gsap.set(wordmarkRef.current, { opacity: 0, y: 12 });

    fishes.forEach((fish, i) => {
      const swimDuration = 1.2 + (i % 3) * 0.2; // 1.2 – 1.6s per fish
      const lanePosition = i * 0.08;
      tl.to(
        fish,
        {
          x: () => window.innerWidth + 240,
          opacity: 1,
          duration: swimDuration,
          ease: "sine.inOut",
          keyframes: [
            { opacity: 0, duration: 0 },
            { opacity: 0.85, duration: 0.18 },
            { opacity: 1 },
          ],
        },
        lanePosition,
      );
      tl.to(
        fish,
        {
          y: "+=14",
          duration: 0.5,
          repeat: 1,
          yoyo: true,
          ease: "sine.inOut",
        },
        lanePosition,
      );
    });

    tl.to(
      wordmarkRef.current,
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
      0.2,
    );

    tl.to(
      wordmarkRef.current,
      { opacity: 0, y: -8, duration: 0.3, ease: "power1.in" },
      "+=0.1",
    );

    tl.to(
      rootRef.current,
      { opacity: 0, duration: 0.3, ease: "power1.inOut" },
      "<",
    );

    return () => {
      tl.kill();
    };
  }, [phase, isClient]);

  // Lock body scroll while visible.
  React.useEffect(() => {
    if (!isClient) return;
    if (phase !== "visible") return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [phase, isClient]);

  // Unmount after fade-out completes.
  React.useEffect(() => {
    if (phase !== "leaving") return;
    const t = setTimeout(() => setPhase("hidden"), 300);
    return () => clearTimeout(t);
  }, [phase]);

  if (!isClient) return null;
  if (phase === "hidden") return null;

  return (
    <div
      ref={rootRef}
      role="status"
      aria-live="polite"
      aria-label="Loading Swiftlyph"
      className="fixed inset-0 z-[100] bg-emerald-deep flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        {Array.from({ length: FISH_COUNT }).map((_, i) => {
          const top = 15 + (i / (FISH_COUNT - 1)) * 70;
          const scale = 0.7 + ((i * 137) % 60) / 100;
          return (
            <div
              key={i}
              ref={(el) => {
                fishRefs.current[i] = el;
              }}
              className="absolute"
              style={{
                top: `${top}%`,
                left: 0,
                transform: `scale(${scale})`,
                transformOrigin: "left center",
              }}
            >
              <SwimmingFish />
            </div>
          );
        })}
      </div>

      <div
        ref={wordmarkRef}
        className="relative z-10 flex flex-col items-center"
      >
        <span className="font-serif text-4xl md:text-6xl tracking-[-0.04em] text-cream">
          swiftly
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg,#D4AF37 0%,#F4E5A1 50%,#B8860B 100%)",
            }}
          >
            ph
          </span>
        </span>
        <span className="mt-3 text-[0.7rem] uppercase tracking-[0.18em] text-gold-light">
          Great software · Built swiftly
        </span>
      </div>
    </div>
  );
}

function SwimmingFish() {
  return (
    <svg
      width="80"
      height="40"
      viewBox="-30 0 160 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="loader-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#F4E5A1" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
      </defs>
      <polygon points="0,40 80,10 80,70 0,40" fill="#F8F6F0" opacity="0.9" />
      <polygon points="80,10 130,40 80,70" fill="#FFFFFF" opacity="0.95" />
      <polygon
        points="0,40 -25,15 -10,40 -25,65"
        fill="#F8F6F0"
        opacity="0.9"
      />
      <polygon
        points="80,10 130,40 80,70"
        fill="none"
        stroke="url(#loader-gold)"
        strokeWidth="2"
      />
      <circle cx="105" cy="35" r="3.5" fill="url(#loader-gold)" />
    </svg>
  );
}
