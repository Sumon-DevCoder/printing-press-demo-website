# Shankuchail Digital Sign & Printing Press — Demo Website

> **Project type:** Client demo site (marketing / business website)
> **Client:** শংকুচাইল ডিজিটাল সাইন এন্ড প্রিন্টিং প্রেস (Shankuchail Digital Sign & Printing Press)
> **Location:** Shankuchail Bazar, Burichang, Cumilla, Bangladesh – 3520
> **Stack:** React (frontend) · Laravel (backend API) · Tailwind CSS
> **Status:** **Phase A: static design demo, built** (frontend only, for client approval).
> Phase B (dynamic, with Laravel API and admin) starts after the client confirms the design.

This README is the single source of truth for scope, design direction, architecture, and
delivery phases.

---

## 0. Current Phase: Static Design Demo

The client sees a complete, clickable website first. After they approve it, we make it dynamic.

### Run it locally

```bash
cd frontend
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into frontend/dist
npm run preview    # serve the production build
```

### What is built

| Page | Route | Notes |
|---|---|---|
| Home | `/` | Hero, 3 service groups, full service index, featured work, why us, 4-step order process, location, CTA |
| Services | `/services` | All 21 services in 3 groups, with in-page jump links |
| Service detail | `/services/:slug` | `signage`, `cards-stationery`, `custom-print`. "Get a quote" pre-selects the service in the form |
| Gallery | `/gallery?category=…` | Filterable. The filter is kept in the URL so a filtered view can be shared |
| About | `/about` | Story, working rules, location |
| Contact | `/contact#quote` | Quote form, direct channels, address/hours/map |
| 404 | `*` | Custom page |

- **The quote form works without a backend.** It validates the input, then opens WhatsApp with the
  request already written out. It accepts phone numbers typed in Bangla digits (`০১৮…`), and a
  honeypot field filters simple bots.
- **Sticky mobile action bar** with Call, WhatsApp, and Quote, because phone visitors order by calling.
- **Light and dark mode** come from design tokens in [`frontend/src/index.css`](frontend/src/index.css).
- **The map loads only when the visitor asks for it.** This avoids a heavy third-party load and Google cookies on every visit.
- **SEO:** Bangla `lang`, meta description, Open Graph tags for Facebook sharing, `LocalBusiness` JSON-LD, and a title per page.
- **Accessibility:** a skip link, visible focus rings, labelled inputs with linked error messages, `aria-pressed`
  on the filters, 44px minimum tap targets, and support for `prefers-reduced-motion`.

### Placeholder imagery (honest by design)

We have no real photos yet, so every image is a flat **illustration of a real product type**
([`ProductArt.tsx`](frontend/src/components/art/ProductArt.tsx)) and is labelled **"নমুনা ছবি"** (sample image).
They are not AI images and are never presented as the client's own work. Swap them for real photos when they arrive.

### How the static data becomes dynamic later

All content lives in [`frontend/src/data/`](frontend/src/data/) as typed objects (`types.ts`) shaped
like the future API responses. Phase B replaces these imports with API calls. Pages and components stay the same.

### Before showing the client — items to confirm (`TODO(client)` in code)

- [ ] Is **01862-771313** on WhatsApp? (The form and buttons use it.)
- [ ] Real **opening hours** (currently placeholder text).
- [ ] Claims in the copy: **same-day work for urgent jobs**, **nearby delivery**, **every job shown before printing**.
- [ ] Logo and brand colours (a temporary wordmark is in use).
- [ ] The owner's story and real photos for the About page and gallery.

### Engineering notes

- **Frontend stack as installed:** React 19, TypeScript (strict, with `noUncheckedIndexedAccess`), Vite 8, Tailwind v4,
  React Router 7, Lucide icons. No other runtime dependencies.
- **Linting:** Vite's default linter (oxlint) ships a native binary that **Windows Application Control blocks on this
  machine**. ESLint's TypeScript plugin does not support TypeScript 7 yet. Until it does, `npm run typecheck` (strict `tsc`)
  is the quality gate. Add ESLint once `typescript-eslint` supports TS 7.
- **`npm audit`** reports a ReDoS advisory in `picomatch`, which Vite uses at build time. No patched version exists.
  It runs only at build time over our own files and is never shipped to browsers. Do **not** run `npm audit fix --force`:
  it would downgrade Vite.
- **Hosting:** SPA fallback files are included for Netlify ([`public/_redirects`](frontend/public/_redirects)) and Vercel
  ([`vercel.json`](frontend/vercel.json), which also sets security headers).
- **`backend/`** has a Laravel 13 + Sanctum scaffold (SQLite for local development) **parked for Phase B**. It is not used by the demo.

---

## 1. Client Snapshot (from their Facebook page)

| Field | Value |
|---|---|
| Business name | শংকুচাইল ডিজিটাল সাইন এন্ড প্রিন্টিং প্রেস |
| Category | Digital sign & printing press (local service business) |
| Address | Shankuchail Bazar, Burichang, Cumilla — 3520 |
| Phone | 01862-771313, 01863-586535 (+880 1862-771313) |
| Email | shankuchaildigitalsign@gmail.com |
| Current web presence | Facebook page only (small, ~23 followers — early stage) |
| Language of customers | Bangla-first (Cumilla local market), some English |

**Services offered (from their posts — this is our service catalogue):**

Banner, Festoon, Poster, Leaflet, Visiting Card, Vinyl Sticker, Reflective Sticker,
Digital Signboard, LED Signboard, Calendar Print, Wedding Card, Invitation (Dawat) Card,
Crest, Seal (Sil), Cash Memo, Bag Print, Mug Print, T-shirt Print, ID Card, Diary,
Halkhata Card.

> **Insight:** This is a *local, trust-driven, order-by-phone* business. The website's job is
> not e-commerce checkout — it is **credibility + showcase + make it dead-easy to contact and
> request a quote.** Design and content decisions below all serve that goal.

---

## 2. Goals of the Demo Site

1. **Build trust** — make a 23-follower local press look established and professional.
2. **Showcase work** — a portfolio/gallery is the #1 conversion driver for print & signage.
3. **Make contact frictionless** — call, WhatsApp, directions, and a quote request form always one tap away.
4. **Explain the full service range** clearly, in Bangla-first language.
5. **Be found locally** — SEO for "ডিজিটাল সাইন / প্রিন্টিং প্রেস Burichang / Cumilla".

Success = a visitor who never heard of them trusts them enough to call within 30 seconds.

---

## 3. Design Direction — "Natural, Human, Premium" (NOT AI-vibe)

The client explicitly asked for a design that does **not** feel AI-generated. That means we
avoid the clichés that scream "template": purple→blue gradients everywhere, floating 3D blobs,
glassmorphism on everything, generic stock "teamwork" photos, emoji-as-icons, and perfectly
symmetrical hero-with-centered-text on every section.

### 3.1 Principles we follow (senior-designer checklist)

- **Content-first, real photos.** The hero and gallery use the client's *actual* printed work
  (banners, signboards, cards). Real craft photos build more trust than any illustration.
  Until real assets arrive, use honest placeholders — never fake AI renders presented as their work.
- **Visual hierarchy (psychology of attention).** One clear primary action per screen. Size,
  weight, and whitespace guide the eye: headline → value → proof → CTA. Hick's Law: fewer choices, faster decisions.
- **Whitespace is a feature,** not wasted space. Generous, *asymmetric* spacing reads as premium.
- **Type does the heavy lifting.** A confident type scale (clear display headings + readable
  body) carries the "premium" feeling more than decoration. Bangla + Latin pairing (see §3.3).
- **Restrained, intentional color** (see §3.2) — a disciplined palette, not a rainbow.
- **Motion with restraint.** Subtle scroll-reveal and hover feedback only. No autoplay carousels
  that hijack attention. Respect `prefers-reduced-motion`.
- **Consistency = craft.** A real design system (tokens for color, spacing, radius, shadow).
  Consistency is what the eye reads as "made by a professional."
- **Trust signals / social proof.** Testimonials, years in business, order count, map, real
  phone number visible. Cialdini: social proof + authority + ease reduce hesitation.
- **Tap-target & readability psychology.** Large tap targets, 16px+ body, strong contrast —
  this audience is mobile, often on mid-range Android over patchy data.

### 3.2 Color (proposed — refine with client)

Draw from print/craft identity, not a generic SaaS palette. A grounded, confident scheme:

- **Ink / near-black** as the primary text & structural color (`#1A1A1A`-ish) — "press ink".
- **One warm, confident brand accent** (e.g. a deep saffron/amber or a signage red) used
  sparingly for CTAs and highlights — reflects signage/print energy.
- **Warm neutral paper tone** for backgrounds instead of pure cold white — feels tactile, like paper stock.
- Full **light + dark** support via CSS tokens.

> Lock exact values with the client's existing logo/brand before finalizing. Define every color
> as a token once; never hardcode hex in components.

### 3.3 Typography

- **Bangla:** a clean, modern Bangla webfont (e.g. *Hind Siliguri* / *Noto Sans Bengali*) —
  this is a Bangla-first site, Bangla must look first-class, not an afterthought.
- **Latin/numerals:** a complementary humanist sans (e.g. *Inter* / *Plus Jakarta Sans*).
- Self-host or use a reliable CDN; load only the weights used; set `font-display: swap`.

### 3.4 Reference points (for *structure & standards*, study — do not copy)

Industry patterns confirm what these sites need: clear service pages, a strong project gallery
with high-quality imagery, visible reviews, a "what to expect" section, and an always-present
call/quote CTA. See sources in §13.

---

## 4. Information Architecture / Sitemap

Bangla-first labels; English in parentheses here for the dev team.

```
Home (হোম)
Services (সার্ভিস)        — overview grid + detail per service group
Portfolio / Gallery (গ্যালারি) — filterable by category (banner, card, signboard, print…)
About (আমাদের সম্পর্কে)    — story, why trust us, team/shop, years running
Request a Quote (কোটেশন চান) — simple form, the primary conversion
Contact (যোগাযোগ)         — phone, WhatsApp, email, map, hours
```

Possible phase-2: Blog/Tips, FAQ, Pricing guide, Bangla/English language toggle.

### 4.1 Home page sections (order matters — psychology of the scroll)

1. **Header** — logo, nav, prominent "Call / WhatsApp" button (sticky on mobile).
2. **Hero** — real work photo, one strong Bangla headline (what they do + where), one primary
   CTA ("কোটেশন চান") + one secondary ("কল করুন"). No wall of text.
3. **Trust strip** — years running / orders done / location / fast reply (quantified social proof).
4. **Services overview** — clean icon/photo grid of the service groups, each linking deeper.
5. **Featured work** — 6–8 best gallery pieces, "See all" → gallery.
6. **Why choose us** — 3–4 concrete differentiators (quality, speed, local, fair price).
7. **Process** — "কীভাবে অর্ডার করবেন" in 3–4 simple steps (removes uncertainty).
8. **Testimonials** — real customer quotes when available.
9. **Location + hours + map** — embedded map, address, open hours.
10. **Final CTA band** — quote form or big contact block.
11. **Footer** — contact, services links, social (Facebook), copyright.

### 4.2 Service grouping (22 services → digestible buckets)

- **Large-format / Signage:** Banner, Festoon, Poster, Digital Signboard, LED Signboard, Vinyl & Reflective Sticker.
- **Cards & Stationery:** Visiting Card, Wedding Card, Invitation Card, ID Card, Cash Memo, Halkhata Card, Diary, Calendar.
- **Custom / Merch Print:** Mug, T-shirt, Bag print, Crest, Seal.

Each group = one service page with examples, use-cases, and a "request this" CTA.

---

## 5. Content We Must Collect from Client

(Design cannot be "premium" without real inputs — track these.)

- [ ] Logo (vector if possible) + any existing brand colors
- [ ] 15–30 high-quality photos of real printed/signage work (categorized)
- [ ] Shop front / interior / machine photos (authenticity)
- [ ] Owner/team name & short story (how long running, what they're proud of)
- [ ] 3–6 customer testimonials (name + optional photo + permission)
- [ ] Opening hours, exact Google Maps pin
- [ ] Confirm services list + any pricing guidance they're willing to show
- [ ] Preferred contact priority (Call vs WhatsApp vs Messenger)

Until received: use clearly-labeled placeholders. **Never fabricate reviews, counts, or client work** — demo content must be marked as demo.

---

## 6. Technology & Architecture

### 6.1 Stack

- **Frontend:** React 19 + TypeScript (Vite) + Tailwind CSS v4 + React Router. Add TanStack Query in Phase B for API data.
- **Backend:** Laravel 13 as a REST API (serves services, gallery, quote submissions).
- **DB:** MySQL/MariaDB.
- **Why this split:** A content/marketing site *could* be static, but the client benefits from
  an **admin-editable** gallery, services, and incoming quote requests — hence a real Laravel API
  + small admin. This also demos full-stack capability.

### 6.2 High-level shape

```
Browser ──> React SPA (Vite build, static hosting / Nginx)
                 │  (fetch via axios/TanStack Query)
                 ▼
         Laravel REST API  (/api/v1/...)
                 │
                 ▼
            MySQL  +  file/image storage (local disk or S3-compatible)
```

- API is **versioned** (`/api/v1`) and returns consistent JSON via **API Resources**.
- Public endpoints: `GET services`, `GET gallery`, `POST quote`, `POST contact`.
- Admin endpoints (auth-protected): CRUD services, gallery, read quote submissions.
- **Auth for admin:** Laravel **Sanctum** (SPA/token auth). Public site needs no login.

### 6.3 Proposed repository layout

```
demo-site-2/
├─ README.md                ← this file
├─ backend/                 ← Laravel app
│  ├─ app/
│  │  ├─ Http/Controllers/Api/V1/
│  │  ├─ Http/Requests/        ← FormRequest validation (every input validated here)
│  │  ├─ Http/Resources/       ← API response shaping (control exposed fields)
│  │  ├─ Models/
│  │  └─ Services/             ← business logic out of controllers
│  ├─ routes/api.php
│  ├─ database/migrations|seeders|factories/
│  └─ tests/                   ← Pest/PHPUnit feature tests
└─ frontend/                ← React app (Vite)
   └─ src/
      ├─ app/                  ← router, providers, layout
      ├─ components/ui/        ← design-system primitives (Button, Card, Input…)
      ├─ features/             ← grouped by feature (services, gallery, quote, contact)
      ├─ pages/
      ├─ lib/                  ← api client, hooks, helpers
      ├─ styles/               ← tailwind config + design tokens
      └─ assets/
```

Rationale (senior practices): thin controllers → FormRequests + Services; API Resources so we
never leak DB columns; feature-folders on the frontend so the design system stays reusable and consistent.

---

## 7. Design System & Tokens (implementation note)

- Define tokens **once** in `tailwind.config` + CSS variables on `:root`:
  color, spacing scale, radius, shadow, type scale, breakpoints.
- Redefine color tokens under dark-mode media query / `[data-theme]`.
- Build **primitive components** (Button, Card, Section, Container, Input, Badge) and compose
  pages from them — this is what produces visual consistency = the "premium" feel.
- Reusable `Section` wrapper enforces consistent vertical rhythm and 16px mobile gutters.

---

## 8. Security (senior / OWASP-aware checklist)

**Backend (Laravel):**
- [ ] Validate **all** input via FormRequests; never trust the client.
- [ ] Mass-assignment protection — explicit `$fillable` on every model.
- [ ] API Resources control exactly which fields go out (no accidental data leaks).
- [ ] **Rate limit** public endpoints (quote/contact) — throttle + honeypot/recaptcha on forms to stop spam.
- [ ] Sanctum auth + proper **CORS** config (allow only the frontend origin).
- [ ] Force **HTTPS**, secure/HttpOnly cookies, CSRF for cookie-based auth.
- [ ] Secrets only in `.env` (never committed); provide `.env.example`.
- [ ] File uploads (gallery): validate mime/size, store outside webroot, randomized names, strip EXIF.
- [ ] Eloquent/prepared statements only (no raw string-concatenated SQL) → no SQLi.
- [ ] Keep Laravel + deps patched; run `composer audit` / `npm audit`.
- [ ] Security headers (CSP, X-Frame-Options, HSTS, X-Content-Type-Options) via middleware.

**Frontend (React):**
- [ ] Never `dangerouslySetInnerHTML` with unsanitized content → XSS.
- [ ] No secrets/API keys in the bundle; only public config.
- [ ] Escape/validate anything rendered from API or user input.

**Privacy:** the client's phone/email are public business contacts — fine to show. Do not expose
quote-submitter data publicly; store securely, access only via authed admin.

---

## 9. Performance & SEO (local business)

- Vite production build, code-splitting per route, lazy-load gallery images.
- Responsive `srcset` + modern formats (WebP/AVIF) + explicit width/height (no layout shift).
- Core Web Vitals budget: fast LCP (optimized hero), minimal JS, no blocking fonts.
- **Local SEO:** semantic HTML, per-page `<title>`/meta, Open Graph (for Facebook sharing!),
  **LocalBusiness JSON-LD** (name, address, phone, geo, hours), sitemap.xml, robots.txt.
- Mobile-first, accessible (WCAG AA): contrast, focus states, alt text, keyboard nav, labels.
- Bangla content: correct `lang="bn"`, proper rendering/encoding.

---

## 10. Accessibility checklist

- [ ] AA color contrast (verify tokens).
- [ ] Visible focus rings; full keyboard operability.
- [ ] Semantic landmarks (`header/nav/main/footer`), heading order.
- [ ] Alt text on every image (service + gallery).
- [ ] Labels + error messages on forms; `aria-live` for submit feedback.
- [ ] `prefers-reduced-motion` respected.

---

## 11. Delivery Phases

| Phase | Deliverable |
|---|---|
| **0. Setup** | Repos, Laravel + Vite scaffold, Tailwind + tokens, CI lint/format, `.env.example` |
| **1. Design system** | Tokens, primitives, typography (Bangla+Latin), light/dark, layout shell |
| **2. Backend API** | Models/migrations (services, gallery, quotes), FormRequests, Resources, seeders, v1 endpoints, tests |
| **3. Core pages** | Home, Services (+detail), Gallery (filterable), About |
| **4. Conversion** | Quote form, Contact + map, call/WhatsApp CTAs, spam protection |
| **5. Admin (light)** | Sanctum auth, CRUD gallery/services, view quote requests |
| **6. Polish** | SEO/JSON-LD, performance pass, a11y audit, cross-device QA |
| **7. Handoff** | Deploy demo, README/run docs, client walkthrough, content-swap guide |

---

## 12. Engineering Conventions

- **Branching:** feature branches → PR → review; never commit to `main` directly.
- **Commits:** conventional commits (`feat:`, `fix:`, `chore:`…), small and focused.
- **Code quality:** ESLint + Prettier (frontend), Pint + PHPStan/Larastan (backend); CI enforces.
- **Testing:** Pest/PHPUnit feature tests for every API endpoint (happy + validation + auth paths).
- **Env:** committed `.env.example`; real secrets never in git; `.gitignore` covers `node_modules`, `vendor`, `.env`, build output, uploads.
- **Docs:** keep this README + an API endpoint list current.

---

## 13. Open Questions for Client / Decisions Pending

1. Logo & brand colors — do they have them, or do we create a simple wordmark?
2. Bangla-only, or Bangla + English toggle? (Recommend Bangla-first, English optional phase 2.)
3. Will they show indicative pricing, or quote-only?
4. Do they actually want an admin panel, or is a static content update by us acceptable for the demo?
5. Hosting target (shared cPanel is common/cheap in BD vs a VPS) — affects deploy plan.
6. WhatsApp Business number same as the listed phone?

---

## 14. References (patterns & standards studied, not copied)

Printing/signage site structure & conversion patterns:
- [Web design for sign companies — ClicksGeek](https://clicksgeek.com/web-design-for-sign-companies/)
- [Printing website design examples — Fireart](https://fireart.studio/blog/best-printing-website-design-examples/)
- [Signage design done right — PrintingForLess](https://www.printingforless.com/blog/signage-design-done-right/)
- [Precision Signs & Imaging case study — PageCrafter](https://pagecrafter.com/precision-signs-imaging)

Laravel + React architecture & security:
- [Laravel API best practices 2025 — besthub.dev](https://www.besthub.dev/articles/best-practices-for-laravel-api-development-in-2025-9849afd58a18)
- [Enhancing security in Laravel 2025 — 200OK Solutions](https://www.200oksolutions.com/blog/laravel-security-best-practices-2025/)
- [RESTful API with Laravel — Web & Crafts](https://webandcrafts.com/blog/restful-api-with-laravel)
- [Laravel best practices — Benjamin Crozat](https://benjamincrozat.com/laravel-best-practices)

> Always verify against official **Laravel**, **Sanctum**, and **OWASP** docs before relying on any pattern in production.
