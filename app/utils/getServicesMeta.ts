import fs from "fs";
import matter from "gray-matter";
import path from "path";

export default function getServicesMeta(basePath: string) {
   const servicesPath = path.join(process.cwd(), basePath);
   const services = fs.readdirSync(servicesPath);
   const servicesMeta = services.map((filename) => {
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
         order:matterResult.data.order
      };
   });
   return servicesMeta;
}
