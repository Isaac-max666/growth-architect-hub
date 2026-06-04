import { Code2, Megaphone, Users, Palette, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import serviceWeb from "@/assets/service-web.jpg";
import serviceMarketing from "@/assets/service-marketing.jpg";
import serviceCommunity from "@/assets/service-community.jpg";
import serviceBranding from "@/assets/service-branding.jpg";

const services = [
  {
    Icon: Code2,
    image: serviceWeb,
    title: "Web Development & Redesign",
    text: "Conversion-focused websites, Shopify & Wix Studio stores built to load fast and sell.",
    tags: ["Shopify", "Wix Studio", "Landing Pages"],
    accent: "primary",
  },
  {
    Icon: Megaphone,
    image: serviceMarketing,
    title: "Digital Marketing",
    text: "Social media strategy, SEO, content systems, brand promotion & full YouTube channel setup.",
    tags: ["SEO", "Social", "YouTube"],
    accent: "accent",
  },
  {
    Icon: Users,
    image: serviceCommunity,
    title: "Skool Community Architect",
    text: "Engagement systems, retention loops & growth playbooks that scale to 4-figure memberships.",
    tags: ["Skool", "Retention", "Onboarding"],
    accent: "primary",
  },
  {
    Icon: Palette,
    image: serviceBranding,
    title: "Branding & Visual Identity",
    text: "Logos, palettes & brand systems that look premium and convert across every touchpoint.",
    tags: ["Logo", "Identity", "Guidelines"],
    accent: "accent",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-secondary/30">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden="true" />
      <div className="container relative">
        <Reveal className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-xs font-semibold tracking-widest uppercase text-accent">
            Services
          </span>
          <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            Everything you need to <span className="text-gradient-accent">scale online</span>.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            One team, one focus — your growth. Pick what you need or stack them for compound results.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ Icon, title, text, tags, accent }, i) => (
            <Reveal key={title} delay={i * 80}>
              <article className="group relative h-full glass rounded-3xl p-7 hover:-translate-y-1.5 hover:border-accent/50 transition-all duration-300">
                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl mb-5 ${
                    accent === "accent"
                      ? "bg-gradient-to-br from-accent to-accent-glow text-accent-foreground"
                      : "bg-gradient-to-br from-primary to-primary-glow text-primary-foreground"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-semibold text-2xl">{title}</h3>
                <p className="mt-3 text-muted-foreground">{text}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground border border-border">
                      {t}
                    </span>
                  ))}
                </div>
                <ArrowUpRight className="absolute top-7 right-7 h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:rotate-12 transition-all" />
              </article>
            </Reveal>
          ))}

          {/* CTA card */}
          <Reveal delay={400}>
            <a
              href="https://calendly.com/temzymarketer/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-full rounded-3xl p-7 flex flex-col justify-between bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground overflow-hidden group hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/20 blur-2xl group-hover:scale-110 transition-transform" />
              <div className="relative">
                <h3 className="font-display font-bold text-3xl leading-tight">Need a custom growth plan?</h3>
                <p className="mt-3 text-primary-foreground/90">Book a free 20-min strategy session.</p>
              </div>
              <div className="relative mt-6 inline-flex items-center gap-2 font-semibold">
                Get started <ArrowUpRight className="h-5 w-5 group-hover:rotate-45 transition-transform" />
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
