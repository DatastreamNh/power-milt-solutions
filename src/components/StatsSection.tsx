import { useEffect, useState, useRef } from "react";
import { Clock, Users, Package, Timer } from "lucide-react";

const stats = [
  { value: 10, suffix: "+", label: "Years of experience", icon: Clock },
  { value: 500, suffix: "+", label: "Happy customers", icon: Users },
  { value: 1, suffix: "M+", label: "Products delivered", display: "1M+", icon: Package },
  { value: 24, suffix: "h", label: "Response time", icon: Timer },
];

const AnimatedCounter = ({ target, suffix, display }: { target: number; suffix: string; display?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          if (display) { setCount(target); return; }
          const duration = 1800;
          const steps = 60;
          const inc = target / steps;
          let cur = 0;
          const timer = setInterval(() => {
            cur += inc;
            if (cur >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(cur));
          }, duration / steps);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, display]);

  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl font-bold text-foreground tracking-tight">
      {display || `${count}${suffix}`}
    </span>
  );
};

const StatsSection = () => (
  <section className="py-20 md:py-28 px-4 bg-background">
    <div className="container mx-auto max-w-7xl">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="group rounded-[1.5rem] bg-card border border-border p-6 md:p-8 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
              <s.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <AnimatedCounter target={s.value} suffix={s.suffix} display={s.display} />
            <p className="text-xs md:text-sm text-muted-foreground mt-3 tracking-wide font-medium">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
