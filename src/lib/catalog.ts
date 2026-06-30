// ============================================================
// CopyKit — catalog metadata + URL/grouping helpers.
// Single source of truth for category labels, SEO blurbs,
// and the routes used by category + item pages.
// ============================================================
import { items } from "../data/items";
import type { Item } from "../data/items";

export interface CatMeta {
  key: string;
  /** Plural display label, e.g. "Gradients". */
  label: string;
  /** Singular noun used in titles/sentences, e.g. "gradient". */
  singular: string;
  /** One-line, category-specific intro used on the category page + meta description. */
  blurb: string;
}

// Order = display order. Blurbs are written to be genuinely specific per
// category (not templated) so each page gives search engines real content.
export const CATS: CatMeta[] = [
  { key: "gradients", label: "Gradients", singular: "CSS gradient", blurb: "Smooth, copy-ready CSS gradients for backgrounds, buttons and text. Grab each one as plain CSS or a Tailwind arbitrary value." },
  { key: "palettes", label: "Palettes", singular: "color palette", blurb: "Ready-made color palettes with hex codes — copy them as CSS variables, a Tailwind color config, a hex list or a JS array." },
  { key: "shadows", label: "Shadows", singular: "box-shadow", blurb: "Box-shadow presets — soft, floating, glow and hard-offset depth for cards, buttons and modals. Copy CSS or Tailwind." },
  { key: "buttons", label: "Buttons", singular: "CSS button", blurb: "Copy-paste CSS buttons — gradient, neon, 3D, glass, shine and animated styles. Get them in HTML/CSS, React or Vue." },
  { key: "cards", label: "Cards", singular: "UI card", blurb: "UI card components — glassmorphism, gradient-border, neumorphic and spotlight cards, ready to paste into any project." },
  { key: "loaders", label: "Loaders", singular: "CSS loader", blurb: "Pure-CSS loaders and spinners — no images, no libraries. Copy the markup and CSS, or grab a React/Vue version." },
  { key: "backgrounds", label: "Backgrounds", singular: "background", blurb: "Animated and patterned backgrounds in pure CSS — auroras, dot grids, mesh gradients and stripes." },
  { key: "textfx", label: "Text Effects", singular: "text effect", blurb: "CSS text effects — gradient text, neon glow, glitch, shimmer and outline styles, copy-paste ready." },
  { key: "toggles", label: "Toggles", singular: "toggle switch", blurb: "Toggle switches in pure CSS — iOS-style sliders, sun/moon themes and animated checkboxes." },
  { key: "inputs", label: "Inputs", singular: "input field", blurb: "Form inputs with style — glowing focus rings, floating labels, OTP boxes and search fields." },
  { key: "badges", label: "Badges", singular: "badge", blurb: "Badges, tags and chips — pills, status dots, gradient tags and notification counters." },
  { key: "cursors", label: "Cursor FX", singular: "cursor effect", blurb: "Custom cursor effects — glow trails, spotlights and magnetic rings built with a touch of JavaScript." },
];

const META_BY_KEY = new Map(CATS.map((c) => [c.key, c]));

export function catMeta(key: string): CatMeta | undefined {
  return META_BY_KEY.get(key);
}

/** The item's slug without the leading "<cat>-" prefix, used for clean URLs. */
export function itemSlugOf(it: Item): string {
  const prefix = it.cat + "-";
  return it.slug.startsWith(prefix) ? it.slug.slice(prefix.length) : it.slug;
}

export function itemUrl(it: Item): string {
  return `/${it.cat}/${itemSlugOf(it)}/`;
}

export function catUrl(key: string): string {
  return `/${key}/`;
}

/** Categories that actually contain items, in display order. */
export function activeCats(): CatMeta[] {
  return CATS.filter((c) => items.some((i) => i.cat === c.key));
}

export function itemsByCat(key: string): Item[] {
  return items.filter((i) => i.cat === key);
}

/** Other items in the same category (for internal linking on item pages). */
export function relatedItems(it: Item, n = 6): Item[] {
  return items.filter((i) => i.cat === it.cat && i.slug !== it.slug).slice(0, n);
}
