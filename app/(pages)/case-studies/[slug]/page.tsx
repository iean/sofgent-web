import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import BreadCrumb from "@/app/components/common/BreadCrumb";
import Button from "@/app/components/common/Button";
import CaseStudyArchitecture from "@/app/components/caseStudies/CaseStudyArchitecture";
import CaseStudyBody from "@/app/components/caseStudies/CaseStudyBody";
import CaseStudyHero from "@/app/components/caseStudies/CaseStudyHero";
import CaseStudyMetrics from "@/app/components/caseStudies/CaseStudyMetrics";
import CaseStudyTechStack from "@/app/components/caseStudies/CaseStudyTechStack";
import { CALENDLY_URL } from "@/lib/constants";
import {
   getCaseStudies,
   getCaseStudyBySlug,
   getCaseStudySlugs,
} from "@/lib/sanity/content";

export const revalidate = 60;

export async function generateStaticParams() {
   const slugs = await getCaseStudySlugs();
   return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
   params,
}: {
   params: { slug: string };
}): Promise<Metadata> {
   const study = await getCaseStudyBySlug(params.slug);
   if (!study) {
      return { title: "Case study not found" };
   }

   const title = study.seoTitle || `${study.title} | Case Study | SofGent`;
   const description = study.seoDescription || study.summary;

   return {
      title,
      description,
      openGraph: {
         title,
         description,
         images: [{ url: study.heroImage.src, width: 1600, height: 900, alt: study.heroImage.alt }],
      },
      twitter: {
         card: "summary_large_image",
         title,
         description,
         images: [study.heroImage.src],
      },
   };
}

export default async function CaseStudyDetailPage({
   params,
}: {
   params: { slug: string };
}) {
   const study = await getCaseStudyBySlug(params.slug);

   if (!study) {
      notFound();
   }

   const allStudies = await getCaseStudies();
   const related = allStudies
      .filter((item) => item.slug !== study.slug)
      .slice(0, 2);

   return (
      <main className="min-h-screen bg-slate-50">
         <BreadCrumb
            pageTitle={study.title}
            currentPage="Case Studies"
            to={`/case-studies/${study.slug}`}
         />

         <CaseStudyHero study={study} />
         <CaseStudyMetrics study={study} />
         <CaseStudyArchitecture study={study} />
         <CaseStudyBody study={study} />
         <CaseStudyTechStack study={study} />

         {/* CTA */}
         <section className="bg-white py-24">
            <div className="theme-container">
               <div className="relative overflow-hidden rounded-[3rem] border border-slate-800 bg-slate-900 px-8 py-20 md:px-20 md:py-24 shadow-2xl">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(50,109,109,0.25),transparent_50%)]" />
                  <div className="relative z-10 max-w-2xl">
                     <p className="text-cyan-200 font-semibold uppercase tracking-widest mb-4">
                        Want a similar outcome?
                     </p>
                     <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
                        Map your build before you start.
                     </h2>
                     <p className="text-lg text-slate-300 mb-10">
                        A 20-minute conversation is enough to surface scope creep,
                        architecture risk, and the fastest path to production.
                     </p>
                     <div className="flex flex-wrap items-center gap-4">
                        <Button
                           btnText="Book a Strategy Call"
                           href={CALENDLY_URL}
                           external={true}
                           variant="primary"
                        />
                        <Button
                           btnText="Discuss your product"
                           href="/contact"
                           variant="outline"
                           className="border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10 hover:text-white"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Related */}
         {related.length > 0 ? (
            <section className="bg-slate-50 pb-24">
               <div className="theme-container">
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary mb-6">
                     More case studies
                  </p>
                  <div className="grid gap-6 md:grid-cols-2">
                     {related.map((item) => (
                        <Link
                           key={item.slug}
                           href={`/case-studies/${item.slug}`}
                           className="group block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                           <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                              {item.industry}
                           </p>
                           <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                              {item.title}
                           </h3>
                           <p className="mt-3 text-sm text-slate-600 line-clamp-2">
                              {item.summary}
                           </p>
                        </Link>
                     ))}
                  </div>
               </div>
            </section>
         ) : null}
      </main>
   );
}
