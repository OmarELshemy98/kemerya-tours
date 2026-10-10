# AUDIT_FINDINGS.md — Kemerya Tours B2B Website

## Scope

Audit of the Next.js 16 B2B website at `kemerya-tours` repository.
Nine supported locales: en, ar, fr, it, es, de, pt, nl, zh.

Audit methods: source inspection of all route files, component files, data
files, localization files, CSS, metadata generation, and rendered static HTML
in `.next/server/app/`.

---

## Findings Summary

| ID | Severity | Affected | Finding | Root Cause | Fix | Status |
|----|----------|----------|---------|------------|-----|--------|
| A1 | High | Header.tsx:79, Footer.tsx:92 | Nav item "Work With Us" linked to `/:locale/contact` | Label implied distinct page; destination was Contact | Rename nav label to "Contact" in all 9 locales | VERIFIED |
| A2 | High | Footer.tsx:92 | Footer nav used "Work With Us" for Contact link | Same root cause as A1 | Fixed via i18n.ts nav label change | VERIFIED |
| A3 | Medium | lib/i18n.ts | Footer closing CTA used old AI-sounding content | Stale i18n.ts content not updated when brand-content was rewritten | Replace with professional B2B copy in all 9 locales | VERIFIED |
| A4 | Medium | data/business.ts | Unverified stats: 10+, 2,000+, 4.9, 24/7, 100% | Historical claims never verified | Remove dead/unused stat fields from business.ts | VERIFIED |
| A5 | Medium | Footer.tsx, LocalExpertise.tsx, TailorMadeCTA.tsx, ConversionCTA.tsx | `business.ctaUrl` unused; `partnerCtaUrl` is active | Stale field from legacy code | Remove ctaUrl; update 3 components to use partnerCtaUrl | VERIFIED |
| A6 | Medium | B2BContactForm.tsx | No loading/success/error states; browser-native validation only | mailto: submission with no client-side enhancement | Add validation, loading spinner, success state, accessible errors | VERIFIED |
| A7 | Low | lib/i18n.ts (translations) | Old translations object had AI-sounding hero/trust content | Dead code — overridden by brand-content via getPageCopy | Documented; nav/footer sections updated | VERIFIED |
| A8 | Low | scripts/ directory | 22+ temporary dev scripts left in repo | Leftover from development sessions | Deleted all temporary scripts | VERIFIED |
| A9 | Low | lib/brand-content/index.ts | getPageCopy hardcoded metricValues for trust icons | Intentional design — icon lookup keys, not displayed text | No change needed | VERIFIED |
| A10 | Low | LocaleSiteShell.tsx | Section pages had H2s but no H1 | No top-level heading | Added sr-only H1 via getSectionTitle() (Task 2.16) | VERIFIED |
| A11 | Low | [locale]/[section]/page.tsx | Section pages lacked single H1 | Same as A10 | Fixed as part of Task 2.16 | VERIFIED |

---

## Detailed Findings

### A1/A2: "Work With Us" nav item linked to Contact page

**Status:** VERIFIED

**Description:** The navigation label "Work With Us" pointed to `/:locale/contact`.
The label implied a distinct partnership page, but the destination was the
generic Contact page. Across all 9 locales, the nav label was translated as
"Work With Us" / "اعمل معنا" / "Travaillez Avec Nous" / etc.

**Root cause:** The nav item was named "Work With Us" but was always wired to
the Contact route. No separate "Work With Us" page exists.

**Fix:** Changed `workWithUs` label in `lib/i18n.ts` `translations.nav` for all
9 locales to "Contact" / "اتصل بنا" / "Contact" / "Contatto" / "Contacto" /
"Kontakt" / "Contato" / "Contact" / "联系", matching the destination.

**Verification:** Rendered HTML confirmed:
- English: `>Contact<` in nav, "Work With Us" no longer present
- Arabic: `>اتصل بنا<` in nav, `dir="rtl"` confirmed

### A3: Footer closing CTA stale content

**Status:** VERIFIED

**Description:** Footer closing CTA still showed "LET'S BUILD YOUR NEXT
EGYPT PROGRAM." and "Bring us the brief. We'll handle the Egypt side."
across all locales — inconsistent with rewritten brand-content.

**Fix:** Replaced all 9 locales' closingCta headlines, descriptions, and
primary labels with professional B2B copy (e.g., "READY TO COORDINATE AN
EGYPT PROGRAM?" / "GET IN TOUCH").

**Verification:** Rendered HTML confirmed new headlines and labels in all 9 locales.

### A4/A5: Unverified stats and dead business.ts fields

**Status:** VERIFIED

**Description:** `business.ts` exported fields: `experience: "10+"`,
`travelers: "2,000+"`, `rating: "4.9"`, `tailorMade: "100%"`, `support:
"24/7"`, `headline`, `ctaUrl`. None verified against business facts.
None are used in rendered output.

**Fix:** Removed all 7 dead/unverified fields. Updated 3 components
(ConversionCTA, LocalExpertise, TailorMadeCTA) that referenced
`business.ctaUrl` to use `business.partnerCtaUrl`.

**Verification:** `tsc --noEmit` passes clean. `next build` succeeds.

### A6: Contact form lacked submission states

**Status:** VERIFIED

**Description:** Contact form used immediate mailto: redirect with no
client-side validation feedback, loading state, or success state.

**Fix:** Rewrote form with:
- Client-side validation (required fields, email format)
- Accessible error messages (aria-invalid, aria-describedby, role="alert")
- Loading spinner (respects prefers-reduced-motion)
- Success state shown before mailto: opens
- noValidate attribute, duplicate submission prevention
- "(optional)" indicators for phone and destination fields

**Verification:** `tsc --noEmit` passes. `next build` succeeds.
Rendered HTML confirms `noValidate`, `aria-invalid`, `(optional)` present.

### A7/A8/A9/A10/A11

See findings table above for remaining items. All verified through
code inspection, TypeScript compilation, production build, and rendered
HTML analysis.
