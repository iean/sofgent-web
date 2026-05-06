import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { SanityBlogListItem } from "@/lib/sanity/types";

interface BlogCardProps {
   post: SanityBlogListItem;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
   const imageSrc = post.coverImage?.asset?.url || "/banners/front-banner-01.png";
   const formattedDate = post.publishedAt
      ? new Date(post.publishedAt).toLocaleDateString("en-US", {
           month: "short",
           day: "numeric",
           year: "numeric",
        })
      : null;

   return (
      <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl">
         <Link href={`/blog/${post.slug}`}>
            <Image
               width={640}
               height={360}
               src={imageSrc}
               alt={post.title}
               className="h-56 w-full object-cover"
            />
            <div className="p-7">
               <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                  {formattedDate ? (
                     <span className="rounded-full bg-slate-100 px-3 py-1.5 font-medium text-slate-600">
                        {formattedDate}
                     </span>
                  ) : null}
                  {post.categories?.[0] ? (
                     <span className="rounded-full bg-cyan-50 px-3 py-1.5 font-medium text-cyan-700">
                        {post.categories[0]}
                     </span>
                  ) : null}
               </div>
               <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-950">
                  {post.title}
               </h2>
               <p className="mb-6 text-base leading-7 text-slate-600">{post.excerpt}</p>
               <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>{post.author || "SofGent"}</span>
                  <div className="flex items-center gap-1">
                     <Clock size={16} />
                     <span>{post.readTime || "5 min read"}</span>
                  </div>
               </div>
            </div>
         </Link>
      </article>
   );
};

export default BlogCard;
