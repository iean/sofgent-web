import { promises as fs } from "fs";
const readLocalFile = async (filePath: string) => {
   const path = process.cwd() + filePath;
   const data = await fs.readFile(path, "utf-8");
   return JSON.parse(data);
};
export default readLocalFile;
