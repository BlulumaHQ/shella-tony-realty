import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "en" | "zh";
export type TString = { en: string; zh: string };

type Ctx = { lang: Lang; setLang: (l: Lang) => void };
const LangCtx = createContext<Ctx>({ lang: "en", setLang: () => {} });

const STORAGE_KEY = "site-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const stored = (typeof window !== "undefined" && window.localStorage.getItem(STORAGE_KEY)) as Lang | null;
      if (stored === "en" || stored === "zh") setLangState(stored);
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { window.localStorage.setItem(STORAGE_KEY, l); } catch {}
    if (typeof document !== "undefined") {
      document.documentElement.lang = l === "zh" ? "zh-Hant" : "en";
    }
  };

  const value = useMemo(() => ({ lang, setLang }), [lang]);
  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

export function useLang() { return useContext(LangCtx); }

export function useT() {
  const { lang } = useLang();
  return (s: TString) => s[lang];
}

export function LanguageSwitcher({
  className = "",
  tone = "light",
}: {
  className?: string;
  /** "light" — for light backgrounds. "onPrimary" — for primary/dark backgrounds. */
  tone?: "light" | "onPrimary";
}) {
  const { lang, setLang } = useLang();
  const base =
    tone === "onPrimary"
      ? "border border-primary-foreground/30 text-primary-foreground/85 hover:bg-primary-foreground/10"
      : "border border-border text-foreground/75 hover:border-accent/50 hover:text-accent";
  const active =
    tone === "onPrimary"
      ? "bg-primary-foreground text-primary"
      : "bg-primary text-primary-foreground border-primary";
  const btn = (l: Lang, label: string) => (
    <button
      key={l}
      type="button"
      onClick={() => setLang(l)}
      aria-pressed={lang === l}
      className={`px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider rounded-full transition-colors ${
        lang === l ? active : base
      }`}
    >
      {label}
    </button>
  );
  return (
    <div className={`inline-flex items-center gap-1 ${className}`}>
      {btn("en", "EN")}
      {btn("zh", "中")}
    </div>
  );
}
