export default function ReleaseArchitectureIllustration({
   className,
}: {
   className?: string;
}) {
   return (
      <svg
         viewBox="0 0 920 420"
         className={className}
         xmlns="http://www.w3.org/2000/svg"
         role="img"
         aria-hidden>
         <defs>
            <linearGradient id="ra-flow" x1="0%" y1="0%" x2="100%" y2="0%">
               <stop offset="0%" stopColor="#22d3ee" />
               <stop offset="100%" stopColor="#2dd4bf" />
            </linearGradient>
         </defs>

         <rect width="920" height="420" rx="28" fill="#07111f" />
         <rect x="1.5" y="1.5" width="917" height="417" rx="26.5" fill="none" stroke="#1f2f49" />

         {Array.from({ length: 20 }).map((_, i) => (
            <line
               key={`v-${i}`}
               x1={40 + i * 42}
               y1="24"
               x2={40 + i * 42}
               y2="396"
               stroke="#22314b"
               strokeOpacity="0.18"
            />
         ))}
         {Array.from({ length: 10 }).map((_, i) => (
            <line
               key={`h-${i}`}
               x1="24"
               y1={34 + i * 36}
               x2="896"
               y2={34 + i * 36}
               stroke="#22314b"
               strokeOpacity="0.16"
            />
         ))}

         <text x="56" y="48" fill="#7dd3fc" fontSize="12" fontWeight="700" letterSpacing="1.8">
            PRODUCT RELEASE ARCHITECTURE
         </text>

         <rect x="54" y="98" width="164" height="82" rx="20" fill="#0f1b31" stroke="#2a3d5f" />
         <text x="76" y="126" fill="#f8fafc" fontSize="16" fontWeight="700">
            Customer App
         </text>
         <text x="76" y="149" fill="#94a3b8" fontSize="12">
            Web / mobile surface
         </text>

         <rect x="54" y="232" width="164" height="82" rx="20" fill="#0f1b31" stroke="#2a3d5f" />
         <text x="76" y="260" fill="#f8fafc" fontSize="16" fontWeight="700">
            Admin Console
         </text>
         <text x="76" y="283" fill="#94a3b8" fontSize="12">
            Ops, review, support
         </text>

         <rect x="298" y="98" width="188" height="216" rx="24" fill="#0f1c30" stroke="#22d3ee" strokeOpacity="0.75" />
         <text x="324" y="126" fill="#67e8f9" fontSize="12" fontWeight="700" letterSpacing="1.5">
            APPLICATION CORE
         </text>
         <text x="324" y="154" fill="#f8fafc" fontSize="15" fontWeight="700">
            API + business logic
         </text>
         <text x="324" y="182" fill="#cbd5e1" fontSize="12">
            Auth / RBAC
         </text>
         <text x="324" y="206" fill="#cbd5e1" fontSize="12">
            Billing / plans
         </text>
         <text x="324" y="230" fill="#cbd5e1" fontSize="12">
            Events / queues
         </text>
         <text x="324" y="254" fill="#cbd5e1" fontSize="12">
            AI / automation actions
         </text>
         <text x="324" y="278" fill="#cbd5e1" fontSize="12">
            Audit / admin controls
         </text>

         <rect x="564" y="98" width="136" height="82" rx="20" fill="#0f1b31" stroke="#2a3d5f" />
         <text x="586" y="126" fill="#f8fafc" fontSize="16" fontWeight="700">
            Data Layer
         </text>
         <text x="586" y="149" fill="#94a3b8" fontSize="12">
            DB, files, vectors
         </text>

         <rect x="564" y="232" width="136" height="82" rx="20" fill="#0f1b31" stroke="#2a3d5f" />
         <text x="586" y="260" fill="#f8fafc" fontSize="16" fontWeight="700">
            Integrations
         </text>
         <text x="586" y="283" fill="#94a3b8" fontSize="12">
            Stripe, CRM, ERP
         </text>

         <rect x="752" y="98" width="120" height="82" rx="20" fill="#0d2335" stroke="#2dd4bf" strokeOpacity="0.75" />
         <text x="772" y="126" fill="#99f6e4" fontSize="12" fontWeight="700" letterSpacing="1.5">
            STAGING
         </text>
         <text x="772" y="150" fill="#e2e8f0" fontSize="12">
            QA + UAT
         </text>

         <rect x="752" y="232" width="120" height="82" rx="20" fill="#0d2335" stroke="#2dd4bf" strokeOpacity="0.75" />
         <text x="772" y="260" fill="#99f6e4" fontSize="12" fontWeight="700" letterSpacing="1.5">
            PRODUCTION
         </text>
         <text x="772" y="284" fill="#e2e8f0" fontSize="12">
            Monitoring + rollback
         </text>

         <path d="M 218 138 H 298" stroke="url(#ra-flow)" strokeWidth="4" fill="none" strokeLinecap="round" />
         <path d="M 218 272 H 298" stroke="url(#ra-flow)" strokeWidth="4" fill="none" strokeLinecap="round" />
         <path d="M 486 138 H 564" stroke="url(#ra-flow)" strokeWidth="4" fill="none" strokeLinecap="round" />
         <path d="M 486 272 H 564" stroke="url(#ra-flow)" strokeWidth="4" fill="none" strokeLinecap="round" />
         <path d="M 700 138 H 752" stroke="url(#ra-flow)" strokeWidth="4" fill="none" strokeLinecap="round" />
         <path d="M 700 272 H 752" stroke="url(#ra-flow)" strokeWidth="4" fill="none" strokeLinecap="round" />

         {[
            [298, 138],
            [298, 272],
            [564, 138],
            [564, 272],
            [752, 138],
            [752, 272],
         ].map(([x, y], i) => (
            <polygon
               key={i}
               points={`${x},${y - 6} ${x + 11},${y} ${x},${y + 6}`}
               fill="#67e8f9"
            />
         ))}

         <rect x="298" y="342" width="574" height="38" rx="19" fill="#0d2335" stroke="#274865" />
         <text x="322" y="365" fill="#cbd5e1" fontSize="12">
            Release logic: scope to build to test to staging to production to analytics to next sprint
         </text>
      </svg>
   );
}
