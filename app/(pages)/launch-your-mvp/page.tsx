import BreadCrumb from "@/app/components/common/BreadCrumb";
import Button from "@/app/components/common/Button";
import { CALENDLY_URL } from "@/lib/constants";
import getPageMeta from "@/app/utils/getPageMeta";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
   return getPageMeta("/launch-your-mvp");
}

const deliverables = [
   "Product discovery and scope",
   "Architecture and technical setup",
   "Core frontend and backend",
   "Authentication and database",
   "Cloud deployment",
   "Launch planning",
];

export default function LaunchYourMVP() {
   return (
      <section className="bg-[linear-gradient(180deg,#f6f9fc_0%,#eef3f8_100%)]">
         <BreadCrumb
            pageTitle="Launch Your MVP"
            currentPage="Launch Your MVP"
            to="/launch-your-mvp"
         />

         <div className="mx-auto theme-container py-16 md:py-24">
            <div className="rounded-[36px] border border-slate-200 bg-[#08111f] px-7 py-10 text-white shadow-[0_30px_100px_rgba(8,17,31,0.18)] md:px-10 md:py-14">
               <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
                     Sales Landing Page
                  </p>
                  <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-[56px]">
                     Launch Your SaaS MVP in 6 Weeks
                  </h1>
                  <p className="mt-6 text-[18px] leading-8 text-slate-200">
                     We help startup teams move from idea to working product
                     with a clear process, realistic timeline, and scalable
                     technical foundation.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                     <Button btnText="Book a Free Strategy Call" href={CALENDLY_URL} external={true} />
                     <Button
                        btnText="See Services"
                        href="/services"
                        className="border border-white/10 bg-white/5 text-white shadow-none hover:bg-white/10"
                     />
                  </div>
               </div>
            </div>

            <div className="mt-10 grid gap-8 xl:grid-cols-[1fr_0.9fr]">
               <div className="rounded-[34px] border border-slate-200 bg-white p-7 shadow-[0_24px_70px_rgba(15,23,42,0.06)] md:p-9">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
                     Process
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-slate-950 md:text-[34px]">
                     A simple path to launch.
                  </h2>
                  <div className="mt-8 grid gap-4 md:grid-cols-3">
                     {["Discovery", "Rapid build", "Launch"].map((step, index) => (
                        <div
                           key={step}
                           className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                           <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef5f3] text-primary">
                              {index + 1}
                           </div>
                           <p className="mt-4 text-[17px] font-medium text-slate-800">
                              {step}
                           </p>
                        </div>
                     ))}
                  </div>

                  <div className="mt-8">
                     <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
                        What is included
                     </p>
                     <div className="mt-4 flex flex-wrap gap-3">
                        {deliverables.map((item) => (
                           <span
                              key={item}
                              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                              {item}
                           </span>
                        ))}
                     </div>
                  </div>
               </div>

               <div className="rounded-[34px] border border-slate-200 bg-white p-7 shadow-[0_24px_70px_rgba(15,23,42,0.06)] md:p-9">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
                     Timeline and Pricing
                  </p>
                  <div className="mt-6 rounded-[24px] border border-slate-200 bg-slate-50 p-6">
                     <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                        Typical timeline
                     </p>
                     <p className="mt-3 text-[32px] font-semibold tracking-[-0.04em] text-slate-950">
                        4-6 weeks
                     </p>
                  </div>
                  <div className="mt-5 rounded-[24px] border border-slate-200 bg-slate-50 p-6">
                     <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                        Typical range
                     </p>
                     <p className="mt-3 text-[32px] font-semibold tracking-[-0.04em] text-slate-950">
                        $8k - $25k
                     </p>
                  </div>
                  <p className="mt-6 text-[16px] leading-8 text-slate-600">
                     The exact scope depends on product complexity, integrations,
                     and whether AI features are part of the first release.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
}
