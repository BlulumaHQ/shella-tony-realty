import type { TString } from "@/i18n/i18n";
import { useT } from "@/i18n/i18n";

type Text = string | TString;

function isT(v: Text): v is TString {
  return typeof v === "object" && v !== null && "en" in v && "zh" in v;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: Text;
  title: Text;
  description?: Text;
  align?: "center" | "left";
}) {
  const t = useT();
  const r = (v?: Text) => (v == null ? undefined : isT(v) ? t(v) : v);
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${a}`}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.22em] text-accent font-medium mb-3">{r(eyebrow)}</p>
      )}
      <h2 className="font-serif text-3xl md:text-4xl text-primary text-balance">{r(title)}</h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
          {r(description)}
        </p>
      )}
    </div>
  );
}
