// ============================================================
// CopyKit — tiny shared UI helpers for the client (clipboard + toast).
// Targets a #toast element that ships with <CopyDrawer />.
// ============================================================

let toastTimer: number | undefined;

export function showToast(msg: string): void {
  const t = document.getElementById("toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => t.classList.remove("show"), 1800);
}

export async function copyText(text: string, msg: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }
  showToast(msg);
}

/** A small, tasteful confetti burst (used on a successful copy). */
export function confetti(): void {
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const colors = ["#a855f7", "#ec4899", "#34d399", "#38bdf8", "#f59e0b"];
  const n = 16;
  for (let i = 0; i < n; i++) {
    const p = document.createElement("div");
    p.className = "confetti-bit";
    p.style.left = "50%";
    p.style.top = "42%";
    p.style.background = colors[i % colors.length];
    const dx = (Math.random() - 0.5) * 320;
    const dy = -120 - Math.random() * 220;
    const rot = (Math.random() - 0.5) * 720;
    p.style.setProperty("--dx", `${dx}px`);
    p.style.setProperty("--dy", `${dy}px`);
    p.style.setProperty("--rot", `${rot}deg`);
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 1100);
  }
}

/** Track a viewed piece for the "Jump back in" row (most recent first, max 8). */
export function trackRecent(slug: string): void {
  try {
    let recent: string[] = JSON.parse(localStorage.getItem("ck_recent") || "[]");
    recent = [slug, ...recent.filter((s) => s !== slug)].slice(0, 8);
    localStorage.setItem("ck_recent", JSON.stringify(recent));
  } catch {
    /* ignore */
  }
}
