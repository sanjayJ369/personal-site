import MarkdownRenderer from "@/components/markdown-renderer";
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
        <MarkdownRenderer content={content.content} />
      </div>
    </main>
  );
}
