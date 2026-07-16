import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { X } from "lucide-react";

import locationImg from "@/assets/gallery-location.jpeg";
import machine1Img from "@/assets/gallery-machine1.jpeg";
import machine3Img from "@/assets/gallery-machine3.jpeg";
import cupsRealImg from "@/assets/gallery-cups-real.jpeg";
import bottlesImg from "@/assets/gallery-bottles.jpeg";
import machinePreformsImg from "@/assets/gallery-machine-preforms.jpeg";
import bottlingLineImg from "@/assets/gallery-bottling-line.jpeg";
import machineOutputImg from "@/assets/gallery-machine-output.jpeg";
import containersSet from "@/assets/product-containers-set.jpeg";
import lunchSet from "@/assets/product-lunch-set.jpeg";

const images = [
  { src: locationImg, title: "Our Facility", cat: "Facility", span: "row-span-2" },
  { src: machine1Img, title: "Production Line", cat: "Manufacturing", span: "" },
  { src: bottlesImg, title: "PET Bottles", cat: "Products", span: "" },
  { src: machinePreformsImg, title: "Preform Machine", cat: "Manufacturing", span: "row-span-2" },
  { src: cupsRealImg, title: "Drinking Cups", cat: "Products", span: "" },
  { src: bottlingLineImg, title: "Bottling Line", cat: "Manufacturing", span: "" },
  { src: containersSet, title: "Container Range", cat: "Products", span: "" },
  { src: machine3Img, title: "Blow Moulding", cat: "Manufacturing", span: "" },
  { src: machineOutputImg, title: "Manufacturing Output", cat: "Manufacturing", span: "row-span-2" },
  { src: lunchSet, title: "Lunch Sets", cat: "Products", span: "" },
];

const GallerySection = () => {
  const ref = useScrollAnimation();
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding bg-secondary/30 relative" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-on-scroll max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Gallery</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.05]">
            Inside our facility.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground font-light">
            A closer look at our machinery, our team, and the products we ship.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4 animate-on-scroll">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className={`relative rounded-[1.25rem] overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500 ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 text-left">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/80">{img.cat}</p>
                <p className="font-display font-semibold text-white text-lg leading-tight">{img.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 h-12 w-12 rounded-full bg-background/10 text-background hover:bg-background/20 flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].title}
            className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
