import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const values = [
  { title: "Mission", desc: "To provide innovative, high-quality plastic packaging solutions that meet the diverse needs of businesses across Zimbabwe and the region." },
  { title: "Vision", desc: "To be the leading plastic packaging manufacturer in Southern Africa, recognized for quality, reliability, and customer satisfaction." },
  { title: "Values", desc: "Integrity, innovation, and excellence guide everything we do — from raw material selection to final product delivery." },
];

const points = [
  "ISO-standard manufacturing processes",
  "Locally sourced and sustainable materials",
  "Custom packaging solutions available",
  "Fast turnaround and reliable delivery",
];

const AboutSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-background relative" ref={ref}>
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-24 animate-on-scroll">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-[0.18em] mb-5">About</p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground leading-[0.95] tracking-tight">
            Built on quality.<br />
            <span className="text-muted-foreground">Driven by trust.</span>
          </h2>
          <p className="text-muted-foreground mt-8 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            Power Milt Manufacturer & Supplier is a Zimbabwe-based company dedicated to delivering premium plastic packaging solutions to businesses of all sizes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border mb-24 rounded-2xl overflow-hidden">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="animate-on-scroll bg-background p-10"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <h3 className="font-display text-3xl font-semibold text-foreground mb-4 tracking-tight">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-light">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="animate-on-scroll text-center">
          <h3 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-12 tracking-tight">Why choose us</h3>
          <div className="grid sm:grid-cols-2 max-w-3xl mx-auto gap-y-6 gap-x-12 text-left">
            {points.map((p) => (
              <div key={p} className="border-t border-border pt-5">
                <span className="text-foreground text-lg font-light">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
