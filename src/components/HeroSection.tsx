import { ArrowRight, PlayCircle, ShieldCheck, Factory, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/gallery-location.jpeg";
import productImg from "@/assets/product-containers-set.jpeg";

const HeroSection = () => {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-background pt-28 pb-20"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[560px] h-[560px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-[520px] h-[520px] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,transparent_0%,hsl(var(--background))_70%)]" />
      </div>

      <div className="relative container mx-auto px-4 md:px-8 max-w-7xl grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left content */}
        <div className="lg:col-span-6 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium tracking-wide mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Trusted plastic manufacturer · Harare, Zimbabwe
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-[-0.04em] text-foreground">
            Premium plastic
            <br />
            packaging,{" "}
            <span className="text-primary">crafted</span>
            <br />
            with precision.
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed font-light">
            From containers and cups to preforms and closures — Power Milt delivers
            enterprise-grade plastic solutions engineered for scale, quality, and reliability.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              onClick={() => scrollTo("#contact")}
              size="lg"
              className="rounded-full px-8 h-14 text-base font-semibold bg-primary hover:bg-primary/90 shadow-[0_20px_50px_-15px_hsl(var(--primary)/0.5)] hover:scale-[1.03] transition-all"
            >
              Request a Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              onClick={() => scrollTo("#products")}
              variant="outline"
              size="lg"
              className="rounded-full px-8 h-14 text-base font-semibold border-2 hover:bg-secondary gap-2"
            >
              <PlayCircle className="h-5 w-5" />
              Explore Products
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { icon: Factory, label: "In-house production" },
              { icon: ShieldCheck, label: "Quality assured" },
              { icon: Truck, label: "Nationwide supply" },
            ].map((f) => (
              <div key={f.label} className="flex flex-col items-start gap-2">
                <f.icon className="h-5 w-5 text-primary" />
                <p className="text-xs text-muted-foreground font-medium leading-tight">{f.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right image */}
        <div className="lg:col-span-6 relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_40px_120px_-30px_hsl(var(--primary)/0.4)] group">
            <img
              src={heroImg}
              alt="Power Milt manufacturing facility"
              className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] opacity-80 mb-1">Our Facility</p>
                <p className="font-display font-bold text-2xl">Workington, Harare</p>
              </div>
            </div>
          </div>

          {/* Floating glass card 1 */}
          <div className="absolute -bottom-8 -left-6 md:-left-10 w-56 rounded-2xl bg-background/80 backdrop-blur-xl border border-border shadow-2xl p-5 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-display font-bold text-lg text-foreground leading-none">100%</p>
                <p className="text-[11px] text-muted-foreground mt-1">Quality tested</p>
              </div>
            </div>
          </div>

          {/* Floating glass card 2 */}
          <div className="absolute -top-6 -right-4 md:-right-8 w-52 rounded-2xl overflow-hidden shadow-2xl border border-border animate-fade-up" style={{ animationDelay: "0.8s" }}>
            <img src={productImg} alt="Products" className="w-full h-32 object-cover" />
            <div className="p-4 bg-background/90 backdrop-blur-xl">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Featured</p>
              <p className="font-display font-semibold text-sm text-foreground mt-1">Container Range</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
