import ContentCards from "../components/content-cards";

interface ContentSectionProps {
  contentType: string;
}

const ContentSection = ({ contentType }: ContentSectionProps) => {
  return (
    <div className="my-1 md:my-3">
      <h1 className="text-xl md:text-3xl my-3 p-3 bg-secondary-background retro-border">
        {contentType.toUpperCase()}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 ">
        <ContentCards contentType={contentType} />
      </div>
    </div>
  );
};

export default ContentSection;
