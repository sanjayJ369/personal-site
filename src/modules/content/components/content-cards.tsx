import { getSectionData, getSectionSlugs } from "@/lib/content";
import ContentCard from "./content-card";

interface ContentCardsProps {
  contentType: string;
}

const ContentCards = ({ contentType }: ContentCardsProps) => {
  return getSectionData(contentType).map((data) => (
    <ContentCard key={data.date} data={data} />
  ));
};

export default ContentCards;
