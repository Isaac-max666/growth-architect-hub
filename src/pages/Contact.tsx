import { useState } from "react";
import { ArrowLeft, ArrowRight, Calendar, Mail, MessageCircle, Send, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { socials } from "@/components/socials";
import { toast } from "sonner";

const CALENDLY = "https://calendly.com/temzymarketer/30min";
const EMAIL = "temzymarketer@gmail.com";

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const subject = String(data.get("subject") || "New project inquiry");
    const message = String(data.get("message") || "");

    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${encodeURIComponent(message)}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;

    setTimeout(() => {
      setSubmitting(false);
      toast.success("Opening your email app…", {
        description: "If nothing happens, email me directly at temzymarketer@gmail.com",
      });
      form.reset();
    }, 600);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-primary/30 blur-[120px] pointer-events-none" aria-hidden="true" />
        <div className="absolute top-1/3 -left-40 h-[360px] w-[360px] rounded-full bg-accent/25 blur-[120px] pointer-events-none" aria-hidden="true" />

        <div className="container relative">
          <Reveal>
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to home
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <span className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-wide text-foreground/90">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Let's talk growth
            </span>
          </Reveal>
          <Reveal delay={140}>
            <h1 className="mt-5 font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight max-w-4xl">
              Contact <span className="text-gradient-mix">Temzy</span>.
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
              Whether you need a website that sells, a marketing engine, or a thriving Skool community —
              tell me what you're building and I'll reply within 24 hours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative py-16 lg:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Form */}
            <Reveal className="lg:col-span-7">
              <form
                onSubmit={onSubmit}
                className="glass rounded-3xl p-7 sm:p-9 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Your name</label>
                    <input
                      id="name" name="name" required type="text" placeholder="Jane Doe"
                      className="w-full h-12 rounded-xl bg-secondary/60 border border-border px-4 text-sm focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      id="email" name="email" required type="email" placeholder="you@brand.com"
                      className="w-full h-12 rounded-xl bg-secondary/60 border border-border px-4 text-sm focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    id="subject" name="subject" type="text" placeholder="New project inquiry"
                    className="w-full h-12 rounded-xl bg-secondary/60 border border-border px-4 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Tell me about your project</label>
                  <textarea
                    id="message" name="message" required rows={6} placeholder="Goals, timeline, budget range, links…"
                    className="w-full rounded-xl bg-secondary/60 border border-border p-4 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="group w-full sm:w-auto inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-glow px-8 text-base font-semibold text-accent-foreground shadow-[0_20px_50px_-15px_hsl(var(--accent)/0.7)] hover:-translate-y-1 transition-all disabled:opacity-60"
                >
                  <Send className="h-4 w-4" />
                  {submitting ? "Sending…" : "Send Message"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-xs text-muted-foreground">
                  This will open your email app pre-filled. Prefer direct?{" "}
                  <a href={`mailto:${EMAIL}`} className="text-accent hover:underline">{EMAIL}</a>
                </p>
              </form>
            </Reveal>

            {/* Sidebar info */}
            <Reveal delay={120} className="lg:col-span-5">
              <div className="space-y-5">
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block glass rounded-3xl p-7 hover:border-accent/60 hover:-translate-y-1 transition-all"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-glow text-accent-foreground mb-4">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-semibold text-2xl">Book a Strategy Call</h3>
                  <p className="mt-2 text-muted-foreground text-sm">
                    Free 30-min session. We'll map your next 90 days of growth.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                    Pick a time <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>

                <a
                  href={`mailto:${EMAIL}`}
                  className="group block glass rounded-3xl p-7 hover:border-primary/60 hover:-translate-y-1 transition-all"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground mb-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-semibold text-2xl">Email Me</h3>
                  <p className="mt-2 text-muted-foreground text-sm break-all">{EMAIL}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Send a message <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>

                <div className="glass rounded-3xl p-7">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-accent mb-4">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-semibold text-2xl">Find me on socials</h3>
                  <p className="mt-2 text-muted-foreground text-sm">Reply within 24 hours, every time.</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {socials.map(({ name, href, Icon }) => (
                      <a
                        key={name}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={name}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/60 border border-border hover:border-accent/60 hover:text-accent transition-all text-sm font-medium"
                      >
                        <Icon className="h-4 w-4" />
                        {name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
