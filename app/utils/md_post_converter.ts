import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "/app/data/blogs");

export function getPosts() {
   const filenames = fs.readdirSync(postsDirectory);

   return filenames.map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      return {
         slug: filename.replace(".md", ""),
         title: data.title,
         excerpt: data.excerpt,
         author: data.author,
         date: data.date,
         imageUrl: data.imageUrl,
         readTime: data.readTime,
         content,
      };
   });
}

export async function getPostBySlug(slug: string) {
   const filePath = path.join(postsDirectory, `${slug}.md`);
   const fileContent = fs.readFileSync(filePath, "utf-8");
   const { data, content } = matter(fileContent);

   const processedContent = await remark().use(html).process(content);
   const contentHtml = processedContent.toString();

   return {
      title: data.title,
      excerpt: data.excerpt,
      author: data.author,
      date: data.date,
      imageUrl: data.imageUrl,
      readTime: data.readTime,
      content: contentHtml,
   };
}
