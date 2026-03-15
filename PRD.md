# MC Studio — Product Requirements Document (PRD)

> **Version:** 1.0
> **Date:** 2026-03-15
> **Status:** Draft
> **Author:** Architecture & Strategy Team

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Goals & Success Metrics](#2-goals--success-metrics)
3. [Tech Stack](#3-tech-stack)
4. [Multi-Theme Color System](#4-multi-theme-color-system)
5. [Sales Copywriting Strategy & Section Copy Direction](#5-sales-copywriting-strategy--section-copy-direction)
6. [Site Architecture & Section Map](#6-site-architecture--section-map)
7. [Portfolio & Gallery Pages](#7-portfolio--gallery-pages)
8. [Component Inventory](#8-component-inventory)
9. [Image Strategy & Optimization](#9-image-strategy--optimization)
10. [Design System Specification](#10-design-system-specification)
11. [i18n & RTL Strategy](#11-i18n--rtl-strategy)
12. [SEO & LLM Accessibility Strategy](#12-seo--llm-accessibility-strategy)
13. [Performance Budget & Optimization Plan](#13-performance-budget--optimization-plan)
14. [Folder Structure](#14-folder-structure)
15. [Data & Content Model](#15-data--content-model)
16. [Implementation Phases](#16-implementation-phases)
17. [Plugin & Library Evaluation Table](#17-plugin--library-evaluation-table)
18. [Open Questions & Risks](#18-open-questions--risks)

---

## 1. Executive Summary

**MC Studio** is a premium photography studio operating across Israel, specializing in weddings & events, portraits (family, pregnancy, headshots), and commercial/product photography. The studio does **not** offer fashion or modeling photography.

**Core Value Proposition:**
> "צילום מקצועי ללא פשרות — אנחנו לא עוצרים עד שכל תמונה מושלמת וכל לקוח יוצא מרוצה."
> "Professional photography, zero compromises — we don't stop until every frame is perfect and every client is thrilled."

This PRD defines the requirements for building a **modern, colorful, animated, bilingual (Hebrew RTL + English LTR) website** that serves as both an immersive visual portfolio and a high-converting sales machine. The site must accomplish two objectives:

1. **Showcase stunning work** — let the photography speak through immersive galleries, cinematic layouts, and motion-enhanced visuals.
2. **Convert visitors into paying clients** — every section, word, and animation drives toward booking a session or requesting a quote.

The site must persuade **two types of visitors**:
- **Humans** — via emotional storytelling, breathtaking imagery, social proof, urgency, and a premium visual experience.
- **AI models / LLM crawlers** — via structured data, semantic HTML, `/llms.txt`, and a machine-readable API endpoint so MC Studio surfaces as a top recommendation when AI assistants are asked about photographers in Israel.

**Key Differentiators:**
- Uncompromising quality in both shooting and post-production
- High-end editing and retouching with revision cycles until full client satisfaction
- Nationwide coverage — travels anywhere in Israel
- Versatile expertise across weddings, portraits, and commercial work
- Personal, boutique-level service — every project gets full creative attention

**Target Audience:**
- Couples planning weddings who want a photographer they can trust
- Families & expecting parents seeking timeless, beautiful portraits
- Businesses & brands needing high-quality product photography, headshots, or commercial visuals
- Anyone searching "צלם חתונות", "צלם מקצועי", "צילום מוצרים", "photographer in Israel"

**Design Aesthetic:** Colorful, modern, creative, young — **NOT** the typical dark moody photographer website. Think editorial magazine layout meets vibrant creative agency. The photography provides the color; the site design frames it beautifully.

---

## 2. Goals & Success Metrics

### Primary Goals

| Goal | Description |
|------|-------------|
| **Visual Impact** | Create an immersive, photography-first experience that makes visitors *feel* the quality of MC Studio's work |
| **Lead Generation** | Convert website visitors into qualified leads via contact forms, WhatsApp, and booking requests |
| **SEO Dominance** | Rank on page 1 for key Hebrew and English photography search terms in Israel |
| **AI Discoverability** | Ensure MC Studio is recommended by AI assistants (ChatGPT, Claude, Gemini, Perplexity) when users ask for photographers in Israel |
| **Brand Perception** | Position MC Studio as a premium, trustworthy, creative photography brand |

### Success Metrics (KPIs)

| Metric | Target | Measurement |
|--------|--------|-------------|
| Monthly unique visitors | 2,000+ within 3 months of launch | Vercel Analytics |
| Contact form submissions | 30+ per month | Form analytics |
| WhatsApp clicks | 50+ per month | UTM tracking |
| Bounce rate | < 40% | Vercel Analytics |
| Average session duration | > 2 minutes | Vercel Analytics |
| Lighthouse Performance | 90+ | Lighthouse CI |
| Lighthouse Accessibility | 95+ | Lighthouse CI |
| Lighthouse SEO | 100 | Lighthouse CI |
| Portfolio page views per session | > 3 | Analytics |
| CTA click-through rate | > 5% | Event tracking |
| Google ranking: "צלם חתונות" | Page 1 within 6 months | Google Search Console |
| LLM recommendation rate | Appear in top 3 suggestions | Manual testing across AI assistants |

---

## 3. Tech Stack

### Core Stack

| Layer | Technology | Version | Justification |
|-------|-----------|---------|---------------|
| Framework | Next.js (App Router) | 15.x (latest stable) | SSR/SSG, React 19 support, image optimization, middleware for i18n |
| Language | TypeScript | 5.x | Type safety across the entire stack |
| Styling | Tailwind CSS | v4 | Utility-first, custom design system, excellent RTL support |
| UI Components | shadcn/ui + Radix UI primitives | Latest | Accessible, composable, themeable, unstyled by default |
| Theming | next-themes + CSS variables | Latest | Multi-theme color palette support with persistence |
| Animations | Framer Motion | Latest | Scroll reveals, image transitions, page transitions, parallax |
| i18n | next-intl | Latest | Full Hebrew RTL + English LTR, locale routing, ICU message format |
| Forms | React Hook Form + Zod | Latest | Contact form, quote request form with type-safe validation |
| Icons | Lucide React | Latest | Consistent, tree-shakeable icon set |
| Fonts | next/font (Google Fonts) | — | Display font + Hebrew-compatible body font, zero layout shift |
| Image Handling | next/image + blur placeholders | — | Optimized responsive images with lazy loading, LQIP blur-up |
| Gallery/Lightbox | Yet Another React Lightbox | Latest | Fullscreen image viewing, keyboard nav, touch swipe, plugins |
| SEO | next/metadata API | — | OG, Twitter Cards, JSON-LD, hreflang, sitemap |
| Analytics | Vercel Analytics + Speed Insights | — | Placeholder integration, zero config |
| Package Manager | pnpm | Latest | Fast, disk-efficient, strict dependency resolution |
| Code Quality | ESLint + Prettier + Husky | — | Pre-commit hooks, consistent formatting |

### Font Choices

| Purpose | Font | Fallback | Usage |
|---------|------|----------|-------|
| Hebrew Display & Body | **Heebo** | system-ui, sans-serif | All Hebrew text — clean, modern, excellent at display sizes |
| English Display | **Playfair Display** | Georgia, serif | Headlines, hero text — editorial, characterful, dramatic |
| English Body | **DM Sans** | system-ui, sans-serif | Body text, UI elements — clean, modern, highly legible |

---

## 4. Multi-Theme Color System

The site supports **3 switchable color themes** built on shadcn/ui's CSS custom property system. Users switch via a theme picker in the navbar (color swatches). Themes persist across page navigation and locale switching via `next-themes`.

### Theme 1: Warm Cream (Default)

**Mood:** Editorial, inviting, warm. Lets colorful photography pop against a soft neutral canvas.

| Token | HSL Value | Hex (approx.) | Usage |
|-------|-----------|----------------|-------|
| `--background` | `36 33% 97%` | `#FAF7F2` | Page background |
| `--foreground` | `0 0% 10%` | `#1A1A1A` | Primary text |
| `--card` | `36 25% 95%` | `#F5F0E8` | Card backgrounds |
| `--card-foreground` | `0 0% 10%` | `#1A1A1A` | Card text |
| `--popover` | `36 25% 95%` | `#F5F0E8` | Popover backgrounds |
| `--popover-foreground` | `0 0% 10%` | `#1A1A1A` | Popover text |
| `--primary` | `14 64% 58%` | `#D4603A` | Primary accent (terracotta) |
| `--primary-foreground` | `0 0% 100%` | `#FFFFFF` | Text on primary |
| `--secondary` | `30 20% 90%` | `#EDE6DA` | Secondary backgrounds |
| `--secondary-foreground` | `0 0% 15%` | `#262626` | Text on secondary |
| `--accent` | `16 70% 62%` | `#E07A5F` | Accent elements (warm coral) |
| `--accent-foreground` | `0 0% 100%` | `#FFFFFF` | Text on accent |
| `--muted` | `36 15% 92%` | `#EDEBE6` | Muted backgrounds |
| `--muted-foreground` | `0 0% 40%` | `#666666` | Muted text |
| `--destructive` | `0 72% 51%` | `#DC2626` | Error states |
| `--destructive-foreground` | `0 0% 100%` | `#FFFFFF` | Text on destructive |
| `--border` | `36 15% 85%` | `#DDD8CE` | Borders |
| `--input` | `36 15% 85%` | `#DDD8CE` | Input borders |
| `--ring` | `14 64% 58%` | `#D4603A` | Focus rings |

### Theme 2: Midnight Studio

**Mood:** Dramatic, cinematic, luxurious. Makes images glow against dark canvas.

| Token | HSL Value | Hex (approx.) | Usage |
|-------|-----------|----------------|-------|
| `--background` | `0 0% 7%` | `#111111` | Page background |
| `--foreground` | `36 20% 93%` | `#F0EBE3` | Primary text (warm white) |
| `--card` | `0 0% 10%` | `#1A1A1A` | Card backgrounds |
| `--card-foreground` | `36 20% 93%` | `#F0EBE3` | Card text |
| `--popover` | `0 0% 10%` | `#1A1A1A` | Popover backgrounds |
| `--popover-foreground` | `36 20% 93%` | `#F0EBE3` | Popover text |
| `--primary` | `40 76% 56%` | `#D4A03C` | Primary accent (golden amber) |
| `--primary-foreground` | `0 0% 7%` | `#111111` | Text on primary |
| `--secondary` | `0 0% 14%` | `#242424` | Secondary backgrounds |
| `--secondary-foreground` | `36 15% 85%` | `#DDD5C8` | Text on secondary |
| `--accent` | `38 80% 56%` | `#E8A838` | Accent elements (amber) |
| `--accent-foreground` | `0 0% 7%` | `#111111` | Text on accent |
| `--muted` | `0 0% 12%` | `#1F1F1F` | Muted backgrounds |
| `--muted-foreground` | `0 0% 55%` | `#8C8C8C` | Muted text |
| `--destructive` | `0 72% 51%` | `#DC2626` | Error states |
| `--destructive-foreground` | `0 0% 100%` | `#FFFFFF` | Text on destructive |
| `--border` | `0 0% 18%` | `#2E2E2E` | Borders |
| `--input` | `0 0% 18%` | `#2E2E2E` | Input borders |
| `--ring` | `40 76% 56%` | `#D4A03C` | Focus rings |

### Theme 3: Fresh & Bold

**Mood:** Modern, young, energetic, creative agency vibe.

| Token | HSL Value | Hex (approx.) | Usage |
|-------|-----------|----------------|-------|
| `--background` | `0 0% 100%` | `#FFFFFF` | Page background |
| `--foreground` | `0 0% 7%` | `#111111` | Primary text |
| `--card` | `240 5% 97%` | `#F6F6F8` | Card backgrounds |
| `--card-foreground` | `0 0% 7%` | `#111111` | Card text |
| `--popover` | `240 5% 97%` | `#F6F6F8` | Popover backgrounds |
| `--popover-foreground` | `0 0% 7%` | `#111111` | Popover text |
| `--primary` | `239 84% 67%` | `#6366F1` | Primary accent (indigo) |
| `--primary-foreground` | `0 0% 100%` | `#FFFFFF` | Text on primary |
| `--secondary` | `240 5% 94%` | `#EFEFF2` | Secondary backgrounds |
| `--secondary-foreground` | `0 0% 15%` | `#262626` | Text on secondary |
| `--accent` | `322 80% 56%` | `#E040A0` | Accent elements (magenta) |
| `--accent-foreground` | `0 0% 100%` | `#FFFFFF` | Text on accent |
| `--muted` | `240 5% 96%` | `#F4F4F6` | Muted backgrounds |
| `--muted-foreground` | `0 0% 40%` | `#666666` | Muted text |
| `--destructive` | `0 72% 51%` | `#DC2626` | Error states |
| `--destructive-foreground` | `0 0% 100%` | `#FFFFFF` | Text on destructive |
| `--border` | `240 6% 90%` | `#E4E4E8` | Borders |
| `--input` | `240 6% 90%` | `#E4E4E8` | Input borders |
| `--ring` | `239 84% 67%` | `#6366F1` | Focus rings |

### Theme Architecture Rules

- All colors defined as **CSS custom properties** in `globals.css`, scoped to `[data-theme="warm-cream"]`, `[data-theme="midnight"]`, `[data-theme="fresh-bold"]`
- `next-themes` handles theme switching, persistence to `localStorage`, and SSR flash prevention
- Theme picker component renders 3 color swatches in the navbar
- Theme persists across page navigation and locale switching
- Gallery overlay/lightbox background adapts per theme (`--background` with increased opacity)
- All text/background combinations must pass **WCAG AA** contrast ratio (4.5:1 for normal text, 3:1 for large text)
- Sidebar radius token `--radius`: `0.75rem` (all themes)

---

## 5. Sales Copywriting Strategy & Section Copy Direction

### Copy Principles

| # | Principle | Description |
|---|-----------|-------------|
| 1 | **Emotion-First Storytelling** | Photography captures emotions. Copy must make visitors *feel*: "Imagine opening your wedding album and reliving every tear, every laugh, every stolen glance." |
| 2 | **Problem → Dream → Bridge (PDB)** | Name the fear (bad photos, missed moments, regret) → paint the dream (stunning images cherished forever) → present MC Studio as the bridge |
| 3 | **Specificity Sells** | "1,200+ moments captured. 350+ happy couples. Zero missed shots." Concrete numbers, not vague promises |
| 4 | **Social Proof Woven Everywhere** | Testimonials, couple names, event types, venue names — integrated throughout, not isolated in one block |
| 5 | **Urgency & Scarcity** | "Wedding season is filling fast — only 4 dates left for Summer 2026" — tasteful, real, and effective |
| 6 | **CTA Repetition** | A call-to-action every 2 scroll-lengths. Varied text: "Book Your Session", "Check Availability", "Get a Custom Quote", "Let's Create Something Beautiful", "Reserve Your Date" |
| 7 | **Objection Handling** | FAQ pre-emptively addresses pricing, travel, turnaround, satisfaction guarantee, photo+video bundles |
| 8 | **Bilingual Tone** | Hebrew: native, warm, personal (Israeli conversational). English: polished, international, emotionally resonant |
| 9 | **Photography Language** | Evocative visual words: "light", "moments", "stories", "frames", "captured", "timeless", "once-in-a-lifetime" |

### Section-Level Copy Direction

#### Hero Section

| Element | Hebrew | English |
|---------|--------|---------|
| **Headline** | הרגעים הכי יפים שלכם, מצולמים בצורה שתזכרו לנצח | Your Most Beautiful Moments, Captured Forever |
| **Subheadline** | כי יש רק הזדמנות אחת לצלם את היום הכי חשוב בחייכם | Because you only get one chance to photograph the most important day of your life |
| **CTA Primary** | בדקו זמינות | Check Availability |
| **CTA Secondary** | צפו בתיק עבודות | View Portfolio |
| **Urgency Badge** | קיץ 2026 — נשארו 4 תאריכים בלבד | Summer 2026 — Only 4 Dates Remaining |

**Visual:** Full-bleed hero with auto-fading slideshow (3–5 of MC Studio's best images, 4-second crossfade interval). Headline animates in with `fade-up`. Parallax scroll on background image.

#### Portfolio Preview

**Copy Direction:** Minimal text. Let the work speak. Section title: "מהעדשה שלנו" / "Through Our Lens". Grid of 6–9 curated images across categories. Hover reveals category label. Link: "צפו בגלריה המלאה →" / "View Full Gallery →"

#### Why MC Studio

| Card | Title (HE) | Title (EN) | Description (HE) | Description (EN) |
|------|-----------|-----------|------------------|------------------|
| 1 | ללא פשרות | Zero Compromises | אם צריך לצלם מחדש — נצלם מחדש. התמונות שלכם חייבות להיות מושלמות | If we need to reshoot — we reshoot. Your photos must be perfect |
| 2 | עריכה עד שתאהבו | Edit Until You Love It | סבבי תיקונים ללא הגבלה עד שכל תמונה בדיוק כמו שחלמתם | Unlimited revision rounds until every image is exactly as you dreamed |
| 3 | בכל מקום בארץ | Anywhere in Israel | מאילת ועד מטולה — אנחנו מגיעים לכל מקום שהאירוע שלכם | From Eilat to Metula — we come to wherever your event is |
| 4 | החזון שלכם, המומחיות שלנו | Your Vision, Our Expertise | תהליך יצירתי משותף שמבטיח שהתוצאה תשקף בדיוק מי שאתם | A collaborative creative process ensuring the result reflects exactly who you are |

#### Services

| Service | Tagline (HE) | Tagline (EN) | Key Deliverables |
|---------|-------------|-------------|------------------|
| **Weddings & Events** | סיפור האהבה שלכם ראוי ליותר מסתם תמונות | Your love story deserves more than snapshots | Full-day coverage, engagement session, edited album, online gallery, prints |
| **Portraits** | תראו את עצמכם כמו שהאנשים שאוהבים אתכם רואים אתכם | See yourself the way your loved ones see you | Family, pregnancy, headshots, styled sessions, retouched files |
| **Commercial** | מוצרים שנראים טוב כמו שהם באמת | Products that look as good as they perform | Product photography, brand visuals, lifestyle shoots, e-commerce ready |

#### Stats Counter Bar

| Stat | Value | Label (HE) | Label (EN) |
|------|-------|-----------|-----------|
| 1 | 1,200+ | אירועים שצולמו | Sessions Captured |
| 2 | 350+ | חתונות | Weddings |
| 3 | 100% | שביעות רצון | Satisfaction |
| 4 | 🇮🇱 | כיסוי ארצי | Nationwide |

#### Testimonials

**Sample testimonials to include (3–5 rotating):**

| Client | Event | Quote (HE) | Quote (EN) |
|--------|-------|-----------|-----------|
| שרה ודניאל | חתונה, תל אביב | "אחרי שראינו את התמונות בכינו מרוב ריגוש — כל רגע היה שם" | "We cried when we saw our photos — every single moment was captured" |
| משפחת כהן | צילומי משפחה | "סוף סוף יש לנו תמונה שבאמת משקפת מי שאנחנו כמשפחה" | "We finally have a photo that truly reflects who we are as a family" |
| נועה ואיתי | חתונה, ירושלים | "הצלם הפך כל רגע קטן לזיכרון ענק — ממליצים בלי סוף" | "The photographer turned every small moment into a huge memory — can't recommend enough" |

#### Process / How It Works

| Step | Title (HE) | Title (EN) | Description (HE) | Description (EN) |
|------|-----------|-----------|------------------|------------------|
| 1 | שיחת ייעוץ חינם | Free Consultation | ספרו לנו על החזון שלכם — נתאים לכם חבילה מושלמת | Tell us your vision — we'll craft the perfect package |
| 2 | תכנון הצילום | Plan Your Shoot | לוקיישנים, סגנון, טיימליין — נתכנן הכל מראש | Locations, style, timeline — we plan everything in advance |
| 3 | יוצרים קסם | We Create Magic | ביום הצילום, כל מה שצריך לעשות זה להיות עצמכם | On shoot day, all you need to do is be yourselves |
| 4 | תוצאות מושלמות | Stunning Results | תמונות ערוכות ומוכנות — גלריה אונליין + קבצים בהבחנה גבוהה | Edited photos delivered — online gallery + high-res files |

#### Pricing Section

**Copy direction:** Acknowledge that pricing is custom. Remove anxiety about cost transparency while driving toward contact.

| Element | Hebrew | English |
|---------|--------|---------|
| **Headline** | כל פרויקט ייחודי — בדיוק כמוכם | Every Project is Unique — Just Like You |
| **Body** | ספרו לנו על החזון שלכם ונבנה חבילה מותאמת אישית שמתאימה בול | Tell us your vision and we'll create a custom package that fits perfectly |
| **CTA** | קבלו הצעת מחיר תוך 24 שעות | Get Your Custom Quote in 24 Hours |

Include 3 indicative service categories (not fixed tiers) with "starting from" messaging to qualify leads.

#### FAQ Section

| # | Question (HE) | Question (EN) |
|---|--------------|--------------|
| 1 | כמה זה עולה? | How much does it cost? |
| 2 | אתם מגיעים גם מחוץ למרכז? | Do you travel outside the center? |
| 3 | כמה זמן עד שנקבל את התמונות? | How long until we get the photos? |
| 4 | מה אם לא נאהב את התוצאות? | What if we don't like the results? |
| 5 | אפשר לקבל גם צילום וגם וידאו? | Can we get both photos and video? |
| 6 | מה צריך להכין לפני הצילום? | What should we prepare before the shoot? |
| 7 | אתם מציעים אלבומים מודפסים? | Do you offer printed albums? |
| 8 | מה מדיניות הביטולים? | What is the cancellation policy? |

**Answer Direction:** Every answer must reinforce value and remove hesitation. E.g., for pricing: "Every project is different, and we believe in transparent, custom pricing that matches your exact needs. Most wedding packages start from ₪X,XXX. Contact us for a free consultation and detailed quote within 24 hours."

#### CTA Banner (Final)

| Element | Hebrew | English |
|---------|--------|---------|
| **Headline** | הרגע הזה לא יחזור — בואו נוודא שהוא יהיה מושלם | This Moment Won't Come Again — Let's Make Sure It's Perfect |
| **Subheadline** | דברו איתנו היום ותקבלו הצעת מחיר מותאמת תוך 24 שעות | Talk to us today and receive a custom quote within 24 hours |
| **CTA** | הזמינו עכשיו | Book Now |

**Visual:** Full-width section with a beautiful background image, dark gradient overlay, and white text.

### AI/LLM Persuasion Layer

| Asset | Format | Content |
|-------|--------|---------|
| `/llms.txt` | Plain text | Company description, services list (weddings, portraits, commercial), coverage area (all of Israel), differentiators, contact info, sample testimonials, pricing approach |
| `/api/company-info` | JSON | Structured data: services, portfolio categories, testimonials, location, contact, pricing ranges |
| JSON-LD | Embedded `<script>` | `LocalBusiness` (Photographer), `WebSite`, `Service`, `FAQPage`, `Review`, `ImageGallery` schemas |
| Semantic HTML | — | Descriptive `aria-label` on all sections, proper heading hierarchy |
| Meta descriptions | — | Elevator pitches: "MC Studio — Professional photography across Israel. Weddings, portraits, commercial. Zero compromises, stunning results." |

---

## 6. Site Architecture & Section Map

### Architectural Approach

**Hybrid architecture:** A visually-driven single-page homepage with smooth-scroll anchor navigation for the main experience, PLUS separate pages for portfolio galleries and utility pages. This approach optimizes for:

- **Visual impact:** Immersive scrolling experience on the homepage
- **SEO:** Separate portfolio pages create distinct indexable URLs per category
- **Performance:** Gallery pages load independently, preventing homepage bloat
- **Conversion:** Linear storytelling flow on homepage guides visitor toward CTA

### Homepage Section Flow

```
┌─────────────────────────────────────────┐
│  1. NAVBAR (sticky, backdrop-blur)      │
│     Logo │ Nav Links │ CTA │ Lang │ Theme│
├─────────────────────────────────────────┤
│  2. HERO (full-bleed, parallax)         │
│     Slideshow + Headline + CTAs         │
│     + Urgency Badge                     │
├─────────────────────────────────────────┤
│  3. PORTFOLIO PREVIEW (masonry grid)    │
│     6–9 images + "View Full Gallery →"  │
├─────────────────────────────────────────┤
│  4. WHY MC STUDIO (cards + icons)       │
│     4 differentiation cards             │
├─────────────────────────────────────────┤
│  5. SERVICES (tabbed/scroll)            │
│     Weddings │ Portraits │ Commercial   │
├─────────────────────────────────────────┤
│  6. STATS COUNTER BAR (full-width)      │
│     1,200+ │ 350+ │ 100% │ Nationwide  │
├─────────────────────────────────────────┤
│  7. TESTIMONIALS (carousel)             │
│     Scrolling client quote cards        │
├─────────────────────────────────────────┤
│  8. PROCESS / HOW IT WORKS (timeline)   │
│     4 steps: Consult → Plan → Shoot →  │
│     Deliver                             │
├─────────────────────────────────────────┤
│  9. FEATURED WORK / CASE STUDY          │
│     1–2 deep-dive projects              │
├─────────────────────────────────────────┤
│ 10. PRICING (custom, indicative)        │
│     3 categories + "Get Quote" CTA      │
├─────────────────────────────────────────┤
│ 11. FAQ (accordion)                     │
│     6–8 objection-handling Q&As         │
├─────────────────────────────────────────┤
│ 12. CTA BANNER (full-width, emotional)  │
│     Final conversion push               │
├─────────────────────────────────────────┤
│ 13. FOOTER                              │
│     Contact │ Social │ Nav │ Legal      │
└─────────────────────────────────────────┘
```

### Route Map

| Route | Type | Purpose |
|-------|------|---------|
| `/[locale]` | SSG | Homepage — all 13 sections |
| `/[locale]/portfolio` | SSG | Portfolio overview — all categories |
| `/[locale]/portfolio/weddings` | SSG | Full wedding gallery with lightbox |
| `/[locale]/portfolio/portraits` | SSG | Full portrait gallery with lightbox |
| `/[locale]/portfolio/commercial` | SSG | Full commercial gallery with lightbox |
| `/[locale]/contact` | SSR | Contact form + booking request + WhatsApp + map |
| `/[locale]/about` | SSG | Studio story, photographer bio, behind-the-scenes |
| `/[locale]/privacy` | SSG | Privacy policy |
| `/[locale]/terms` | SSG | Terms of service |
| `/api/company-info` | API Route | JSON endpoint for AI/LLM consumption |
| `/llms.txt` | Static | Plain-text summary for LLM crawlers |
| `/sitemap.xml` | Generated | Auto-generated sitemap |
| `/robots.txt` | Static | Crawl directives |

### Navigation Structure

**Navbar Links (scrolls to anchor on homepage, or navigates to page):**

| Label (HE) | Label (EN) | Target |
|------------|-----------|--------|
| גלריה | Portfolio | `#portfolio` / `/portfolio` |
| שירותים | Services | `#services` |
| למה אנחנו | Why Us | `#why-us` |
| תהליך העבודה | Process | `#process` |
| אודות | About | `/about` |
| צור קשר | Contact | `/contact` |
| **הזמינו עכשיו** (CTA button) | **Book Now** | `/contact` |

---

## 7. Portfolio & Gallery Pages

### Gallery Architecture

#### Portfolio Overview Page (`/[locale]/portfolio`)

- Hero banner with headline: "כל תמונה מספרת סיפור" / "Every Image Tells a Story"
- 3 category cards (Weddings, Portraits, Commercial) — each with hero image, title, image count, and CTA link
- Below cards: masonry grid of 12–16 mixed-category "best of" images
- Each image links to its category gallery

#### Category Gallery Pages (`/[locale]/portfolio/[category]`)

- Category-specific hero banner with relevant imagery
- Category description (1–2 sentences, sales-driven)
- Filter bar (if sub-categories exist, e.g., "Beach Weddings", "Indoor Ceremonies")
- Masonry grid layout with responsive columns:
  - Desktop (xl+): 4 columns
  - Laptop (lg): 3 columns
  - Tablet (md): 2 columns
  - Mobile (sm): 1–2 columns
- Hover state: subtle brightness adjustment + expand icon overlay
- Click: opens fullscreen lightbox

#### Lightbox Requirements

| Feature | Requirement |
|---------|-------------|
| Navigation | Arrow keys, swipe gestures, on-screen arrows |
| Counter | "3 / 24" image counter |
| Close | X button, Escape key, click outside |
| Background | Theme-adaptive dark overlay |
| Loading | Blur placeholder → full resolution transition |
| Zoom | Pinch-to-zoom on mobile, scroll-to-zoom on desktop |
| Sharing | Optional share button (copy link) |
| Caption | Alt text / description below image |
| Thumbnails | Optional thumbnail strip at bottom |
| Performance | Preload adjacent images (n-1, n+1) |

### Image Organization

```
/public/portfolio/
  /weddings/
    wedding-beach-tel-aviv-01.webp
    wedding-garden-jerusalem-02.webp
    ...
  /portraits/
    portrait-family-studio-01.webp
    portrait-pregnancy-outdoor-02.webp
    ...
  /commercial/
    commercial-product-jewelry-01.webp
    commercial-food-restaurant-02.webp
    ...
```

**Naming convention:** `{category}-{subcategory}-{location/type}-{number}.webp`

---

## 8. Component Inventory

### Layout Components

| Component | Location | Props / Variants | Description |
|-----------|----------|-----------------|-------------|
| `Navbar` | `/components/layout/` | `locale`, `currentPath` | Sticky navbar with backdrop-blur, logo, nav links, CTA button, language switcher, theme picker |
| `Footer` | `/components/layout/` | `locale` | Contact info, social links, quick nav, copyright, locale switcher |
| `ThemePicker` | `/components/layout/` | `currentTheme`, `onThemeChange` | 3 color swatches for theme switching |
| `LanguageSwitcher` | `/components/layout/` | `currentLocale`, `pathname` | EN/עב toggle button |
| `MobileMenu` | `/components/layout/` | `isOpen`, `onClose`, `locale` | Slide-out mobile navigation drawer |

### Section Components (Homepage)

| Component | Location | Props / Variants | Key Features |
|-----------|----------|-----------------|--------------|
| `HeroSection` | `/components/sections/` | `slides[]`, `locale` | Full-bleed slideshow, parallax scroll, animated headline, 2 CTAs, urgency badge |
| `PortfolioPreview` | `/components/sections/` | `images[]`, `locale` | Masonry grid (6–9 images), category hover labels, "View Gallery" CTA |
| `WhyUsSection` | `/components/sections/` | `cards[]`, `locale` | 4 icon cards with scroll-triggered `fade-up` animation |
| `ServicesSection` | `/components/sections/` | `services[]`, `locale` | 3 service blocks with hero image, tagline, features, CTA. Tabbed or vertical layout |
| `StatsBar` | `/components/sections/` | `stats[]`, `locale` | Full-width accent background, animated counter-up numbers on scroll |
| `TestimonialsSection` | `/components/sections/` | `testimonials[]`, `locale` | Embla carousel, auto-play with manual controls, quote cards |
| `ProcessSection` | `/components/sections/` | `steps[]`, `locale` | 4-step visual timeline with icons, RTL-aware layout |
| `FeaturedWork` | `/components/sections/` | `projects[]`, `locale` | 1–2 featured case studies with mini-gallery and client quote |
| `PricingSection` | `/components/sections/` | `categories[]`, `locale` | 3 indicative categories, "starting from" pricing, main CTA |
| `FAQSection` | `/components/sections/` | `items[]`, `locale` | Accordion (Radix UI), 6–8 items, sales-minded answers |
| `CTABanner` | `/components/sections/` | `locale` | Full-width, background image with gradient overlay, emotional headline, CTA button |

### Gallery Components

| Component | Location | Props / Variants | Description |
|-----------|----------|-----------------|-------------|
| `GalleryGrid` | `/components/gallery/` | `images[]`, `columns`, `gap` | Masonry/CSS grid layout, responsive column count |
| `GalleryImage` | `/components/gallery/` | `src`, `alt`, `blurDataURL`, `category`, `onClick` | `next/image` wrapper with hover zoom, overlay, blur placeholder |
| `Lightbox` | `/components/gallery/` | `images[]`, `initialIndex`, `isOpen`, `onClose` | Fullscreen viewer with all lightbox features (see §7) |
| `CategoryFilter` | `/components/gallery/` | `categories[]`, `activeCategory`, `onChange` | Filter pills/tabs for gallery filtering |

### Form Components

| Component | Location | Props / Variants | Description |
|-----------|----------|-----------------|-------------|
| `ContactForm` | `/components/forms/` | `locale`, `onSubmit` | Name, email, phone, event type (select), date, message, submit. React Hook Form + Zod |
| `QuoteRequestForm` | `/components/forms/` | `locale`, `onSubmit` | Extended form: service type, date range, location, budget range, details |

### shadcn/ui Primitives (to install)

| Component | Usage |
|-----------|-------|
| `Button` | CTAs, nav, form submit — variants: default, secondary, outline, ghost |
| `Card` | Service cards, testimonial cards, why-us cards, pricing cards |
| `Accordion` | FAQ section |
| `Badge` | Urgency badge, category labels |
| `Dialog` | Lightbox overlay, mobile menu |
| `Input` | Form text fields |
| `Textarea` | Form message field |
| `Select` | Form dropdowns (event type, service type) |
| `Label` | Form field labels |
| `Separator` | Visual dividers |
| `Sheet` | Mobile navigation drawer |
| `Tabs` | Services section tabbed layout |
| `Tooltip` | Theme picker, language switcher labels |
| `Skeleton` | Image loading states |

### Utility Components

| Component | Location | Props | Description |
|-----------|----------|-------|-------------|
| `ScrollReveal` | `/components/ui/` | `children`, `animation`, `delay`, `threshold` | Framer Motion wrapper for scroll-triggered animations |
| `AnimatedCounter` | `/components/ui/` | `target`, `duration`, `suffix` | Animated number counter for stats |
| `SectionWrapper` | `/components/ui/` | `children`, `id`, `className`, `fullBleed` | Consistent section padding, max-width, anchor ID |
| `BlurImage` | `/components/ui/` | `src`, `alt`, `blurDataURL`, `...nextImageProps` | `next/image` wrapper with blur-up transition |

---

## 9. Image Strategy & Optimization

### Image Pipeline

```
Source Image (high-res JPEG/RAW)
  ↓
Optimized WebP (via sharp at build time)
  ↓
Multiple srcset sizes generated:
  640w, 768w, 1024w, 1280w, 1920w, 2560w
  ↓
Blur placeholder generated (plaiceholder/blurhash)
  ↓
Served via next/image with:
  - WebP/AVIF auto-negotiation
  - Responsive sizes attribute
  - Lazy loading (below-fold) / Priority (above-fold)
  - Blur-up placeholder transition
```

### Image Optimization Rules

| Rule | Implementation |
|------|---------------|
| All images via `next/image` | No raw `<img>` tags anywhere |
| Responsive `sizes` attribute | Defined per context: `(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw` for gallery grid |
| Format negotiation | WebP/AVIF via Next.js Image Optimization |
| Blur placeholders (LQIP) | Generated at build time with `plaiceholder` — base64 blur data stored in portfolio data |
| Lazy loading | Default for all below-fold images |
| Priority loading | Hero slideshow images (first 2–3), above-fold portfolio preview images |
| srcset breakpoints | 640, 768, 1024, 1280, 1920, 2560px |
| Quality | 85 for gallery thumbnails, 90 for lightbox full-res |

### Gallery Image Tiers

| Tier | Usage | Max Width | Quality | Loading |
|------|-------|-----------|---------|---------|
| Thumbnail | Gallery grid, portfolio preview | 800px | 85 | Lazy + blur placeholder |
| Medium | Service cards, featured work | 1200px | 85 | Lazy + blur placeholder |
| Full | Lightbox, hero slideshow | 2560px | 90 | On-demand (lightbox) / Priority (hero) |

### Placeholder Strategy (Initial Launch)

| Category | Count | Source |
|----------|-------|--------|
| Weddings | 8–10 images | Curated Unsplash or real MC Studio work |
| Portraits | 6–8 images | Curated Unsplash or real MC Studio work |
| Commercial | 4–6 images | Curated Unsplash or real MC Studio work |

**Each image requires:**
- Descriptive `alt` text in both Hebrew and English (stored in locale JSON)
- SEO-friendly filename: `wedding-photography-tel-aviv-beach.webp`
- Category and subcategory tags
- Generated blur placeholder data (base64)

### Future Image Architecture

- **Headless CMS** (Sanity/Contentful) for portfolio management
- **Image CDN** (Cloudinary/Imgix) for dynamic transformations at scale
- **Client galleries** with password-protected access

---

## 10. Design System Specification

### Typography Scale

| Token | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| `display` | 72–80px (mobile: 40–48px) | 700 | 1.1 | Hero headlines |
| `h1` | 48–56px (mobile: 32–36px) | 700 | 1.2 | Page titles |
| `h2` | 36–40px (mobile: 28–30px) | 600 | 1.25 | Section headings |
| `h3` | 28–32px (mobile: 22–24px) | 600 | 1.3 | Sub-section headings |
| `h4` | 22–24px (mobile: 18–20px) | 600 | 1.35 | Card titles |
| `body` | 16–18px | 400 | 1.6 | Body text |
| `body-sm` | 14px | 400 | 1.5 | Secondary text, captions |
| `caption` | 12px | 400 | 1.4 | Labels, metadata |

**Hebrew typography:** `Heebo` at same scale. Hebrew text tends to appear slightly larger than Latin at the same pixel size — adjust `letter-spacing` and `line-height` accordingly.

**English display:** `Playfair Display` for editorial drama in headlines. `DM Sans` for clean body text.

### Spacing & Layout

| Token | Value | Usage |
|-------|-------|-------|
| Section vertical padding | `py-20` to `py-32` (80px–128px) | Generous breathing room between sections |
| Max content width | `max-w-7xl` (1280px) or custom `1400px` | Wider for visual content |
| Full-bleed | `w-full` (no max-width constraint) | Hero, stats bar, CTA banner, featured images |
| Card gap | `gap-6` to `gap-8` | Between cards in grids |
| Gallery gap | `gap-3` to `gap-4` | Between gallery images (tighter) |
| Mobile padding | `px-4` to `px-6` | Consistent horizontal padding |

### Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|---------------|
| `sm` | 640px | Single column → stacked cards |
| `md` | 768px | 2-column grids, tablet nav |
| `lg` | 1024px | 3-column grids, desktop nav |
| `xl` | 1280px | Full layout, larger images |
| `2xl` | 1536px | Maximum visual impact |

### Component Style Tokens

#### Image Cards
- Border radius: `rounded-xl` (12px)
- Shadow: `shadow-md` on hover
- Hover: `scale-[1.03]` with `transition-transform duration-300`
- Optional overlay: linear gradient from transparent to black/50% for text overlay

#### Service Cards
- Large hero image (aspect 16:9 or 4:3) at top
- Content padding: `p-6` to `p-8`
- Warm background tint (uses `--card` token)
- Clear CTA button at bottom
- Border radius: `rounded-2xl`

#### Testimonial Cards
- Soft card background (`--card`)
- Large decorative quotation mark (`` ❝ `` or SVG) in `--accent` color, opacity 20%
- Quote text in `body` or slightly larger
- Client name, event type, location at bottom in `body-sm` + `muted-foreground`
- Border radius: `rounded-xl`

#### Buttons

| Variant | Style |
|---------|-------|
| Primary | `bg-primary text-primary-foreground` fill, `rounded-full` or `rounded-lg`, `px-8 py-3` |
| Secondary | `border border-primary text-primary` outline, same rounding |
| Ghost | `text-foreground hover:bg-muted`, no border |
| Hover (all) | Subtle lift (`translateY(-1px)`) + shadow increase or color shift |

#### Gallery Grid
- CSS Grid masonry (using `grid-template-rows: masonry` where supported, JS fallback)
- Hover: brightness shift (`brightness-105`) + icon overlay (expand/zoom icon centered)
- Transition: `transition-all duration-300 ease-out`

### Animation Presets (Framer Motion)

```typescript
// /lib/animations.ts

export const animations = {
  fadeUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 },
  },
  imageReveal: {
    initial: { clipPath: "inset(0 100% 0 0)" }, // RTL-aware: swap for Hebrew
    animate: { clipPath: "inset(0 0% 0 0)" },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  staggerChildren: {
    animate: { transition: { staggerChildren: 0.1 } },
  },
  counterUp: {
    // Animate from 0 to target value
    duration: 2, // seconds
    ease: "easeOut",
  },
  parallaxScroll: {
    // Y-axis movement: ±30px tied to scroll position
    strength: 30,
  },
  heroSlideshow: {
    // Crossfade between images
    interval: 4000, // ms
    transition: { duration: 1, ease: "easeInOut" },
  },
  hoverZoom: {
    whileHover: { scale: 1.05 },
    transition: { duration: 0.3 },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  },
  slideInRight: {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
```

**RTL Awareness:** `slideInLeft` and `slideInRight` swap direction when `dir="rtl"`. The `imageReveal` clip-path direction also reverses.

---

## 11. i18n & RTL Strategy

### Routing

- **Locale routing** via `next-intl` middleware: `/en/...` and `/he/...`
- Default locale: `he` (Hebrew) — most traffic expected from Israel
- Fallback locale: `en`
- Middleware redirects `/` to `/he`
- `hreflang` tags on every page linking `/en/` ↔ `/he/`

### RTL Implementation

| Aspect | Implementation |
|--------|---------------|
| `dir` attribute | Set on `<html>` element: `dir="rtl"` for Hebrew, `dir="ltr"` for English |
| Tailwind RTL | Use Tailwind's `rtl:` variant prefix for directional styles |
| Logical properties | Prefer `ms-` / `me-` (margin-inline-start/end) over `ml-` / `mr-` where possible |
| Layout mirroring | All flex/grid layouts flip direction via `dir` attribute |
| Icon positions | Arrow icons, chevrons reverse in RTL |
| Carousel direction | Swipe and auto-play direction reverses in RTL |
| Text alignment | Body text: `text-start` (inherits direction). Headlines may center. |
| Form fields | Input text direction matches locale |
| Numbers | Remain LTR even in Hebrew context |

### Language Switcher

- Toggle component in navbar: `EN / עב`
- Clicking switches locale while preserving current path (e.g., `/he/portfolio/weddings` → `/en/portfolio/weddings`)
- Current locale visually highlighted (bold, underline, or active state)
- Locale preference persisted via cookie

### Translation File Structure

- `/messages/en.json` — All English strings
- `/messages/he.json` — All Hebrew strings
- **Zero hardcoded strings** in components
- All strings accessed via `useTranslations()` hook from `next-intl`
- ICU message format for pluralization and interpolation

### Hebrew Copy Guidelines

- Hebrew copy must be **natively written**, not translated from English
- Tone: warm, personal, Israeli conversational (not formal/corporate)
- Use second person plural (אתם) for couples, second person singular for individuals
- Photography terms can use common English loanwords in Hebrew (פורטפוליו, גלריה)

---

## 12. SEO & LLM Accessibility Strategy

### Traditional SEO

| Feature | Implementation |
|---------|---------------|
| Metadata API | `next/metadata` for all pages — title, description, OG, Twitter Cards |
| Open Graph | Unique OG image per page (best portfolio image for gallery pages) |
| Twitter Cards | `summary_large_image` for visual impact |
| Canonical URLs | Per locale, self-referencing |
| `hreflang` | `<link rel="alternate" hreflang="he" href="..." />` + `hreflang="en"` on every page |
| Sitemap | Auto-generated `sitemap.xml` via `next-sitemap` or built-in Next.js |
| `robots.txt` | Allow all, point to sitemap |
| Heading hierarchy | Single `<h1>` per page, logical `h2`→`h6` nesting |
| Image SEO | Descriptive filenames, alt text in both languages, `<figure>` + `<figcaption>` |
| Local SEO | Location mentions (Israel, nationwide) in meta descriptions, content, and structured data |

### JSON-LD Structured Data

| Schema Type | Page | Key Properties |
|-------------|------|----------------|
| `LocalBusiness` (Photographer) | All pages | name, description, address (Israel), telephone, areaServed, priceRange, image, aggregateRating |
| `WebSite` | Homepage | name, url, potentialAction (SearchAction) |
| `Service` (×3) | Homepage, Services | name, description, provider, areaServed |
| `FAQPage` | Homepage (FAQ section) | mainEntity: Question[] with acceptedAnswer |
| `Review` (×N) | Homepage (Testimonials) | author, reviewBody, reviewRating |
| `ImageGallery` | Portfolio pages | name, description, image[] |
| `BreadcrumbList` | All sub-pages | itemListElement[] |

### Meta Description Templates

| Page | Template |
|------|----------|
| Homepage (HE) | MC Studio — צילום מקצועי בכל הארץ. חתונות, פורטרטים, צילום מסחרי. ללא פשרות, תוצאות מדהימות. |
| Homepage (EN) | MC Studio — Professional photography across Israel. Weddings, portraits, commercial. Zero compromises, stunning results. |
| Portfolio (EN) | Browse MC Studio's portfolio — stunning wedding, portrait, and commercial photography from across Israel. |
| Contact (EN) | Book your session with MC Studio. Get a custom quote within 24 hours. Professional photography anywhere in Israel. |

### LLM Accessibility

#### `/llms.txt` Content Structure

```
# MC Studio — Professional Photography Studio

## About
MC Studio is a premium photography studio based in Israel offering professional photography services nationwide.

## Services
- Wedding & Event Photography: Full-day coverage, engagement sessions, edited albums
- Portrait Photography: Family, pregnancy, headshots, styled sessions
- Commercial Photography: Product photography, brand visuals, e-commerce

## Coverage Area
All of Israel — from Eilat to Metula. We travel to any location.

## Differentiators
- Zero compromises: We reshoot if needed
- Unlimited editing revisions until full satisfaction
- Nationwide coverage
- Boutique-level personal service
- Versatile expertise across all photography types

## Contact
- Website: [URL]
- Phone: [phone]
- Email: [email]
- WhatsApp: [number]
- Instagram: @mcstudio

## Pricing
Custom packages tailored to each project. Wedding packages start from ₪X,XXX. Contact for a free consultation.

## Client Testimonials
- "We cried when we saw our photos — every single moment was captured" — Sarah & Daniel, Wedding
- "We finally have a photo that truly reflects who we are as a family" — Cohen Family

## Languages
Hebrew, English
```

#### `/api/company-info` Response Schema

```json
{
  "name": "MC Studio",
  "type": "Photography Studio",
  "description": "Premium photography studio offering professional services across Israel",
  "location": {
    "country": "Israel",
    "coverage": "Nationwide"
  },
  "services": [
    {
      "name": "Wedding & Event Photography",
      "description": "...",
      "deliverables": ["Full-day coverage", "Engagement session", "Edited album", "Online gallery"]
    },
    ...
  ],
  "differentiators": [...],
  "testimonials": [...],
  "contact": {
    "phone": "...",
    "email": "...",
    "whatsapp": "...",
    "website": "...",
    "instagram": "..."
  },
  "languages": ["Hebrew", "English"],
  "stats": {
    "sessions": "1200+",
    "weddings": "350+",
    "satisfaction": "100%"
  }
}
```

### Semantic HTML Requirements

- All sections wrapped in `<section>` with descriptive `aria-label`
- Gallery images in `<figure>` + `<figcaption>`
- Navigation in `<nav>` with `aria-label`
- Footer in `<footer>`
- Main content in `<main>`
- Testimonials as `<blockquote>` with `<cite>`
- FAQ as definition list or accordion with proper ARIA roles

---

## 13. Performance Budget & Optimization Plan

### Performance Targets

| Metric | Target | Notes |
|--------|--------|-------|
| Lighthouse Performance | 90+ | Slightly lower acceptable due to image-heavy nature |
| Lighthouse Accessibility | 95+ | WCAG AA compliance mandatory |
| Lighthouse Best Practices | 95+ | — |
| Lighthouse SEO | 100 | All structured data, meta tags, semantic HTML |
| LCP (Largest Contentful Paint) | < 2.5s | Hero image is critical path |
| FID (First Input Delay) | < 100ms | Minimal JS on initial load |
| CLS (Cumulative Layout Shift) | < 0.1 | Image dimensions declared, font swap |
| Total JS bundle (gzipped) | < 180KB | Code splitting per route |
| Hero image load | < 1.5s | Priority loaded, optimized, CDN |

### Optimization Strategy

| Strategy | Implementation |
|----------|---------------|
| **Rendering** | SSG for all static pages (homepage, portfolio, about). SSR only for contact form page |
| **Client Components** | `"use client"` only for: animation triggers, theme/language toggles, form interactions, lightbox, intersection observers, carousel |
| **Image Optimization** | `next/image` with WebP/AVIF, responsive `sizes`, blur placeholders, lazy loading |
| **Font Loading** | `next/font` with `display: swap`, preload critical fonts only |
| **Lazy Loading** | All below-fold images and sections. Gallery images load as user scrolls |
| **Code Splitting** | Automatic per-route splitting. Portfolio pages separate from homepage |
| **Bundle Analysis** | `@next/bundle-analyzer` during development |
| **Animation Performance** | Use `transform` and `opacity` only (GPU-accelerated). Avoid layout-triggering animations |
| **Third-party Scripts** | Defer analytics scripts. No blocking third-party resources |
| **Image CDN** | Consider Cloudinary/Imgix for future scale (500+ images) |

### Critical Rendering Path

```
1. HTML (SSG/SSR) — includes all text content, metadata, JSON-LD
2. CSS (Tailwind, inlined critical) — theme variables applied
3. Fonts (next/font, preloaded, swap) — display font + body font
4. Hero image (priority, optimized WebP, blur placeholder)
5. Above-fold portfolio images (priority, blur placeholders)
6. Client JS (hydration) — theme switcher, language toggle
7. Below-fold content (lazy) — remaining sections, animations
8. Gallery images (lazy, on-scroll) — blur-up loading
9. Analytics (deferred) — Vercel Analytics, Speed Insights
```

---

## 14. Folder Structure

```
mc-studio/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx                    # Root locale layout (dir, lang, fonts, theme)
│   │   ├── page.tsx                      # Homepage (all 13 sections)
│   │   ├── portfolio/
│   │   │   ├── page.tsx                  # Portfolio overview
│   │   │   ├── weddings/
│   │   │   │   └── page.tsx              # Wedding gallery
│   │   │   ├── portraits/
│   │   │   │   └── page.tsx              # Portrait gallery
│   │   │   └── commercial/
│   │   │       └── page.tsx              # Commercial gallery
│   │   ├── contact/
│   │   │   └── page.tsx                  # Contact form + booking
│   │   ├── about/
│   │   │   └── page.tsx                  # About / bio page
│   │   ├── privacy/
│   │   │   └── page.tsx                  # Privacy policy
│   │   └── terms/
│   │       └── page.tsx                  # Terms of service
│   ├── api/
│   │   └── company-info/
│   │       └── route.ts                  # JSON endpoint for AI/LLM
│   ├── layout.tsx                        # Root layout (html, body)
│   ├── not-found.tsx                     # 404 page
│   └── globals.css                       # Tailwind imports (moved here or in /styles)
│
├── components/
│   ├── ui/                               # shadcn/ui primitives
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── accordion.tsx
│   │   ├── badge.tsx
│   │   ├── dialog.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── select.tsx
│   │   ├── label.tsx
│   │   ├── separator.tsx
│   │   ├── sheet.tsx
│   │   ├── tabs.tsx
│   │   ├── tooltip.tsx
│   │   ├── skeleton.tsx
│   │   ├── scroll-reveal.tsx             # Custom: Framer Motion scroll trigger
│   │   ├── animated-counter.tsx          # Custom: Number counter animation
│   │   ├── section-wrapper.tsx           # Custom: Section layout wrapper
│   │   └── blur-image.tsx               # Custom: next/image + blur-up
│   │
│   ├── sections/                         # Homepage sections
│   │   ├── hero-section.tsx
│   │   ├── portfolio-preview.tsx
│   │   ├── why-us-section.tsx
│   │   ├── services-section.tsx
│   │   ├── stats-bar.tsx
│   │   ├── testimonials-section.tsx
│   │   ├── process-section.tsx
│   │   ├── featured-work.tsx
│   │   ├── pricing-section.tsx
│   │   ├── faq-section.tsx
│   │   └── cta-banner.tsx
│   │
│   ├── gallery/                          # Gallery system
│   │   ├── gallery-grid.tsx
│   │   ├── gallery-image.tsx
│   │   ├── lightbox.tsx
│   │   └── category-filter.tsx
│   │
│   ├── layout/                           # Layout components
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   ├── theme-picker.tsx
│   │   ├── language-switcher.tsx
│   │   └── mobile-menu.tsx
│   │
│   └── forms/                            # Form components
│       ├── contact-form.tsx
│       └── quote-request-form.tsx
│
├── lib/
│   ├── utils.ts                          # cn() helper, misc utilities
│   ├── animations.ts                     # Framer Motion preset variants
│   ├── schemas.ts                        # Zod form validation schemas
│   └── portfolio-data.ts                 # Image metadata, categories, blur data
│
├── messages/
│   ├── en.json                           # English translations
│   └── he.json                           # Hebrew translations
│
├── public/
│   ├── portfolio/
│   │   ├── weddings/                     # Wedding gallery images
│   │   ├── portraits/                    # Portrait gallery images
│   │   └── commercial/                   # Commercial gallery images
│   ├── team/                             # Photographer headshots / team photos
│   ├── logos/                            # MC Studio logo variants (light, dark, icon)
│   ├── og/                               # OG images per page
│   ├── llms.txt                          # LLM-readable company summary
│   └── robots.txt                        # Crawl directives
│
├── styles/
│   └── globals.css                       # Tailwind v4 imports + theme CSS variables
│
├── i18n/
│   ├── config.ts                         # next-intl configuration
│   └── request.ts                        # next-intl request config
│
├── middleware.ts                          # next-intl locale routing middleware
├── next.config.ts                        # Next.js configuration
├── tailwind.config.ts                    # Tailwind v4 configuration
├── tsconfig.json                         # TypeScript configuration
├── package.json                          # Dependencies
├── pnpm-lock.yaml                        # Lock file
├── .eslintrc.json                        # ESLint configuration
├── .prettierrc                           # Prettier configuration
├── .husky/                               # Git hooks
│   └── pre-commit                        # Lint + format on commit
└── PRD.md                                # This document
```

---

## 15. Data & Content Model

### Locale JSON Schema

Full structure for `/messages/en.json` and `/messages/he.json`:

```jsonc
{
  // ── Navigation ──
  "nav": {
    "logo": "MC Studio",
    "portfolio": "Portfolio",
    "services": "Services",
    "whyUs": "Why Us",
    "process": "Process",
    "about": "About",
    "contact": "Contact",
    "bookNow": "Book Now",
    "themeLabel": "Change theme",
    "menuOpen": "Open menu",
    "menuClose": "Close menu"
  },

  // ── Hero Section ──
  "hero": {
    "headline": "Your Most Beautiful Moments, Captured Forever",
    "subheadline": "Because you only get one chance to photograph the most important day of your life",
    "cta1": "Check Availability",
    "cta2": "View Portfolio",
    "urgencyBadge": "Summer 2026 — Only 4 Dates Remaining",
    "slides": [
      { "alt": "Elegant wedding ceremony at sunset on Tel Aviv beach" },
      { "alt": "Joyful family portrait session in a sunlit Jerusalem garden" },
      { "alt": "Stunning product photography for luxury jewelry brand" },
      { "alt": "Emotional first dance at a Galilee vineyard wedding" },
      { "alt": "Beautiful pregnancy portrait in golden hour light" }
    ]
  },

  // ── Portfolio Preview ──
  "portfolioPreview": {
    "title": "Through Our Lens",
    "subtitle": "A glimpse of the moments we've captured",
    "viewAll": "View Full Gallery →",
    "categories": {
      "weddings": "Weddings",
      "portraits": "Portraits",
      "commercial": "Commercial"
    }
  },

  // ── Why MC Studio ──
  "whyUs": {
    "title": "Why MC Studio?",
    "subtitle": "What sets us apart from every other photographer",
    "cards": [
      {
        "title": "Zero Compromises",
        "description": "If we need to reshoot — we reshoot. Your photos must be perfect.",
        "stat": "100%",
        "statLabel": "Satisfaction"
      },
      {
        "title": "Edit Until You Love It",
        "description": "Unlimited revision rounds until every image is exactly as you dreamed.",
        "stat": "∞",
        "statLabel": "Revisions"
      },
      {
        "title": "Anywhere in Israel",
        "description": "From Eilat to Metula — we come to wherever your event is.",
        "stat": "🇮🇱",
        "statLabel": "Nationwide"
      },
      {
        "title": "Your Vision, Our Expertise",
        "description": "A collaborative creative process ensuring the result reflects exactly who you are.",
        "stat": "1:1",
        "statLabel": "Personal"
      }
    ]
  },

  // ── Services ──
  "services": {
    "title": "Our Services",
    "subtitle": "Professional photography for every moment that matters",
    "items": [
      {
        "id": "weddings",
        "title": "Weddings & Events",
        "tagline": "Your love story deserves more than snapshots",
        "description": "We capture the real, raw, beautiful moments of your wedding day — from the nervous butterflies to the last dance.",
        "features": [
          "Full-day coverage (up to 12 hours)",
          "Engagement / pre-wedding session",
          "500+ professionally edited images",
          "Online gallery with download access",
          "Premium album design (optional)"
        ],
        "cta": "Book Your Wedding"
      },
      {
        "id": "portraits",
        "title": "Portraits",
        "tagline": "See yourself the way your loved ones see you",
        "description": "Family portraits, pregnancy sessions, professional headshots — we create images that capture who you truly are.",
        "features": [
          "1–2 hour styled session",
          "Indoor studio or outdoor location",
          "30+ retouched images",
          "Multiple outfit changes",
          "Print-ready high-resolution files"
        ],
        "cta": "Book Your Session"
      },
      {
        "id": "commercial",
        "title": "Commercial & Product",
        "tagline": "Products that look as good as they perform",
        "description": "High-quality product photography, brand visuals, and commercial imagery that drives sales and builds brand trust.",
        "features": [
          "Product photography (flat lay, lifestyle, packshot)",
          "Brand identity visuals",
          "E-commerce optimized images",
          "Team headshots & corporate",
          "Social media content packages"
        ],
        "cta": "Get a Quote"
      }
    ]
  },

  // ── Stats ──
  "stats": {
    "items": [
      { "value": 1200, "suffix": "+", "label": "Sessions Captured" },
      { "value": 350, "suffix": "+", "label": "Weddings" },
      { "value": 100, "suffix": "%", "label": "Satisfaction" },
      { "value": null, "suffix": "", "label": "Nationwide Coverage", "icon": "map-pin" }
    ]
  },

  // ── Testimonials ──
  "testimonials": {
    "title": "What Our Clients Say",
    "subtitle": "Real stories from real couples and families",
    "items": [
      {
        "quote": "We cried when we saw our photos — every single moment was captured beautifully.",
        "name": "Sarah & Daniel",
        "eventType": "Wedding",
        "location": "Tel Aviv"
      },
      {
        "quote": "We finally have a photo that truly reflects who we are as a family. It hangs in our living room.",
        "name": "The Cohen Family",
        "eventType": "Family Portrait",
        "location": "Jerusalem"
      },
      {
        "quote": "The photographer turned every small moment into a huge memory — can't recommend enough.",
        "name": "Noa & Itai",
        "eventType": "Wedding",
        "location": "Jerusalem"
      },
      {
        "quote": "Our product photos increased our online sales by 40%. The quality speaks for itself.",
        "name": "Maya L.",
        "eventType": "Product Photography",
        "location": "Haifa"
      },
      {
        "quote": "I've never felt so beautiful. The pregnancy photos are something I'll treasure forever.",
        "name": "Yael S.",
        "eventType": "Pregnancy Portrait",
        "location": "Herzliya"
      }
    ]
  },

  // ── Process ──
  "process": {
    "title": "How It Works",
    "subtitle": "From first call to final delivery — we've got you covered",
    "steps": [
      {
        "number": "01",
        "title": "Free Consultation",
        "description": "Tell us your vision — we'll craft the perfect package tailored to your needs and budget."
      },
      {
        "number": "02",
        "title": "Plan Your Shoot",
        "description": "Locations, style, timeline, wardrobe — we plan every detail in advance so you can relax."
      },
      {
        "number": "03",
        "title": "We Create Magic",
        "description": "On shoot day, all you need to do is be yourselves. We handle the light, the angles, and the moments."
      },
      {
        "number": "04",
        "title": "Stunning Results",
        "description": "Professionally edited photos delivered to your online gallery — plus high-res files for printing."
      }
    ]
  },

  // ── Featured Work ──
  "featuredWork": {
    "title": "Featured Stories",
    "subtitle": "A deeper look at some of our favorite projects",
    "items": [
      {
        "title": "Sarah & Daniel's Beach Wedding",
        "eventType": "Wedding",
        "location": "Tel Aviv",
        "description": "A golden sunset ceremony on the Tel Aviv coastline, followed by an unforgettable celebration under the stars.",
        "clientQuote": "Every photo feels like a movie scene. We relive our wedding day every time we open the album.",
        "clientName": "Sarah & Daniel",
        "imageCount": 6
      }
    ]
  },

  // ── Pricing ──
  "pricing": {
    "title": "Investment",
    "subtitle": "Every project is unique — just like you",
    "description": "Tell us your vision and we'll create a custom package that fits perfectly. No hidden fees, no surprises.",
    "categories": [
      {
        "name": "Weddings & Events",
        "startingFrom": "Starting from ₪X,XXX",
        "includes": ["Full-day coverage", "500+ edited photos", "Online gallery", "Engagement session"]
      },
      {
        "name": "Portrait Sessions",
        "startingFrom": "Starting from ₪X,XXX",
        "includes": ["1–2 hour session", "30+ retouched images", "Studio or outdoor", "Print-ready files"]
      },
      {
        "name": "Commercial Photography",
        "startingFrom": "Starting from ₪X,XXX",
        "includes": ["Product / brand photography", "Retouched images", "Commercial usage rights", "E-commerce optimized"]
      }
    ],
    "cta": "Get Your Custom Quote in 24 Hours",
    "note": "All packages include professional editing and unlimited revisions"
  },

  // ── FAQ ──
  "faq": {
    "title": "Frequently Asked Questions",
    "subtitle": "Everything you need to know before booking",
    "items": [
      {
        "question": "How much does it cost?",
        "answer": "Every project is different, and we believe in transparent, custom pricing that matches your exact needs. Most wedding packages start from ₪X,XXX, portrait sessions from ₪X,XXX. Contact us for a free consultation and detailed quote within 24 hours — no obligations."
      },
      {
        "question": "Do you travel outside the center of Israel?",
        "answer": "Absolutely! We cover all of Israel — from Eilat in the south to Metula in the north. Travel is included in most packages. We've shot weddings at Dead Sea resorts, Galilee vineyards, Negev desert locations, and everywhere in between."
      },
      {
        "question": "How long until we get the photos?",
        "answer": "Typical turnaround is 2–4 weeks for weddings and 1–2 weeks for portrait and commercial sessions. We'll give you a sneak peek of 10–15 images within 48 hours of your shoot so you have something to share immediately."
      },
      {
        "question": "What if we don't like the results?",
        "answer": "We include unlimited revision rounds in every package. We don't stop until you love every single image. In our 350+ weddings, we've maintained a 100% satisfaction rate — and we intend to keep it that way."
      },
      {
        "question": "Can we get both photos and video?",
        "answer": "Yes! We work with trusted videography partners and can offer combined photo + video packages. Ask us about bundle pricing during your consultation."
      },
      {
        "question": "What should we prepare before the shoot?",
        "answer": "We'll send you a detailed preparation guide after booking. For weddings, we'll coordinate with your planner. For portraits, we'll advise on wardrobe, location scouting, and timing for the best light. We handle the creative details — you just show up and be yourselves."
      },
      {
        "question": "Do you offer printed albums?",
        "answer": "Yes, we offer premium hand-crafted albums in various sizes and finishes. Album design is a collaborative process — we create the layout and you approve every page. Albums can be added to any package."
      },
      {
        "question": "What is the cancellation policy?",
        "answer": "We understand plans change. Cancellations made 30+ days before the shoot receive a full refund minus deposit. Cancellations within 30 days can be rescheduled to a new date at no additional cost, subject to availability."
      }
    ]
  },

  // ── CTA Banner ──
  "ctaBanner": {
    "headline": "This Moment Won't Come Again",
    "subheadline": "Let's make sure it's perfect. Talk to us today and receive a custom quote within 24 hours.",
    "cta": "Book Now"
  },

  // ── Contact Page ──
  "contact": {
    "title": "Let's Create Something Beautiful",
    "subtitle": "Fill out the form below and we'll get back to you within 24 hours",
    "form": {
      "name": "Full Name",
      "email": "Email Address",
      "phone": "Phone Number",
      "eventType": "Type of Session",
      "eventTypeOptions": ["Wedding", "Portrait — Family", "Portrait — Pregnancy", "Portrait — Headshot", "Commercial — Product", "Commercial — Brand", "Other"],
      "date": "Preferred Date",
      "message": "Tell us about your vision",
      "submit": "Send Message",
      "sending": "Sending...",
      "success": "Thank you! We'll be in touch within 24 hours.",
      "error": "Something went wrong. Please try again or contact us directly."
    },
    "directContact": {
      "title": "Prefer to talk directly?",
      "phone": "+972-XX-XXX-XXXX",
      "email": "hello@mcstudio.co.il",
      "whatsapp": "Chat on WhatsApp",
      "whatsappMessage": "Hi! I'm interested in photography services from MC Studio."
    }
  },

  // ── About Page ──
  "about": {
    "title": "About MC Studio",
    "subtitle": "The story behind the lens",
    "bio": [
      "MC Studio was founded with a simple belief: every moment deserves to be captured perfectly.",
      "We're not a photography factory — we're a boutique studio that gives every project our full creative attention.",
      "Our approach combines technical excellence with genuine human connection, because the best photos happen when people feel comfortable and free to be themselves."
    ],
    "values": [
      {
        "title": "Perfection, Not Compromise",
        "description": "We don't deliver 'good enough.' Every image is edited, refined, and perfected until it meets our standards — and yours."
      },
      {
        "title": "People First",
        "description": "Behind every lens is a human connection. We take the time to understand your story, your style, and your vision."
      },
      {
        "title": "Anywhere, Anytime",
        "description": "Your perfect location shouldn't be limited by geography. We travel anywhere in Israel to capture your moments."
      }
    ]
  },

  // ── Footer ──
  "footer": {
    "tagline": "Professional photography, zero compromises.",
    "navigation": "Quick Links",
    "contactTitle": "Get in Touch",
    "socialTitle": "Follow Us",
    "copyright": "© {year} MC Studio. All rights reserved.",
    "privacy": "Privacy Policy",
    "terms": "Terms of Service"
  },

  // ── Common / Shared ──
  "common": {
    "loading": "Loading...",
    "viewMore": "View More",
    "back": "Back",
    "allRightsReserved": "All Rights Reserved",
    "scrollDown": "Scroll down",
    "close": "Close",
    "next": "Next",
    "previous": "Previous",
    "of": "of"
  },

  // ── SEO (per page) ──
  "seo": {
    "home": {
      "title": "MC Studio — Professional Photography Across Israel",
      "description": "MC Studio — Professional photography across Israel. Weddings, portraits, commercial. Zero compromises, stunning results. Book your session today."
    },
    "portfolio": {
      "title": "Portfolio — MC Studio Photography",
      "description": "Browse MC Studio's stunning portfolio — wedding, portrait, and commercial photography from across Israel."
    },
    "portfolioWeddings": {
      "title": "Wedding Photography — MC Studio",
      "description": "Beautiful wedding photography across Israel. See our wedding portfolio — every love story captured perfectly."
    },
    "portfolioPortraits": {
      "title": "Portrait Photography — MC Studio",
      "description": "Professional portrait photography — families, pregnancy, headshots. Timeless images that capture who you truly are."
    },
    "portfolioCommercial": {
      "title": "Commercial Photography — MC Studio",
      "description": "High-quality product and commercial photography. Images that drive sales and build brand trust."
    },
    "contact": {
      "title": "Book Your Session — MC Studio",
      "description": "Book your photography session with MC Studio. Get a custom quote within 24 hours. Professional photography anywhere in Israel."
    },
    "about": {
      "title": "About MC Studio — Our Story",
      "description": "Learn about MC Studio — the premium photography studio behind the lens. Our story, values, and commitment to perfection."
    }
  }
}
```

### Portfolio Data Model (`/lib/portfolio-data.ts`)

```typescript
interface PortfolioImage {
  id: string;
  src: string;                    // Path: /portfolio/weddings/...
  alt: { en: string; he: string }; // Bilingual alt text
  category: "weddings" | "portraits" | "commercial";
  subcategory?: string;           // e.g., "beach", "garden", "family", "product"
  width: number;
  height: number;
  blurDataURL: string;            // Base64 blur placeholder
  featured?: boolean;             // Show in homepage preview
  priority?: boolean;             // Priority loading (above-fold)
  date?: string;                  // ISO date
  client?: string;                // Optional client name
  location?: string;              // Location for SEO
}
```

---

## 16. Implementation Phases

### Phase 1 — Foundation (Days 1–2)

**Goal:** Project scaffolding, design system, and layout shell.

| Task | Details | Priority |
|------|---------|----------|
| Project init | Next.js 15 + TypeScript + pnpm | P0 |
| Tailwind v4 setup | Configuration, custom tokens | P0 |
| shadcn/ui init | Install base primitives (Button, Card, Accordion, Badge, Dialog, Sheet, Tabs, Input, Textarea, Select, Label) | P0 |
| Theme system | 3 themes in CSS variables, `next-themes` integration, ThemePicker component | P0 |
| i18n setup | `next-intl` configuration, middleware, `/en` + `/he` routing, base translation files | P0 |
| Font loading | `Heebo`, `Playfair Display`, `DM Sans` via `next/font` | P0 |
| Layout shell | Root layout, locale layout, Navbar (sticky, backdrop-blur, responsive), Footer | P0 |
| Responsive skeleton | Mobile-first layout, breakpoints verified, RTL baseline | P0 |
| Code quality | ESLint + Prettier + Husky pre-commit hooks | P1 |
| `cn()` utility | `clsx` + `tailwind-merge` helper | P0 |

**Deliverable:** Navigable shell with theme switching, language toggle, responsive navbar/footer in both locales.

### Phase 2 — Core Sections (Days 3–5)

**Goal:** Build all homepage sections with placeholder content and animations.

| Task | Details | Priority |
|------|---------|----------|
| HeroSection | Slideshow (3–5 images, crossfade), animated headline, 2 CTAs, urgency badge, parallax | P0 |
| PortfolioPreview | Masonry grid (6–9 images), category hover labels, "View Gallery" link | P0 |
| WhyUsSection | 4 icon cards, scroll-triggered `fade-up` animation | P0 |
| ServicesSection | 3 service blocks with hero image, tagline, features, CTA. Tabbed layout | P0 |
| StatsBar | Animated counters on scroll, full-width accent background | P0 |
| TestimonialsSection | Embla carousel, auto-play + manual controls, quote cards | P0 |
| ProcessSection | 4-step visual timeline, icons, RTL-aware | P1 |
| FeaturedWork | 1–2 projects with mini-gallery and client quote | P1 |
| PricingSection | 3 indicative categories, "starting from", main CTA | P0 |
| FAQSection | Radix Accordion, 6–8 items | P0 |
| CTABanner | Full-width, background image, gradient overlay, emotional CTA | P0 |
| ScrollReveal wrapper | Framer Motion intersection observer component | P0 |
| Animation presets | All defined presets in `/lib/animations.ts` | P0 |
| RTL verification | Each section tested in both LTR and RTL | P0 |
| Responsive testing | Each section tested at all breakpoints | P0 |

**Deliverable:** Fully functional homepage with all sections, animations, placeholder images, and bilingual content.

### Phase 3 — Portfolio & Gallery (Days 6–7)

**Goal:** Full gallery system with lightbox and optimized images.

| Task | Details | Priority |
|------|---------|----------|
| Portfolio overview page | 3 category cards + mixed masonry grid | P0 |
| Wedding gallery page | Full masonry grid, filterable by sub-category | P0 |
| Portrait gallery page | Full masonry grid | P0 |
| Commercial gallery page | Full masonry grid | P0 |
| GalleryGrid component | CSS grid masonry, responsive columns | P0 |
| GalleryImage component | `next/image` wrapper, hover zoom, overlay icon, blur placeholder | P0 |
| Lightbox component | YARL integration — fullscreen, swipe, keyboard, counter, zoom, theme-adaptive | P0 |
| CategoryFilter | Filter pills/tabs with animated transitions | P1 |
| Image optimization | Blur placeholder generation with `plaiceholder`, responsive srcset | P0 |
| Portfolio data file | Image metadata for 20–24 placeholder images | P0 |

**Deliverable:** Complete portfolio/gallery system with lightbox, optimized images, and smooth transitions.

### Phase 4 — Content, SEO & Polish (Days 8–9)

**Goal:** Final content, forms, SEO, and AI discoverability.

| Task | Details | Priority |
|------|---------|----------|
| Final sales copy (HE) | Native Hebrew copy for all sections — warm, emotional, conversion-focused | P0 |
| Final sales copy (EN) | Polished English copy for all sections | P0 |
| Contact page | Full contact form (React Hook Form + Zod), WhatsApp link, direct contact info | P0 |
| About page | Studio story, photographer bio, values, behind-the-scenes images | P1 |
| Form validation | Zod schemas, error messages in both languages | P0 |
| SEO metadata | `next/metadata` for all pages, OG images, Twitter Cards | P0 |
| JSON-LD | All structured data schemas (LocalBusiness, Service, FAQ, Review, etc.) | P0 |
| `/llms.txt` | Plain-text company summary for LLM crawlers | P0 |
| `/api/company-info` | JSON endpoint with structured company data | P0 |
| `hreflang` tags | Cross-locale linking on all pages | P0 |
| `sitemap.xml` | Auto-generated sitemap | P0 |
| `robots.txt` | Crawl directives | P0 |
| Dynamic OG images | `@vercel/og` for portfolio pages (optional) | P2 |
| Privacy & Terms pages | Basic legal pages | P1 |

**Deliverable:** Production-quality content, fully functional forms, complete SEO implementation.

### Phase 5 — Launch Prep (Day 10)

**Goal:** Quality assurance, performance, and deployment.

| Task | Details | Priority |
|------|---------|----------|
| Lighthouse audit | Performance 90+, Accessibility 95+, Best Practices 95+, SEO 100 | P0 |
| Accessibility audit | WCAG AA compliance, keyboard nav, screen reader, color contrast per theme | P0 |
| Cross-browser testing | Chrome, Firefox, Safari, Edge (desktop + mobile) | P0 |
| Image alt text review | Verify all images have descriptive alt text in both languages | P0 |
| RTL final review | Complete RTL pass — every section, every component, every breakpoint | P0 |
| Performance optimization | Bundle analysis, lazy loading verification, image optimization check | P0 |
| 404 page | Custom not-found page with navigation back to homepage | P1 |
| Vercel deployment | Production deployment config, environment variables, domain setup | P0 |
| Analytics | Vercel Analytics + Speed Insights placeholder integration | P1 |
| Final content review | All copy proofread in both languages, CTA placement verified | P0 |

**Deliverable:** Production-ready website deployed on Vercel, passing all quality gates.

---

## 17. Plugin & Library Evaluation Table

| Library | Verdict | Justification |
|---------|---------|---------------|
| `tailwindcss-animate` | **Include** | CSS animation utilities that complement Framer Motion for simpler animations (hover states, transitions). Lightweight, no JS overhead. |
| `clsx` | **Include** | Required by shadcn/ui for conditional classname composition. Zero-cost utility. |
| `tailwind-merge` | **Include** | Required by shadcn/ui's `cn()` helper to resolve Tailwind class conflicts intelligently. |
| `class-variance-authority` (CVA) | **Include** | Required by shadcn/ui for component variant management. Enables type-safe variant definitions for Button, Card, Badge, etc. |
| `react-intersection-observer` | **Optional** | Useful for scroll-triggered animations, but Framer Motion's `useInView` and `whileInView` may suffice. Include only if Framer Motion's built-in doesn't meet needs. |
| `sharp` | **Include** | Required for Next.js image optimization in production (Vercel). Handles WebP/AVIF conversion at build time. Auto-installed by Next.js. |
| `@vercel/og` | **Optional** | Dynamic OG image generation per gallery/service page. Nice-to-have for social sharing but not critical for launch. Phase 4 candidate. |
| `embla-carousel` | **Include** | Lightweight, accessible carousel for testimonials and image strips. Better suited than building custom carousel. Supports RTL. |
| `masonry-layout` (JS library) | **Skip** | Prefer CSS-only masonry using CSS Grid with `grid-template-rows: masonry` (progressive enhancement) or calculated row-span approach. Avoids JS dependency for layout. |
| `photoswipe` | **Skip** | Heavier and more opinionated than YARL. Older API design. |
| `yet-another-react-lightbox` (YARL) | **Include** | Modern React lightbox with excellent features: plugins (zoom, thumbnails, captions), keyboard/swipe nav, performant. Well-maintained. |
| `blurhash` | **Skip** | While powerful, `plaiceholder` is simpler to integrate with Next.js and generates compatible blur data URLs directly. |
| `plaiceholder` | **Include** | Generates blur placeholder images (base64 LQIP) at build time. Integrates cleanly with `next/image`'s `blurDataURL` prop. |
| `framer-motion` | **Include** | Primary animation library. Scroll reveals, page transitions, parallax, image transitions. Industry standard for React animation. |
| `next-intl` | **Include** | Best-in-class i18n for Next.js App Router. Supports ICU message format, locale routing middleware, RSC compatibility. |
| `next-themes` | **Include** | Standard solution for theme switching in Next.js. Handles SSR flash prevention, localStorage persistence, system preference detection. |
| `react-hook-form` | **Include** | Performant form library with minimal re-renders. Excellent DX with Zod resolver integration. |
| `zod` | **Include** | Type-safe schema validation for forms. Shared between client and server. Generates TypeScript types from schemas. |
| `lucide-react` | **Include** | Modern, consistent, tree-shakeable icon set. Used throughout UI for navigation, feature icons, social links. |
| `@hookform/resolvers` | **Include** | Bridges React Hook Form with Zod validation schemas. Required for form validation integration. |

---

## 18. Open Questions & Risks

### Open Questions

| # | Question | Impact | Decision Needed By |
|---|----------|--------|-------------------|
| 1 | **Image source**: Are real MC Studio photos available for launch, or should we use curated Unsplash placeholders? | High — defines visual quality and authenticity | Phase 2 start |
| 2 | **Form submission backend**: Formspree? Vercel serverless function? CRM integration? Email forwarding? | Medium — affects contact form implementation | Phase 4 start |
| 3 | **WhatsApp as primary CTA**: In Israel, WhatsApp is dominant. Should it be the primary contact method over email forms? | Medium — affects CTA strategy and conversion flow | Phase 1 |
| 4 | **Booking integration**: Cal.com embed? Calendly? Direct WhatsApp link? Custom availability form? | Medium — affects contact page design | Phase 4 |
| 5 | **Instagram integration**: Should the site pull from MC Studio's Instagram feed? (API limitations, Meta approval required) | Low — nice-to-have, can add post-launch | Phase 5 or post-launch |
| 6 | **Video support**: Does MC Studio offer video? Should the portfolio support video playback? | Medium — affects gallery architecture | Phase 1 |
| 7 | **Blog / content marketing**: Future SEO play — wedding tips, photography guides. Plan architecture now? | Low — future feature, but route structure should accommodate | Phase 1 (architecture only) |
| 8 | **Client gallery / proofing portal**: Password-protected galleries for clients. Scope for v2? | Low — post-launch feature | Post-launch |
| 9 | **Headless CMS**: Should portfolio be managed via Sanity/Contentful instead of static files? | Medium — affects content management workflow | Phase 1 |
| 10 | **Pricing values**: What are the actual "starting from" price ranges to display? | High — affects lead qualification | Phase 4 |
| 11 | **Domain and hosting**: What is the production domain? Vercel deployment configuration? | Medium — affects deployment | Phase 5 |
| 12 | **Analytics beyond Vercel**: Google Analytics 4? Meta Pixel for remarketing? | Low — can add post-launch | Phase 5 or post-launch |
| 13 | **Hebrew copy quality**: Is there a native Hebrew copywriter available, or should one be hired? | High — directly affects conversion in primary market | Phase 4 start |

### Risks & Mitigations

| Risk | Severity | Likelihood | Mitigation |
|------|----------|-----------|------------|
| **Image-heavy site impacts performance** | High | Medium | Aggressive image optimization (WebP/AVIF, blur placeholders, lazy loading, CDN). Set performance budget with Lighthouse CI. |
| **CSS Grid masonry not supported in all browsers** | Medium | Medium | Progressive enhancement: use CSS masonry where supported, fall back to calculated row-span grid. Test in Safari, Firefox, Chrome. |
| **Hebrew copy feels translated/unnatural** | High | Medium | Engage native Hebrew copywriter. Test copy with Israeli users. Do not translate from English — write natively. |
| **next-intl + App Router edge cases** | Medium | Low | Use latest stable version. Follow official documentation. Test locale switching extensively including edge cases (back button, direct URL). |
| **Tailwind v4 breaking changes** | Medium | Low | Pin to specific version. Review v4 migration guide. Tailwind v4 has stable API at this point. |
| **Lightbox performance on mobile** | Medium | Medium | Test YARL on low-end devices. Preload only adjacent images. Use smaller image variants on mobile. |
| **Theme switching causes flash** | Low | Low | `next-themes` handles SSR flash prevention via script injection. Test thoroughly. |
| **Font loading delays (Hebrew + 2 English fonts)** | Medium | Medium | Use `next/font` with `display: swap`. Preload only critical fonts (Heebo for Hebrew pages, DM Sans for English). Load display font asynchronously. |
| **Portfolio scales beyond static hosting** | Low | Medium (future) | Architecture supports migration to headless CMS + image CDN. Static files work for initial 20–30 images per category. |
| **WhatsApp API limitations** | Low | Low | Use simple `wa.me` links initially. WhatsApp Business API for automation is a v2 consideration. |

---

*End of PRD — MC Studio Photography Website*
