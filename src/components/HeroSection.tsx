import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback } from "react";
import heroBg from "@/assets/gallery-machine3.jpeg";

const phrases = [
  "Quality Plastic Packaging",
  "Reliable Manufacturing Solutions",
  "Trusted Suppliers in Zimbabwe",
];

const TYPING_SPEED = 70;
const DELETING_SPEED = 40;
const PAUSE_AFTER_TYPE = 2000;

const useTypewriter = (words: string[]) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const current = words[wordIndex];
    if (!isDeleting) {
      setText(current.slice(0, text.length + 1));
      if (text.length + 1 === current.length) {
        setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
        return;
      }
    } else {
      setText(current.slice(0, text.length - 1));
      if (text.length - 1 === 0) {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
        return;
      }
    }
  }, [text, wordIndex, isDeleting, words]);

  useEffect(() => {
    const speed = isDeleting ? DELETING_SPEED : TYPING_SPEED;
    const id = setTimeout(tick, speed);
    return () => clearTimeout(id);
  }, [tick, isDeleting]);

  return text;
};

const HeroSection = () => {
  const typed = useTypewriter(phrases);
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative lg:min-h-[100svh] flex flex-col overflow-hidden bg-background pt-20 sm:pt-24 pb-10 sm:pb-16"
    >
      {/* Ambient premium background: cobalt + scarlet blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/20 blur-3xl animate-float-slow" />
        <div
          className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-danger/20 blur-3xl animate-float-slow"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_75%)]" />
      </div>

      {/* Editorial magazine top strip */}
      <div className="relative container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex items-center justify-between gap-3 text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] sm:tracking-[0.35em] text-muted-foreground border-b border-border pb-3 sm:pb-4">
          <span className="text-scarlet font-semibold whitespace-nowrap">Issue 001</span>
          <span className="hidden sm:inline whitespace-nowrap">Harare · Zimbabwe</span>
          <span className="text-cobalt font-semibold text-right">Est. Premium Manufacturing</span>
        </div>
      </div>

      {/* Magazine grid layout */}
      <div className="relative container mx-auto px-4 md:px-8 max-w-7xl lg:flex-1 grid grid-cols-12 gap-8 md:gap-10 mt-8 sm:mt-10 md:mt-16">
        {/* Left rail — vertical tag */}
        <aside className="hidden lg:flex col-span-1 flex-col items-start justify-between py-4">
          <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground [writing-mode:vertical-rl] rotate-180">
            Power Milt · Manufacturer & Supplier
          </span>
          <div className="w-px h-24 accent-line" />
        </aside>

        {/* Main headline */}
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center animate-reveal">
          <p className="text-[10px] md:text-xs font-semibold tracking-[0.3em] text-scarlet uppercase mb-4 sm:mb-6">
            — Feature Story
          </p>

          <h1 className="font-display text-[2.5rem] xs:text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-black leading-[1] sm:leading-[0.9] tracking-[-0.04em] sm:tracking-[-0.045em] text-foreground break-words">
            <span className="block">The art of</span>
            <span className="block min-h-[1.1em]">
              <span className="text-premium-gradient">{typed}</span>
              <span className="inline-block w-[5px] h-[0.7em] bg-danger ml-1 align-middle animate-blink" />
            </span>
          </h1>

          <div className="mt-6 sm:mt-10 flex items-start gap-4 sm:gap-6 max-w-2xl">
            <span className="mt-2 w-8 sm:w-10 h-[2px] accent-line shrink-0" />
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
              High-quality plastic containers, cups, plugs, and preforms —
              engineered in Harare, trusted across Zimbabwe and beyond.
            </p>
          </div>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-5">
            <Button
              onClick={() => scrollTo("#contact")}
              size="lg"
              className="w-full sm:w-auto rounded-full px-8 h-12 sm:h-14 text-sm sm:text-base font-semibold shadow-premium bg-primary hover:bg-primary/90 sm:hover:scale-[1.03] transition-all duration-300"
            >
              Request a Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <button
              onClick={() => scrollTo("#products")}
              className="group text-base font-medium text-foreground/80 hover:text-scarlet transition-colors relative"
            >
              View products
              <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">›</span>
            </button>
          </div>
        </div>

        {/* Right editorial column */}
        <aside className="col-span-12 lg:col-span-4 flex flex-col gap-4 sm:gap-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <div className="relative group">
            {/* Ambient glow behind card */}
            <div className="absolute -inset-6 bg-gradient-to-br from-primary/40 via-transparent to-danger/40 blur-3xl opacity-60 group-hover:opacity-90 transition-opacity duration-700" />

            {/* Corner brackets */}
            <span className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-scarlet z-20" />
            <span className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-cobalt z-20" />

            <div className="relative rounded-[20px] sm:rounded-[28px] overflow-hidden aspect-[4/3] sm:aspect-[4/5] shadow-premium ring-1 ring-white/10">
              <img
                src={heroBg}
                alt="Premium plastic manufacturing — PET preforms and containers"
                className="w-full h-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.08]"
                width={1024}
                height={1280}
              />

              {/* Layered cinematic gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-transparent to-danger/20 mix-blend-overlay" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[28px] pointer-events-none" />

              {/* Top badge */}
              <div className="absolute top-5 left-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-danger animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/90 font-semibold">
                  Live · Production
                </span>
              </div>

              {/* Floating glass caption */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                <div className="rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 p-3 sm:p-4 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-white/70">Facility</p>
                      <p className="font-display font-bold text-sm sm:text-lg leading-tight text-white">
                        Workington, Harare
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="group/stat relative rounded-xl border border-border bg-card/60 backdrop-blur-sm p-4 sm:p-5 hover:border-primary/60 hover:-translate-y-1 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cobalt to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity" />
              <p className="font-display text-2xl sm:text-3xl font-black text-cobalt tracking-tight">10<span className="text-scarlet">+</span></p>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">Years crafting</p>
            </div>
            <div className="group/stat relative rounded-xl border border-border bg-card/60 backdrop-blur-sm p-4 sm:p-5 hover:border-danger/60 hover:-translate-y-1 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-scarlet to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity" />
              <p className="font-display text-2xl sm:text-3xl font-black text-scarlet tracking-tight">1M<span className="text-cobalt">+</span></p>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">Units shipped</p>
            </div>
          </div>
        </aside>
      </div>

      {/* Bottom marquee */}
      <div className="relative mt-10 sm:mt-12 md:mt-16 overflow-hidden border-y border-border py-3 sm:py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex items-center gap-6 sm:gap-12 px-4 sm:px-6">
              {["Containers", "Cups", "Plugs", "Preforms", "Custom Molding", "Bulk Supply", "Export Ready"].map((t, i) => (
                <span key={`${k}-${i}`} className="flex items-center gap-6 sm:gap-12">
                  <span className="font-display text-lg sm:text-2xl md:text-4xl font-black tracking-tight text-foreground/80">
                    {t}
                  </span>
                  <span className={`w-2 h-2 rounded-full ${i % 2 === 0 ? "bg-cobalt" : "bg-scarlet"}`} />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
