import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import locationImg from "@/assets/gallery-location.jpeg";
import machine1Img from "@/assets/gallery-machine1.jpeg";
import machine3Img from "@/assets/gallery-machine3.jpeg";
import containersImg from "@/assets/product-containers.jpg";
import cupsImg from "@/assets/product-cups.jpg";
import plugsImg from "@/assets/product-plugs.jpg";

const images = [
  { src: locationImg, title: "Our Factory", category: "Facility" },
  { src: machine1Img, title: "Production Line", category: "Manufacturing" },
  { src: machine3Img, title: "Blow Moulding", category: "Manufacturing" },
  { src: containersImg, title: "Containers", category: "Products" },
  { src: cupsImg, title: "Cups", category: "Products" },
  { src: plugsImg, title: "Plugs & Caps", category: "Products" },
];

const GallerySection = () => {
  const ref = useScrollAnimation();

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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 animate-on-scroll">
          {images.map((img) => (
            <div key={img.title} className="group relative rounded-xl overflow-hidden aspect-[4/3]">
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                <div className="p-3 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-display font-semibold text-sm">{img.title}</p>
                  <p className="text-white/70 text-xs">{img.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 animate-on-scroll">
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
