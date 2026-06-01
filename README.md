# Viraj Agro Naturals — Website

Static **HTML / CSS / JavaScript** website for **Viraj Agro Naturals**, an India-based
agricultural export trading company supplying premium products such as Moringa Powder
and Chicory Roots to the UK, USA, Australia, and Europe.

The site is a complete, build-free conversion of the original Next.js + TypeScript +
Tailwind CSS project into plain HTML, CSS, and vanilla JS — no framework, no build step,
no dependencies.

- **Repository:** https://github.com/Sedawk-Dynamics/viraj-agro
- **Certifications:** APEDA Registered · FSSAI Compliant · IEC Certified

## Structure

```
viraj-agro-naturals/
├── index.html                     # Home page
├── about.html                     # About Us page
├── contact.html                   # Contact page with enquiry form
├── products/
│   ├── moringa-powder.html        # Moringa Powder product page
│   └── chicory-roots.html         # Chicory Roots product page
├── css/
│   └── styles.css                 # Complete stylesheet
├── js/
│   └── main.js                    # All interactive behaviour
└── images/                        # All original images
    ├── about-team.jpg
    ├── chicory-hero.jpg
    ├── chicory-roots.jpg
    ├── global-shipping.jpg
    ├── hero-farm.jpg
    ├── logo.png
    ├── moringa-hero.jpg
    ├── moringa-powder.jpg
    ├── packaging.jpg
    └── quality-lab.jpg
```

## Getting started

Clone the repository:

```bash
git clone https://github.com/Sedawk-Dynamics/viraj-agro.git
cd viraj-agro
```

## How to run

The simplest option is to open `index.html` directly in a web browser — no server or
installation needed.

For full fidelity (contact form, scroll animations, and clean relative paths), serve the
folder over a local HTTP server and visit http://localhost:8000:

```bash
# Node (works anywhere Node is installed)
npx serve . -l 8000

# Python 3 (if a real Python is installed, not the Windows Store stub)
python3 -m http.server 8000
```

> **Windows note:** On systems where `python` resolves only to the Microsoft Store stub,
> use the Node option above instead.

## What was preserved

- **Design**: All brand colours (deep green #0B5D1E, brown #8B5A2B, beige #F6F3EB, cream #FBF9F4), Poppins + Playfair Display fonts, all layouts, spacings, and shadows.
- **Pages**: Home, About, Contact, Moringa Powder, Chicory Roots.
- **Sections**: Every section from the original — hero with trust badges, about, products grid, why choose us, certifications, export markets, CTA, company story, mission/vision/values, quality commitment, team, contact form + info, product hero/overview/benefits/applications/quality/packaging/CTA, full footer.
- **Content**: All text, product specs, benefit lists, application lists, packaging options, team members, certifications, contact details.
- **Animations**: Hero stagger-in, scroll-triggered reveals (replaces framer-motion `whileInView`), leaf-sway and float on decorative leaves, scroll indicator dot, hover transitions, mobile menu animation.
- **Interactions**: Sticky header with scroll shadow, desktop dropdown menu, mobile menu with collapsible Products section, contact form with simulated submission + success panel, smooth scroll-to-anchor.
- **Responsive**: Mobile, tablet and desktop breakpoints preserved exactly as in the Tailwind original.

## Tech notes

- Icons are inline SVG (originally `lucide-react`).
- Scroll-triggered reveals use `IntersectionObserver` (replaces framer-motion).
- Hero animations use CSS `animation-delay` to stagger.
- Fonts loaded from Google Fonts CDN.
- No external JS libraries — everything is vanilla JS in `js/main.js`.
- The contact form is a front-end simulation (shows a success panel); wire it to a real
  backend or form service to receive submissions.

## Deployment

Being a fully static site, it can be hosted on any static host with no configuration:
GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any standard web server. Point the
host at the repository root and `index.html` is served as the entry page.

## Contact

**Viraj Agro Naturals**
EWS 429 A Double Storey, Barra 2, Kanpur, Uttar Pradesh, India

- Phone: [+91 8737958006](tel:+918737958006)
- Email: [official@virajagronaturals.com](mailto:official@virajagronaturals.com)
- Enquiries: [enquiry@virajagronaturals.com](mailto:enquiry@virajagronaturals.com)
