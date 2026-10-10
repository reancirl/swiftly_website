"use client";

import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type ProjectScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Wraps a featured project card in two coordinated motions:
 *
 * 1. A scroll-*scrubbed* reveal — the card lifts, fades and settles as it
 *    travels through the viewport, and smoothly reverses when you scroll back
 *    up. Because it is scrubbed (not `once`), it responds every time you scroll
 *    in either direction.
 * 2. A pointer/touch tilt — the card leans toward the pointer (or finger) with
 *    an eased spring, then relaxes back to flat on release.
 *
 * Renders content statically on the server (no FOUC) and is a no-op when the
 * viewer prefers reduced motion.
 */
export function ProjectScrollReveal({
  children,
  className,
}: ProjectScrollRevealProps) {
  const wrapRef = React.useRef<HTMLDivElement | null>(null);
  const tiltRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const wrap = wrapRef.current;
    const tilt = tiltRef.current;
    if (!wrap || !tilt) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      // 1. Scroll-scrubbed reveal — tracks scroll position both ways.
      gsap.fromTo(
        wrap,
        { y: 64, opacity: 0.35, scale: 0.965 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top 92%",
            end: "top 42%",
            scrub: 0.6,
          },
        },
      );

      // 2. Pointer / touch tilt — eased so it feels smooth, not jittery.
      const rotX = gsap.quickTo(tilt, "rotationX", {
        duration: 0.5,
        ease: "power3.out",
      });
      const rotY = gsap.quickTo(tilt, "rotationY", {
        duration: 0.5,
        ease: "power3.out",
      });
      const lift = gsap.quickTo(tilt, "y", {
        duration: 0.5,
        ease: "power3.out",
      });

      const MAX_TILT = 6; // degrees

      const onMove = (e: PointerEvent) => {
        const rect = tilt.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        rotY(px * MAX_TILT * 2);
        rotX(-py * MAX_TILT * 2);
        lift(-6);
      };

      const onLeave = () => {
        rotX(0);
        rotY(0);
        lift(0);
      };

      wrap.addEventListener("pointermove", onMove);
      wrap.addEventListener("pointerleave", onLeave);
      wrap.addEventListener("pointercancel", onLeave);

      return () => {
        wrap.removeEventListener("pointermove", onMove);
        wrap.removeEventListener("pointerleave", onLeave);
        wrap.removeEventListener("pointercancel", onLeave);
      };
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wrapRef}
      className={cn(className)}
      style={{ perspective: 1000, willChange: "transform, opacity" }}
    >
      <div ref={tiltRef} style={{ transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </div>
  );
}
