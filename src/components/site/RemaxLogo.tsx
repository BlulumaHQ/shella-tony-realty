import balloon from "@/assets/remax-balloon.png";
import wordmark from "@/assets/remax-real-estate-services.png";

/**
 * Official RE/MAX brand mark — uses the team's uploaded assets.
 *
 * variant="balloon"  – just the balloon, ideal for tight header / inline use
 * variant="full"     – full RE/MAX Real Estate Services lockup (default)
 * variant="brokerage" – balloon + "RE/MAX Crest Realty" wordmark
 */
export function RemaxLogo({
  className = "",
  variant = "full",
  showText,
}: {
  className?: string;
  variant?: "balloon" | "full" | "brokerage";
  /** legacy — when explicitly false, hide brokerage label on the brokerage variant */
  showText?: boolean;
}) {
  if (variant === "balloon") {
    return (
      <img
        src={balloon}
        alt="RE/MAX"
        className={`h-10 w-auto object-contain ${className}`}
        loading="lazy"
      />
    );
  }

  if (variant === "brokerage") {
    return (
      <span className={`inline-flex items-center gap-2.5 ${className}`}>
        <img src={balloon} alt="RE/MAX" className="h-9 w-auto object-contain" loading="lazy" />
        {showText !== false && (
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

  return (
    <img
      src={wordmark}
      alt="RE/MAX Real Estate Services"
      className={`h-10 w-auto object-contain ${className}`}
      loading="lazy"
    />
  );
}
