import { ArrowRight, Calendar, Mail } from "lucide-react";
import { Reveal } from "./Reveal";
import { socials } from "./socials";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-hero opacity-90 pointer-events-none" aria-hidden="true" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-accent/30 blur-[140px] pointer-events-none" aria-hidden="true" />

      <div className="container relative">
        <Reveal>
          <div className="relative mx-auto max-w-5xl rounded-[2.5rem] overflow-hidden glass p-8 sm:p-12 lg:p-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/15 pointer-events-none" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-xs font-semibold tracking-widest uppercase text-accent">
                Let's build
              </span>
              <h2 className="mt-5 font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                Ready to make your brand visible
                <span className="block text-gradient-mix">and your community thrive?</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                Book a free strategy call and let's map out your next 90 days of growth.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://isaac-scales-skool.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-14 items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-glow px-8 text-base font-semibold text-accent-foreground shadow-[0_20px_50px_-15px_hsl(var(--accent)/0.7)] hover:-translate-y-1 transition-all"
                >
                  <Calendar className="h-5 w-5" />
                  Book a Strategy Call
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="mailto:hello@temzymarketer.com"
                  className="inline-flex h-14 items-center gap-2 rounded-full glass px-8 text-base font-semibold text-foreground hover:border-primary/60 hover:-translate-y-1 transition-all"
                >
                  <Mail className="h-5 w-5" />
                  Send a Message
                </a>
              </div>

              <div className="mt-10 pt-8 border-t border-border/60">
                <p className="text-sm text-muted-foreground mb-4">Or find me on</p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {socials.map(({ name, href, Icon }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass hover:border-accent/60 hover:text-accent transition-all"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-sm font-medium">{name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
