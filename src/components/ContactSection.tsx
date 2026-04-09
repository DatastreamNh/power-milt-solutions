import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
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
    window.open(`https://wa.me/263784231146?text=${text}`, "_blank");
    toast.success("Opening WhatsApp...");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-20 animate-on-scroll">
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">Contact Us</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Get <span className="text-primary">In</span> <span className="text-danger">Touch</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Ready to discuss your packaging needs? Reach out to our team today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="animate-on-scroll space-y-10">
            {[
              { icon: MapPin, title: "Our Location", lines: ["476 Coventry Road, Workington, Harare, Zimbabwe"] },
              { icon: Phone, title: "Phone", lines: ["+263 784 231 146", "+263 714 704 101"] },
              { icon: Mail, title: "Email", lines: ["admin@powermilt.co.zw"] },
            ].map((item) => (
              <div key={item.title} className="flex gap-5 items-start">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-1">{item.title}</h4>
                  {item.lines.map((line) => (
                    <p key={line} className="text-muted-foreground">{line}</p>
                  ))}
                </div>
              </div>
            ))}

            <div className="rounded-2xl overflow-hidden h-64 lg:h-auto">
              <iframe
                title="Power Milt Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0!3d-17.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzQ4LjAiUyAzMcKwMDAnMDAuMCJF!5e0!3m2!1sen!2szw!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "250px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="animate-on-scroll bg-secondary/30 rounded-2xl p-8 space-y-6">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Full Name</label>
              <Input placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} className="bg-background border-border/50 h-12 rounded-xl" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Email Address</label>
              <Input type="email" placeholder="you@company.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} className="bg-background border-border/50 h-12 rounded-xl" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
              <Textarea placeholder="Tell us about your packaging needs..." rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={1000} className="bg-background border-border/50 rounded-xl" />
            </div>
            <Button type="submit" size="lg" className="w-full gap-2 h-14 rounded-full text-base">
              <Send className="h-5 w-5" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
