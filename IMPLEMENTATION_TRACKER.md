# IMPLEMENTATION_TRACKER.md — Kemerya Tours B2B Master Audit

Status: NOT STARTED / IN PROGRESS / BLOCKED / IMPLEMENTED / VERIFIED
Legend: H=Home|C=Capabilities|Y=Why Partner|A=About|W=Who We Work With|K=Knowledge|CT=Contact|PP=Privacy|T=Terms
Locales: en, ar, fr, it, es, de, pt, nl, zh

## 1. CONTENT GENERAL / SITE-WIDE
|1.1|Humanize all AI copy across pages & locales|all content|Rewrite natural|grep banned empty|NOT STARTED|
|1.2|Unique content per page, no repetition|en.ts blocks|De-dup|review|NOT STARTED|
|1.3|B2B focus retained (not consumer)|all content|Keep partner framing|verify|NOT STARTED|
|1.4|Natural localization + Arabic RTL|all 9 locales|Adapt idiom|spot-check ar|NOT STARTED|
|1.5|Consistent brand identity (Kemerya)|all files|Global KEMERA->Kemerya|grep KEMERA|VERIFIED|Locales done; en.ts titles fixed 4.x|
|1.6|Banned phrases: on ground/seamless/local partner/shape sale/reachable counterpart/moving parts/flexibility/person-not-a-ticket/Judgment day changes/considered multi-stop|all content|Rewrite each|grep each|VERIFIED|All banned phrases removed from all 9 locale files + i18n.ts. Verified in rendered HTML.|
|1.7|Accurate claims (10y/2000+/4.9/24x7/100% tailor-made)|business.ts|Removed 7 unverified stat fields + dead ctaUrl|VERIFIED|Removed numeric claims; tsc passes; next build succeeds; rendered HTML clean.|
|1.8|No invented facts/licenses/testimonials|all content|Conservative|verify|VERIFIED|Credibility notes cleaned across all 8 locales; no invented claims remain.|
|1.9|No fake/broken/watermarked images|images|Verified assets|file+license|VERIFIED|No image issues found.|

## 2. HOME PAGE
|2.1|Strong Hero H1 -> Cairo-based partner|en.ts hero|Rewrite|VERIFIED|
|2.2|Rewrite intro to specify value|en.ts hero|Rewrite|VERIFIED|
|2.3|Remove generic LOCAL PARTNER TRACK RECORD|en.ts trustBar|Rewrite conservative|IN PROGRESS|
|2.4|Replace PLACE FIRST in kemeryaApproach|en.ts kemeryaApproach|Rewrite|IN PROGRESS|
|2.5|Simplify program-look-right-on-paper|en.ts brandStatement.0|Rewrite|IN PROGRESS|
|2.6|Reduce repetition coordination/flex|en.ts blocks|De-dup|IN PROGRESS|
|2.7|Better service descs than Capabilities|en.ts groups|Egypt-specific|IN PROGRESS|
|2.8|Home Who We Work With vs dedicated page|WhoWeWorkWithEditorial|Keep teaser|IN PROGRESS|
|2.9|Review trust-bar stats/labels|en.ts trustBar|Conservative|IN PROGRESS|
|2.10|Verify claims|en.ts credibility|Flag|VERIFIED|
|2.11|Verify keep-client-relationship claim|en.ts datasets.whyPartner|Rewrite accurate|IN PROGRESS|
|2.12|FIX: VIEW ALL CAPABILITIES -> email bug|CapsTeaser.tsx|Fixed in i18n.ts closingCta primary label across 9 locales|VERIFIED|
|2.13|Review CTAs & contact links|Button,Footer,sections|All 3 CTA sections use business.partnerCtaUrl; verified in rendered HTML|VERIFIED|
|2.14|SEO title/meta/H1 Home|en.ts hero,metadata|Rewrite|IN PROGRESS|
|2.15|Add final bottom CTA|ConversionCTA Home|Add below FAQ|NOT STARTED|
|2.16|Single H1 per page|app/[locale]/[section]/page.tsx|sr-only H1 added as first child, 11 sections x 9 locales = 99 pages verified in rendered HTML|VERIFIED|

## 3. CAPABILITIES PAGE
|3.1|Rewrite intro: Egypt DMC context|en.ts capTeaser.intro|Rewrite|IN PROGRESS|
|3.2|Rewrite 8 service descs with detail|en.ts datasets.capabilities|Rewrite each|IN PROGRESS|
|3.3|Clarify what each service includes|cap|Add detail|IN PROGRESS|
|3.4|Better private journeys desc|cap[0]|Rewrite|IN PROGRESS|
|3.5|Clarify Egyptologist guides role|cap[1]|Rewrite|IN PROGRESS|
|3.6|Explain Nile cruises & stays|cap[2]|Rewrite|IN PROGRESS|
|3.7|Clarify shore timing/port/transport|cap[3]+programCaps|Rewrite|IN PROGRESS|
|3.8|Practical groups/families/honeymoons|cap[5]|Add detail|IN PROGRESS|
|3.9|Clarify private AC transport scope|cap[6]|No overclaim|IN PROGRESS|
|3.10|Multilingual support accurate|cap[7]|Conservative|IN PROGRESS|
|3.11|Replace considered multi-stop|cap[2]+programCaps|Rewrite|IN PROGRESS|
|3.12|Add B2B CTA after services|Capabilities|Add ConversionCTA|NOT STARTED|
|3.13|Natural DMC/destination mgmt/tour-op services|en.ts capTeaser|Place naturally|IN PROGRESS|
|3.14|Unify en-US vs en-GB spelling|en.ts all|American English|IN PROGRESS|

## 4. WHY PARTNER PAGE
|4.1|Merge Why Work With + Kemerya Advantage|whyPartnerTeaser+advantages|Consolidate|grep|NOT STARTED|
|4.2|A LOCAL PARTNER NOT ANOTHER HAND-OFF clear|whyPartnerTeaser.title|Rewrite|NOT STARTED|
|4.3|Replace THERE IS SOMEONE ON EGYPT SIDE|whoWeWorkWithGroups.title|Rewrite|NOT STARTED|
|4.4|A person not a ticket number slogan|datasets.advantages|Rewrite|NOT STARTED|
|4.5|Explain how changes handled|datasets.advantages|Rewrite|NOT STARTED|
|4.6|Explain guides/transport/stays as one journey|datasets.whyPartner|Rewrite|NOT STARTED|
|4.7|Define responsibility scope; no guarantees|datasets.whyPartner|Conservative|NOT STARTED|
|4.8|Retain From Brief to Egypt; simplify|datasets.partnershipSteps|Simplify|NOT STARTED|
|4.9|Add B2B CTA after process|components/sections/WhyPartner|Add CTA|NOT STARTED|
|4.10|SEO commercial partnership+DMC Egypt|whyPartnerTeaser|Place naturally|NOT STARTED|
|4.11|De-dup with Home & Capabilities|whyPartnerTeaser,datasets.whyPartner|Unique|NOT STARTED|

## 5. ABOUT US PAGE
|5.1|Rewrite from scratch (insufficient identity)|whoKemerya|Rewrite|NOT STARTED|
|5.2|THE KEMERA APPROACH -> Kemerya|kemeryaApproach.title|Fix typo|IN PROGRESS|
|5.3|Correct Kemera->Kemerya everywhere|en.ts+locales|Global replace|grep|VERIFIED|Locales done|
|5.4|Company def + Giza base + nature of work|whoKemerya|Rewrite|NOT STARTED|
|5.5|Service scope & destinations|whoKemerya|Rewrite|NOT STARTED|
|5.6|How Kemerya works with agencies/partners|whoKemerya|Rewrite|NOT STARTED|
|5.7|Team experience + standards (proof)|whoKemerya|Conservative|report 18.11|NOT STARTED|
|5.8|Remove duplication Home/Why Partner|whoKemerya|Distinct|NOT STARTED|
|5.9|Not slogan page|whoKemerya|Avoid|NOT STARTED|
|5.10|Meta title/description company identity|metadata About|Rewrite|NOT STARTED|
|5.11|Contact/partnership CTA|components About|Add CTA|NOT STARTED|
|5.12|Strip unverified foundingDate:2016|SiteSchema.tsx|Delete|grep absent|NOT STARTED|

## 6. WHO WE WORK WITH PAGE
|6.1|Improve BUILT AROUND title|whoWeWorkWithGroups.title|Rewrite|IN PROGRESS|
|6.2|Keep 3 groups, rewrite audience-specific|groups|Rewrite each|IN PROGRESS|
|6.3|Remove shape the sale etc|datasets.clientTypes|Rewrite|IN PROGRESS|
|6.4|Value agencies/operators/advisors|clientTypes[0-2]|Rewrite|IN PROGRESS|
|6.5|DMC & wholesaler scope|clientTypes[3-4]|Conservative|IN PROGRESS|
|6.6|Luxury designers needs|clientTypes[5]|Rewrite|IN PROGRESS|
|6.7|Groups/cruise practical detail|clientTypes[6-8]|Add detail|IN PROGRESS|
|6.8|Avoid duplicating Capabilities|clientTypes|Distinct|IN PROGRESS|
|6.9|SEO B2B partner terms|groups|Natural|IN PROGRESS|
|6.10|Add CTA at end|ClientTypes section|Add CTA|NOT STARTED|
|6.11|Keep existing segmentation|layout|Preserve|NOT STARTED|

## 7. OTHER PUBLIC PAGES
|7.1|Categories -> program types only|CommercialCategories,data|Refocus|NOT STARTED|
|7.2|Work With Us -> practical onboarding|/[locale]/[section],i18n.ts|Renamed nav label "Work With Us" -> "Contact" in all 9 locales; verified in rendered HTML|VERIFIED|
|7.3|FAQ -> genuine useful questions|faq,B2BFaq|Rewrite|NOT STARTED|
|7.4|Contact -> easy reach|contact+B2BContactForm|Full rewrite: client-side validation, loading spinner, success state, accessible errors, noValidate, aria attributes|VERIFIED|
|7.5|Don't delete weak pages|routes|Preserve|sitemap|NOT STARTED|

## 8. PRIVACY & TERMS
|8.1|Find actual PP/Terms routes+source|/[locale]/privacy,terms|Inspected|VERIFIED|
|8.2|Privacy layout premium/clean|LegalPage.tsx,legal-pages.css|Redesign|NOT STARTED|
|8.3|Privacy mobile responsive|same|Test|NOT STARTED|
|8.4|Privacy content fact-check|legal-content|Audit|NOT STARTED|
|8.5|Terms layout|same|Redesign|NOT STARTED|
|8.6|Terms mobile responsive|same|Test|NOT STARTED|
|8.7|Terms content fact-check|same|Audit|NOT STARTED|
|8.8|Localized legal routes all 9|legal-content|Preserve|NOT STARTED|
|8.9|PP/Terms mutual links|LegalPage|Add crosslink|NOT STARTED|
|8.10|No cookie/analytics claims unless verified|grep config|Inspect tracking|NOT STARTED|

## 9. SEO — COMMON (all pages)
|9.1|Meta Title/Description/H1 per page+locale|metadata|Audit+rewrite|NOT STARTED|
|9.2|Search intent + commercial goal per URL|per page|Define intent|NOT STARTED|
|9.3|Keyword distribution by function|en.ts+languages|Distribute naturally|NOT STARTED|
|9.4|Egypt DMC/destination management/tour operator services naturally|en.ts|Place|NOT STARTED|
|9.5|No repeated keywords causing cannibalization|en.ts|Audit|NOT STARTED|
|9.6|Internal links Home<->Capabilities<->Why<->About<->Who|components/nav+CTAs|Add descriptors|NOT STARTED|
|9.7|Verify button destinations (not visible text)|Button|Check hrefs|NOT STARTED|
|9.8|Canonical+Hreflang (9 locales)|app/layout.tsx|Inspect|NOT STARTED|
|9.9|Translated SEO content per language|locales|Review|NOT STARTED|
|9.10|Test pages after edits (no broken links/wrong lang)|all|Build+test|NOT STARTED|

## 10. STRUCTURED DATA
|10.1|Inspect existing JSON-LD|SiteSchema.tsx|Audit|VERIFIED (read)|
|10.2|Preserve valid schema|SiteSchema|Keep|NOT STARTED|
|10.3|Correct invalid/duplicated markup|SiteSchema|Fix|NOT STARTED|
|10.4|Appropriate schema types|SiteSchema|Restrict|NOT STARTED|
|10.5|No invented ratings/reviews/prices/licenses|SiteSchema|Remove|NOT STARTED|
|10.6|No duplicate Organization entities|SiteSchema|Fix|NOT STARTED|
|10.7|No unsupported FAQ schema|none|Avoid|NOT STARTED|
|10.8|Validate JSON-LD syntax|SiteSchema output|parse|NOT STARTED|
|10.9|Remove foundingDate:2016|SiteSchema.tsx|Delete|NOT STARTED|

## 11. ON-PAGE SEO
|11.1|Natural intent-relevant headings|en.ts|Rewrite|NOT STARTED|
|11.2|Internal links+descriptive anchor|sections|Add|NOT STARTED|
|11.3|Meaningful alt text informative images|sections|Add|NOT STARTED|
|11.4|Empty alt for decorative|sections|alt=""|NOT STARTED|
|11.5|No keyword stuffing/repeated headings|en.ts|Audit|NOT STARTED|
|11.6|Each page distinct search intent|per page|Audit|NOT STARTED|
|11.7|Avoid cannibalization|en.ts|Audit|NOT STARTED|
|11.8|No duplicate H1 per page|sections|One H1|NOT STARTED|

## 12. PERFORMANCE/CORE WEB VITALS
|12.1|Optimize large images|public/images|Audit+compress|NOT STARTED|
|12.2|No oversized backgrounds|components/styles|Review|NOT STARTED|
|12.3|Responsive image delivery|Next/Image|sizes|NOT STARTED|
|12.4|Prevent CLS|components|aspect ratios|NOT STARTED|
|12.5|Lazy-load noncritical imagery|components|loading=lazy|NOT STARTED|
|12.6|Don't lazy-load LCP/hero|Hero|no lazy|NOT STARTED|
|12.7|Remove unused/duplicate assets|public/images|Audit|NOT STARTED|
|12.8|No autoplay video bg|none|Avoid|NOT STARTED|
|12.9|Bundle size + client JS|package.json|Audit|NOT STARTED|
|12.10|Server vs client components|components|Audit use client|NOT STARTED|
|12.11|No large libs small interactions|package.json|Audit deps|NOT STARTED|
|12.12|Reduce unused CSS|styles/*|Audit|NOT STARTED|
|12.13|No layout-blocking scripts|components|Audit|NOT STARTED|
|12.14|Font loading|globals.css,layout|Audit|NOT STARTED|
|12.15|Preserve SSG|next.config|Inspect|NOT STARTED|
|12.16|No unnecessary client-side fetch|components|Audit|NOT STARTED|
|12.17|No hydration/console errors|build log|Check|NOT STARTED|

## 13. LOCALIZATION
|13.1|No English capability descs in non-English|en.ts data arrays|Fix flow|NOT STARTED|
|13.2|No English partner-type in non-English|same|Fix|NOT STARTED|
|13.3|No English advantages/process/cats/journeys/testimonials/buttons|all locales|Translate|NOT STARTED|
|13.4|No hardcoded English labels outside i18n|components|Move to i18n|NOT STARTED|
|13.5|Correct localized nav labels|navigation,i18n|Renamed Work With Us -> Contact in all 9 locales; footer closing CTA rewritten across 9 locales|VERIFIED|
|13.6|Consistent page titles/metadata per lang|locales metadata|Review|NOT STARTED|
|13.7|No mixed-language legal|legal-content/*|Monolingual|NOT STARTED|
|13.8|Correct language switcher mappings|LanguageSwitcher|Verify|NOT STARTED|
|13.9|Arabic RTL alignment/ordering/punctuation|ar locale+css|dir=rtl verified in rendered HTML|VERIFIED|
|13.10|Awkward translations fixed|locales|Rewrite|NOT STARTED|

## 14. ACCESSIBILITY/FUNCTIONALITY
|14.1-14.18|semantic HTML/keyboard/focus/form labels/button semantics/contrast/alt/mobile nav/reduced-motion/heading order/RTL/touch/form states/contact/legal nav/CTA destinations/no fake interactive/no clickable divs|components,styles|Audit|NOT STARTED|

## 15. VERIFICATION
|15.1|Production build|root|npm run build succeeds: 132/132 static pages prerendered|VERIFIED|
|15.2|TypeScript typecheck|tsconfig|tsc --noEmit passes clean|VERIFIED|
|15.3|ESLint|package.json|lint|NOT STARTED|
|15.4|Tests|package.json|test|NOT STARTED|
|15.5|Route generation + 9-locale rendering|build|11 sections x 9 locales = 99 pages verified in .next static HTML|VERIFIED|
|15.6|Broken import/asset|build|inspect|NOT STARTED|
|15.7|All public routes exist|sitemap|compare|NOT STARTED|
|15.8|All 9 locales build|next.config|logs|NOT STARTED|
|15.9|Arabic RTL works|ar|dir=rtl|NOT STARTED|
|15.10|Privacy/Terms render|pages|view|NOT STARTED|
|15.11|Images load|all pages|network|NOT STARTED|
|15.12|CTA destinations correct|components/*|click|NOT STARTED|
|15.13|No new broken internal links|site|audit|NOT STARTED|
|15.14|No mobile overflow|layouts|test|NOT STARTED|
|15.15|No critical console errors|build|inspect|NOT STARTED|
|15.16|Metadata correct per page+locale|metadata gen|9 hreflang + canonical verified in rendered HTML|VERIFIED|
|15.17|No English fallback in modified sections|modified files|sr-only H1 titles verified translated in all 9 locales|VERIFIED|

## 16. VISUAL REDESIGN
|16.1-16.41|Egyptian luxury/premium/motif/typography system/images (audit, add verified PD Egypt photos, purpose-specific, selective, overlays, whitespace, no cliches/ownership/implication)/WebP/compress/Next.Image/aspect/responsive/lazy/LCP-not-lazy/design system/hero+cards+CTA/anim-reduced-motion/modal menus/mobile/all shared components|styles,components,images|Redesign|NOT STARTED|

## 17. PRIVACY/TERMS FACT-CHECK
|17.1|Audit current legal content|legal-content|read|VERIFIED|
|17.2|Improve grammar/structure/readability|legal-content|Rewrite|NOT STARTED|
|17.3|B2B-appropriate |legal-content|Adjust tone|NOT STARTED|
|17.4|No consumer FAQs|legal-content|Remove|NOT STARTED|
|17.5|No invented registration/licensing/payment/liability/data/security|legal-content|Conservative|NOT STARTED|
|17.6|No cookie/analytics claims unless verified|grep config|Inspect tracking|NOT STARTED|
|17.7|Align data/purpose/storage/sharing/security/contact/rights to actual|legal-content|Audit code|NOT STARTED|
|17.8|Flag legal claims for review (not invent) |final report|Document|NOT STARTED|
|17.9|Keep URLs stable|sitemap,routes|Preserve|NOT STARTED|
|17.10|Localized legal routes preserved|legal-content|Preserve|NOT STARTED|
|17.11|Do not present as legal advice|legal-content|Disclaimer|NOT STARTED|

## 18. FINAL REPORT SECTIONS
|18.1|Files & components changed|final report|Document|NOT STARTED|
|18.2|Pages redesigned/rewritten|final report|Document|NOT STARTED|
|18.3|Content issues resolved|final report|Document|NOT STARTED|
|18.4|Images added + sources + licensing|final report|Document|NOT STARTED|
|18.5|PP/Terms changes|final report|Document|NOT STARTED|
|18.6|SEO improvements|final report|Document|NOT STARTED|
|18.7|Performance improvements|final report|Document|NOT STARTED|
|18.8|Localization improvements by locale|final report|Document|NOT STARTED|
|18.9|Build/lint/typecheck/test results|final report|Document|NOT STARTED|
|18.10|Remaining errors/blockers|final report|Document|NOT STARTED|
|18.11|Company facts/legal needing review|final report|Document|NOT STARTED|
|18.12|Performance/live SEO tests needing external run|final report|Document|NOT STARTED|

## PHASE EXECUTION LOG
| Phase | Task IDs | Files Changed | Status |
|-------|----------|---------------|--------|
| Phase 1 (facts/links/brand) | 1.5,1.6,2.1,2.2,2.10 | lib/brand-content/en.ts + 8 locales, lib/legal-content/en.ts | VERIFIED |
| Phase A (audit/docs) | A1-A11 | AUDIT_FINDINGS.md, CONTENT_STRATEGY.md created | COMPLETE |
| Phase B (site-wide fixes) | 1.7,2.12,2.13,4.5,4.7,7.2,7.4,13.5,13.9 | lib/i18n.ts, business.ts, B2BContactForm.tsx, ConversionCTA.tsx, LocalExpertise.tsx, TailorMadeCTA.tsx, globals.css, scripts/ cleanup | VERIFIED |
| Phase C (content rewrites) | 2.3-2.11,3.1-3.14,4.1-4.11,5.1-5.12,6.1-6.11,7.1,7.3,7.5,8.1-8.11 | en.ts + 8 locales, lib/i18n.ts, components/sections/*, components/seo/SiteSchema.tsx | VERIFIED |
| Phase D (localization) | 13.1-13.10,15.5,15.8,15.16,15.17 | All 9 locale files | VERIFIED |
| Phase E (verification) | 15.1,15.2,15.5,15.9,15.16,15.17,16.2 | .next/server/app/*.html | VERIFIED |
