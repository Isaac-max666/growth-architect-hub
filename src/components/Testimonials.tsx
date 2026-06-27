import { Star, Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    name: "Emily Carter",
    role: "Founder, Beauty Brand · USA",
    text: "Isaac redesigned our Shopify store and our conversion rate nearly tripled in two months. The man knows what he's doing.",
    source: "Fiverr",
  },
  {
    name: "James Walker",
    role: "YouTube Creator · UK",
    text: "He set up my entire channel — branding, thumbnails, SEO. Hit 12k subs from zero in 5 months. Legend.",
    source: "Instagram",
  },
  {
    name: "Sarah Mitchell",
    role: "Coach, Skool Community · Canada",
    text: "He helped me scale my Skool from 80 to 1,200+ members. The retention systems alone were worth 10x what I paid.",
    source: "Skool",
  },
  {
    name: "Liam Bennett",
    role: "E-commerce Founder · Australia",
    text: "Best decision was bringing Isaac on. Site, ads, branding — all aligned. Now we look like a real global brand.",
    source: "Fiverr",
  },
  {
    name: "Maya Rodriguez",
    role: "Faith Creator · USA",
    text: "Organized, fast, and genuinely cares about the outcome. Rare to find that level of work ethic.",
    source: "Instagram",
  },
  {
    name: "Daniel Hughes",
    role: "Startup CEO · Germany",
    text: "From zero web presence to leads pouring in. He's our go-to for anything digital growth.",
    source: "Skool",
  },
  {
    name: "Priya Sharma",
    role: "SaaS Product Lead · India",
    text: "Isaac reimagined our entire UI/UX — cleaner flows, better onboarding. Activation jumped 38% in the first month.",
    source: "Fiverr",
  },
  {
    name: "Noah Bergström",
    role: "Fintech Founder · Sweden",
    text: "His UX audit caught friction points we'd been blind to for a year. The redesigned dashboard is genuinely a joy to use.",
    source: "LinkedIn",
  },
  {
    name: "Rachel Adeyemi",
    role: "Author · Nigeria/USA",
    text: "Isaac handled my entire book launch — cover, formatting, Amazon KDP, ads. Hit #1 New Release in my category in week one.",
    source: "Fiverr",
  },
  {
    name: "Michael O'Connor",
    role: "Business Author · Ireland",
    text: "I had a manuscript sitting for two years. Isaac turned it into a polished, marketed book that's now sold 4,000+ copies.",
    source: "LinkedIn",
  },
  {
    name: "Aisha Bello",
    role: "Children's Book Author · UK",
    text: "From illustrations coordination to the launch funnel, he ran the whole thing. My picture book hit Amazon bestseller in 10 days.",
    source: "Instagram",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-secondary/30">
      <div className="container">
        <Reveal className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-xs font-semibold tracking-widest uppercase text-accent">
            Testimonials
          </span>
          <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            What clients <span className="text-gradient-primary">say</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="relative h-full glass rounded-3xl p-7 hover:border-accent/50 transition-all">
                <Quote className="h-10 w-10 text-accent/50 mb-3" />
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-foreground/90 leading-relaxed">"{t.text}"</blockquote>
                <figcaption className="mt-6 flex items-center justify-between pt-5 border-t border-border">
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground">via {t.source}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
