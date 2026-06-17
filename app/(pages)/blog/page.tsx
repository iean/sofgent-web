import BlogCard from "@/app/components/common/BlogCard";
import BreadCrumb from "@/app/components/common/BreadCrumb";
import { getAllBlogPosts } from "@/app/lib/blogs";
import getPageMeta from "@/app/utils/getPageMeta";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
   return getPageMeta("/blog");
}

const BlogList = async () => {
   const posts = await getAllBlogPosts();

   return (
      <section className="w-full py-16 md:py-[130px]">
         <BreadCrumb pageTitle="Blogs" currentPage="Blogs" to="/blogs" />
         <div className="w-full mx-auto theme-container">
            {posts.length > 0 ? (
               <div className="grid grid-cols-1 gap-8 pt-[5rem] md:grid-cols-2 lg:grid-cols-3">
                  {posts.map((post) => (
                     <BlogCard key={post.slug} post={post} />
                  ))}
               </div>
            ) : (
               <div className="pt-[5rem] text-center text-slate-500">
                  Blog content will be connected through the new CMS on this branch.
               </div>
            )}
         </div>
      </section>
   );
};

export default BlogList;
