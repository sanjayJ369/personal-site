"use client";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import * as React from "react";

import { cn } from "@/lib/utils";
import { useSound } from "@/hooks/useSound";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-base text-sm font-base ring-offset-white transition-all gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "text-main-foreground bg-main border-2 border-border shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none",
        noShadow: "text-main-foreground bg-main border-2 border-border",
        neutral:
          "bg-secondary-background text-foreground border-2 border-border shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none",
        reverse:
          "text-main-foreground bg-main border-2 border-border hover:translate-x-reverseBoxShadowX hover:translate-y-reverseBoxShadowY hover:shadow-shadow",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  onClick: parentOnClick,
  onMouseEnter: parentOnMouseEnter,
  playClick = true,
  playHover = true,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  } & { playClick?: boolean; playHover?: boolean }) {
  const { play: clickSound } = useSound("/sounds/click-button-space.mp3");
  const { play: hovorSound } = useSound("/sounds/hover-button-space.mp3");

  const Comp = asChild ? Slot : "button";
  const handleClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (playClick) {
      clickSound();
    }
    if (parentOnClick) {
      parentOnClick(e);
    }
  };

  const handleMouseEnter = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (playHover) {
      hovorSound();
    }
    if (parentOnMouseEnter) {
      parentOnMouseEnter(e);
    }
  };
  return (
    <Comp
      data-slot="button"
      onMouseEnter={handleMouseEnter}
      className={cn(buttonVariants({ variant, size, className }))}
      onClick={handleClick}
      {...props}
    />
  );
}

export { Button, buttonVariants };
