import type { ReactNode } from "react";
import Reveal from "./Reveal";
import { Leaf } from "./Icons";

export default function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
  image,
  align = "center",
  children,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle: string;
  image?: string;
  align?: "center" | "left";
  children?: ReactNode;
}) {
  return (
    <section className={`relative overflow-hidden text-white ${image ? "" : "bg-gradient-to-br from-brand-band to-[#0f3d20]"}`}>
      {image && (
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt="" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-black/45" />
        </div>
      )}

      {/* decorative blobs + floating leaf */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-16 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute top-12 right-12 hidden lg:block text-white/15 animate-leaf-sway">
        <Leaf size={120} />
      </div>

      <div className={`relative mx-auto max-w-[1200px] px-5 py-20 lg:py-28 ${align === "center" ? "text-center" : ""}`}>
        <div className={align === "center" ? "max-w-3xl mx-auto" : "max-w-2xl"}>
          <Reveal>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm font-medium">
              <Leaf size={16} /> {eyebrow}
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-[2.6rem] sm:text-[3.4rem] lg:text-[4.2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
              {title} {highlight && <span className="text-brand-cream">{highlight}</span>}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className={`mt-5 text-xl text-white/85 leading-relaxed ${align === "center" ? "max-w-2xl mx-auto" : ""}`}>
              {subtitle}
            </p>
          </Reveal>
          {children && (
            <Reveal delay={240}>
              <div className={`mt-8 flex flex-wrap gap-4 ${align === "center" ? "justify-center" : ""}`}>{children}</div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
