import { Link } from "@tanstack/react-router";
import { SITE } from "@/data/site";
import { RemaxLogo } from "./RemaxLogo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/50">
      <div className="container-app py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-2xl text-primary">Shella &amp; Tony Chan</p>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">Real Estate Team</p>
          <p className="mt-5 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Trusted family real estate guidance across the Greater Vancouver area. Serving you in English, Cantonese and Mandarin.
          </p>
          <div className="mt-6">
            <RemaxLogo />
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-foreground mb-4">Explore</p>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/listings" className="hover:text-accent">Listings</Link></li>
            <li><Link to="/sold" className="hover:text-accent">Sold</Link></li>
            <li><Link to="/communities" className="hover:text-accent">Communities</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium text-foreground mb-4">Contact</p>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><a href={`tel:${SITE.phone}`} className="hover:text-accent">{SITE.phone}</a></li>
            <li><a href={`tel:${SITE.tollFree}`} className="hover:text-accent">Toll-free {SITE.tollFree}</a></li>
            <li className="leading-relaxed">{SITE.brokerage}<br/>{SITE.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-app py-6 text-xs text-muted-foreground text-center md:text-left">
          © {year} Shella &amp; Tony Chan Real Estate Team. All rights reserved. | Web Design by{" "}
          <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            Bluluma
          </a>
        </div>
      </div>
    </footer>
  );
}
