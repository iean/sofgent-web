import Button from "@/app/components/common/Button";

export default function CTASection() {
   return (
      <section className="pb-16 pt-16 md:pb-24 md:pt-24">
         <div className="mx-auto theme-container">
            <div className="rounded-[36px] border border-slate-200 bg-[linear-gradient(135deg,#08111f_0%,#163042_100%)] px-6 py-10 text-white shadow-[0_30px_100px_rgba(8,17,31,0.18)] md:px-10 md:py-14">
               <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
                     Ready To Fix The Data Layer
                  </p>
                  <h2 className="mt-4 text-34 font-semibold tracking-[-0.04em] md:text-48">
                     Get Your Data AI-Ready in Weeks
                  </h2>
                  <p className="mt-5 text-[18px] leading-8 text-slate-200">
                     If your data is holding back reporting, automation, or AI,
                     we can map the fastest route to a clean and usable
                     foundation.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                     <Button btnText="Plan Your AI Workflow" href="/contact" />
                     <Button
                        btnText="Turn My Data Into a Working System"
                        href="/contact"
                        className="border border-white/10 bg-white/5 text-white shadow-none hover:bg-white/10"
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
