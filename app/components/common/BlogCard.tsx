import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogPost {
   slug: string;
   title: string;
   excerpt: string;
   content: string;
   author: string;
   date: string;
   imageUrl: string;
   readTime: string;
}
interface BlogCardProps {
   post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
   return (
      <article className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
         <Link href={`/blog/${post.slug}`}>
            <Image
               width={400}
               height={300}
               src={post.imageUrl}
               alt={post.title}
               className="w-full h-48 object-cover"
            />
            <div className="p-6">
               <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {post.title}
               </h2>
               <p className="text-gray-600 mb-4">{post.excerpt}</p>
               <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.author}</span>
                  <div className="flex items-center gap-1">
                     <Clock size={16} />
                     <span>{post.readTime}</span>
                  </div>
               </div>
            </div>
         </Link>
      </article>
   );
};

export default BlogCard;
