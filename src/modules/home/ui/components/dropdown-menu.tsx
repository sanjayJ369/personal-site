import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
  Pen,
  Menu,
} from "lucide-react";

import { siGithub } from "simple-icons";

import React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ToggleSoundButton from "./toggle-sound-button";
import ToggleThemeButton from "./toogle-theme-button";

export default function NavBarDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          <ToggleSoundButton />
          <span>sound</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ToggleThemeButton />
          <span>theme</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <a
            href="https://blog.sanjayj.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <Pen className="mr-2 h-4 w-4" />
            <span>Blog</span>
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a
            href="https://linkedin.com/in/j-sanjay"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <User className="mr-2 h-4 w-4" />
            <span>LinkedIn</span>
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a
            href="https://bit.ly/3Z0WpGx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Resume</span>
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a
            href="https://github.com/sanjayj369"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <svg
              className="mr-2 h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="img"
              aria-label="GitHub"
            >
              <path d={siGithub.path} />
            </svg>
            <span>GitHub</span>
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
