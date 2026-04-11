import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/powermilt", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/powermilt", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/@powermilt", label: "YouTube" },
];

const Footer = () => {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="navy-gradient text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      <div className="container mx-auto px-4 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              <span className="text-danger">Power</span><span className="text-primary">Milt</span>
            </h3>
            <p className="text-background/50 leading-relaxed mb-6">
              Quality Plastic Packaging You Can Trust. Manufacturing premium packaging solutions in Harare, Zimbabwe.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-background/50 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contact Info</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/50">476 Coventry Road, Workington, Harare, Zimbabwe</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-background/50">+263 784 231 146</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-background/50">admin@powermilt.co.zw</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-16 pt-8 text-center">
          <p className="text-sm text-background/30">
            © {new Date().getFullYear()} Power Milt Manufacturer and Supply. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
