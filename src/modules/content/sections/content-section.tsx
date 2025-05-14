import ContentCards from "../components/content-cards";

interface ContentSectionProps {
  contentType: string;
}

const ContentSection = ({ contentType }: ContentSectionProps) => {
  return (
    <div className="my-1 md:my-3">
      <h1 className="text-xl md:text-3xl my-1">{contentType.toUpperCase()}</h1>
      <div className="flex flex-wrap gap-3 md:gap-5">
        <ContentCards contentType={contentType} />
      </div>
    </div>
  );
};

export default ContentSection;
