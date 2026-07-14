import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowUpRight } from "lucide-react";
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
  { name: "Plastic Containers", desc: "Durable, food-safe containers for storage, packaging, and distribution.", img: containersImg, tag: "Storage" },
  { name: "Plastic Cups", desc: "High-quality disposable and reusable cups for food service industries.", img: cupsImg, tag: "Food Service" },
  { name: "Plastic Plugs", desc: "Precision-moulded caps and plugs for bottles and containers.", img: plugsImg, tag: "Closures" },
  { name: "PET Preforms", desc: "Premium PET preforms for blow-moulding into bottles.", img: preformsImg, tag: "Preforms" },
  { name: "Water Bottles", desc: "Crystal-clear PET water bottles in multiple sizes for beverage packaging.", img: waterBottlesImg, tag: "Beverage" },
  { name: "Eco Beverage Bottles", desc: "Lightweight bottles with fresh, modern design for water and juice brands.", img: mintBottleImg, tag: "Beverage" },
  { name: "Clear Storage Jars", desc: "Transparent jars with secure lids — ideal for retail display and food storage.", img: clearJarsImg, tag: "Retail" },
  { name: "Food Canisters", desc: "Airtight canisters for dry goods, spices, and pantry organisation.", img: foodCanistersImg, tag: "Household" },
  { name: "Dairy & Juice Bottles", desc: "Opaque HDPE bottles for dairy, juice, and liquid food products.", img: dairyBottleImg, tag: "Dairy" },
  { name: "Food Storage Sets", desc: "Complete container sets with lids for household and commercial food storage.", img: containersSetImg, tag: "Sets" },
  { name: "Vacuum Flasks", desc: "Insulated plastic flasks available in multiple colours for hot and cold beverages.", img: flasksImg, tag: "Insulated" },
  { name: "Travel Mugs", desc: "Stylish reusable travel cups with secure lids, available in various colours.", img: travelCupsImg, tag: "On-the-go" },
  { name: "Lunch Box Sets", desc: "Portable lunch containers with carry bags and utensils for on-the-go meals.", img: lunchSetImg, tag: "Lifestyle" },
  { name: "Large PET Bottles & Caps", desc: "Heavy-duty 5L PET bottles with preforms and colour caps for water and beverages.", img: largeBottlesImg, tag: "Bulk" },
];

const ProductsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="products" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* Ambient accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl animate-float-slow" />
        <div
          className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-danger/10 blur-3xl animate-float-slow"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Editorial header */}
        <div className="mb-20 animate-on-scroll max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-10 h-[2px] accent-line" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-scarlet">
              — Catalogue
            </p>
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-[7rem] font-black text-foreground leading-[0.9] tracking-[-0.045em]">
            Premium packaging.
            <br />
            <span className="text-premium-gradient">Crafted to last.</span>
          </h2>
          <div className="mt-8 flex items-start gap-6 max-w-2xl">
            <span className="mt-2 w-10 h-[2px] bg-cobalt shrink-0" />
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
              Explore our range of high-quality plastic packaging products, manufactured to international standards.
            </p>
          </div>
        </div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((p, i) => {
            const accentCobalt = i % 2 === 0;
            return (
              <article
                key={p.name}
                className="animate-on-scroll group relative"
                style={{ transitionDelay: `${(i % 6) * 0.08}s` }}
              >
                <div className="relative rounded-2xl overflow-hidden bg-card border border-border transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-premium group-hover:border-transparent">
                  {/* Image */}
                  <div className="aspect-[4/5] overflow-hidden bg-secondary relative">
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      width={800}
                      height={1000}
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                    />
                    {/* Gradient veil on hover */}
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply ${
                        accentCobalt
                          ? "bg-gradient-to-t from-primary/70 via-primary/10 to-transparent"
                          : "bg-gradient-to-t from-danger/70 via-danger/10 to-transparent"
                      }`}
                    />
                    {/* Tag chip */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          accentCobalt ? "bg-cobalt" : "bg-scarlet"
                        } animate-pulse`}
                      />
                      <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-primary-foreground bg-navy/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                        {p.tag}
                      </span>
                    </div>
                    {/* Arrow badge on hover */}
                    <div className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-background/95 backdrop-blur-sm flex items-center justify-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-premium">
                      <ArrowUpRight
                        className={`h-5 w-5 ${accentCobalt ? "text-cobalt" : "text-scarlet"}`}
                      />
                    </div>
                  </div>

                  {/* Copy */}
                  <div className="p-6 relative">
                    <span
                      className={`absolute top-0 left-6 right-6 h-px ${
                        accentCobalt ? "bg-cobalt/30" : "bg-scarlet/30"
                      } scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500`}
                    />
                    <div className="flex items-baseline justify-between gap-4 mb-2">
                      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground tracking-[-0.03em] group-hover:translate-x-0.5 transition-transform duration-500">
                        {p.name}
                      </h3>
                      <span
                        className={`font-display text-xs font-black tracking-widest ${
                          accentCobalt ? "text-cobalt" : "text-scarlet"
                        }`}
                      >
                        0{(i % 9) + 1}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
