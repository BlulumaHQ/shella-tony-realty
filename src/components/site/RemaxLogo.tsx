import balloon from "@/assets/remax-balloon.png";
import wordmark from "@/assets/remax-wordmark.png";
import lockup from "@/assets/remax-real-estate-services.png";

/**
 * Official RE/MAX brand mark — uses uploaded transparent PNG assets.
 *
 * variant="balloon"   – just the balloon
 * variant="wordmark"  – RE/MAX wordmark only
 * variant="lockup"    – balloon + RE/MAX wordmark (default)
 * variant="brokerage" – balloon + "RE/MAX Crest Realty" wordmark
 */
export function RemaxLogo({
  className = "",
  variant = "lockup",
  showText,
}: {
  className?: string;
  variant?: "balloon" | "wordmark" | "lockup" | "brokerage" | "full";
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

  if (variant === "wordmark") {
    return (
      <img
        src={wordmark}
        alt="RE/MAX"
        className={`h-7 w-auto object-contain ${className}`}
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

  // "lockup" / "full" — balloon + wordmark
  return (
    <img
      src={lockup}
      alt="RE/MAX"
      className={`h-10 w-auto object-contain ${className}`}
      loading="lazy"
    />
  );
}
