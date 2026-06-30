// ============================================================
// CopyKit — shared client-side preview renderer.
// Fills a host element with a live preview of an item, by type.
// Used by the copy drawer and item pages.
// ============================================================
import type { Item } from "../data/items";
import { frameDoc, shadowCss } from "./codegen";
import { copyText } from "./ui";

export function fillPreview(host: HTMLElement, it: Item, bgKey: "dark" | "light"): void {
  const bg = bgKey === "light" ? "#f4f5fb" : "#141021";
  host.style.background = it.type === "comp" && it.bg ? it.bg : bg;
  host.innerHTML = "";

  if (it.type === "gradient") {
    const d = document.createElement("div");
    d.style.background = it.grad;
    host.appendChild(d);
  } else if (it.type === "palette") {
    const w = document.createElement("div");
    w.className = "pvpal";
    it.cols.forEach((c) => {
      const s = document.createElement("div");
      s.style.background = c;
      s.dataset.hex = c;
      s.title = `Copy ${c}`;
      s.addEventListener("click", () => copyText(c, `Copied ${c}`));
      w.appendChild(s);
    });
    host.appendChild(w);
  } else if (it.type === "shadow") {
    const w = document.createElement("div");
    w.className = "pvshadow";
    const c = document.createElement("div");
    c.className = "pvcard";
    c.style.boxShadow = shadowCss(it);
    w.appendChild(c);
    host.appendChild(w);
  } else {
    const f = document.createElement("iframe");
    f.setAttribute("sandbox", "allow-scripts");
    f.setAttribute("title", `${it.name} preview`);
    f.srcdoc = frameDoc(it, bg);
    host.appendChild(f);
  }
}
