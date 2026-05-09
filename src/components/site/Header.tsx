import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { SITE } from "@/data/site";
import { RemaxLogo } from "./RemaxLogo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/listings", label: "Listings" },
  { to: "/sold", label: "Sold" },
  { to: "/communities", label: "Communities" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-background/85 border-b border-border/60">
      <div className="container-app flex items-center justify-between gap-4 py-3.5">
        <Link to="/" className="flex items-center gap-3 leading-tight">
          <div className="flex flex-col">
            <span className="font-serif text-lg md:text-xl text-primary">Shella &amp; Tony Chan</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Real Estate Team</span>
          </div>
          <span className="hidden sm:flex h-9 w-px bg-border mx-1" />
          <span className="hidden sm:flex">
            <RemaxLogo showText={false} />
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-foreground/80 hover:text-accent transition-colors"
              activeProps={{ className: "text-accent font-medium" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-accent"
          >
            <Phone className="h-4 w-4" /> {SITE.phone}
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Book a Consultation
          </Link>
        </div>

        <button
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-primary"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background">
          <div className="container-app py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-foreground/85 border-b border-border/40"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
