import Button from "@/app/components/common/Button";
import { CALENDLY_URL } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight, FileImage, FileJson, ScanSearch, ShieldCheck } from "lucide-react";

export default function HeroSection() {
   return (
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#eef3f7_100%)] pt-[128px] md:pt-[210px]">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(18,50,74,0.08),transparent_28%),radial-gradient(circle_at_top_right,rgba(103,232,249,0.12),transparent_24%)]" />
         <div className="absolute inset-x-0 top-0 h-[440px] bg-[linear-gradient(180deg,rgba(255,255,255,0.72)_0%,rgba(255,255,255,0)_100%)]" />

         <div className="relative mx-auto theme-container pb-16 md:pb-24">
            <div className="grid items-center gap-10 xl:grid-cols-[0.92fr_1.08fr]">
               <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
                     <Link href="/services" className="hover:text-slate-900">
                        Services
                     </Link>
                     <span className="text-slate-300">/</span>
                     <span className="text-slate-700">
                        Document Intelligence Systems
                     </span>
                  </div>

                  <p className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-primary">
                     OCR + AI Extraction Systems
                  </p>
                  <h1 className="mt-4 max-w-[12ch] text-[44px] font-semibold leading-[0.98] tracking-[-0.055em] text-slate-950 md:text-[72px]">
                     Turn Documents Into Structured, Actionable Data
                  </h1>
                  <p className="mt-6 max-w-2xl text-[19px] leading-8 text-slate-600">
                     Extract, validate, and automate document workflows using
                     AI. SofGent builds OCR and document intelligence systems
                     that turn files, scans, and forms into usable business
                     data.
                  </p>

                  <div className="mt-9 flex flex-wrap items-center gap-4">
                     <Button
                        btnText="See Demo"
                        href="/projects/ocr-document-automation-system"
                     />
                     <Button
                        btnText="Book Consultation"
                        href={CALENDLY_URL}
                        external={true}
                        className="border border-slate-200 bg-white text-slate-900 shadow-[0_16px_40px_rgba(15,23,42,0.08)] hover:bg-slate-900 hover:text-white"
                     />
                  </div>

                  <div className="mt-10 grid gap-4 sm:grid-cols-3">
                     {[
                        "OCR for PDFs, images, and forms",
                        "AI extraction with validation workflows",
                        "Structured outputs for APIs and databases",
                     ].map((item) => (
                        <div
                           key={item}
                           className="rounded-[20px] border border-slate-200 bg-white px-4 py-4 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
                           <div className="h-2.5 w-2.5 rounded-full bg-[#12324a]" />
                           <p className="mt-3 text-[15px] font-medium leading-7 text-slate-700">
                              {item}
                           </p>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="relative">
                  <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-[#0c1724] p-6 shadow-[0_34px_90px_rgba(15,23,42,0.14)] md:p-8">
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(103,232,249,0.15)_0%,rgba(12,23,36,0)_48%)]" />

                     <div className="relative z-10 flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                        <div>
                           <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                              Before / After
                           </p>
                           <p className="mt-2 text-lg font-medium text-white">
                              From document files to structured system output
                           </p>
                        </div>
                        <span className="rounded-full border border-cyan-300/18 bg-cyan-300/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-100">
                           Production-ready pipeline
                        </span>
                     </div>

                     <div className="relative z-10 mt-6 grid gap-4 lg:grid-cols-[1fr_auto_1fr]">
                        <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                           <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                              Before
                           </p>
                           <div className="mt-4 space-y-3">
                              {[
                                 {
                                    icon: FileImage,
                                    label: "Scanned PDFs",
                                 },
                                 {
                                    icon: FileImage,
                                    label: "Invoices and forms",
                                 },
                                 {
                                    icon: FileImage,
                                    label: "KYC document images",
                                 },
                              ].map((item) => {
                                 const Icon = item.icon;
                                 return (
                                    <div
                                       key={item.label}
                                       className="flex items-center gap-3 rounded-[16px] border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-100">
                                       <div className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-white/10 text-cyan-100">
                                          <Icon className="h-4 w-4" />
                                       </div>
                                       {item.label}
                                    </div>
                                 );
                              })}
                           </div>
                        </div>

                        <div className="hidden items-center justify-center lg:flex">
                           <ArrowRight className="h-5 w-5 text-cyan-200" />
                        </div>

                        <div className="rounded-[24px] border border-white/10 bg-white p-5 shadow-[0_18px_45px_rgba(8,17,31,0.18)]">
                           <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                              After
                           </p>
                           <div className="mt-4 space-y-3">
                              {[
                                 {
                                    icon: ScanSearch,
                                    label: "OCR text captured",
                                 },
                                 {
                                    icon: ShieldCheck,
                                    label: "Validated fields",
                                 },
                                 {
                                    icon: FileJson,
                                    label: "Structured JSON output",
                                 },
                              ].map((item) => {
                                 const Icon = item.icon;
                                 return (
                                    <div
                                       key={item.label}
                                       className="flex items-center gap-3 rounded-[16px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                                       <div className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#12324a] text-white">
                                          <Icon className="h-4 w-4" />
                                       </div>
                                       {item.label}
                                    </div>
                                 );
                              })}
                           </div>

                           <div className="mt-5 rounded-[18px] border border-slate-200 bg-[#f8fafc] p-4">
                              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                                 Example Output
                              </p>
                              <pre className="mt-3 overflow-x-auto text-[12px] leading-6 text-slate-700">
{`{
  "document_type": "invoice",
  "vendor": "Acme Supplies",
  "invoice_no": "INV-4021",
  "amount": 18450,
  "status": "validated"
}`}
                              </pre>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
