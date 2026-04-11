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
    <section id="services" className="section-padding navy-gradient relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-danger/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-20 animate-on-scroll">
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">Our Services</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            End-to-End<br /><span className="text-danger">Manufacturing</span>
          </h2>
          <p className="text-white/50 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            From concept to delivery, we provide comprehensive plastic manufacturing and supply services.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="animate-on-scroll group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/30 hover:bg-white/10 transition-all duration-500"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="h-14 w-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors duration-300">
                <s.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-white mb-3">{s.title}</h3>
              <p className="text-white/50 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
