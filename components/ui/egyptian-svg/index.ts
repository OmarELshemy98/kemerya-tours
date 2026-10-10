/**
 * Egyptian SVG component system — consolidated index.
 *
 * This barrel re-exports the refined static components from
 * `./egyptian-svg/` alongside the original animated pharaonic
 * components from `./pharaonic/` for backwards compatibility.
 *
 * New integrations should prefer the static components below;
 * they use CSS custom properties and `currentColor` for full
 * theme control and respect `prefers-reduced-motion`.
 */

// ── Refined static Egyptian SVG components ──────────────────
export { TempleGateway } from "./TempleGateway";
export { LotusBloom } from "./LotusBloom";
export { PapyrusStems } from "./PapyrusStems";
export { WingedSunDisc } from "./WingedSunDisc";
export { ColumnCapital } from "./ColumnCapital";
export { EgyptianGeometricBorder } from "./EgyptianGeometricBorder";
export { LotusDivider } from "./LotusDivider";
export { NileLinework } from "./NileLinework";
export { ObeliskSilhouette } from "./ObeliskSilhouette";
export { SandstoneReliefTexture, sandstoneReliefDataUri } from "./SandstoneReliefTexture";
export { TempleColumnPair } from "./TempleColumnPair";
export { LotusCornerOrnament } from "./LotusCornerOrnament";
export { TrustStatIcon } from "./TrustStatIcons";

// ── Type re-exports ──────────────────────────────────────────
export type { EgyptianSvgProps } from "./types";

// ── Legacy animated Pharaonic components (backwards-compatible) ─
export { SunDisk, sunDiskStyles } from "../pharaonic/SunDisk";
export { Obelisk, obeliskStyles } from "../pharaonic/Obelisk";
export { LotusFlower, lotusStyles } from "../pharaonic/LotusFlower";
export { NileWave, nileWaveStyles } from "../pharaonic/NileWave";
export { EgyptianBird, egyptianBirdStyles } from "../pharaonic/EgyptianBird";
export { HieroglyphicBorder, hieroglyphStyles } from "../pharaonic/HieroglyphicBorder";
export { TempleFrame, templeFrameStyles } from "../pharaonic/TempleFrame";
export { PharaonicDivider, pharaonicDividerStyles } from "../pharaonic/PharaonicDivider";
