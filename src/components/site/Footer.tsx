import { Link } from "@tanstack/react-router";
import { SITE, AGENTS } from "@/data/site";
import { RemaxLogo } from "./RemaxLogo";
import { Phone } from "lucide-react";
import { useT } from "@/i18n/i18n";

export function Footer() {
  const year = new Date().getFullYear();
  const agents = [AGENTS.shella, AGENTS.tony];
  const t = useT();
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/50">
      <div className="container-app py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-2xl text-primary">Shella &amp; Tony Chan</p>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
            {t({ en: "Real Estate Team", zh: "不動產團隊" })}
          </p>
          <p className="mt-5 text-sm text-muted-foreground max-w-sm leading-relaxed">
            {t({
              en: "Trusted family real estate guidance across Metro Vancouver. Serving you in English, Cantonese and Mandarin.",
              zh: "於大溫哥華地區為家庭提供值得信賴的不動產服務,以英文、廣東話與國語為您服務。",
            })}
          </p>
          <div className="mt-8">
            <RemaxLogo variant="wordmark" className="h-16 md:h-20" />
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-foreground mb-4">{t({ en: "Explore", zh: "網站導覽" })}</p>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/listings" className="hover:text-accent">{t({ en: "Listings", zh: "出售物件" })}</Link></li>
            <li><Link to="/sold" className="hover:text-accent">{t({ en: "Sold", zh: "成交紀錄" })}</Link></li>
            <li><Link to="/communities" className="hover:text-accent">{t({ en: "Communities", zh: "服務區域" })}</Link></li>
            <li><Link to="/about" className="hover:text-accent">{t({ en: "About", zh: "關於我們" })}</Link></li>
            <li><Link to="/contact" className="hover:text-accent">{t({ en: "Contact", zh: "聯絡我們" })}</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium text-foreground mb-4">{t({ en: "Contact", zh: "聯絡資訊" })}</p>
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
          © {year} Shella &amp; Tony Chan {t({ en: "Real Estate Team. All rights reserved.", zh: "不動產團隊。版權所有。" })} | {t({ en: "Web Design by", zh: "網站設計" })}{" "}
          <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            Bluluma
          </a>
        </div>
      </div>
    </footer>
  );
}
