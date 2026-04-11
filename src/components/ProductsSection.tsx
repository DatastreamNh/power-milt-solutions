import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import containersImg from "@/assets/product-containers-new.jpg";
import cupsImg from "@/assets/product-cups-new.jpg";
import plugsImg from "@/assets/product-plugs-new.jpg";
import preformsImg from "@/assets/product-preforms-new.jpg";
import containersSetImg from "@/assets/product-containers-set.jpeg";
import flasksImg from "@/assets/product-flasks.jpeg";
import travelCupsImg from "@/assets/product-travel-cups.jpeg";
import lunchSetImg from "@/assets/product-lunch-set.jpeg";
import largeBottlesImg from "@/assets/product-large-bottles.jpeg";

const products = [
  { name: "Plastic Containers", desc: "Durable, food-safe containers for storage, packaging, and distribution.", img: containersImg },
  { name: "Plastic Cups", desc: "High-quality disposable and reusable cups for food service industries.", img: cupsImg },
  { name: "Plastic Plugs", desc: "Precision-moulded caps and plugs for bottles and containers.", img: plugsImg },
  { name: "PET Preforms", desc: "Premium PET preforms for blow-moulding into bottles.", img: preformsImg },
  { name: "Food Storage Sets", desc: "Complete container sets with lids for household and commercial food storage.", img: containersSetImg },
  { name: "Vacuum Flasks", desc: "Insulated plastic flasks available in multiple colours for hot and cold beverages.", img: flasksImg },
  { name: "Travel Mugs", desc: "Stylish reusable travel cups with secure lids, available in various colours.", img: travelCupsImg },
  { name: "Lunch Box Sets", desc: "Portable lunch containers with carry bags and utensils for on-the-go meals.", img: lunchSetImg },
  { name: "Large PET Bottles & Caps", desc: "Heavy-duty 5L PET bottles with preforms and colour caps for water and beverages.", img: largeBottlesImg },
];

const ProductsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="products" className="section-padding rich-gradient relative overflow-hidden" ref={ref}>
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl -translate-x-1/3" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20 animate-on-scroll">
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">Our Products</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Premium <span className="text-primary">Packaging</span>
            <br /><span className="text-danger">Solutions</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore our range of high-quality plastic packaging products, manufactured to international standards.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div
              key={p.name}
              className="animate-on-scroll group rich-card overflow-hidden"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1.5">{p.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
