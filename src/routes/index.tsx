import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-home.jpg";
import shellaImg from "@/assets/shella-portrait.webp";
import tonyImg from "@/assets/tony-portrait.webp";
import awardsStrip from "@/assets/awards-strip.png";
import {
  FEATURED_LISTINGS,
  SOLD_LISTINGS,
  TESTIMONIALS,
  COMMUNITIES,
  SERVICES,
  SITE,
} from "@/data/site";
import { ListingsGrid } from "@/components/site/ListingCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TestimonialsCarousel } from "@/components/site/TestimonialsCarousel";
import { CommunityCard } from "@/components/site/CommunityCard";
import { RemaxLogo } from "@/components/site/RemaxLogo";
import { TeamPhones } from "@/components/site/TeamPhones";
import { Star, ShieldCheck, Globe2, Sparkles, MapPin, Mail, ArrowRight } from "lucide-react";
import { useT } from "@/i18n/i18n";

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
      <Awards />
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

function Awards() {
  const t = useT();
  return (
    <section className="bg-primary">
      <div className="container-app py-5 md:py-6">
        <p className="text-center text-[11px] uppercase tracking-[0.28em] text-primary-foreground/70 font-medium">
          {t({ en: "Awards & Recognition", zh: "獎項與肯定" })}
        </p>
        <div className="mt-3 flex justify-center">
          <img
            src={awardsStrip}
            alt="RE/MAX Platinum Club Award • RE/MAX Lifetime Achievement • Medallion Club Member • RE/MAX Hall of Fame • RE/MAX Chairman's Club"
            className="w-full max-w-3xl h-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function Hero() {
  const t = useT();
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Metro Vancouver skyline and family homes"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>
      <div className="relative container-app py-20 md:py-28 lg:py-32 text-primary-foreground grid lg:grid-cols-[1.15fr_auto] gap-12 lg:gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-3 rounded-full bg-primary-foreground/10 backdrop-blur border border-primary-foreground/20 px-4 py-1.5">
            <span className="text-[11px] uppercase tracking-[0.22em] text-primary-foreground/85 font-medium">
              RE/MAX Crest Realty • {t({ en: "Metro Vancouver", zh: "大溫哥華" })}
            </span>
          </div>
          <h1 className="mt-6 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl text-balance leading-[1.05]">
            {t({
              en: "Helping local & international families ",
              zh: "協助本地與海外家庭在大溫哥華地區",
            })}
            <span className="text-primary-foreground/80">{t({ en: "buy & sell", zh: "買房與賣房" })}</span>
            {t({ en: " across Metro Vancouver.", zh: "。" })}
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-primary-foreground/85 leading-relaxed">
            {t({
              en: "A husband-and-wife RE/MAX team built on trust, multilingual care and full-service support — for buyers, sellers, downsizers and relocating families.",
              zh: "我們是一對 RE/MAX 夫妻不動產團隊,以信任、多語服務與全方位支援為本,協助買方、賣方、換屋換小與搬遷的家庭。",
            })}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary-foreground text-primary px-7 py-3.5 text-sm font-medium hover:bg-primary-foreground/90 transition-colors"
            >
              {t({ en: "Book a Consultation", zh: "預約諮詢" })}
            </Link>
            <Link
              to="/listings"
              className="inline-flex items-center justify-center rounded-full bg-primary-foreground/10 backdrop-blur border border-primary-foreground/30 text-primary-foreground px-7 py-3.5 text-sm font-medium hover:bg-primary-foreground/20 transition-colors"
            >
              {t({ en: "View Listings", zh: "瀏覽物件" })}
            </Link>
          </div>
          <div className="mt-7">
            <TeamPhones variant="hero" />
          </div>
          <div className="mt-7 inline-flex items-center gap-3 text-sm text-primary-foreground/80 border-t border-primary-foreground/20 pt-5">
            <Globe2 className="h-4 w-4" />
            <span className="tracking-wide">English • 廣東話 • 普通話</span>
          </div>
        </div>

        {/* Team dual-agent card */}
        <div className="hidden lg:block">
          <div className="bg-background/95 backdrop-blur rounded-2xl p-5 shadow-card border border-border/40 w-[320px]">
            <div className="grid grid-cols-2 gap-3">
              <AgentMini name="Shella" img={shellaImg} />
              <AgentMini name="Tony" img={tonyImg} />
            </div>
            <div className="mt-4 flex items-center gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
              <span className="ml-1.5 text-xs text-muted-foreground">
                {SITE.rating.score} • {SITE.rating.count} {t({ en: "reviews", zh: "則評價" })}
              </span>
            </div>
            <div className="mt-4 pt-4 border-t border-border/60">
              <RemaxLogo variant="brokerage" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AgentMini({ name, img }: { name: string; img: string }) {
  return (
    <div className="text-center">
      <div className="aspect-square overflow-hidden rounded-xl bg-muted">
        <img src={img} alt={`${name} Chan, REALTOR®`} className="h-full w-full object-cover" />
      </div>
      <p className="mt-2 text-xs font-medium text-primary">{name} Chan</p>
      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">REALTOR®</p>
    </div>
  );
}

function TrustPillars() {
  const t = useT();
  const pillars = [
    {
      icon: ShieldCheck,
      title: t({ en: "Experienced Team", zh: "資深團隊" }),
      desc: t({ en: "Over two decades of combined experience guiding families with care.", zh: "累計逾二十年經驗,以細膩的態度陪伴每個家庭。" }),
    },
    {
      icon: Globe2,
      title: t({ en: "Multilingual Service", zh: "多語服務" }),
      desc: t({ en: "Fluent service in English, Cantonese and Mandarin for clarity at every step.", zh: "提供英文、廣東話與國語流利服務,每個環節都清楚明白。" }),
    },
    {
      icon: Sparkles,
      title: t({ en: "Full-Service Support", zh: "全方位協助" }),
      desc: t({ en: "From first conversation to closing day — we handle the details so you can breathe.", zh: "從初次洽談到成交當天,所有細節由我們處理,讓您安心。" }),
    },
    {
      icon: MapPin,
      title: t({ en: "Local Expertise", zh: "在地專業" }),
      desc: t({ en: "Deep knowledge of Burnaby, Vancouver and the broader Lower Mainland.", zh: "熟悉本拿比、溫哥華及整個低陸平原地區。" }),
    },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-app">
        <SectionHeading
          eyebrow={t({ en: "Why families work with us", zh: "為什麼家庭選擇我們" })}
          title={t({ en: "A calmer, more thoughtful way to move.", zh: "用更從容、更貼心的方式搬家。" })}
          description={t({
            en: "We believe great real estate is built on relationships — grounded in honesty, careful guidance and long-term care for our clients.",
            zh: "我們相信好的不動產服務建立在關係之上——以誠實為本,細心引導,並長期關照每一位客戶。",
          })}
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
  const t = useT();
  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container-app">
        <SectionHeading
          eyebrow={t({ en: "Client success stories", zh: "客戶真實見證" })}
          title={t({ en: "Stories from families we’ve helped.", zh: "來自我們服務過的家庭的真實故事。" })}
          description={t({
            en: `Rated ${SITE.rating.score}/5 across ${SITE.rating.count} verified reviews — real words from real clients.`,
            zh: `${SITE.rating.count} 則經驗證評價,平均 ${SITE.rating.score}/5 ——皆為真實客戶分享。`,
          })}
        />
        <div className="mt-14">
          <TestimonialsCarousel items={TESTIMONIALS} />
        </div>
      </div>
    </section>
  );
}

function FeaturedListings() {
  const t = useT();
  return (
    <section className="py-20 md:py-28">
      <div className="container-app">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeading
            eyebrow={t({ en: "Featured listings", zh: "精選物件" })}
            title={t({ en: "Currently on the market.", zh: "現正出售中。" })}
            align="left"
          />
          <Link to="/listings" className="text-sm text-accent inline-flex items-center gap-1.5 hover:gap-2 transition-all">
            {t({ en: "View all", zh: "查看全部" })} <ArrowRight className="h-4 w-4" />
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
  const t = useT();
  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container-app">
        <SectionHeading
          eyebrow={t({ en: "Recently sold", zh: "近期成交" })}
          title={t({ en: "Proven results across Greater Vancouver.", zh: "於大溫哥華地區累積實績。" })}
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
  const t = useT();
  return (
    <section className="py-20 md:py-28">
      <div className="container-app">
        <SectionHeading
          eyebrow={t({ en: "How we help", zh: "我們的服務" })}
          title={t({ en: "Full-service support for every kind of move.", zh: "全方位協助,涵蓋各種搬家需求。" })}
          description={t({
            en: "Whether you’re buying your first home, selling a long-loved property or helping family transition to the next chapter — we make it feel manageable.",
            zh: "不論您是首次購屋、出售陪伴多年的住宅,或協助家人邁向人生下一階段,我們都讓過程變得從容。",
          })}
        />
        <div className="mt-14 grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <div key={s.title.en} className="bg-card rounded-2xl p-7 border border-border/60 hover:border-accent/40 transition-colors">
              <p className="text-xs font-medium text-accent">0{i + 1}</p>
              <h3 className="mt-3 font-serif text-2xl text-primary">{t(s.title)}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t(s.desc)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MeetTeam() {
  const t = useT();
  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container-app grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
        <div className="grid grid-cols-2 gap-5 max-w-md mx-auto lg:mx-0">
          <AgentPortrait name="Shella Chan" role="REALTOR®" img={shellaImg} />
          <AgentPortrait name="Tony Chan" role="REALTOR®" img={tonyImg} />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-accent font-medium">
            {t({ en: "Meet Shella & Tony", zh: "認識 Shella 與 Tony" })}
          </p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-primary text-balance">
            {t({
              en: "A trusted family team built on integrity, honesty and dedication.",
              zh: "以正直、誠實與全心投入為本的值得信賴家庭團隊。",
            })}
          </h2>
          <div className="mt-6 space-y-4 text-[15px] text-muted-foreground leading-relaxed">
            <p>
              {t({
                en: "Shella and Tony Chan are professional REALTORS® with RE/MAX Crest Realty in Burnaby, helping local and international families buy and sell real estate across the Lower Mainland.",
                zh: "Shella 與 Tony Chan 是 RE/MAX Crest Realty 本拿比辦事處的專業 REALTOR®,協助本地與海外家庭在低陸平原地區買賣不動產。",
              })}
            </p>
            <p>
              {t({
                en: "Their approach is calm, hands-on and relationship-first — built on listening carefully, communicating clearly and treating every client like family.  Multilingual support means no detail is lost in translation.",
                zh: "他們的服務沉穩、親力親為,以關係為先——細心傾聽、清楚溝通,把每位客戶視為家人。多語服務讓每個細節都不會在翻譯中遺漏。",
              })}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/about" className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90">
              {t({ en: "About the team", zh: "關於團隊" })}
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium hover:bg-secondary">
              {t({ en: "Get in touch", zh: "聯絡我們" })}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function AgentPortrait({ name, role, img }: { name: string; role: string; img: string }) {
  return (
    <div>
      <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted shadow-card">
        <img src={img} alt={`${name}, ${role}`} loading="lazy" className="h-full w-full object-cover" />
      </div>
      <p className="mt-3 font-serif text-lg text-primary">{name}</p>
      <p className="text-xs text-muted-foreground">{role}</p>
    </div>
  );
}

function Communities() {
  const t = useT();
  return (
    <section className="py-20 md:py-28">
      <div className="container-app">
        <SectionHeading
          eyebrow={t({ en: "Communities we serve", zh: "我們服務的區域" })}
          title={t({ en: "Local expertise across Greater Vancouver.", zh: "深耕大溫哥華各區的在地專業。" })}
          description={t({
            en: "From family-friendly Burnaby neighbourhoods to vibrant Richmond and beyond — we know the streets, schools and stories behind each community.",
            zh: "從適合家庭的本拿比社區到熱鬧的列治文,以及更多地區——每條街、每所學校、每個社區的故事我們都熟悉。",
          })}
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COMMUNITIES.map((c) => <CommunityCard key={c.name.en} {...c} />)}
        </div>
      </div>
    </section>
  );
}

function SellerCTA() {
  const t = useT();
  return (
    <section className="py-20 md:py-24">
      <div className="container-app">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_top_right,_var(--color-accent),_transparent_60%)]" />
          <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-primary-foreground/70 font-medium">
                {t({ en: "Thinking of selling?", zh: "考慮出售嗎?" })}
              </p>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl text-balance">
                {t({ en: "Get a thoughtful, no-pressure home valuation.", zh: "獲得貼心、不施壓的房屋估價。" })}
              </h2>
              <p className="mt-4 text-primary-foreground/85 max-w-xl leading-relaxed">
                {t({
                  en: "A friendly conversation, a clear market view and honest advice — whether you’re ready to list this season or just exploring.",
                  zh: "一次親切的對話、清楚的市場分析與誠實的建議——不論您準備本季出售或只是初步了解。",
                })}
              </p>
            </div>
            <div className="flex md:justify-end">
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-primary-foreground text-primary px-8 py-4 text-sm font-medium hover:bg-primary-foreground/90">
                {t({ en: "Get Your Home Value", zh: "免費房屋估價" })}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactStrip() {
  const t = useT();
  return (
    <section className="py-16 border-t border-border/60">
      <div className="container-app grid gap-10 lg:grid-cols-[1.4fr_1fr] items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-accent font-medium">
            {t({ en: "Direct lines", zh: "專線聯絡" })}
          </p>
          <h3 className="mt-2 font-serif text-2xl md:text-3xl text-primary">
            {t({ en: "Talk to Shella or Tony directly.", zh: "直接與 Shella 或 Tony 聯繫。" })}
          </h3>
          <p className="mt-3 text-sm text-muted-foreground max-w-md leading-relaxed">
            {t({
              en: "Each of us answers our own line — no call centres, no gatekeepers. Reach the agent you'd like to speak with.",
              zh: "我們各自接聽自己的電話——沒有客服中心、沒有層層轉接,直接聯繫您想諮詢的經紀人。",
            })}
          </p>
          <div className="mt-6">
            <TeamPhones variant="cards" />
          </div>
        </div>
        <div className="grid gap-5 text-sm">
          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-accent mt-0.5" />
            <div>
              <p className="font-medium text-primary">{t({ en: "Email", zh: "電子郵件" })}</p>
              <p className="text-muted-foreground">{SITE.email}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-accent mt-0.5" />
            <div>
              <p className="font-medium text-primary">{t({ en: "Office", zh: "辦公室" })}</p>
              <p className="text-muted-foreground leading-relaxed">{SITE.brokerage}<br/>{SITE.address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
