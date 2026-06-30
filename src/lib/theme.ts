// ============================================================
// CopyKit — theme color math. Picks two visible, vivid accent
// colors from a palette to repaint the site's accent variables.
// ============================================================

export function rgb(hex: string): [number, number, number] {
  let h = hex.replace("#", "");
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  return [
    parseInt(h.slice(0, 2), 16) || 0,
    parseInt(h.slice(2, 4), 16) || 0,
    parseInt(h.slice(4, 6), 16) || 0,
  ];
}

export function luminance(hex: string): number {
  const [r, g, b] = rgb(hex);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function saturation(hex: string): number {
  const [r, g, b] = rgb(hex);
  const mx = Math.max(r, g, b);
  const mn = Math.min(r, g, b);
  return mx === 0 ? 0 : (mx - mn) / mx;
}

/**
 * Choose two accent colors from a palette: prefer colors that are
 * visible on a dark background (not near-black / near-white) and
 * vivid (high saturation). Falls back to the brand defaults.
 */
export function pickAccents(cols: string[]): [string, string] {
  const scored = cols.map((c) => ({ c, l: luminance(c), s: saturation(c) }));
  let pool = scored.filter((o) => o.l >= 45 && o.l <= 215);
  if (pool.length < 2) pool = scored;
  pool = pool.sort((a, b) => b.s - a.s);
  const a = pool[0]?.c ?? "#8b46d6";
  const b = pool.find((o) => o.c !== a)?.c ?? pool[0]?.c ?? "#c43d8a";
  return [a, b];
}

export const DEFAULT_ACCENTS: [string, string] = ["#8b46d6", "#c43d8a"];
