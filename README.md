# Viraj Agro Naturals — Website

Marketing website for **Viraj Agro Naturals**, an India-based agricultural export
trading company supplying premium products such as Moringa Powder and Chicory Roots
to the UK, USA, Australia, and Europe.

Built with a modern stack: **Next.js (App Router) · TypeScript · Tailwind CSS · React**.

- **Repository:** https://github.com/Sedawk-Dynamics/viraj-agro-sedawk
- **Certifications:** APEDA Registered · FSSAI Compliant · IEC Certified

## Tech stack

- **[Next.js 14](https://nextjs.org/)** with the App Router and React Server Components
- **TypeScript** throughout
- **Tailwind CSS** (brand theme configured in `tailwind.config.ts`)
- **next/font** for optimized Poppins + Playfair Display loading
- Reusable React components and an inline SVG icon set (Lucide-style)

## Project structure

```
viraj-agro-naturals/
├── app/
│   ├── layout.tsx                    # Root layout: fonts, metadata, TopBar/Header/Footer
│   ├── globals.css                   # Tailwind layers + the full design system & animations
│   ├── page.tsx                      # Home page
│   ├── about/page.tsx                # About Us page
│   ├── contact/page.tsx              # Contact page
│   └── products/
│       ├── moringa-powder/page.tsx   # Moringa Powder product page
│       └── chicory-roots/page.tsx    # Chicory Roots product page
├── components/
│   ├── TopBar.tsx                    # Green contact/socials bar
│   ├── Header.tsx                    # Sticky nav (scroll shadow, dropdown, mobile menu)
│   ├── Footer.tsx                    # Site footer
│   ├── ContactForm.tsx               # Enquiry form with simulated submit + success state
│   ├── ProductPageContent.tsx        # Shared, data-driven product page layout
│   ├── ScrollReveal.tsx              # IntersectionObserver scroll-reveal animations
│   └── Icons.tsx                     # Inline SVG icon components
├── public/
│   └── images/                       # All site images
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) (Next.js falls back to the next
free port, e.g. 3001, if 3000 is taken).

### Other scripts

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # run ESLint
```

## Notes

- **Design system:** all brand colours (deep green `#0B5D1E`, brown `#8B5A2B`,
  beige `#F6F3EB`, cream `#FBF9F4`), Poppins + Playfair Display fonts, layouts,
  shadows, and animations are defined in `app/globals.css`. Tailwind's Preflight is
  disabled there to defer to this design system; the brand palette is also exposed as
  Tailwind theme tokens (`viraj-green-deep`, etc.) for new work.
- **Animations:** hero stagger-in via CSS `animation-delay`; scroll-triggered reveals
  via `IntersectionObserver` in `ScrollReveal.tsx`; leaf-sway / float on decorative
  leaves.
- **Contact form:** a front-end simulation that shows a success panel. Wire it to a
  real backend, route handler, or form service to receive submissions.

## Deployment

As a Next.js app it deploys with zero configuration to Vercel, or to any Node host via
`npm run build && npm run start`. It can also be statically exported if no server
features are added.

## Contact

**Viraj Agro Naturals**
EWS 429 A Double Storey, Barra 2, Kanpur, Uttar Pradesh, India

- Phone: [+91 8737958006](tel:+918737958006)
- Email: [official@virajagronaturals.com](mailto:official@virajagronaturals.com)
- Enquiries: [enquiry@virajagronaturals.com](mailto:enquiry@virajagronaturals.com)
