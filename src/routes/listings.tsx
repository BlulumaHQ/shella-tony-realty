import { createFileRoute } from "@tanstack/react-router";
import { FEATURED_LISTINGS } from "@/data/site";
import { ListingsGrid } from "@/components/site/ListingCard";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/listings")({
  head: () => ({
    meta: [
      { title: "Current Listings — Shella & Tony Chan Real Estate Team" },
      { name: "description", content: "Browse current real estate listings from the Shella & Tony Chan team across Greater Vancouver." },
    ],
  }),
  component: ListingsPage,
});

function ListingsPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-app">
        <SectionHeading
          eyebrow="Current listings"
          title="Homes currently on the market."
          description="A curated selection of properties personally represented by the Chan team. Every listing is hand-chosen and supported with full-service care."
        />
        <div className="mt-14">
          {FEATURED_LISTINGS.length > 0 ? (
            <ListingsGrid listings={FEATURED_LISTINGS} />
          ) : (
            <p className="text-center text-muted-foreground">No active listings at the moment — please check back soon.</p>
          )}
        </div>
      </div>
    </section>
  );
}
