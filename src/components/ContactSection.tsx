import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useScrollAnimation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    const text = `Hello Power Milt!%0A%0AName: ${encodeURIComponent(form.name)}%0AEmail: ${encodeURIComponent(form.email)}%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/263714704101?text=${text}`, "_blank");
    toast.success("Opening WhatsApp...");
    setForm({ name: "", email: "", message: "" });
  };

  const info = [
    { title: "Location", lines: ["47 Coventry Road, Workington, Harare, Zimbabwe"] },
    { title: "Phone", lines: ["+263 714 704 101"] },
    { title: "Email", lines: ["admin@powermiltmanufacturing.co.zw"] },
  ];

  return (
    <section id="contact" className="section-padding bg-background relative" ref={ref}>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="mb-24 animate-on-scroll max-w-3xl">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-[0.18em] mb-5">Contact</p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground leading-[0.95] tracking-tight">
            Let's talk.
          </h2>
          <p className="text-muted-foreground mt-8 max-w-2xl text-lg md:text-xl leading-relaxed font-light">
            Ready to discuss your packaging needs? Reach out to our team today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="animate-on-scroll space-y-12">
            <div className="space-y-10">
              {info.map((item) => (
                <div key={item.title} className="border-t border-border pt-6">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground mb-3">{item.title}</p>
                  {item.lines.map((line) => (
                    <p key={line} className="text-foreground text-lg font-light">{line}</p>
                  ))}
                </div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden h-64 border border-border">
              <iframe
                title="Power Milt Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0!3d-17.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzQ4LjAiUyAzMcKwMDAnMDAuMCJF!5e0!3m2!1sen!2szw!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="animate-on-scroll space-y-6">
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-3 block uppercase tracking-[0.15em]">Name</label>
              <Input placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} className="h-14 rounded-xl text-base" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-3 block uppercase tracking-[0.15em]">Email</label>
              <Input type="email" placeholder="you@company.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} className="h-14 rounded-xl text-base" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-3 block uppercase tracking-[0.15em]">Message</label>
              <Textarea placeholder="Tell us about your packaging needs..." rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={1000} className="rounded-xl text-base" />
            </div>
            <Button type="submit" size="lg" className="w-full h-14 rounded-full text-base font-medium">
              Send message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
