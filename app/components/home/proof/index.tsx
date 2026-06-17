import { getAllBlogPosts } from "@/app/lib/blogs";
import { getProjectCollections } from "@/lib/sanity/content";
import Link from "next/link";

export default async function HomeProof() {
   const { caseStudies, projects } = await getProjectCollections();
   const posts = await getAllBlogPosts();
   const featuredWork = [...caseStudies, ...projects].slice(0, 3);
   const featuredPost = posts[0] ?? null;

   return (
      <section className="w-full xl:pb-[130px] pb-[60px]">
         <div className="mx-auto theme-container">
            <div className="grid gap-10 xl:grid-cols-[1.3fr_0.7fr]">
               <div>
                  <span className="text-brand font-medium px-5 py-3 border border-[#e7e3fa] leading-none rounded-full inline-block mb-5 bg-white">
                     Proof
                  </span>
                  <h2 className="md:text-48 text-34 font-semibold text-main-black mb-5">
                     Recent delivery work tied to real systems and outcomes
                  </h2>
                  <p className="text-paragraph mb-8 max-w-3xl">
                     We keep this section short on purpose. It shows the kinds of AI
                     products, workflow systems, and SaaS platforms we are actually
                     shipping, without turning the homepage into a long case-study archive.
                  </p>

                  <div className="grid gap-5 md:grid-cols-3">
                     {featuredWork.map((item) => (
                        <Link
                           key={item.slug}
                           href={`/projects/${item.slug}`}
                           className="rounded-[20px] border border-[#e7e8e9] bg-white p-6 transition-transform hover:-translate-y-1 hover:shadow-lg">
                           <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                              {item.category === "case-study" ? "Case Study" : "Project"}
                           </p>
                           <h3 className="mb-3 text-20 font-semibold text-main-black">
                              {item.title}
                           </h3>
                           <p className="text-paragraph text-sm">
                              {item.description || item.overview || "Production-ready system delivery."}
                           </p>
                        </Link>
                     ))}
                  </div>
               </div>

               <div className="rounded-[20px] border border-brandBorder bg-gray p-8">
                  <span className="text-brand font-medium px-5 py-3 border border-[#e7e3fa] leading-none rounded-full inline-block mb-5 bg-white">
                     Latest Insight
                  </span>
                  {featuredPost ? (
                     <>
                        <h3 className="text-24 font-semibold text-main-black mb-4">
                           {featuredPost.title}
                        </h3>
                        <p className="text-paragraph mb-5">{featuredPost.excerpt}</p>
                        <div className="mb-6 text-sm text-paragraph">
                           {featuredPost.author} · {featuredPost.readTime}
                        </div>
                        <Link
                           href={`/blog/${featuredPost.slug}`}
                           className="inline-flex items-center px-5 py-3 font-semibold text-white rounded-lg bg-brand hover:bg-secondary">
                           Read the article
                        </Link>
                     </>
                  ) : (
                     <>
                        <h3 className="text-24 font-semibold text-main-black mb-4">
                           How we think about AI product delivery
                        </h3>
                        <p className="text-paragraph mb-6">
                           Practical insight on architecture, workflows, and launch readiness
                           from current SofGent delivery work.
                        </p>
                        <Link
                           href="/blog"
                           className="inline-flex items-center px-5 py-3 font-semibold text-white rounded-lg bg-brand hover:bg-secondary">
                           Browse insights
                        </Link>
                     </>
                  )}
               </div>
            </div>
         </div>
      </section>
   );
}
