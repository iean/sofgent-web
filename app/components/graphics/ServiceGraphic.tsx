import React from "react";

/**
 * Shared service graphic system — consistent teal line-art infographics.
 * One frame (dark-teal gradient + dot grid + glow), themed line-art on top.
 * Use across service cards/blocks so every page shares one visual language.
 */

export type ServiceGraphicName =
  | "mvp"
  | "document-automation"
  | "data"
  | "integration"
  | "design"
  | "devops"
  | "web"
  | "mobile"
  | "qa"
  | "architecture"
  | "ai-feature";

const W = "rgba(255,255,255,0.92)";
const Wd = "rgba(255,255,255,0.4)";
const CY = "#67e8f9";

/* ── Per-theme line-art (drawn inside a 400×240 frame) ───────────── */
const art: Record<ServiceGraphicName, React.ReactNode> = {
  // App/product window with content blocks + accent metric
  mvp: (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x="96" y="56" width="208" height="128" rx="10" stroke={W} strokeWidth="2" fill="rgba(255,255,255,0.03)" />
      <line x1="96" y1="80" x2="304" y2="80" stroke={Wd} strokeWidth="1.5" />
      <circle cx="110" cy="68" r="2.5" fill={CY} /><circle cx="120" cy="68" r="2.5" fill={Wd} /><circle cx="130" cy="68" r="2.5" fill={Wd} />
      <rect x="110" y="96" width="48" height="72" rx="6" stroke={Wd} strokeWidth="1.5" />
      <line x1="120" y1="110" x2="148" y2="110" stroke={Wd} strokeWidth="1.5" /><line x1="120" y1="122" x2="142" y2="122" stroke={Wd} strokeWidth="1.5" /><line x1="120" y1="134" x2="148" y2="134" stroke={Wd} strokeWidth="1.5" />
      <rect x="172" y="96" width="120" height="40" rx="6" stroke={W} strokeWidth="1.6" fill="rgba(103,232,249,0.08)" />
      <path d="M182 122l10-12 8 8 12-16 10 12" stroke={CY} strokeWidth="2" />
      <rect x="172" y="146" width="56" height="22" rx="6" fill={CY} opacity="0.9" />
      <rect x="236" y="146" width="56" height="22" rx="6" stroke={Wd} strokeWidth="1.5" />
    </g>
  ),
  // Document → arrow → structured table (extraction pipeline)
  "document-automation": (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x="70" y="62" width="86" height="116" rx="8" stroke={W} strokeWidth="2" fill="rgba(255,255,255,0.03)" />
      <line x1="86" y1="86" x2="140" y2="86" stroke={Wd} strokeWidth="1.5" /><line x1="86" y1="100" x2="140" y2="100" stroke={Wd} strokeWidth="1.5" /><line x1="86" y1="114" x2="124" y2="114" stroke={Wd} strokeWidth="1.5" /><line x1="86" y1="140" x2="140" y2="140" stroke={Wd} strokeWidth="1.5" /><line x1="86" y1="154" x2="118" y2="154" stroke={Wd} strokeWidth="1.5" />
      <path d="M172 120h44" stroke={CY} strokeWidth="2" /><path d="M210 113l8 7-8 7" stroke={CY} strokeWidth="2" />
      <rect x="232" y="68" width="98" height="104" rx="8" stroke={W} strokeWidth="2" fill="rgba(103,232,249,0.06)" />
      <line x1="232" y1="94" x2="330" y2="94" stroke={Wd} strokeWidth="1.5" /><line x1="232" y1="120" x2="330" y2="120" stroke={Wd} strokeWidth="1.5" /><line x1="232" y1="146" x2="330" y2="146" stroke={Wd} strokeWidth="1.5" /><line x1="281" y1="68" x2="281" y2="172" stroke={Wd} strokeWidth="1.5" />
      <path d="M242 82l4 4 6-7" stroke={CY} strokeWidth="2" /><path d="M291 82l4 4 6-7" stroke={CY} strokeWidth="2" />
    </g>
  ),
  // Stacked database cylinders + nodes
  data: (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <g stroke={W} strokeWidth="2">
        <ellipse cx="150" cy="78" rx="46" ry="15" fill="rgba(255,255,255,0.04)" />
        <path d="M104 78v84c0 8.3 20.6 15 46 15s46-6.7 46-15V78" />
        <path d="M104 106c0 8.3 20.6 15 46 15s46-6.7 46-15" stroke={Wd} strokeWidth="1.5" />
        <path d="M104 134c0 8.3 20.6 15 46 15s46-6.7 46-15" stroke={Wd} strokeWidth="1.5" />
      </g>
      <circle cx="150" cy="78" r="3" fill={CY} />
      <path d="M196 120h44" stroke={CY} strokeWidth="2" strokeDasharray="2 5" />
      <g stroke={W} strokeWidth="1.8">
        <circle cx="268" cy="92" r="14" fill="rgba(103,232,249,0.08)" />
        <circle cx="300" cy="140" r="14" fill="rgba(103,232,249,0.08)" />
        <circle cx="252" cy="160" r="14" fill="rgba(103,232,249,0.08)" />
        <path d="M268 106l-12 42M281 99l9 30" stroke={Wd} strokeWidth="1.5" />
      </g>
      <circle cx="268" cy="92" r="3" fill={CY} /><circle cx="300" cy="140" r="3" fill={CY} /><circle cx="252" cy="160" r="3" fill={CY} />
    </g>
  ),
  // Central hub with connected service nodes (integration)
  integration: (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <g stroke={Wd} strokeWidth="1.5">
        <path d="M120 80L186 116M120 160L186 124M280 80L214 116M280 160L214 124" />
      </g>
      <rect x="178" y="100" width="44" height="40" rx="10" stroke={W} strokeWidth="2" fill="rgba(103,232,249,0.1)" />
      <path d="M193 120a7 7 0 0 1 14 0M200 127a7 7 0 0 1-7-7M200 127a7 7 0 0 0 7-7" stroke={CY} strokeWidth="1.8" /><circle cx="200" cy="120" r="1.6" fill={CY} />
      <g stroke={W} strokeWidth="1.8">
        <rect x="92" y="66" width="40" height="28" rx="7" fill="rgba(255,255,255,0.03)" />
        <rect x="92" y="146" width="40" height="28" rx="7" fill="rgba(255,255,255,0.03)" />
        <rect x="268" y="66" width="40" height="28" rx="7" fill="rgba(255,255,255,0.03)" />
        <rect x="268" y="146" width="40" height="28" rx="7" fill="rgba(255,255,255,0.03)" />
      </g>
      <circle cx="112" cy="80" r="3" fill={CY} /><circle cx="112" cy="160" r="3" fill={CY} /><circle cx="288" cy="80" r="3" fill={CY} /><circle cx="288" cy="160" r="3" fill={CY} />
    </g>
  ),
  // Wireframe artboard
  design: (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x="96" y="56" width="208" height="128" rx="10" stroke={W} strokeWidth="2" fill="rgba(255,255,255,0.03)" />
      <rect x="112" y="72" width="80" height="44" rx="6" stroke={CY} strokeWidth="1.8" fill="rgba(103,232,249,0.08)" />
      <circle cx="132" cy="90" r="7" stroke={Wd} strokeWidth="1.5" /><path d="M146 98l12-8 16 12" stroke={Wd} strokeWidth="1.5" />
      <rect x="204" y="72" width="88" height="20" rx="5" stroke={Wd} strokeWidth="1.5" />
      <rect x="204" y="98" width="88" height="18" rx="5" stroke={Wd} strokeWidth="1.5" />
      <rect x="112" y="128" width="180" height="40" rx="6" stroke={Wd} strokeWidth="1.5" />
      <line x1="124" y1="142" x2="180" y2="142" stroke={Wd} strokeWidth="1.5" /><line x1="124" y1="154" x2="156" y2="154" stroke={Wd} strokeWidth="1.5" />
      <circle cx="276" cy="148" r="11" fill={CY} opacity="0.9" />
    </g>
  ),
  // CI/CD pipeline: commit → build → deploy
  devops: (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <line x1="92" y1="120" x2="308" y2="120" stroke={Wd} strokeWidth="1.5" strokeDasharray="2 5" />
      {[110, 200, 290].map((cx, i) => (
        <g key={cx}>
          <circle cx={cx} cy="120" r="22" stroke={W} strokeWidth="2" fill="rgba(255,255,255,0.03)" />
          {i === 0 && <><circle cx={cx} cy="120" r="5" stroke={CY} strokeWidth="2" /><path d={`M${cx} 98v17M${cx} 125v17`} stroke={Wd} strokeWidth="1.5" /></>}
          {i === 1 && <path d={`M${cx - 8} 120l5 5 11-11`} stroke={CY} strokeWidth="2.2" />}
          {i === 2 && <path d={`M${cx} 109v22M${cx - 9} 122l9 9 9-9`} stroke={CY} strokeWidth="2" />}
        </g>
      ))}
      <text x="110" y="162" textAnchor="middle" fill={Wd} fontSize="11" fontWeight="600">commit</text>
      <text x="200" y="162" textAnchor="middle" fill={Wd} fontSize="11" fontWeight="600">build</text>
      <text x="290" y="162" textAnchor="middle" fill={CY} fontSize="11" fontWeight="700">deploy</text>
      <path d="M250 64q14-10 28 0" stroke={Wd} strokeWidth="1.5" /><path d="M118 64q14-10 28 0" stroke={Wd} strokeWidth="1.5" />
    </g>
  ),
  // Responsive browser windows
  web: (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x="78" y="60" width="180" height="120" rx="10" stroke={W} strokeWidth="2" fill="rgba(255,255,255,0.03)" />
      <line x1="78" y1="84" x2="258" y2="84" stroke={Wd} strokeWidth="1.5" />
      <circle cx="92" cy="72" r="2.5" fill={CY} /><circle cx="102" cy="72" r="2.5" fill={Wd} /><circle cx="112" cy="72" r="2.5" fill={Wd} />
      <rect x="92" y="98" width="152" height="30" rx="5" stroke={Wd} strokeWidth="1.5" />
      <rect x="92" y="138" width="72" height="28" rx="5" stroke={Wd} strokeWidth="1.5" /><rect x="172" y="138" width="72" height="28" rx="5" stroke={Wd} strokeWidth="1.5" />
      <rect x="270" y="96" width="60" height="100" rx="10" stroke={W} strokeWidth="2" fill="rgba(103,232,249,0.06)" />
      <line x1="270" y1="112" x2="330" y2="112" stroke={Wd} strokeWidth="1.5" /><rect x="280" y="124" width="40" height="40" rx="5" stroke={CY} strokeWidth="1.6" />
    </g>
  ),
  // Phone with UI
  mobile: (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x="158" y="48" width="84" height="148" rx="16" stroke={W} strokeWidth="2" fill="rgba(255,255,255,0.03)" />
      <line x1="186" y1="58" x2="214" y2="58" stroke={Wd} strokeWidth="2" />
      <rect x="170" y="72" width="60" height="34" rx="6" stroke={CY} strokeWidth="1.6" fill="rgba(103,232,249,0.08)" />
      <path d="M180 92l8-9 7 7 9-11" stroke={CY} strokeWidth="1.8" />
      <line x1="170" y1="120" x2="230" y2="120" stroke={Wd} strokeWidth="1.5" /><line x1="170" y1="132" x2="214" y2="132" stroke={Wd} strokeWidth="1.5" />
      <rect x="170" y="148" width="60" height="22" rx="6" fill={CY} opacity="0.9" />
      <circle cx="200" cy="184" r="4" stroke={Wd} strokeWidth="1.5" />
    </g>
  ),
  // QA checklist + shield
  qa: (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x="86" y="62" width="140" height="116" rx="10" stroke={W} strokeWidth="2" fill="rgba(255,255,255,0.03)" />
      {[88, 116, 144].map((y) => (
        <g key={y}>
          <rect x="104" y={y} width="16" height="16" rx="4" stroke={CY} strokeWidth="1.8" />
          <path d={`M108 ${y + 8}l3 3 6-7`} stroke={CY} strokeWidth="1.8" />
          <line x1="132" y1={y + 8} x2="206" y2={y + 8} stroke={Wd} strokeWidth="1.5" />
        </g>
      ))}
      <path d="M286 64l34 12v34c0 24-17 36-34 44-17-8-34-20-34-44V76z" stroke={W} strokeWidth="2" fill="rgba(103,232,249,0.06)" />
      <path d="M272 112l9 9 18-20" stroke={CY} strokeWidth="2.4" />
    </g>
  ),
  // Layered architecture / blueprint planes
  architecture: (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      {[0, 30, 60].map((dy, i) => (
        <path
          key={dy}
          d={`M200 ${70 + dy}l72 26-72 26-72-26z`}
          stroke={i === 1 ? W : Wd}
          strokeWidth={i === 1 ? 2 : 1.6}
          fill={i === 1 ? "rgba(103,232,249,0.08)" : "rgba(255,255,255,0.02)"}
        />
      ))}
      <line x1="128" y1="96" x2="128" y2="126" stroke={Wd} strokeWidth="1.5" /><line x1="272" y1="96" x2="272" y2="126" stroke={Wd} strokeWidth="1.5" />
      <circle cx="200" cy="126" r="4" fill={CY} />
    </g>
  ),
  // AI feature: chat bubble + sparkle + nodes
  "ai-feature": (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M104 76h128a12 12 0 0 1 12 12v44a12 12 0 0 1-12 12h-74l-26 22v-22h-28a12 12 0 0 1-12-12V88a12 12 0 0 1 12-12z" stroke={W} strokeWidth="2" fill="rgba(255,255,255,0.03)" />
      <line x1="120" y1="100" x2="216" y2="100" stroke={Wd} strokeWidth="1.5" /><line x1="120" y1="116" x2="190" y2="116" stroke={Wd} strokeWidth="1.5" />
      <path d="M286 70l5 14 14 5-14 5-5 14-5-14-14-5 14-5z" stroke={CY} strokeWidth="1.8" fill="rgba(103,232,249,0.1)" />
      <path d="M300 130l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" stroke={Wd} strokeWidth="1.5" />
    </g>
  ),
};

export default function ServiceGraphic({
  name,
  className,
  rounded = true,
}: {
  name: ServiceGraphicName;
  className?: string;
  rounded?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 400 240"
      className={className}
      role="img"
      aria-label={`${name} illustration`}
      preserveAspectRatio="xMidYMid slice"
      style={{ display: "block", width: "100%", height: "100%" }}
    >
      <defs>
        <linearGradient id={`sg-bg-${name}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#15403f" />
          <stop offset="0.55" stopColor="#0f2e2e" />
          <stop offset="1" stopColor="#0b2224" />
        </linearGradient>
        <radialGradient id={`sg-glow-${name}`} cx="0.5" cy="0.25" r="0.7">
          <stop offset="0" stopColor="#326d6d" stopOpacity="0.55" />
          <stop offset="1" stopColor="#326d6d" stopOpacity="0" />
        </radialGradient>
        <pattern id={`sg-dots-${name}`} width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.06)" />
        </pattern>
      </defs>
      <rect width="400" height="240" rx={rounded ? 0 : 0} fill={`url(#sg-bg-${name})`} />
      <rect width="400" height="240" fill={`url(#sg-dots-${name})`} />
      <rect width="400" height="240" fill={`url(#sg-glow-${name})`} />
      {art[name]}
    </svg>
  );
}
