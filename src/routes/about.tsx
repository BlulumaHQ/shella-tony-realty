import { createFileRoute } from "@tanstack/react-router";
import { SHELLA_HEADSHOT, SITE, TESTIMONIALS } from "@/data/site";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Star, Quote } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Shella & Tony Chan — Real Estate Team" },
      { name: "description", content: "Meet Shella and Tony Chan, an award-winning multilingual real estate team with RE/MAX Crest Realty serving Greater Vancouver families." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="container-app grid gap-12 lg:gap-20 lg:grid-cols-2 items-center">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted shadow-card max-w-md mx-auto lg:mx-0">
            <img src={SHELLA_HEADSHOT} alt="Shella Chan, RE/MAX Crest Realty" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-accent font-medium">About the team</p>
            <h1 className="mt-3 font-serif text-4xl md:text-5xl text-primary text-balance leading-tight">
              A family-oriented real estate team you can rely on.
            </h1>
            <div className="mt-6 space-y-4 text-[15px] text-muted-foreground leading-relaxed">
              <p>
                Shella and Tony Chan are award-winning REALTORS® with {SITE.brokerage} in Burnaby. Shella began her real estate career in 2005 as a full-time real estate assistant before becoming a licensed REALTOR® in 2018, bringing more than 15 years of industry insight with her.
              </p>
              <p>
                Together, the team has supported more than a thousand local and international families with buying and selling homes across the Lower Mainland — from condos and townhomes to detached family residences.
              </p>
              <p className="border-l-2 border-accent pl-4 italic text-foreground/80">
                “Serving clients with integrity, honesty and dedication is our paramount goal. Our motto is to work diligently and responsibly — our clients’ needs are always our top priority.”
              </p>
              <p>
                With multilingual fluency in {SITE.languages.join(", ")}, the Chan team makes sure every conversation is clear and every decision is informed.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <Stat label="Years experience" value="20+" />
              <Stat label="Verified reviews" value={`${SITE.rating.count}+`} />
              <Stat label="Average rating" value={`${SITE.rating.score}★`} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-secondary/40">
        <div className="container-app">
          <SectionHeading eyebrow="Client words" title="What clients say about working with us." />
          <div className="mt-12 grid gap-6 md:gap-8 md:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="bg-card rounded-2xl p-7 border border-border/60 shadow-soft">
                <Quote className="h-6 w-6 text-accent" />
                <blockquote className="mt-4 text-[15px] leading-relaxed text-foreground/85">“{t.quote}”</blockquote>
                <figcaption className="mt-6 pt-5 border-t border-border/60 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-primary">{t.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{t.location} • {t.type}</p>
                  </div>
                  <div className="flex gap-0.5 text-accent">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-secondary/60 p-4">
      <p className="font-serif text-2xl text-primary">{value}</p>
      <p className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">{label}</p>
    </div>
  );
}
