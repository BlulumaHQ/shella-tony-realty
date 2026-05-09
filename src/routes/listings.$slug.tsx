import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { findListing, SITE } from "@/data/site";
import { TeamPhones } from "@/components/site/TeamPhones";
import { Bed, Bath, Maximize2, MapPin, ArrowLeft, Check } from "lucide-react";
import { useT } from "@/i18n/i18n";

export const Route = createFileRoute("/listings/$slug")({
  loader: ({ params }) => {
    const listing = findListing(params.slug);
    if (!listing) throw notFound();
    return { listing };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.listing.address}, ${loaderData.listing.city} — Shella & Tony Chan` },
          { name: "description", content: loaderData.listing.description },
          { property: "og:title", content: `${loaderData.listing.address} — ${loaderData.listing.price}` },
          { property: "og:description", content: loaderData.listing.description },
          { property: "og:image", content: loaderData.listing.images[0] },
        ]
      : [],
  }),
  component: ListingDetail,
  notFoundComponent: () => (
    <div className="container-app py-32 text-center">
      <h1 className="font-serif text-3xl text-primary">Listing not found</h1>
      <Link to="/listings" className="mt-6 inline-flex text-accent">Back to listings</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="container-app py-32 text-center">
      <h1 className="font-serif text-2xl text-primary">Something went wrong</h1>
      <p className="mt-3 text-muted-foreground">{error.message}</p>
    </div>
  ),
});

function ListingDetail() {
  const { listing } = Route.useLoaderData();
  const isSold = listing.status === "sold";
  const t = useT();

  return (
    <article className="py-12 md:py-16">
      <div className="container-app">
        <Link to="/listings" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent">
          <ArrowLeft className="h-4 w-4" /> {t({ en: "Back to Listings", zh: "回到物件列表" })}
        </Link>

        <div className="mt-6 rounded-3xl overflow-hidden bg-muted aspect-[16/9] md:aspect-[21/9]">
          <img src={listing.images[0]} alt={listing.address} className="h-full w-full object-cover" />
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                {listing.propertyType}
              </span>
              {isSold && (
                <span className="text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-red text-white font-medium">
                  {t({ en: "Sold", zh: "已成交" })}
                </span>
              )}
              {listing.mlsNumber && (
                <span className="text-[11px] uppercase tracking-wider text-muted-foreground">MLS® {listing.mlsNumber}</span>
              )}
            </div>

            <h1 className="mt-4 font-serif text-3xl md:text-5xl text-primary leading-tight">
              {listing.address}
            </h1>
            <p className="mt-2 text-muted-foreground inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" /> {listing.area ? `${listing.area}, ` : ""}{listing.city}
            </p>

            <p className="mt-6 font-serif text-4xl text-primary">{listing.price}</p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <Stat icon={Bed} label={t({ en: "Bedrooms", zh: "臥房" })} value={String(listing.beds)} />
              <Stat icon={Bath} label={t({ en: "Bathrooms", zh: "衛浴" })} value={String(listing.baths)} />
              <Stat icon={Maximize2} label={t({ en: "Square feet", zh: "坪數 (sq ft)" })} value={listing.sqft.toLocaleString()} />
            </div>

            <div className="mt-10">
              <h2 className="font-serif text-2xl text-primary">
                {t({ en: "About this property", zh: "物件介紹" })}
              </h2>
              <p className="mt-3 text-[15px] text-muted-foreground leading-relaxed">{listing.description}</p>
            </div>

            {listing.highlights.length > 0 && (
              <div className="mt-10">
                <h2 className="font-serif text-2xl text-primary">
                  {t({ en: "Key highlights", zh: "重點特色" })}
                </h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {listing.highlights.map((h: string) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" /> {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside className="lg:sticky lg:top-24 self-start">
            <div className="bg-card border border-border/60 rounded-2xl p-7 shadow-soft">
              <p className="font-serif text-xl text-primary">
                {isSold
                  ? t({ en: "Looking for something similar?", zh: "想找類似的物件嗎?" })
                  : t({ en: "Book a private showing", zh: "預約私人賞屋" })}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {isSold
                  ? t({ en: "Reach out and we’ll help you find homes like this one.", zh: "歡迎與我們聯繫,協助您找到相似的物件。" })
                  : t({ en: "Schedule a no-pressure tour with Shella or Tony at a time that works for you.", zh: "於您方便的時間,與 Shella 或 Tony 預約輕鬆無壓力的賞屋。" })}
              </p>
              <Link
                to="/contact"
                className="mt-5 w-full inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90"
              >
                {isSold
                  ? t({ en: "Contact the team", zh: "聯絡我們" })
                  : t({ en: "Book a Private Showing", zh: "預約私人賞屋" })}
              </Link>
              <div className="mt-4">
                <TeamPhones variant="cards" />
              </div>
              <p className="mt-5 pt-5 border-t border-border/60 text-xs text-muted-foreground">
                Shella &amp; Tony Chan • {SITE.brokerage}
                <br />
                {SITE.address}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}

function Stat({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-secondary/60 p-4">
      <Icon className="h-4 w-4 text-accent" />
      <p className="mt-2 font-serif text-2xl text-primary">{value}</p>
      <p className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">{label}</p>
    </div>
  );
}
