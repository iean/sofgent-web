import BreadCrumb from "@/app/components/common/BreadCrumb";
import { getBlogPostBySlug } from "@/app/lib/blogs";
import type { SanityPortableTextBlock } from "@/lib/sanity/types";
import { ArrowLeft, Clock, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { notFound } from "next/navigation";
import "./style.css";

function renderSpanText(block: SanityPortableTextBlock) {
   const markDefs = block.markDefs ?? [];

   return (block.children ?? []).map((child, index) => {
      const key = child._key ?? `${block._key ?? "block"}-${index}`;
      const linkMark = (child.marks ?? []).find((mark) =>
         markDefs.some((definition) => definition._key === mark && definition.href),
      );

      if (!linkMark) {
         return <React.Fragment key={key}>{child.text}</React.Fragment>;
      }

      const definition = markDefs.find((item) => item._key === linkMark);

      return (
         <a
            key={key}
            href={definition?.href}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline underline-offset-4">
            {child.text}
         </a>
      );
   });
}

function renderPortableBlock(block: SanityPortableTextBlock, index: number) {
   const key = block._key ?? `${block._type}-${index}`;

   if (block._type === "image" && block.imageUrl) {
      return (
         <figure key={key} className="my-8">
            <Image
               width={1200}
               height={700}
               src={block.imageUrl}
               alt={block.alt || "Blog image"}
               className="w-full rounded-xl object-cover"
            />
            {block.caption ? (
               <figcaption className="mt-3 text-sm text-gray-500">{block.caption}</figcaption>
            ) : null}
         </figure>
      );
   }

   if (block.listItem) {
      return (
         <p key={key} className="mb-4 ml-6 text-lg leading-8 text-gray-700">
            • {renderSpanText(block)}
         </p>
      );
   }

   switch (block.style) {
      case "h2":
         return (
            <h2 key={key} className="mt-10 mb-4 text-3xl font-bold text-gray-900">
               {renderSpanText(block)}
            </h2>
         );
      case "h3":
         return (
            <h3 key={key} className="mt-8 mb-3 text-2xl font-semibold text-gray-900">
               {renderSpanText(block)}
            </h3>
         );
      case "blockquote":
         return (
            <blockquote key={key} className="my-6 border-l-4 border-blue-500 pl-4 italic text-gray-700">
               {renderSpanText(block)}
            </blockquote>
         );
      default:
         return (
            <p key={key} className="mb-5 text-lg leading-8 text-gray-700">
               {renderSpanText(block)}
            </p>
         );
   }
}

const BlogPost = async ({ params }: { params: { slug: string } }) => {
   const slug = params.slug;
   const post = await getBlogPostBySlug(slug);
   if (!post) {
      notFound();
   }

   return (
      <section>
         <BreadCrumb pageTitle={post?.title} currentPage="Blog" to="/blog" />
         <div className="bg-gray-50">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
               <Link
                  href="/blog"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to blog
               </Link>

               <article>
                  <Image
                     width={800}
                     height={700}
                     src={post.imageUrl || "/default-image.jpg"}
                     alt={post.title}
                     className="w-full h-64 object-cover rounded-xl mb-8"
                  />

                  <div className="flex items-center gap-4 text-gray-600 mb-6">
                     <div className="flex items-center gap-2">
                        <User size={16} />
                        <span>{post.author}</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{post.readTime}</span>
                     </div>
                  </div>
                  <div className="prose">
                     {post.content.map((block, index) => renderPortableBlock(block, index))}
                  </div>
               </article>
            </div>
         </div>
      </section>
   );
};

export default BlogPost;
