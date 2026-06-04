import { Search, Compass, Rocket, TrendingUp } from "lucide-react";
import { Reveal } from "./Reveal";
import processDiscovery from "@/assets/process-discovery.jpg";
import processStrategy from "@/assets/process-strategy.jpg";
import processExecution from "@/assets/process-execution.jpg";
import processScale from "@/assets/process-scale.jpg";

const steps = [
  { Icon: Search, image: processDiscovery, title: "Discovery", text: "Deep dive into your brand, audience and current bottlenecks." },
  { Icon: Compass, image: processStrategy, title: "Strategy", text: "A clear, prioritised growth roadmap tailored to your goals." },
  { Icon: Rocket, image: processExecution, title: "Execution", text: "We ship — websites, content, campaigns, community systems." },
  { Icon: TrendingUp, image: processScale, title: "Scale & Optimize", text: "Measure, double down on what works, kill what doesn't." },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-32">
      <div className="container">
        <Reveal className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-xs font-semibold tracking-widest uppercase text-accent">
            Process
          </span>
          <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            A simple <span className="text-gradient-mix">4-step</span> path to growth.
          </h2>
        </Reveal>

        <div className="mt-14 relative grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* connecting line */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-accent to-transparent" aria-hidden="true" />

          {steps.map(({ Icon, image, title, text }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="relative glass rounded-3xl p-7 h-full hover:-translate-y-1 hover:border-accent/50 transition-all overflow-hidden">
                <div className="relative -mx-7 -mt-7 mb-5 h-36 overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                </div>
                <div className="flex items-center justify-between mb-5">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-display font-bold text-5xl text-muted-foreground/20">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-xl">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
