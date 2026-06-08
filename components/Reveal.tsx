"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Direction = "up" | "left" | "right" | "none";

const offset: Record<Direction, string> = {
  up: "translateY(28px)",
  left: "translateX(28px)",
  right: "translateX(-28px)",
  none: "scale(0.96)",
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  from = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: Direction;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: "opacity .7s cubic-bezier(.16,1,.3,1), transform .7s cubic-bezier(.16,1,.3,1)",
        transitionDelay: `${delay}ms`,
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : offset[from],
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
