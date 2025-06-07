"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";

const ProfileCard = () => {
  const [typewriterText, setTypewriterText] = useState("");
  const [glitchActive, setGlitchActive] = useState(false);
  const [terminalColorIndex, setTerminalColorIndex] = useState(0);

  // Array of retro terminal colors to cycle through
  const terminalColors = [
    "#FFE66D", // amber
    "#39FF14", // bright green
    "#00FFFF", // cyan
    "#FF6B6B", // light red
    "#F0F0F0", // light gray
  ];

  // Terminal typewriter effect
  useEffect(() => {
    const text =
      "> user: sanjay\n> role: developer\n> status: coding\n> system: online";
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < text.length) {
        setTypewriterText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
        // Activate random glitch effect
        const glitchInterval = setInterval(() => {
          setGlitchActive(true);
          setTimeout(() => setGlitchActive(false), 150);
        }, 3000);
        return () => clearInterval(glitchInterval);
      }
    }, 100);
    return () => clearInterval(typeInterval);
  }, []);

  // Color cycling effect synchronized with scan animation
  useEffect(() => {
    // Match this timing with the scanMove animation duration
    const colorCycleInterval = setInterval(() => {
      setTerminalColorIndex(
        (prevIndex) => (prevIndex + 1) % terminalColors.length
      );
    }, 2000); // Match with scanMove animation duration (2s)

    return () => clearInterval(colorCycleInterval);
  }, []);

  return (
    <div className="relative flex flex-col retro-border bg-background h-96 md:h-[500px] group">
      {/* ASCII Terminal Section - Half height */}
      <div
        className={`relative w-full h-1/2 overflow-hidden ${
          glitchActive ? "animate-pulse" : ""
        }`}
      >
        {/* Greyscale base with phosphor glow */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundColor: "#000000",
            backgroundImage: `linear-gradient(
              135deg,
              #000000 0%,
              #1a1a1a 25%,
              #333333 50%,
              #1a1a1a 75%,
              #000000 100%
            )`,
            backgroundSize: "200% 200%",
            animation: "waveDistort 8s ease-in-out infinite",
            boxShadow: "inset 0 0 30px rgba(60, 255, 60, 0.15)",
          }}
        />

        {/* Horizontal scanlines with CRT effect */}
        <div
          className="absolute inset-0 z-10 opacity-70"
          style={{
            backgroundImage: `linear-gradient(
              0deg,
              transparent 0%,
              transparent 50%,
              rgba(255, 255, 255, 0.1) 50%,
              rgba(255, 255, 255, 0.1) 51%,
              transparent 51%,
              transparent 100%
            )`,
            backgroundSize: "100% 4px",
            animation: "scanMove 0.5s linear infinite",
          }}
        />

        {/* CRT edge distortion */}
        <div
          className="absolute inset-0 z-8 opacity-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.6) 100%)",
            borderRadius: "50%/5%",
            transform: "scale(1.05, 1.05)",
          }}
        />

        {/* Moving scanline */}
        <div
          className="absolute inset-0 z-15 opacity-90"
          style={{
            background: `linear-gradient(
              0deg,
              transparent 0%,
              transparent 49%,
              rgba(255, 255, 255, 0.5) 49.5%,
              rgba(255, 255, 255, 0.7) 50%,
              rgba(255, 255, 255, 0.5) 50.5%,
              transparent 51%,
              transparent 100%
            )`,
            backgroundSize: "100% 100%",
            animation: "scanMove 2s linear infinite",
          }}
        />

        {/* Vertical distortion lines */}
        <div
          className="absolute inset-0 z-10 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 98px,
              rgba(255, 255, 255, 0.3) 99px,
              rgba(255, 255, 255, 0.3) 100px,
              transparent 101px
            )`,
            backgroundSize: "200px 100%",
            animation: "waveDistort 6s ease-in-out infinite",
          }}
        />

        {/* Random noise overlay */}
        <div
          className="absolute inset-0 z-12 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' fill='white'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "100px 100px",
            mixBlendMode: "overlay",
          }}
        />

        {/* Terminal text display WITH COLOR CYCLING */}
        <pre
          className="absolute top-6 left-6 z-20 font-mono text-xs md:text-sm whitespace-pre-wrap group-hover:animate-pulse transition-colors duration-500"
          style={{
            color: terminalColors[terminalColorIndex],
            textShadow: `0 0 5px ${terminalColors[terminalColorIndex]}`,
            fontFamily: "monospace",
          }}
        >
          {typewriterText}
          <span className="animate-pulse">_</span>
        </pre>

        {/* Random glitch elements */}
        {glitchActive && (
          <>
            <div
              className="absolute z-25 bg-white opacity-20"
              style={{
                top: `${Math.random() * 100}%`,
                left: 0,
                height: "2px",
                width: "100%",
              }}
            />
            <div
              className="absolute z-25 bg-white opacity-30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                height: "20px",
                width: "5px",
              }}
            />
          </>
        )}
      </div>

      {/* About Me Section - Half height */}
      <div className="relative h-1/2 p-6 pt-14 flex flex-col justify-center bg-background">
        <div className="absolute -top-12 left-6 z-30">
          <Avatar className="w-16 h-16 md:w-20 md:h-20 bg-transparent">
            <AvatarImage
              src="/images/profile.png"
              alt="sanjay"
              className="object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-500"
            />
            <AvatarFallback className="text-xl md:text-2xl font-bold bg-main text-white">
              S
            </AvatarFallback>
          </Avatar>
        </div>
        <h1 className="text-xl md:text-2xl font-bold mb-3 ">
          Hi...!!!, i am Sanjay
        </h1>
        <p className="text-sm md:text-base leading-relaxed">
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
