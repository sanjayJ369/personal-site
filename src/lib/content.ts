"use server";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { readdirSync, readFileSync } from "fs";

const sectionsPath = path.join(process.cwd(), "src/content/");

export interface FrontmatterData {
  title?: string;
  date?: string;
  description?: string;
  tags?: string[];
  image?: string;
}

export async function getSectionSlugs(section: string) {
  const dir = path.join(sectionsPath, section);
  return readdirSync(dir).filter((file) => file.endsWith(".md"));
}

export async function getSectionData(section: string) {
  const slugs = await getSectionSlugs(section);
  return slugs
    .map((slug) => {
      const filePath = path.join(sectionsPath, section, slug);
      const fileContents = readFileSync(filePath, "utf8");

      const { data } = matter(fileContents) as { data: FrontmatterData };
      return { slug: slug, ...data };
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

export async function getMarkDownContent(section: string, slug: string) {
  const fullPath = path.join(sectionsPath, section, `${slug}`);
  const fileContent = readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    data,
    content,
  };
}
