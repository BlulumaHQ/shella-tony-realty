import { Phone } from "lucide-react";
import { AGENTS } from "@/data/site";

type Variant = "stacked" | "inline" | "cards" | "hero";

export function TeamPhones({
  variant = "stacked",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  const agents = [AGENTS.shella, AGENTS.tony];

  if (variant === "cards") {
    return (
      <div className={`grid gap-4 sm:grid-cols-2 ${className}`}>
        {agents.map((a) => (
          <a
            key={a.tel}
            href={`tel:${a.tel}`}
            className="group bg-card border border-border/60 rounded-2xl p-5 shadow-soft hover:border-accent/50 hover:shadow-card transition-all flex items-center gap-4"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-accent shrink-0">
              <Phone className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {a.name.split(" ")[0]}
              </span>
              <span className="block font-serif text-xl text-primary group-hover:text-accent transition-colors">
                {a.phone}
              </span>
            </span>
          </a>
        ))}
      </div>
    );
  }

  if (variant === "hero") {
    return (
      <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
        {agents.map((a) => (
          <a
            key={a.tel}
            href={`tel:${a.tel}`}
            className="inline-flex items-center gap-2.5 rounded-full bg-primary-foreground/10 backdrop-blur border border-primary-foreground/25 text-primary-foreground px-4 py-2 text-sm hover:bg-primary-foreground/20 transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            <span className="text-primary-foreground/75 text-xs uppercase tracking-wider">{a.name.split(" ")[0]}</span>
            <span className="font-medium">{a.phone}</span>
          </a>
        ))}
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <div className={`flex flex-col gap-1 text-sm ${className}`}>
        {agents.map((a) => (
          <a
            key={a.tel}
            href={`tel:${a.tel}`}
            className="grid grid-cols-[14px_56px_auto] items-center gap-2 text-foreground/85 hover:text-accent"
          >
            <Phone className="h-3.5 w-3.5 text-accent" />
            <span className="text-muted-foreground text-xs uppercase tracking-wider">
              {a.name.split(" ")[0]}
            </span>
            <span className="font-medium tabular-nums">{a.phone}</span>
          </a>
        ))}
      </div>
    );
  }

  return (
    <ul className={`space-y-1.5 text-sm ${className}`}>
      {agents.map((a) => (
        <li key={a.tel}>
          <a href={`tel:${a.tel}`} className="hover:text-accent inline-flex gap-2">
            <span className="text-muted-foreground">{a.name.split(" ")[0]}</span>
            <span className="font-medium">{a.phone}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
