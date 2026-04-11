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
    <span ref={ref} className="font-display text-5xl md:text-6xl font-bold text-white tracking-tight">
      {display || `${count}${suffix}`}
    </span>
  );
};

const StatsSection = () => (
  <section className="py-20 md:py-28 px-4 navy-gradient relative overflow-hidden">
    {/* Subtle decorative elements */}
    <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-danger/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
    
    <div className="container mx-auto relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <AnimatedCounter target={stat.value} suffix={stat.suffix} display={stat.display} />
            <p className="text-sm text-white/50 mt-3 tracking-wide uppercase">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
