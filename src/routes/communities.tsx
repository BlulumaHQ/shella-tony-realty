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
          eyebrow={{ en: "Communities we serve", zh: "我們服務的區域" }}
          title={{ en: "The neighbourhoods we know best.", zh: "我們最熟悉的社區。" }}
          description={{
            en: "From the lakeside streets of Burnaby to the riverfront of Richmond, we’ve helped families settle into homes across the Lower Mainland.",
            zh: "從本拿比的湖畔街區到列治文的河岸社區,我們協助許多家庭在低陸平原安居。",
          }}
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COMMUNITIES.map((c) => <CommunityCard key={c.name.en} {...c} />)}
        </div>
      </div>
    </section>
  );
}
