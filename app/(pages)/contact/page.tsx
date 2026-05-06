import BreadCrumb from "@/app/components/common/BreadCrumb";
import ContactForm from "@/app/components/contact";
import Button from "@/app/components/common/Button";
import { CALENDLY_URL, CONTACT_TO_EMAIL } from "@/lib/constants";
import getPageMeta from "@/app/utils/getPageMeta";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
   return getPageMeta("/contact");
}

export default function Contact() {
   return (
      <main className="min-h-screen bg-slate-50">
         <BreadCrumb pageTitle="Contact" currentPage="Contact" to="/contact" />

         <div className="mx-auto theme-container py-16 md:py-24">
            <div className="grid gap-8 xl:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
               
               {/* Left Side: Direct Contact Info */}
               <div className="rounded-[2.5rem] border border-slate-800 bg-slate-900 p-10 text-white shadow-xl md:p-14 relative overflow-hidden h-full flex flex-col">
                  <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(50,109,109,0.3),transparent_50%)] pointer-events-none" />
                  
                  <div className="relative z-10 flex-grow">
                     <p className="text-sm font-bold uppercase tracking-widest text-cyan-400 mb-6">
                        Book a Free Strategy Call
                     </p>
                     <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-6">
                        Tell us what you are building.
                     </h1>
                     <p className="text-lg leading-relaxed text-slate-300">
                        Keep it simple. Share your product idea, timeline, and where
                        you need help. We will use that context to prepare for a
                        useful first conversation.
                     </p>

                     <div className="mt-12 grid gap-6">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                           <p className="text-xs font-bold uppercase tracking-widest text-cyan-400/80 mb-3">
                              Email
                           </p>
                           <a
                              href={`mailto:${CONTACT_TO_EMAIL}`}
                              className="text-xl font-medium text-white transition-colors hover:text-cyan-400">
                              {CONTACT_TO_EMAIL}
                           </a>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                           <p className="text-xs font-bold uppercase tracking-widest text-cyan-400/80 mb-3">
                              Phone
                           </p>
                           <a
                              href="tel:+8801537740365"
                              className="text-xl font-medium text-white transition-colors hover:text-cyan-400">
                              +880 1537 740365
                           </a>
                        </div>
                     </div>
                  </div>

                  <div className="relative z-10 mt-12 pt-12 border-t border-white/10">
                     <p className="text-sm text-slate-400 mb-6">Prefer to bypass the form?</p>
                     <Button
                        btnText="Schedule directly on Calendly"
                        href={CALENDLY_URL}
                        external={true}
                        variant="outline"
                        className="w-full sm:w-auto border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10 hover:text-white"
                     />
                  </div>
               </div>

               {/* Right Side: Form */}
               <div className="rounded-[2.5rem] border border-slate-200 bg-white shadow-sm h-full">
                  <ContactForm />
               </div>

            </div>
         </div>
      </main>
   );
}
