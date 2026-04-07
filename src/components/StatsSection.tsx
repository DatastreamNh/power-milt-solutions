import { useEffect, useState, useRef } from "react";
import { Factory, Users, Package, Award } from "lucide-react";

const stats = [
  { icon: Factory, value: 10, suffix: "+", label: "Years of Experience" },
  { icon: Users, value: 500, suffix: "+", label: "Happy Clients" },
  { icon: Package, value: 1000000, suffix: "+", label: "Products Delivered", display: "1M+" },
  { icon: Award, value: 100, suffix: "%", label: "Quality Commitment" },
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
          if (display) {
            setCount(target);
            return;
          }
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, display]);

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl font-bold text-primary">
      {display ? display : `${count}${suffix}`}
    </span>
  );
};

const StatsSection = () => (
  <section className="relative -mt-16 z-10 px-4">
    <div className="container mx-auto">
      <div className="bg-card rounded-2xl shadow-xl border border-border p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
            <AnimatedCounter target={stat.value} suffix={stat.suffix} display={stat.display} />
            <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
