# 🧬 CopyKit — Roadmap

**Vision:** the most alive, most beautiful, most *complete* frontend toolbox on the internet. Every other site shows a picture of a button. CopyKit lets you play with the real thing, see the code, copy it in your framework, tweak it, collect it, and export it — free, no signup, 100% in your browser.

**Audience:** developers, designers, motion artists, video editors, indie hackers, creative coders.

---

## North-star principles (non-negotiable)
1. **100% in-browser.** No backend, no database, no accounts. Ever.
2. **Everything you copy actually works.** No broken snippets.
3. **Real quantity + real quality.** Categories should feel *stacked* (40–80+ genuinely distinct pieces), but every piece must be beautiful and different. We never ship the same design recolored 15 times — that is fake quantity and Google punishes it.
4. **Static HTML first.** The gallery renders server-side so Google indexes every piece. Interactivity is layered on top, never at the cost of SEO.
5. **Craft over everything.** This carries Adham's name. It has to feel premium.

---

## 🏆 The moat — the "dang it, why didn't we think of that?" features
- **Copy in ANY framework.** Every piece copyable as CSS, Tailwind, React/JSX, Vue, or Svelte — one toggle. Plus a color-format switch (HEX / RGB / HSL / OKLCH).
- **Export as image.** Download any piece as a transparent PNG / SVG — straight into Figma, a thumbnail, or a video overlay. (The bridge to designers + motion + video.)
- **Theme the entire site to a palette.** Click a palette → the whole UI and every preview recolors live. Theater + genuinely useful.
- **My Kit → Export Kit.** Heart pieces as you browse, then export them all as ONE clean CSS file / JSON / Tailwind config, ready to drop into a project. (Browser-only.)
- **Open in CodePen / StackBlitz** + a shareable deep link for every single piece.
- **Accessibility built in.** Palettes show WCAG contrast pass/fail (AA / AAA).
- **Image → palette extractor.** Drop an image, get a matching palette + gradients, all client-side.
- **Tweak before you copy.** Sliders adjust a piece live (angle, radius, speed, color) and the code updates with it.
- **The Aura.** Custom cursor, premium motion, confetti on copy, ⌘K command palette, a hidden easter egg — the unmistakable "Adham" stamp.

---

## 🗂️ Categories (target ~24)
**Color:** Gradients (linear · radial · conic · mesh · animated) · Palettes · Shadows (box · inner · layered · glow) · Borders & Radius
**Components:** Buttons · Inputs & Forms · Toggles / Checkboxes / Radios · Cards · Badges & Tags · Loaders / Spinners · Skeletons · Progress & Steppers · Avatars · Tooltips & Popovers · Alerts / Toasts · Dividers
**Effects:** Backgrounds & Patterns · Text Effects · Cursor FX · Hover / Micro-interactions · 3D Effects · Glassmorphism · Custom Scrollbars · Code Blocks / Terminals

**Quantity target:** ~40–80 distinct, hand-crafted pieces per category, filled in over batches.

---

## 🧱 Architecture
- **Astro 5**, static output, `@astrojs/sitemap`. Design system in one CSS file, data in typed TS (`src/data/items.ts`).
- Gallery + per-item/per-category pages render as **static HTML**.
- Interactivity (copy engine, drawer, search, My Kit, theming) ships as **lightweight vanilla-TS** progressive enhancement — no heavy framework unless a feature truly needs it.

---

## 🧭 Build status

**Foundation (shipped):**
- ✅ Astro foundation — static gallery, SEO head, sitemap
- ✅ Copy Engine — drawer, live preview, framework tabs, one-click copy, deep links
- ✅ SEO Engine — per-category + per-item static pages (414 pages), unique content
- ✅ The Moat v1 — ⌘K search, live theming, My Kit (save + export)
- ✅ Quantity — 392 distinct pieces across 21 categories

## 🏛️ Section blueprint (premium roadmap)
Each section is its own focused, feature-stacked build. Sequenced by impact; site stays launchable at every step.

**Pillar 1 — First impression**
1. Homepage (launchpad: hero search, alive marquee, bento category grid, piece-of-the-day, recently-viewed, surprise, scroll-reveal, custom cursor, confetti)
2. Header / navigation (grouped "Browse ▾" dropdown, mobile nav)
3. Footer (modern, de-crowded, grouped columns)

**Pillar 2 — Core experience**
4. The Code Studio (drawer upgrade: live color toolbox, tweak sliders, framework + color-format toggles, save edited version to Kit, open in CodePen/StackBlitz)
5. Search (fuzzy, recent searches, category jumps)
6. My Kit page (`/kit` — manage, export, share collection)

**Pillar 3 — Power tools**
7. Export as image (PNG/SVG — reliable subset first)
8. Playground / Remix (combine pieces, resize, device preview)
9. Color tools (image→palette extractor, WCAG contrast checker, format converter)

**Pillar 4 — Depth & polish**
10. Item pages (usage tips, variations, open-in-playground)
11. Category pages (filters, sort, richer copy)
12. Theming (full light mode, more presets, custom accent picker)
13. Performance & accessibility (lazy-load, Lighthouse ~100, keyboard + screen-reader)

**Pillar 5 — Growth & launch**
14. SEO content depth (per-page guides, FAQ schema, auto OG images)
15. PWA / offline (installable, works offline)
16. Community submissions (via GitHub PRs — grows with zero backend) ⚠️
17. Share & analytics (privacy-friendly, "tweet this piece")
18. Launch prep (domain, Search Console, robots, sitemap submission)
19. Monetization (ethical ads / sponsorship / Pro tier) ⚠️ client-side limits apply

---

## 🚀 Brand & launch
- Working name **CopyKit** (the "copy = copywriting" confusion is minor; final brand/domain locked at domain-buying time — the `___UI` naming lane is saturated, so we lean brandable).
- Domain candidates: copykit.dev / getcopykit.com / copykit.app.
- Launch: Product Hunt, Reddit (r/webdev, r/Frontend), Twitter #buildinpublic, dev newsletters. Ranking = quality + consistent promotion over months.

*Built by Adham · portfolio: portfolio-adham-mu.vercel.app*
