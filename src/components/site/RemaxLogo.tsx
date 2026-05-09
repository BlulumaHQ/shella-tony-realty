// Self-contained RE/MAX Crest Realty badge — no external image dependency
// to avoid hotlink-protected/blocked CDN logos failing to load.

export function RemaxLogo({
  className = "",
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        aria-label="RE/MAX"
        className="inline-flex h-8 w-12 overflow-hidden rounded-sm shadow-sm ring-1 ring-black/5"
      >
        <span className="flex-1 bg-[#DC1C2E]" />
        <span className="flex-1 bg-white" />
        <span className="flex-1 bg-[#003DA5]" />
      </span>
      {showText && (
        <span className="flex flex-col leading-tight">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground">
            RE/MAX
          </span>
          <span className="text-xs text-muted-foreground">Crest Realty</span>
        </span>
      )}
    </span>
  );
}
