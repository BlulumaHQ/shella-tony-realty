import { MapPin } from "lucide-react";

export function CommunityCard({ name, desc }: { name: string; desc: string }) {
  return (
    <article className="group relative rounded-2xl bg-card border border-border/60 p-7 shadow-soft hover:shadow-card hover:border-accent/40 transition-all overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_top_right,_var(--color-primary),_transparent_55%)] pointer-events-none"
      />
      <div className="relative flex items-start gap-4">
        <div className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-secondary text-accent shrink-0">
          <MapPin className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-serif text-2xl text-primary">{name}</h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
        </div>
      </div>
    </article>
  );
}
