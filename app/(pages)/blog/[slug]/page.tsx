import BlogPortableText from "@/app/components/blog/BlogPortableText";
import BreadCrumb from "@/app/components/common/BreadCrumb";
import { getBlogPostBySlug, getBlogSlugs } from "@/lib/sanity/content";
import getPageMeta from "@/app/utils/getPageMeta";
import { ArrowLeft, Clock, User } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateStaticParams() {
   const slugs = await getBlogSlugs();

   return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
   params,
}: {
   params: { slug: string };
}): Promise<Metadata> {
   const post = await getBlogPostBySlug(params.slug);

   if (!post) {
      return getPageMeta("/blog");
   }

   return {
      title: post.seoTitle || `${post.title} | SofGent Blog`,
      description: post.seoDescription || post.excerpt,
   };
}

const BlogPost = async ({ params }: { params: { slug: string } }) => {
   const post = await getBlogPostBySlug(params.slug);

   if (!post) {
      notFound();
   }

   const coverImage = post.coverImage?.asset?.url || "/banners/front-banner-01.png";
   const formattedDate = post.publishedAt
      ? new Date(post.publishedAt).toLocaleDateString("en-US", {
           month: "long",
           day: "numeric",
           year: "numeric",
        })
      : "Recently published";

   return (
      <main className="min-h-screen bg-slate-50">
         <BreadCrumb pageTitle={post?.title} currentPage="Blog" to="/blog" />
         <section className="bg-slate-50">
            <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
               <Link
                  href="/blog"
                  className="mb-8 inline-flex items-center text-cyan-700 transition-colors hover:text-cyan-600">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to blog
               </Link>

               <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                  <Image
                     width={1440}
                     height={810}
                     src={coverImage}
                     alt={post.title}
                     className="h-[300px] w-full object-cover md:h-[420px]"
                  />

                  <div className="p-8 md:p-12">
                     <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                        {post.categories?.map((category) => (
                           <span
                              key={category}
                              className="rounded-full bg-cyan-50 px-3 py-1.5 font-medium text-cyan-700"
                           >
                              {category}
                           </span>
                        ))}
                     </div>

                     <div className="mb-8 flex flex-wrap items-center gap-4 text-slate-500">
                        <div className="flex items-center gap-2">
                           <User size={16} />
                           <span>{post.author || "SofGent"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                           <Clock size={16} />
                           <span>{post.readTime || "5 min read"}</span>
                        </div>
                        <span>{formattedDate}</span>
                     </div>

                     <div className="max-w-3xl">
                        <p className="text-xl leading-8 text-slate-600">
                           {post.excerpt}
                        </p>
                     </div>

                     <div className="mt-10 border-t border-slate-200 pt-10">
                        <BlogPortableText value={post.body} />
                     </div>
                  </div>
               </article>
            </div>
         </section>
      </main>
   );
};

export default BlogPost;
