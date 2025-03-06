import BlogCard from "@/app/components/common/BlogCard";
import BreadCrumb from "@/app/components/common/BreadCrumb";
import keystaticConfig from "@/keystatic.config";
import { createReader } from "@keystatic/core/reader";

const reader = createReader(process.cwd(), keystaticConfig);
const BlogList = async () => {
   const posts = await reader.collections.posts.all();
   console.log(posts);

   return (
      <section className="w-full py-16 md:py-[130px]">
         <BreadCrumb pageTitle="Blogs" currentPage="Blogs" to="/blogs" />
         <div className="w-full mx-auto theme-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  pt-[5rem]">
               {posts.map((post) => (
                  <BlogCard
                     key={post.slug}
                     post={{ ...post.entry, slug: post.slug }}
                  />
               ))}
            </div>
         </div>
      </section>
   );
};

export default BlogList;
