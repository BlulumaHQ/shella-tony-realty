import type { Listing } from "@/data/site";
import { Bed, Bath, Maximize2 } from "lucide-react";

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <article className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-shadow border border-border/50">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={listing.image}
          alt={`${listing.address}, ${listing.city}`}
          loading="lazy"
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-serif text-2xl text-primary">{listing.price}</p>
            <p className="mt-1 text-sm font-medium text-foreground">{listing.address}</p>
            <p className="text-sm text-muted-foreground">
              {listing.neighbourhood ? `${listing.neighbourhood}, ` : ""}{listing.city}
            </p>
          </div>
          <span className="text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
            {listing.type}
          </span>
        </div>
        <div className="mt-5 pt-5 border-t border-border/60 flex items-center gap-5 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><Bed className="h-4 w-4" />{listing.beds} bd</span>
          <span className="inline-flex items-center gap-1.5"><Bath className="h-4 w-4" />{listing.baths} ba</span>
          <span className="inline-flex items-center gap-1.5"><Maximize2 className="h-4 w-4" />{listing.sqft.toLocaleString()} sf</span>
        </div>
      </div>
    </article>
  );
}

export function ListingsGrid({ listings }: { listings: Listing[] }) {
  if (listings.length === 0) return null;
  const cols =
    listings.length === 1 ? "md:grid-cols-1 max-w-2xl mx-auto" :
    listings.length === 2 ? "md:grid-cols-2 max-w-4xl mx-auto" :
    "md:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid gap-6 md:gap-8 ${cols}`}>
      {listings.map((l) => <ListingCard key={l.id} listing={l} />)}
    </div>
  );
}
