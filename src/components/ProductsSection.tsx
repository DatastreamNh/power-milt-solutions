import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import containersImg from "@/assets/product-containers.jpg";
import cupsImg from "@/assets/product-cups.jpg";
import plugsImg from "@/assets/product-plugs.jpg";
import preformsImg from "@/assets/product-preforms.jpg";

const products = [
  { name: "Plastic Containers", desc: "Durable, food-safe containers for storage, packaging, and distribution. Available in a range of sizes.", img: containersImg },
  { name: "Plastic Cups", desc: "High-quality disposable and reusable cups for beverages and food service industries.", img: cupsImg },
  { name: "Plastic Plugs", desc: "Precision-moulded caps and plugs for bottles and containers across multiple industries.", img: plugsImg },
  { name: "PET Preforms", desc: "Premium PET preforms for blow-moulding into bottles of various shapes and capacities.", img: preformsImg },
];

const ProductsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="products" className="section-padding bg-muted/50" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Products</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Premium <span className="text-primary">Packaging</span> <span className="text-danger">Solutions</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Explore our range of high-quality plastic packaging products, manufactured to international standards.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <div
              key={p.name}
              className="animate-on-scroll group bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-500"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{p.name}</h3>
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
