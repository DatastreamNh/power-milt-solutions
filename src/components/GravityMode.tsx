import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import { Sparkles, RotateCcw } from "lucide-react";

/**
 * GravityMode
 * ------------
 * A floating control that turns the entire page into a Matter.js physics playground.
 * DOM elements become rigid bodies (no <canvas> UI) that can be dragged, thrown and spun.
 * Preserves original styling until activated; "Reset Layout" animates everything back home.
 */

// Selectors we treat as physics candidates
const SELECTORS = [
  "h1", "h2", "h3", "h4",
  "p", "a", "button",
  "img",
  "li",
  "span[data-gravity]",
  ".gravity-item",
];

// Elements we skip (containers, overlays, our own controls, etc.)
const SKIP = new Set(["NAV", "HEADER", "FOOTER", "SECTION", "MAIN", "HTML", "BODY"]);

type Snapshot = {
  el: HTMLElement;
  body: Matter.Body;
  originTransform: string;
  originTransition: string;
  originPosition: string;
  originZ: string;
  originShadow: string;
  originWillChange: string;
  originLeft: string;
  originTop: string;
  originWidth: string;
  originHeight: string;
  homeX: number;
  homeY: number;
  homeAngle: number;
  isHeavy: boolean;
};

const GravityMode = () => {
  const [active, setActive] = useState(false);
  const engineRef = useRef<Matter.Engine | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  const mouseConstraintRef = useRef<Matter.MouseConstraint | null>(null);
  const snapshotsRef = useRef<Snapshot[]>([]);
  const rafRef = useRef<number | null>(null);
  const wallsRef = useRef<Matter.Body[]>([]);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Subtle splash sound via WebAudio (no external asset)
  const playSplash = (intensity: number) => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      const now = ctx.currentTime;
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "sine";
      o.frequency.setValueAtTime(180 + Math.random() * 60, now);
      o.frequency.exponentialRampToValueAtTime(60, now + 0.25);
      g.gain.setValueAtTime(Math.min(0.18, intensity * 0.02), now);
      g.gain.exponentialRampToValueAtTime(0.0001, now + 0.3);
      o.connect(g).connect(ctx.destination);
      o.start(now);
      o.stop(now + 0.32);
    } catch { /* silent */ }
  };

  const activate = () => {
    if (active) return;
    setActive(true);

    const engine = Matter.Engine.create();
    engine.gravity.y = 1;
    engineRef.current = engine;

    const runner = Matter.Runner.create();
    runnerRef.current = runner;

    // World bounds — keep objects inside the viewport
    const w = window.innerWidth;
    const h = window.innerHeight;
    const wallThickness = 200;
    const walls = [
      Matter.Bodies.rectangle(w / 2, h + wallThickness / 2, w * 2, wallThickness, { isStatic: true }), // floor
      Matter.Bodies.rectangle(w / 2, -wallThickness / 2, w * 2, wallThickness, { isStatic: true }),    // ceiling
      Matter.Bodies.rectangle(-wallThickness / 2, h / 2, wallThickness, h * 2, { isStatic: true }),    // left
      Matter.Bodies.rectangle(w + wallThickness / 2, h / 2, wallThickness, h * 2, { isStatic: true }), // right
    ];
    wallsRef.current = walls;
    Matter.World.add(engine.world, walls);

    // Collect elements
    const els = new Set<HTMLElement>();
    SELECTORS.forEach((sel) => {
      document.querySelectorAll<HTMLElement>(sel).forEach((el) => {
        if (SKIP.has(el.tagName)) return;
        if (el.closest("[data-gravity-ignore]")) return;
        const r = el.getBoundingClientRect();
        if (r.width < 8 || r.height < 8) return;
        if (r.width > window.innerWidth * 0.95 && r.height > window.innerHeight * 0.6) return;
        // Skip descendants when an ancestor is already picked (avoid nested doubles)
        for (const picked of els) {
          if (picked.contains(el) || el.contains(picked)) return;
        }
        els.add(el);
      });
    });

    const snapshots: Snapshot[] = [];
    els.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      const tag = el.tagName.toLowerCase();
      const isBottle = tag === "img" || el.dataset.heavy === "true";
      const isText = ["h1", "h2", "h3", "h4", "p", "span", "a", "li"].includes(tag);
      const density = isBottle ? 0.02 : isText ? 0.001 : 0.005;

      const body = Matter.Bodies.rectangle(
        rect.left + rect.width / 2,
        rect.top + rect.height / 2,
        rect.width,
        rect.height,
        {
          density,
          friction: 0.4,
          frictionAir: 0.02,
          restitution: isBottle ? 0.45 : 0.65,
          angle: 0,
        }
      );

      snapshots.push({
        el,
        body,
        originTransform: el.style.transform,
        originTransition: el.style.transition,
        originPosition: el.style.position,
        originZ: el.style.zIndex,
        originShadow: el.style.boxShadow,
        originWillChange: el.style.willChange,
        originLeft: el.style.left,
        originTop: el.style.top,
        originWidth: el.style.width,
        originHeight: el.style.height,
        homeX: rect.left + rect.width / 2,
        homeY: rect.top + rect.height / 2,
        homeAngle: 0,
        isHeavy: isBottle,
      });

      // Pin the element to viewport coordinates so transforms work independent of layout
      el.style.position = "fixed";
      el.style.left = `${rect.left}px`;
      el.style.top = `${rect.top}px`;
      el.style.width = `${rect.width}px`;
      el.style.height = `${rect.height}px`;
      el.style.margin = "0";
      el.style.zIndex = "50";
      el.style.willChange = "transform";
      el.style.transition = "box-shadow 200ms ease";
    });

    snapshotsRef.current = snapshots;
    Matter.World.add(engine.world, snapshots.map((s) => s.body));

    // Mouse / touch drag support
    const mouse = Matter.Mouse.create(document.body);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.2, render: { visible: false } },
    });
    // Allow scroll to still work over the page
    (mouse as any).element.removeEventListener("mousewheel", (mouse as any).mousewheel);
    (mouse as any).element.removeEventListener("DOMMouseScroll", (mouse as any).mousewheel);
    mouseConstraintRef.current = mouseConstraint;
    Matter.World.add(engine.world, mouseConstraint);

    // Splash on strong collisions
    Matter.Events.on(engine, "collisionStart", (evt) => {
      for (const pair of evt.pairs) {
        const a = pair.bodyA, b = pair.bodyB;
        const speed = Math.max(a.speed, b.speed);
        const heavy = (a.mass > 0.5 || b.mass > 0.5);
        if (heavy && speed > 4) playSplash(speed);
      }
    });

    Matter.Runner.run(runner, engine);

    // Sync loop — DOM transforms follow bodies at 60fps
    const sync = () => {
      for (const s of snapshotsRef.current) {
        const { body, el, homeX, homeY } = s;
        const dx = body.position.x - homeX;
        const dy = body.position.y - homeY;
        const moving = Math.hypot(body.velocity.x, body.velocity.y) > 0.4;
        el.style.transform = `translate3d(${dx}px, ${dy}px, 0) rotate(${body.angle}rad)`;
        el.style.boxShadow = moving
          ? `0 ${8 + Math.min(24, Math.abs(body.velocity.y) * 2)}px ${20 + Math.min(40, Math.abs(body.velocity.y) * 3)}px rgba(0,0,0,0.35)`
          : "0 6px 18px rgba(0,0,0,0.18)";
      }
      rafRef.current = requestAnimationFrame(sync);
    };
    rafRef.current = requestAnimationFrame(sync);

    // Resize walls on viewport change
    const onResize = () => {
      const nw = window.innerWidth, nh = window.innerHeight;
      Matter.Body.setPosition(walls[0], { x: nw / 2, y: nh + 100 });
      Matter.Body.setPosition(walls[1], { x: nw / 2, y: -100 });
      Matter.Body.setPosition(walls[2], { x: -100, y: nh / 2 });
      Matter.Body.setPosition(walls[3], { x: nw + 100, y: nh / 2 });
    };
    window.addEventListener("resize", onResize);
    (engine as any)._onResize = onResize;
  };

  const reset = () => {
    const snaps = snapshotsRef.current;
    // Stop physics and animate elements back home
    if (runnerRef.current) Matter.Runner.stop(runnerRef.current);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    snaps.forEach((s) => {
      s.el.style.transition = "transform 900ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 400ms ease";
      s.el.style.transform = "translate3d(0,0,0) rotate(0rad)";
      s.el.style.boxShadow = s.originShadow || "";
    });

    window.setTimeout(() => {
      // Restore original inline styles
      snaps.forEach((s) => {
        s.el.style.transform = s.originTransform;
        s.el.style.transition = s.originTransition;
        s.el.style.position = s.originPosition;
        s.el.style.zIndex = s.originZ;
        s.el.style.boxShadow = s.originShadow;
        s.el.style.willChange = s.originWillChange;
        s.el.style.left = s.originLeft;
        s.el.style.top = s.originTop;
        s.el.style.width = s.originWidth;
        s.el.style.height = s.originHeight;
        s.el.style.margin = "";
      });

      // Teardown engine
      if (engineRef.current) {
        const eng = engineRef.current;
        if ((eng as any)._onResize) window.removeEventListener("resize", (eng as any)._onResize);
        Matter.World.clear(eng.world, false);
        Matter.Engine.clear(eng);
      }
      engineRef.current = null;
      runnerRef.current = null;
      mouseConstraintRef.current = null;
      snapshotsRef.current = [];
      setActive(false);
    }, 950);
  };

  useEffect(() => () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (runnerRef.current) Matter.Runner.stop(runnerRef.current);
  }, []);

  return (
    <div
      data-gravity-ignore
      className="fixed bottom-6 left-6 z-[9999] flex gap-2"
    >
      {!active ? (
        <button
          onClick={activate}
          className="flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2.5 text-xs font-semibold tracking-wide shadow-xl hover:scale-[1.03] transition-transform"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Gravity Mode
        </button>
      ) : (
        <button
          onClick={reset}
          className="flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2.5 text-xs font-semibold tracking-wide shadow-xl hover:scale-[1.03] transition-transform"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Reset Layout
        </button>
      )}
    </div>
  );
};

export default GravityMode;
