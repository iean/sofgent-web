import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { cache } from "react";

const servicesPath = path.join(process.cwd(), "app", "data", "services");

const getServicesMeta = cache(() => {
   const services = fs
      .readdirSync(servicesPath)
      .filter((filename) => filename.endsWith(".md"));

   return services
      .map((filename) => {
         const fileContent = fs.readFileSync(
            path.join(servicesPath, filename),
            "utf8"
         );
         const matterResult = matter(fileContent);

         return {
            title: matterResult.data.title,
            description: matterResult.data.description,
            icon: matterResult.data.icon,
            slug: filename.replace(".md", ""),
            content: matterResult.content,
            order: matterResult.data.order,
         };
      })
      .sort((left, right) => (left.order ?? 0) - (right.order ?? 0));
});

export default getServicesMeta;
