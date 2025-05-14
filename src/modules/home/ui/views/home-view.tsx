import ProfileCard from "../components/profile-card";
import ContentSection from "@/modules/content/sections/content-section";

const HomeView = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center py-3">
      <div className="w-4/5">
        <ProfileCard />
      </div>
      <div className="w-4/5">
        <ContentSection contentType="projects" />
      </div>
    </div>
  );
};

export default HomeView;
