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
import { LegalReadingProgress } from "@/components/LegalReadingProgress";

/**
 * LegalLayout — Framed manuscript-style layout for Privacy Policy
 * and Terms & Conditions pages.
 *
 * Key differences from the previous design:
 *  - A decorative "frame" container wraps the TOC + content
 *  - An Egyptian-pattern overlay adds texture inside the frame
 *  - A reading-progress bar sits fixed at the top of the viewport
 *  - Corner ornaments remain but are visually subtler
 *  - RTL-aware: TOC moves to the right in Arabic
 */
export function LegalLayout({ locale, content, ui }: LegalPageProps) {
  const dir = getDirection(locale);

  return (
    <div className="legal-layout" dir={dir}>
      {/* Reading progress bar (fixed, top of viewport) */}
      <LegalReadingProgress />

      {/* Decorative Egyptian pattern borders (top & bottom) */}
      <PharaonicDivider
        variant="nile"
        className="legal-divider legal-divider--top"
        aria-hidden={true}
      />

      {/* Framed container */}
      <div className="legal-frame">
        <div className="legal-frame__pattern" aria-hidden={true}>
          <Obelisk />
        </div>

        {/* Inner layout: TOC + main content */}
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

        <div className="legal-frame__pattern legal-frame__pattern--bottom" aria-hidden={true}>
          <LotusFlower />
        </div>
      </div>

      <PharaonicDivider
        variant="lotus"
        className="legal-divider legal-divider--bottom"
        aria-hidden={true}
      />

      {/* Corner ornaments (kept subtle, z-indexed) */}
      <div className="legal-ornament legal-ornament--top-left" aria-hidden={true}>
        <Obelisk />
      </div>
      <div className="legal-ornament legal-ornament--top-right" aria-hidden={true}>
        <SunDisk />
      </div>
      <div className="legal-ornament legal-ornament--bottom-left" aria-hidden={true}>
        <NileWave />
      </div>
      <div className="legal-ornament legal-ornament--bottom-right" aria-hidden={true}>
        <LotusFlower />
      </div>

      {/* Back-to-top button */}
      <a href="#legal-page-top" className="legal-back-to-top" aria-label={ui.backToTop}>
        ↑
      </a>
    </div>
  );
}
