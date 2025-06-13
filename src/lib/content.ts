import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { readdirSync, readFileSync, existsSync } from "fs";

const sectionsPath = path.join(process.cwd(), "src/content/");

export interface FrontmatterData {
  title?: string;
  date?: string;
  description?: string;
  tags?: string[];
  image?: string;
  repolink?: string;
  livedemo?: string;
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
  // Try different file extensions
  const possibleExtensions = [".md", ".mdx"];
  let fullPath = "";
  let fileExists = false;

  for (const ext of possibleExtensions) {
    const testPath = path.join(sectionsPath, section, `${slug}${ext}`);
    if (existsSync(testPath)) {
      fullPath = testPath;
      fileExists = true;
      break;
    }
  }

  // If no file found, throw a descriptive error
  if (!fileExists) {
    throw new Error(
      `Content file not found for section: ${section}, slug: ${slug}. Checked paths: ${possibleExtensions
        .map((ext) => path.join(sectionsPath, section, `${slug}${ext}`))
        .join(", ")}`
    );
  }

  const fileContent = readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    data,
    content,
  };
}
