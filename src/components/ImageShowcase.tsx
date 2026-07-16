import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowUpRight } from "lucide-react";
import machineImg from "@/assets/gallery-machine1.jpeg";
import bottlingImg from "@/assets/gallery-bottling-line.jpeg";
import preformsImg from "@/assets/gallery-machine-preforms.jpeg";

const rows = [
  {
    tag: "Precision Manufacturing",
    title: "State-of-the-art production lines built for scale.",
    desc: "Injection and blow moulding machinery calibrated for consistent output — batch after batch, order after order.",
    img: machineImg,
    alt: "Production line",
  },
  {
    tag: "End-to-End Bottling",
    title: "Complete bottling infrastructure under one roof.",
    desc: "From preform to filled bottle, our integrated lines shorten lead times and remove supply chain friction.",
    img: bottlingImg,
    alt: "Bottling line",
    reverse: true,
  },
  {
    tag: "PET Preforms",
    title: "Custom preforms engineered to your specifications.",
    desc: "Weight, neck finish, colour — we produce preforms tailored to your bottling requirements at industrial volumes.",
    img: preformsImg,
    alt: "Preform machine",
  },
];

const ImageShowcase = () => {
  const ref = useScrollAnimation();
  return (
    <section className="section-padding bg-background relative" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-2xl mb-20 animate-on-scroll">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Capabilities</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.05]">
            Built for demanding production environments.
          </h2>
        </div>

        <div className="space-y-24 md:space-y-32">
          {rows.map((row, i) => (
            <div
              key={row.title}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-20 items-center animate-on-scroll ${
                row.reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group aspect-[4/3]">
                <img
                  src={row.img}
                  alt={row.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-foreground/5 rounded-[2rem]" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">{row.tag}</p>
                <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight mb-6">
                  {row.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-light mb-8">{row.desc}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold group/link"
                >
                  Learn more
                  <ArrowUpRight className="h-4 w-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageShowcase;
