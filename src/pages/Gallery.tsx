import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

import locationImg from "@/assets/gallery-location.jpeg";
import machine1Img from "@/assets/gallery-machine1.jpeg";
import machine3Img from "@/assets/gallery-machine3.jpeg";
import containersImg from "@/assets/product-containers.jpg";
import cupsImg from "@/assets/product-cups.jpg";
import plugsImg from "@/assets/product-plugs.jpg";
import preformsImg from "@/assets/product-preforms.jpg";
import cupsRealImg from "@/assets/gallery-cups-real.jpeg";
import bottlesImg from "@/assets/gallery-bottles.jpeg";
import machinePreformsImg from "@/assets/gallery-machine-preforms.jpeg";
import bottlingLineImg from "@/assets/gallery-bottling-line.jpeg";
import machineOutputImg from "@/assets/gallery-machine-output.jpeg";

const galleryImages = [
  { src: locationImg, title: "Our Factory – Workington, Harare", category: "Facility" },
  { src: machine1Img, title: "Production Line Inspection", category: "Manufacturing" },
  { src: machine3Img, title: "Blow Moulding Machine", category: "Manufacturing" },
  { src: machinePreformsImg, title: "Preform Production Machine", category: "Manufacturing" },
  { src: machineOutputImg, title: "Bottle Manufacturing Output", category: "Manufacturing" },
  { src: bottlingLineImg, title: "Bottling Production Line", category: "Manufacturing" },
  { src: containersImg, title: "Plastic Containers", category: "Products" },
  { src: cupsImg, title: "Plastic Cups", category: "Products" },
  { src: cupsRealImg, title: "Drinking Cups", category: "Products" },
  { src: bottlesImg, title: "PET Bottles", category: "Products" },
  { src: plugsImg, title: "Plastic Plugs & Caps", category: "Products" },
  { src: preformsImg, title: "PET Preforms", category: "Products" },
];

const categories = ["All", ...Array.from(new Set(galleryImages.map((img) => img.category)))];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [slideIndex, setSlideIndex] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter);

  // Auto-play slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = useCallback(() => setSlideIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length), []);
  const nextSlide = useCallback(() => setSlideIndex((i) => (i + 1) % galleryImages.length), []);

  // Lightbox keyboard nav
  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => ((i ?? 0) + 1) % filtered.length);
      if (e.key === "ArrowLeft") setLightbox((i) => ((i ?? 0) - 1 + filtered.length) % filtered.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, filtered.length]);

  return (
    <div className="min-h-screen bg-background">
      {/* Simple top bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl shadow-sm border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/" className="font-display text-xl font-bold tracking-tight">
            <span className="text-danger">Power</span>
            <span className="text-primary">Milt</span>
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link to="/">
              <Button variant="outline" size="sm" className="rounded-full">
                ← Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-20">
        {/* Hero Slideshow */}
        <section className="container mx-auto px-4 mb-16">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-3">Gallery</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Inside <span className="text-primary">Power</span><span className="text-danger">Milt</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              A look at our facility, machinery, and the quality products we manufacture.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl group">
            <div className="aspect-[16/9] relative">
              {galleryImages.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    i === slideIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              {/* Overlay caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-display text-lg font-semibold">{galleryImages[slideIndex].title}</p>
                <p className="text-white/70 text-sm">{galleryImages[slideIndex].category}</p>
              </div>
            </div>

            {/* Slideshow controls */}
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlideIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === slideIndex ? "bg-white w-5" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Filterable Grid */}
        <section className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((img, i) => (
              <button
                key={img.title}
                onClick={() => setLightbox(i)}
                className="group relative rounded-xl overflow-hidden aspect-[4/3] focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                  <div className="p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white font-display font-semibold text-sm">{img.title}</p>
                    <p className="text-white/70 text-xs">{img.category}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center animate-fade-in">
          <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 text-white/70 hover:text-white">
            <X className="h-7 w-7" />
          </button>
          <button
            onClick={() => setLightbox((lightbox - 1 + filtered.length) % filtered.length)}
            className="absolute left-4 text-white/70 hover:text-white"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <img
            src={filtered[lightbox].src}
            alt={filtered[lightbox].title}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
          />
          <button
            onClick={() => setLightbox((lightbox + 1) % filtered.length)}
            className="absolute right-4 text-white/70 hover:text-white"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          <div className="absolute bottom-6 text-center text-white">
            <p className="font-display font-semibold">{filtered[lightbox].title}</p>
            <p className="text-white/60 text-sm">{filtered[lightbox].category}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
