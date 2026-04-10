import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import containersImg from "@/assets/product-containers-new.jpg";
import cupsImg from "@/assets/product-cups-new.jpg";
import plugsImg from "@/assets/product-plugs-new.jpg";
import preformsImg from "@/assets/product-preforms-new.jpg";

const products = [
  { name: "Plastic Containers", desc: "Durable, food-safe containers for storage, packaging, and distribution.", img: containersImg },
  { name: "Plastic Cups", desc: "High-quality disposable and reusable cups for food service industries.", img: cupsImg },
  { name: "Plastic Plugs", desc: "Precision-moulded caps and plugs for bottles and containers.", img: plugsImg },
  { name: "PET Preforms", desc: "Premium PET preforms for blow-moulding into bottles.", img: preformsImg },
];

const ProductsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="products" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto max-w-6xl">
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

        <div className="grid sm:grid-cols-2 gap-6">
          {products.map((p, i) => (
            <div
              key={p.name}
              className="animate-on-scroll group relative bg-secondary/50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-8">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{p.name}</h3>
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
