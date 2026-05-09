import { Link } from "@tanstack/react-router";
import type { Listing } from "@/data/site";
import { Bed, Bath, Maximize2, ArrowRight } from "lucide-react";
import { SoldRibbon } from "./SoldRibbon";
import { useT } from "@/i18n/i18n";

export function ListingCard({ listing }: { listing: Listing }) {
  const isSold = listing.status === "sold";
  const t = useT();
  return (
    <Link
      to="/listings/$slug"
      params={{ slug: listing.slug }}
      className="group block bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all border border-border/60 hover:border-accent/40"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={listing.images[0]}
          alt={`${listing.address}, ${listing.city}`}
          loading="lazy"
          className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${isSold ? "grayscale-[35%] group-hover:grayscale-0" : ""}`}
        />
        {isSold && <SoldRibbon />}
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-serif text-2xl text-primary">{listing.price}</p>
            <p className="mt-1 text-sm font-medium text-foreground">{listing.address}</p>
            <p className="text-sm text-muted-foreground">
              {listing.area ? `${listing.area}, ` : ""}{listing.city}
            </p>
          </div>
          <span className="text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground whitespace-nowrap">
            {listing.propertyType}
          </span>
        </div>
        <div className="mt-5 pt-5 border-t border-border/60 flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5"><Bed className="h-4 w-4" />{listing.beds} {t({ en: "bd", zh: "房" })}</span>
            <span className="inline-flex items-center gap-1.5"><Bath className="h-4 w-4" />{listing.baths} {t({ en: "ba", zh: "衛" })}</span>
            <span className="inline-flex items-center gap-1.5"><Maximize2 className="h-4 w-4" />{listing.sqft.toLocaleString()} {t({ en: "sf", zh: "呎" })}</span>
          </div>
          <ArrowRight className="h-4 w-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </Link>
  );
}

export function ListingsGrid({ listings }: { listings: Listing[] }) {
  if (listings.length === 0) return null;
  if (listings.length === 1) {
    // Featured spotlight — single listing
    return (
      <div className="max-w-3xl mx-auto">
        <ListingCard listing={listings[0]} />
      </div>
    );
  }
  const cols =
    listings.length === 2 ? "md:grid-cols-2 max-w-4xl mx-auto" :
    listings.length === 3 ? "md:grid-cols-2 lg:grid-cols-3" :
    "md:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid gap-6 md:gap-8 ${cols}`}>
      {listings.map((l) => <ListingCard key={l.id} listing={l} />)}
    </div>
  );
}
