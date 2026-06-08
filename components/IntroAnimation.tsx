"use client";

import { useEffect, useRef, useState } from "react";

type Phase = "enter" | "hold" | "flip" | "done";

export default function IntroAnimation() {
  const [phase, setPhase] = useState<Phase>("enter");
  const [flip, setFlip] = useState<string | null>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Respect reduced-motion: skip the intro entirely.
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setPhase("done");
      return;
    }

    // Make sure we start from the top so the FLIP target is in view, and lock scroll.
    window.scrollTo(0, 0);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Kick off the entrance (fade + scale-up) on the next frame.
    const raf = requestAnimationFrame(() => setPhase("hold"));

    // After entrance + hold, measure the header logo and run the FLIP.
    const tFlip = window.setTimeout(() => {
      const logo = logoRef.current;
      const target = document.getElementById("site-logo");
      if (logo && target) {
        const from = logo.getBoundingClientRect();
        const to = target.getBoundingClientRect();
        if (from.width > 0 && to.width > 0) {
          const scale = to.width / from.width;
          const dx = to.left - from.left;
          const dy = to.top - from.top;
          setFlip(`translate(${dx}px, ${dy}px) scale(${scale})`);
        }
      }
      setPhase("flip");
    }, 1500);

    // Finish: unmount overlay and restore scrolling.
    const tDone = window.setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = prevOverflow;
    }, 2350);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(tFlip);
      clearTimeout(tDone);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  if (phase === "done") return null;

  const entered = phase !== "enter";
  const flipping = phase === "flip";

  return (
    <div
      className="fixed inset-0 z-[100]"
      style={{ pointerEvents: flipping ? "none" : "auto" }}
      aria-hidden="true"
    >
      {/* Background layer fades out to reveal the page */}
      <div
        className="absolute inset-0 bg-brand-cream"
        style={{ opacity: flipping ? 0 : 1, transition: "opacity .8s ease-in-out" }}
      />

      {/* Centered logo that flies into the header */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={logoRef}
          src="/images/logo.png"
          alt="Viraj Agro Naturals"
          className="w-[min(72vw,420px)] h-auto"
          style={{
            opacity: entered ? 1 : 0,
            transformOrigin: flipping ? "top left" : "center",
            transform: flipping && flip ? flip : entered ? "scale(1)" : "scale(0.85)",
            transition: flipping
              ? "transform .8s cubic-bezier(.65,0,.35,1)"
              : "opacity .6s ease-out, transform .6s ease-out",
            willChange: "transform, opacity",
          }}
        />
      </div>
    </div>
  );
}
