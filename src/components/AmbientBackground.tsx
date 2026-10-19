import React from "react";

export const AmbientBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-20 overflow-hidden"
    >
      {/* Primary Warm Living Canvas Gradient (No flat white!) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7F2E7] via-[#EDE4D3] to-[#F5ECE0]" />

      {/* Floating Animated Ambient Aura Orbs */}
      {/* Orb 1: Sage & Forest Green Aura (Top Left) */}
      <div className="absolute -top-[10%] -left-[10%] w-[650px] h-[650px] sm:w-[850px] sm:h-[850px] rounded-full bg-gradient-to-br from-[#2D5A43]/20 via-[#4E7D63]/15 to-transparent blur-[120px] animate-ambient-1" />

      {/* Orb 2: Warm Golden Chamomile & Honey Glow (Top Right) */}
      <div className="absolute top-[18%] -right-[15%] w-[600px] h-[600px] sm:w-[750px] sm:h-[750px] rounded-full bg-gradient-to-bl from-[#E2B77B]/25 via-[#F1D0A3]/20 to-transparent blur-[130px] animate-ambient-2" />

      {/* Orb 3: Soothing Herbal Emerald Glow (Center / Mid Page) */}
      <div className="absolute top-[48%] -left-[12%] w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-[#25543D]/18 via-[#619475]/15 to-transparent blur-[140px] animate-ambient-3" />

      {/* Orb 4: Warm Amber / Terracotta Peach Glow (Mid Right) */}
      <div className="absolute top-[68%] -right-[10%] w-[650px] h-[650px] rounded-full bg-gradient-to-tl from-[#E5A96E]/20 via-[#EFC59B]/15 to-transparent blur-[130px] animate-ambient-1" />

      {/* Orb 5: Deep Calming Pine & Botanical Sage Glow (Bottom) */}
      <div className="absolute -bottom-[10%] left-[20%] w-[750px] h-[750px] rounded-full bg-gradient-to-t from-[#1F4532]/22 via-[#3D6B51]/15 to-transparent blur-[140px] animate-ambient-2" />

      {/* Subtle organic wavy topographic lines SVG for texture and craftsmanship */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.035] mix-blend-multiply"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* Radial Vignette & Depth Overlay */}
      <div className="absolute inset-0 bg-wellness-pattern opacity-80" />
    </div>
  );
};
