"use client";
import { ThemeProvider } from "@/components/theme-provider";
import HomeNavBar from "@/modules/home/ui/components/home-navbar";
import { useEffect } from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const directions: [number, number][] = [
      [40, 40], // southeast ↘
      [-40, -40], // northwest ↖
      [40, -40], // northeast ↗
      [-40, 40], // southwest ↙
    ];

    const [x, y] = directions[Math.floor(Math.random() * directions.length)];

    document.body.style.setProperty("--x-offset", `${x}px`);
    document.body.style.setProperty("--y-offset", `${y}px`);
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <HomeNavBar />
      {children}
    </ThemeProvider>
  );
}
