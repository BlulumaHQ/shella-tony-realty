import { createFileRoute } from "@tanstack/react-router";
import { COMMUNITIES } from "@/data/site";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CommunityCard } from "@/components/site/CommunityCard";

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
          {COMMUNITIES.map((c) => <CommunityCard key={c.name} {...c} />)}
        </div>
      </div>
    </section>
  );
}
