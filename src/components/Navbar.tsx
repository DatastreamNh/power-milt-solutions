import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/")) {
      navigate(href);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-sm border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <button onClick={() => handleClick("#home")} className="font-display text-xl md:text-2xl font-bold tracking-tight">
          <span className={scrolled ? "text-danger" : "text-white"}>Power</span>
          <span className={scrolled ? "text-primary" : "text-white/80"}>Milt</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                scrolled ? "text-foreground/70" : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
          <ThemeToggle />
          <a href="tel:+263784231146">
            <Button size="sm" className="gap-2 rounded-full px-5">
              <Phone className="h-4 w-4" />
              Call Us
            </Button>
          </a>
        </div>

        <button
          className={`md:hidden ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/50 animate-fade-in">
          <div className="flex flex-col p-6 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="text-sm font-medium text-foreground/70 hover:text-primary py-3 text-left transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a href="tel:+263784231146" className="mt-3">
              <Button size="sm" className="gap-2 w-full rounded-full">
                <Phone className="h-4 w-4" />
                Call Us
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
