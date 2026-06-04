import { ArrowRight, Sparkles, TrendingUp, Users, Globe } from "lucide-react";
import portrait from "@/assets/temzy-portrait.jpg";
import { Reveal } from "./Reveal";

const metrics = [
  { Icon: Users, value: "1,200+", label: "Members onboarded" },
  { Icon: TrendingUp, value: "12x", label: "Avg. traffic lift" },
  { Icon: Globe, value: "70+", label: "Brands scaled" },
];

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-hero">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" aria-hidden="true" />
      {/* glow blobs */}
      <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-primary/30 blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/3 -left-40 h-[360px] w-[360px] rounded-full bg-accent/25 blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-wide text-foreground/90">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                Digital Growth Architect • Available for projects
              </span>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="mt-6 font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] leading-[1.02] tracking-tight">
                Isaac Solutions
                <span className="block text-gradient-mix">Digital Growth Architect</span>
              </h1>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl lg:max-w-xl mx-auto lg:mx-0">
                I help businesses and creators grow online —
                <span className="text-foreground font-medium"> Websites that convert</span>
                <span className="text-accent"> • </span>
                <span className="text-foreground font-medium">Marketing that scales</span>
                <span className="text-accent"> • </span>
                <span className="text-foreground font-medium">Skool Communities that thrive.</span>
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:justify-start justify-center">
                <a
                  href="https://calendly.com/temzymarketer/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-14 items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-glow px-8 text-base font-semibold text-accent-foreground shadow-[0_20px_50px_-15px_hsl(var(--accent)/0.7)] hover:shadow-[0_30px_60px_-15px_hsl(var(--accent)/0.9)] hover:-translate-y-1 transition-all"
                >
                  Book a Strategy Call
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex h-14 items-center gap-2 rounded-full glass px-8 text-base font-semibold text-foreground hover:border-primary/60 hover:-translate-y-1 transition-all"
                >
                  View My Work
                </a>
              </div>
            </Reveal>

            {/* metrics */}
            <Reveal delay={440}>
              <div className="mt-14 grid grid-cols-3 gap-3 sm:gap-6 max-w-xl mx-auto lg:mx-0">
                {metrics.map(({ Icon, value, label }) => (
                  <div key={label} className="glass rounded-2xl p-4 sm:p-5 text-left">
                    <Icon className="h-5 w-5 text-accent mb-2" />
                    <div className="font-display font-bold text-2xl sm:text-3xl text-gradient-primary">{value}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: portrait */}
          <div className="lg:col-span-5 relative">
            <Reveal delay={200} className="relative mx-auto max-w-md lg:max-w-none">
              {/* gradient frame */}
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-primary via-accent to-primary-glow opacity-60 blur-2xl animate-float" aria-hidden="true" />
              <div className="relative rounded-[2rem] overflow-hidden border border-border glass">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 pointer-events-none mix-blend-screen" aria-hidden="true" />
                <img
                  src={portrait}
                  alt="Ibidapo Isaac, Isaac Solutions — Digital Growth Architect"
                  width={1024}
                  height={1280}
                  className="w-full h-auto object-cover"
                  fetchPriority="high"
                />
              </div>

              {/* floating badges */}
              <div className="hidden sm:flex absolute -left-6 top-12 glass rounded-2xl px-4 py-3 items-center gap-3 animate-float" style={{ animationDelay: "1s" }}>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                </span>
                <span className="text-sm font-medium">Open for collabs</span>
              </div>
              <div className="hidden sm:flex absolute -right-4 bottom-10 glass rounded-2xl px-4 py-3 items-center gap-3 animate-float" style={{ animationDelay: "2.5s" }}>
                <TrendingUp className="h-4 w-4 text-primary" />
                <div>
                  <div className="text-xs text-muted-foreground">This quarter</div>
                  <div className="text-sm font-semibold">+248% reach</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* marquee */}
        <div className="mt-20 lg:mt-28 relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex marquee whitespace-nowrap gap-12 text-muted-foreground/60 font-display text-xl sm:text-2xl">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex items-center gap-12 pr-12">
                <span>Shopify</span><span className="text-accent">◆</span>
                <span>Wix Studio</span><span className="text-accent">◆</span>
                <span>Skool Communities</span><span className="text-accent">◆</span>
                <span>YouTube Setup</span><span className="text-accent">◆</span>
                <span>SEO & Content</span><span className="text-accent">◆</span>
                <span>Brand Identity</span><span className="text-accent">◆</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
