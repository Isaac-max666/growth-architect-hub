import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { socials } from "./socials";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container">
        <nav
          className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-3 transition-all duration-300 ${
            scrolled ? "glass shadow-[0_8px_32px_-12px_hsl(220_80%_2%/0.6)]" : "bg-transparent"
          }`}
          aria-label="Primary"
        >
          <a href="#home" className="flex items-center gap-2 group">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground font-display font-bold shadow-[0_8px_24px_-8px_hsl(var(--primary)/0.6)]">
              T
              <span className="absolute -inset-1 rounded-xl bg-gradient-to-br from-primary to-accent opacity-0 blur-lg group-hover:opacity-50 transition-opacity" />
            </span>
            <span className="font-display font-bold text-lg tracking-tight">
              Temzy<span className="text-accent">.</span>
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full hover:bg-secondary/60 transition-colors"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-1">
              {socials.slice(0, 3).map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="p-2 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <a
              href="https://calendly.com/temzymarketer/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center rounded-full bg-gradient-to-r from-accent to-accent-glow px-5 text-sm font-semibold text-accent-foreground shadow-[0_10px_30px_-10px_hsl(var(--accent)/0.6)] hover:shadow-[0_16px_40px_-10px_hsl(var(--accent)/0.8)] hover:-translate-y-0.5 transition-all"
            >
              Book a Call
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden mt-2 glass rounded-3xl p-6 animate-fade-in">
            <ul className="flex flex-col gap-1">
              {navItems.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 text-base font-medium text-foreground hover:bg-secondary rounded-xl transition-colors"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
              <div className="flex items-center gap-2">
                {socials.map(({ name, href, Icon }) => (
                  <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name}
                     className="p-2 text-muted-foreground hover:text-accent">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
              <a
                href="https://calendly.com/temzymarketer/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center rounded-full bg-gradient-to-r from-accent to-accent-glow px-5 text-sm font-semibold text-accent-foreground"
              >
                Book a Call
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
