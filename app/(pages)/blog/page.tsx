import BlogCard from "@/app/components/common/BlogCard";
import BreadCrumb from "@/app/components/common/BreadCrumb";
import { getPosts } from "@/app/utils/md_post_converter";

const BlogList = () => {
   const posts = getPosts();
   console.log(posts);

   return (
      <section className="w-full py-16 md:py-[130px]">
         <BreadCrumb pageTitle="Blogs" currentPage="Blogs" to="/blogs" />
         <div className="w-full mx-auto theme-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  pt-[5rem]">
               {posts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
               ))}
            </div>
         </div>
      </section>
   );
};

export default BlogList;
