import { REMAX_LOGO } from "@/data/site";

export function RemaxLogo({
  className = "",
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src={REMAX_LOGO}
        alt="RE/MAX Crest Realty"
        loading="lazy"
        className="h-8 w-auto"
      />
      {showText && (
        <span className="flex flex-col leading-tight">
          <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">RE/MAX</span>
          <span className="text-xs font-medium text-foreground">Crest Realty</span>
        </span>
      )}
    </span>
  );
}
