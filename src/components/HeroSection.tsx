import { ArrowRight, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback } from "react";
import heroBg from "@/assets/hero-products-collage.jpeg";

const phrases = [
  "Quality Plastic Packaging",
  "Reliable Manufacturing Solutions",
  "Trusted Plastic Suppliers in Zimbabwe",
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
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background pt-24 pb-12">
      <div className="relative container mx-auto px-4 text-center max-w-5xl flex-shrink-0">
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-semibold leading-[0.95] tracking-tight text-foreground mb-6 animate-fade-up">
          {typed}
          <span className="inline-block w-[3px] h-[0.7em] bg-foreground ml-1 align-middle animate-blink" />
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed font-light animate-fade-up" style={{ animationDelay: "0.2s" }}>
          High-quality plastic containers, cups, plugs, and preforms for businesses across Zimbabwe and beyond.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 text-base md:text-lg font-medium animate-fade-up" style={{ animationDelay: "0.35s" }}>
          <button onClick={() => scrollTo("#contact")} className="text-foreground underline-offset-4 hover:underline transition">
            Request a quote ›
          </button>
          <button onClick={() => scrollTo("#products")} className="text-muted-foreground hover:text-foreground transition">
            View products ›
          </button>
        </div>
      </div>

      <div className="relative w-full mt-16 md:mt-20 animate-fade-up" style={{ animationDelay: "0.5s" }}>
        <div className="container mx-auto px-4">
          <div className="rounded-3xl overflow-hidden aspect-[16/8] md:aspect-[21/9] bg-secondary">
            <img src={heroBg} alt="Plastic manufacturing" className="w-full h-full object-cover" width={1920} height={1080} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
