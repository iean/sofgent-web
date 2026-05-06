import BlogCard from "@/app/components/common/BlogCard";
import BlogEmptyState from "@/app/components/blog/BlogEmptyState";
import BreadCrumb from "@/app/components/common/BreadCrumb";
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
         <BreadCrumb pageTitle="Blog" currentPage="Blog" to="/blog" />
         <section className="w-full py-16 md:py-[130px]">
            <div className="w-full mx-auto theme-container">
               <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">
                     Insights
                  </p>
                  <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                     Strategy, architecture, and AI product execution for teams that need clarity.
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-slate-600">
                     Articles are now served from Sanity so content can stay shared across preview and production branches.
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
                        title="No blog posts are published yet."
                        description="Once Sanity is configured and posts are published, this page will populate automatically in both preview and production environments."
                     />
                  )}
               </div>
            </div>
         </section>
      </main>
   );
};

export default BlogList;
