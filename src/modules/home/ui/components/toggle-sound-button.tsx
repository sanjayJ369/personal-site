"use client";
import { Button } from "@/components/ui/button";
import { toggleSoundSetting, isSoundEnabled } from "@/lib/sound";
import { Volume2Icon, VolumeXIcon } from "lucide-react";
import { useEffect, useState } from "react";
const ToggleSoundButton = () => {
  const [on, setOn] = useState<boolean>(false);
  useEffect(() => {
    setOn(isSoundEnabled());
  }, []);

  return (
    <Button
      onClick={() => {
        setOn(!on);
        toggleSoundSetting();
      }}
      size={"icon"}
    >
      {on ? <Volume2Icon /> : <VolumeXIcon />}
    </Button>
  );
};

export default ToggleSoundButton;
