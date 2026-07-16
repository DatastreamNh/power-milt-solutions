import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const ref = useScrollAnimation();
  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-primary via-primary to-accent p-12 md:p-20 text-center animate-on-scroll shadow-[0_40px_120px_-30px_hsl(var(--primary)/0.5)]">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-white blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-white blur-3xl" />
          </div>
          <div className="relative">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground tracking-tight leading-[1.05] max-w-3xl mx-auto">
              Ready to scale your packaging operations?
            </h2>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto font-light">
              Talk to our team about custom moulding, bulk supply, or a partnership. We respond within 24 hours.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="rounded-full px-8 h-14 text-base font-semibold bg-background text-foreground hover:bg-background/90 hover:scale-[1.03] transition-all"
              >
                <a href="#contact">
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-14 text-base font-semibold border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 gap-2 bg-transparent"
              >
                <a href="https://wa.me/263784231146" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
