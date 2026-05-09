import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Quote, Star } from "lucide-react";
import type { Testimonial } from "@/data/site";

export function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  return (
    <Carousel opts={{ align: "start", loop: true }} className="w-full">
      <CarouselContent className="-ml-4">
        {items.map((t) => (
          <CarouselItem key={t.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
            <figure className="h-full bg-card rounded-2xl p-7 border border-border/60 shadow-soft flex flex-col">
              <Quote className="h-6 w-6 text-accent" />
              <blockquote className="mt-4 text-[15px] leading-relaxed text-foreground/85 flex-1 line-clamp-6">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border/60">
                <p className="text-sm font-medium text-primary">{t.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t.location} • {t.type}</p>
                <div className="mt-2 flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
              </figcaption>
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden md:block">
        <CarouselPrevious className="-left-4" />
        <CarouselNext className="-right-4" />
      </div>
      <div className="mt-6 flex md:hidden justify-center gap-2">
        <CarouselPrevious className="static translate-y-0" />
        <CarouselNext className="static translate-y-0" />
      </div>
    </Carousel>
  );
}
