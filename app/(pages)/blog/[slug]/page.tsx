import BreadCrumb from "@/app/components/common/BreadCrumb";
import { getPostBySlug } from "@/app/utils/md_post_converter";
import { ArrowLeft, Clock, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import "./style.css";

const BlogPost = async ({ params }: { params: { slug: string } }) => {
   const slug = params.slug;
   const post = await getPostBySlug(slug);
   console.log(post);

   if (!post) {
      return (
         <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
               <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Post not found
               </h1>
               <Link href="/blog" className="text-blue-600 hover:text-blue-800">
                  Return to blog
               </Link>
            </div>
         </div>
      );
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
                     src={post.imageUrl}
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
                  <div
                     dangerouslySetInnerHTML={{ __html: post?.content }}
                     className="prose prose-lg max-w-none"></div>
               </article>
            </div>
         </div>
      </section>
   );
};

export default BlogPost;
