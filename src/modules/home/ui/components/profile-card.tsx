import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ImageCard from "@/components/ui/image-card";

const ProfileCard = () => {
  return (
    <div className="relative flex flex-col justify-center border-4 border-solid">
      <div className="relative w-full mb-6 md:mb-12">
        <ImageCard
          caption=""
          imageUrl="https://hips.hearstapps.com/hmg-prod/images/flowers-trees-and-bushes-reach-their-peak-of-full-bloom-in-news-photo-1678292967.jpg"
          className="w-full aspect-[6/1] "
        />
        <Avatar className="absolute bottom-[-20%] left-[5%]  md:w-24 md:h-24 ">
          <AvatarImage src="https://github.com/shadcn.png" alt="sanjay" />
          <AvatarFallback className="text-xl">S</AvatarFallback>
        </Avatar>
      </div>
      <div className="p-3">
        <h1 className="text-2xl">Hi...!!!, i am Sanjay</h1>
        <p>
          I am a computer science engineering student with an interest in
          programming, particularly web development. Currently, I am pursuing my
          B.E. in Computer Science Engineering, I am currently focused on
          expanding my programming skill set. Beyond coding, I like to do 3D art
          and also play chess I invite you to explore my work
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
