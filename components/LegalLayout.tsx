import { Obelisk } from "@/components/ui/pharaonic/Obelisk";
import { LotusFlower } from "@/components/ui/pharaonic/LotusFlower";
import { SunDisk } from "@/components/ui/pharaonic/SunDisk";
import { NileWave } from "@/components/ui/pharaonic/NileWave";
import { PharaonicDivider } from "@/components/ui/pharaonic/PharaonicDivider";
import { HieroglyphicBorder } from "@/components/ui/pharaonic/HieroglyphicBorder";
import { getDirection } from "@/lib/i18n";
import type { LegalPageProps } from "@/components/LegalPage";
import { LegalPage } from "@/components/LegalPage";
import { TableOfContents } from "@/components/TableOfContents";

/**
 * Shared layout wrapper for Privacy Policy and Terms & Conditions pages.
 * Provides Egyptian-themed SVG ornaments, a table-of-contents sidebar,
 * and responsive structure across all 9 locales.
 */
export function LegalLayout({ locale, content, ui }: LegalPageProps) {
  const dir = getDirection(locale);

  return (
    <div className="legal-layout" dir={dir}>
      {/* ── Top ornaments ── */}
      <div
        className="legal-ornament legal-ornament--top-left"
        aria-hidden={true}
      >
        <Obelisk />
      </div>
      <div
        className="legal-ornament legal-ornament--top-right"
        aria-hidden={true}
      >
        <LotusFlower />
      </div>

      <PharaonicDivider
        variant="nile"
        className="legal-divider legal-divider--top"
        aria-hidden={true}
      />

      {/* ── Main content area ── */}
      <div className="legal-layout__inner">
        <TableOfContents
          sections={content.sections}
          ui={ui}
          locale={locale}
        />
        <div className="legal-layout__content">
          <HieroglyphicBorder
            variant="horizontal"
            className="legal-hiero-border legal-hiero-border--top"
            aria-hidden={true}
          />
          <LegalPage locale={locale} content={content} ui={ui} />
          <HieroglyphicBorder
            variant="horizontal"
            className="legal-hiero-border legal-hiero-border--bottom"
            aria-hidden={true}
          />
        </div>
      </div>

      {/* ── Bottom ornaments ── */}
      <PharaonicDivider
        variant="lotus"
        className="legal-divider legal-divider--bottom"
        aria-hidden={true}
      />
      <div
        className="legal-ornament legal-ornament--bottom-left"
        aria-hidden={true}
      >
        <NileWave />
      </div>
      <div
        className="legal-ornament legal-ornament--bottom-right"
        aria-hidden={true}
      >
        <SunDisk />
      </div>

      {/* Back-to-top button floating at bottom-right of content */}
      <a href="#legal-page-top" className="legal-back-to-top" aria-label={ui.backToTop}>
        ↑
      </a>
    </div>
  );
}
