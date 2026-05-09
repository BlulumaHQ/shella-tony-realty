import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SITE } from "@/data/site";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TeamPhones } from "@/components/site/TeamPhones";
import { Mail, MapPin, Globe2, Check } from "lucide-react";
import { useT } from "@/i18n/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Shella & Tony Chan Real Estate Team" },
      { name: "description", content: "Get in touch with the Shella & Tony Chan real estate team. Multilingual consultations across Greater Vancouver." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const t = useT();
  return (
    <section className="py-20 md:py-28">
      <div className="container-app">
        <SectionHeading
          eyebrow={{ en: "Get in touch", zh: "聯絡我們" }}
          title={{ en: "Let’s start a conversation.", zh: "讓我們先聊一聊。" }}
          description={{
            en: "Whether you’re ready to list, exploring options or just have a question — we’d love to hear from you. No pressure, no obligation.",
            zh: "不論您準備出售、正在比較選擇,或只是有疑問——我們都很樂意為您服務。沒有壓力,也無須承諾。",
          }}
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="bg-card rounded-3xl border border-border/60 p-8 md:p-10 shadow-soft">
            {sent ? (
              <div className="py-12 text-center">
                <div className="inline-flex w-14 h-14 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-serif text-2xl text-primary">
                  {t({ en: "Thank you — message received.", zh: "感謝您——我們已收到您的訊息。" })}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t({ en: "Shella or Tony will be in touch with you shortly.", zh: "Shella 或 Tony 將盡快與您聯繫。" })}
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label={t({ en: "Full name", zh: "姓名" })} name="name" required />
                  <Field label={t({ en: "Phone", zh: "電話" })} name="phone" type="tel" />
                </div>
                <Field label={t({ en: "Email", zh: "電子郵件" })} name="email" type="email" required />
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t({ en: "I’m interested in", zh: "我想諮詢的服務" })}
                  </label>
                  <select className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30">
                    <option>{t({ en: "Buying a home", zh: "購屋" })}</option>
                    <option>{t({ en: "Selling my home", zh: "出售房屋" })}</option>
                    <option>{t({ en: "Home valuation", zh: "房屋估價" })}</option>
                    <option>{t({ en: "Downsizing / seniors transition", zh: "換屋換小 / 長者安居" })}</option>
                    <option>{t({ en: "Investment property", zh: "投資物件" })}</option>
                    <option>{t({ en: "Relocation", zh: "海外搬遷" })}</option>
                    <option>{t({ en: "Just have a question", zh: "其他疑問" })}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t({ en: "Message", zh: "留言內容" })}
                  </label>
                  <textarea
                    rows={5}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
                    placeholder={t({ en: "Tell us a little about what you’re looking for…", zh: "請簡單告訴我們您正在尋找的物件或需求……" })}
                  />
                </div>
                <button type="submit" className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-medium hover:bg-primary/90 w-full sm:w-auto">
                  {t({ en: "Send message", zh: "送出訊息" })}
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-5">
            <div className="bg-card rounded-2xl p-6 border border-border/60 shadow-soft">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {t({ en: "Call or text directly", zh: "直接電話或簡訊聯繫" })}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {t({ en: "Each agent answers their own line — pick the one you'd like to reach.", zh: "每位經紀人各自接聽自己的電話——請選擇您想聯繫的對象。" })}
              </p>
              <div className="mt-4">
                <TeamPhones variant="cards" />
              </div>
            </div>
            <InfoCard icon={Mail} title={t({ en: "Email", zh: "電子郵件" })}>
              <p className="text-foreground">{SITE.email}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {t({ en: "We typically respond within a few hours.", zh: "我們通常會在數小時內回覆。" })}
              </p>
            </InfoCard>
            <InfoCard icon={MapPin} title={t({ en: "Office", zh: "辦公室" })}>
              <p className="text-foreground leading-relaxed">{SITE.address}</p>
              <p className="text-xs text-muted-foreground mt-1">{SITE.brokerage}</p>
            </InfoCard>
            <InfoCard icon={Globe2} title={t({ en: "Languages", zh: "服務語言" })}>
              <p className="text-foreground">{SITE.languages.join(" • ")}</p>
            </InfoCard>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-foreground mb-2">
        {label}{required && <span className="text-accent"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
      />
    </div>
  );
}

function InfoCard({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-card rounded-2xl p-6 border border-border/60 shadow-soft flex gap-4">
      <div className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-secondary text-accent shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <div className="text-sm">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{title}</p>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
}
