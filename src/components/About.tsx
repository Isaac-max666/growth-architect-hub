import { CheckCircle2, Award, Heart, Zap } from "lucide-react";
import { Reveal } from "./Reveal";

const values = [
  { Icon: Zap, title: "Results-driven", text: "Every decision tied to growth metrics that matter." },
  { Icon: Heart, title: "Africa-first", text: "Built for African startups, brands & creators." },
  { Icon: Award, title: "Master one, scale", text: "Do one thing exceptionally well — then 10x it." },
];

const highlights = [
  "5+ years building online communities",
  "Top-rated on Fiverr (Pro-vetted)",
  "Worked with creators from 6 countries",
  "Scaled Skool communities to 4-figure memberships",
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-xs font-semibold tracking-widest uppercase text-accent">
              About
            </span>
            <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              The man behind the <span className="text-gradient-primary">growth</span>.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Hi, I'm <span className="text-foreground font-semibold">Ibidapo Isaac</span> — known as
              <span className="text-foreground font-semibold"> Temzy Marketer</span> and
              <span className="text-foreground font-semibold"> Isaac Scaling</span>. A digital solutions expert
              passionate about helping African businesses, startups, e-commerce brands and online creators build
              strong online presence and scalable Skool communities.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              I focus on practical, results-driven growth and believe in doing one thing exceptionally well —
              then scaling it.
            </p>

            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-foreground/90">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-5">
              {values.map(({ Icon, title, text }, i) => (
                <div
                  key={title}
                  className={`glass rounded-3xl p-7 hover:border-accent/50 hover:-translate-y-1 transition-all ${
                    i === 0 ? "sm:translate-y-8" : ""
                  } ${i === 2 ? "sm:translate-y-8" : ""}`}
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-semibold text-xl">{title}</h3>
                  <p className="mt-2 text-muted-foreground text-sm">{text}</p>
                </div>
              ))}
              <div className="glass rounded-3xl p-7 bg-gradient-to-br from-primary/10 via-transparent to-accent/15 border-accent/30">
                <div className="font-display text-3xl font-bold text-gradient-mix">"Visibility → Trust → Sales."</div>
                <p className="mt-3 text-sm text-muted-foreground">My playbook in 4 words.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
