"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Scroll-triggered reveal animations (replaces the framer-motion `whileInView`
 * behaviour from the original Next.js project). Observes every `.reveal` element
 * and adds `.in-view` when it enters the viewport. Re-runs on route change so
 * client-side navigations animate too.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!revealEls.length) return;

    if (!("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("in-view"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay;
            if (delay) el.style.transitionDelay = `${delay}s`;
            el.classList.add("in-view");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    revealEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
