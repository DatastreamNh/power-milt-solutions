import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              <span className="text-danger">Power</span><span className="text-primary">Milt</span>
            </h3>
            <p className="text-background/50 leading-relaxed mb-6">
              Quality Plastic Packaging You Can Trust. Manufacturing premium packaging solutions in Harare, Zimbabwe.
            </p>
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
