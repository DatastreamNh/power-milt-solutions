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
    toast.success("Thank you! We'll get back to you shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-muted/50" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Contact Us</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Get <span className="text-primary">In</span> <span className="text-danger">Touch</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Ready to discuss your packaging needs? Reach out to our team today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-on-scroll space-y-8">
            <div className="flex gap-4 items-start">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-1">Our Location</h4>
                <p className="text-muted-foreground">476 Coventry Road, Workington, Harare, Zimbabwe</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-1">Phone</h4>
                <p className="text-muted-foreground">+263 784 231 146</p>
                <p className="text-muted-foreground">+263 714 704 101</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground mb-1">Email</h4>
                <p className="text-muted-foreground">admin@powermilt.co.zw</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-border h-64 lg:h-auto">
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

          <form onSubmit={handleSubmit} className="animate-on-scroll bg-card rounded-xl border border-border p-8 space-y-6">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Full Name</label>
              <Input
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Email Address</label>
              <Input
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
              <Textarea
                placeholder="Tell us about your packaging needs..."
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
              />
            </div>
            <Button type="submit" size="lg" className="w-full gap-2">
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
