import { useState, useEffect, useCallback, useMemo } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

import locationImg from "@/assets/gallery-location.jpeg";
import machine1Img from "@/assets/gallery-machine1.jpeg";
import machine3Img from "@/assets/gallery-machine3.jpeg";
import containersImg from "@/assets/product-containers.jpg";
import cupsImg from "@/assets/product-cups.jpg";
import plugsImg from "@/assets/product-plugs.jpg";
import cupsRealImg from "@/assets/gallery-cups-real.jpeg";
import bottlesImg from "@/assets/gallery-bottles.jpeg";
import machinePreformsImg from "@/assets/gallery-machine-preforms.jpeg";
import bottlingLineImg from "@/assets/gallery-bottling-line.jpeg";
import machineOutputImg from "@/assets/gallery-machine-output.jpeg";

const images = [
  { src: machine3Img, title: "Blow Moulding Machine", category: "Manufacturing" },
  { src: machinePreformsImg, title: "Preform Production", category: "Manufacturing" },
  { src: bottlingLineImg, title: "Bottling Line", category: "Manufacturing" },
  { src: machineOutputImg, title: "Manufacturing Output", category: "Manufacturing" },
  { src: machine1Img, title: "Production Inspection", category: "Manufacturing" },
  { src: locationImg, title: "Workington Facility", category: "Facility" },
  { src: bottlesImg, title: "PET Bottles", category: "Products" },
  { src: cupsRealImg, title: "Drinking Cups", category: "Products" },
  { src: containersImg, title: "Containers", category: "Products" },
  { src: cupsImg, title: "Plastic Cups", category: "Products" },
  { src: plugsImg, title: "Plugs & Caps", category: "Products" },
];

const GallerySection = () => {
  const ref = useScrollAnimation();
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = useCallback(
    () => setSlideIndex((i) => (i - 1 + images.length) % images.length),
    []
  );
  const nextSlide = useCallback(
    () => setSlideIndex((i) => (i + 1) % images.length),
    []
  );

  // Supporting collage tiles derived from current featured index
  const supporting = useMemo(() => {
    return [1, 2, 3].map((offset) => images[(slideIndex + offset) % images.length]);
  }, [slideIndex]);

  const featured = images[slideIndex];

  return (
    <section
      id="gallery"
      className="section-padding relative overflow-hidden bg-background"
      ref={ref}
    >
      {/* Ambient light blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-24 w-[480px] h-[480px] rounded-full bg-danger/10 blur-[120px]" />

      <div className="container mx-auto relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-foreground/5 border border-border/60 backdrop-blur-sm mb-6">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-foreground/70">
              Gallery
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[0.95]">
            Inside <span className="text-primary">Power</span>
            <span className="text-danger">Milt</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mt-6 leading-relaxed">
            A closer look at our facility, machinery, and the products we craft
            with precision every day.
          </p>
        </div>

        {/* Premium collage */}
        <div className="animate-on-scroll grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
          {/* Featured — large focal image */}
          <div className="lg:col-span-8 relative group">
            <div className="relative aspect-[16/11] lg:aspect-[16/12] overflow-hidden rounded-[28px] md:rounded-[32px] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.45)] ring-1 ring-white/10">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    i === slideIndex
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105"
                  }`}
                />
              ))}

              {/* Layered gradient masks for readability & depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-danger/15 mix-blend-overlay" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[28px] md:rounded-[32px] pointer-events-none" />

              {/* Floating glassmorphism caption card */}
              <div className="absolute left-5 right-5 bottom-5 md:left-8 md:right-auto md:bottom-8 md:max-w-md">
                <div className="rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 p-5 md:p-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-danger animate-pulse" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/80">
                      {featured.category}
                    </span>
                  </div>
                  <h3 className="font-display text-white text-2xl md:text-3xl font-bold leading-tight tracking-tight">
                    {featured.title}
                  </h3>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/15">
                    <span className="text-xs text-white/60 tabular-nums">
                      {String(slideIndex + 1).padStart(2, "0")}
                      <span className="mx-1.5 text-white/30">/</span>
                      {String(images.length).padStart(2, "0")}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={prevSlide}
                        aria-label="Previous"
                        className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md text-white flex items-center justify-center transition-all hover:scale-105 border border-white/20"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button
                        onClick={nextSlide}
                        aria-label="Next"
                        className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md text-white flex items-center justify-center transition-all hover:scale-105 border border-white/20"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category chip top-right */}
              <div className="absolute top-5 right-5 md:top-6 md:right-6">
                <div className="px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90">
                  Featured
                </div>
              </div>
            </div>
          </div>

          {/* Supporting collage — stacked layered tiles */}
          <div className="lg:col-span-4 flex flex-col gap-5 md:gap-6">
            {supporting.map((img, i) => (
              <div
                key={`${img.title}-${i}`}
                className="relative group overflow-hidden rounded-[24px] md:rounded-[28px] flex-1 min-h-[160px] lg:min-h-0 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.4)] ring-1 ring-white/10"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                />
                {/* Depth masks */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div
                  className={`absolute inset-0 mix-blend-overlay opacity-70 ${
                    i % 2 === 0
                      ? "bg-gradient-to-br from-primary/25 to-transparent"
                      : "bg-gradient-to-tl from-danger/25 to-transparent"
                  }`}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[24px] md:rounded-[28px] pointer-events-none" />

                {/* Mini glass caption */}
                <div className="absolute left-4 right-4 bottom-4">
                  <div className="inline-flex flex-col rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 px-3.5 py-2.5">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/70">
                      {img.category}
                    </span>
                    <span className="font-display text-white text-sm md:text-base font-semibold leading-tight tracking-tight mt-0.5">
                      {img.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress dots + CTA */}
        <div className="mt-14 md:mt-16 flex flex-col md:flex-row items-center justify-between gap-8 animate-on-scroll">
          <div className="flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlideIndex(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === slideIndex
                    ? "w-10 bg-foreground"
                    : "w-4 bg-foreground/20 hover:bg-foreground/40"
                }`}
              />
            ))}
          </div>

          <Link to="/gallery">
            <Button
              size="lg"
              className="gap-2 rounded-full px-8 h-12 bg-foreground text-background hover:bg-foreground/90 shadow-[0_10px_40px_-10px_hsl(var(--foreground)/0.4)]"
            >
              Explore Full Gallery
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
