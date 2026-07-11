import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback } from "react";
import heroBg from "@/assets/hero-products-collage.jpeg";

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
      className="relative min-h-screen flex flex-col overflow-hidden bg-background pt-24 pb-16"
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
        <div className="flex items-center justify-between text-[10px] md:text-xs uppercase tracking-[0.35em] text-muted-foreground border-b border-border pb-4">
          <span className="text-scarlet font-semibold">Issue 001</span>
          <span className="hidden md:inline">Harare · Zimbabwe</span>
          <span className="text-cobalt font-semibold">Est. Premium Manufacturing</span>
        </div>
      </div>

      {/* Magazine grid layout */}
      <div className="relative container mx-auto px-4 md:px-8 max-w-7xl flex-1 grid grid-cols-12 gap-6 md:gap-10 mt-10 md:mt-16">
        {/* Left rail — vertical tag */}
        <aside className="hidden lg:flex col-span-1 flex-col items-start justify-between py-4">
          <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground [writing-mode:vertical-rl] rotate-180">
            Power Milt · Manufacturer & Supplier
          </span>
          <div className="w-px h-24 accent-line" />
        </aside>

        {/* Main headline */}
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center animate-reveal">
          <p className="text-[11px] md:text-xs font-semibold tracking-[0.3em] text-scarlet uppercase mb-6">
            — Feature Story
          </p>

          <h1 className="font-display text-[3.25rem] sm:text-6xl md:text-7xl lg:text-[7.5rem] font-black leading-[0.9] tracking-[-0.045em] text-foreground">
            <span className="block">The art of</span>
            <span className="block text-premium-gradient">{typed}</span>
            <span className="inline-block w-[6px] h-[0.7em] bg-danger ml-1 align-middle animate-blink" />
          </h1>

          <div className="mt-10 flex items-start gap-6 max-w-2xl">
            <span className="mt-2 w-10 h-[2px] accent-line shrink-0" />
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
              High-quality plastic containers, cups, plugs, and preforms —
              engineered in Harare, trusted across Zimbabwe and beyond.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Button
              onClick={() => scrollTo("#contact")}
              size="lg"
              className="rounded-full px-8 h-14 text-base font-semibold shadow-premium bg-primary hover:bg-primary/90 hover:scale-[1.03] transition-all duration-300"
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
        <aside className="col-span-12 lg:col-span-4 flex flex-col gap-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-premium group">
            <img
              src={heroBg}
              alt="Plastic manufacturing"
              className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
              width={800}
              height={1000}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent mix-blend-multiply" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-primary-foreground">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] opacity-80">Facility</p>
                <p className="font-display font-bold text-xl leading-tight">Workington, Harare</p>
              </div>
              <span className="w-2 h-2 rounded-full bg-danger animate-pulse" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-border bg-card/60 backdrop-blur-sm p-5 hover:border-primary/60 transition-colors">
              <p className="font-display text-3xl font-black text-cobalt tracking-tight">10<span className="text-scarlet">+</span></p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">Years crafting</p>
            </div>
            <div className="rounded-xl border border-border bg-card/60 backdrop-blur-sm p-5 hover:border-danger/60 transition-colors">
              <p className="font-display text-3xl font-black text-scarlet tracking-tight">1M<span className="text-cobalt">+</span></p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">Units shipped</p>
            </div>
          </div>
        </aside>
      </div>

      {/* Bottom marquee */}
      <div className="relative mt-12 md:mt-16 overflow-hidden border-y border-border py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex items-center gap-12 px-6">
              {["Containers", "Cups", "Plugs", "Preforms", "Custom Molding", "Bulk Supply", "Export Ready"].map((t, i) => (
                <span key={`${k}-${i}`} className="flex items-center gap-12">
                  <span className="font-display text-2xl md:text-4xl font-black tracking-tight text-foreground/80">
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
