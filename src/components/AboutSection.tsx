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
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Us</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Built on <span className="text-danger">Quality</span> & <span className="text-primary">Trust</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Power Milt Manufacturer and Supply is a Zimbabwe-based company dedicated to delivering premium plastic packaging solutions to businesses of all sizes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="animate-on-scroll bg-card rounded-xl border border-border p-8 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <v.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="animate-on-scroll bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 border border-primary/10">
          <h3 className="font-display text-2xl font-bold text-foreground mb-6">Why Choose Us?</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {points.map((p) => (
              <div key={p} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
