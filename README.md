# Viraj Agro Naturals — Static HTML/CSS/JS Website

This is a complete conversion of the original Next.js + TypeScript + Tailwind CSS website into plain HTML, CSS, and JavaScript with no build step required.

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

## How to run

Just open `index.html` in a web browser. No server, build step, or installation needed.

For best results (the contact form, scroll animations, etc.), you may serve the
folder via any simple local HTTP server, e.g.:

```bash
# Python 3
python3 -m http.server 8080

# Node
npx serve .
```

Then visit http://localhost:8080

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
