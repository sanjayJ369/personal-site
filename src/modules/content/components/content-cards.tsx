import { getSectionData } from "@/lib/content";
import ContentCard from "./content-card";

interface ContentCardsProps {
  contentType: string;
}

const ContentCards = async ({ contentType }: ContentCardsProps) => {
  const content = await getSectionData(contentType);
  return content.map((data) => (
    <ContentCard
      path={`${contentType}/${data.slug}`}
      key={data.date}
      data={data}
    />
  ));
};

export default ContentCards;
