import { Link } from "@tanstack/react-router";
import { SITE, AGENTS } from "@/data/site";
import { RemaxLogo } from "./RemaxLogo";
import { Phone } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const agents = [AGENTS.shella, AGENTS.tony];
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/50">
      <div className="container-app py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-2xl text-primary">Shella &amp; Tony Chan</p>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">Real Estate Team</p>
          <p className="mt-5 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Trusted family real estate guidance across Metro Vancouver. Serving you in English, Cantonese and Mandarin.
          </p>
          <div className="mt-6">
            <RemaxLogo variant="full" className="h-9" />
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
          <ul className="space-y-3 text-sm text-muted-foreground">
            {agents.map((a) => (
              <li key={a.tel}>
                <a href={`tel:${a.tel}`} className="group inline-flex items-start gap-2 hover:text-accent">
                  <Phone className="h-4 w-4 mt-0.5 text-accent" />
                  <span>
                    <span className="block text-[11px] uppercase tracking-[0.16em] text-muted-foreground/80">
                      {a.name}
                    </span>
                    <span className="block font-medium text-foreground group-hover:text-accent">{a.phone}</span>
                  </span>
                </a>
              </li>
            ))}
            <li className="leading-relaxed pt-2">{SITE.brokerage}<br/>{SITE.address}</li>
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
