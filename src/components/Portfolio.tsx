import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import shopify from "@/assets/project-shopify.jpg";
import youtube from "@/assets/project-youtube.jpg";
import skool from "@/assets/project-skool.jpg";
import branding from "@/assets/project-branding.jpg";
import marketing from "@/assets/project-marketing.jpg";
import wix from "@/assets/project-wix.jpg";
import { Reveal } from "./Reveal";

const filters = ["All", "Web Design", "Digital Marketing", "Skool Growth", "Branding"] as const;
type Filter = typeof filters[number];

type Project = {
  title: string;
  category: Exclude<Filter, "All">;
  image: string;
  desc: string;
  metric: string;
  quote: string;
  tall?: boolean;
};

const projects: Project[] = [
  {
    title: "NYC Fashion Shopify Store",
    category: "Web Design",
    image: shopify,
    desc: "Full Shopify rebuild for a New York fashion brand with conversion-first product pages.",
    metric: "+187% conversion rate",
    quote: "Sales tripled in 60 days.",
    tall: true,
  },
  {
    title: "UK Faith Creator YouTube Launch",
    category: "Digital Marketing",
    image: youtube,
    desc: "Channel branding, thumbnail system & SEO setup for a London-based creator launching from zero.",
    metric: "0 → 12k subs in 5 months",
    quote: "He turned my channel into a real business.",
  },
  {
    title: "Scaled US Skool Community to 1.2k",
    category: "Skool Growth",
    image: skool,
    desc: "Engagement systems, onboarding flow & weekly content cadence built from scratch.",
    metric: "1,200+ paying members",
    quote: "Best money I've ever spent on growth.",
  },
  {
    title: "Premium Brand Identity System",
    category: "Branding",
    image: branding,
    desc: "Logo, color system, type and brand voice for a Toronto-based luxury lifestyle label.",
    metric: "Press features in 4 outlets",
    quote: "Our brand finally looks the part.",
    tall: true,
  },
  {
    title: "Viral IG Campaign — LA Beauty",
    category: "Digital Marketing",
    image: marketing,
    desc: "Reel strategy, hooks & paid amplification for a Los Angeles beauty brand launch.",
    metric: "2.4M organic reach",
    quote: "We went viral in week one.",
  },
  {
    title: "Berlin SaaS Wix Studio Redesign",
    category: "Web Design",
    image: wix,
    desc: "Wix Studio redesign for a German SaaS startup focused on lead generation.",
    metric: "+62% qualified leads",
    quote: "Site looks 10x more professional.",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState<Filter>("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="relative py-24 lg:py-32">
      <div className="container">
        <Reveal className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-xs font-semibold tracking-widest uppercase text-accent">
            Portfolio
          </span>
          <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            Recent work, real <span className="text-gradient-accent">results</span>.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            A glimpse of brands, creators and communities I've helped scale.
          </p>
        </Reveal>

        {/* Filters */}
        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  active === f
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.6)]"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Masonry-style grid */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[1fr]">
          {filtered.map((p, i) => (
            <Reveal key={p.title} delay={i * 70} className={p.tall ? "lg:row-span-2" : ""}>
              <article className={`group relative overflow-hidden rounded-3xl glass h-full flex flex-col`}>
                <div className={`relative overflow-hidden ${p.tall ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1024}
                    height={p.tall ? 1280 : 768}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full glass text-xs font-semibold">
                    {p.category}
                  </span>
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold">
                    {p.metric}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display font-semibold text-xl">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground flex-1">{p.desc}</p>
                  <blockquote className="mt-4 text-sm italic text-foreground/80 border-l-2 border-accent pl-3">
                    "{p.quote}"
                  </blockquote>
                  <button
                    type="button"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:gap-2 transition-all w-fit"
                  >
                    View Case Study <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
