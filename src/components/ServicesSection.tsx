import { Factory, Cog, Truck, ShieldCheck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  { icon: Factory, title: "Plastic Manufacturing", desc: "State-of-the-art injection moulding and blow moulding for mass production of high-quality plastic products." },
  { icon: Cog, title: "Custom Production", desc: "Tailor-made packaging solutions designed to your exact specifications — shapes, sizes, and branding." },
  { icon: Truck, title: "Reliable Supply", desc: "Consistent, on-time supply across Harare and nationwide with bulk order capabilities." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Rigorous quality control at every stage ensures every product meets our exacting standards." },
];

const ServicesSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="services" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Services</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            End-to-End Manufacturing
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            From concept to delivery, we provide comprehensive plastic manufacturing and supply services.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="animate-on-scroll group flex gap-5 p-8 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <s.icon className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
