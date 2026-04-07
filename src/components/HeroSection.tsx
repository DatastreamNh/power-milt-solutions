import { ArrowRight, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Plastic manufacturing facility" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/75 to-navy/50" />
      </div>

      <div className="relative container mx-auto px-4 py-32 md:py-0">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-6 animate-fade-up">
            <Package className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Zimbabwe's Trusted Packaging Partner
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <span className="text-danger">Quality</span> Plastic Packaging{" "}
            <span className="text-primary">You Can Trust</span>
          </h1>

          <p className="text-lg md:text-xl text-navy-foreground/70 mb-8 max-w-xl animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Specializing in high-quality plastic containers, cups, plugs, and preforms for businesses across Zimbabwe and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.45s" }}>
            <Button size="lg" className="gap-2 text-base" onClick={() => scrollTo("#contact")}>
              Request a Quote
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 text-base border-navy-foreground/30 text-navy-foreground hover:bg-navy-foreground/10"
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
