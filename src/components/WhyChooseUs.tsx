import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check } from "lucide-react";
import img from "@/assets/gallery-machine-output.jpeg";

const points = [
  "ISO-standard manufacturing processes",
  "Locally sourced, sustainable materials",
  "Custom moulding to your specifications",
  "Consistent bulk supply capacity",
  "Fast turnaround, nationwide delivery",
  "Dedicated account management",
];

const WhyChooseUs = () => {
  const ref = useScrollAnimation();
  return (
    <section className="section-padding bg-secondary/40 relative overflow-hidden" ref={ref}>
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="container mx-auto max-w-7xl relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative animate-on-scroll">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] group">
              <img
                src={img}
                alt="Manufacturing output"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -right-4 md:-right-8 rounded-2xl bg-background/90 backdrop-blur-xl border border-border shadow-2xl p-6 w-60">
              <p className="font-display text-4xl font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground mt-2">Years engineering premium plastic packaging.</p>
            </div>
          </div>

          <div className="animate-on-scroll">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Why Power Milt</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.05] mb-8">
              The manufacturing partner Zimbabwe's leading brands trust.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light mb-10">
              We combine industrial capacity with the responsiveness of a close partner — so your product ships on time, every time.
            </p>

            <ul className="space-y-4">
              {points.map((p, i) => (
                <li
                  key={p}
                  className="flex items-start gap-4 animate-on-scroll"
                  style={{ transitionDelay: `${i * 0.05}s` }}
                >
                  <span className="flex-shrink-0 h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary" strokeWidth={3} />
                  </span>
                  <span className="text-foreground text-base md:text-lg font-medium">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
