import { useState, useEffect, useCallback } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import locationImg from "@/assets/gallery-location.jpeg";
import machine1Img from "@/assets/gallery-machine1.jpeg";
import machine3Img from "@/assets/gallery-machine3.jpeg";
import containersImg from "@/assets/product-containers.jpg";
import cupsImg from "@/assets/product-cups.jpg";
import plugsImg from "@/assets/product-plugs.jpg";

const images = [
  { src: locationImg, title: "Our Factory – Workington, Harare", category: "Facility" },
  { src: machine1Img, title: "Production Line Inspection", category: "Manufacturing" },
  { src: machine3Img, title: "Blow Moulding Machine", category: "Manufacturing" },
  { src: containersImg, title: "Plastic Containers", category: "Products" },
  { src: cupsImg, title: "Plastic Cups", category: "Products" },
  { src: plugsImg, title: "Plugs & Caps", category: "Products" },
];

const GallerySection = () => {
  const ref = useScrollAnimation();
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = useCallback(() => setSlideIndex((i) => (i - 1 + images.length) % images.length), []);
  const nextSlide = useCallback(() => setSlideIndex((i) => (i + 1) % images.length), []);

  return (
    <section id="gallery" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-on-scroll">
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-3">Gallery</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Inside <span className="text-primary">Power</span><span className="text-danger">Milt</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A look at our facility, machinery, and quality products.
          </p>
        </div>

        {/* Slideshow */}
        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl group mb-12 animate-on-scroll">
          <div className="aspect-[16/9] relative">
            {images.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.title}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  i === slideIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-white font-display text-lg font-semibold">{images[slideIndex].title}</p>
              <p className="text-white/70 text-sm">{images[slideIndex].category}</p>
            </div>
          </div>

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

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
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

        <div className="text-center animate-on-scroll">
          <Link to="/gallery">
            <Button variant="outline" size="lg" className="gap-2 rounded-full">
              View Full Gallery
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
