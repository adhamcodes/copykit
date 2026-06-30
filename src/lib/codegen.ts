// ============================================================
// CopyKit — code generation + formatting helpers
// Ported and typed from the prototype. Pure functions, shared
// by the client-side copy engine. Every output is meant to be
// pasted into a real project and actually work.
// ============================================================
import type { Item, CompItem, ShadowItem } from "../data/items";

/** A single copyable format: a tab label + the raw code. */
export type Format = [label: string, code: string];

export function shadowCss(it: ShadowItem): string {
  return `${it.x}px ${it.y}px ${it.blur}px ${it.spread}px ${it.color}`;
}

/** Build a self-contained sandboxed document for a component preview. */
export function frameDoc(it: CompItem, bg = "transparent"): string {
  const background = it.bg || bg;
  const js = it.js ? `<scr${""}ipt>${it.js}</scr${""}ipt>` : "";
  return (
    `<!doctype html><html><head><meta charset="utf-8">` +
    `<style>html,body{height:100%;margin:0}` +
    `body{display:flex;align-items:center;justify-content:center;overflow:hidden;background:${background}}` +
    `${it.css || ""}</style></head><body>${it.html || ""}${js}</body></html>`
  );
}

/** Convert HTML attributes to JSX-friendly equivalents. */
export function jsxOf(html: string): string {
  return (html || "")
    .replace(/class=/g, "className=")
    .replace(/<br>/g, "<br/>")
    .replace(/ for=/g, " htmlFor=");
}

export function reactCode(it: CompItem): string {
  const imports = it.js ? `import { useEffect } from "react";\n\n` : "";
  const effect = it.js
    ? `  useEffect(() => {\n    ${it.js.replace(/\n/g, "\n    ")}\n  }, []);\n\n`
    : "";
  return (
    `${imports}export default function Demo() {\n` +
    `${effect}` +
    `  return (\n    <>\n      <style>{\`\n${it.css || ""}\n\`}</style>\n      ${jsxOf(it.html)}\n    </>\n  );\n}`
  );
}

export function vueCode(it: CompItem): string {
  const script = it.js
    ? `\n<scr${""}ipt setup>\nimport { onMounted } from "vue";\nonMounted(() => {\n  ${it.js.replace(/\n/g, "\n  ")}\n});\n</scr${""}ipt>\n`
    : "";
  return (
    `<template>\n  ${it.html || ""}\n</template>\n${script}\n<style scoped>\n${it.css || ""}\n</style>\n`
  );
}

/** All copyable formats for an item, in tab order. The first is the default. */
export function formatsFor(it: Item): Format[] {
  if (it.type === "gradient") {
    return [
      ["CSS", `background: ${it.grad};`],
      ["Tailwind", `<div class="bg-[${it.grad.replace(/\s+/g, "_")}]"></div>`],
    ];
  }
  if (it.type === "palette") {
    return [
      ["CSS Vars", `:root {\n${it.cols.map((c, i) => `  --c${i + 1}: ${c};`).join("\n")}\n}`],
      ["Tailwind", `colors: {\n${it.cols.map((c, i) => `  c${i + 1}: "${c}",`).join("\n")}\n}`],
      ["Hex", it.cols.join("\n")],
      ["Array", `[${it.cols.map((c) => `"${c}"`).join(", ")}]`],
    ];
  }
  if (it.type === "shadow") {
    const css = shadowCss(it);
    return [
      ["CSS", `box-shadow: ${css};`],
      ["Tailwind", `<div class="shadow-[${css.replace(/\s+/g, "_")}]"></div>`],
    ];
  }
  // component
  const out: Format[] = [["HTML", it.html || ""]];
  if (it.css) out.push(["CSS", it.css]);
  if (it.js) out.push(["JS", it.js]);
  out.push(["React", reactCode(it)], ["Vue", vueCode(it)]);
  return out;
}

export function primaryCode(it: Item): string {
  return formatsFor(it)[0][1];
}

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/** Lightweight syntax highlighter -> HTML string (display only; copy raw). */
export function highlight(code: string): string {
  const rx =
    /(\/\*[\s\S]*?\*\/)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|(#[0-9a-fA-F]{3,8}\b)|(-?\d*\.?\d+(?:px|em|rem|%|deg|s|ms|vh|vw|fr)?\b)|([a-zA-Z-]+)(?=\s*:)/g;
  let out = "";
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = rx.exec(code))) {
    out += esc(code.slice(last, m.index));
    if (m[1]) out += `<span class="t-c">${esc(m[1])}</span>`;
    else if (m[2]) out += `<span class="t-s">${esc(m[2])}</span>`;
    else if (m[3]) out += `<span class="t-h"><span class="sw" style="background:${m[3]}"></span>${m[3]}</span>`;
    else if (m[4]) out += `<span class="t-n">${esc(m[4])}</span>`;
    else if (m[5]) out += `<span class="t-p">${esc(m[5])}</span>`;
    last = rx.lastIndex;
  }
  out += esc(code.slice(last));
  return out;
}
