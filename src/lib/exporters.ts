// ============================================================
// CopyKit — "My Kit" exporters. Turn a collection of saved
// pieces into a single usable .css file or a .json bundle.
// ============================================================
import type { Item } from "../data/items";
import { formatsFor, shadowCss } from "./codegen";

/** One clean stylesheet containing every saved piece. */
export function kitCss(list: Item[]): string {
  const head = `/* CopyKit — my kit (${list.length} piece${list.length === 1 ? "" : "s"}) · copykit.dev */\n\n`;
  const blocks = list.map((it) => {
    if (it.type === "gradient") {
      return `/* ${it.name} — gradient */\n.bg-${it.slug} { background: ${it.grad}; }`;
    }
    if (it.type === "shadow") {
      return `/* ${it.name} — shadow */\n.shadow-${it.slug} { box-shadow: ${shadowCss(it)}; }`;
    }
    if (it.type === "palette") {
      return `/* ${it.name} — palette */\n:root {\n${it.cols.map((c, i) => `  --${it.slug}-${i + 1}: ${c};`).join("\n")}\n}`;
    }
    // component: ship its CSS (the part that belongs in a stylesheet)
    return `/* ${it.name} — ${it.cat} (HTML: see copykit.dev) */\n${it.css || ""}`;
  });
  return head + blocks.join("\n\n") + "\n";
}

/** A machine-readable bundle with every format for each saved piece. */
export function kitJson(list: Item[]): string {
  return JSON.stringify(
    list.map((it) => ({
      name: it.name,
      category: it.cat,
      slug: it.slug,
      formats: Object.fromEntries(formatsFor(it)),
    })),
    null,
    2
  );
}
