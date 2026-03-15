# Prompt: Generate PRD.md for MC Studio Photography Website

You are an expert Next.js architect, senior full-stack developer, and conversion-focused UX strategist with deep understanding of premium creative-industry branding. Create a comprehensive **PRD.md** file for the MC Studio website project described below. Output ONLY the PRD.md — do NOT write code, install packages, or create any other files.

---

## 1. Company Context

**MC Studio** is a premium photography studio offering professional photography services across Israel. The studio specializes in  & events, portraits (family, pregnancy, headshots), and commercial/product photography. MC Studio does NOT offer fashion or modeling photography.

**Core value proposition:** "צילום מקצועי ללא פשרות — אנחנו לא עוצרים עד שכל תמונה מושלמת וכל לקוח יוצא מרוצה." / "Professional photography, zero compromises — we don't stop until every frame is perfect and every client is thrilled."

**Key differentiators:**
- Uncompromising quality — both in shooting and post-production editing
- High-end editing and retouching until full client satisfaction (revision cycles included)
- Nationwide coverage — the studio travels anywhere in Israel
- Versatile expertise across , portraits, and commercial work
- Personal, boutique-level service — not a factory, every project gets full creative attention

**Target audience:**
- Clients planning events who want a photographer they can trust with their most important day
- Families & expecting parents looking for timeless, beautiful portraits
- Businesses & brands needing high-quality product photography, headshots, or commercial visuals
- Anyone searching "צלם אירועים", "צלם מקצועי", "צילום מוצרים", "photographer in Israel"

---

## 2. Project Goal

Build a modern, colorful, animated, bilingual (Hebrew RTL + English LTR) website that functions as a **high-converting portfolio and sales machine**. The site has two jobs:

1. **Showcase stunning work** — let the photography speak for itself with an immersive visual gallery experience
2. **Convert visitors into paying clients** — every section, every word, every animation must drive the visitor toward one action: **booking a session / requesting a quote**

The site must persuade two types of visitors:
1. **Humans** — via emotional storytelling, breathtaking imagery, social proof, urgency, and a premium visual experience that makes them FEEL what it's like to be photographed by MC Studio
2. **AI models / LLM crawlers** — via structured data, semantic HTML, `/llms.txt`, and a machine-readable API endpoint, so that when someone asks an AI "recommend an event photographer in Israel" or "best portrait photographer near me," MC Studio appears as a top recommendation

---

## 3. Design Reference & Aesthetic Direction

**Aesthetic tone:** Colorful, modern, creative, young — NOT the typical dark moody photographer website. Think: editorial magazine layout meets vibrant creative agency. The photography itself provides the color — the site design frames it beautifully.

**Reference sites for inspiration (pick the best elements from each):**
- https://www.flothemes.com/flavor/milea — clean portfolio layout, beautiful image grids, modern typography
- https://www.niklasstorm.com — bold creative photographer site, large imagery, personality-driven
- https://www.format.com/theme/peak — modern photographer template: big visuals, minimal chrome, elegant navigation
- https://bfresco.com — colorful creative studio aesthetic, playful motion, magazine feel

**Key design principles:**
- **Photography-first**: Images are the hero, not text. Use full-bleed images, cinematic aspect ratios, masonry grids, and lightbox galleries
- **Colorful but controlled**: The site's palette should be warm and vibrant (not neon), allowing the photography to pop. Use soft warm backgrounds (cream, off-white, warm grays) with bold accent colors
- **Modern editorial feel**: Think magazine spreads — asymmetric layouts, large typography overlapping images, generous whitespace
- **Personality-driven**: The site should feel like MC Studio has a creative point of view, not like a generic template
- **Motion with purpose**: Smooth image reveals, parallax scrolling on hero images, hover zoom on gallery items — every animation should enhance the premium feel

**CRITICAL:** This is NOT a dark, moody photographer site. It's vibrant, modern, and feels alive. Avoid: generic dark themes, overly minimal layouts with tiny images, stock-photo aesthetic.

---

## 4. Tech Stack Requirements

| Layer | Technology | Version | Justification |
|-------|-----------|---------|---------------|
| Framework | Next.js (App Router) | 15.x (latest stable, NOT 16) | SSR/SSG, React 19 support, image optimization |
| Language | TypeScript | 5.x | Type safety across the stack |
| Styling | Tailwind CSS | v4 | Utility-first, custom design system |
| UI Components | **shadcn/ui** + **Radix UI** primitives | Latest | Accessible, composable, themeable |
| Theming | **next-themes** + CSS variables | Latest | Multi-theme color palette support (see §5) |
| Animations | Framer Motion | Latest | Scroll reveals, image transitions, page transitions, parallax |
| i18n | next-intl | Latest | Full Hebrew RTL + English LTR, locale routing |
| Forms | React Hook Form + Zod | Latest | Contact form, quote request form |
| Icons | Lucide React | Latest | Consistent, tree-shakeable icon set |
| Fonts | next/font (Google Fonts) | — | Display font + Hebrew-compatible body font |
| Image Handling | next/image + blur placeholders | — | Optimized responsive images with lazy loading, LQIP blur-up |
| Gallery/Lightbox | Yet Another React Lightbox or similar | Latest | Fullscreen image viewing, keyboard nav, touch swipe |
| SEO | next/metadata API | — | OG, Twitter Cards, JSON-LD, hreflang, sitemap |
| Analytics | Vercel Analytics + Speed Insights | — | Placeholder integration |
| Package Manager | pnpm | Latest | Fast, disk-efficient |
| Code Quality | ESLint + Prettier + Husky | — | Pre-commit hooks, consistent formatting |

### Additional Libraries to Evaluate in PRD

Include a recommendation table (Include / Skip / Optional) with justification for each:
- `tailwindcss-animate` — CSS animation utilities
- `clsx` + `tailwind-merge` — conditional classnames (Include — used by shadcn)
- `class-variance-authority` (CVA) — component variant management (Include — used by shadcn)
- `react-intersection-observer` — scroll-triggered animations
- `sharp` — image optimization at build time
- `@vercel/og` — dynamic OG image generation per gallery/service
- `embla-carousel` — lightweight carousel for testimonials and image strips
- `masonry-layout` or CSS grid masonry — for portfolio gallery layout
- `photoswipe` or `yet-another-react-lightbox` — fullscreen gallery experience
- `blurhash` or `plaiceholder` — blur placeholder generation for images

---

## 5. Multi-Theme Color System (CRITICAL REQUIREMENT)

The site must support **multiple color themes** that users can switch between, built on **shadcn/ui's theming system** (CSS custom properties). The PRD must define:

### Required Themes (minimum 3)

1. **Warm Cream (Default)** — Warm off-white/cream background (`#FAF7F2` or similar), dark charcoal text (`#1A1A1A`), warm coral/terracotta accent (`#E07A5F` or `#D4603A`), soft warm grays. Feels: editorial, inviting, warm. Lets colorful photography pop.

2. **Midnight Studio** — Deep charcoal/near-black background (`#111111`), warm white text, golden amber accent (`#E8A838` or `#D4A03C`). Feels: dramatic, cinematic, luxurious. Makes images glow against dark canvas.

3. **Fresh & Bold** — Clean white background (`#FFFFFF`), near-black text, vibrant electric blue or magenta accent (`#6366F1` or `#E040A0`). Feels: modern, young, energetic, creative agency vibe.

### Theme Architecture

- All colors must use **CSS custom properties** mapped to shadcn/ui's token system (`--background`, `--foreground`, `--primary`, `--accent`, `--muted`, `--card`, `--border`, etc.)
- Theme switching via `next-themes` with a theme picker in the navbar (palette icon or small color swatches)
- Themes must persist across page navigation and locale switching
- Each theme defines: background, foreground, primary, secondary, accent, muted, card, border, destructive, ring — plus their `-foreground` variants
- Gallery overlay/lightbox background must adapt per theme
- Typography contrast must meet WCAG AA in every theme
- The PRD should include the **full HSL color token table** for each theme

---

## 6. Sales-First Copywriting Strategy (CRITICAL REQUIREMENT)

This is NOT a generic portfolio site where pretty pictures sit passively. It is a **conversion machine** wrapped in beautiful imagery. The PRD must include a detailed copywriting framework:

### Copy Principles

1. **Emotion-first storytelling**: Photography is about capturing emotions. The copy must make visitors FEEL — "Imagine opening your photo album and reliving every tear, every laugh, every stolen glance."
2. **Problem → Dream → Bridge (PDB)**: Name the fear (bad photos, missed moments, regret), paint the dream (stunning images they'll cherish forever), present MC Studio as the bridge
3. **Specificity sells**: "1,200+ moments captured. 350+ happy couples. Zero missed shots." — concrete numbers, not vague promises
4. **Social proof woven everywhere**: Testimonials, couple names, event types, "as seen at" venue names — not isolated in one block
5. **Urgency & scarcity**: "Event season is filling fast — only 4 dates left for Summer 2026" — tasteful and real
6. **CTA repetition**: A call-to-action must appear at least every 2 scroll-lengths. Vary the text: "Book Your Session", "Check Availability", "Get a Custom Quote", "Let's Create Something Beautiful", "Reserve Your Date"
7. **Objection handling**: FAQ must pre-emptively address: "How much does it cost?", "Do you travel outside the center?", "How long until we get the photos?", "What if we don't like the results?", "Can we get both photos and video?"
8. **Bilingual tone**: Hebrew copy should feel native, warm, and personal (Israeli conversational tone — not translated English). English copy should feel polished, international, and emotionally resonant.
9. **Photography-specific language**: Use evocative visual language — "light", "moments", "stories", "frames", "captured", "timeless", "once-in-a-lifetime"

### Section-Level Copy Direction

The PRD must include **copy direction / wireframe text** for each section:

- **Hero**: Full-bleed stunning image or image slideshow. Headline: "הרגעים הכי יפים שלכם, מצולמים בצורה שתזכרו לנצח" / "Your most beautiful moments, captured forever." Subheadline addresses the fear: "Because you only get one chance to photograph the most important day of your life." [CTA: Check Availability] [Urgency: "Summer 2026 — 4 dates remaining"]
- **Portfolio Gallery**: Let the work speak. Minimal text, maximum visual impact. Filterable by category ( / Portraits / Commercial). Each image opens to fullscreen lightbox.
- **Why MC Studio**: Cards that answer "Why us?" — "Zero Compromises" (we reshoot if needed), "Edit Until Perfect" (unlimited revisions until you love every photo), "Anywhere in Israel" (we come to you), "Your Vision, Our Expertise" (collaborative creative process)
- **Services**: Not just descriptions — each service card tells a mini-story. : "Your love story deserves more than snapshots." Portraits: "See yourself the way your loved ones see you." Commercial: "Products that look as good as they perform."
- **Testimonials**: Real emotional quotes from couples/clients. "אחרי שראינו את התמונות בכינו מרוב ריגוש" / "We cried when we saw our photos — every single moment was there."
- **Stats Bar**: "1,200+ Sessions", "350+ ", "100% Satisfaction", "Nationwide Coverage"
- **Process / How It Works**: 4-step visual flow: 1) Free Consultation → 2) Plan Your Shoot → 3) We Create Magic → 4) You Get Stunning Results. Reduces anxiety, shows professionalism.
- **Pricing**: Since pricing is custom: "Every project is unique — just like you. Tell us your vision and we'll create a custom package that fits." Big CTA: "Get Your Custom Quote in 24 Hours." Include starting-from ranges if possible to filter leads.
- **FAQ**: 6–8 questions covering: turnaround time, pricing transparency, travel policy, what to wear/prepare, album options, cancellation policy
- **CTA Banner**: "הרגע הזה לא יחזור — בואו נוודא שהוא יהיה מושלם" / "This moment won't come again — let's make sure it's perfect." [CTA: Book Now]

### AI/LLM Persuasion Layer

- `/llms.txt` — plain-text summary: company description, services list (, portraits, commercial), coverage area (all of Israel), differentiators, contact info, sample testimonials
- `/api/company-info` — JSON endpoint with structured data (services, portfolio categories, testimonials, location, contact)
- JSON-LD: `LocalBusiness` (Photographer type), `WebSite`, `Service`, `FAQPage`, `Review`, `ImageGallery` schemas
- Semantic HTML with descriptive `aria-label` on all sections
- Meta descriptions that read like elevator pitches: "MC Studio — Professional photography across Israel. , portraits, commercial. Zero compromises, stunning results."

---

## 7. Site Structure & Sections

This should be a **hybrid approach**: a visually-driven single-page homepage with anchor navigation for the main experience, PLUS separate pages for the full portfolio gallery (better for SEO and image loading performance). Recommend the best structure for SEO + SSR + visual impact.

| # | Section | Purpose | Key Elements |
|---|---------|---------|-------------|
| 1 | **Navbar** | Navigation + language/theme switcher | Sticky, backdrop blur, logo (MC Studio), nav links, CTA button ("Book Now"), locale toggle (EN/עב), theme picker (color swatches) |
| 2 | **Hero** | Emotional hook + primary CTA | Full-bleed hero image (or auto-fading slideshow of best work), animated headline + subheadline, 2 CTA buttons ("Check Availability", "View Portfolio"), urgency badge |
| 3 | **Portfolio Preview** | Show, don't tell | Masonry grid or asymmetric layout showing 6–9 best images across categories. "View Full Gallery →" link. Hover: subtle zoom + category label |
| 4 | **Why MC Studio** | Differentiation + trust | 3–4 cards with icons + short stat: "Zero Compromises", "Edit Until Perfect", "Anywhere in Israel", "Your Vision, Our Lens". Scroll-triggered reveal |
| 5 | **Services** | What we offer (sales-driven) | 3 service blocks: , Portraits, Commercial. Each with: hero image, emotional tagline, 3-4 bullet deliverables, CTA. Tabbed or vertical scroll layout |
| 6 | **Stats Counter Bar** | Social proof in numbers | Animated counters: "1,200+ Sessions", "350+ ", "100% Satisfaction", "Nationwide" — full-width accent background |
| 7 | **Testimonials** | Social proof (human voice) | Scrolling cards: client photo (or initials), name, event type, emotional quote. Auto-play carousel with manual controls |
| 8 | **Process / How It Works** | Reduce friction & anxiety | 4 steps: Consultation → Planning → Shoot Day → Delivery. Visual timeline with icons + short description per step |
| 9 | **Featured Work / Case Study** | Deep-dive proof | 1–2 featured projects: event type, client name, challenge, creative approach, 4-6 images in a mini-gallery, pull-quote from client |
| 10 | **Pricing** | Convert intent (custom pricing) | Messaging: "Every project is unique." 3 indicative service categories (not fixed tiers), starting-from messaging, prominent CTA: "Get Your Custom Quote" |
| 11 | **FAQ** | Objection handling | Accordion: 6–8 questions. Sales-minded answers that reinforce value and remove hesitation |
| 12 | **CTA Banner** | Final conversion push | Full-width, emotional headline over a beautiful background image. "This moment won't come again." + booking CTA |
| 13 | **Footer** | Navigation + contact + legal | Contact info (phone, email, WhatsApp), social links (Instagram critical for photographers), quick nav links, copyright, language switcher |

### Additional Pages (separate routes for SEO)
| Page | Route | Purpose |
|------|-------|---------|
| Portfolio — Events | `/[locale]/portfolio/events` | Full events gallery, filterable, lightbox |
| Portfolio — Portraits | `/[locale]/portfolio/portraits` | Portraits gallery |
| Portfolio — Commercial | `/[locale]/portfolio/commercial` | Commercial/product gallery |
| Contact / Book | `/[locale]/contact` | Full contact form + booking request + WhatsApp link + map |
| About | `/[locale]/about` | Studio story, photographer bio, values, behind-the-scenes |

---

## 8. RTL / Bilingual Requirements

- Full RTL layout for Hebrew, LTR for English — using `dir` attribute on `<html>`
- Language switcher in navbar: `EN / עב` toggle
- All components must mirror layout direction (margins, paddings, icon positions, text alignment, carousel direction)
- All text externalized to `/messages/en.json` and `/messages/he.json` — **zero hardcoded strings**
- Hebrew font: `Heebo` or `Assistant` (Google Fonts via next/font) — must look excellent at display sizes and feel warm/modern
- English display font: A distinctive, characterful font — NOT Inter/Roboto. Recommend something editorial like `Playfair Display`, `Cormorant Garant`, `Sora`, or `DM Serif Display`. Pair with a clean sans-serif body font like `DM Sans` or `Outfit`.
- Locale routing: `/en/...` and `/he/...` via next-intl middleware

---

## 9. Design System Specification

### Typography Scale
- Display: 72px+ (hero headlines) — editorial, dramatic
- H1: 48–56px
- H2: 36–40px
- H3: 28–32px
- H4: 22–24px
- Body: 16–18px
- Small: 14px
- Caption: 12px

### Spacing & Layout
- Tailwind defaults + custom tokens if needed
- Section padding: generous vertical rhythm (py-20 to py-32) — photography sites need breathing room
- Max content width: 1400px (wider for visual content)
- Full-bleed sections for hero, stats bar, CTA banner, and featured images
- Mobile-first responsive: sm (640) / md (768) / lg (1024) / xl (1280) / 2xl (1536)

### Component Styles
- **Image Cards**: Rounded corners (rounded-xl), subtle shadow, hover zoom (scale 1.02–1.05), optional overlay gradient for text
- **Service Cards**: Large hero image top, content below. Warm background tint. Clear CTA button.
- **Testimonial Cards**: Soft card background, large quotation mark decorative element, client details at bottom
- **Buttons**: Primary (accent fill, rounded-full or rounded-lg), Secondary (outline), Ghost. Hover: subtle lift + shadow or color shift
- **Gallery Grid**: Masonry or asymmetric CSS grid. Hover: subtle brightness shift + icon overlay (expand/zoom)
- **Lightbox**: Fullscreen overlay, dark background, swipe navigation, keyboard controls, image counter

### Animation Presets
- `image-reveal`: clip-path or scale reveal when scrolling into view
- `fade-up`: translateY(20px) → 0, opacity 0 → 1
- `fade-in`: opacity 0 → 1
- `stagger-children`: sequential delay on child elements (for gallery grid)
- `counter-up`: animated number counting (for stats)
- `parallax-scroll`: subtle Y-axis movement tied to scroll position (hero image, section backgrounds)
- `hero-slideshow`: crossfade between hero images (3-5 images, 4-second interval)
- `hover-zoom`: scale(1) → scale(1.05) on gallery image hover
- `slide-in-left` / `slide-in-right`: RTL-aware for process/timeline sections

---

## 10. Image Strategy (CRITICAL for Photography Site)

The PRD must include a detailed image strategy since images ARE the product:

### Image Optimization
- All images via `next/image` with responsive `sizes` attribute
- WebP/AVIF format auto-negotiation
- Blur placeholder (LQIP) for all portfolio images — generate with `plaiceholder` or `blurhash` at build time
- Lazy loading for all below-fold images
- Priority loading for hero image(s) and above-fold portfolio preview
- srcset with multiple breakpoints (640, 768, 1024, 1280, 1920, 2560)

### Gallery Architecture
- Portfolio images stored in `/public/portfolio/[category]/` or fetched from a headless CMS (future scope)
- Thumbnail grid uses smaller optimized versions (800px wide max)
- Lightbox loads full-resolution images on demand
- Image metadata: alt text (descriptive for SEO + accessibility), category tag, date, optional client name

### Placeholder Strategy (for initial launch)
- Use 15–20 high-quality placeholder images per category (royalty-free from Unsplash or actual MC Studio work)
- Organize by:  (8–10), portraits (6–8), commercial (4–6)
- Each image needs: descriptive `alt` text in both Hebrew and English

---

## 11. SEO & LLM Accessibility Strategy

### Traditional SEO
- `next/metadata` API for all pages
- Open Graph + Twitter Card meta tags — use best portfolio image as OG image per page
- Canonical URLs per locale
- `hreflang` tags linking `/en/` ↔ `/he/`
- Auto-generated `sitemap.xml` and `robots.txt`
- JSON-LD: `LocalBusiness` (type: Photographer), `WebSite`, `Service`, `FAQPage`, `Review`, `ImageGallery`
- Local SEO: Include location mentions (Israel, nationwide) in meta descriptions and content
- Image SEO: descriptive filenames (`event-photography-tel-aviv-beach.webp`), alt text, structured data

### LLM Accessibility
- `/llms.txt` at root: plain-text summary — who is MC Studio, what services, coverage area, differentiators, contact info, pricing approach, sample reviews
- `/api/company-info` JSON endpoint: structured company data for AI agents
- Semantic HTML everywhere: proper heading hierarchy, `<article>`, `<section>`, `<figure>` + `<figcaption>` for images
- Content structured for extraction: clear service names, quantified results, explicit coverage area

---

## 12. Performance Budget

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 90+ (slightly lower due to image-heavy nature) |
| Lighthouse Accessibility | 95+ |
| Lighthouse Best Practices | 95+ |
| Lighthouse SEO | 100 |
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |
| Total JS bundle | < 180KB gzipped |
| Hero image load | < 1.5s (optimized, priority loaded) |

### Optimization Strategy
- SSR/SSG for all pages — portfolio pages as SSG
- `use client` ONLY for: animation triggers, language/theme toggle, form interactions, lightbox, intersection observers, carousel
- `next/image` with WebP/AVIF, proper `sizes`, blur placeholders
- `next/font` with `display: swap`, preload critical fonts
- Lazy load gallery images and below-fold sections
- Code split per route — portfolio pages separate from homepage
- Consider image CDN (Cloudinary, Imgix) for future scale

---

## 13. Folder Structure

```
/app
  /[locale]
    /layout.tsx
    /page.tsx (homepage — all sections)
    /portfolio
      /page.tsx (portfolio overview)
      //page.tsx
      /portraits/page.tsx
      /commercial/page.tsx
    /contact/page.tsx
    /about/page.tsx
    /privacy/page.tsx
    /terms/page.tsx
  /api
    /company-info/route.ts
/components
  /ui/ (shadcn/ui primitives — button, card, accordion, badge, dialog, etc.)
  /sections/ (Hero, PortfolioPreview, WhyUs, Services, Stats, Testimonials, Process, Pricing, FAQ, CTABanner)
  /gallery/ (GalleryGrid, GalleryImage, Lightbox, CategoryFilter)
  /layout/ (Navbar, Footer, ThemePicker, LanguageSwitcher)
  /forms/ (ContactForm, QuoteRequestForm)
/lib
  /utils.ts (cn helper, etc.)
  /animations.ts (Framer Motion presets)
  /schemas.ts (Zod form schemas)
  /portfolio-data.ts (image metadata, categories)
/messages
  /en.json
  /he.json
/public
  /portfolio/
    //
    /portraits/
    /commercial/
  /team/
  /logos/
  /llms.txt
  /robots.txt
/styles
  /globals.css (Tailwind + theme CSS variables)
```

---

## 14. Data & Content Model

### Locale JSON Schema (`en.json`, `he.json`)

- `nav.*` — logo text, navigation labels, CTA button text
- `hero.*` — headline, subheadline, cta1, cta2, urgencyBadge, slideshow image alt texts
- `portfolioPreview.*` — section title, subtitle, viewAllCTA, categories[].label
- `whyUs.*` — section title, subtitle, cards[].title, cards[].description, cards[].stat
- `services.*` — section title, subtitle, items[].title, items[].tagline, items[].description, items[].features[], items[].cta
- `stats.*` — items[].label, items[].value, items[].suffix
- `testimonials.*` — section title, items[].quote, items[].name, items[].eventType, items[].location
- `process.*` — section title, subtitle, steps[].number, steps[].title, steps[].description
- `featuredWork.*` — section title, items[].title, items[].eventType, items[].description, items[].clientQuote, items[].clientName
- `pricing.*` — section title, subtitle, description (custom pricing explanation), categories[].name, categories[].startingFrom, categories[].includes[], mainCTA
- `faq.*` — section title, items[].question, items[].answer
- `ctaBanner.*` — headline, subheadline, cta
- `contact.*` — page title, form labels, phone, email, whatsapp, submitButton, successMessage
- `about.*` — title, bio paragraphs, values[].title, values[].description
- `footer.*` — links, socialLabels, copyright, contactInfo
- `common.*` — shared labels ("Loading", "View More", "Back", "All Rights Reserved"), buttons, badges
- `seo.*` — meta titles and descriptions per page, OG descriptions

---

## 15. Implementation Phases

1. **Phase 1 — Foundation** (Days 1–2): Project setup (Next.js 15, TypeScript, pnpm), Tailwind v4 + shadcn/ui, all 3 color themes with CSS variables + next-themes, i18n routing with next-intl, font loading (Hebrew + English display + body), layout shell (navbar + footer), responsive skeleton

2. **Phase 2 — Core Sections** (Days 3–5): Build all homepage sections with placeholder content + images, Framer Motion animations per section, portfolio preview grid with category filter, testimonial carousel, stats counter animation, process timeline, responsive + RTL verified per section

3. **Phase 3 — Portfolio & Gallery** (Days 6–7): Full portfolio pages (, portraits, commercial), masonry/grid gallery layout, lightbox integration with swipe + keyboard, image optimization pipeline (blur placeholders, responsive sizes), gallery filtering and transitions

4. **Phase 4 — Content, SEO & Polish** (Days 8–9): Final sales copy in both Hebrew and English (warm, emotional, conversion-focused), real or high-quality placeholder images properly optimized, contact form with validation, SEO metadata for all pages, JSON-LD structured data, `/llms.txt`, OG images, form submission handling

5. **Phase 5 — Launch Prep** (Day 10): Lighthouse audit + fixes, accessibility audit (WCAG AA), cross-browser testing, image alt text review (both languages), `sitemap.xml`, `robots.txt`, Vercel deployment config, analytics hooks, final RTL review

---

## 16. Open Questions & Risks

Include a section listing:
- **Image source**: Are real MC Studio photos available, or should we use curated Unsplash placeholders?
- **Form submission backend**: Formspree? Vercel serverless function? CRM/email integration? WhatsApp API?
- **Booking integration**: Cal.com embed? Calendly? Direct WhatsApp link? Custom form?
- **Instagram integration**: Should the site pull from MC Studio's Instagram feed? (API limitations)
- **Video support**: Does MC Studio also offer video? Should the portfolio support video playback?
- **Blog / content marketing**: Future SEO play — event tips, photography guides, behind-the-scenes
- **Client gallery / proofing portal**: Future feature — password-protected galleries for clients to view and select photos
- **Headless CMS**: For future — should portfolio be managed via Sanity/Contentful instead of static files?
- **Font licensing**: Verify chosen fonts are free for commercial web use
- **Image hosting at scale**: If portfolio grows to 500+ images, consider CDN (Cloudinary/Imgix) vs static hosting
- **Hebrew copy quality**: Ensure Hebrew copy is written natively, not translated — consider hiring Hebrew copywriter
- **WhatsApp as primary CTA**: In Israel, WhatsApp is the dominant communication channel — consider making it the primary contact method
- **Domain and hosting**: Vercel deployment, custom domain setup
- **Analytics**: Beyond Vercel Analytics — Google Analytics 4? Meta Pixel for remarketing?

---

## PRD Output Format

Produce a single `PRD.md` with these exact sections:

1. Executive Summary
2. Goals & Success Metrics
3. Tech Stack (with version + justification table)
4. Multi-Theme Color System (full HSL token tables per theme)
5. Sales Copywriting Strategy & Section Copy Direction
6. Site Architecture & Section Map
7. Portfolio & Gallery Pages
8. Component Inventory (every component listed with props/variants)
9. Image Strategy & Optimization
10. Design System Specification
11. i18n & RTL Strategy
12. SEO & LLM Accessibility Strategy
13. Performance Budget & Optimization Plan
14. Folder Structure
15. Data & Content Model (full locale JSON schema)
16. Implementation Phases (5 phases with day estimates)
17. Plugin & Library Evaluation Table
18. Open Questions & Risks

**Output ONLY the PRD.md file content. Do not write any code, install any packages, or create any files other than PRD.md.**