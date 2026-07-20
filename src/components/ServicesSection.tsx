import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  { num: "01", title: "Plastic Manufacturing", desc: "State-of-the-art injection moulding and blow moulding for mass production of high-quality plastic products." },
  { num: "02", title: "Custom Production", desc: "Tailor-made packaging solutions designed to your exact specifications — shapes, sizes, and branding." },
  { num: "03", title: "Reliable Supply", desc: "Consistent, on-time supply across Harare and nationwide with bulk order capabilities." },
  { num: "04", title: "Quality Assurance", desc: "Rigorous quality control at every stage ensures every product meets our exacting standards." },
];

const ServicesSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="services" className="section-padding bg-foreground text-background relative" ref={ref}>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="mb-24 animate-on-scroll max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] mb-5 opacity-60">Services</p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight">
            End-to-end<br />manufacturing.
          </h2>
          <p className="opacity-60 mt-8 text-lg md:text-xl leading-relaxed font-light">
            From concept to delivery, we provide comprehensive plastic manufacturing and supply services.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-background/10 rounded-2xl overflow-hidden">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="animate-on-scroll bg-foreground p-10 md:p-12 group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="text-sm font-medium opacity-40 mb-8">{s.num}</div>
              <h3 className="font-display text-3xl md:text-4xl font-semibold mb-4 tracking-tight">{s.title}</h3>
              <p className="opacity-60 leading-relaxed font-light text-lg">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
