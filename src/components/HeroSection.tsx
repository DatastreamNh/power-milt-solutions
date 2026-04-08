import { ArrowRight, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback } from "react";
import heroBg from "@/assets/hero-bg.jpg";

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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Plastic manufacturing facility" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/60 to-foreground/80" />
      </div>

      <div className="relative container mx-auto px-4 py-32 md:py-0">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8 animate-fade-up">
            <Package className="h-4 w-4 text-white/80" />
            <span className="text-sm font-medium text-white/80 tracking-wide">
              Zimbabwe's Trusted Packaging Partner
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-4 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <span className="text-white">{typed}</span>
            <span className="inline-block w-[3px] h-[0.75em] bg-white ml-1 align-middle animate-blink" />
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl font-light text-white/60 leading-relaxed mb-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <span className="text-primary font-medium">You Can Trust</span>
          </p>

          <p className="text-base md:text-lg text-white/50 mb-10 max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Specializing in high-quality plastic containers, cups, plugs, and preforms for businesses across Zimbabwe and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.45s" }}>
            <Button size="lg" className="gap-2 text-base h-14 px-8 rounded-full" onClick={() => scrollTo("#contact")}>
              Request a Quote
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 text-base h-14 px-8 rounded-full border-white/20 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm"
              onClick={() => scrollTo("#products")}
            >
              View Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
