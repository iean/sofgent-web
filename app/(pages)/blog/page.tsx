import getPageMeta from "@/app/utils/getPageMeta";
import { getAllBlogPosts } from "@/app/lib/blogs";
import type { Metadata } from "next";
import BlogClientPage from "./BlogClientPage";

export function generateMetadata(): Metadata {
   return getPageMeta("/blog");
}

export default async function BlogList() {
   const posts = await getAllBlogPosts();
   return <BlogClientPage sanityPosts={posts} />;
}
