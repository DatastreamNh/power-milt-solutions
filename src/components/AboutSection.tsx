import { CheckCircle, Target, Eye, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const values = [
  { icon: Target, title: "Our Mission", desc: "To provide innovative, high-quality plastic packaging solutions that meet the diverse needs of businesses across Zimbabwe and the region." },
  { icon: Eye, title: "Our Vision", desc: "To be the leading plastic packaging manufacturer in Southern Africa, recognized for quality, reliability, and customer satisfaction." },
  { icon: Heart, title: "Our Values", desc: "Integrity, innovation, and excellence guide everything we do — from raw material selection to final product delivery." },
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
    <section id="about" className="section-padding rich-gradient-alt relative overflow-hidden" ref={ref}>
      {/* Decorative blob */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-20 animate-on-scroll">
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">About Us</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Built on <span className="text-danger">Quality</span>
            <br />& <span className="text-primary">Trust</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Power Milt Manufacturer and Supply is a Zimbabwe-based company dedicated to delivering premium plastic packaging solutions to businesses of all sizes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="animate-on-scroll rich-card p-8 group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                <v.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="animate-on-scroll rich-card p-8 md:p-12 bg-gradient-to-br from-card to-secondary/30">
          <h3 className="font-display text-2xl font-bold text-foreground mb-8">Why Choose Us?</h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {points.map((p) => (
              <div key={p} className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <span className="text-foreground/80">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
