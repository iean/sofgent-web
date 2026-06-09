export default function SaaSDeliveryWorkflowIllustration({
   className,
}: {
   className?: string;
}) {
   const steps = [
      { x: 72, y: 74, title: "Discovery", body: "Offer, users, scope, constraints" },
      { x: 336, y: 74, title: "Architecture", body: "Tenancy, auth, data, integrations" },
      { x: 600, y: 74, title: "Sprint Build", body: "UI, API, AI, operator tooling" },
      { x: 72, y: 234, title: "Internal QA", body: "Test flows, edge cases, observability" },
      { x: 336, y: 234, title: "Staging + UAT", body: "Demo, client review, release fixes" },
      { x: 600, y: 234, title: "Production Release", body: "Deploy, monitor, iterate" },
   ];

   return (
      <svg
         viewBox="0 0 920 420"
         className={className}
         xmlns="http://www.w3.org/2000/svg"
         role="img"
         aria-hidden>
         <defs>
            <linearGradient id="sw-flow" x1="0%" y1="0%" x2="100%" y2="0%">
               <stop offset="0%" stopColor="#22d3ee" />
               <stop offset="100%" stopColor="#2dd4bf" />
            </linearGradient>
         </defs>

         <rect width="920" height="420" rx="28" fill="#07111f" />
         <rect x="1.5" y="1.5" width="917" height="417" rx="26.5" fill="none" stroke="#1f2f49" />

         {Array.from({ length: 22 }).map((_, i) => (
            <line
               key={`v-${i}`}
               x1={28 + i * 40}
               y1="24"
               x2={28 + i * 40}
               y2="396"
               stroke="#23324d"
               strokeOpacity="0.25"
            />
         ))}
         {Array.from({ length: 10 }).map((_, i) => (
            <line
               key={`h-${i}`}
               x1="24"
               y1={36 + i * 36}
               x2="896"
               y2={36 + i * 36}
               stroke="#23324d"
               strokeOpacity="0.22"
            />
         ))}

         <text x="56" y="48" fill="#7dd3fc" fontSize="12" fontWeight="700" letterSpacing="1.8">
            SOFGENT RELEASE WORKFLOW
         </text>
         <text x="56" y="394" fill="#94a3b8" fontSize="11">
            Strategy decisions stay attached to architecture, build, and release instead of breaking across vendors.
         </text>

         <path
            d="M 228 134 H 316"
            stroke="url(#sw-flow)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
         />
         <path
            d="M 492 134 H 580"
            stroke="url(#sw-flow)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
         />
         <path
            d="M 756 154 V 200 Q 756 214 742 214 H 190 Q 160 214 160 244"
            stroke="url(#sw-flow)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
         />
         <path
            d="M 228 294 H 316"
            stroke="url(#sw-flow)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
         />
         <path
            d="M 492 294 H 580"
            stroke="url(#sw-flow)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
         />

         {[
            [316, 134],
            [580, 134],
            [580, 294],
            [316, 294],
         ].map(([x, y], i) => (
            <polygon
               key={i}
               points={`${x},${y - 6} ${x + 12},${y} ${x},${y + 6}`}
               fill="#67e8f9"
            />
         ))}

         {steps.map((step, index) => (
            <g key={step.title}>
               <rect x={step.x} y={step.y} width="208" height="92" rx="22" fill="#0f1b31" stroke="#2a3d5f" />
               <circle cx={step.x + 28} cy={step.y + 28} r="15" fill="#0f2d47" stroke="#22d3ee" />
               <text x={step.x + 23} y={step.y + 33} fill="#67e8f9" fontSize="12" fontWeight="700">
                  {index + 1}
               </text>
               <text x={step.x + 54} y={step.y + 31} fill="#f8fafc" fontSize="16" fontWeight="700">
                  {step.title}
               </text>
               <text x={step.x + 24} y={step.y + 56} fill="#94a3b8" fontSize="12">
                  {step.body}
               </text>
            </g>
         ))}

         <rect x="716" y="248" width="144" height="90" rx="18" fill="#102338" stroke="#2dd4bf" strokeOpacity="0.7" />
         <text x="736" y="274" fill="#99f6e4" fontSize="12" fontWeight="700" letterSpacing="1.2">
            RELEASE GATE
         </text>
         <text x="736" y="297" fill="#e2e8f0" fontSize="12">
            Auth + roles
         </text>
         <text x="736" y="316" fill="#e2e8f0" fontSize="12">
            Billing + events
         </text>
         <text x="736" y="335" fill="#e2e8f0" fontSize="12">
            Logs + rollback
         </text>
      </svg>
   );
}
