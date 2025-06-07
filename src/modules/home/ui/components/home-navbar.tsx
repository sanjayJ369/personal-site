import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import ToggleSoundButton from "./toggle-sound-button";
import ToggleThemeButton from "./toogle-theme-button";
import Link from "next/link";

const HomeNavBar = () => {
  return (
    <div className="border-b-8 border-solid p-3 flex items-center justify-center">
      <div className="w-4/5 flex justify-between items-center">
        <div className="flex items-center h-12">
          <Avatar className=" w-8 h-8 md:w-12 md:h-12">
            <AvatarImage
              src="images/profile.png"
              alt="sanjay"
              className="object-cover "
            />
            <AvatarFallback className="text-xl">S</AvatarFallback>
          </Avatar>

          <Link
            href="/"
            className="text-3xl hidden sm:inline-flex p-6 cursor-pointer"
          >
            SANJAY
          </Link>
        </div>
        <div>
          <ToggleSoundButton />
          <ToggleThemeButton />
        </div>
      </div>
    </div>
  );
};

export default HomeNavBar;
