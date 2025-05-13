import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import ToggleSoundButton from "./toggle-sound-button";

const HomeNavBar = () => {
  return (
    <div className="p-3 border-b-8 border-solid flex justify-between items-center">
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
          <h1 className="text-3xl">Sanjay</h1>
        </Button>
      </div>
      <div>
        <ToggleSoundButton />
      </div>
    </div>
  );
};

export default HomeNavBar;
