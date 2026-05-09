import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SITE } from "@/data/site";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Phone, Mail, MapPin, Globe2, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Shella & Tony Chan Real Estate Team" },
      { name: "description", content: "Get in touch with the Shella & Tony Chan real estate team. Multilingual consultations across Greater Vancouver." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <section className="py-20 md:py-28">
      <div className="container-app">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let’s start a conversation."
          description="Whether you’re ready to list, exploring options or just have a question — we’d love to hear from you. No pressure, no obligation."
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="bg-card rounded-3xl border border-border/60 p-8 md:p-10 shadow-soft">
            {sent ? (
              <div className="py-12 text-center">
                <div className="inline-flex w-14 h-14 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-serif text-2xl text-primary">Thank you — message received.</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Shella or Tony will be in touch with you shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" name="name" required />
                  <Field label="Phone" name="phone" type="tel" />
                </div>
                <Field label="Email" name="email" type="email" required />
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">I’m interested in</label>
                  <select className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30">
                    <option>Buying a home</option>
                    <option>Selling my home</option>
                    <option>Home valuation</option>
                    <option>Downsizing / seniors transition</option>
                    <option>Investment property</option>
                    <option>Relocation</option>
                    <option>Just have a question</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea rows={5} className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" placeholder="Tell us a little about what you’re looking for…" />
                </div>
                <button type="submit" className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-medium hover:bg-primary/90 w-full sm:w-auto">
                  Send message
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-5">
            <InfoCard icon={Phone} title="Call or text">
              <a href={`tel:${SITE.phone}`} className="text-foreground hover:text-accent">{SITE.phone}</a>
              <p className="text-xs text-muted-foreground mt-1">Toll-free {SITE.tollFree} • Office {SITE.phoneAlt}</p>
            </InfoCard>
            <InfoCard icon={Mail} title="Email">
              <p className="text-foreground">Reach out anytime — we typically respond within a few hours.</p>
            </InfoCard>
            <InfoCard icon={MapPin} title="Office">
              <p className="text-foreground leading-relaxed">{SITE.address}</p>
              <p className="text-xs text-muted-foreground mt-1">{SITE.brokerage}</p>
            </InfoCard>
            <InfoCard icon={Globe2} title="Languages">
              <p className="text-foreground">{SITE.languages.join(" • ")}</p>
            </InfoCard>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-foreground mb-2">
        {label}{required && <span className="text-accent"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
      />
    </div>
  );
}

function InfoCard({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-card rounded-2xl p-6 border border-border/60 shadow-soft flex gap-4">
      <div className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-secondary text-accent shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <div className="text-sm">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{title}</p>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
}
