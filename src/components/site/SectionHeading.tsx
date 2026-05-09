export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${a}`}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.22em] text-accent font-medium mb-3">{eyebrow}</p>
      )}
      <h2 className="font-serif text-3xl md:text-4xl text-primary text-balance">{title}</h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
