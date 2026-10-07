import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { getPageCopy } from "@/lib/brand-content";
import type { Locale, UiTranslations } from "@/lib/i18n";

type LocaleSiteShellProps = {
  locale: Locale;
  copy: ReturnType<typeof getPageCopy>;
  ui: UiTranslations;
  children: ReactNode;
};

export function LocaleSiteShell({ locale, copy, ui, children }: LocaleSiteShellProps) {
  return (
    <div
      className="min-h-screen bg-[var(--color-ivory)]"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <Header locale={locale} copy={copy.nav} ui={ui} />
      <main id="main-content">{children}</main>
      <Footer locale={locale} copy={copy.footer} ui={ui} />
    </div>
  );
}