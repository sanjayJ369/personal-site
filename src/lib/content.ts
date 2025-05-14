import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const sectionsPath = path.join(process.cwd(), "src/content/");

export interface FrontmatterData {
  title?: string;
  date?: string;
  description?: string;
  tags?: string[];
  image?: string;
}

export function getSectionSlugs(section: string) {
  const dir = path.join(sectionsPath, section);
  return fs.readdirSync(dir).filter((file) => file.endsWith(".md"));
}

export function getSectionData(section: string) {
  const slugs = getSectionSlugs(section);
  return slugs
    .map((slug) => {
      const filePath = path.join(sectionsPath, section, slug);
      const fileContents = fs.readFileSync(filePath, "utf8");

      const { data } = matter(fileContents) as { data: FrontmatterData };
      return data;
    })
    .sort((a, b) => {
      if (!a.date || !b.date) return 0;

      const [aDay, aMonth, aYear] = a.date.split("-").map(Number);
      const [bDay, bMonth, bYear] = b.date.split("-").map(Number);

      const aDate = new Date(aYear, aMonth - 1, aDay);
      const bDate = new Date(bYear, bMonth - 1, bDay);

      return bDate.getTime() - aDate.getTime();
    });
}
