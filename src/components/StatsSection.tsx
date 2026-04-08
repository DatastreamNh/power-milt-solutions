import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 1, suffix: "M+", label: "Products Delivered", display: "1M+" },
  { value: 100, suffix: "%", label: "Quality Commitment" },
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
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(current));
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
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
    <div className="container mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <AnimatedCounter target={stat.value} suffix={stat.suffix} display={stat.display} />
            <p className="text-sm text-muted-foreground mt-3 tracking-wide uppercase">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
