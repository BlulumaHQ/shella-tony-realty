import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-home.jpg";
import {
  FEATURED_LISTINGS,
  SOLD_LISTINGS,
  TESTIMONIALS,
  COMMUNITIES,
  SERVICES,
  SHELLA_HEADSHOT,
  TONY_HEADSHOT_PLACEHOLDER,
  SITE,
} from "@/data/site";
import { ListingsGrid } from "@/components/site/ListingCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TestimonialsCarousel } from "@/components/site/TestimonialsCarousel";
import { CommunityCard } from "@/components/site/CommunityCard";
import { RemaxLogo } from "@/components/site/RemaxLogo";
import { Star, ShieldCheck, Globe2, Sparkles, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shella & Tony Chan — Trusted Real Estate Team in Greater Vancouver" },
      {
        name: "description",
        content:
          "Family real estate guidance you can trust. Buying, selling, downsizing and relocation across Greater Vancouver. RE/MAX Crest Realty. Service in English, Cantonese and Mandarin.",
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
      {FEATURED_LISTINGS.length > 0 && <FeaturedListings />}
      {SOLD_LISTINGS.length > 0 && <SoldListings />}
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
          alt="Welcoming family home in Greater Vancouver"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
      </div>
      <div className="relative container-app py-24 md:py-36 text-primary-foreground grid lg:grid-cols-[1.2fr_auto] gap-12 items-end">
        <div>
          <p className="text-xs md:text-sm uppercase tracking-[0.28em] text-primary-foreground/80 font-medium">
            Shella &amp; Tony Chan • RE/MAX Crest Realty
          </p>
          <h1 className="mt-5 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl text-balance leading-[1.05]">
            Trusted real estate guidance for families across Greater Vancouver.
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-primary-foreground/85 leading-relaxed">
            A family-led team built on trust, multilingual care and full-service support — for buyers, sellers, downsizers and relocating families.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary-foreground text-primary px-7 py-3.5 text-sm font-medium hover:bg-primary-foreground/90 transition-colors"
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
          <div className="mt-10 inline-flex items-center gap-3 text-sm text-primary-foreground/85 border-t border-primary-foreground/20 pt-6">
            <Globe2 className="h-4 w-4" />
            <span className="tracking-wide">English • 廣東話 • 普通話</span>
          </div>
        </div>

        {/* Team dual-agent card */}
        <div className="hidden lg:block">
          <div className="bg-background/95 backdrop-blur rounded-2xl p-5 shadow-card border border-border/40 w-[300px]">
            <div className="flex -space-x-3">
              <img
                src={SHELLA_HEADSHOT}
                alt="Shella Chan, REALTOR"
                className="h-16 w-16 rounded-full object-cover ring-2 ring-background"
              />
              <img
                src={TONY_HEADSHOT_PLACEHOLDER}
                alt="Tony Chan, REALTOR"
                className="h-16 w-16 rounded-full object-cover ring-2 ring-background"
              />
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-primary">Shella &amp; Tony Chan</p>
              <p className="text-xs text-muted-foreground mt-0.5">REALTORS® • Greater Vancouver</p>
            </div>
            <div className="mt-3 flex items-center gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
              <span className="ml-1.5 text-xs text-muted-foreground">{SITE.rating.score} • {SITE.rating.count} reviews</span>
            </div>
            <div className="mt-4 pt-4 border-t border-border/60">
              <RemaxLogo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustPillars() {
  const pillars = [
    { icon: ShieldCheck, title: "Experienced Team", desc: "Over two decades of combined experience guiding families with care." },
    { icon: Globe2, title: "Multilingual Service", desc: "Fluent service in English, Cantonese and Mandarin for clarity at every step." },
    { icon: Sparkles, title: "Full-Service Support", desc: "From first conversation to closing day — we handle the details so you can breathe." },
    { icon: MapPin, title: "Local Expertise", desc: "Deep knowledge of Burnaby, Vancouver and the broader Lower Mainland." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-app">
        <SectionHeading
          eyebrow="Why families work with us"
          title="A calmer, more thoughtful way to move."
          description="We believe great real estate is built on relationships — grounded in honesty, careful guidance and long-term care for our clients."
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
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container-app">
        <SectionHeading
          eyebrow="Client success stories"
          title="Stories from families we’ve helped."
          description={`Rated ${SITE.rating.score}/5 across ${SITE.rating.count} verified reviews — real words from real clients.`}
        />
        <div className="mt-14">
          <TestimonialsCarousel items={TESTIMONIALS} />
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
          <ListingsGrid listings={FEATURED_LISTINGS.slice(0, 6)} />
        </div>
      </div>
    </section>
  );
}

function SoldListings() {
  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container-app">
        <SectionHeading
          eyebrow="Recently sold"
          title="Proven results across Greater Vancouver."
          align="left"
        />
        <div className="mt-12">
          <ListingsGrid listings={SOLD_LISTINGS.slice(0, 6)} />
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
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container-app grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
        <div className="grid grid-cols-2 gap-5 max-w-md mx-auto lg:mx-0">
          <AgentPortrait name="Shella Chan" role="REALTOR®" img={SHELLA_HEADSHOT} />
          <AgentPortrait name="Tony Chan" role="REALTOR®" img={TONY_HEADSHOT_PLACEHOLDER} placeholder />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-accent font-medium">Meet Shella &amp; Tony</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-primary text-balance">
            A trusted family team built on integrity, honesty and dedication.
          </h2>
          <div className="mt-6 space-y-4 text-[15px] text-muted-foreground leading-relaxed">
            <p>
              Shella and Tony Chan are professional REALTORS® with RE/MAX Crest Realty in Burnaby, helping local and international families buy and sell real estate across the Lower Mainland.
            </p>
            <p>
              Their approach is calm, hands-on and relationship-first — built on listening carefully, communicating clearly and treating every client like family. Multilingual support means no detail is lost in translation.
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

function AgentPortrait({ name, role, img, placeholder }: { name: string; role: string; img: string; placeholder?: boolean }) {
  return (
    <div>
      <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted shadow-card">
        <img src={img} alt={`${name}, ${role}`} loading="lazy" className="h-full w-full object-cover" />
      </div>
      <p className="mt-3 font-serif text-lg text-primary">{name}</p>
      <p className="text-xs text-muted-foreground">
        {role}{placeholder ? " • photo coming soon" : ""}
      </p>
    </div>
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
          {COMMUNITIES.map((c) => <CommunityCard key={c.name} {...c} />)}
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
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_top_right,_var(--color-accent),_transparent_60%)]" />
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
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-primary-foreground text-primary px-8 py-4 text-sm font-medium hover:bg-primary-foreground/90">
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
            <p className="text-muted-foreground leading-relaxed">{SITE.brokerage}<br/>{SITE.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
