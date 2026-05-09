import { createFileRoute } from "@tanstack/react-router";
import { SITE, TESTIMONIALS } from "@/data/site";
import shellaImg from "@/assets/shella-portrait.webp";
import tonyImg from "@/assets/tony-portrait.webp";
import teamBanner from "@/assets/team-banner.webp";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TestimonialsCarousel } from "@/components/site/TestimonialsCarousel";
import { RemaxLogo } from "@/components/site/RemaxLogo";
import { TeamPhones } from "@/components/site/TeamPhones";
import { useT } from "@/i18n/i18n";

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
  const t = useT();
  return (
    <>
      {/* Team banner */}
      <section className="bg-primary">
        <div className="container-app py-6 md:py-8">
          <div className="rounded-2xl overflow-hidden ring-1 ring-primary-foreground/10 shadow-card">
            <img
              src={teamBanner}
              alt="Shella & Tony Chan — Helping local & international families buy & sell real estate in Metro Vancouver"
              className="w-full h-auto block"
              loading="eager"
            />
          </div>
        </div>
      </section>

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
            <p className="text-xs uppercase tracking-[0.22em] text-accent font-medium">
              {t({ en: "About the team", zh: "關於團隊" })}
            </p>
            <h1 className="mt-3 font-serif text-4xl md:text-5xl text-primary text-balance leading-tight">
              {t({ en: "Shella & Tony Chan Real Estate Team.", zh: "Shella & Tony Chan 不動產團隊" })}
            </h1>
            <div className="mt-6 space-y-4 text-[15px] text-muted-foreground leading-relaxed">
              <p>
                {t({
                  en: `Shella and Tony Chan are professional REALTORS® with ${SITE.brokerage} in Burnaby. As a husband-and-wife real estate team, they specialize in helping local and international families buy and sell homes across the Lower Mainland — from condos and townhomes to detached family residences.`,
                  zh: `Shella 與 Tony Chan 是 ${SITE.brokerage} 本拿比辦事處的專業 REALTOR®。身為夫妻檔不動產團隊,他們專長於協助本地與海外家庭在低陸平原買賣房屋——從公寓、聯排別墅到獨棟住家皆有經驗。`,
                })}
              </p>
              <p>
                {t({
                  en: "Their work is grounded in family-focused guidance: clear communication, careful preparation and patient support through every stage of buying, selling, downsizing and relocation.",
                  zh: "他們的服務以家庭為核心:清楚溝通、細緻準備,並在購屋、出售、換屋換小與搬遷的每個階段提供耐心陪伴。",
                })}
              </p>
              <p className="border-l-2 border-accent pl-4 italic text-foreground/80">
                {t({
                  en: "“Serving clients with integrity, honesty and dedication is our paramount goal. Our motto is to work diligently and responsibly — our clients’ needs are always our top priority.”",
                  zh: "「以正直、誠實與全心投入服務客戶,是我們最重視的目標。我們的座右銘是勤奮負責——客戶的需求永遠擺在第一位。」",
                })}
              </p>
              <p>
                {t({
                  en: `With multilingual fluency in ${SITE.languages.join(", ")}, the Chan team makes sure every conversation is clear and every decision is informed.`,
                  zh: "Chan 團隊以英文、廣東話與國語流利溝通,確保每次對話都清楚明白、每個決定都有充分資訊。",
                })}
              </p>
            </div>
            <div className="mt-8">
              <RemaxLogo />
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <Stat label={t({ en: "Verified reviews", zh: "認證評價" })} value={`${SITE.rating.count}`} />
              <Stat label={t({ en: "Average rating", zh: "平均評分" })} value={`${SITE.rating.score}★`} />
              <Stat label={t({ en: "Languages", zh: "服務語言" })} value={`${SITE.languages.length}`} />
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
            <p className="text-xs uppercase tracking-[0.22em] text-accent font-medium">
              {t({ en: "About Shella Chan", zh: "認識 Shella Chan" })}
            </p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-primary">REALTOR® • {SITE.brokerage}</h2>
            <div className="mt-5 space-y-4 text-[15px] text-muted-foreground leading-relaxed">
              <p>
                {t({
                  en: "Shella began her real estate career in 2005 as a full-time real estate assistant before becoming a licensed REALTOR® in 2018, bringing more than 15 years of industry insight to her clients.",
                  zh: "Shella 自 2005 年起以全職不動產助理身分踏入業界,2018 年取得 REALTOR® 執照,累積逾 15 年產業經驗,為客戶帶來深厚的市場洞察。",
                })}
              </p>
              <p>
                {t({
                  en: "She is known for her professionalism, patience and personal care — guiding first-time buyers, growing families and elderly parents through some of life’s biggest transitions with calm, clear advice.",
                  zh: "她以專業、耐心與貼心著稱,以沉穩清晰的建議,陪伴首次購屋族、成長中的家庭與年長父母走過人生重大轉折。",
                })}
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
            <p className="text-xs uppercase tracking-[0.22em] text-accent font-medium">
              {t({ en: "About Tony Chan", zh: "認識 Tony Chan" })}
            </p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-primary">REALTOR® • {SITE.brokerage}</h2>
            <div className="mt-5 space-y-4 text-[15px] text-muted-foreground leading-relaxed">
              <p>
                {t({
                  en: "Tony works alongside Shella as part of the Shella & Tony Chan Real Estate Team, supporting clients through buying, selling and real estate transitions across Greater Vancouver.",
                  zh: "Tony 與 Shella 共同組成 Shella & Tony Chan 不動產團隊,於大溫哥華地區協助客戶處理買、賣與不動產相關轉換。",
                })}
              </p>
              <p>
                {t({
                  en: "Together, Shella and Tony bring a balanced, family-led approach — pairing detailed market knowledge with the personal attention every client deserves.",
                  zh: "Shella 與 Tony 攜手提供均衡且以家庭為導向的服務——結合扎實的市場知識與每位客戶應得的細心關照。",
                })}
              </p>
              <div className="pt-2">
                <TeamPhones variant="cards" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-secondary/50">
        <div className="container-app">
          <SectionHeading
            eyebrow={{ en: "Client words", zh: "客戶心聲" }}
            title={{ en: "What clients say about working with us.", zh: "客戶與我們合作後的真實分享。" }}
          />
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
