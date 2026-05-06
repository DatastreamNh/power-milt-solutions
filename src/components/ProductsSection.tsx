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
import waterBottlesImg from "@/assets/product-water-bottles.jpeg";
import mintBottleImg from "@/assets/product-mint-bottle.jpeg";
import clearJarsImg from "@/assets/product-clear-jars.jpeg";
import foodCanistersImg from "@/assets/product-food-canisters.jpeg";
import dairyBottleImg from "@/assets/product-dairy-bottle.jpeg";

const products = [
  { name: "Plastic Containers", desc: "Durable, food-safe containers for storage, packaging, and distribution.", img: containersImg },
  { name: "Plastic Cups", desc: "High-quality disposable and reusable cups for food service industries.", img: cupsImg },
  { name: "Plastic Plugs", desc: "Precision-moulded caps and plugs for bottles and containers.", img: plugsImg },
  { name: "PET Preforms", desc: "Premium PET preforms for blow-moulding into bottles.", img: preformsImg },
  { name: "Water Bottles", desc: "Crystal-clear PET water bottles in multiple sizes for beverage packaging.", img: waterBottlesImg },
  { name: "Eco Beverage Bottles", desc: "Lightweight bottles with fresh, modern design for water and juice brands.", img: mintBottleImg },
  { name: "Clear Storage Jars", desc: "Transparent jars with secure lids — ideal for retail display and food storage.", img: clearJarsImg },
  { name: "Food Canisters", desc: "Airtight canisters for dry goods, spices, and pantry organisation.", img: foodCanistersImg },
  { name: "Dairy & Juice Bottles", desc: "Opaque HDPE bottles for dairy, juice, and liquid food products.", img: dairyBottleImg },
  { name: "Food Storage Sets", desc: "Complete container sets with lids for household and commercial food storage.", img: containersSetImg },
  { name: "Vacuum Flasks", desc: "Insulated plastic flasks available in multiple colours for hot and cold beverages.", img: flasksImg },
  { name: "Travel Mugs", desc: "Stylish reusable travel cups with secure lids, available in various colours.", img: travelCupsImg },
  { name: "Lunch Box Sets", desc: "Portable lunch containers with carry bags and utensils for on-the-go meals.", img: lunchSetImg },
  { name: "Large PET Bottles & Caps", desc: "Heavy-duty 5L PET bottles with preforms and colour caps for water and beverages.", img: largeBottlesImg },
];

const ProductsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="products" className="section-padding bg-background relative" ref={ref}>
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="mb-20 animate-on-scroll max-w-3xl">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-[0.18em] mb-5">Products</p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground leading-[0.95] tracking-tight">
            Premium packaging.<br />
            <span className="text-muted-foreground">Crafted to last.</span>
          </h2>
          <p className="text-muted-foreground mt-8 max-w-2xl text-lg md:text-xl leading-relaxed font-light">
            Explore our range of high-quality plastic packaging products, manufactured to international standards.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div
              key={p.name}
              className="animate-on-scroll group cursor-pointer"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="aspect-[4/5] overflow-hidden bg-secondary rounded-2xl mb-5">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[900ms] ease-out"
                />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2 tracking-tight">{p.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
