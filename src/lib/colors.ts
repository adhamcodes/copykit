// ============================================================
// CopyKit — color engine for the Code Studio.
// Parse / convert / extract / replace colors so users can
// recolor any piece live and copy it in HEX / RGB / HSL.
// ============================================================

export type RGBA = { r: number; g: number; b: number; a: number };
export type ColorFormat = "hex" | "rgb" | "hsl";

const COLOR_RX = /#[0-9a-fA-F]{3,8}\b|rgba?\([^)]*\)|hsla?\([^)]*\)/g;

const clamp = (n: number, max: number) => Math.max(0, Math.min(max, n));
const c255 = (n: number) => clamp(Math.round(n), 255);

/** All color tokens found in a string, in order of appearance. */
export function extractColors(str: string): string[] {
  return str.match(COLOR_RX) || [];
}

/** Unique color tokens (case-insensitive) across many strings, preserving order. */
export function uniqueColors(strs: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const s of strs) {
    for (const c of extractColors(s)) {
      const k = c.toLowerCase().replace(/\s+/g, "");
      if (!seen.has(k)) {
        seen.add(k);
        out.push(c);
      }
    }
  }
  return out;
}

function hslToRgb(h: number, s: number, l: number): RGBA {
  h = ((h % 360) + 360) % 360;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    return l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
  };
  return { r: f(0) * 255, g: f(8) * 255, b: f(4) * 255, a: 1 };
}

function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h = 0, s = 0;
  const d = max - min;
  if (d !== 0) {
    s = d / (1 - Math.abs(2 * l - 1));
    switch (max) {
      case r: h = ((g - b) / d) % 6; break;
      case g: h = (b - r) / d + 2; break;
      default: h = (r - g) / d + 4;
    }
    h *= 60;
    if (h < 0) h += 360;
  }
  return { h: Math.round(h), s: Math.round(s * 100), l: Math.round(l * 100) };
}

/** Parse any CSS color token we care about into RGBA. Returns null if unknown. */
export function parseColor(color: string): RGBA | null {
  const c = color.trim();
  if (c[0] === "#") {
    let h = c.slice(1);
    if (h.length === 3) h = h.split("").map((x) => x + x).join("");
    else if (h.length === 4) h = h.split("").map((x) => x + x).join("");
    if (h.length === 6) {
      return { r: parseInt(h.slice(0, 2), 16), g: parseInt(h.slice(2, 4), 16), b: parseInt(h.slice(4, 6), 16), a: 1 };
    }
    if (h.length === 8) {
      return { r: parseInt(h.slice(0, 2), 16), g: parseInt(h.slice(2, 4), 16), b: parseInt(h.slice(4, 6), 16), a: parseInt(h.slice(6, 8), 16) / 255 };
    }
    return null;
  }
  let m = c.match(/rgba?\(([^)]+)\)/i);
  if (m) {
    const p = m[1].split(/[,\/\s]+/).filter(Boolean);
    return { r: parseFloat(p[0]), g: parseFloat(p[1]), b: parseFloat(p[2]), a: p[3] !== undefined ? parseFloat(p[3]) : 1 };
  }
  m = c.match(/hsla?\(([^)]+)\)/i);
  if (m) {
    const p = m[1].split(/[,\/\s]+/).filter(Boolean);
    const rgb = hslToRgb(parseFloat(p[0]), parseFloat(p[1]) / 100, parseFloat(p[2]) / 100);
    return { ...rgb, a: p[3] !== undefined ? parseFloat(p[3]) : 1 };
  }
  return null;
}

const hh = (n: number) => c255(n).toString(16).padStart(2, "0");

export function toHex({ r, g, b, a }: RGBA): string {
  return "#" + hh(r) + hh(g) + hh(b) + (a < 1 ? hh(a * 255) : "");
}
export function toRgbStr({ r, g, b, a }: RGBA): string {
  return a < 1 ? `rgba(${c255(r)}, ${c255(g)}, ${c255(b)}, ${+a.toFixed(2)})` : `rgb(${c255(r)}, ${c255(g)}, ${c255(b)})`;
}
export function toHslStr({ r, g, b, a }: RGBA): string {
  const { h, s, l } = rgbToHsl(r, g, b);
  return a < 1 ? `hsla(${h}, ${s}%, ${l}%, ${+a.toFixed(2)})` : `hsl(${h}, ${s}%, ${l}%)`;
}

/** Render an RGBA in the chosen format. */
export function formatColor(c: RGBA, fmt: ColorFormat): string {
  return fmt === "hex" ? toHex(c) : fmt === "rgb" ? toRgbStr(c) : toHslStr(c);
}

/** A 7-char #rrggbb for an <input type="color"> (ignores alpha). */
export function toColorInput(c: RGBA): string {
  return ("#" + hh(c.r) + hh(c.g) + hh(c.b)).slice(0, 7);
}

/**
 * Replace whole color tokens in a string using a map of original token -> new value.
 * Matches complete tokens only (no substring corruption like #fff inside #ffffff).
 */
export function applyColors(src: string, map: { orig: string; val: string }[]): string {
  if (!map.length) return src;
  const lookup = new Map(map.map((m) => [m.orig.toLowerCase().replace(/\s+/g, ""), m.val]));
  return src.replace(COLOR_RX, (token) => {
    const hit = lookup.get(token.toLowerCase().replace(/\s+/g, ""));
    return hit !== undefined ? hit : token;
  });
}

/** A pleasant random color (vivid, mid-bright) for the "Randomize" surprise. */
export function randomColor(): RGBA {
  const h = Math.floor(Math.random() * 360);
  const s = 0.55 + Math.random() * 0.35;
  const l = 0.45 + Math.random() * 0.18;
  return hslToRgb(h, s, l);
}
