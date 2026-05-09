import { createFileRoute } from "@tanstack/react-router";
import { SITE, TESTIMONIALS } from "@/data/site";
import shellaImg from "@/assets/shella-portrait.webp";
import tonyImg from "@/assets/tony-portrait.webp";
import teamBanner from "@/assets/team-banner.webp";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TestimonialsCarousel } from "@/components/site/TestimonialsCarousel";
import { RemaxLogo } from "@/components/site/RemaxLogo";
import { TeamPhones } from "@/components/site/TeamPhones";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Shella & Tony Chan — Real Estate Team" },
      { name: "description", content: "Meet Shella and Tony Chan, a multilingual real estate team with RE/MAX Crest Realty serving local and international families across Greater Vancouver." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      {/* Section 1 — About the team */}
      <section className="py-20 md:py-28">
        <div className="container-app grid gap-12 lg:gap-20 lg:grid-cols-2 items-center">
          <div className="grid grid-cols-2 gap-5 max-w-md mx-auto lg:mx-0">
            <div>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted shadow-card">
                <img src={shellaImg} alt="Shella Chan, REALTOR®" className="h-full w-full object-cover" />
              </div>
              <p className="mt-3 font-serif text-lg text-primary">Shella Chan</p>
              <p className="text-xs text-muted-foreground">REALTOR®</p>
            </div>
            <div>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted shadow-card">
                <img src={tonyImg} alt="Tony Chan, REALTOR®" className="h-full w-full object-cover" />
              </div>
              <p className="mt-3 font-serif text-lg text-primary">Tony Chan</p>
              <p className="text-xs text-muted-foreground">REALTOR®</p>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-accent font-medium">About the team</p>
            <h1 className="mt-3 font-serif text-4xl md:text-5xl text-primary text-balance leading-tight">
              Shella &amp; Tony Chan Real Estate Team.
            </h1>
            <div className="mt-6 space-y-4 text-[15px] text-muted-foreground leading-relaxed">
              <p>
                Shella and Tony Chan are professional REALTORS® with {SITE.brokerage} in Burnaby. As a husband-and-wife real estate team, they specialize in helping local and international families buy and sell homes across the Lower Mainland — from condos and townhomes to detached family residences.
              </p>
              <p>
                Their work is grounded in family-focused guidance: clear communication, careful preparation and patient support through every stage of buying, selling, downsizing and relocation.
              </p>
              <p className="border-l-2 border-accent pl-4 italic text-foreground/80">
                “Serving clients with integrity, honesty and dedication is our paramount goal. Our motto is to work diligently and responsibly — our clients’ needs are always our top priority.”
              </p>
              <p>
                With multilingual fluency in {SITE.languages.join(", ")}, the Chan team makes sure every conversation is clear and every decision is informed.
              </p>
            </div>
            <div className="mt-8">
              <RemaxLogo />
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <Stat label="Verified reviews" value={`${SITE.rating.count}`} />
              <Stat label="Average rating" value={`${SITE.rating.score}★`} />
              <Stat label="Languages" value={`${SITE.languages.length}`} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Shella */}
      <section className="py-16 md:py-20 bg-secondary/50 border-y border-border/60">
        <div className="container-app grid gap-10 md:grid-cols-[260px_1fr] items-start">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted shadow-card max-w-[260px]">
            <img src={shellaImg} alt="Shella Chan" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-accent font-medium">About Shella Chan</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-primary">REALTOR® • {SITE.brokerage}</h2>
            <div className="mt-5 space-y-4 text-[15px] text-muted-foreground leading-relaxed">
              <p>
                Shella began her real estate career in 2005 as a full-time real estate assistant before becoming a licensed REALTOR® in 2018, bringing more than 15 years of industry insight to her clients.
              </p>
              <p>
                She is known for her professionalism, patience and personal care — guiding first-time buyers, growing families and elderly parents through some of life’s biggest transitions with calm, clear advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Tony */}
      <section className="py-16 md:py-20">
        <div className="container-app grid gap-10 md:grid-cols-[260px_1fr] items-start">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted shadow-card max-w-[260px]">
            <img src={tonyImg} alt="Tony Chan" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-accent font-medium">About Tony Chan</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-primary">REALTOR® • {SITE.brokerage}</h2>
            <div className="mt-5 space-y-4 text-[15px] text-muted-foreground leading-relaxed">
              <p>
                Tony works alongside Shella as part of the Shella &amp; Tony Chan Real Estate Team, supporting clients through buying, selling and real estate transitions across Greater Vancouver.
              </p>
              <p>
                Together, Shella and Tony bring a balanced, family-led approach — pairing detailed market knowledge with the personal attention every client deserves.
              </p>
              <p className="text-xs text-muted-foreground/80 italic">
                A professional headshot of Tony will be added soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-secondary/50">
        <div className="container-app">
          <SectionHeading eyebrow="Client words" title="What clients say about working with us." />
          <div className="mt-12">
            <TestimonialsCarousel items={TESTIMONIALS} />
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-secondary/60 p-4">
      <p className="font-serif text-2xl text-primary">{value}</p>
      <p className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">{label}</p>
    </div>
  );
}
