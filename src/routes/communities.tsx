import { createFileRoute } from "@tanstack/react-router";
import { COMMUNITIES } from "@/data/site";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/communities")({
  head: () => ({
    meta: [
      { title: "Communities — Shella & Tony Chan Real Estate Team" },
      { name: "description", content: "Local real estate expertise across Burnaby, Vancouver, Richmond, Coquitlam, New Westminster and the wider Greater Vancouver area." },
    ],
  }),
  component: CommunitiesPage,
});

function CommunitiesPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-app">
        <SectionHeading
          eyebrow="Communities we serve"
          title="The neighbourhoods we know best."
          description="From the lakeside streets of Burnaby to the riverfront of Richmond, we’ve helped families settle into homes across the Lower Mainland."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COMMUNITIES.map((c) => (
            <article key={c.name} className="group rounded-2xl overflow-hidden bg-card border border-border/60 shadow-soft">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={c.img} alt={c.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-7">
                <h3 className="font-serif text-2xl text-primary">{c.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
