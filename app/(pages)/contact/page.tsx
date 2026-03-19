import BreadCrumb from "@/app/components/common/BreadCrumb";
import ContactForm from "@/app/components/contact";
import Button from "@/app/components/common/Button";
import getPageMeta from "@/app/utils/getPageMeta";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
   return getPageMeta("/contact");
}

export default function Contact() {
   return (
      <section className="bg-[linear-gradient(180deg,#f6f9fc_0%,#eef3f8_100%)]">
         <BreadCrumb pageTitle="Contact" currentPage="Contact" to="/contact" />

         <div className="mx-auto theme-container py-16 md:py-24">
            <div className="grid gap-8 xl:grid-cols-[0.85fr_1.15fr]">
               <div className="rounded-[34px] border border-slate-200 bg-[#08111f] p-7 text-white shadow-[0_30px_100px_rgba(8,17,31,0.16)] md:p-9">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
                     Book a Free Strategy Call
                  </p>
                  <h1 className="mt-4 text-34 font-semibold tracking-[-0.04em] md:text-48">
                     Tell us what you are building.
                  </h1>
                  <p className="mt-6 text-[17px] leading-8 text-slate-200">
                     Keep it simple. Share your product idea, timing, and where
                     you need help. We will use that to guide the next
                     conversation.
                  </p>

                  <div className="mt-8 grid gap-4">
                     <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                        <p className="text-xs uppercase tracking-[0.22em] text-cyan-200/80">
                           Email
                        </p>
                        <a
                           href="mailto:support@sofgent.com"
                           className="mt-3 block text-lg text-white hover:text-cyan-200">
                           support@sofgent.com
                        </a>
                     </div>
                     <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                        <p className="text-xs uppercase tracking-[0.22em] text-cyan-200/80">
                           Phone
                        </p>
                        <a
                           href="tel:+8801537740365"
                           className="mt-3 block text-lg text-white hover:text-cyan-200">
                           +880 1537 740365
                        </a>
                     </div>
                  </div>

                  <div className="mt-8">
                     <Button
                        btnText="Book a Free Strategy Call"
                        href="mailto:support@sofgent.com?subject=Strategy%20Call%20with%20SofGent"
                        external={true}
                     />
                  </div>
               </div>

               <div className="rounded-[34px] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.06)]">
                  <ContactForm />
               </div>
            </div>
         </div>
      </section>
   );
}
