/**
 * Vector process diagram (no raster, no AI “text” artifacts).
 * Matches SofGent slate + brand teal / cyan.
 */
export default function ProcessPipelineIllustration({ className }: { className?: string }) {
   return (
      <svg
         viewBox="0 0 920 300"
         className={className}
         xmlns="http://www.w3.org/2000/svg"
         role="img"
         aria-hidden>
         <defs>
            <linearGradient id="pp-flow" x1="0%" y1="0%" x2="100%" y2="0%">
               <stop offset="0%" stopColor="#06b6d4" />
               <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
         </defs>

         {/* Panel */}
         <rect width="920" height="300" rx="28" fill="#0f172a" />
         <rect
            x="1.5"
            y="1.5"
            width="917"
            height="297"
            rx="26.5"
            fill="none"
            stroke="#334155"
            strokeOpacity="0.5"
            strokeWidth="1"
         />

         {/* Subtle grid */}
         {Array.from({ length: 24 }).map((_, i) => (
            <line
               key={`v-${i}`}
               x1={20 + i * 38}
               y1="24"
               x2={20 + i * 38}
               y2="276"
               stroke="#334155"
               strokeOpacity="0.12"
               strokeWidth="1"
            />
         ))}
         {Array.from({ length: 8 }).map((_, i) => (
            <line
               key={`h-${i}`}
               x1="24"
               y1={36 + i * 34}
               x2="896"
               y2={36 + i * 34}
               stroke="#334155"
               strokeOpacity="0.1"
               strokeWidth="1"
            />
         ))}

         {/* Flow spine */}
         <path
            d="M 130 150 H 790"
            fill="none"
            stroke="url(#pp-flow)"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.85"
         />
         {/* Arrow heads between steps (crisp triangles) */}
         {[
            [243, 150],
            [469, 150],
            [695, 150],
         ].map((c, i) => (
            <polygon
               key={i}
               points={`${c[0]},${c[1] - 7} ${c[0] + 12},${c[1]} ${c[0]},${c[1] + 7}`}
               fill="#22d3ee"
               opacity="0.9"
            />
         ))}

         {[
            { cx: 130, label: "audit" },
            { cx: 356, label: "structure" },
            { cx: 582, label: "build" },
            { cx: 808, label: "deploy" },
         ].map((n, i) => (
            <g key={n.label}>
               <circle
                  cx={n.cx}
                  cy="150"
                  r="52"
                  fill="#1e293b"
                  stroke="#06b6d4"
                  strokeWidth="2"
               />
               <circle cx={n.cx} cy="150" r="40" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
               <g transform={`translate(${n.cx - 18}, 132)`} stroke="#5eead4" fill="none">
                  {i === 0 && <AuditGlyph />}
                  {i === 1 && <LayersGlyph />}
                  {i === 2 && <BuildGlyph />}
                  {i === 3 && <DeployGlyph />}
               </g>
            </g>
         ))}
      </svg>
   );
}

function AuditGlyph() {
   return (
      <g strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
         <circle cx="17" cy="17" r="9" />
         <path d="M24 24l7 7" />
      </g>
   );
}

function LayersGlyph() {
   return (
      <g strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
         <path d="M4 14L17 21 30 14" />
         <path d="M4 9L17 16 30 9" />
         <path d="M4 4L17 11 30 4" />
      </g>
   );
}

function BuildGlyph() {
   return (
      <g strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
         <path d="M14 3l4 4-10 10-4-4L14 3z" />
         <path d="M11 14l-6 6" />
         <path d="M16 9l6 6" />
      </g>
   );
}

function DeployGlyph() {
   return (
      <g strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
         <path d="M17 6l10 14H7L17 6z" />
         <path d="M17 20v8" />
      </g>
   );
}
