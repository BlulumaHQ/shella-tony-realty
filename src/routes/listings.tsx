import { createFileRoute } from "@tanstack/react-router";
import { FEATURED_LISTINGS } from "@/data/site";
import { ListingsGrid } from "@/components/site/ListingCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { useT } from "@/i18n/i18n";

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
  const t = useT();
  return (
    <section className="py-20 md:py-28">
      <div className="container-app">
        <SectionHeading
          eyebrow={{ en: "Current listings", zh: "目前出售物件" }}
          title={{ en: "Homes currently on the market.", zh: "現正出售中的物件。" }}
          description={{
            en: "A curated selection of properties personally represented by the Chan team. Every listing is hand-chosen and supported with full-service care.",
            zh: "由 Chan 團隊親自代理的精選物件。每件案件皆經由我們親自挑選,並提供全方位服務。",
          }}
        />
        <div className="mt-14">
          {FEATURED_LISTINGS.length > 0 ? (
            <ListingsGrid listings={FEATURED_LISTINGS} />
          ) : (
            <p className="text-center text-muted-foreground">
              {t({ en: "No active listings at the moment — please check back soon.", zh: "目前暫無在售物件,歡迎稍後再回來看看。" })}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
