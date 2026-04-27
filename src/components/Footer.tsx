import { socials } from "./socials";
import logo from "@/assets/temzy-logo.png";

const footerLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/40">
      <div className="container py-14">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <a href="#home" className="flex items-center gap-2" aria-label="Temzy Marketer home">
              <img
                src={logo}
                alt="Temzy Marketer logo"
                className="h-10 w-10 rounded-xl object-cover"
                loading="lazy"
                decoding="async"
              />
              <span className="font-display font-bold text-xl">Temzy<span className="text-accent">.</span></span>
            </a>
            <p className="mt-4 text-muted-foreground max-w-md">
              Ibidapo Isaac — Digital Growth Architect helping businesses & creators worldwide
              build websites, marketing engines and Skool communities that win.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full glass hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display font-semibold text-foreground mb-4">Navigate</h4>
            <ul className="space-y-2">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-display font-semibold text-foreground mb-4">Work with me</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Open for select projects. Reply within 24 hours.
            </p>
            <a
              href="https://calendly.com/temzymarketer/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center rounded-full bg-gradient-to-r from-accent to-accent-glow px-6 text-sm font-semibold text-accent-foreground hover:-translate-y-0.5 transition-all"
            >
              Book a Strategy Call
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Ibidapo Isaac · Temzy Marketer. All rights reserved.</p>
          <p>Built with ❤️ for ambitious creators & brands.</p>
        </div>
      </div>
    </footer>
  );
}
