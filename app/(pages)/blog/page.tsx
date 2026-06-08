import BlogCard from "@/app/components/common/BlogCard";
import BlogEmptyState from "@/app/components/blog/BlogEmptyState";
import PageIntro from "@/app/components/common/PageIntro";
import { getBlogPosts } from "@/lib/sanity/content";
import getPageMeta from "@/app/utils/getPageMeta";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
   return getPageMeta("/blog");
}

export const revalidate = 60;

const BlogList = async () => {
   const posts = await getBlogPosts();

   return (
      <main className="min-h-screen bg-slate-50">
         <PageIntro
            eyebrow="Insights"
            title="Strategy, architecture, and AI execution for teams that need clarity."
            description="Notes from the SofGent delivery model: building SaaS products, workflow automation, AI systems, and modernization paths that hold up in production."
            currentPage="Blog"
            currentPath="/blog"
         />
         <section className="w-full py-16 md:py-[130px]">
            <div className="w-full mx-auto theme-container">
               <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">
                     Insights
                  </p>
                  <p className="mt-6 text-lg leading-8 text-slate-600">
                     Practical writing for teams planning AI products, internal systems, modern integrations, and architecture decisions that need to survive real delivery pressure.
                  </p>
               </div>

               <div className="pt-14">
                  {posts.length ? (
                     <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => (
                           <BlogCard key={post._id} post={post} />
                        ))}
                     </div>
                  ) : (
                     <BlogEmptyState
                        title="No articles are published yet."
                        description="New strategy notes and implementation guides will appear here as they are published."
                      />
                  )}
               </div>
            </div>
         </section>
      </main>
   );
};

export default BlogList;
