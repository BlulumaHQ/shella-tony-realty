import { createFileRoute, Link } from "@tanstack/react-router";
import { SOLD_LISTINGS } from "@/data/site";
import { ListingsGrid } from "@/components/site/ListingCard";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/sold")({
  head: () => ({
    meta: [
      { title: "Sold Listings — Shella & Tony Chan Real Estate Team" },
      { name: "description", content: "A record of homes successfully sold by the Shella & Tony Chan real estate team across Greater Vancouver." },
    ],
  }),
  component: SoldPage,
});

function SoldPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-app">
        <SectionHeading
          eyebrow="Recently sold"
          title="Proven results, built on trust."
          description="Two decades of helping families across Greater Vancouver find buyers and move forward with confidence."
        />
        <div className="mt-14">
          {SOLD_LISTINGS.length > 0 ? (
            <ListingsGrid listings={SOLD_LISTINGS} />
          ) : (
            <div className="text-center max-w-lg mx-auto bg-card border border-border/60 rounded-2xl p-10">
              <p className="text-muted-foreground leading-relaxed">
                A full record of recent sales is available on request. We’d be glad to walk you through comparable
                results in your neighbourhood.
              </p>
              <Link to="/contact" className="inline-flex mt-6 items-center justify-center rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90">
                Request sales history
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
