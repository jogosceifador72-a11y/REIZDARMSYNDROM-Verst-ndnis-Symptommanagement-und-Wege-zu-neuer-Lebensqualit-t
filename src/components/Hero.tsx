import React from "react";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  BookOpen,
  Smartphone,
  ShieldCheck,
  Zap,
  Lock,
} from "lucide-react";
import { CHECKOUT_URL, PRICE, ORIGINAL_PRICE } from "../data/productData";
import coverImg from "../assets/images/reizdarm_cover_1792178076208.jpg";
import { ScrollReveal } from "./ScrollReveal";

interface HeroProps {
  onOpenPreview: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPreview }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Copy & Value Proposition */}
          <ScrollReveal direction="left" className="lg:col-span-7 text-left space-y-6">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4ECE7] border border-[#BFD5C6] text-[#214A36] text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#2D5A43]" />
              <span>Ein wissenschaftlich fundierter Praxisleitfaden</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-[#142A1E] leading-[1.15] tracking-tight">
              Reizdarmsyndrom
              <span className="block text-2xl sm:text-3xl md:text-3xl font-normal font-sans text-[#385A47] mt-2">
                Verständnis, Symptommanagement und Wege zu neuer Lebensqualität
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#32453B] leading-relaxed max-w-2xl">
              Auf <strong>30 kompakten Seiten</strong> erfährst du, wie Reizdarm entsteht, wie die 
              Diagnose abläuft und welche praxiserprobten Strategien bei <strong>Ernährung, Stress und Bewegung</strong> wirklich 
              helfen. Ohne lange Theorie – mit einer klaren Schritt-für-Schritt-Anleitung für deinen Alltag.
            </p>

            {/* Key Quick Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-sm text-[#1F392B]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>3 Phasen Low-FODMAP-Methode</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Praktisches Symptomtagebuch</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Darm-Hirn-Achse & Stressregulation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>7-Tage-Wochenplan für Sofortstart</span>
              </div>
            </div>

            {/* CTA Box with Pricing */}
            <div className="pt-3">
              <div className="p-5 sm:p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-[#D8D2C5] shadow-xl shadow-stone-200/50 space-y-4">
                
                {/* Price Display */}
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    Sonderangebot:
                  </span>
                  <span className="text-3xl sm:text-4xl font-display font-extrabold text-[#1B3828]">
                    {PRICE} €
                  </span>
                  <span className="text-base sm:text-lg text-neutral-400 line-through">
                    {ORIGINAL_PRICE} €
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                    Sofortiger PDF-Zugang
                  </span>
                </div>

                {/* Primary Checkout Button */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-3 bg-[#2D5A43] hover:bg-[#224533] text-white text-base sm:text-lg font-bold px-7 py-4 rounded-xl shadow-lg shadow-[#2D5A43]/25 hover:shadow-xl hover:shadow-[#2D5A43]/35 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-center animate-pulse-glow"
                  >
                    <span>Jetzt E-Book für {PRICE} € sichern</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>

                  <button
                    onClick={onOpenPreview}
                    type="button"
                    className="inline-flex items-center justify-center gap-2 bg-[#F1ECE3] hover:bg-[#E6E0D5] text-[#2D5A43] font-semibold text-sm px-5 py-3.5 rounded-xl border border-[#D5CFC5] transition"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Blick ins Buch</span>
                  </button>
                </div>

                {/* Security and Trust Micro Badges */}
                <div className="pt-2 border-t border-neutral-100 flex flex-wrap items-center justify-between text-xs text-neutral-500 gap-y-2">
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                    Sofortige E-Mail-Zustellung
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-emerald-600" />
                    Sichere Zahlung über Hotmart
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Smartphone className="w-3.5 h-3.5 text-neutral-600" />
                    Handy, Tablet & PC (PDF)
                  </span>
                </div>
              </div>
            </div>

          </ScrollReveal>

          {/* Right Column: Visual Mockup of the Book */}
          <ScrollReveal direction="right" delay={0.2} className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
              
              {/* Glow backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2D5A43]/20 to-emerald-200/40 rounded-3xl blur-2xl transform rotate-2"></div>

              {/* 3D Book Mockup Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80 bg-white transition-transform duration-500 hover:scale-[1.02]">
                <img
                  src={coverImg}
                  alt="Reizdarmsyndrom E-Book Cover - Ein wissenschaftlich fundierter Praxisleitfaden"
                  className="w-full h-auto object-cover block"
                  loading="eager"
                />

                {/* Overlay Floating Tag */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-neutral-200 text-xs font-bold text-[#1F3D2E] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>30 Seiten PDF-Leitfaden</span>
                </div>

                {/* Interactive Click to Look Inside Bar */}
                <button
                  onClick={onOpenPreview}
                  className="w-full bg-[#1B3526]/95 hover:bg-[#152B1E] text-white py-3 px-4 text-xs font-semibold flex items-center justify-center gap-2 transition"
                >
                  <BookOpen className="w-4 h-4 text-emerald-300" />
                  <span>Klicken für interaktive Leseprobe</span>
                </button>
              </div>

              {/* Floating Social Proof Pill */}
              <div className="mt-4 bg-white/95 backdrop-blur-md rounded-xl p-3 border border-neutral-200 shadow-md flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                  ✓
                </div>
                <div className="text-xs text-neutral-700">
                  <strong className="block text-neutral-900 font-bold">
                    Sofortiger digitaler Download
                  </strong>
                  Format: PDF (lesbar auf Smartphone, Tablet & PC)
                </div>
              </div>

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};
