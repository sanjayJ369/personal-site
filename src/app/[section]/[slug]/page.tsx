import MarkdownRenderer from "@/components/markdown-renderer";
import { Badge } from "@/components/ui/badge";
import { getMarkDownContent } from "@/lib/content";

export default async function SectionPage({
  params,
}: {
  params: { section: string; slug: string };
}) {
  const content = await getMarkDownContent(params.section, params.slug);
  return (
    <main className=" w-full flex justify-center items-center">
      <div className="w-4/5">
        <h1 className="text-2xl">{content.data.title}</h1>
        <ul>
          <li>created at: {content.data.date}</li>
          <li>
            tags:{" "}
            {content.data.tags.map((tag) => (
              <Badge key={tag} className="mx-1">
                {tag}
              </Badge>
            ))}
          </li>
        </ul>
        <MarkdownRenderer content={content.content} />
      </div>
    </main>
  );
}
