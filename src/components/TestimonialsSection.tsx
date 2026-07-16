import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Tendai Moyo",
    role: "Operations Manager, Harare Beverages",
    review:
      "Power Milt has been a reliable partner for our bottling operations for over five years. Their consistency and quality are unmatched in Zimbabwe.",
    rating: 5,
  },
  {
    name: "Rutendo Chikanya",
    role: "Procurement Lead, Fresh Foods Co.",
    review:
      "Custom containers delivered on spec, on time, every order. Their team feels like an extension of ours.",
    rating: 5,
  },
  {
    name: "Blessing Ndlovu",
    role: "Founder, Nectar Juices",
    review:
      "From preforms to closures, everything we need under one roof. It has completely transformed our supply chain.",
    rating: 5,
  },
  {
    name: "Farai Sibanda",
    role: "CEO, Aqua Pure Zimbabwe",
    review:
      "Exceptional quality control and fast turnaround. Power Milt is the standard we measure other suppliers against.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useScrollAnimation();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="section-padding bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.08),transparent_60%)]" />
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Testimonials</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.05]">
            Trusted by leaders across Zimbabwe.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`rounded-[1.5rem] p-8 border border-border bg-card/60 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 ${
                i === index % 3 ? "ring-2 ring-primary/30" : ""
              }`}
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground text-base leading-relaxed mb-8 font-light">"{t.review}"</p>
              <div className="flex items-center gap-3 pt-5 border-t border-border">
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-display font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          )).slice(0, 3)}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
