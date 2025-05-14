import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import ToggleSoundButton from "./toggle-sound-button";
import ToggleThemeButton from "./toogle-theme-button";

const HomeNavBar = () => {
  return (
    <div className="border-b-8 border-solid p-3 flex items-center justify-center">
      <div className="w-4/5 flex justify-between items-center">
        <div className="flex items-center h-12">
          <Avatar className="sm:hidden">
            <AvatarImage src="https://github.com/shadcn.png" alt="sanjay" />
            <AvatarFallback>S</AvatarFallback>
          </Avatar>

          <Button
            className="hidden sm:inline-flex p-6"
            variant="noShadow"
            size="lg"
          >
            <p className="text-3xl">SANJAY</p>
          </Button>
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
