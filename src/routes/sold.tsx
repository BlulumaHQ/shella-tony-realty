import { createFileRoute, Link } from "@tanstack/react-router";
import { SOLD_LISTINGS } from "@/data/site";
import { ListingsGrid } from "@/components/site/ListingCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { useT } from "@/i18n/i18n";

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
  const t = useT();
  return (
    <section className="py-20 md:py-28">
      <div className="container-app">
        <SectionHeading
          eyebrow={{ en: "Recently sold", zh: "近期成交" }}
          title={{ en: "Proven results, built on trust.", zh: "以信任累積的真實實績。" }}
          description={{
            en: "Two decades of helping families across Greater Vancouver find buyers and move forward with confidence.",
            zh: "二十年來,協助大溫哥華地區的家庭順利成交、安心邁向下一步。",
          }}
        />
        <div className="mt-14">
          {SOLD_LISTINGS.length > 0 ? (
            <ListingsGrid listings={SOLD_LISTINGS} />
          ) : (
            <div className="text-center max-w-lg mx-auto bg-card border border-border/60 rounded-2xl p-10">
              <p className="text-muted-foreground leading-relaxed">
                {t({
                  en: "A full record of recent sales is available on request. We’d be glad to walk you through comparable results in your neighbourhood.",
                  zh: "完整的近期成交紀錄可依需求提供。我們很樂意為您解說您所在社區的相似成交案例。",
                })}
              </p>
              <Link to="/contact" className="inline-flex mt-6 items-center justify-center rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90">
                {t({ en: "Request sales history", zh: "索取成交紀錄" })}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
