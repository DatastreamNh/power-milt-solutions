import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Factory, Wrench, Truck, ShieldCheck, Package, Sparkles } from "lucide-react";

const services = [
  { icon: Factory, title: "Plastic Manufacturing", desc: "Injection and blow moulding for mass production at industrial scale." },
  { icon: Wrench, title: "Custom Production", desc: "Bespoke packaging designed to your exact shapes, sizes, and branding." },
  { icon: Truck, title: "Reliable Supply", desc: "On-time bulk delivery across Harare and nationwide, every order." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Rigorous QC at every stage — from raw material to finished product." },
  { icon: Package, title: "PET Preforms", desc: "Custom preforms in weights and neck finishes for beverage bottling." },
  { icon: Sparkles, title: "Finishing & Closures", desc: "Complete range of caps, plugs, and closures matched to your containers." },
];

const ServicesSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="services" className="section-padding bg-background relative" ref={ref}>
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="mb-16 text-center animate-on-scroll max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Services</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.05]">
            End-to-end manufacturing capability.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground font-light">
            One partner for the full plastic packaging lifecycle — from concept to delivery.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="animate-on-scroll group relative rounded-[1.5rem] p-8 bg-card border border-border hover:border-primary/30 hover:-translate-y-1 hover:shadow-2xl transition-all duration-500"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                <s.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-3 tracking-tight">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-light">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
