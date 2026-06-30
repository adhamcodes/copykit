// ============================================================
// CopyKit — export a piece as PNG / SVG (client-side).
// Limited to gradients, palettes and shadows: these have no
// web fonts or external resources, so the canvas never taints
// and the output is reliable. Components are intentionally
// excluded (font/cross-origin issues would break the image).
// ============================================================
import type { Item } from "../data/items";
import { shadowCss } from "./codegen";

export function exportable(it: Item): boolean {
  return it.type === "gradient" || it.type === "palette" || it.type === "shadow";
}

function innerHtml(it: Item): string {
  if (it.type === "gradient") {
    return `<div style="width:100%;height:100%;background:${it.grad}"></div>`;
  }
  if (it.type === "palette") {
    return `<div style="display:flex;width:100%;height:100%">${it.cols
      .map((c) => `<div style="flex:1;background:${c}"></div>`)
      .join("")}</div>`;
  }
  if (it.type === "shadow") {
    return `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#141021"><div style="width:300px;height:300px;border-radius:48px;background:#2a2440;box-shadow:${shadowCss(it)}"></div></div>`;
  }
  return "";
}

const W = 1200, H = 630;

function svgString(it: Item): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><foreignObject x="0" y="0" width="${W}" height="${H}"><div xmlns="http://www.w3.org/1999/xhtml" style="width:${W}px;height:${H}px;margin:0">${innerHtml(it)}</div></foreignObject></svg>`;
}

function trigger(blob: Blob, name: string) {
  const u = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = u;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(u);
}

export function downloadSvg(it: Item, name: string): void {
  trigger(new Blob([svgString(it)], { type: "image/svg+xml" }), name + ".svg");
}

export async function downloadPng(it: Item, name: string): Promise<void> {
  const url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgString(it));
  const img = new Image();
  img.width = W;
  img.height = H;
  await new Promise<void>((resolve, reject) => {
    img.onload = () => resolve();
    img.onerror = () => reject(new Error("image load failed"));
    img.src = url;
  });
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("no canvas context");
  ctx.drawImage(img, 0, 0, W, H);
  await new Promise<void>((resolve, reject) => {
    canvas.toBlob((b) => {
      if (b) { trigger(b, name + ".png"); resolve(); }
      else reject(new Error("toBlob failed"));
    }, "image/png");
  });
}
