import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { AGENTS } from "@/data/site";
import { RemaxLogo } from "./RemaxLogo";
import { TeamPhones } from "./TeamPhones";
import { LanguageSwitcher, useT } from "@/i18n/i18n";

export function Header() {
  const [open, setOpen] = useState(false);
  const t = useT();

  const NAV = [
    { to: "/", label: t({ en: "Home", zh: "首頁" }) },
    { to: "/listings", label: t({ en: "Listings", zh: "出售物件" }) },
    { to: "/sold", label: t({ en: "Sold", zh: "成交紀錄" }) },
    { to: "/communities", label: t({ en: "Communities", zh: "服務區域" }) },
    { to: "/about", label: t({ en: "About", zh: "關於我們" }) },
    { to: "/contact", label: t({ en: "Contact", zh: "聯絡我們" }) },
  ] as const;

  const bookLabel = t({ en: "Book a Consultation", zh: "預約諮詢" });

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-background/85 border-b border-border/60">
      <div className="container-app flex items-center justify-between gap-4 py-3.5">
        <Link to="/" className="flex items-center gap-3 leading-tight">
          <RemaxLogo variant="balloon" className="h-9" />
          <span className="hidden sm:flex h-9 w-px bg-border mx-1" />
          <div className="flex flex-col">
            <span className="font-serif text-base md:text-lg text-primary leading-tight">Shella &amp; Tony Chan</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {t({ en: "Real Estate Team", zh: "不動產團隊" })}
            </span>
          </div>
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

        <div className="hidden lg:flex items-center gap-6">
          <TeamPhones variant="inline" />
          <span className="h-9 w-px bg-border" />
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            {bookLabel}
          </Link>
          <LanguageSwitcher />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            className="inline-flex items-center justify-center w-10 h-10 rounded-md text-primary"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
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
            <div className="mt-4 grid gap-2">
              {[AGENTS.shella, AGENTS.tony].map((a) => (
                <a
                  key={a.tel}
                  href={`tel:${a.tel}`}
                  className="flex items-center justify-between rounded-xl border border-border bg-secondary/40 px-4 py-3"
                >
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4 text-accent" /> {a.name.split(" ")[0]}
                  </span>
                  <span className="font-serif text-base text-primary">{a.phone}</span>
                </a>
              ))}
            </div>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium"
            >
              {bookLabel}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
