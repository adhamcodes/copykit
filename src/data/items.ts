// AUTO-GENERATED from prototype/index.html.
// Curated literal pieces + 40 named gradients + extra curated components
// + all gen() bases (one distinct design each). Algorithmic filler
// (spectrum/neon gradients, palette ramps, shadow matrices) is excluded
// to keep quality high.

export interface GradientItem { type: "gradient"; cat: "gradients"; name: string; slug: string; grad: string; }
export interface PaletteItem { type: "palette"; cat: "palettes"; name: string; slug: string; cols: string[]; }
export interface ShadowItem { type: "shadow"; cat: "shadows"; name: string; slug: string; x: number; y: number; blur: number; spread: number; color: string; }
export interface CompItem { type: "comp"; cat: string; name: string; slug: string; html: string; css: string; js?: string | null; bg?: string | null; }
export type Item = GradientItem | PaletteItem | ShadowItem | CompItem;

export const items: Item[] = [
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Aurora",
    "grad": "linear-gradient(160deg,#0b3b2e,#0e7490)",
    "slug": "gradients-aurora"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Cyanide",
    "grad": "linear-gradient(160deg,#0e2a3a,#2dd4bf)",
    "slug": "gradients-cyanide"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Violet",
    "grad": "linear-gradient(160deg,#241033,#7c3aed)",
    "slug": "gradients-violet"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Amber",
    "grad": "linear-gradient(160deg,#2a1810,#b45309)",
    "slug": "gradients-amber"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Candy",
    "grad": "linear-gradient(135deg,#ff5f9e,#a855f7)",
    "slug": "gradients-candy"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Sunset",
    "grad": "linear-gradient(135deg,#ff7e5f,#feb47b)",
    "slug": "gradients-sunset"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Magma",
    "grad": "linear-gradient(135deg,#3a0ca3,#f72585)",
    "slug": "gradients-magma"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Mint",
    "grad": "linear-gradient(135deg,#0b3b2e,#34d399)",
    "slug": "gradients-mint"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Cobalt",
    "grad": "linear-gradient(160deg,#0e2235,#2563eb)",
    "slug": "gradients-cobalt"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Berry",
    "grad": "linear-gradient(135deg,#4a044e,#d946ef)",
    "slug": "gradients-berry"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Ocean",
    "grad": "linear-gradient(160deg,#03045e,#00b4d8)",
    "slug": "gradients-ocean"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Ember",
    "grad": "linear-gradient(135deg,#7c2d12,#f59e0b)",
    "slug": "gradients-ember"
  },
  {
    "type": "palette",
    "cat": "palettes",
    "name": "Forest",
    "cols": [
      "#0b3b2e",
      "#0e7490",
      "#34d399",
      "#a7f3d0",
      "#ecfdf5"
    ],
    "slug": "palettes-forest"
  },
  {
    "type": "palette",
    "cat": "palettes",
    "name": "Sunset",
    "cols": [
      "#3a0ca3",
      "#7209b7",
      "#f72585",
      "#ff7e5f",
      "#feb47b"
    ],
    "slug": "palettes-sunset"
  },
  {
    "type": "palette",
    "cat": "palettes",
    "name": "Slate",
    "cols": [
      "#0f172a",
      "#1e293b",
      "#475569",
      "#94a3b8",
      "#e2e8f0"
    ],
    "slug": "palettes-slate"
  },
  {
    "type": "palette",
    "cat": "palettes",
    "name": "Candy",
    "cols": [
      "#ff5f9e",
      "#c026d3",
      "#7c3aed",
      "#4361ee",
      "#4cc9f0"
    ],
    "slug": "palettes-candy"
  },
  {
    "type": "palette",
    "cat": "palettes",
    "name": "Earth",
    "cols": [
      "#2a1810",
      "#7c3a12",
      "#b45309",
      "#d4a017",
      "#fef3c7"
    ],
    "slug": "palettes-earth"
  },
  {
    "type": "palette",
    "cat": "palettes",
    "name": "Berry",
    "cols": [
      "#4a044e",
      "#86198f",
      "#d946ef",
      "#f0abfc",
      "#fae8ff"
    ],
    "slug": "palettes-berry"
  },
  {
    "type": "palette",
    "cat": "palettes",
    "name": "Mono",
    "cols": [
      "#0a0a0a",
      "#262626",
      "#525252",
      "#a3a3a3",
      "#f5f5f5"
    ],
    "slug": "palettes-mono"
  },
  {
    "type": "palette",
    "cat": "palettes",
    "name": "Bloom",
    "cols": [
      "#14532d",
      "#16a34a",
      "#86efac",
      "#fde68a",
      "#f59e0b"
    ],
    "slug": "palettes-bloom"
  },
  {
    "type": "comp",
    "cat": "buttons",
    "name": "Glow",
    "html": "<button class=\"b\">Get Started</button>",
    "css": ".b{font:600 16px Outfit,system-ui;padding:14px 30px;border:none;border-radius:12px;color:#fff;background:linear-gradient(120deg,#a855f7,#ec4899);box-shadow:0 10px 30px rgba(168,85,247,.5);cursor:pointer;transition:.25s}.b:hover{transform:translateY(-3px);box-shadow:0 18px 40px rgba(168,85,247,.65)}",
    "slug": "buttons-glow"
  },
  {
    "type": "comp",
    "cat": "buttons",
    "name": "Neon Outline",
    "html": "<button class=\"b\">Launch 🚀</button>",
    "css": ".b{font:600 16px Outfit,system-ui;padding:13px 28px;background:transparent;color:#a855f7;border:1.5px solid #a855f7;border-radius:12px;cursor:pointer;transition:.25s}.b:hover{background:#a855f7;color:#fff;box-shadow:0 0 26px rgba(168,85,247,.7)}",
    "slug": "buttons-neon-outline"
  },
  {
    "type": "comp",
    "cat": "buttons",
    "name": "Shine Sweep",
    "html": "<button class=\"b\">Download</button>",
    "css": ".b{position:relative;overflow:hidden;font:600 16px Outfit,system-ui;padding:14px 30px;border:none;border-radius:12px;color:#fff;background:#7c3aed;cursor:pointer}.b::after{content:\"\";position:absolute;top:0;left:-120%;width:60%;height:100%;background:linear-gradient(120deg,transparent,rgba(255,255,255,.5),transparent);transform:skewX(-20deg);transition:.6s}.b:hover::after{left:140%}",
    "slug": "buttons-shine-sweep"
  },
  {
    "type": "comp",
    "cat": "buttons",
    "name": "3D Push",
    "html": "<button class=\"b\">Press me</button>",
    "css": ".b{font:600 16px Outfit,system-ui;padding:14px 30px;border:none;border-radius:12px;color:#fff;background:#a855f7;box-shadow:0 6px 0 #6d28d9;cursor:pointer;transition:.08s}.b:active{transform:translateY(5px);box-shadow:0 1px 0 #6d28d9}",
    "slug": "buttons-3d-push"
  },
  {
    "type": "comp",
    "cat": "buttons",
    "name": "Gradient Border",
    "html": "<button class=\"b\">Premium</button>",
    "css": ".b{font:600 16px Outfit,system-ui;padding:14px 30px;border:none;border-radius:12px;color:#fff;background:#15111f;position:relative;cursor:pointer}.b::before{content:\"\";position:absolute;inset:0;border-radius:12px;padding:1.5px;background:linear-gradient(120deg,#a855f7,#ec4899);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude}.b:hover{background:#1d1730}",
    "slug": "buttons-gradient-border"
  },
  {
    "type": "comp",
    "cat": "buttons",
    "name": "Pop Scale",
    "html": "<button class=\"b\">Add to cart</button>",
    "css": ".b{font:600 16px Outfit,system-ui;padding:14px 30px;border:none;border-radius:99px;color:#fff;background:linear-gradient(120deg,#ec4899,#a855f7);cursor:pointer;transition:.18s}.b:hover{transform:scale(1.06)}.b:active{transform:scale(.96)}",
    "slug": "buttons-pop-scale"
  },
  {
    "type": "comp",
    "cat": "toggles",
    "name": "iOS Switch",
    "html": "<label class=\"s\"><input type=\"checkbox\" checked><span></span></label>",
    "css": ".s input{display:none}.s span{display:block;width:60px;height:32px;background:#3a3450;border-radius:99px;position:relative;cursor:pointer;transition:.3s}.s span::after{content:\"\";position:absolute;top:3px;left:3px;width:26px;height:26px;background:#fff;border-radius:50%;transition:.3s}.s input:checked+span{background:#a855f7}.s input:checked+span::after{transform:translateX(28px)}",
    "slug": "toggles-ios-switch"
  },
  {
    "type": "comp",
    "cat": "toggles",
    "name": "Sun / Moon",
    "html": "<label class=\"s\"><input type=\"checkbox\"><span></span></label>",
    "css": ".s input{display:none}.s span{display:block;width:64px;height:32px;border-radius:99px;background:#0ea5e9;position:relative;cursor:pointer;transition:.4s}.s span::after{content:\"☀\";position:absolute;top:2px;left:3px;width:28px;height:28px;background:#fde68a;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:15px;transition:.4s}.s input:checked+span{background:#1e1b4b}.s input:checked+span::after{content:\"🌙\";transform:translateX(31px);background:#cbd5e1}",
    "slug": "toggles-sun-moon"
  },
  {
    "type": "comp",
    "cat": "toggles",
    "name": "Check Pop",
    "html": "<label class=\"s\"><input type=\"checkbox\" checked><span></span></label>",
    "css": ".s input{display:none}.s span{width:30px;height:30px;border-radius:9px;border:2px solid #3a3450;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:.2s}.s span::after{content:\"✓\";color:#fff;font-weight:800;opacity:0;transform:scale(.4);transition:.2s}.s input:checked+span{background:#a855f7;border-color:#a855f7}.s input:checked+span::after{opacity:1;transform:scale(1)}",
    "slug": "toggles-check-pop"
  },
  {
    "type": "comp",
    "cat": "cursors",
    "name": "Glow Trail",
    "html": "<div class=\"stage\">move your mouse<div class=\"blob\"></div></div>",
    "css": ".stage{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#4a4360;font:600 14px Outfit,system-ui;overflow:hidden;cursor:crosshair}.blob{position:absolute;width:50px;height:50px;border-radius:50%;background:radial-gradient(circle,#a855f7,transparent 70%);pointer-events:none;transform:translate(-50%,-50%)}",
    "js": "var b=document.querySelector(\".blob\"),x=0,y=0,tx=0,ty=0;addEventListener(\"mousemove\",e=>{tx=e.clientX;ty=e.clientY});(function l(){x+=(tx-x)*.12;y+=(ty-y)*.12;b.style.left=x+\"px\";b.style.top=y+\"px\";requestAnimationFrame(l)})()",
    "bg": "#141021",
    "slug": "cursors-glow-trail"
  },
  {
    "type": "comp",
    "cat": "cursors",
    "name": "Spotlight",
    "html": "<div class=\"stage\">move your mouse</div>",
    "css": ".stage{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#4a4360;font:600 14px Outfit,system-ui;cursor:crosshair;background:#141021}",
    "js": "var s=document.querySelector(\".stage\");addEventListener(\"mousemove\",e=>{s.style.background=\"radial-gradient(220px circle at \"+e.clientX+\"px \"+e.clientY+\"px,rgba(168,85,247,.25),#141021)\"})",
    "bg": "#141021",
    "slug": "cursors-spotlight"
  },
  {
    "type": "comp",
    "cat": "cursors",
    "name": "Magnetic Ring",
    "html": "<div class=\"stage\">move your mouse<div class=\"ring\"></div><div class=\"dot\"></div></div>",
    "css": ".stage{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#4a4360;font:600 14px Outfit,system-ui;cursor:crosshair;overflow:hidden}.ring{position:absolute;width:40px;height:40px;border:2px solid #a855f7;border-radius:50%;pointer-events:none;transform:translate(-50%,-50%)}.dot{position:absolute;width:6px;height:6px;background:#ec4899;border-radius:50%;pointer-events:none;transform:translate(-50%,-50%)}",
    "js": "var r=document.querySelector(\".ring\"),d=document.querySelector(\".dot\"),x=0,y=0,rx=0,ry=0;addEventListener(\"mousemove\",e=>{x=e.clientX;y=e.clientY;d.style.left=x+\"px\";d.style.top=y+\"px\"});(function l(){rx+=(x-rx)*.15;ry+=(y-ry)*.15;r.style.left=rx+\"px\";r.style.top=ry+\"px\";requestAnimationFrame(l)})()",
    "bg": "#141021",
    "slug": "cursors-magnetic-ring"
  },
  {
    "type": "shadow",
    "cat": "shadows",
    "name": "Soft",
    "x": 0,
    "y": 12,
    "blur": 30,
    "spread": -6,
    "color": "rgba(0,0,0,.35)",
    "slug": "shadows-soft"
  },
  {
    "type": "shadow",
    "cat": "shadows",
    "name": "Floating",
    "x": 0,
    "y": 24,
    "blur": 50,
    "spread": -12,
    "color": "rgba(0,0,0,.4)",
    "slug": "shadows-floating"
  },
  {
    "type": "shadow",
    "cat": "shadows",
    "name": "Glow Violet",
    "x": 0,
    "y": 0,
    "blur": 40,
    "spread": 0,
    "color": "rgba(168,85,247,.6)",
    "slug": "shadows-glow-violet"
  },
  {
    "type": "shadow",
    "cat": "shadows",
    "name": "Glow Pink",
    "x": 0,
    "y": 0,
    "blur": 40,
    "spread": 0,
    "color": "rgba(236,72,153,.55)",
    "slug": "shadows-glow-pink"
  },
  {
    "type": "shadow",
    "cat": "shadows",
    "name": "Hard Offset",
    "x": 10,
    "y": 10,
    "blur": 0,
    "spread": 0,
    "color": "#a855f7",
    "slug": "shadows-hard-offset"
  },
  {
    "type": "shadow",
    "cat": "shadows",
    "name": "Deep",
    "x": 0,
    "y": 30,
    "blur": 60,
    "spread": -10,
    "color": "rgba(0,0,0,.55)",
    "slug": "shadows-deep"
  },
  {
    "type": "comp",
    "cat": "loaders",
    "name": "Spinner",
    "html": "<div class=\"ld\"></div>",
    "css": ".ld{width:40px;height:40px;border:4px solid #2a2440;border-top-color:#a855f7;border-radius:50%;animation:sp 1s linear infinite}@keyframes sp{to{transform:rotate(360deg)}}",
    "slug": "loaders-spinner"
  },
  {
    "type": "comp",
    "cat": "loaders",
    "name": "Dual Ring",
    "html": "<div class=\"ld\"></div>",
    "css": ".ld{width:44px;height:44px;border-radius:50%;border:4px solid transparent;border-top-color:#a855f7;border-bottom-color:#ec4899;animation:sp 1.1s ease infinite}@keyframes sp{to{transform:rotate(360deg)}}",
    "slug": "loaders-dual-ring"
  },
  {
    "type": "comp",
    "cat": "loaders",
    "name": "Bouncing Dots",
    "html": "<div class=\"ld\"><i></i><i></i><i></i></div>",
    "css": ".ld{display:flex;gap:8px}.ld i{width:12px;height:12px;border-radius:50%;background:#a855f7;animation:bn .6s ease infinite}.ld i:nth-child(2){animation-delay:.15s}.ld i:nth-child(3){animation-delay:.3s}@keyframes bn{0%,100%{transform:translateY(0);opacity:.5}50%{transform:translateY(-12px);opacity:1}}",
    "slug": "loaders-bouncing-dots"
  },
  {
    "type": "comp",
    "cat": "loaders",
    "name": "Pulse Ring",
    "html": "<div class=\"ld\"></div>",
    "css": ".ld{width:36px;height:36px;border-radius:50%;background:#a855f7;animation:pl 1.2s ease-out infinite}@keyframes pl{0%{box-shadow:0 0 0 0 rgba(168,85,247,.6)}100%{box-shadow:0 0 0 24px rgba(168,85,247,0)}}",
    "slug": "loaders-pulse-ring"
  },
  {
    "type": "comp",
    "cat": "loaders",
    "name": "Bars",
    "html": "<div class=\"ld\"><i></i><i></i><i></i><i></i></div>",
    "css": ".ld{display:flex;gap:5px;align-items:flex-end;height:40px}.ld i{width:7px;height:100%;background:linear-gradient(#a855f7,#ec4899);border-radius:4px;animation:br 1s ease infinite}.ld i:nth-child(2){animation-delay:.15s}.ld i:nth-child(3){animation-delay:.3s}.ld i:nth-child(4){animation-delay:.45s}@keyframes br{0%,100%{transform:scaleY(.4)}50%{transform:scaleY(1)}}",
    "slug": "loaders-bars"
  },
  {
    "type": "comp",
    "cat": "textfx",
    "name": "Gradient Text",
    "html": "<div class=\"t\">Beautiful</div>",
    "css": ".t{font:800 44px Outfit,system-ui;background:linear-gradient(120deg,#a855f7,#ec4899);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}",
    "slug": "textfx-gradient-text"
  },
  {
    "type": "comp",
    "cat": "textfx",
    "name": "Shimmer",
    "html": "<div class=\"t\">Shimmer</div>",
    "css": ".t{font:800 44px Outfit,system-ui;background:linear-gradient(90deg,#4a4360,#fff,#4a4360);background-size:200% auto;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:sh 2.5s linear infinite}@keyframes sh{to{background-position:200% center}}",
    "slug": "textfx-shimmer"
  },
  {
    "type": "comp",
    "cat": "textfx",
    "name": "Neon Glow",
    "html": "<div class=\"t\">NEON</div>",
    "css": ".t{font:800 44px Outfit,system-ui;color:#fff;text-shadow:0 0 6px #a855f7,0 0 16px #a855f7,0 0 34px #ec4899}",
    "slug": "textfx-neon-glow"
  },
  {
    "type": "comp",
    "cat": "textfx",
    "name": "Outline",
    "html": "<div class=\"t\">Outline</div>",
    "css": ".t{font:800 44px Outfit,system-ui;color:transparent;-webkit-text-stroke:1.5px #a855f7}",
    "slug": "textfx-outline"
  },
  {
    "type": "comp",
    "cat": "textfx",
    "name": "Glitch",
    "html": "<div class=\"t\">glitch</div>",
    "css": ".t{font:800 44px Outfit,system-ui;color:#fff;position:relative}.t::before,.t::after{content:\"glitch\";position:absolute;inset:0}.t::before{color:#a855f7;animation:gl 2s infinite}.t::after{color:#ec4899;animation:gl 2s infinite reverse}@keyframes gl{0%,100%{clip-path:inset(0);transform:translate(0)}20%{transform:translate(-3px,1px)}40%{transform:translate(3px,-1px)}}",
    "slug": "textfx-glitch"
  },
  {
    "type": "comp",
    "cat": "cards",
    "name": "Glassmorphism",
    "html": "<div class=\"gl\">Glass</div>",
    "css": ".gl{width:160px;height:100px;border-radius:18px;background:rgba(255,255,255,.08);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.18);display:flex;align-items:center;justify-content:center;color:#fff;font:600 16px Outfit,system-ui;box-shadow:0 10px 40px rgba(0,0,0,.3)}",
    "js": null,
    "bg": "linear-gradient(135deg,#a855f7,#ec4899)",
    "slug": "cards-glassmorphism"
  },
  {
    "type": "comp",
    "cat": "cards",
    "name": "Gradient Border",
    "html": "<div class=\"gb\">Card</div>",
    "css": ".gb{width:160px;height:100px;border-radius:18px;background:#15111f;position:relative;display:flex;align-items:center;justify-content:center;color:#fff;font:600 16px Outfit,system-ui}.gb::before{content:\"\";position:absolute;inset:0;border-radius:18px;padding:1.5px;background:linear-gradient(120deg,#a855f7,#ec4899);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude}",
    "slug": "cards-gradient-border"
  },
  {
    "type": "comp",
    "cat": "cards",
    "name": "Neumorphic",
    "html": "<div class=\"nu\">Soft</div>",
    "css": ".nu{width:150px;height:100px;border-radius:22px;background:#e0e0ec;box-shadow:9px 9px 18px #bcbcC8,-9px -9px 18px #ffffff;display:flex;align-items:center;justify-content:center;color:#6d28d9;font:600 16px Outfit,system-ui}",
    "js": null,
    "bg": "#e0e0ec",
    "slug": "cards-neumorphic"
  },
  {
    "type": "comp",
    "cat": "cards",
    "name": "Spotlight Hover",
    "html": "<div class=\"sp\">Hover me</div>",
    "css": ".sp{width:170px;height:110px;border-radius:18px;background:#15111f;border:1px solid #241d38;display:flex;align-items:center;justify-content:center;color:#cfc7e8;font:600 15px Outfit,system-ui;position:relative;overflow:hidden;cursor:pointer}.sp::before{content:\"\";position:absolute;inset:0;background:radial-gradient(160px circle at var(--x,50%) var(--y,50%),rgba(168,85,247,.35),transparent 60%);opacity:0;transition:.3s}.sp:hover::before{opacity:1}",
    "js": "var s=document.querySelector(\".sp\");s.addEventListener(\"mousemove\",e=>{var r=s.getBoundingClientRect();s.style.setProperty(\"--x\",(e.clientX-r.left)+\"px\");s.style.setProperty(\"--y\",(e.clientY-r.top)+\"px\")})",
    "bg": "#141021",
    "slug": "cards-spotlight-hover"
  },
  {
    "type": "comp",
    "cat": "backgrounds",
    "name": "Aurora",
    "html": "<div class=\"bg\"></div>",
    "css": ".bg{width:100%;height:100%;background:linear-gradient(125deg,#0d0a17,#2a1248,#3d1040,#0d0a17);background-size:400% 400%;animation:au 12s ease infinite}@keyframes au{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}",
    "slug": "backgrounds-aurora"
  },
  {
    "type": "comp",
    "cat": "backgrounds",
    "name": "Dot Grid",
    "html": "<div class=\"bg\"></div>",
    "css": ".bg{width:100%;height:100%;background:#0d0a17;background-image:radial-gradient(rgba(168,85,247,.4) 1px,transparent 1px);background-size:22px 22px}",
    "slug": "backgrounds-dot-grid"
  },
  {
    "type": "comp",
    "cat": "backgrounds",
    "name": "Mesh",
    "html": "<div class=\"bg\"></div>",
    "css": ".bg{width:100%;height:100%;background:radial-gradient(at 20% 20%,#7c3aed 0,transparent 50%),radial-gradient(at 80% 30%,#ec4899 0,transparent 50%),radial-gradient(at 50% 80%,#2563eb 0,transparent 50%),#0d0a17}",
    "slug": "backgrounds-mesh"
  },
  {
    "type": "comp",
    "cat": "backgrounds",
    "name": "Stripes",
    "html": "<div class=\"bg\"></div>",
    "css": ".bg{width:100%;height:100%;background:repeating-linear-gradient(45deg,#15111f,#15111f 14px,#1d1730 14px,#1d1730 28px)}",
    "slug": "backgrounds-stripes"
  },
  {
    "type": "comp",
    "cat": "backgrounds",
    "name": "Grid Lines",
    "html": "<div class=\"bg\"></div>",
    "css": ".bg{width:100%;height:100%;background:#0d0a17;background-image:linear-gradient(rgba(168,85,247,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(168,85,247,.12) 1px,transparent 1px);background-size:28px 28px}",
    "slug": "backgrounds-grid-lines"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Peach",
    "grad": "linear-gradient(135deg,#ff9a9e,#fecfef)",
    "slug": "gradients-peach"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Twilight",
    "grad": "linear-gradient(160deg,#0f0c29,#302b63)",
    "slug": "gradients-twilight"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Lime",
    "grad": "linear-gradient(135deg,#166534,#bef264)",
    "slug": "gradients-lime"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Rosegold",
    "grad": "linear-gradient(135deg,#b76e79,#eacda3)",
    "slug": "gradients-rosegold"
  },
  {
    "type": "palette",
    "cat": "palettes",
    "name": "Tide",
    "cols": [
      "#03045e",
      "#0077b6",
      "#00b4d8",
      "#90e0ef",
      "#caf0f8"
    ],
    "slug": "palettes-tide"
  },
  {
    "type": "palette",
    "cat": "palettes",
    "name": "Dusk",
    "cols": [
      "#2b2d42",
      "#8d99ae",
      "#edf2f4",
      "#ef233c",
      "#d90429"
    ],
    "slug": "palettes-dusk"
  },
  {
    "type": "comp",
    "cat": "buttons",
    "name": "Ghost",
    "html": "<button class=\"b\">Cancel</button>",
    "css": ".b{font:600 16px Outfit,system-ui;padding:13px 28px;background:rgba(168,85,247,.08);color:#c084fc;border:1px solid rgba(168,85,247,.3);border-radius:12px;cursor:pointer;transition:.2s}.b:hover{background:rgba(168,85,247,.18)}",
    "slug": "buttons-ghost"
  },
  {
    "type": "comp",
    "cat": "buttons",
    "name": "Arrow Slide",
    "html": "<button class=\"b\">Next <span>→</span></button>",
    "css": ".b{font:600 16px Outfit,system-ui;padding:14px 28px;border:none;border-radius:12px;color:#fff;background:#7c3aed;cursor:pointer;display:inline-flex;align-items:center;gap:8px}.b span{transition:.25s}.b:hover span{transform:translateX(6px)}",
    "slug": "buttons-arrow-slide"
  },
  {
    "type": "comp",
    "cat": "inputs",
    "name": "Glow Focus",
    "html": "<input class=\"i\" placeholder=\"Email address\">",
    "css": ".i{font:500 15px Outfit,system-ui;padding:13px 16px;width:230px;background:#15111f;border:1.5px solid #2a2440;border-radius:12px;color:#fff;outline:none;transition:.25s}.i::placeholder{color:#6b6486}.i:focus{border-color:#a855f7;box-shadow:0 0 0 4px rgba(168,85,247,.18)}",
    "js": null,
    "bg": "#141021",
    "slug": "inputs-glow-focus"
  },
  {
    "type": "comp",
    "cat": "inputs",
    "name": "Underline",
    "html": "<input class=\"i\" placeholder=\"Your name\">",
    "css": ".i{font:500 15px Outfit,system-ui;padding:10px 2px;width:230px;background:none;border:none;border-bottom:2px solid #2a2440;color:#fff;outline:none;transition:.25s}.i::placeholder{color:#6b6486}.i:focus{border-color:#ec4899}",
    "js": null,
    "bg": "#141021",
    "slug": "inputs-underline"
  },
  {
    "type": "comp",
    "cat": "inputs",
    "name": "Search Bar",
    "html": "<div class=\"sw\"><span>⌕</span><input placeholder=\"Search…\"></div>",
    "css": ".sw{display:flex;align-items:center;gap:8px;background:#15111f;border:1.5px solid #2a2440;border-radius:12px;padding:11px 14px;width:230px;transition:.25s}.sw span{color:#6b6486}.sw input{flex:1;background:none;border:none;outline:none;color:#fff;font:500 14px Outfit,system-ui}.sw:focus-within{border-color:#a855f7}",
    "js": null,
    "bg": "#141021",
    "slug": "inputs-search-bar"
  },
  {
    "type": "comp",
    "cat": "badges",
    "name": "Pill",
    "html": "<span class=\"bg\">New</span>",
    "css": ".bg{font:600 13px Outfit,system-ui;padding:5px 14px;border-radius:999px;background:rgba(168,85,247,.15);color:#c084fc;border:1px solid rgba(168,85,247,.4)}",
    "js": null,
    "bg": "#141021",
    "slug": "badges-pill"
  },
  {
    "type": "comp",
    "cat": "badges",
    "name": "Status Dot",
    "html": "<span class=\"bg\"><i></i>Online</span>",
    "css": ".bg{font:600 13px Outfit,system-ui;display:inline-flex;align-items:center;gap:7px;padding:6px 14px;border-radius:999px;background:#15111f;border:1px solid #2a2440;color:#e8e4f3}.bg i{width:8px;height:8px;border-radius:50%;background:#34d399;box-shadow:0 0 8px #34d399;animation:bl 1.5s infinite}@keyframes bl{50%{opacity:.4}}",
    "js": null,
    "bg": "#141021",
    "slug": "badges-status-dot"
  },
  {
    "type": "comp",
    "cat": "badges",
    "name": "Gradient Tag",
    "html": "<span class=\"bg\">PRO</span>",
    "css": ".bg{font:700 12px Outfit,system-ui;letter-spacing:.08em;padding:5px 13px;border-radius:8px;background:linear-gradient(120deg,#a855f7,#ec4899);color:#fff}",
    "js": null,
    "bg": "#141021",
    "slug": "badges-gradient-tag"
  },
  {
    "type": "comp",
    "cat": "loaders",
    "name": "Ripple",
    "html": "<div class=\"ld\"></div>",
    "css": ".ld{width:44px;height:44px;border-radius:50%;border:3px solid #a855f7;animation:rp 1s ease-out infinite}@keyframes rp{0%{transform:scale(.3);opacity:1}100%{transform:scale(1);opacity:0}}",
    "slug": "loaders-ripple"
  },
  {
    "type": "comp",
    "cat": "textfx",
    "name": "Underline Grow",
    "html": "<div class=\"t\">Hover me</div>",
    "css": ".t{font:800 40px Outfit,system-ui;color:#fff;position:relative;cursor:pointer;display:inline-block}.t::after{content:\"\";position:absolute;left:0;bottom:-4px;width:100%;height:4px;background:linear-gradient(120deg,#a855f7,#ec4899);border-radius:4px;transform:scaleX(0);transform-origin:left;transition:.3s}.t:hover::after{transform:scaleX(1)}",
    "slug": "textfx-underline-grow"
  },
  {
    "type": "comp",
    "cat": "cards",
    "name": "Stat Card",
    "html": "<div class=\"sc\"><div class=\"n\">2.4k</div><div class=\"l\">Downloads</div></div>",
    "css": ".sc{width:160px;padding:22px;border-radius:18px;background:linear-gradient(160deg,#1a1330,#15111f);border:1px solid #2a2440}.sc .n{font:800 30px Outfit,system-ui;background:linear-gradient(120deg,#a855f7,#ec4899);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.sc .l{font:500 13px Outfit,system-ui;color:#857f9c;margin-top:4px}",
    "slug": "cards-stat-card"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Plum Wine",
    "grad": "linear-gradient(135deg,#42275a,#734b6d)",
    "slug": "gradients-plum-wine"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Sea Breeze",
    "grad": "linear-gradient(135deg,#1cb5e0,#000851)",
    "slug": "gradients-sea-breeze"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Mango",
    "grad": "linear-gradient(135deg,#ffe259,#ffa751)",
    "slug": "gradients-mango"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Royal",
    "grad": "linear-gradient(135deg,#141e30,#243b55)",
    "slug": "gradients-royal"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Cosmic",
    "grad": "linear-gradient(135deg,#ff00cc,#333399)",
    "slug": "gradients-cosmic"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Lush",
    "grad": "linear-gradient(135deg,#56ab2f,#a8e063)",
    "slug": "gradients-lush"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Cherry",
    "grad": "linear-gradient(135deg,#eb3349,#f45c43)",
    "slug": "gradients-cherry"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Frost",
    "grad": "linear-gradient(135deg,#000428,#004e92)",
    "slug": "gradients-frost"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Peachy",
    "grad": "linear-gradient(135deg,#ed4264,#ffedbc)",
    "slug": "gradients-peachy"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Emerald",
    "grad": "linear-gradient(135deg,#348f50,#56b4d3)",
    "slug": "gradients-emerald"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Grape",
    "grad": "linear-gradient(135deg,#6a3093,#a044ff)",
    "slug": "gradients-grape"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Flare",
    "grad": "linear-gradient(135deg,#f12711,#f5af19)",
    "slug": "gradients-flare"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Steel",
    "grad": "linear-gradient(135deg,#bdc3c7,#2c3e50)",
    "slug": "gradients-steel"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Bloodfire",
    "grad": "linear-gradient(135deg,#cb2d3e,#ef473a)",
    "slug": "gradients-bloodfire"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Aqua",
    "grad": "linear-gradient(135deg,#13547a,#80d0c7)",
    "slug": "gradients-aqua"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Moonlit",
    "grad": "linear-gradient(135deg,#0f2027,#2c5364)",
    "slug": "gradients-moonlit"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Coral",
    "grad": "linear-gradient(135deg,#ff9966,#ff5e62)",
    "slug": "gradients-coral"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Deep Sea",
    "grad": "linear-gradient(135deg,#2c3e50,#4ca1af)",
    "slug": "gradients-deep-sea"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Pinky",
    "grad": "linear-gradient(135deg,#ee9ca7,#ffdde1)",
    "slug": "gradients-pinky"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Nightfall",
    "grad": "linear-gradient(135deg,#191654,#43c6ac)",
    "slug": "gradients-nightfall"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Tangerine",
    "grad": "linear-gradient(135deg,#f83600,#f9d423)",
    "slug": "gradients-tangerine"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Lavender",
    "grad": "linear-gradient(135deg,#a18cd1,#fbc2eb)",
    "slug": "gradients-lavender"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Toxic",
    "grad": "linear-gradient(135deg,#00b09b,#96c93d)",
    "slug": "gradients-toxic"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Ruby",
    "grad": "linear-gradient(135deg,#b31217,#e52d27)",
    "slug": "gradients-ruby"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Skyfall",
    "grad": "linear-gradient(135deg,#647dee,#7f53ac)",
    "slug": "gradients-skyfall"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Mojito",
    "grad": "linear-gradient(135deg,#1d976c,#93f9b9)",
    "slug": "gradients-mojito"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Fuchsia",
    "grad": "linear-gradient(135deg,#c31432,#240b36)",
    "slug": "gradients-fuchsia"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Indigo Night",
    "grad": "linear-gradient(135deg,#1a2980,#26d0ce)",
    "slug": "gradients-indigo-night"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Honey",
    "grad": "linear-gradient(135deg,#f7971e,#ffd200)",
    "slug": "gradients-honey"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Velvet",
    "grad": "linear-gradient(135deg,#41295a,#2f0743)",
    "slug": "gradients-velvet"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Teal Love",
    "grad": "linear-gradient(135deg,#11998e,#38ef7d)",
    "slug": "gradients-teal-love"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Crimson",
    "grad": "linear-gradient(135deg,#642b73,#c6426e)",
    "slug": "gradients-crimson"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Glacier",
    "grad": "linear-gradient(135deg,#74ebd5,#acb6e5)",
    "slug": "gradients-glacier"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Sunburn",
    "grad": "linear-gradient(135deg,#fc4a1a,#f7b733)",
    "slug": "gradients-sunburn"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Orchid",
    "grad": "linear-gradient(135deg,#da22ff,#9733ee)",
    "slug": "gradients-orchid"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Lagoon",
    "grad": "linear-gradient(135deg,#43cea2,#185a9d)",
    "slug": "gradients-lagoon"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Dawn Sky",
    "grad": "linear-gradient(135deg,#fbc2eb,#a6c1ee)",
    "slug": "gradients-dawn-sky"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Magenta",
    "grad": "linear-gradient(135deg,#ee0979,#ff6a00)",
    "slug": "gradients-magenta"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Northern",
    "grad": "linear-gradient(135deg,#4facfe,#00f2fe)",
    "slug": "gradients-northern"
  },
  {
    "type": "gradient",
    "cat": "gradients",
    "name": "Rosewater",
    "grad": "linear-gradient(135deg,#e55d87,#5fc3e4)",
    "slug": "gradients-rosewater"
  },
  {
    "type": "comp",
    "cat": "buttons",
    "name": "Icon Pill",
    "html": "<button class=\"b\">★ Favorite</button>",
    "css": ".b{font:600 15px Outfit,system-ui;padding:12px 24px;border:none;border-radius:99px;color:#fff;background:linear-gradient(120deg,#7c3aed,#ec4899);cursor:pointer;transition:.2s}.b:hover{filter:brightness(1.12)}",
    "slug": "buttons-icon-pill"
  },
  {
    "type": "comp",
    "cat": "badges",
    "name": "Notify Count",
    "html": "<span class=\"bg\">9+</span>",
    "css": ".bg{font:700 12px Outfit,system-ui;min-width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;padding:0 7px;border-radius:99px;background:#ef4444;color:#fff;box-shadow:0 0 0 3px rgba(239,68,68,.25)}",
    "js": null,
    "bg": "#141021",
    "slug": "badges-notify-count"
  },
  {
    "type": "comp",
    "cat": "loaders",
    "name": "Orbit",
    "html": "<div class=\"ld\"></div>",
    "css": ".ld{width:42px;height:42px;border-radius:50%;border:3px solid rgba(168,85,247,.18);position:relative;animation:sp 1.4s linear infinite}.ld::after{content:\"\";position:absolute;top:-3px;left:50%;width:9px;height:9px;margin-left:-4px;border-radius:50%;background:#ec4899}@keyframes sp{to{transform:rotate(360deg)}}",
    "slug": "loaders-orbit"
  },
  {
    "type": "comp",
    "cat": "loaders",
    "name": "Square Flip",
    "html": "<div class=\"ld\"></div>",
    "css": ".ld{width:34px;height:34px;background:linear-gradient(120deg,#a855f7,#ec4899);border-radius:7px;animation:fp 1.2s ease infinite}@keyframes fp{0%{transform:rotate(0)}50%{transform:rotate(180deg) scale(.7)}100%{transform:rotate(360deg)}}",
    "slug": "loaders-square-flip"
  },
  {
    "type": "comp",
    "cat": "skeletons",
    "name": "Card",
    "html": "<div class=\"sk\"><div class=\"im\"></div><div class=\"ln w80\"></div><div class=\"ln w60\"></div></div>",
    "css": ".sk{width:180px;padding:16px;border-radius:16px;background:#15111f;border:1px solid #241d38}.sk .im{height:78px;border-radius:10px;margin-bottom:12px}.sk .ln{height:11px;border-radius:6px;margin-top:9px}.sk .w80{width:80%}.sk .w60{width:60%}.sk .im,.sk .ln{background:linear-gradient(100deg,#1d1730 30%,#2c2342 50%,#1d1730 70%);background-size:220% 100%;animation:s 1.4s linear infinite}@keyframes s{to{background-position:-220% 0}}",
    "js": null,
    "bg": "#141021",
    "slug": "skeletons-card"
  },
  {
    "type": "comp",
    "cat": "skeletons",
    "name": "Text Lines",
    "html": "<div class=\"sk\"><div class=\"ln\"></div><div class=\"ln\"></div><div class=\"ln w50\"></div></div>",
    "css": ".sk{width:200px}.sk .ln{height:13px;border-radius:6px;margin:11px 0;background:linear-gradient(100deg,#1d1730 30%,#2c2342 50%,#1d1730 70%);background-size:220% 100%;animation:s 1.4s linear infinite}.sk .w50{width:50%}@keyframes s{to{background-position:-220% 0}}",
    "js": null,
    "bg": "#141021",
    "slug": "skeletons-text-lines"
  },
  {
    "type": "comp",
    "cat": "skeletons",
    "name": "Profile",
    "html": "<div class=\"sk\"><div class=\"av\"></div><div class=\"col\"><div class=\"ln w90\"></div><div class=\"ln w60\"></div></div></div>",
    "css": ".sk{display:flex;align-items:center;gap:14px;width:210px}.sk .av{width:48px;height:48px;border-radius:50%;flex:none}.sk .col{flex:1}.sk .ln{height:11px;border-radius:6px;margin:7px 0}.sk .w90{width:90%}.sk .w60{width:60%}.sk .av,.sk .ln{background:linear-gradient(100deg,#1d1730 30%,#2c2342 50%,#1d1730 70%);background-size:220% 100%;animation:s 1.4s linear infinite}@keyframes s{to{background-position:-220% 0}}",
    "js": null,
    "bg": "#141021",
    "slug": "skeletons-profile"
  },
  {
    "type": "comp",
    "cat": "skeletons",
    "name": "Image Block",
    "html": "<div class=\"sk\"></div>",
    "css": ".sk{width:150px;height:100px;border-radius:14px;background:linear-gradient(100deg,#1d1730 30%,#2c2342 50%,#1d1730 70%);background-size:220% 100%;animation:s 1.4s linear infinite}@keyframes s{to{background-position:-220% 0}}",
    "js": null,
    "bg": "#141021",
    "slug": "skeletons-image-block"
  },
  {
    "type": "comp",
    "cat": "buttons",
    "name": "Fill Up",
    "html": "<button class=\"b\">Subscribe</button>",
    "css": ".b{position:relative;font:600 16px Outfit,system-ui;padding:13px 30px;border:1.5px solid #a855f7;border-radius:12px;color:#fff;background:transparent;overflow:hidden;cursor:pointer;z-index:0}.b::before{content:\"\";position:absolute;inset:0;background:linear-gradient(120deg,#a855f7,#ec4899);transform:translateY(100%);transition:.3s;z-index:-1}.b:hover::before{transform:translateY(0)}",
    "slug": "buttons-fill-up"
  },
  {
    "type": "comp",
    "cat": "buttons",
    "name": "Soft 3D",
    "html": "<button class=\"b\">Confirm</button>",
    "css": ".b{font:700 16px Outfit,system-ui;padding:14px 30px;border:none;border-radius:14px;color:#fff;background:#a855f7;box-shadow:0 4px 0 #7c3aed,0 8px 18px rgba(124,58,237,.4);cursor:pointer;transition:.12s}.b:active{transform:translateY(3px);box-shadow:0 1px 0 #7c3aed}",
    "slug": "buttons-soft-3d"
  },
  {
    "type": "comp",
    "cat": "buttons",
    "name": "Glow Ring",
    "html": "<button class=\"b\">Connect</button>",
    "css": ".b{font:600 16px Outfit,system-ui;padding:13px 30px;border:none;border-radius:99px;color:#fff;background:#15111f;outline:2px solid rgba(168,85,247,.5);outline-offset:2px;cursor:pointer;transition:.25s}.b:hover{outline-color:#ec4899;box-shadow:0 0 22px rgba(168,85,247,.55)}",
    "slug": "buttons-glow-ring"
  },
  {
    "type": "comp",
    "cat": "toggles",
    "name": "Square Snap",
    "html": "<label class=\"s\"><input type=\"checkbox\" checked><span></span></label>",
    "css": ".s input{display:none}.s span{display:block;width:58px;height:30px;background:#2a2440;border-radius:8px;position:relative;cursor:pointer;transition:.3s}.s span::after{content:\"\";position:absolute;top:3px;left:3px;width:24px;height:24px;background:#fff;border-radius:6px;transition:.3s}.s input:checked+span{background:linear-gradient(120deg,#a855f7,#ec4899)}.s input:checked+span::after{transform:translateX(28px)}",
    "slug": "toggles-square-snap"
  },
  {
    "type": "comp",
    "cat": "toggles",
    "name": "Yes / No",
    "html": "<label class=\"s\"><input type=\"checkbox\"><span></span></label>",
    "css": ".s input{display:none}.s span{display:flex;align-items:center;width:84px;height:34px;border-radius:99px;background:#2a2440;position:relative;cursor:pointer;transition:.3s;font:700 11px Outfit,system-ui;color:#fff}.s span::before{content:\"NO\";position:absolute;right:14px}.s span::after{content:\"\";position:absolute;top:3px;left:3px;width:28px;height:28px;background:#fff;border-radius:50%;transition:.3s}.s input:checked+span{background:#16a34a}.s input:checked+span::before{content:\"YES\";left:14px;right:auto}.s input:checked+span::after{transform:translateX(50px)}",
    "slug": "toggles-yes-no"
  },
  {
    "type": "comp",
    "cat": "inputs",
    "name": "Floating Label",
    "html": "<div class=\"fl\"><input id=\"fi\" placeholder=\" \"><label for=\"fi\">Email address</label></div>",
    "css": ".fl{position:relative;width:230px}.fl input{width:100%;font:500 15px Outfit,system-ui;padding:16px 14px 8px;background:#15111f;border:1.5px solid #2a2440;border-radius:12px;color:#fff;outline:none}.fl label{position:absolute;left:15px;top:14px;color:#6b6486;font:500 14px Outfit,system-ui;pointer-events:none;transition:.18s}.fl input:focus+label,.fl input:not(:placeholder-shown)+label{top:6px;font-size:10px;color:#a855f7}.fl input:focus{border-color:#a855f7}",
    "js": null,
    "bg": "#141021",
    "slug": "inputs-floating-label"
  },
  {
    "type": "comp",
    "cat": "inputs",
    "name": "OTP Boxes",
    "html": "<div class=\"otp\"><input maxlength=1 value=4><input maxlength=1 value=2><input maxlength=1><input maxlength=1></div>",
    "css": ".otp{display:flex;gap:10px}.otp input{width:46px;height:54px;text-align:center;font:700 22px Outfit,system-ui;background:#15111f;border:1.5px solid #2a2440;border-radius:12px;color:#fff;outline:none;transition:.2s}.otp input:focus{border-color:#a855f7;box-shadow:0 0 0 4px rgba(168,85,247,.18)}",
    "js": null,
    "bg": "#141021",
    "slug": "inputs-otp-boxes"
  },
  {
    "type": "comp",
    "cat": "badges",
    "name": "Soft",
    "html": "<span class=\"bg\">Beta</span>",
    "css": ".bg{font:600 12px Outfit,system-ui;padding:5px 13px;border-radius:8px;background:rgba(52,211,153,.14);color:#34d399}",
    "js": null,
    "bg": "#141021",
    "slug": "badges-soft"
  },
  {
    "type": "comp",
    "cat": "badges",
    "name": "Icon",
    "html": "<span class=\"bg\">✓ Verified</span>",
    "css": ".bg{font:600 12px Outfit,system-ui;display:inline-flex;gap:5px;padding:5px 13px;border-radius:999px;background:rgba(37,99,235,.16);color:#60a5fa}",
    "js": null,
    "bg": "#141021",
    "slug": "badges-icon"
  },
  {
    "type": "comp",
    "cat": "loaders",
    "name": "Wave",
    "html": "<div class=\"ld\"><i></i><i></i><i></i><i></i><i></i></div>",
    "css": ".ld{display:flex;gap:5px;align-items:center;height:40px}.ld i{width:6px;height:18px;border-radius:3px;background:#a855f7;animation:wv 1s ease infinite}.ld i:nth-child(2){animation-delay:.1s}.ld i:nth-child(3){animation-delay:.2s}.ld i:nth-child(4){animation-delay:.3s}.ld i:nth-child(5){animation-delay:.4s}@keyframes wv{0%,100%{height:14px}50%{height:36px}}",
    "slug": "loaders-wave"
  },
  {
    "type": "comp",
    "cat": "loaders",
    "name": "Comet",
    "html": "<div class=\"ld\"></div>",
    "css": ".ld{width:44px;height:44px;border-radius:50%;background:conic-gradient(from 0deg,transparent,#a855f7);-webkit-mask:radial-gradient(circle 16px,transparent 98%,#000);mask:radial-gradient(circle 16px,transparent 98%,#000);animation:sp .9s linear infinite}@keyframes sp{to{transform:rotate(360deg)}}",
    "slug": "loaders-comet"
  },
  {
    "type": "comp",
    "cat": "textfx",
    "name": "Gradient Shadow",
    "html": "<div class=\"t\">Bold</div>",
    "css": ".t{font:800 46px Outfit,system-ui;color:#fff;text-shadow:3px 3px 0 #a855f7,6px 6px 0 rgba(236,72,153,.5)}",
    "slug": "textfx-gradient-shadow"
  },
  {
    "type": "comp",
    "cat": "textfx",
    "name": "Fade Pulse",
    "html": "<div class=\"t\">Rise</div>",
    "css": ".t{font:800 46px Outfit,system-ui;background:linear-gradient(120deg,#a855f7,#ec4899);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:fu 1.6s ease infinite alternate}@keyframes fu{from{transform:translateY(6px);opacity:.6}to{transform:translateY(-6px);opacity:1}}",
    "slug": "textfx-fade-pulse"
  },
  {
    "type": "comp",
    "cat": "cards",
    "name": "Pricing",
    "html": "<div class=\"pc\"><div class=\"pt\">Pro</div><div class=\"pp\">$12<span>/mo</span></div><div class=\"pbtn\">Get started</div></div>",
    "css": ".pc{width:160px;padding:22px;border-radius:18px;background:#15111f;border:1px solid #2a2440;text-align:center}.pc .pt{font:600 13px Outfit,system-ui;color:#a855f7;text-transform:uppercase;letter-spacing:.08em}.pc .pp{font:800 34px Outfit,system-ui;color:#fff;margin:8px 0 14px}.pc .pp span{font-size:13px;color:#857f9c;font-weight:500}.pc .pbtn{font:600 13px Outfit,system-ui;color:#fff;background:linear-gradient(120deg,#a855f7,#ec4899);padding:10px;border-radius:10px}",
    "js": null,
    "bg": "#141021",
    "slug": "cards-pricing"
  },
  {
    "type": "comp",
    "cat": "cards",
    "name": "Glow Border",
    "html": "<div class=\"gc\">Featured</div>",
    "css": ".gc{width:160px;height:100px;border-radius:18px;background:#15111f;display:flex;align-items:center;justify-content:center;color:#fff;font:600 16px Outfit,system-ui;box-shadow:0 0 0 1px rgba(168,85,247,.4),0 0 30px rgba(168,85,247,.3);animation:gw 2.5s ease infinite}@keyframes gw{50%{box-shadow:0 0 0 1px rgba(236,72,153,.6),0 0 40px rgba(236,72,153,.45)}}",
    "js": null,
    "bg": "#141021",
    "slug": "cards-glow-border"
  },
  {
    "type": "comp",
    "cat": "backgrounds",
    "name": "Noise Glow",
    "html": "<div class=\"bg\"></div>",
    "css": ".bg{width:100%;height:100%;background:radial-gradient(circle at 30% 30%,#3d1a5e,transparent 50%),radial-gradient(circle at 70% 70%,#5e1a48,transparent 50%),#0d0a17}",
    "slug": "backgrounds-noise-glow"
  },
  {
    "type": "comp",
    "cat": "backgrounds",
    "name": "Diagonal",
    "html": "<div class=\"bg\"></div>",
    "css": ".bg{width:100%;height:100%;background:linear-gradient(135deg,#0d0a17 25%,#1a1330 25% 50%,#0d0a17 50% 75%,#1a1330 75%);background-size:40px 40px}",
    "slug": "backgrounds-diagonal"
  },
  {
    "type": "comp",
    "cat": "cursors",
    "name": "Dot Trail",
    "html": "<div class=\"stage\">move your mouse</div>",
    "css": ".stage{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#4a4360;font:600 14px Outfit,system-ui;cursor:crosshair;overflow:hidden}.dt{position:absolute;width:8px;height:8px;border-radius:50%;background:#a855f7;pointer-events:none;transform:translate(-50%,-50%)}",
    "js": "addEventListener(\"mousemove\",e=>{var d=document.createElement(\"div\");d.className=\"dt\";d.style.left=e.clientX+\"px\";d.style.top=e.clientY+\"px\";document.body.appendChild(d);setTimeout(function(){d.style.transition=\"opacity .5s\";d.style.opacity=0;},10);setTimeout(function(){d.remove();},520);})",
    "bg": "#141021",
    "slug": "cursors-dot-trail"
  },
  {
    "type": "comp",
    "cat": "dividers",
    "name": "Gradient Line",
    "html": "<div class=\"dv\"></div>",
    "css": ".dv{width:240px;height:2px;background:linear-gradient(90deg,transparent,#a855f7,#ec4899,transparent)}",
    "slug": "dividers-gradient-line"
  },
  {
    "type": "comp",
    "cat": "dividers",
    "name": "Label",
    "html": "<div class=\"dv\"><span>OR</span></div>",
    "css": ".dv{display:flex;align-items:center;gap:14px;width:240px;color:#857f9c;font:600 12px Outfit,system-ui}.dv::before,.dv::after{content:\"\";flex:1;height:1px;background:#2a2440}",
    "slug": "dividers-label"
  },
  {
    "type": "comp",
    "cat": "dividers",
    "name": "Dots",
    "html": "<div class=\"dv\"><i></i><i></i><i></i></div>",
    "css": ".dv{display:flex;gap:10px}.dv i{width:7px;height:7px;border-radius:50%;background:#a855f7;opacity:.55}.dv i:nth-child(2){opacity:.8}.dv i:nth-child(3){opacity:1}",
    "slug": "dividers-dots"
  },
  {
    "type": "comp",
    "cat": "tooltips",
    "name": "On Top",
    "html": "<div class=\"tp\">Hover me<span>Nice tooltip ✨</span></div>",
    "css": ".tp{position:relative;font:600 15px Outfit,system-ui;color:#fff;background:#15111f;border:1px solid #2a2440;padding:11px 18px;border-radius:10px;cursor:pointer}.tp span{position:absolute;bottom:120%;left:50%;transform:translateX(-50%) translateY(6px);background:linear-gradient(120deg,#a855f7,#ec4899);color:#fff;font:600 12px Outfit,system-ui;padding:7px 12px;border-radius:8px;white-space:nowrap;opacity:0;pointer-events:none;transition:.2s}.tp:hover span{opacity:1;transform:translateX(-50%) translateY(0)}",
    "js": null,
    "bg": "#141021",
    "slug": "tooltips-on-top"
  },
  {
    "type": "comp",
    "cat": "tooltips",
    "name": "With Arrow",
    "html": "<div class=\"tp\">Info<span>With an arrow</span></div>",
    "css": ".tp{position:relative;font:600 15px Outfit,system-ui;color:#fff;background:#15111f;border:1px solid #2a2440;padding:11px 18px;border-radius:10px;cursor:pointer}.tp span{position:absolute;bottom:132%;left:50%;transform:translateX(-50%);background:#241d38;color:#fff;font:500 12px Outfit,system-ui;padding:8px 12px;border-radius:8px;white-space:nowrap;opacity:0;pointer-events:none;transition:.2s}.tp span::after{content:\"\";position:absolute;top:100%;left:50%;transform:translateX(-50%);border:6px solid transparent;border-top-color:#241d38}.tp:hover span{opacity:1}",
    "js": null,
    "bg": "#141021",
    "slug": "tooltips-with-arrow"
  },
  {
    "type": "comp",
    "cat": "avatars",
    "name": "Ring",
    "html": "<div class=\"av\">A</div>",
    "css": ".av{width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;font:700 24px Outfit,system-ui;color:#fff;background:#7c3aed;outline:2px solid #ec4899;outline-offset:3px}",
    "js": null,
    "bg": "#141021",
    "slug": "avatars-ring"
  },
  {
    "type": "comp",
    "cat": "avatars",
    "name": "Status",
    "html": "<div class=\"av\">M<i></i></div>",
    "css": ".av{position:relative;width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;font:700 24px Outfit,system-ui;color:#fff;background:linear-gradient(135deg,#a855f7,#ec4899)}.av i{position:absolute;bottom:2px;right:2px;width:14px;height:14px;border-radius:50%;background:#34d399;border:3px solid #141021}",
    "js": null,
    "bg": "#141021",
    "slug": "avatars-status"
  },
  {
    "type": "comp",
    "cat": "avatars",
    "name": "Stacked",
    "html": "<div class=\"stk\"><div>A</div><div>B</div><div>C</div></div>",
    "css": ".stk{display:flex}.stk div{width:50px;height:50px;border-radius:50%;display:flex;align-items:center;justify-content:center;font:700 18px Outfit,system-ui;color:#fff;border:3px solid #141021;margin-left:-14px}.stk div:first-child{margin-left:0;background:#7c3aed}.stk div:nth-child(2){background:#c43d8a}.stk div:nth-child(3){background:#0ea5e9}",
    "js": null,
    "bg": "#141021",
    "slug": "avatars-stacked"
  },
  {
    "type": "comp",
    "cat": "progress",
    "name": "Gradient Bar",
    "html": "<div class=\"pgb\"><i></i></div>",
    "css": ".pgb{width:220px;height:12px;border-radius:99px;background:#2a2440;overflow:hidden}.pgb i{display:block;width:68%;height:100%;border-radius:99px;background:linear-gradient(90deg,#a855f7,#ec4899)}",
    "slug": "progress-gradient-bar"
  },
  {
    "type": "comp",
    "cat": "progress",
    "name": "Striped",
    "html": "<div class=\"pgb\"><i></i></div>",
    "css": ".pgb{width:220px;height:14px;border-radius:99px;background:#2a2440;overflow:hidden}.pgb i{display:block;width:55%;height:100%;background:repeating-linear-gradient(45deg,#a855f7,#a855f7 10px,#7c3aed 10px,#7c3aed 20px);animation:mv 1s linear infinite}@keyframes mv{to{background-position:28px 0}}",
    "slug": "progress-striped"
  },
  {
    "type": "comp",
    "cat": "progress",
    "name": "Ring 75%",
    "html": "<div class=\"pgr\"></div>",
    "css": ".pgr{width:60px;height:60px;border-radius:50%;background:conic-gradient(#a855f7 75%,#2a2440 0)}",
    "slug": "progress-ring-75"
  },
  {
    "type": "comp",
    "cat": "alerts",
    "name": "Success",
    "html": "<div class=\"al\">✓ Changes saved successfully</div>",
    "css": ".al{font:600 14px Outfit,system-ui;color:#34d399;background:rgba(52,211,153,.1);border:1px solid rgba(52,211,153,.3);border-left:4px solid #34d399;padding:13px 18px;border-radius:10px}",
    "js": null,
    "bg": "#141021",
    "slug": "alerts-success"
  },
  {
    "type": "comp",
    "cat": "alerts",
    "name": "Gradient Banner",
    "html": "<div class=\"al\">🎉 You unlocked a new feature!</div>",
    "css": ".al{font:600 14px Outfit,system-ui;color:#fff;background:linear-gradient(120deg,#a855f7,#ec4899);padding:13px 20px;border-radius:12px}",
    "slug": "alerts-gradient-banner"
  },
  {
    "type": "comp",
    "cat": "alerts",
    "name": "Error",
    "html": "<div class=\"al\">⚠ Something went wrong</div>",
    "css": ".al{font:600 14px Outfit,system-ui;color:#f87171;background:rgba(248,113,113,.1);border:1px solid rgba(248,113,113,.3);border-left:4px solid #f87171;padding:13px 18px;border-radius:10px}",
    "js": null,
    "bg": "#141021",
    "slug": "alerts-error"
  },
  {
    "type": "comp",
    "cat": "buttons",
    "name": "Solid",
    "html": "<button class=\"b\">Button</button>",
    "css": ".b{font:600 16px Outfit,system-ui;padding:13px 30px;border:none;border-radius:12px;color:#fff;background:linear-gradient(120deg,#a855f7,#7c3aed);cursor:pointer;transition:.2s}.b:hover{transform:translateY(-2px);filter:brightness(1.1)}",
    "js": null,
    "bg": null,
    "slug": "buttons-solid"
  },
  {
    "type": "comp",
    "cat": "buttons",
    "name": "Outline",
    "html": "<button class=\"b\">Button</button>",
    "css": ".b{font:600 16px Outfit,system-ui;padding:13px 30px;background:transparent;color:#ec4899;border:1.5px solid #ec4899;border-radius:12px;cursor:pointer;transition:.2s}.b:hover{background:#ec4899;color:#fff}",
    "js": null,
    "bg": null,
    "slug": "buttons-outline"
  },
  {
    "type": "comp",
    "cat": "buttons",
    "name": "3D",
    "html": "<button class=\"b\">Button</button>",
    "css": ".b{font:700 16px Outfit,system-ui;padding:14px 30px;border:none;border-radius:13px;color:#fff;background:#06b6d4;box-shadow:0 5px 0 #0e7490;cursor:pointer;transition:.1s}.b:active{transform:translateY(4px);box-shadow:0 1px 0 #0e7490}",
    "js": null,
    "bg": null,
    "slug": "buttons-3d"
  },
  {
    "type": "comp",
    "cat": "buttons",
    "name": "Pill",
    "html": "<button class=\"b\">Button</button>",
    "css": ".b{font:600 16px Outfit,system-ui;padding:13px 32px;border:none;border-radius:99px;color:#fff;background:linear-gradient(120deg,#84cc16,#4d7c0f);cursor:pointer;transition:.2s}.b:hover{transform:scale(1.05)}",
    "js": null,
    "bg": null,
    "slug": "buttons-pill"
  },
  {
    "type": "comp",
    "cat": "toggles",
    "name": "Switch",
    "html": "<label class=\"s\"><input type=\"checkbox\" checked><span></span></label>",
    "css": ".s input{display:none}.s span{display:block;width:58px;height:30px;background:#2a2440;border-radius:99px;position:relative;cursor:pointer;transition:.3s}.s span::after{content:\"\";position:absolute;top:3px;left:3px;width:24px;height:24px;background:#fff;border-radius:50%;transition:.3s}.s input:checked+span{background:#a855f7}.s input:checked+span::after{transform:translateX(28px)}",
    "js": null,
    "bg": "#141021",
    "slug": "toggles-switch"
  },
  {
    "type": "comp",
    "cat": "toggles",
    "name": "Square",
    "html": "<label class=\"s\"><input type=\"checkbox\" checked><span></span></label>",
    "css": ".s input{display:none}.s span{display:block;width:56px;height:28px;background:#2a2440;border-radius:7px;position:relative;cursor:pointer;transition:.3s}.s span::after{content:\"\";position:absolute;top:3px;left:3px;width:22px;height:22px;background:#fff;border-radius:5px;transition:.3s}.s input:checked+span{background:linear-gradient(120deg,#ec4899,#be185d)}.s input:checked+span::after{transform:translateX(28px)}",
    "js": null,
    "bg": "#141021",
    "slug": "toggles-square"
  },
  {
    "type": "comp",
    "cat": "toggles",
    "name": "Check",
    "html": "<label class=\"s\"><input type=\"checkbox\" checked><span></span></label>",
    "css": ".s input{display:none}.s span{width:30px;height:30px;border-radius:9px;border:2px solid #3a3450;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:.2s}.s span::after{content:\"✓\";color:#fff;font-weight:800;opacity:0;transform:scale(.4);transition:.2s}.s input:checked+span{background:#3b82f6;border-color:#3b82f6}.s input:checked+span::after{opacity:1;transform:scale(1)}",
    "js": null,
    "bg": "#141021",
    "slug": "toggles-check"
  },
  {
    "type": "comp",
    "cat": "toggles",
    "name": "Glow",
    "html": "<label class=\"s\"><input type=\"checkbox\" checked><span></span></label>",
    "css": ".s input{display:none}.s span{display:block;width:58px;height:30px;background:#2a2440;border-radius:99px;position:relative;cursor:pointer;transition:.3s}.s span::after{content:\"\";position:absolute;top:3px;left:3px;width:24px;height:24px;background:#fff;border-radius:50%;transition:.3s}.s input:checked+span{background:#06b6d4;box-shadow:0 0 16px #06b6d4}.s input:checked+span::after{transform:translateX(28px)}",
    "js": null,
    "bg": "#141021",
    "slug": "toggles-glow"
  },
  {
    "type": "comp",
    "cat": "toggles",
    "name": "Large",
    "html": "<label class=\"s\"><input type=\"checkbox\" checked><span></span></label>",
    "css": ".s input{display:none}.s span{display:block;width:74px;height:38px;background:#2a2440;border-radius:99px;position:relative;cursor:pointer;transition:.3s}.s span::after{content:\"\";position:absolute;top:4px;left:4px;width:30px;height:30px;background:#fff;border-radius:50%;transition:.3s}.s input:checked+span{background:linear-gradient(120deg,#10b981,#047857)}.s input:checked+span::after{transform:translateX(36px)}",
    "js": null,
    "bg": "#141021",
    "slug": "toggles-large"
  },
  {
    "type": "comp",
    "cat": "toggles",
    "name": "Ring",
    "html": "<label class=\"s\"><input type=\"checkbox\" checked><span></span></label>",
    "css": ".s input{display:none}.s span{display:block;width:58px;height:30px;background:transparent;border:2px solid #3a3450;border-radius:99px;position:relative;cursor:pointer;transition:.3s}.s span::after{content:\"\";position:absolute;top:3px;left:3px;width:20px;height:20px;background:#857f9c;border-radius:50%;transition:.3s}.s input:checked+span{border-color:#84cc16}.s input:checked+span::after{transform:translateX(30px);background:#84cc16}",
    "js": null,
    "bg": "#141021",
    "slug": "toggles-ring"
  },
  {
    "type": "comp",
    "cat": "inputs",
    "name": "Filled",
    "html": "<input class=\"i\" placeholder=\"Type here…\">",
    "css": ".i{font:500 15px Outfit,system-ui;padding:13px 16px;width:230px;background:#3b82f61a;border:1px solid #3b82f63a;border-radius:12px;color:#fff;outline:none;transition:.25s}.i::placeholder{color:#9a93b5}.i:focus{background:#3b82f624;border-color:#3b82f6}",
    "js": null,
    "bg": "#141021",
    "slug": "inputs-filled"
  },
  {
    "type": "comp",
    "cat": "inputs",
    "name": "Pill",
    "html": "<input class=\"i\" placeholder=\"Type here…\">",
    "css": ".i{font:500 15px Outfit,system-ui;padding:13px 20px;width:230px;background:#15111f;border:1.5px solid #2a2440;border-radius:99px;color:#fff;outline:none;transition:.25s}.i::placeholder{color:#6b6486}.i:focus{border-color:#06b6d4}",
    "js": null,
    "bg": "#141021",
    "slug": "inputs-pill"
  },
  {
    "type": "comp",
    "cat": "inputs",
    "name": "Search",
    "html": "<div class=\"sw\"><span>⌕</span><input placeholder=\"Search…\"></div>",
    "css": ".sw{display:flex;align-items:center;gap:8px;background:#15111f;border:1.5px solid #2a2440;border-radius:12px;padding:11px 14px;width:230px;transition:.25s}.sw span{color:#6b6486}.sw input{flex:1;background:none;border:none;outline:none;color:#fff;font:500 14px Outfit,system-ui}.sw:focus-within{border-color:#10b981}",
    "js": null,
    "bg": "#141021",
    "slug": "inputs-search"
  },
  {
    "type": "comp",
    "cat": "inputs",
    "name": "Floating",
    "html": "<div class=\"fl\"><input id=\"fz\" placeholder=\" \"><label for=\"fz\">Label</label></div>",
    "css": ".fl{position:relative;width:230px}.fl input{width:100%;font:500 15px Outfit,system-ui;padding:16px 14px 8px;background:#15111f;border:1.5px solid #2a2440;border-radius:12px;color:#fff;outline:none}.fl label{position:absolute;left:15px;top:14px;color:#6b6486;font:500 14px Outfit,system-ui;pointer-events:none;transition:.18s}.fl input:focus+label,.fl input:not(:placeholder-shown)+label{top:6px;font-size:10px;color:#84cc16}.fl input:focus{border-color:#84cc16}",
    "js": null,
    "bg": "#141021",
    "slug": "inputs-floating"
  },
  {
    "type": "comp",
    "cat": "badges",
    "name": "Solid",
    "html": "<span class=\"bg\">Badge</span>",
    "css": ".bg{font:600 12px Outfit,system-ui;padding:5px 13px;border-radius:8px;background:#ec4899;color:#fff}",
    "js": null,
    "bg": "#141021",
    "slug": "badges-solid"
  },
  {
    "type": "comp",
    "cat": "badges",
    "name": "Dot",
    "html": "<span class=\"bg\"><i></i>Status</span>",
    "css": ".bg{font:600 13px Outfit,system-ui;display:inline-flex;align-items:center;gap:7px;padding:6px 14px;border-radius:999px;background:#15111f;border:1px solid #2a2440;color:#e8e4f3}.bg i{width:8px;height:8px;border-radius:50%;background:#06b6d4;box-shadow:0 0 8px #06b6d4}",
    "js": null,
    "bg": "#141021",
    "slug": "badges-dot"
  },
  {
    "type": "comp",
    "cat": "badges",
    "name": "Gradient",
    "html": "<span class=\"bg\">PRO</span>",
    "css": ".bg{font:700 12px Outfit,system-ui;letter-spacing:.06em;padding:5px 13px;border-radius:8px;background:linear-gradient(120deg,#10b981,#047857);color:#fff}",
    "js": null,
    "bg": "#141021",
    "slug": "badges-gradient"
  },
  {
    "type": "comp",
    "cat": "badges",
    "name": "Count",
    "html": "<span class=\"bg\">9+</span>",
    "css": ".bg{font:700 12px Outfit,system-ui;min-width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;padding:0 7px;border-radius:99px;background:#84cc16;color:#fff;box-shadow:0 0 0 3px #84cc1640}",
    "js": null,
    "bg": "#141021",
    "slug": "badges-count"
  },
  {
    "type": "comp",
    "cat": "progress",
    "name": "Bar",
    "html": "<div class=\"pgb\"><i></i></div>",
    "css": ".pgb{width:220px;height:12px;border-radius:99px;background:#2a2440;overflow:hidden}.pgb i{display:block;width:68%;height:100%;border-radius:99px;background:linear-gradient(90deg,#a855f7,#7c3aed)}",
    "js": null,
    "bg": null,
    "slug": "progress-bar"
  },
  {
    "type": "comp",
    "cat": "progress",
    "name": "Thin",
    "html": "<div class=\"pgb\"><i></i></div>",
    "css": ".pgb{width:220px;height:6px;border-radius:99px;background:#2a2440;overflow:hidden}.pgb i{display:block;width:80%;height:100%;background:#3b82f6}",
    "js": null,
    "bg": null,
    "slug": "progress-thin"
  },
  {
    "type": "comp",
    "cat": "progress",
    "name": "Glow",
    "html": "<div class=\"pgb\"><i></i></div>",
    "css": ".pgb{width:220px;height:12px;border-radius:99px;background:#2a2440;overflow:hidden}.pgb i{display:block;width:60%;height:100%;border-radius:99px;background:#06b6d4;box-shadow:0 0 14px #06b6d4}",
    "js": null,
    "bg": null,
    "slug": "progress-glow"
  },
  {
    "type": "comp",
    "cat": "progress",
    "name": "Ring",
    "html": "<div class=\"pgr\"></div>",
    "css": ".pgr{width:60px;height:60px;border-radius:50%;background:conic-gradient(#10b981 70%,#2a2440 0)}",
    "js": null,
    "bg": null,
    "slug": "progress-ring"
  },
  {
    "type": "comp",
    "cat": "progress",
    "name": "Ring Glow",
    "html": "<div class=\"pgr\"></div>",
    "css": ".pgr{width:60px;height:60px;border-radius:50%;background:conic-gradient(#84cc16 60%,#2a2440 0);box-shadow:0 0 16px #84cc1666}",
    "js": null,
    "bg": null,
    "slug": "progress-ring-glow"
  },
  {
    "type": "comp",
    "cat": "alerts",
    "name": "Soft",
    "html": "<div class=\"al\">ℹ Here is some information</div>",
    "css": ".al{font:600 14px Outfit,system-ui;color:#a855f7;background:#a855f71a;border:1px solid #a855f73a;border-left:4px solid #a855f7;padding:13px 18px;border-radius:10px}",
    "js": null,
    "bg": "#141021",
    "slug": "alerts-soft"
  },
  {
    "type": "comp",
    "cat": "alerts",
    "name": "Banner",
    "html": "<div class=\"al\">🎉 You unlocked a new feature!</div>",
    "css": ".al{font:600 14px Outfit,system-ui;color:#fff;background:linear-gradient(120deg,#ec4899,#be185d);padding:13px 20px;border-radius:12px}",
    "js": null,
    "bg": null,
    "slug": "alerts-banner"
  },
  {
    "type": "comp",
    "cat": "alerts",
    "name": "Outline",
    "html": "<div class=\"al\">Please review this notice</div>",
    "css": ".al{font:600 14px Outfit,system-ui;color:#3b82f6;background:transparent;border:1.5px solid #3b82f6;padding:13px 18px;border-radius:10px}",
    "js": null,
    "bg": "#141021",
    "slug": "alerts-outline"
  },
  {
    "type": "comp",
    "cat": "alerts",
    "name": "Toast",
    "html": "<div class=\"al\"><b>New message</b><br>You have a notification</div>",
    "css": ".al{font:500 13px Outfit,system-ui;color:#e8e4f3;background:#15111f;border:1px solid #2a2440;border-left:4px solid #06b6d4;padding:13px 18px;border-radius:10px;box-shadow:0 12px 30px rgba(0,0,0,.4)}.al b{color:#06b6d4}",
    "js": null,
    "bg": "#141021",
    "slug": "alerts-toast"
  },
  {
    "type": "comp",
    "cat": "alerts",
    "name": "Filled",
    "html": "<div class=\"al\">✓ Saved successfully</div>",
    "css": ".al{font:600 14px Outfit,system-ui;color:#fff;background:#10b981;padding:13px 18px;border-radius:10px}",
    "js": null,
    "bg": null,
    "slug": "alerts-filled"
  },
  {
    "type": "comp",
    "cat": "alerts",
    "name": "Glow",
    "html": "<div class=\"al\">⚡ Action required</div>",
    "css": ".al{font:600 14px Outfit,system-ui;color:#84cc16;background:#84cc1614;border:1px solid #84cc16;padding:13px 18px;border-radius:10px;box-shadow:0 0 18px #84cc1640}",
    "js": null,
    "bg": "#141021",
    "slug": "alerts-glow"
  },
  {
    "type": "comp",
    "cat": "tooltips",
    "name": "Top",
    "html": "<div class=\"tp\">Hover me<span>Tooltip ✨</span></div>",
    "css": ".tp{position:relative;font:600 15px Outfit,system-ui;color:#fff;background:#15111f;border:1px solid #2a2440;padding:11px 18px;border-radius:10px;cursor:pointer}.tp span{position:absolute;bottom:120%;left:50%;transform:translateX(-50%) translateY(6px);background:#a855f7;color:#fff;font:600 12px Outfit,system-ui;padding:7px 12px;border-radius:8px;white-space:nowrap;opacity:0;pointer-events:none;transition:.2s}.tp:hover span{opacity:1;transform:translateX(-50%) translateY(0)}",
    "js": null,
    "bg": "#141021",
    "slug": "tooltips-top"
  },
  {
    "type": "comp",
    "cat": "tooltips",
    "name": "Gradient",
    "html": "<div class=\"tp\">Hover me<span>Tooltip ✨</span></div>",
    "css": ".tp{position:relative;font:600 15px Outfit,system-ui;color:#fff;background:#15111f;border:1px solid #2a2440;padding:11px 18px;border-radius:10px;cursor:pointer}.tp span{position:absolute;bottom:120%;left:50%;transform:translateX(-50%);background:linear-gradient(120deg,#ec4899,#be185d);color:#fff;font:600 12px Outfit,system-ui;padding:7px 12px;border-radius:8px;white-space:nowrap;opacity:0;pointer-events:none;transition:.2s}.tp:hover span{opacity:1}",
    "js": null,
    "bg": "#141021",
    "slug": "tooltips-gradient"
  },
  {
    "type": "comp",
    "cat": "tooltips",
    "name": "Arrow",
    "html": "<div class=\"tp\">Hover me<span>Tooltip</span></div>",
    "css": ".tp{position:relative;font:600 15px Outfit,system-ui;color:#fff;background:#15111f;border:1px solid #2a2440;padding:11px 18px;border-radius:10px;cursor:pointer}.tp span{position:absolute;bottom:132%;left:50%;transform:translateX(-50%);background:#1d4ed8;color:#fff;font:500 12px Outfit,system-ui;padding:8px 12px;border-radius:8px;white-space:nowrap;opacity:0;pointer-events:none;transition:.2s}.tp span::after{content:\"\";position:absolute;top:100%;left:50%;transform:translateX(-50%);border:6px solid transparent;border-top-color:#1d4ed8}.tp:hover span{opacity:1}",
    "js": null,
    "bg": "#141021",
    "slug": "tooltips-arrow"
  },
  {
    "type": "comp",
    "cat": "tooltips",
    "name": "Border",
    "html": "<div class=\"tp\">Hover me<span>Tooltip</span></div>",
    "css": ".tp{position:relative;font:600 15px Outfit,system-ui;color:#fff;background:#15111f;border:1px solid #2a2440;padding:11px 18px;border-radius:10px;cursor:pointer}.tp span{position:absolute;bottom:120%;left:50%;transform:translateX(-50%);background:#0d0a17;color:#06b6d4;border:1px solid #06b6d4;font:600 12px Outfit,system-ui;padding:7px 12px;border-radius:8px;white-space:nowrap;opacity:0;pointer-events:none;transition:.2s}.tp:hover span{opacity:1}",
    "js": null,
    "bg": "#141021",
    "slug": "tooltips-border"
  },
  {
    "type": "comp",
    "cat": "tooltips",
    "name": "Right",
    "html": "<div class=\"tp\">Hover me<span>Tooltip</span></div>",
    "css": ".tp{position:relative;font:600 15px Outfit,system-ui;color:#fff;background:#15111f;border:1px solid #2a2440;padding:11px 18px;border-radius:10px;cursor:pointer}.tp span{position:absolute;left:112%;top:50%;transform:translateY(-50%);background:#10b981;color:#fff;font:600 12px Outfit,system-ui;padding:7px 12px;border-radius:8px;white-space:nowrap;opacity:0;pointer-events:none;transition:.2s}.tp:hover span{opacity:1}",
    "js": null,
    "bg": "#141021",
    "slug": "tooltips-right"
  },
  {
    "type": "comp",
    "cat": "tooltips",
    "name": "Pill",
    "html": "<div class=\"tp\">Hover me<span>Tooltip</span></div>",
    "css": ".tp{position:relative;font:600 15px Outfit,system-ui;color:#fff;background:#15111f;border:1px solid #2a2440;padding:11px 18px;border-radius:10px;cursor:pointer}.tp span{position:absolute;bottom:120%;left:50%;transform:translateX(-50%);background:#84cc162a;color:#84cc16;font:600 12px Outfit,system-ui;padding:7px 14px;border-radius:99px;white-space:nowrap;opacity:0;pointer-events:none;transition:.2s}.tp:hover span{opacity:1}",
    "js": null,
    "bg": "#141021",
    "slug": "tooltips-pill"
  },
  {
    "type": "comp",
    "cat": "avatars",
    "name": "Solid",
    "html": "<div class=\"av\">A</div>",
    "css": ".av{width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;font:700 24px Outfit,system-ui;color:#fff;background:#a855f7}",
    "js": null,
    "bg": "#141021",
    "slug": "avatars-solid"
  },
  {
    "type": "comp",
    "cat": "avatars",
    "name": "Gradient",
    "html": "<div class=\"av\">A</div>",
    "css": ".av{width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;font:700 24px Outfit,system-ui;color:#fff;background:linear-gradient(135deg,#ec4899,#be185d)}",
    "js": null,
    "bg": "#141021",
    "slug": "avatars-gradient"
  },
  {
    "type": "comp",
    "cat": "avatars",
    "name": "Square",
    "html": "<div class=\"av\">A</div>",
    "css": ".av{width:60px;height:60px;border-radius:16px;display:flex;align-items:center;justify-content:center;font:700 24px Outfit,system-ui;color:#fff;background:linear-gradient(135deg,#10b981,#047857)}",
    "js": null,
    "bg": "#141021",
    "slug": "avatars-square"
  },
  {
    "type": "comp",
    "cat": "avatars",
    "name": "Glow",
    "html": "<div class=\"av\">A</div>",
    "css": ".av{width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;font:700 24px Outfit,system-ui;color:#fff;background:#84cc16;box-shadow:0 0 22px #84cc16}",
    "js": null,
    "bg": "#141021",
    "slug": "avatars-glow"
  },
  {
    "type": "comp",
    "cat": "dividers",
    "name": "Gradient",
    "html": "<div class=\"dv\"></div>",
    "css": ".dv{width:240px;height:2px;background:linear-gradient(90deg,transparent,#a855f7,#7c3aed,transparent)}",
    "js": null,
    "bg": null,
    "slug": "dividers-gradient"
  },
  {
    "type": "comp",
    "cat": "dividers",
    "name": "Solid",
    "html": "<div class=\"dv\"></div>",
    "css": ".dv{width:240px;height:2px;background:#ec4899}",
    "js": null,
    "bg": null,
    "slug": "dividers-solid"
  },
  {
    "type": "comp",
    "cat": "dividers",
    "name": "Glow",
    "html": "<div class=\"dv\"></div>",
    "css": ".dv{width:240px;height:2px;background:#10b981;box-shadow:0 0 10px #10b981}",
    "js": null,
    "bg": null,
    "slug": "dividers-glow"
  },
  {
    "type": "comp",
    "cat": "dividers",
    "name": "Dashed",
    "html": "<div class=\"dv\"></div>",
    "css": ".dv{width:240px;height:0;border-top:2px dashed #84cc16}",
    "js": null,
    "bg": null,
    "slug": "dividers-dashed"
  },
  {
    "type": "comp",
    "cat": "loaders",
    "name": "Dots",
    "html": "<div class=\"ld\"><i></i><i></i><i></i></div>",
    "css": ".ld{display:flex;gap:8px}.ld i{width:12px;height:12px;border-radius:50%;background:#3b82f6;animation:bn .6s ease infinite}.ld i:nth-child(2){animation-delay:.15s}.ld i:nth-child(3){animation-delay:.3s}@keyframes bn{0%,100%{transform:translateY(0);opacity:.5}50%{transform:translateY(-12px);opacity:1}}",
    "js": null,
    "bg": null,
    "slug": "loaders-dots"
  },
  {
    "type": "comp",
    "cat": "loaders",
    "name": "Pulse",
    "html": "<div class=\"ld\"></div>",
    "css": ".ld{width:36px;height:36px;border-radius:50%;background:#06b6d4;animation:pl 1.2s ease-out infinite}@keyframes pl{0%{box-shadow:0 0 0 0 #06b6d499}100%{box-shadow:0 0 0 24px #06b6d400}}",
    "js": null,
    "bg": null,
    "slug": "loaders-pulse"
  },
  {
    "type": "comp",
    "cat": "skeletons",
    "name": "Lines",
    "html": "<div class=\"sk\"><div class=\"ln\"></div><div class=\"ln\"></div><div class=\"ln w50\"></div></div>",
    "css": ".sk{width:200px}.sk .ln{height:13px;border-radius:6px;margin:11px 0;background:linear-gradient(100deg,#1d1730 30%,#ec489940 50%,#1d1730 70%);background-size:220% 100%;animation:s 1.4s linear infinite}.sk .w50{width:50%}@keyframes s{to{background-position:-220% 0}}",
    "js": null,
    "bg": "#141021",
    "slug": "skeletons-lines"
  },
  {
    "type": "comp",
    "cat": "skeletons",
    "name": "Image",
    "html": "<div class=\"sk\"></div>",
    "css": ".sk{width:150px;height:100px;border-radius:14px;background:linear-gradient(100deg,#1d1730 30%,#06b6d440 50%,#1d1730 70%);background-size:220% 100%;animation:s 1.4s linear infinite}@keyframes s{to{background-position:-220% 0}}",
    "js": null,
    "bg": "#141021",
    "slug": "skeletons-image"
  },
  {
    "type": "comp",
    "cat": "skeletons",
    "name": "Button",
    "html": "<div class=\"sk\"></div>",
    "css": ".sk{width:130px;height:44px;border-radius:12px;background:linear-gradient(100deg,#1d1730 30%,#10b98140 50%,#1d1730 70%);background-size:220% 100%;animation:s 1.4s linear infinite}@keyframes s{to{background-position:-220% 0}}",
    "js": null,
    "bg": "#141021",
    "slug": "skeletons-button"
  },
  {
    "type": "comp",
    "cat": "skeletons",
    "name": "Grid",
    "html": "<div class=\"sk\"><i></i><i></i><i></i><i></i></div>",
    "css": ".sk{display:grid;grid-template-columns:1fr 1fr;gap:10px;width:170px}.sk i{height:58px;border-radius:10px;background:linear-gradient(100deg,#1d1730 30%,#84cc1640 50%,#1d1730 70%);background-size:220% 100%;animation:s 1.4s linear infinite}@keyframes s{to{background-position:-220% 0}}",
    "js": null,
    "bg": "#141021",
    "slug": "skeletons-grid"
  },
  {
    "type": "comp",
    "cat": "textfx",
    "name": "Gradient",
    "html": "<div class=\"t\">Beautiful</div>",
    "css": ".t{font:800 44px Outfit,system-ui;background:linear-gradient(120deg,#a855f7,#7c3aed);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}",
    "js": null,
    "bg": null,
    "slug": "textfx-gradient"
  },
  {
    "type": "comp",
    "cat": "textfx",
    "name": "Neon",
    "html": "<div class=\"t\">NEON</div>",
    "css": ".t{font:800 44px Outfit,system-ui;color:#fff;text-shadow:0 0 6px #ec4899,0 0 16px #ec4899,0 0 34px #be185d}",
    "js": null,
    "bg": null,
    "slug": "textfx-neon"
  },
  {
    "type": "comp",
    "cat": "textfx",
    "name": "Shadow",
    "html": "<div class=\"t\">Bold</div>",
    "css": ".t{font:800 46px Outfit,system-ui;color:#fff;text-shadow:3px 3px 0 #06b6d4,6px 6px 0 #0e749099}",
    "js": null,
    "bg": null,
    "slug": "textfx-shadow"
  },
  {
    "type": "comp",
    "cat": "textfx",
    "name": "Underline",
    "html": "<div class=\"t\">Hover me</div>",
    "css": ".t{font:800 40px Outfit,system-ui;color:#fff;position:relative;cursor:pointer;display:inline-block}.t::after{content:\"\";position:absolute;left:0;bottom:-4px;width:100%;height:4px;background:linear-gradient(120deg,#84cc16,#4d7c0f);border-radius:4px;transform:scaleX(0);transform-origin:left;transition:.3s}.t:hover::after{transform:scaleX(1)}",
    "js": null,
    "bg": null,
    "slug": "textfx-underline"
  },
  {
    "type": "comp",
    "cat": "cards",
    "name": "Glow",
    "html": "<div class=\"gc\">Featured</div>",
    "css": ".gc{width:160px;height:100px;border-radius:18px;background:#15111f;display:flex;align-items:center;justify-content:center;color:#fff;font:600 16px Outfit,system-ui;box-shadow:0 0 0 1px #ec489966,0 0 30px #ec48994d}",
    "js": null,
    "bg": "#141021",
    "slug": "cards-glow"
  },
  {
    "type": "comp",
    "cat": "cards",
    "name": "Solid",
    "html": "<div class=\"sc2\">Card</div>",
    "css": ".sc2{width:160px;height:100px;border-radius:18px;background:linear-gradient(135deg,#3b82f6,#1d4ed8);display:flex;align-items:center;justify-content:center;color:#fff;font:700 17px Outfit,system-ui}",
    "js": null,
    "bg": "#141021",
    "slug": "cards-solid"
  },
  {
    "type": "comp",
    "cat": "cards",
    "name": "Spotlight",
    "html": "<div class=\"sp\">Hover me</div>",
    "css": ".sp{width:170px;height:110px;border-radius:18px;background:#15111f;border:1px solid #241d38;display:flex;align-items:center;justify-content:center;color:#cfc7e8;font:600 15px Outfit,system-ui;position:relative;overflow:hidden;cursor:pointer}.sp::before{content:\"\";position:absolute;inset:0;background:radial-gradient(160px circle at var(--x,50%) var(--y,50%),#06b6d459,transparent 60%);opacity:0;transition:.3s}.sp:hover::before{opacity:1}",
    "js": "var s=document.querySelector(\".sp\");s.addEventListener(\"mousemove\",function(e){var r=s.getBoundingClientRect();s.style.setProperty(\"--x\",(e.clientX-r.left)+\"px\");s.style.setProperty(\"--y\",(e.clientY-r.top)+\"px\")})",
    "bg": "#141021",
    "slug": "cards-spotlight"
  },
  {
    "type": "comp",
    "cat": "cards",
    "name": "Top Accent",
    "html": "<div class=\"ta\"><b>Title</b><br>Some description text here</div>",
    "css": ".ta{width:180px;padding:18px;border-radius:16px;background:#15111f;border:1px solid #241d38;border-top:3px solid #10b981;color:#857f9c;font:500 13px Outfit,system-ui}.ta b{color:#fff;font-size:16px}",
    "js": null,
    "bg": "#141021",
    "slug": "cards-top-accent"
  },
  {
    "type": "comp",
    "cat": "cards",
    "name": "Stat",
    "html": "<div class=\"stt\"><div class=\"n\">2.4k</div><div class=\"l\">Downloads</div></div>",
    "css": ".stt{width:160px;padding:22px;border-radius:18px;background:linear-gradient(160deg,#1a1330,#15111f);border:1px solid #2a2440}.stt .n{font:800 30px Outfit,system-ui;background:linear-gradient(120deg,#84cc16,#4d7c0f);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.stt .l{font:500 13px Outfit,system-ui;color:#857f9c;margin-top:4px}",
    "js": null,
    "bg": "#141021",
    "slug": "cards-stat"
  },
  {
    "type": "comp",
    "cat": "backgrounds",
    "name": "Lines",
    "html": "<div class=\"bg\"></div>",
    "css": ".bg{width:100%;height:100%;background:#0d0a17;background-image:linear-gradient(#06b6d422 1px,transparent 1px),linear-gradient(90deg,#06b6d422 1px,transparent 1px);background-size:28px 28px}",
    "js": null,
    "bg": null,
    "slug": "backgrounds-lines"
  },
  {
    "type": "comp",
    "cat": "backgrounds",
    "name": "Glow",
    "html": "<div class=\"bg\"></div>",
    "css": ".bg{width:100%;height:100%;background:radial-gradient(circle at 30% 30%,#047857,transparent 50%),radial-gradient(circle at 70% 70%,#10b98188,transparent 50%),#0d0a17}",
    "js": null,
    "bg": null,
    "slug": "backgrounds-glow"
  },
  {
    "type": "comp",
    "cat": "cursors",
    "name": "Ring",
    "html": "<div class=\"stage\">move your mouse<div class=\"ring\"></div></div>",
    "css": ".stage{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#4a4360;font:600 14px Outfit,system-ui;cursor:crosshair;overflow:hidden}.ring{position:absolute;width:40px;height:40px;border:2px solid #3b82f6;border-radius:50%;pointer-events:none;transform:translate(-50%,-50%)}",
    "js": "var r=document.querySelector(\".ring\"),x=0,y=0,rx=0,ry=0;addEventListener(\"mousemove\",function(e){x=e.clientX;y=e.clientY});(function l(){rx+=(x-rx)*.15;ry+=(y-ry)*.15;r.style.left=rx+\"px\";r.style.top=ry+\"px\";requestAnimationFrame(l)})()",
    "bg": "#141021",
    "slug": "cursors-ring"
  },
  {
    "type": "comp",
    "cat": "cursors",
    "name": "Crosshair",
    "html": "<div class=\"stage\">move your mouse<div class=\"vh\"></div><div class=\"hz\"></div></div>",
    "css": ".stage{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#4a4360;font:600 14px Outfit,system-ui;cursor:none;overflow:hidden}.vh{position:absolute;top:0;bottom:0;width:1px;background:#10b98199;pointer-events:none}.hz{position:absolute;left:0;right:0;height:1px;background:#10b98199;pointer-events:none}",
    "js": "var v=document.querySelector(\".vh\"),h=document.querySelector(\".hz\");addEventListener(\"mousemove\",function(e){v.style.left=e.clientX+\"px\";h.style.top=e.clientY+\"px\"})",
    "bg": "#141021",
    "slug": "cursors-crosshair"
  },
  {
    "type": "comp",
    "cat": "cursors",
    "name": "Magnetic",
    "html": "<div class=\"stage\"><div class=\"mg\">●</div></div>",
    "css": ".stage{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;cursor:crosshair;overflow:hidden}.mg{color:#84cc16;font-size:26px;transition:transform .15s}",
    "js": "var m=document.querySelector(\".mg\");addEventListener(\"mousemove\",function(e){var cx=innerWidth/2,cy=innerHeight/2;m.style.transform=\"translate(\"+((e.clientX-cx)*.3)+\"px,\"+((e.clientY-cy)*.3)+\"px)\"})",
    "bg": "#141021",
    "slug": "cursors-magnetic"
  },
  {
    "type": "comp",
    "cat": "buttons",
    "name": "Shine",
    "html": "<button class=\"b\">Download</button>",
    "css": ".b{position:relative;overflow:hidden;font:600 16px Outfit,system-ui;padding:14px 30px;border:none;border-radius:12px;color:#fff;background:#a855f7;cursor:pointer}.b::after{content:\"\";position:absolute;top:0;left:-120%;width:60%;height:100%;background:linear-gradient(120deg,transparent,rgba(255,255,255,.5),transparent);transform:skewX(-20deg);transition:.6s}.b:hover::after{left:140%}",
    "js": null,
    "bg": null,
    "slug": "buttons-shine"
  },
  {
    "type": "comp",
    "cat": "buttons",
    "name": "Outlined Fill",
    "html": "<button class=\"b\">Premium</button>",
    "css": ".b{font:600 16px Outfit,system-ui;padding:14px 30px;border:none;border-radius:12px;color:#fff;background:#15111f;position:relative;cursor:pointer}.b::before{content:\"\";position:absolute;inset:0;border-radius:12px;padding:1.5px;background:linear-gradient(120deg,#ec4899,#be185d);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude}",
    "js": null,
    "bg": "#141021",
    "slug": "buttons-outlined-fill"
  },
  {
    "type": "comp",
    "cat": "buttons",
    "name": "Brackets",
    "html": "<button class=\"b\">Explore</button>",
    "css": ".b{font:600 16px Outfit,system-ui;padding:13px 30px;background:transparent;color:#06b6d4;border:none;position:relative;cursor:pointer}.b::before,.b::after{content:\"\";position:absolute;width:12px;height:12px;border:2px solid #06b6d4;transition:.25s}.b::before{top:0;left:0;border-right:0;border-bottom:0}.b::after{bottom:0;right:0;border-left:0;border-top:0}.b:hover::before,.b:hover::after{width:calc(100% - 2px);height:calc(100% - 2px)}",
    "js": null,
    "bg": null,
    "slug": "buttons-brackets"
  },
  {
    "type": "comp",
    "cat": "buttons",
    "name": "Glass",
    "html": "<button class=\"b\">Glass</button>",
    "css": ".b{font:600 16px Outfit,system-ui;padding:13px 30px;border:1px solid #10b98155;border-radius:12px;color:#fff;background:#10b98122;backdrop-filter:blur(8px);cursor:pointer;transition:.2s}.b:hover{background:#10b9813a}",
    "js": null,
    "bg": null,
    "slug": "buttons-glass"
  },
  {
    "type": "comp",
    "cat": "loaders",
    "name": "Ring Dots",
    "html": "<div class=\"ld\"></div>",
    "css": ".ld{width:44px;height:44px;border-radius:50%;border:3px dotted #a855f7;animation:sp 2s linear infinite}@keyframes sp{to{transform:rotate(360deg)}}",
    "js": null,
    "bg": null,
    "slug": "loaders-ring-dots"
  },
  {
    "type": "comp",
    "cat": "loaders",
    "name": "Flip",
    "html": "<div class=\"ld\"></div>",
    "css": ".ld{width:36px;height:36px;background:linear-gradient(120deg,#ec4899,#be185d);border-radius:7px;animation:fp 1.2s ease infinite}@keyframes fp{0%{transform:rotate(0)}50%{transform:rotate(180deg) scale(.7)}100%{transform:rotate(360deg)}}",
    "js": null,
    "bg": null,
    "slug": "loaders-flip"
  },
  {
    "type": "comp",
    "cat": "loaders",
    "name": "Equalizer",
    "html": "<div class=\"ld\"><i></i><i></i><i></i><i></i><i></i></div>",
    "css": ".ld{display:flex;gap:5px;align-items:center;height:40px}.ld i{width:6px;height:18px;border-radius:3px;background:#06b6d4;animation:wv 1s ease infinite}.ld i:nth-child(2){animation-delay:.1s}.ld i:nth-child(3){animation-delay:.2s}.ld i:nth-child(4){animation-delay:.3s}.ld i:nth-child(5){animation-delay:.4s}@keyframes wv{0%,100%{height:14px}50%{height:36px}}",
    "js": null,
    "bg": null,
    "slug": "loaders-equalizer"
  },
  {
    "type": "comp",
    "cat": "loaders",
    "name": "Square Grid",
    "html": "<div class=\"ld\"><i></i><i></i><i></i><i></i></div>",
    "css": ".ld{display:grid;grid-template-columns:1fr 1fr;gap:5px}.ld i{width:14px;height:14px;border-radius:3px;background:#10b981;animation:gp 1.2s ease infinite}.ld i:nth-child(2){animation-delay:.15s}.ld i:nth-child(3){animation-delay:.45s}.ld i:nth-child(4){animation-delay:.3s}@keyframes gp{0%,100%{opacity:.3;transform:scale(.8)}50%{opacity:1;transform:scale(1)}}",
    "js": null,
    "bg": null,
    "slug": "loaders-square-grid"
  },
  {
    "type": "comp",
    "cat": "cards",
    "name": "Glass",
    "html": "<div class=\"gl\">Glass</div>",
    "css": ".gl{width:160px;height:100px;border-radius:18px;background:#a855f726;backdrop-filter:blur(12px);border:1px solid #a855f740;display:flex;align-items:center;justify-content:center;color:#fff;font:600 16px Outfit,system-ui;box-shadow:0 10px 40px rgba(0,0,0,.3)}",
    "js": null,
    "bg": "#141021",
    "slug": "cards-glass"
  },
  {
    "type": "comp",
    "cat": "cards",
    "name": "Image Overlay",
    "html": "<div class=\"io\"><span>Title</span></div>",
    "css": ".io{width:170px;height:110px;border-radius:16px;background:linear-gradient(160deg,#ec4899,#be185d);display:flex;align-items:flex-end;padding:14px;position:relative;overflow:hidden}.io::after{content:\"\";position:absolute;inset:0;background:linear-gradient(transparent,rgba(0,0,0,.6))}.io span{position:relative;color:#fff;font:700 16px Outfit,system-ui;z-index:1}",
    "js": null,
    "bg": "#141021",
    "slug": "cards-image-overlay"
  },
  {
    "type": "comp",
    "cat": "cards",
    "name": "Profile",
    "html": "<div class=\"pf\"><div class=\"a\"></div><b>Jordan</b><span>Designer</span></div>",
    "css": ".pf{width:150px;padding:20px;border-radius:18px;background:#15111f;border:1px solid #241d38;text-align:center}.pf .a{width:54px;height:54px;border-radius:50%;margin:0 auto 10px;background:linear-gradient(135deg,#3b82f6,#1d4ed8)}.pf b{display:block;color:#fff;font:700 15px Outfit,system-ui}.pf span{color:#857f9c;font:500 12px Outfit,system-ui}",
    "js": null,
    "bg": "#141021",
    "slug": "cards-profile"
  },
  {
    "type": "comp",
    "cat": "cards",
    "name": "Notification",
    "html": "<div class=\"nt\"><i></i><div><b>New follower</b><span>2 min ago</span></div></div>",
    "css": ".nt{display:flex;gap:12px;align-items:center;width:210px;padding:14px;border-radius:14px;background:#15111f;border:1px solid #241d38}.nt i{width:10px;height:10px;border-radius:50%;background:#06b6d4;box-shadow:0 0 10px #06b6d4;flex:none}.nt b{display:block;color:#fff;font:600 14px Outfit,system-ui}.nt span{color:#857f9c;font:500 12px Outfit,system-ui}",
    "js": null,
    "bg": "#141021",
    "slug": "cards-notification"
  },
  {
    "type": "comp",
    "cat": "cards",
    "name": "Tagged",
    "html": "<div class=\"bt\"><span class=\"tag\">NEW</span><b>Feature</b></div>",
    "css": ".bt{position:relative;width:160px;height:100px;border-radius:18px;background:#15111f;border:1px solid #241d38;display:flex;align-items:center;justify-content:center}.bt b{color:#fff;font:700 17px Outfit,system-ui}.bt .tag{position:absolute;top:12px;right:12px;font:700 10px Outfit,system-ui;color:#fff;background:#10b981;padding:3px 9px;border-radius:6px}",
    "js": null,
    "bg": "#141021",
    "slug": "cards-tagged"
  },
  {
    "type": "comp",
    "cat": "backgrounds",
    "name": "Concentric",
    "html": "<div class=\"bg\"></div>",
    "css": ".bg{width:100%;height:100%;background:repeating-radial-gradient(circle at 50% 50%,#0d0a17,#0d0a17 16px,#a855f724 16px,#a855f724 17px)}",
    "js": null,
    "bg": null,
    "slug": "backgrounds-concentric"
  },
  {
    "type": "comp",
    "cat": "backgrounds",
    "name": "Conic",
    "html": "<div class=\"bg\"></div>",
    "css": ".bg{width:100%;height:100%;background:conic-gradient(from 0deg at 50% 50%,#be185d,#ec4899,#be185d)}",
    "js": null,
    "bg": null,
    "slug": "backgrounds-conic"
  },
  {
    "type": "comp",
    "cat": "backgrounds",
    "name": "Checker",
    "html": "<div class=\"bg\"></div>",
    "css": ".bg{width:100%;height:100%;background:linear-gradient(135deg,#0d0a17 25%,#1d4ed840 25% 50%,#0d0a17 50% 75%,#1d4ed840 75%);background-size:40px 40px}",
    "js": null,
    "bg": null,
    "slug": "backgrounds-checker"
  },
  {
    "type": "comp",
    "cat": "backgrounds",
    "name": "Soft Blobs",
    "html": "<div class=\"bg\"></div>",
    "css": ".bg{width:100%;height:100%;background:radial-gradient(circle at 25% 30%,#06b6d4cc,transparent 45%),radial-gradient(circle at 75% 65%,#0e7490,transparent 45%),#0d0a17}",
    "js": null,
    "bg": null,
    "slug": "backgrounds-soft-blobs"
  },
  {
    "type": "comp",
    "cat": "backgrounds",
    "name": "Cross Grid",
    "html": "<div class=\"bg\"></div>",
    "css": ".bg{width:100%;height:100%;background:#0d0a17;background-image:linear-gradient(#10b98133 2px,transparent 2px),linear-gradient(90deg,#10b98133 2px,transparent 2px);background-size:40px 40px}",
    "js": null,
    "bg": null,
    "slug": "backgrounds-cross-grid"
  },
  {
    "type": "comp",
    "cat": "backgrounds",
    "name": "Beam",
    "html": "<div class=\"bg\"></div>",
    "css": ".bg{width:100%;height:100%;background:linear-gradient(105deg,#0d0a17 40%,#84cc1666 50%,#0d0a17 60%)}",
    "js": null,
    "bg": null,
    "slug": "backgrounds-beam"
  },
  {
    "type": "comp",
    "cat": "badges",
    "name": "Ribbon",
    "html": "<span class=\"bg\">SALE</span>",
    "css": ".bg{font:700 12px Outfit,system-ui;color:#fff;background:#a855f7;padding:6px 16px;position:relative}.bg::after{content:\"\";position:absolute;right:-9px;top:0;border:13px solid #a855f7;border-right-color:transparent}",
    "js": null,
    "bg": "#141021",
    "slug": "badges-ribbon"
  },
  {
    "type": "comp",
    "cat": "badges",
    "name": "Outline Glow",
    "html": "<span class=\"bg\">Active</span>",
    "css": ".bg{font:600 12px Outfit,system-ui;color:#ec4899;border:1px solid #ec4899;padding:5px 13px;border-radius:8px;box-shadow:0 0 12px #ec489955}",
    "js": null,
    "bg": "#141021",
    "slug": "badges-outline-glow"
  },
  {
    "type": "comp",
    "cat": "badges",
    "name": "Tag Square",
    "html": "<span class=\"bg\">v2.0</span>",
    "css": ".bg{font:600 12px Outfit,system-ui;color:#fff;background:#3b82f6;padding:5px 10px;border-radius:4px}",
    "js": null,
    "bg": "#141021",
    "slug": "badges-tag-square"
  },
  {
    "type": "comp",
    "cat": "badges",
    "name": "Split",
    "html": "<span class=\"bg\"><b>npm</b><i>1.2k</i></span>",
    "css": ".bg{display:inline-flex;font:600 12px Outfit,system-ui;border-radius:6px;overflow:hidden}.bg b{background:#2a2440;color:#fff;padding:5px 10px}.bg i{background:#06b6d4;color:#fff;padding:5px 10px;font-style:normal}",
    "js": null,
    "bg": "#141021",
    "slug": "badges-split"
  },
  {
    "type": "comp",
    "cat": "textfx",
    "name": "Extrude",
    "html": "<div class=\"t\">DEPTH</div>",
    "css": ".t{font:900 46px Outfit,system-ui;color:#fff;text-shadow:1px 1px #be185d,2px 2px #be185d,3px 3px #be185d,4px 4px #be185d,5px 5px #ec4899}",
    "js": null,
    "bg": null,
    "slug": "textfx-extrude"
  },
  {
    "type": "comp",
    "cat": "textfx",
    "name": "Wavy Flow",
    "html": "<div class=\"t\">wave</div>",
    "css": ".t{font:800 44px Outfit,system-ui;background:linear-gradient(90deg,#3b82f6,#1d4ed8,#3b82f6);background-size:200% auto;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:wv 3s linear infinite}@keyframes wv{to{background-position:200% center}}",
    "js": null,
    "bg": null,
    "slug": "textfx-wavy-flow"
  },
  {
    "type": "comp",
    "cat": "textfx",
    "name": "Stroke Fill",
    "html": "<div class=\"t\">HOVER</div>",
    "css": ".t{font:900 46px Outfit,system-ui;color:transparent;-webkit-text-stroke:1.5px #06b6d4;transition:.3s;cursor:pointer}.t:hover{color:#06b6d4;-webkit-text-stroke-color:#0e7490}",
    "js": null,
    "bg": null,
    "slug": "textfx-stroke-fill"
  },
  {
    "type": "comp",
    "cat": "toggles",
    "name": "Sun Moon",
    "html": "<label class=\"s\"><input type=\"checkbox\"><span></span></label>",
    "css": ".s input{display:none}.s span{display:block;width:64px;height:32px;border-radius:99px;background:#a855f7;position:relative;cursor:pointer;transition:.4s}.s span::after{content:\"☀\";position:absolute;top:2px;left:3px;width:28px;height:28px;background:#fde68a;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:15px;transition:.4s}.s input:checked+span{background:#1e1b4b}.s input:checked+span::after{content:\"🌙\";transform:translateX(31px);background:#cbd5e1}",
    "js": null,
    "bg": "#141021",
    "slug": "toggles-sun-moon-2"
  },
  {
    "type": "comp",
    "cat": "toggles",
    "name": "Power",
    "html": "<label class=\"s\"><input type=\"checkbox\" checked><span>⏻</span></label>",
    "css": ".s input{display:none}.s span{width:46px;height:46px;border-radius:50%;border:2px solid #3a3450;display:flex;align-items:center;justify-content:center;color:#857f9c;font-size:20px;cursor:pointer;transition:.3s}.s input:checked+span{border-color:#ec4899;color:#ec4899;box-shadow:0 0 16px #ec489966}",
    "js": null,
    "bg": "#141021",
    "slug": "toggles-power"
  },
  {
    "type": "comp",
    "cat": "toggles",
    "name": "Notch",
    "html": "<label class=\"s\"><input type=\"checkbox\" checked><span></span></label>",
    "css": ".s input{display:none}.s span{display:block;width:58px;height:28px;background:#2a2440;border-radius:99px;position:relative;cursor:pointer;transition:.3s}.s span::after{content:\"\";position:absolute;top:5px;left:6px;width:18px;height:18px;background:#857f9c;border-radius:50%;transition:.3s}.s input:checked+span{background:#3b82f633}.s input:checked+span::after{transform:translateX(30px);background:#3b82f6}",
    "js": null,
    "bg": "#141021",
    "slug": "toggles-notch"
  },
  {
    "type": "comp",
    "cat": "inputs",
    "name": "Icon Left",
    "html": "<div class=\"ic\"><span>✉</span><input placeholder=\"Email\"></div>",
    "css": ".ic{display:flex;align-items:center;gap:10px;background:#15111f;border:1.5px solid #2a2440;border-radius:12px;padding:12px 16px;width:230px;transition:.2s}.ic span{color:#a855f7}.ic input{flex:1;background:none;border:none;outline:none;color:#fff;font:500 14px Outfit,system-ui}.ic:focus-within{border-color:#a855f7}",
    "js": null,
    "bg": "#141021",
    "slug": "inputs-icon-left"
  },
  {
    "type": "comp",
    "cat": "inputs",
    "name": "Stepper",
    "html": "<div class=\"stp\"><button>−</button><span>3</span><button>+</button></div>",
    "css": ".stp{display:flex;align-items:center;background:#15111f;border:1.5px solid #2a2440;border-radius:12px;overflow:hidden}.stp button{width:42px;height:44px;background:none;border:none;color:#ec4899;font-size:18px;cursor:pointer}.stp button:hover{background:#ec489922}.stp span{width:46px;text-align:center;color:#fff;font:600 16px Outfit,system-ui}",
    "js": null,
    "bg": "#141021",
    "slug": "inputs-stepper"
  },
  {
    "type": "comp",
    "cat": "inputs",
    "name": "Toggle Chip",
    "html": "<div class=\"cg\"><b>Design</b><b class=\"on\">Code</b><b>Motion</b></div>",
    "css": ".cg{display:flex;gap:6px;background:#15111f;border:1px solid #2a2440;border-radius:99px;padding:5px}.cg b{font:600 13px Outfit,system-ui;color:#857f9c;padding:7px 14px;border-radius:99px;cursor:pointer}.cg b.on{background:#3b82f6;color:#fff}",
    "js": null,
    "bg": "#141021",
    "slug": "inputs-toggle-chip"
  },
  {
    "type": "comp",
    "cat": "progress",
    "name": "Segments",
    "html": "<div class=\"sg\"><i></i><i></i><i></i><i></i><i></i></div>",
    "css": ".sg{display:flex;gap:5px;width:220px}.sg i{flex:1;height:8px;border-radius:3px;background:#2a2440}.sg i:nth-child(-n+3){background:#a855f7}",
    "js": null,
    "bg": null,
    "slug": "progress-segments"
  },
  {
    "type": "comp",
    "cat": "progress",
    "name": "Labeled",
    "html": "<div class=\"lp\"><div class=\"bar\"><i></i></div><span>70%</span></div>",
    "css": ".lp{display:flex;align-items:center;gap:10px;width:230px}.lp .bar{flex:1;height:10px;border-radius:99px;background:#2a2440;overflow:hidden}.lp .bar i{display:block;width:70%;height:100%;background:linear-gradient(90deg,#ec4899,#be185d)}.lp span{color:#fff;font:600 13px Outfit,system-ui}",
    "js": null,
    "bg": null,
    "slug": "progress-labeled"
  },
  {
    "type": "comp",
    "cat": "progress",
    "name": "Dashed Track",
    "html": "<div class=\"pgb\"><i></i></div>",
    "css": ".pgb{width:220px;height:12px;border-radius:99px;background:repeating-linear-gradient(90deg,#2a2440,#2a2440 8px,transparent 8px,transparent 12px);overflow:hidden}.pgb i{display:block;width:60%;height:100%;border-radius:99px;background:#3b82f6}",
    "js": null,
    "bg": null,
    "slug": "progress-dashed-track"
  },
  {
    "type": "comp",
    "cat": "alerts",
    "name": "Icon Circle",
    "html": "<div class=\"al\"><i>✓</i><span>Profile updated</span></div>",
    "css": ".al{display:flex;align-items:center;gap:12px;font:600 14px Outfit,system-ui;color:#e8e4f3;background:#15111f;border:1px solid #2a2440;padding:13px 18px;border-radius:12px}.al i{width:26px;height:26px;border-radius:50%;background:#a855f7;color:#fff;display:flex;align-items:center;justify-content:center;font-style:normal;font-size:14px}",
    "js": null,
    "bg": "#141021",
    "slug": "alerts-icon-circle"
  },
  {
    "type": "comp",
    "cat": "alerts",
    "name": "With Close",
    "html": "<div class=\"al\"><span>Heads up — check this out</span><b>×</b></div>",
    "css": ".al{display:flex;align-items:center;gap:14px;font:600 14px Outfit,system-ui;color:#ec4899;background:#ec489914;border:1px solid #ec48993a;padding:13px 18px;border-radius:10px}.al b{margin-left:auto;cursor:pointer;opacity:.7}",
    "js": null,
    "bg": "#141021",
    "slug": "alerts-with-close"
  },
  {
    "type": "comp",
    "cat": "alerts",
    "name": "Tip",
    "html": "<div class=\"al\"><b>Tip</b><br>You can drag items to reorder</div>",
    "css": ".al{font:500 13px Outfit,system-ui;color:#cfc7e8;background:#15111f;border-left:4px solid #3b82f6;padding:13px 18px;border-radius:0 10px 10px 0}.al b{color:#3b82f6;font-weight:700}",
    "js": null,
    "bg": "#141021",
    "slug": "alerts-tip"
  },
  {
    "type": "comp",
    "cat": "tooltips",
    "name": "Bottom",
    "html": "<div class=\"tp\">Hover me<span>Below tip</span></div>",
    "css": ".tp{position:relative;font:600 15px Outfit,system-ui;color:#fff;background:#15111f;border:1px solid #2a2440;padding:11px 18px;border-radius:10px;cursor:pointer}.tp span{position:absolute;top:120%;left:50%;transform:translateX(-50%);background:#a855f7;color:#fff;font:600 12px Outfit,system-ui;padding:7px 12px;border-radius:8px;white-space:nowrap;opacity:0;pointer-events:none;transition:.2s}.tp:hover span{opacity:1}",
    "js": null,
    "bg": "#141021",
    "slug": "tooltips-bottom"
  },
  {
    "type": "comp",
    "cat": "tooltips",
    "name": "Glow",
    "html": "<div class=\"tp\">Hover me<span>Glowing</span></div>",
    "css": ".tp{position:relative;font:600 15px Outfit,system-ui;color:#fff;background:#15111f;border:1px solid #2a2440;padding:11px 18px;border-radius:10px;cursor:pointer}.tp span{position:absolute;bottom:120%;left:50%;transform:translateX(-50%);background:#ec4899;color:#fff;font:600 12px Outfit,system-ui;padding:7px 12px;border-radius:8px;white-space:nowrap;opacity:0;pointer-events:none;transition:.2s;box-shadow:0 0 16px #ec4899}.tp:hover span{opacity:1}",
    "js": null,
    "bg": "#141021",
    "slug": "tooltips-glow"
  },
  {
    "type": "comp",
    "cat": "tooltips",
    "name": "Status",
    "html": "<div class=\"tp\">Hover<span>● Online</span></div>",
    "css": ".tp{position:relative;font:600 15px Outfit,system-ui;color:#fff;background:#15111f;border:1px solid #2a2440;padding:11px 18px;border-radius:10px;cursor:pointer}.tp span{position:absolute;bottom:120%;left:50%;transform:translateX(-50%);background:#0d0a17;color:#3b82f6;border:1px solid #2a2440;font:600 12px Outfit,system-ui;padding:7px 12px;border-radius:8px;white-space:nowrap;opacity:0;pointer-events:none;transition:.2s}.tp:hover span{opacity:1}",
    "js": null,
    "bg": "#141021",
    "slug": "tooltips-status"
  },
  {
    "type": "comp",
    "cat": "avatars",
    "name": "Notification",
    "html": "<div class=\"av\">A<b>3</b></div>",
    "css": ".av{position:relative;width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;font:700 24px Outfit,system-ui;color:#fff;background:linear-gradient(135deg,#a855f7,#7c3aed)}.av b{position:absolute;top:-2px;right:-2px;min-width:20px;height:20px;border-radius:99px;background:#ef4444;color:#fff;font:700 11px Outfit,system-ui;display:flex;align-items:center;justify-content:center;border:2px solid #141021}",
    "js": null,
    "bg": "#141021",
    "slug": "avatars-notification"
  },
  {
    "type": "comp",
    "cat": "avatars",
    "name": "Verified",
    "html": "<div class=\"av\">A<b>✓</b></div>",
    "css": ".av{position:relative;width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;font:700 24px Outfit,system-ui;color:#fff;background:#ec4899}.av b{position:absolute;bottom:0;right:0;width:20px;height:20px;border-radius:50%;background:#be185d;color:#fff;font:700 11px Outfit,system-ui;display:flex;align-items:center;justify-content:center;border:2px solid #141021}",
    "js": null,
    "bg": "#141021",
    "slug": "avatars-verified"
  },
  {
    "type": "comp",
    "cat": "avatars",
    "name": "Hexagon",
    "html": "<div class=\"av\">A</div>",
    "css": ".av{width:60px;height:66px;display:flex;align-items:center;justify-content:center;font:700 22px Outfit,system-ui;color:#fff;background:linear-gradient(135deg,#3b82f6,#1d4ed8);clip-path:polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%)}",
    "js": null,
    "bg": "#141021",
    "slug": "avatars-hexagon"
  },
  {
    "type": "comp",
    "cat": "dividers",
    "name": "Icon Center",
    "html": "<div class=\"dv\"><span>✦</span></div>",
    "css": ".dv{display:flex;align-items:center;gap:14px;width:240px;color:#a855f7}.dv::before,.dv::after{content:\"\";flex:1;height:1px;background:#a855f755}",
    "js": null,
    "bg": null,
    "slug": "dividers-icon-center"
  },
  {
    "type": "comp",
    "cat": "dividers",
    "name": "Double",
    "html": "<div class=\"dv\"></div>",
    "css": ".dv{width:240px;height:6px;border-top:1px solid #ec4899;border-bottom:1px solid #ec4899}",
    "js": null,
    "bg": null,
    "slug": "dividers-double"
  },
  {
    "type": "comp",
    "cat": "dividers",
    "name": "Taper",
    "html": "<div class=\"dv\"></div>",
    "css": ".dv{width:240px;height:3px;border-radius:99px;background:linear-gradient(90deg,transparent,#3b82f6 30%,#3b82f6 70%,transparent)}",
    "js": null,
    "bg": null,
    "slug": "dividers-taper"
  },
  {
    "type": "comp",
    "cat": "buttons",
    "name": "FAB",
    "html": "<button class=\"b\">+</button>",
    "css": ".b{width:56px;height:56px;border-radius:50%;border:none;color:#fff;font-size:26px;background:linear-gradient(135deg,#a855f7,#7c3aed);box-shadow:0 10px 24px #a855f766;cursor:pointer;transition:.2s}.b:hover{transform:scale(1.08) rotate(90deg)}",
    "js": null,
    "bg": null,
    "slug": "buttons-fab"
  },
  {
    "type": "comp",
    "cat": "buttons",
    "name": "Loading",
    "html": "<button class=\"b\"><i></i>Loading</button>",
    "css": ".b{font:600 15px Outfit,system-ui;padding:13px 26px;border:none;border-radius:12px;color:#fff;background:#ec4899;cursor:pointer;display:inline-flex;align-items:center;gap:10px}.b i{width:15px;height:15px;border:2px solid rgba(255,255,255,.4);border-top-color:#fff;border-radius:50%;animation:sp .8s linear infinite}@keyframes sp{to{transform:rotate(360deg)}}",
    "js": null,
    "bg": null,
    "slug": "buttons-loading"
  },
  {
    "type": "comp",
    "cat": "buttons",
    "name": "Gradient Text",
    "html": "<button class=\"b\">Upgrade</button>",
    "css": ".b{font:800 17px Outfit,system-ui;padding:13px 28px;border:1.5px solid #3b82f6;border-radius:12px;background:transparent;cursor:pointer;background:linear-gradient(120deg,#3b82f6,#1d4ed8);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}",
    "js": null,
    "bg": "#141021",
    "slug": "buttons-gradient-text"
  },
  {
    "type": "comp",
    "cat": "buttons",
    "name": "Long Shadow",
    "html": "<button class=\"b\">Click</button>",
    "css": ".b{font:700 16px Outfit,system-ui;padding:13px 28px;border:none;border-radius:10px;color:#fff;background:#06b6d4;box-shadow:4px 4px 0 #0e7490,8px 8px 0 #0e749099;cursor:pointer;transition:.1s}.b:active{transform:translate(4px,4px);box-shadow:0 0 0 #0e7490}",
    "js": null,
    "bg": null,
    "slug": "buttons-long-shadow"
  },
  {
    "type": "comp",
    "cat": "buttons",
    "name": "Retro",
    "html": "<button class=\"b\">START</button>",
    "css": ".b{font:700 14px 'IBM Plex Mono',monospace;padding:13px 26px;border:3px solid #fff;color:#fff;background:#10b981;box-shadow:5px 5px 0 #000;cursor:pointer}.b:active{transform:translate(5px,5px);box-shadow:0 0 0 #000}",
    "js": null,
    "bg": null,
    "slug": "buttons-retro"
  },
  {
    "type": "comp",
    "cat": "buttons",
    "name": "Neumorphic",
    "html": "<button class=\"b\">Soft</button>",
    "css": ".b{font:600 16px Outfit,system-ui;padding:14px 30px;border:none;border-radius:14px;color:#84cc16;background:#15111f;box-shadow:6px 6px 12px #090611,-6px -6px 12px #211931;cursor:pointer}.b:active{box-shadow:inset 4px 4px 8px #090611,inset -4px -4px 8px #211931}",
    "js": null,
    "bg": "#141021",
    "slug": "buttons-neumorphic"
  },
  {
    "type": "comp",
    "cat": "buttons",
    "name": "Underline Reveal",
    "html": "<button class=\"b\">Read more</button>",
    "css": ".b{font:600 16px Outfit,system-ui;padding:10px 4px;border:none;background:none;color:#fff;cursor:pointer;position:relative}.b::after{content:\"\";position:absolute;left:0;bottom:0;width:0;height:2px;background:linear-gradient(90deg,#f59e0b,#b45309);transition:.3s}.b:hover::after{width:100%}",
    "js": null,
    "bg": "#141021",
    "slug": "buttons-underline-reveal"
  },
  {
    "type": "comp",
    "cat": "buttons",
    "name": "Glow Pulse",
    "html": "<button class=\"b\">Live</button>",
    "css": ".b{font:600 16px Outfit,system-ui;padding:13px 30px;border:none;border-radius:12px;color:#fff;background:#fb923c;cursor:pointer;animation:gp 1.8s ease infinite}@keyframes gp{0%,100%{box-shadow:0 0 0 0 #fb923c80}50%{box-shadow:0 0 0 12px #fb923c00}}",
    "js": null,
    "bg": null,
    "slug": "buttons-glow-pulse"
  },
  {
    "type": "comp",
    "cat": "loaders",
    "name": "Heartbeat",
    "html": "<div class=\"ld\">♥</div>",
    "css": ".ld{color:#a855f7;font-size:34px;animation:hb 1s ease infinite}@keyframes hb{0%,100%{transform:scale(1)}25%{transform:scale(1.25)}40%{transform:scale(1.05)}}",
    "js": null,
    "bg": null,
    "slug": "loaders-heartbeat"
  },
  {
    "type": "comp",
    "cat": "loaders",
    "name": "Clock",
    "html": "<div class=\"ld\"></div>",
    "css": ".ld{width:40px;height:40px;border:3px solid #ec4899;border-radius:50%;position:relative}.ld::after{content:\"\";position:absolute;top:7px;left:50%;width:2px;height:13px;background:#ec4899;transform-origin:bottom;animation:sp 1.2s linear infinite}@keyframes sp{to{transform:rotate(360deg)}}",
    "js": null,
    "bg": null,
    "slug": "loaders-clock"
  },
  {
    "type": "comp",
    "cat": "loaders",
    "name": "Typing",
    "html": "<div class=\"ld\"><i></i><i></i><i></i></div>",
    "css": ".ld{display:flex;gap:6px}.ld i{width:10px;height:10px;border-radius:50%;background:#3b82f6;animation:td 1.2s infinite}.ld i:nth-child(2){animation-delay:.2s}.ld i:nth-child(3){animation-delay:.4s}@keyframes td{0%,60%,100%{opacity:.3;transform:translateY(0)}30%{opacity:1;transform:translateY(-6px)}}",
    "js": null,
    "bg": null,
    "slug": "loaders-typing"
  },
  {
    "type": "comp",
    "cat": "loaders",
    "name": "Conic Spin",
    "html": "<div class=\"ld\"></div>",
    "css": ".ld{width:42px;height:42px;border-radius:50%;background:conic-gradient(#06b6d4,#0e7490,#06b6d4);-webkit-mask:radial-gradient(circle 15px,transparent 98%,#000);mask:radial-gradient(circle 15px,transparent 98%,#000);animation:sp 1s linear infinite}@keyframes sp{to{transform:rotate(360deg)}}",
    "js": null,
    "bg": null,
    "slug": "loaders-conic-spin"
  },
  {
    "type": "comp",
    "cat": "loaders",
    "name": "Bouncing Ball",
    "html": "<div class=\"ld\"></div>",
    "css": ".ld{width:18px;height:18px;border-radius:50%;background:#10b981;animation:bb .5s ease infinite alternate}@keyframes bb{from{transform:translateY(-13px)}to{transform:translateY(13px)}}",
    "js": null,
    "bg": null,
    "slug": "loaders-bouncing-ball"
  },
  {
    "type": "comp",
    "cat": "loaders",
    "name": "Pinwheel",
    "html": "<div class=\"ld\"></div>",
    "css": ".ld{width:40px;height:40px;border-radius:50%;border:4px dashed #84cc16;animation:sp 3s linear infinite}@keyframes sp{to{transform:rotate(360deg)}}",
    "js": null,
    "bg": null,
    "slug": "loaders-pinwheel"
  },
  {
    "type": "comp",
    "cat": "loaders",
    "name": "Echo Pulse",
    "html": "<div class=\"ld\"></div>",
    "css": ".ld{width:38px;height:38px;border-radius:50%;background:#f59e0b;position:relative}.ld::after{content:\"\";position:absolute;inset:0;border-radius:50%;background:#f59e0b;animation:ep 1.2s ease-out infinite}@keyframes ep{0%{transform:scale(1);opacity:.6}100%{transform:scale(2.2);opacity:0}}",
    "js": null,
    "bg": null,
    "slug": "loaders-echo-pulse"
  },
  {
    "type": "comp",
    "cat": "cards",
    "name": "Testimonial",
    "html": "<div class=\"tc\"><p>\"Best tool ever.\"</p><b>— Alex</b></div>",
    "css": ".tc{width:200px;padding:20px;border-radius:16px;background:#15111f;border:1px solid #241d38;border-left:3px solid #a855f7}.tc p{color:#cfc7e8;font:500 14px Outfit,system-ui;font-style:italic}.tc b{display:block;margin-top:10px;color:#a855f7;font:600 13px Outfit,system-ui}",
    "js": null,
    "bg": "#141021",
    "slug": "cards-testimonial"
  },
  {
    "type": "comp",
    "cat": "cards",
    "name": "Product",
    "html": "<div class=\"prc\"><div class=\"im\"></div><b>Sneakers</b><span>$89</span></div>",
    "css": ".prc{width:150px;padding:14px;border-radius:16px;background:#15111f;border:1px solid #241d38}.prc .im{height:80px;border-radius:10px;background:linear-gradient(135deg,#ec4899,#be185d);margin-bottom:10px}.prc b{display:block;color:#fff;font:600 14px Outfit,system-ui}.prc span{color:#ec4899;font:700 14px Outfit,system-ui}",
    "js": null,
    "bg": "#141021",
    "slug": "cards-product"
  },
  {
    "type": "comp",
    "cat": "cards",
    "name": "Flip 3D",
    "html": "<div class=\"fl\"><div class=\"fi\"><div class=\"fc f\">Hover</div><div class=\"fc bk\">✨ Surprise</div></div></div>",
    "css": ".fl{width:150px;height:100px;perspective:600px;cursor:pointer}.fi{position:relative;width:100%;height:100%;transition:transform .5s;transform-style:preserve-3d}.fl:hover .fi{transform:rotateY(180deg)}.fc{position:absolute;inset:0;backface-visibility:hidden;border-radius:16px;display:flex;align-items:center;justify-content:center;color:#fff;font:700 16px Outfit,system-ui}.fc.f{background:#15111f;border:1px solid #3b82f666}.fc.bk{background:linear-gradient(135deg,#3b82f6,#1d4ed8);transform:rotateY(180deg)}",
    "js": null,
    "bg": "#141021",
    "slug": "cards-flip-3d"
  },
  {
    "type": "comp",
    "cat": "cards",
    "name": "Hover Lift",
    "html": "<div class=\"gh\">Hover me</div>",
    "css": ".gh{width:160px;height:100px;border-radius:18px;background:#15111f;border:1px solid #241d38;display:flex;align-items:center;justify-content:center;color:#fff;font:600 16px Outfit,system-ui;transition:.3s;cursor:pointer}.gh:hover{transform:translateY(-7px);box-shadow:0 18px 40px #06b6d455;border-color:#06b6d4}",
    "js": null,
    "bg": "#141021",
    "slug": "cards-hover-lift"
  },
  {
    "type": "comp",
    "cat": "cards",
    "name": "Rotating Border",
    "html": "<div class=\"ab\"></div>",
    "css": ".ab{width:160px;height:100px;border-radius:18px;position:relative;overflow:hidden}.ab::before{content:\"\";position:absolute;inset:-60%;background:conic-gradient(#10b981,transparent 25%,#047857 50%,transparent 75%,#10b981);animation:sp 3s linear infinite}.ab::after{content:\"Card\";position:absolute;inset:2px;border-radius:16px;background:#15111f;display:flex;align-items:center;justify-content:center;color:#fff;font:600 16px Outfit,system-ui}@keyframes sp{to{transform:rotate(360deg)}}",
    "js": null,
    "bg": "#141021",
    "slug": "cards-rotating-border"
  },
  {
    "type": "comp",
    "cat": "cards",
    "name": "Banner",
    "html": "<div class=\"bn\"><div class=\"top\"></div><div class=\"bd\">Content here</div></div>",
    "css": ".bn{width:180px;border-radius:16px;overflow:hidden;background:#15111f;border:1px solid #241d38}.bn .top{height:48px;background:linear-gradient(120deg,#84cc16,#4d7c0f)}.bn .bd{padding:14px;color:#cfc7e8;font:500 13px Outfit,system-ui}",
    "js": null,
    "bg": "#141021",
    "slug": "cards-banner"
  },
  {
    "type": "comp",
    "cat": "backgrounds",
    "name": "Spotlight",
    "html": "<div class=\"bg\"></div>",
    "css": ".bg{width:100%;height:100%;background:radial-gradient(circle at 50% 38%,#a855f766,transparent 55%),#0d0a17}",
    "js": null,
    "bg": null,
    "slug": "backgrounds-spotlight"
  },
  {
    "type": "comp",
    "cat": "backgrounds",
    "name": "Vignette",
    "html": "<div class=\"bg\"></div>",
    "css": ".bg{width:100%;height:100%;background:radial-gradient(circle at 50% 50%,#be185d,#0d0a17 75%)}",
    "js": null,
    "bg": null,
    "slug": "backgrounds-vignette"
  },
  {
    "type": "comp",
    "cat": "backgrounds",
    "name": "Triangles",
    "html": "<div class=\"bg\"></div>",
    "css": ".bg{width:100%;height:100%;background:#0d0a17;background-image:linear-gradient(60deg,#3b82f622 25%,transparent 25%),linear-gradient(-60deg,#1d4ed822 25%,transparent 25%);background-size:34px 58px}",
    "js": null,
    "bg": null,
    "slug": "backgrounds-triangles"
  },
  {
    "type": "comp",
    "cat": "backgrounds",
    "name": "Plus Grid",
    "html": "<div class=\"bg\"></div>",
    "css": ".bg{width:100%;height:100%;background:#0d0a17;background-image:radial-gradient(#06b6d455 1.5px,transparent 1.5px),radial-gradient(#06b6d455 1.5px,transparent 1.5px);background-size:30px 30px;background-position:0 0,15px 15px}",
    "js": null,
    "bg": null,
    "slug": "backgrounds-plus-grid"
  },
  {
    "type": "comp",
    "cat": "backgrounds",
    "name": "Waves",
    "html": "<div class=\"bg\"></div>",
    "css": ".bg{width:100%;height:100%;background:repeating-radial-gradient(circle at 0 120%,transparent 0 18px,#10b98122 18px 20px),#0d0a17}",
    "js": null,
    "bg": null,
    "slug": "backgrounds-waves"
  },
  {
    "type": "comp",
    "cat": "backgrounds",
    "name": "Bokeh",
    "html": "<div class=\"bg\"></div>",
    "css": ".bg{width:100%;height:100%;background:radial-gradient(circle at 20% 75%,#84cc1666 0 9px,transparent 10px),radial-gradient(circle at 68% 28%,#4d7c0f 0 14px,transparent 15px),radial-gradient(circle at 85% 78%,#84cc1644 0 7px,transparent 8px),#0d0a17}",
    "js": null,
    "bg": null,
    "slug": "backgrounds-bokeh"
  },
  {
    "type": "comp",
    "cat": "textfx",
    "name": "Typewriter",
    "html": "<div class=\"t\">CopyKit</div>",
    "css": ".t{font:800 38px 'IBM Plex Mono',monospace;color:#a855f7;white-space:nowrap;overflow:hidden;border-right:3px solid #a855f7;width:7ch;animation:tw 3.5s steps(7) infinite,bl .7s step-end infinite}@keyframes tw{0%,12%{width:0}50%,88%{width:7ch}}@keyframes bl{50%{border-color:transparent}}",
    "js": null,
    "bg": null,
    "slug": "textfx-typewriter"
  },
  {
    "type": "comp",
    "cat": "textfx",
    "name": "Blur In",
    "html": "<div class=\"t\">focus</div>",
    "css": ".t{font:800 46px Outfit,system-ui;color:#ec4899;animation:bi 2.2s ease infinite alternate}@keyframes bi{0%{filter:blur(9px);opacity:.3}100%{filter:blur(0);opacity:1}}",
    "js": null,
    "bg": null,
    "slug": "textfx-blur-in"
  },
  {
    "type": "comp",
    "cat": "textfx",
    "name": "Rainbow",
    "html": "<div class=\"t\">rainbow</div>",
    "css": ".t{font:800 44px Outfit,system-ui;background:linear-gradient(90deg,#ff5f6d,#ffc371,#7ee8fa,#a855f7,#ff5f6d);background-size:300%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:rb 4s linear infinite}@keyframes rb{to{background-position:300%}}",
    "js": null,
    "bg": null,
    "slug": "textfx-rainbow"
  },
  {
    "type": "comp",
    "cat": "textfx",
    "name": "Spacing",
    "html": "<div class=\"t\">SPACE</div>",
    "css": ".t{font:700 38px Outfit,system-ui;color:#06b6d4;animation:ls 2.6s ease infinite alternate}@keyframes ls{from{letter-spacing:1px}to{letter-spacing:14px}}",
    "js": null,
    "bg": null,
    "slug": "textfx-spacing"
  },
  {
    "type": "comp",
    "cat": "textfx",
    "name": "Flicker",
    "html": "<div class=\"t\">FLICKER</div>",
    "css": ".t{font:800 42px Outfit,system-ui;color:#fff;text-shadow:0 0 8px #10b981,0 0 22px #10b981;animation:fk 3s infinite}@keyframes fk{0%,18%,22%,25%,53%,57%,100%{opacity:1}20%,24%,55%{opacity:.35}}",
    "js": null,
    "bg": null,
    "slug": "textfx-flicker"
  },
  {
    "type": "comp",
    "cat": "textfx",
    "name": "Half Fill",
    "html": "<div class=\"t\">SPLIT</div>",
    "css": ".t{font:900 46px Outfit,system-ui;background:linear-gradient(#84cc16 50%,#4d7c0f 50%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}",
    "js": null,
    "bg": null,
    "slug": "textfx-half-fill"
  },
  {
    "type": "comp",
    "cat": "inputs",
    "name": "Textarea",
    "html": "<textarea class=\"ta\" placeholder=\"Your message…\"></textarea>",
    "css": ".ta{width:230px;height:80px;resize:none;font:500 14px Outfit,system-ui;padding:12px 14px;background:#15111f;border:1.5px solid #2a2440;border-radius:12px;color:#fff;outline:none}.ta:focus{border-color:#a855f7}",
    "js": null,
    "bg": "#141021",
    "slug": "inputs-textarea"
  },
  {
    "type": "comp",
    "cat": "inputs",
    "name": "Range",
    "html": "<input type=\"range\" class=\"rg\" value=\"60\">",
    "css": ".rg{width:230px;accent-color:#ec4899}",
    "js": null,
    "bg": "#141021",
    "slug": "inputs-range"
  },
  {
    "type": "comp",
    "cat": "inputs",
    "name": "File Upload",
    "html": "<label class=\"fu\">⬆ Upload file</label>",
    "css": ".fu{display:inline-flex;gap:8px;align-items:center;font:600 14px Outfit,system-ui;color:#3b82f6;border:1.5px dashed #3b82f666;border-radius:12px;padding:18px 26px;cursor:pointer}.fu:hover{background:#3b82f614}",
    "js": null,
    "bg": "#141021",
    "slug": "inputs-file-upload"
  },
  {
    "type": "comp",
    "cat": "inputs",
    "name": "Password",
    "html": "<div class=\"pw\"><input type=\"password\" value=\"secret123\"><span>👁</span></div>",
    "css": ".pw{display:flex;align-items:center;background:#15111f;border:1.5px solid #2a2440;border-radius:12px;padding:12px 14px;width:230px}.pw input{flex:1;background:none;border:none;outline:none;color:#fff;font:500 14px Outfit,system-ui}.pw span{cursor:pointer;opacity:.6}.pw:focus-within{border-color:#06b6d4}",
    "js": null,
    "bg": "#141021",
    "slug": "inputs-password"
  },
  {
    "type": "comp",
    "cat": "inputs",
    "name": "Tags",
    "html": "<div class=\"tg\"><b>react ×</b><b>css ×</b><input placeholder=\"Add…\"></div>",
    "css": ".tg{display:flex;flex-wrap:wrap;gap:6px;align-items:center;background:#15111f;border:1.5px solid #2a2440;border-radius:12px;padding:8px;width:230px}.tg b{font:600 12px Outfit,system-ui;background:#10b98126;color:#10b981;padding:4px 9px;border-radius:6px}.tg input{flex:1;min-width:50px;background:none;border:none;outline:none;color:#fff;font:500 13px Outfit,system-ui}",
    "js": null,
    "bg": "#141021",
    "slug": "inputs-tags"
  },
  {
    "type": "comp",
    "cat": "badges",
    "name": "Star Rating",
    "html": "<span class=\"bg\">★★★★☆</span>",
    "css": ".bg{color:#a855f7;font-size:17px;letter-spacing:2px}",
    "js": null,
    "bg": "#141021",
    "slug": "badges-star-rating"
  },
  {
    "type": "comp",
    "cat": "badges",
    "name": "Pulse Live",
    "html": "<span class=\"bg\"><i></i>Live</span>",
    "css": ".bg{display:inline-flex;align-items:center;gap:7px;font:600 13px Outfit,system-ui;color:#fff;background:#15111f;border:1px solid #2a2440;padding:6px 14px;border-radius:99px}.bg i{width:8px;height:8px;border-radius:50%;background:#ec4899;animation:pl 1.2s infinite}@keyframes pl{0%{box-shadow:0 0 0 0 #ec489999}100%{box-shadow:0 0 0 8px #ec489900}}",
    "js": null,
    "bg": "#141021",
    "slug": "badges-pulse-live"
  },
  {
    "type": "comp",
    "cat": "badges",
    "name": "Glow",
    "html": "<span class=\"bg\">HOT</span>",
    "css": ".bg{font:700 11px Outfit,system-ui;letter-spacing:.06em;color:#fff;background:#3b82f6;padding:5px 12px;border-radius:99px;box-shadow:0 0 14px #3b82f6}",
    "js": null,
    "bg": "#141021",
    "slug": "badges-glow"
  },
  {
    "type": "comp",
    "cat": "badges",
    "name": "Number",
    "html": "<span class=\"bg\">3</span>",
    "css": ".bg{display:inline-flex;width:26px;height:26px;align-items:center;justify-content:center;border-radius:50%;background:#06b6d4;color:#fff;font:700 13px Outfit,system-ui}",
    "js": null,
    "bg": "#141021",
    "slug": "badges-number"
  },
  {
    "type": "comp",
    "cat": "badges",
    "name": "Trophy",
    "html": "<span class=\"bg\">🏆 Winner</span>",
    "css": ".bg{font:600 12px Outfit,system-ui;color:#10b981;background:#10b9811a;border:1px solid #10b98144;padding:5px 13px;border-radius:8px}",
    "js": null,
    "bg": "#141021",
    "slug": "badges-trophy"
  },
  {
    "type": "comp",
    "cat": "progress",
    "name": "Circular %",
    "html": "<div class=\"cp2\"><span>72%</span></div>",
    "css": ".cp2{width:64px;height:64px;border-radius:50%;background:conic-gradient(#a855f7 72%,#2a2440 0);display:flex;align-items:center;justify-content:center}.cp2 span{width:50px;height:50px;border-radius:50%;background:#141021;display:flex;align-items:center;justify-content:center;color:#fff;font:700 13px Outfit,system-ui}",
    "js": null,
    "bg": "#141021",
    "slug": "progress-circular"
  },
  {
    "type": "comp",
    "cat": "progress",
    "name": "Step Dots",
    "html": "<div class=\"sp2\"><i class=\"on\"></i><i class=\"on\"></i><i></i><i></i></div>",
    "css": ".sp2{display:flex;gap:10px}.sp2 i{width:16px;height:16px;border-radius:50%;background:#2a2440}.sp2 i.on{background:#ec4899}",
    "js": null,
    "bg": "#141021",
    "slug": "progress-step-dots"
  },
  {
    "type": "comp",
    "cat": "progress",
    "name": "Indeterminate",
    "html": "<div class=\"ind\"><i></i></div>",
    "css": ".ind{width:220px;height:8px;border-radius:99px;background:#2a2440;overflow:hidden;position:relative}.ind i{position:absolute;width:40%;height:100%;border-radius:99px;background:#3b82f6;animation:id 1.4s ease infinite}@keyframes id{0%{left:-40%}100%{left:100%}}",
    "js": null,
    "bg": null,
    "slug": "progress-indeterminate"
  },
  {
    "type": "comp",
    "cat": "progress",
    "name": "Glow Ring",
    "html": "<div class=\"cp3\"></div>",
    "css": ".cp3{width:60px;height:60px;border-radius:50%;background:conic-gradient(#06b6d4,#0e7490 65%,#2a2440 0);box-shadow:0 0 16px #06b6d455}",
    "js": null,
    "bg": "#141021",
    "slug": "progress-glow-ring"
  },
  {
    "type": "comp",
    "cat": "alerts",
    "name": "Cookie",
    "html": "<div class=\"ck\"><span>We use cookies 🍪</span><b>OK</b></div>",
    "css": ".ck{display:flex;align-items:center;gap:14px;background:#15111f;border:1px solid #2a2440;border-radius:12px;padding:12px 16px;font:500 13px Outfit,system-ui;color:#cfc7e8}.ck b{background:#a855f7;color:#fff;padding:6px 14px;border-radius:8px;font-weight:600;cursor:pointer}",
    "js": null,
    "bg": "#141021",
    "slug": "alerts-cookie"
  },
  {
    "type": "comp",
    "cat": "alerts",
    "name": "Promo",
    "html": "<div class=\"pm\">🎁 50% OFF — today only</div>",
    "css": ".pm{font:700 14px Outfit,system-ui;color:#fff;text-align:center;background:linear-gradient(120deg,#ec4899,#be185d);padding:13px 20px;border-radius:10px}",
    "js": null,
    "bg": null,
    "slug": "alerts-promo"
  },
  {
    "type": "comp",
    "cat": "alerts",
    "name": "Status Line",
    "html": "<div class=\"sl\"><i></i>All systems operational</div>",
    "css": ".sl{display:flex;align-items:center;gap:10px;font:600 14px Outfit,system-ui;color:#cfc7e8;background:#15111f;border:1px solid #2a2440;padding:13px 18px;border-radius:10px}.sl i{width:10px;height:10px;border-radius:50%;background:#3b82f6;box-shadow:0 0 10px #3b82f6}",
    "js": null,
    "bg": "#141021",
    "slug": "alerts-status-line"
  },
  {
    "type": "comp",
    "cat": "alerts",
    "name": "Field Error",
    "html": "<div class=\"fe\"><input value=\"not-an-email\"><span>⚠ Invalid email</span></div>",
    "css": ".fe{width:230px}.fe input{width:100%;padding:12px 14px;border:1.5px solid #06b6d4;border-radius:10px;background:#15111f;color:#fff;outline:none}.fe span{display:block;margin-top:6px;color:#06b6d4;font:600 12px Outfit,system-ui}",
    "js": null,
    "bg": "#141021",
    "slug": "alerts-field-error"
  },
  {
    "type": "comp",
    "cat": "tooltips",
    "name": "Multiline",
    "html": "<div class=\"tp\">Hover<span>Line one<br>Line two</span></div>",
    "css": ".tp{position:relative;font:600 15px Outfit,system-ui;color:#fff;background:#15111f;border:1px solid #2a2440;padding:11px 18px;border-radius:10px;cursor:pointer}.tp span{position:absolute;bottom:120%;left:50%;transform:translateX(-50%);background:#a855f7;color:#fff;font:500 12px Outfit,system-ui;line-height:1.5;text-align:center;padding:8px 12px;border-radius:8px;opacity:0;pointer-events:none;transition:.2s}.tp:hover span{opacity:1}",
    "js": null,
    "bg": "#141021",
    "slug": "tooltips-multiline"
  },
  {
    "type": "comp",
    "cat": "tooltips",
    "name": "Help Icon",
    "html": "<div class=\"tp\">?<span>Need help?</span></div>",
    "css": ".tp{position:relative;width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;font:700 16px Outfit,system-ui;color:#fff;background:#ec4899;cursor:pointer}.tp span{position:absolute;bottom:130%;left:50%;transform:translateX(-50%);background:#0d0a17;color:#fff;border:1px solid #2a2440;font:500 12px Outfit,system-ui;padding:7px 12px;border-radius:8px;white-space:nowrap;opacity:0;pointer-events:none;transition:.2s}.tp:hover span{opacity:1}",
    "js": null,
    "bg": "#141021",
    "slug": "tooltips-help-icon"
  },
  {
    "type": "comp",
    "cat": "tooltips",
    "name": "Keybind",
    "html": "<div class=\"tp\">Save<span>⌘ S</span></div>",
    "css": ".tp{position:relative;font:600 15px Outfit,system-ui;color:#fff;background:#15111f;border:1px solid #2a2440;padding:11px 18px;border-radius:10px;cursor:pointer}.tp span{position:absolute;bottom:120%;left:50%;transform:translateX(-50%);background:#3b82f6;color:#fff;font:700 11px 'IBM Plex Mono',monospace;padding:6px 10px;border-radius:7px;white-space:nowrap;opacity:0;pointer-events:none;transition:.2s}.tp:hover span{opacity:1}",
    "js": null,
    "bg": "#141021",
    "slug": "tooltips-keybind"
  },
  {
    "type": "comp",
    "cat": "avatars",
    "name": "Group",
    "html": "<div class=\"gr\"><div>A</div><div>B</div><div>C</div><div>+5</div></div>",
    "css": ".gr{display:flex}.gr div{width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;font:700 14px Outfit,system-ui;color:#fff;border:2px solid #141021;margin-left:-12px;background:#a855f7}.gr div:first-child{margin-left:0}.gr div:last-child{background:#7c3aed}",
    "js": null,
    "bg": "#141021",
    "slug": "avatars-group"
  },
  {
    "type": "comp",
    "cat": "avatars",
    "name": "Story Ring",
    "html": "<div class=\"av\"></div>",
    "css": ".av{width:60px;height:60px;border-radius:50%;padding:3px;background:conic-gradient(#ec4899,#be185d,#ec4899)}.av::after{content:\"A\";display:flex;width:100%;height:100%;border-radius:50%;align-items:center;justify-content:center;background:#141021;color:#fff;font:700 22px Outfit,system-ui;box-sizing:border-box;border:2px solid #141021}",
    "js": null,
    "bg": "#141021",
    "slug": "avatars-story-ring"
  },
  {
    "type": "comp",
    "cat": "avatars",
    "name": "Squircle",
    "html": "<div class=\"av\">A</div>",
    "css": ".av{width:60px;height:60px;border-radius:32%;display:flex;align-items:center;justify-content:center;font:700 24px Outfit,system-ui;color:#fff;background:linear-gradient(135deg,#3b82f6,#1d4ed8)}",
    "js": null,
    "bg": "#141021",
    "slug": "avatars-squircle"
  },
  {
    "type": "comp",
    "cat": "avatars",
    "name": "Soft Outline",
    "html": "<div class=\"av\">A</div>",
    "css": ".av{width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;font:700 22px Outfit,system-ui;color:#06b6d4;background:#06b6d41f;border:2px solid #06b6d4}",
    "js": null,
    "bg": "#141021",
    "slug": "avatars-soft-outline"
  },
  {
    "type": "comp",
    "cat": "dividers",
    "name": "Vertical",
    "html": "<div class=\"dv\"></div>",
    "css": ".dv{width:2px;height:60px;background:linear-gradient(#a855f7,transparent)}",
    "js": null,
    "bg": null,
    "slug": "dividers-vertical"
  },
  {
    "type": "comp",
    "cat": "dividers",
    "name": "Zigzag",
    "html": "<div class=\"dv\"></div>",
    "css": ".dv{width:240px;height:10px;background:linear-gradient(135deg,#ec4899 25%,transparent 25%) -10px 0,linear-gradient(225deg,#ec4899 25%,transparent 25%) -10px 0;background-size:20px 20px;background-repeat:repeat-x}",
    "js": null,
    "bg": null,
    "slug": "dividers-zigzag"
  },
  {
    "type": "comp",
    "cat": "dividers",
    "name": "Thick Gradient",
    "html": "<div class=\"dv\"></div>",
    "css": ".dv{width:240px;height:5px;border-radius:99px;background:linear-gradient(90deg,#3b82f6,#1d4ed8)}",
    "js": null,
    "bg": null,
    "slug": "dividers-thick-gradient"
  },
  {
    "type": "comp",
    "cat": "dividers",
    "name": "Star Center",
    "html": "<div class=\"dv\"><span>✦</span></div>",
    "css": ".dv{display:flex;align-items:center;gap:14px;width:240px;color:#06b6d4;font-size:13px}.dv::before,.dv::after{content:\"\";flex:1;height:1px;background:linear-gradient(90deg,transparent,#06b6d4)}",
    "js": null,
    "bg": null,
    "slug": "dividers-star-center"
  },
  {
    "type": "comp",
    "cat": "skeletons",
    "name": "List",
    "html": "<div class=\"sk\"><i></i><i></i><i></i></div>",
    "css": ".sk{width:200px;display:flex;flex-direction:column;gap:12px}.sk i{height:16px;border-radius:6px;background:linear-gradient(100deg,#1d1730 30%,#a855f740 50%,#1d1730 70%);background-size:220% 100%;animation:s 1.4s linear infinite}@keyframes s{to{background-position:-220% 0}}",
    "js": null,
    "bg": "#141021",
    "slug": "skeletons-list"
  },
  {
    "type": "comp",
    "cat": "skeletons",
    "name": "Media",
    "html": "<div class=\"sk\"><span></span><i></i></div>",
    "css": ".sk{display:flex;gap:12px;width:210px;align-items:center}.sk span{width:60px;height:60px;border-radius:10px;flex:none}.sk i{flex:1;height:14px;border-radius:6px}.sk span,.sk i{background:linear-gradient(100deg,#1d1730 30%,#ec489940 50%,#1d1730 70%);background-size:220% 100%;animation:s 1.4s linear infinite}@keyframes s{to{background-position:-220% 0}}",
    "js": null,
    "bg": "#141021",
    "slug": "skeletons-media"
  },
  {
    "type": "comp",
    "cat": "cursors",
    "name": "Emoji Follow",
    "html": "<div class=\"stage\">move your mouse<div class=\"em\">✨</div></div>",
    "css": ".stage{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#4a4360;font:600 14px Outfit,system-ui;cursor:crosshair;overflow:hidden}.em{position:absolute;font-size:24px;pointer-events:none;transform:translate(-50%,-50%)}",
    "js": "var e=document.querySelector(\".em\"),x=0,y=0,tx=0,ty=0;addEventListener(\"mousemove\",function(ev){tx=ev.clientX;ty=ev.clientY});(function l(){x+=(tx-x)*.15;y+=(ty-y)*.15;e.style.left=x+\"px\";e.style.top=y+\"px\";requestAnimationFrame(l)})()",
    "bg": "#141021",
    "slug": "cursors-emoji-follow"
  },
  {
    "type": "comp",
    "cat": "cursors",
    "name": "Label Follow",
    "html": "<div class=\"stage\">move your mouse<div class=\"lb\">hi there</div></div>",
    "css": ".stage{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#4a4360;font:600 14px Outfit,system-ui;cursor:crosshair;overflow:hidden}.lb{position:absolute;background:#ec4899;color:#fff;font:600 11px Outfit,system-ui;padding:4px 10px;border-radius:99px;pointer-events:none;transform:translate(14px,14px);white-space:nowrap}",
    "js": "var e=document.querySelector(\".lb\");addEventListener(\"mousemove\",function(ev){e.style.left=ev.clientX+\"px\";e.style.top=ev.clientY+\"px\"})",
    "bg": "#141021",
    "slug": "cursors-label-follow"
  },
  {
    "type": "comp",
    "cat": "animated",
    "name": "Gradient Shift",
    "html": "<div class=\"bg\"></div>",
    "css": ".bg{width:100%;height:100%;background:linear-gradient(120deg,#a855f7,#7c3aed,#a855f7);background-size:200% 200%;animation:gs 6s ease infinite}@keyframes gs{0%,100%{background-position:0 50%}50%{background-position:100% 50%}}",
    "js": null,
    "bg": null,
    "slug": "animated-gradient-shift"
  },
  {
    "type": "comp",
    "cat": "animated",
    "name": "Floating Orbs",
    "html": "<div class=\"bg\"></div>",
    "css": ".bg{width:100%;height:100%;position:relative;overflow:hidden;background:#0d0a17}.bg::before,.bg::after{content:\"\";position:absolute;border-radius:50%;filter:blur(28px)}.bg::before{width:90px;height:90px;background:#ec4899;top:20%;animation:o1 7s ease-in-out infinite}.bg::after{width:70px;height:70px;background:#be185d;right:10%;bottom:10%;animation:o2 9s ease-in-out infinite}@keyframes o1{50%{transform:translate(140px,50px)}}@keyframes o2{50%{transform:translate(-130px,-40px)}}",
    "js": null,
    "bg": null,
    "slug": "animated-floating-orbs"
  },
  {
    "type": "comp",
    "cat": "animated",
    "name": "Pulse Grid",
    "html": "<div class=\"bg\"></div>",
    "css": ".bg{width:100%;height:100%;background:#0d0a17;background-image:radial-gradient(#3b82f666 2px,transparent 2px);background-size:26px 26px;animation:pg 3s ease infinite}@keyframes pg{50%{background-size:30px 30px}}",
    "js": null,
    "bg": null,
    "slug": "animated-pulse-grid"
  },
  {
    "type": "comp",
    "cat": "animated",
    "name": "Scan Line",
    "html": "<div class=\"bg\"></div>",
    "css": ".bg{width:100%;height:100%;background:#0d0a17;position:relative;overflow:hidden}.bg::after{content:\"\";position:absolute;left:0;right:0;height:38%;background:linear-gradient(#06b6d400,#06b6d455,#06b6d400);animation:sc 3s linear infinite}@keyframes sc{0%{top:-40%}100%{top:100%}}",
    "js": null,
    "bg": null,
    "slug": "animated-scan-line"
  },
  {
    "type": "comp",
    "cat": "animated",
    "name": "Hue Conic",
    "html": "<div class=\"bg\"></div>",
    "css": ".bg{width:100%;height:100%;background:conic-gradient(from 0deg,#047857,#10b981,#047857);animation:hu 8s linear infinite}@keyframes hu{to{filter:hue-rotate(360deg)}}",
    "js": null,
    "bg": null,
    "slug": "animated-hue-conic"
  },
  {
    "type": "comp",
    "cat": "animated",
    "name": "Wave Stripes",
    "html": "<div class=\"bg\"></div>",
    "css": ".bg{width:100%;height:100%;background:repeating-linear-gradient(45deg,#84cc1622 0 12px,#0d0a17 12px 24px);background-size:200% 200%;animation:ws 4s linear infinite}@keyframes ws{to{background-position:48px 0}}",
    "js": null,
    "bg": null,
    "slug": "animated-wave-stripes"
  },
  {
    "type": "comp",
    "cat": "animated",
    "name": "Starfield",
    "html": "<div class=\"bg\"></div>",
    "css": ".bg{width:100%;height:100%;background:#0d0a17;background-image:radial-gradient(2px 2px at 20% 30%,#f59e0b,transparent),radial-gradient(2px 2px at 70% 60%,#fff,transparent),radial-gradient(1px 1px at 45% 80%,#b45309,transparent),radial-gradient(2px 2px at 85% 25%,#fff,transparent);animation:tw 3s ease infinite}@keyframes tw{50%{opacity:.4}}",
    "js": null,
    "bg": null,
    "slug": "animated-starfield"
  },
  {
    "type": "comp",
    "cat": "animated",
    "name": "Breathing Glow",
    "html": "<div class=\"bg\"></div>",
    "css": ".bg{width:100%;height:100%;background:radial-gradient(circle at 50% 50%,#fb923c99,#0d0a17 70%);background-size:100% 100%;animation:br 4s ease infinite}@keyframes br{50%{background-size:150% 150%}}",
    "js": null,
    "bg": null,
    "slug": "animated-breathing-glow"
  },
  {
    "type": "comp",
    "cat": "animated",
    "name": "Drifting Mesh",
    "html": "<div class=\"bg\"></div>",
    "css": ".bg{width:100%;height:100%;background:radial-gradient(at 20% 30%,#ef4444 0,transparent 45%),radial-gradient(at 80% 70%,#b91c1c 0,transparent 45%),#0d0a17;background-size:160% 160%;animation:dm 10s ease infinite}@keyframes dm{50%{background-position:100% 100%}}",
    "js": null,
    "bg": null,
    "slug": "animated-drifting-mesh"
  },
  {
    "type": "comp",
    "cat": "animated",
    "name": "Ripple Rings",
    "html": "<div class=\"bg\"></div>",
    "css": ".bg{width:100%;height:100%;background:#0d0a17;position:relative;overflow:hidden}.bg::after{content:\"\";position:absolute;top:50%;left:50%;width:20px;height:20px;border-radius:50%;border:2px solid #fb7185;transform:translate(-50%,-50%);animation:rr 3s ease-out infinite}@keyframes rr{0%{width:20px;height:20px;opacity:1}100%{width:320px;height:320px;opacity:0}}",
    "js": null,
    "bg": null,
    "slug": "animated-ripple-rings"
  },
  {
    "type": "comp",
    "cat": "animated",
    "name": "Color Cycle",
    "html": "<div class=\"bg\"></div>",
    "css": ".bg{width:100%;height:100%;background:linear-gradient(135deg,#818cf8,#4338ca);animation:cc 7s linear infinite}@keyframes cc{to{filter:hue-rotate(360deg)}}",
    "js": null,
    "bg": null,
    "slug": "animated-color-cycle"
  },
  {
    "type": "comp",
    "cat": "animated",
    "name": "Matrix Rain",
    "html": "<div class=\"bg\"></div>",
    "css": ".bg{width:100%;height:100%;background:#0d0a17;background-image:repeating-linear-gradient(180deg,#2dd4bf44 0 2px,transparent 2px 14px);background-size:14px 28px;animation:mr .6s linear infinite}@keyframes mr{to{background-position:0 28px}}",
    "js": null,
    "bg": null,
    "slug": "animated-matrix-rain"
  },
  {
    "type": "comp",
    "cat": "threed",
    "name": "Rotating Cube",
    "html": "<div class=\"scene\"><div class=\"cube\"><div class=\"cf cf1\"></div><div class=\"cf cf2\"></div><div class=\"cf cf3\"></div><div class=\"cf cf4\"></div><div class=\"cf cf5\"></div><div class=\"cf cf6\"></div></div></div>",
    "css": ".scene{width:80px;height:80px;perspective:320px}.cube{width:100%;height:100%;position:relative;transform-style:preserve-3d;animation:cb 7s linear infinite}.cf{position:absolute;width:80px;height:80px;background:#a855f7cc;border:1px solid #7c3aed}.cf1{transform:translateZ(40px)}.cf2{transform:rotateY(180deg) translateZ(40px)}.cf3{transform:rotateY(90deg) translateZ(40px)}.cf4{transform:rotateY(-90deg) translateZ(40px)}.cf5{transform:rotateX(90deg) translateZ(40px)}.cf6{transform:rotateX(-90deg) translateZ(40px)}@keyframes cb{to{transform:rotateX(360deg) rotateY(360deg)}}",
    "js": null,
    "bg": "#141021",
    "slug": "threed-rotating-cube"
  },
  {
    "type": "comp",
    "cat": "threed",
    "name": "Tilt Card",
    "html": "<div class=\"tc\">Move mouse</div>",
    "css": ".tc{width:150px;height:100px;border-radius:16px;background:linear-gradient(135deg,#ec4899,#be185d);display:flex;align-items:center;justify-content:center;color:#fff;font:700 15px Outfit,system-ui;transition:transform .1s;box-shadow:0 20px 40px #ec489955}",
    "js": "var c=document.querySelector(\".tc\");addEventListener(\"mousemove\",function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=\"perspective(500px) rotateY(\"+(x*26)+\"deg) rotateX(\"+(-y*26)+\"deg)\"})",
    "bg": "#141021",
    "slug": "threed-tilt-card"
  },
  {
    "type": "comp",
    "cat": "threed",
    "name": "3D Button",
    "html": "<button class=\"b\">Press</button>",
    "css": ".b{font:700 16px Outfit,system-ui;padding:14px 30px;border:none;border-radius:12px;color:#fff;background:#3b82f6;transform:perspective(320px) rotateX(22deg);box-shadow:0 12px 0 #1d4ed8;cursor:pointer;transition:.2s}.b:hover{transform:perspective(320px) rotateX(0)}",
    "js": null,
    "bg": "#141021",
    "slug": "threed-3d-button"
  },
  {
    "type": "comp",
    "cat": "threed",
    "name": "Rotating Coin",
    "html": "<div class=\"co\">★</div>",
    "css": ".co{width:70px;height:70px;border-radius:50%;background:linear-gradient(135deg,#06b6d4,#0e7490);display:flex;align-items:center;justify-content:center;color:#fff;font-size:28px;animation:co 2.5s linear infinite}@keyframes co{to{transform:rotateY(360deg)}}",
    "js": null,
    "bg": "#141021",
    "slug": "threed-rotating-coin"
  },
  {
    "type": "comp",
    "cat": "threed",
    "name": "Flip Cube",
    "html": "<div class=\"fc\"></div>",
    "css": ".fc{width:58px;height:58px;background:linear-gradient(135deg,#10b981,#047857);border-radius:10px;animation:fc 3s ease infinite}@keyframes fc{0%{transform:rotateY(0) rotateX(0)}50%{transform:rotateY(180deg) rotateX(180deg)}100%{transform:rotateY(360deg) rotateX(360deg)}}",
    "js": null,
    "bg": "#141021",
    "slug": "threed-flip-cube"
  },
  {
    "type": "comp",
    "cat": "threed",
    "name": "3D Text",
    "html": "<div class=\"t3\">3D</div>",
    "css": ".t3{font:900 56px Outfit,system-ui;color:#84cc16;text-shadow:1px 1px #4d7c0f,2px 2px #4d7c0f,3px 3px #4d7c0f,4px 4px #4d7c0f,5px 5px #4d7c0f,6px 6px rgba(0,0,0,.4)}",
    "js": null,
    "bg": "#141021",
    "slug": "threed-3d-text"
  },
  {
    "type": "comp",
    "cat": "threed",
    "name": "Card Stack",
    "html": "<div class=\"ls\"><span>Stack</span></div>",
    "css": ".ls{position:relative;width:140px;height:90px}.ls::before,.ls::after{content:\"\";position:absolute;inset:0;border-radius:14px;background:#f59e0b}.ls::before{transform:translate(10px,10px);opacity:.25}.ls::after{transform:translate(5px,5px);opacity:.55}.ls span{position:absolute;inset:0;border-radius:14px;background:linear-gradient(135deg,#f59e0b,#b45309);display:flex;align-items:center;justify-content:center;color:#fff;font:700 16px Outfit,system-ui}",
    "js": null,
    "bg": "#141021",
    "slug": "threed-card-stack"
  },
  {
    "type": "comp",
    "cat": "threed",
    "name": "Perspective Grid",
    "html": "<div class=\"bg\"></div>",
    "css": ".bg{width:100%;height:100%;overflow:hidden;background:#0d0a17}.bg{background-image:linear-gradient(#fb923c55 1px,transparent 1px),linear-gradient(90deg,#fb923c55 1px,transparent 1px);background-size:28px 28px;transform:perspective(150px) rotateX(48deg) scale(1.6)}",
    "js": null,
    "bg": null,
    "slug": "threed-perspective-grid"
  },
  {
    "type": "comp",
    "cat": "threed",
    "name": "Layered Rings",
    "html": "<div class=\"lr\"></div>",
    "css": ".lr{width:70px;height:70px;border-radius:50%;border:3px solid #ef4444;position:relative;animation:sp 4s linear infinite;transform-style:preserve-3d}.lr::before,.lr::after{content:\"\";position:absolute;inset:-3px;border-radius:50%;border:3px solid #b91c1c}.lr::before{transform:rotateX(60deg)}.lr::after{transform:rotateY(60deg)}@keyframes sp{to{transform:rotateZ(360deg)}}",
    "js": null,
    "bg": "#141021",
    "slug": "threed-layered-rings"
  },
  {
    "type": "comp",
    "cat": "threed",
    "name": "Pop Layers",
    "html": "<div class=\"pl\">Hover</div>",
    "css": ".pl{width:140px;height:90px;border-radius:14px;background:#fb7185;color:#fff;display:flex;align-items:center;justify-content:center;font:700 16px Outfit,system-ui;box-shadow:0 1px 0 #e11d48,0 2px 0 #e11d48,0 3px 0 #e11d48,0 4px 0 #e11d48;transition:.2s;cursor:pointer}.pl:hover{transform:translateY(-6px);box-shadow:0 3px 0 #e11d48,0 6px 0 #e11d48,0 9px 0 #e11d48,0 14px 24px rgba(0,0,0,.5)}",
    "js": null,
    "bg": "#141021",
    "slug": "threed-pop-layers"
  },
  {
    "type": "comp",
    "cat": "glass",
    "name": "Glass Card",
    "html": "<div class=\"wp\"><div class=\"g\">Glass</div></div>",
    "css": ".wp{width:172px;height:112px;border-radius:18px;background:linear-gradient(135deg,#a855f7,#7c3aed);display:flex;align-items:center;justify-content:center;padding:16px}.g{width:100%;height:100%;border-radius:12px;background:rgba(255,255,255,.16);backdrop-filter:blur(9px);border:1px solid rgba(255,255,255,.35);display:flex;align-items:center;justify-content:center;color:#fff;font:700 16px Outfit,system-ui}",
    "js": null,
    "bg": "#141021",
    "slug": "glass-glass-card"
  },
  {
    "type": "comp",
    "cat": "glass",
    "name": "Glass Button",
    "html": "<div class=\"wp\"><button class=\"g\">Click me</button></div>",
    "css": ".wp{padding:26px;border-radius:18px;background:linear-gradient(135deg,#ec4899,#be185d)}.g{font:600 16px Outfit,system-ui;padding:13px 28px;border-radius:12px;color:#fff;background:rgba(255,255,255,.2);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.4);cursor:pointer;transition:.2s}.g:hover{background:rgba(255,255,255,.32)}",
    "js": null,
    "bg": "#141021",
    "slug": "glass-glass-button"
  },
  {
    "type": "comp",
    "cat": "glass",
    "name": "Glass Badge",
    "html": "<div class=\"wp\"><span class=\"g\">PRO</span></div>",
    "css": ".wp{padding:30px;border-radius:16px;background:linear-gradient(135deg,#3b82f6,#1d4ed8)}.g{font:700 13px Outfit,system-ui;letter-spacing:.06em;color:#fff;padding:7px 16px;border-radius:99px;background:rgba(255,255,255,.22);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.4)}",
    "js": null,
    "bg": "#141021",
    "slug": "glass-glass-badge"
  },
  {
    "type": "comp",
    "cat": "glass",
    "name": "Glass Input",
    "html": "<div class=\"wp\"><input class=\"g\" placeholder=\"Email\"></div>",
    "css": ".wp{padding:24px;border-radius:18px;background:linear-gradient(135deg,#06b6d4,#0e7490)}.g{font:500 14px Outfit,system-ui;padding:13px 16px;border-radius:12px;color:#fff;background:rgba(255,255,255,.16);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.35);outline:none;width:180px}.g::placeholder{color:rgba(255,255,255,.7)}",
    "js": null,
    "bg": "#141021",
    "slug": "glass-glass-input"
  },
  {
    "type": "comp",
    "cat": "glass",
    "name": "Glass Toast",
    "html": "<div class=\"wp\"><div class=\"g\"><b>Saved!</b> Your changes are live</div></div>",
    "css": ".wp{padding:22px;border-radius:18px;background:linear-gradient(135deg,#10b981,#047857)}.g{font:500 13px Outfit,system-ui;color:#fff;padding:13px 18px;border-radius:12px;background:rgba(255,255,255,.18);backdrop-filter:blur(9px);border:1px solid rgba(255,255,255,.35)}.g b{font-weight:700}",
    "js": null,
    "bg": "#141021",
    "slug": "glass-glass-toast"
  },
  {
    "type": "comp",
    "cat": "glass",
    "name": "Glass Player",
    "html": "<div class=\"wp\"><div class=\"g\">▶ <div class=\"bar\"><i></i></div></div></div>",
    "css": ".wp{padding:22px;border-radius:18px;background:linear-gradient(135deg,#84cc16,#4d7c0f)}.g{display:flex;align-items:center;gap:12px;color:#fff;font-size:15px;padding:13px 18px;border-radius:14px;background:rgba(255,255,255,.18);backdrop-filter:blur(9px);border:1px solid rgba(255,255,255,.35)}.g .bar{width:90px;height:5px;border-radius:99px;background:rgba(255,255,255,.3)}.g .bar i{display:block;width:55%;height:100%;border-radius:99px;background:#fff}",
    "js": null,
    "bg": "#141021",
    "slug": "glass-glass-player"
  },
  {
    "type": "comp",
    "cat": "glass",
    "name": "Glass Profile",
    "html": "<div class=\"wp\"><div class=\"g\"><div class=\"a\"></div><b>Jordan</b></div></div>",
    "css": ".wp{padding:22px;border-radius:18px;background:linear-gradient(135deg,#f59e0b,#b45309)}.g{display:flex;align-items:center;gap:12px;color:#fff;padding:14px 18px;border-radius:14px;background:rgba(255,255,255,.18);backdrop-filter:blur(9px);border:1px solid rgba(255,255,255,.35)}.g .a{width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,.5)}.g b{font:700 15px Outfit,system-ui}",
    "js": null,
    "bg": "#141021",
    "slug": "glass-glass-profile"
  },
  {
    "type": "comp",
    "cat": "glass",
    "name": "Glass Pill Nav",
    "html": "<div class=\"wp\"><div class=\"g\"><b class=\"on\">Home</b><b>Work</b><b>About</b></div></div>",
    "css": ".wp{padding:24px;border-radius:18px;background:linear-gradient(135deg,#fb923c,#ea580c)}.g{display:flex;gap:6px;padding:6px;border-radius:99px;background:rgba(255,255,255,.18);backdrop-filter:blur(9px);border:1px solid rgba(255,255,255,.35)}.g b{font:600 13px Outfit,system-ui;color:#fff;padding:8px 16px;border-radius:99px;cursor:pointer}.g b.on{background:rgba(255,255,255,.35)}",
    "js": null,
    "bg": "#141021",
    "slug": "glass-glass-pill-nav"
  },
  {
    "type": "comp",
    "cat": "glass",
    "name": "Frosted Tile",
    "html": "<div class=\"wp\"><div class=\"g\"><span class=\"n\">24</span><span class=\"l\">Tasks</span></div></div>",
    "css": ".wp{padding:22px;border-radius:18px;background:linear-gradient(135deg,#ef4444,#b91c1c)}.g{width:110px;padding:18px;border-radius:16px;text-align:center;background:rgba(255,255,255,.18);backdrop-filter:blur(9px);border:1px solid rgba(255,255,255,.35)}.g .n{display:block;font:800 30px Outfit,system-ui;color:#fff}.g .l{font:500 12px Outfit,system-ui;color:rgba(255,255,255,.85)}",
    "js": null,
    "bg": "#141021",
    "slug": "glass-frosted-tile"
  },
  {
    "type": "comp",
    "cat": "glass",
    "name": "Glass Switch",
    "html": "<div class=\"wp\"><label class=\"g\"><input type=\"checkbox\" checked><span></span></label></div>",
    "css": ".wp{padding:28px;border-radius:18px;background:linear-gradient(135deg,#fb7185,#e11d48)}.g input{display:none}.g span{display:block;width:58px;height:30px;border-radius:99px;background:rgba(255,255,255,.25);backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,.4);position:relative;cursor:pointer;transition:.3s}.g span::after{content:\"\";position:absolute;top:3px;left:3px;width:24px;height:24px;border-radius:50%;background:#fff;transition:.3s}.g input:checked+span::after{transform:translateX(28px)}",
    "js": null,
    "bg": "#141021",
    "slug": "glass-glass-switch"
  },
  {
    "type": "comp",
    "cat": "buttons",
    "name": "Liquid",
    "html": "<button class=\"b\">Hover</button>",
    "css": ".b{position:relative;font:600 16px Outfit,system-ui;padding:13px 30px;border:none;border-radius:12px;color:#fff;background:#7c3aed;overflow:hidden;cursor:pointer;z-index:0}.b::before{content:\"\";position:absolute;inset:0;background:#a855f7;border-radius:40%;transform:translateY(100%) scale(1.5);transition:.5s;z-index:-1}.b:hover::before{transform:translateY(0) scale(1.5);border-radius:0}",
    "js": null,
    "bg": null,
    "slug": "buttons-liquid"
  },
  {
    "type": "comp",
    "cat": "buttons",
    "name": "Magnetic Dot",
    "html": "<button class=\"b\">Send<i></i></button>",
    "css": ".b{display:inline-flex;align-items:center;gap:10px;font:600 16px Outfit,system-ui;padding:13px 26px;border:none;border-radius:99px;color:#fff;background:#ec4899;cursor:pointer}.b i{width:8px;height:8px;border-radius:50%;background:#fff;transition:.3s}.b:hover i{transform:translateX(6px) scale(1.4)}",
    "js": null,
    "bg": null,
    "slug": "buttons-magnetic-dot"
  },
  {
    "type": "comp",
    "cat": "buttons",
    "name": "Cutout",
    "html": "<button class=\"b\">Buy now</button>",
    "css": ".b{font:700 15px Outfit,system-ui;padding:14px 28px;border:none;color:#fff;background:#3b82f6;cursor:pointer;clip-path:polygon(10% 0,100% 0,90% 100%,0 100%)}.b:hover{background:#1d4ed8}",
    "js": null,
    "bg": null,
    "slug": "buttons-cutout"
  },
  {
    "type": "comp",
    "cat": "buttons",
    "name": "Glow Border Sweep",
    "html": "<button class=\"b\">Activate</button>",
    "css": ".b{position:relative;font:600 16px Outfit,system-ui;padding:13px 30px;border-radius:12px;color:#fff;background:#15111f;border:1px solid #06b6d466;cursor:pointer;overflow:hidden}.b::after{content:\"\";position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:conic-gradient(transparent,#06b6d4,transparent 30%);animation:sw 3s linear infinite}.b span,.b{z-index:1}@keyframes sw{to{transform:rotate(360deg)}}",
    "js": null,
    "bg": "#141021",
    "slug": "buttons-glow-border-sweep"
  },
  {
    "type": "comp",
    "cat": "buttons",
    "name": "Emoji Pop",
    "html": "<button class=\"b\">React 🎉</button>",
    "css": ".b{font:600 16px Outfit,system-ui;padding:13px 28px;border:none;border-radius:12px;color:#fff;background:#10b981;cursor:pointer;transition:.15s}.b:active{transform:scale(.9)}.b:hover{box-shadow:0 6px 20px #10b98166}",
    "js": null,
    "bg": null,
    "slug": "buttons-emoji-pop"
  },
  {
    "type": "comp",
    "cat": "loaders",
    "name": "Newton Cradle",
    "html": "<div class=\"ld\"><i></i><i></i><i></i></div>",
    "css": ".ld{display:flex}.ld i{width:14px;height:14px;border-radius:50%;background:#a855f7}.ld i:first-child{animation:nl .6s ease-in infinite alternate}.ld i:last-child{animation:nr .6s ease-in infinite alternate}@keyframes nl{0%,50%{transform:translateX(0)}100%{transform:translateX(-12px)}}@keyframes nr{0%,50%{transform:translateX(0)}100%{transform:translateX(12px)}}",
    "js": null,
    "bg": null,
    "slug": "loaders-newton-cradle"
  },
  {
    "type": "comp",
    "cat": "loaders",
    "name": "Hourglass",
    "html": "<div class=\"ld\"></div>",
    "css": ".ld{width:34px;height:34px;border:5px solid #ec4899;border-color:#ec4899 transparent;border-radius:50%;animation:hg 1s ease infinite}@keyframes hg{to{transform:rotate(180deg)}}",
    "js": null,
    "bg": null,
    "slug": "loaders-hourglass"
  },
  {
    "type": "comp",
    "cat": "loaders",
    "name": "Spinner Dots Ring",
    "html": "<div class=\"ld\"></div>",
    "css": ".ld{width:40px;height:40px;border-radius:50%;border:4px dotted #3b82f6;border-right-color:transparent;animation:sp .9s linear infinite}@keyframes sp{to{transform:rotate(360deg)}}",
    "js": null,
    "bg": null,
    "slug": "loaders-spinner-dots-ring"
  },
  {
    "type": "comp",
    "cat": "loaders",
    "name": "Jelly",
    "html": "<div class=\"ld\"></div>",
    "css": ".ld{width:34px;height:34px;background:#06b6d4;animation:jl 1s ease infinite}@keyframes jl{0%,100%{border-radius:42% 58% 70% 30%/45% 45% 55% 55%}50%{border-radius:70% 30% 46% 54%/30% 60% 40% 70%;transform:rotate(40deg)}}",
    "js": null,
    "bg": null,
    "slug": "loaders-jelly"
  },
  {
    "type": "comp",
    "cat": "loaders",
    "name": "Progress Spinner",
    "html": "<div class=\"ld\"></div>",
    "css": ".ld{width:40px;height:40px;border-radius:50%;background:conic-gradient(#10b981 0,#10b981 var(--p,25%),#2a2440 0);-webkit-mask:radial-gradient(circle 13px,transparent 98%,#000);mask:radial-gradient(circle 13px,transparent 98%,#000);animation:ps 2s linear infinite}@keyframes ps{0%{--p:5%}100%{--p:100%}}",
    "js": null,
    "bg": null,
    "slug": "loaders-progress-spinner"
  },
  {
    "type": "comp",
    "cat": "cards",
    "name": "Gradient Glow Hover",
    "html": "<div class=\"gg\">Hover me</div>",
    "css": ".gg{width:160px;height:100px;border-radius:18px;background:#15111f;border:1px solid #241d38;display:flex;align-items:center;justify-content:center;color:#fff;font:600 15px Outfit,system-ui;position:relative;cursor:pointer;transition:.3s}.gg::before{content:\"\";position:absolute;inset:-2px;border-radius:18px;background:linear-gradient(120deg,#a855f7,#7c3aed);filter:blur(14px);opacity:0;transition:.3s;z-index:-1}.gg:hover::before{opacity:.7}",
    "js": null,
    "bg": "#141021",
    "slug": "cards-gradient-glow-hover"
  },
  {
    "type": "comp",
    "cat": "cards",
    "name": "Coupon",
    "html": "<div class=\"cp\"><b>30% OFF</b><span>SAVE30</span></div>",
    "css": ".cp{display:flex;align-items:center;gap:14px;width:200px;padding:16px;border-radius:14px;background:linear-gradient(120deg,#ec4899,#be185d);color:#fff;position:relative}.cp::before,.cp::after{content:\"\";position:absolute;width:18px;height:18px;border-radius:50%;background:#141021;top:50%;transform:translateY(-50%)}.cp::before{left:-9px}.cp::after{right:-9px}.cp b{font:800 20px Outfit,system-ui}.cp span{font:600 12px 'IBM Plex Mono',monospace;border:1px dashed rgba(255,255,255,.6);padding:5px 9px;border-radius:6px}",
    "js": null,
    "bg": "#141021",
    "slug": "cards-coupon"
  },
  {
    "type": "comp",
    "cat": "cards",
    "name": "Music",
    "html": "<div class=\"mu\"><div class=\"ar\"></div><div><b>Midnight</b><span>Adham</span></div></div>",
    "css": ".mu{display:flex;align-items:center;gap:12px;width:200px;padding:14px;border-radius:16px;background:#15111f;border:1px solid #241d38}.mu .ar{width:48px;height:48px;border-radius:10px;background:linear-gradient(135deg,#3b82f6,#1d4ed8)}.mu b{display:block;color:#fff;font:600 14px Outfit,system-ui}.mu span{color:#3b82f6;font:500 12px Outfit,system-ui}",
    "js": null,
    "bg": "#141021",
    "slug": "cards-music"
  },
  {
    "type": "comp",
    "cat": "cards",
    "name": "Quote",
    "html": "<div class=\"qt\">\"Design is intelligence made visible.\"</div>",
    "css": ".qt{width:200px;padding:22px;border-radius:16px;background:#15111f;border:1px solid #241d38;color:#cfc7e8;font:600 15px Outfit,system-ui;font-style:italic;position:relative}.qt::before{content:\"\\201C\";position:absolute;top:-6px;left:10px;font-size:48px;color:#06b6d4}",
    "js": null,
    "bg": "#141021",
    "slug": "cards-quote"
  },
  {
    "type": "comp",
    "cat": "cards",
    "name": "Neon Frame",
    "html": "<div class=\"nf\">Neon</div>",
    "css": ".nf{width:160px;height:100px;border-radius:16px;background:#0d0a17;border:2px solid #10b981;box-shadow:0 0 14px #10b981,inset 0 0 14px #10b98155;display:flex;align-items:center;justify-content:center;color:#10b981;font:700 18px Outfit,system-ui;text-shadow:0 0 8px #10b981}",
    "js": null,
    "bg": "#141021",
    "slug": "cards-neon-frame"
  },
  {
    "type": "comp",
    "cat": "textfx",
    "name": "Liquid Fill",
    "html": "<div class=\"t\">FILL</div>",
    "css": ".t{font:900 50px Outfit,system-ui;color:#a855f733;background:linear-gradient(#a855f7,#7c3aed);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;-webkit-text-stroke:1px #a855f7;animation:lf 3s ease infinite}@keyframes lf{0%,100%{background-size:100% 0%}50%{background-size:100% 100%}}",
    "js": null,
    "bg": null,
    "slug": "textfx-liquid-fill"
  },
  {
    "type": "comp",
    "cat": "textfx",
    "name": "Glitch Slice",
    "html": "<div class=\"t\">SLICE</div>",
    "css": ".t{font:900 46px Outfit,system-ui;color:#fff;position:relative;animation:gs 3s infinite}.t::after{content:\"SLICE\";position:absolute;left:2px;top:0;color:#ec4899;clip-path:inset(0 0 55% 0);animation:gs2 2s infinite}@keyframes gs{0%,100%{transform:translate(0)}92%{transform:translate(-2px,1px)}}@keyframes gs2{0%,100%{transform:translate(0)}92%{transform:translate(3px,-2px)}}",
    "js": null,
    "bg": null,
    "slug": "textfx-glitch-slice"
  },
  {
    "type": "comp",
    "cat": "textfx",
    "name": "Bounce In",
    "html": "<div class=\"t\">BOUNCE</div>",
    "css": ".t{font:800 40px Outfit,system-ui;color:#3b82f6;animation:bo 1.2s ease infinite}@keyframes bo{0%,100%{transform:translateY(0)}30%{transform:translateY(-14px)}50%{transform:translateY(0)}}",
    "js": null,
    "bg": null,
    "slug": "textfx-bounce-in"
  },
  {
    "type": "comp",
    "cat": "textfx",
    "name": "Glow Breathe",
    "html": "<div class=\"t\">GLOW</div>",
    "css": ".t{font:800 44px Outfit,system-ui;color:#fff;animation:gb 2.5s ease infinite}@keyframes gb{0%,100%{text-shadow:0 0 6px #06b6d4}50%{text-shadow:0 0 22px #06b6d4,0 0 40px #0e7490}}",
    "js": null,
    "bg": null,
    "slug": "textfx-glow-breathe"
  },
  {
    "type": "comp",
    "cat": "textfx",
    "name": "Skew Hover",
    "html": "<div class=\"t\">SKEW</div>",
    "css": ".t{font:900 46px Outfit,system-ui;color:#10b981;cursor:pointer;transition:.3s}.t:hover{transform:skewX(-12deg);color:#047857;letter-spacing:4px}",
    "js": null,
    "bg": null,
    "slug": "textfx-skew-hover"
  },
  {
    "type": "comp",
    "cat": "badges",
    "name": "Shine Sweep",
    "html": "<span class=\"bg\">NEW</span>",
    "css": ".bg{position:relative;overflow:hidden;font:700 12px Outfit,system-ui;color:#fff;background:#a855f7;padding:6px 14px;border-radius:8px}.bg::after{content:\"\";position:absolute;top:0;left:-120%;width:50%;height:100%;background:linear-gradient(120deg,transparent,rgba(255,255,255,.6),transparent);transform:skewX(-20deg);animation:ss 2.5s infinite}@keyframes ss{0%,60%{left:-120%}100%{left:160%}}",
    "js": null,
    "bg": "#141021",
    "slug": "badges-shine-sweep"
  },
  {
    "type": "comp",
    "cat": "badges",
    "name": "Corner",
    "html": "<div class=\"cw\"><span class=\"bg\">SALE</span></div>",
    "css": ".cw{position:relative;width:90px;height:60px;background:#15111f;border:1px solid #241d38;border-radius:10px;overflow:hidden}.bg{position:absolute;top:9px;right:-22px;transform:rotate(45deg);font:700 10px Outfit,system-ui;color:#fff;background:#ec4899;padding:3px 24px}",
    "js": null,
    "bg": "#141021",
    "slug": "badges-corner"
  },
  {
    "type": "comp",
    "cat": "badges",
    "name": "Outline Dot",
    "html": "<span class=\"bg\"><i></i>Beta</span>",
    "css": ".bg{display:inline-flex;align-items:center;gap:7px;font:600 12px Outfit,system-ui;color:#3b82f6;border:1px solid #3b82f6;padding:5px 13px;border-radius:99px}.bg i{width:6px;height:6px;border-radius:50%;background:#3b82f6}",
    "js": null,
    "bg": "#141021",
    "slug": "badges-outline-dot"
  },
  {
    "type": "comp",
    "cat": "badges",
    "name": "Gradient Ring",
    "html": "<span class=\"bg\">VIP</span>",
    "css": ".bg{font:700 12px Outfit,system-ui;color:#fff;padding:6px 15px;border-radius:99px;background:#15111f;position:relative}.bg::before{content:\"\";position:absolute;inset:0;border-radius:99px;padding:1.5px;background:linear-gradient(120deg,#06b6d4,#0e7490);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude}",
    "js": null,
    "bg": "#141021",
    "slug": "badges-gradient-ring"
  },
  {
    "type": "comp",
    "cat": "toggles",
    "name": "Day Night",
    "html": "<label class=\"s\"><input type=\"checkbox\"><span></span></label>",
    "css": ".s input{display:none}.s span{display:block;width:70px;height:32px;border-radius:99px;background:linear-gradient(#a855f7,#7c3aed);position:relative;cursor:pointer;overflow:hidden;transition:.4s}.s span::after{content:\"\";position:absolute;top:3px;left:3px;width:26px;height:26px;border-radius:50%;background:#fde68a;box-shadow:0 0 12px #fde68a;transition:.4s}.s input:checked+span{background:linear-gradient(#1e1b4b,#0d0a17)}.s input:checked+span::after{transform:translateX(38px);background:#cbd5e1;box-shadow:0 0 12px #cbd5e1}",
    "js": null,
    "bg": "#141021",
    "slug": "toggles-day-night"
  },
  {
    "type": "comp",
    "cat": "toggles",
    "name": "Loading Toggle",
    "html": "<label class=\"s\"><input type=\"checkbox\" checked><span></span></label>",
    "css": ".s input{display:none}.s span{display:block;width:58px;height:30px;border-radius:99px;background:#2a2440;position:relative;cursor:pointer;transition:.3s}.s span::after{content:\"\";position:absolute;top:4px;left:4px;width:22px;height:22px;border-radius:50%;border:2px solid #fff;border-top-color:transparent;transition:.3s}.s input:checked+span{background:#ec4899}.s input:checked+span::after{transform:translateX(28px);animation:sp .7s linear infinite}@keyframes sp{to{transform:translateX(28px) rotate(360deg)}}",
    "js": null,
    "bg": "#141021",
    "slug": "toggles-loading-toggle"
  },
  {
    "type": "comp",
    "cat": "toggles",
    "name": "Heart Like",
    "html": "<label class=\"s\"><input type=\"checkbox\"><span>♥</span></label>",
    "css": ".s input{display:none}.s span{font-size:30px;color:#3a3450;cursor:pointer;transition:.2s}.s input:checked+span{color:#3b82f6;animation:hp .4s ease}@keyframes hp{50%{transform:scale(1.4)}}",
    "js": null,
    "bg": "#141021",
    "slug": "toggles-heart-like"
  },
  {
    "type": "comp",
    "cat": "inputs",
    "name": "Gradient Border",
    "html": "<div class=\"gi\"><input placeholder=\"Type here…\"></div>",
    "css": ".gi{width:230px;border-radius:12px;padding:1.5px;background:linear-gradient(120deg,#a855f7,#7c3aed)}.gi input{width:100%;font:500 15px Outfit,system-ui;padding:12px 15px;border:none;border-radius:11px;background:#141021;color:#fff;outline:none}",
    "js": null,
    "bg": "#141021",
    "slug": "inputs-gradient-border"
  },
  {
    "type": "comp",
    "cat": "inputs",
    "name": "Search Glow",
    "html": "<div class=\"sg\"><span>⌕</span><input placeholder=\"Search…\"></div>",
    "css": ".sg{display:flex;align-items:center;gap:9px;width:230px;background:#15111f;border:1.5px solid #2a2440;border-radius:99px;padding:12px 18px;transition:.25s}.sg span{color:#ec4899}.sg input{flex:1;background:none;border:none;outline:none;color:#fff;font:500 14px Outfit,system-ui}.sg:focus-within{border-color:#ec4899;box-shadow:0 0 18px #ec489944}",
    "js": null,
    "bg": "#141021",
    "slug": "inputs-search-glow"
  },
  {
    "type": "comp",
    "cat": "inputs",
    "name": "Checkbox Card",
    "html": "<label class=\"cc\"><input type=\"checkbox\" checked><span>Premium plan</span></label>",
    "css": ".cc{display:flex;align-items:center;gap:12px;width:210px;padding:14px 16px;border-radius:12px;background:#15111f;border:1.5px solid #2a2440;color:#fff;font:600 14px Outfit,system-ui;cursor:pointer}.cc input{display:none}.cc span::before{content:\"\";display:inline-block;width:18px;height:18px;border-radius:6px;border:2px solid #3a3450;margin-right:10px;vertical-align:-4px}.cc input:checked~span::before{background:#3b82f6;border-color:#3b82f6}.cc:has(input:checked){border-color:#3b82f6}",
    "js": null,
    "bg": "#141021",
    "slug": "inputs-checkbox-card"
  }
];
