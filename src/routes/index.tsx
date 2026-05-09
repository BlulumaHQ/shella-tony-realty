import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-home.jpg";
import { LISTINGS, SOLD, TESTIMONIALS, COMMUNITIES, SERVICES, SHELLA_HEADSHOT, SITE } from "@/data/site";
import { ListingsGrid } from "@/components/site/ListingCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Star, ShieldCheck, Globe2, Sparkles, MapPin, Phone, Mail, ArrowRight, Quote } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shella & Tony Chan — Trusted Real Estate Team in Greater Vancouver" },
      {
        name: "description",
        content:
          "Family real estate guidance you can trust. Buying, selling, downsizing and relocation across Greater Vancouver. Service in English, Cantonese and Mandarin.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <TrustPillars />
      <Stories />
      {LISTINGS.length > 0 && <FeaturedListings />}
      {SOLD.length > 0 && <SoldListings />}
      <HowWeHelp />
      <MeetTeam />
      <Communities />
      <SellerCTA />
      <ContactStrip />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Welcoming family home in Greater Vancouver at golden hour"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-primary/20" />
      </div>
      <div className="relative container-app py-28 md:py-40 text-primary-foreground">
        <p className="text-xs md:text-sm uppercase tracking-[0.28em] text-primary-foreground/80 font-medium">
          Shella &amp; Tony Chan • RE/MAX Crest Realty
        </p>
        <h1 className="mt-5 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl text-balance leading-[1.05]">
          Real estate guidance you can trust through every stage of life.
        </h1>
        <p className="mt-6 max-w-xl text-base md:text-lg text-primary-foreground/85 leading-relaxed">
          A trusted family real estate team serving Greater Vancouver — calm, full-service guidance for buyers,
          sellers, downsizers and relocating families.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-accent text-accent-foreground px-7 py-3.5 text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            Book a Consultation
          </Link>
          <Link
            to="/listings"
            className="inline-flex items-center justify-center rounded-full bg-primary-foreground/10 backdrop-blur border border-primary-foreground/30 text-primary-foreground px-7 py-3.5 text-sm font-medium hover:bg-primary-foreground/20 transition-colors"
          >
            View Listings
          </Link>
        </div>
        <div className="mt-10 inline-flex items-center gap-3 text-sm text-primary-foreground/80 border-t border-primary-foreground/20 pt-6">
          <Globe2 className="h-4 w-4" />
          <span className="tracking-wide">English • Cantonese • Mandarin</span>
        </div>
      </div>
    </section>
  );
}

function TrustPillars() {
  const pillars = [
    { icon: ShieldCheck, title: "Experienced Real Estate Team", desc: "Over two decades of combined real estate experience guiding families with care." },
    { icon: Globe2, title: "Multilingual Guidance", desc: "Fluent service in English, Cantonese and Mandarin for clarity at every step." },
    { icon: Sparkles, title: "Full-Service Support", desc: "From first conversation to closing day — we handle the details so you can breathe." },
    { icon: MapPin, title: "Local Market Expertise", desc: "Deep knowledge of Burnaby, Vancouver and the broader Lower Mainland." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-app">
        <SectionHeading
          eyebrow="Why families work with us"
          title="A calmer, more thoughtful way to move."
          description="We believe great real estate is built on relationships. Our work is grounded in honesty, careful guidance and long-term care for our clients."
        />
        <div className="mt-14 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.title} className="bg-card rounded-2xl p-7 border border-border/60 shadow-soft">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary text-accent">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif text-xl text-primary">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stories() {
  return (
    <section className="py-20 md:py-28 bg-secondary/40">
      <div className="container-app">
        <SectionHeading
          eyebrow="Client success stories"
          title="Stories from families we’ve helped."
          description={`Rated ${SITE.rating.score}/5 across ${SITE.rating.count}+ verified reviews — real words from real clients.`}
        />
        <div className="mt-14 grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.slice(0, 6).map((t) => (
            <figure key={t.name} className="bg-card rounded-2xl p-7 border border-border/60 shadow-soft flex flex-col">
              <Quote className="h-6 w-6 text-accent" />
              <blockquote className="mt-4 text-[15px] leading-relaxed text-foreground/85 flex-1">
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
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedListings() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-app">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeading
            eyebrow="Featured listings"
            title="Currently on the market."
            align="left"
          />
          <Link to="/listings" className="text-sm text-accent inline-flex items-center gap-1.5 hover:gap-2 transition-all">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12">
          <ListingsGrid listings={LISTINGS.slice(0, 6)} />
        </div>
      </div>
    </section>
  );
}

function SoldListings() {
  return (
    <section className="py-20 md:py-28 bg-secondary/40">
      <div className="container-app">
        <SectionHeading
          eyebrow="Recently sold"
          title="Proven results across Greater Vancouver."
          align="left"
        />
        <div className="mt-12">
          <ListingsGrid listings={SOLD.slice(0, 6)} />
        </div>
      </div>
    </section>
  );
}

function HowWeHelp() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-app">
        <SectionHeading
          eyebrow="How we help"
          title="Full-service support for every kind of move."
          description="Whether you’re buying your first home, selling a long-loved property or helping family transition to the next chapter — we make it feel manageable."
        />
        <div className="mt-14 grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <div key={s.title} className="bg-card rounded-2xl p-7 border border-border/60 hover:border-accent/40 transition-colors">
              <p className="text-xs font-medium text-accent">0{i + 1}</p>
              <h3 className="mt-3 font-serif text-2xl text-primary">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MeetTeam() {
  return (
    <section className="py-20 md:py-28 bg-secondary/40">
      <div className="container-app grid gap-12 lg:gap-20 lg:grid-cols-2 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted shadow-card max-w-md mx-auto lg:mx-0">
            <img
              src={SHELLA_HEADSHOT}
              alt="Shella Chan, RE/MAX Crest Realty"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 md:right-8 bg-card rounded-2xl p-5 shadow-card border border-border/60 max-w-[220px] hidden sm:block">
            <div className="flex items-center gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="mt-1 text-sm font-medium text-primary">{SITE.rating.score} / 5 rating</p>
            <p className="text-xs text-muted-foreground">Across {SITE.rating.count}+ verified reviews</p>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-accent font-medium">Meet Shella &amp; Tony</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-primary text-balance">
            A trusted family team built on integrity, honesty and dedication.
          </h2>
          <div className="mt-6 space-y-4 text-[15px] text-muted-foreground leading-relaxed">
            <p>
              Shella and Tony Chan are an award-winning real estate team with RE/MAX Crest Realty in Burnaby.
              With more than 20 years of combined experience, they’ve guided over a thousand families through
              their most important moves.
            </p>
            <p>
              Their approach is calm, hands-on and relationship-first — built on listening carefully, communicating
              clearly and treating every client like family. Multilingual support means no detail is lost in translation.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/about" className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90">
              About the team
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium hover:bg-secondary">
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Communities() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-app">
        <SectionHeading
          eyebrow="Communities we serve"
          title="Local expertise across Greater Vancouver."
          description="From family-friendly Burnaby neighbourhoods to vibrant Richmond and beyond — we know the streets, schools and stories behind each community."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COMMUNITIES.map((c) => (
            <article key={c.name} className="group rounded-2xl overflow-hidden bg-card border border-border/60 shadow-soft hover:shadow-card transition-shadow">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={c.img} alt={c.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-primary">{c.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SellerCTA() {
  return (
    <section className="py-20 md:py-24">
      <div className="container-app">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--color-accent),_transparent_60%)]" />
          <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-primary-foreground/70 font-medium">Thinking of selling?</p>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl text-balance">
                Get a thoughtful, no-pressure home valuation.
              </h2>
              <p className="mt-4 text-primary-foreground/85 max-w-xl leading-relaxed">
                A friendly conversation, a clear market view and honest advice — whether you’re ready to list this season or just exploring.
              </p>
            </div>
            <div className="flex md:justify-end">
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-accent text-accent-foreground px-8 py-4 text-sm font-medium hover:bg-accent/90">
                Get Your Home Value
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactStrip() {
  return (
    <section className="py-16 border-t border-border/60">
      <div className="container-app grid gap-8 md:grid-cols-3 text-sm">
        <div className="flex items-start gap-3">
          <Phone className="h-5 w-5 text-accent mt-0.5" />
          <div>
            <p className="font-medium text-primary">Call</p>
            <a href={`tel:${SITE.phone}`} className="text-muted-foreground hover:text-accent">{SITE.phone}</a>
            <p className="text-xs text-muted-foreground mt-1">Toll-free {SITE.tollFree}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Mail className="h-5 w-5 text-accent mt-0.5" />
          <div>
            <p className="font-medium text-primary">Email</p>
            <p className="text-muted-foreground">Reach us anytime — we’ll respond promptly.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-accent mt-0.5" />
          <div>
            <p className="font-medium text-primary">Office</p>
            <p className="text-muted-foreground leading-relaxed">{SITE.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
