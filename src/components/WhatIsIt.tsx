import React from "react";
import { BookOpen, FileCheck, Clock, Compass, Activity, Brain, Utensils } from "lucide-react";
import devicesImg from "../assets/images/devices_preview_1792178091316.jpg";
import { ScrollReveal } from "./ScrollReveal";

export const WhatIsIt: React.FC = () => {
  return (
    <section id="was-ist-das" className="py-16 md:py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs uppercase tracking-wider font-bold text-[#2D5A43] bg-[#E5EDE8] px-3.5 py-1.5 rounded-full mb-3">
            1. Was ist das?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#14291E] leading-tight">
            Dein verlässlicher Begleiter für einen entspannten Darm
          </h2>
          <p className="text-base text-neutral-600 mt-3 leading-relaxed">
            Keine Hunderte Seiten unverständliches Lehrbuchwissen, sondern ein konzentrierter 
            Leitfaden, der direkt auf den Punkt kommt.
          </p>
        </ScrollReveal>

        {/* 2-Column Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Visual Showcase: Device Mockup */}
          <ScrollReveal direction="left" className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/90 bg-white">
              <img
                src={devicesImg}
                alt="Reizdarmsyndrom E-Book digital lesbar auf Smartphone und Tablet"
                className="w-full h-auto object-cover block"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#FAF7F0]/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-[#DDD3C2]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                    PDF
                  </div>
                  <div className="text-xs">
                    <span className="font-bold text-neutral-900 block">
                      30 Seiten Kompaktformat
                    </span>
                    <span className="text-neutral-500">
                      Sofort lesbar auf Handy, Tablet und Computer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Core Description from user brief */}
          <ScrollReveal direction="right" delay={0.15} className="lg:col-span-7 space-y-6">
            <div className="bg-[#FAF7F0]/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-[#DDD3C2] shadow-sm space-y-5">
              <h3 className="font-display text-2xl font-bold text-[#1B3627]">
                Kompakt, fundiert und sofort im Alltag anwendbar
              </h3>
              
              <p className="text-base text-neutral-700 leading-relaxed">
                Das E-Book <strong>„Reizdarmsyndrom“</strong> ist ein praktischer <strong>30-seitiger PDF-Leitfaden</strong>. 
                Er erklärt verständlich, wie Reizdarm entsteht, wie die Diagnose abläuft und welche praxistauglichen 
                Strategien bei <strong>Ernährung, Stress und Bewegung</strong> wirklich helfen können.
              </p>

              <div className="p-4 rounded-2xl bg-[#F6F4EE] border border-[#E0D9CB] text-sm text-[#263D31] font-medium leading-relaxed">
                „Ohne lange Theorie bekommst du eine klare Schritt-für-Schritt-Anleitung, mit der du deine Beschwerden 
                besser verstehst und im Alltag gezielt lindern kannst – einfach und in deinem eigenen Tempo.“
              </div>

              {/* 3 Pillar Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-neutral-200 text-center">
                  <Utensils className="w-5 h-5 text-emerald-700 mx-auto mb-1.5" />
                  <span className="text-xs font-bold text-neutral-900 block">Ernährung</span>
                  <span className="text-[11px] text-neutral-500">Low-FODMAP & Listen</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-neutral-200 text-center">
                  <Brain className="w-5 h-5 text-emerald-700 mx-auto mb-1.5" />
                  <span className="text-xs font-bold text-neutral-900 block">Darm-Hirn</span>
                  <span className="text-[11px] text-neutral-500">Atmung & Entspannung</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-neutral-200 text-center">
                  <Activity className="w-5 h-5 text-emerald-700 mx-auto mb-1.5" />
                  <span className="text-xs font-bold text-neutral-900 block">Bewegung</span>
                  <span className="text-[11px] text-neutral-500">Sanfte Peristaltik</span>
                </div>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span>In deinem eigenen Tempo umsetzbar</span>
                </div>
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-emerald-600" />
                  <span>Strukturierter roter Faden von A bis Z</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-emerald-600" />
                  <span>Keine Fachbegriffe ohne Erklärung</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-emerald-600" />
                  <span>Direktes digitales PDF (kein Warten auf Post)</span>
                </div>
              </div>

            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};
