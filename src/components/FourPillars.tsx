import React from "react";
import {
  CheckCircle2,
  CalendarCheck,
  Search,
  Salad,
  PiggyBank,
  Moon,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { CORE_PILLARS, CHECKOUT_URL, PRICE } from "../data/productData";
import { ScrollReveal } from "./ScrollReveal";

export const FourPillars: React.FC = () => {
  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Search className="w-6 h-6 text-emerald-700" />;
      case 1:
        return <Salad className="w-6 h-6 text-emerald-700" />;
      case 2:
        return <PiggyBank className="w-6 h-6 text-emerald-700" />;
      case 3:
        return <Moon className="w-6 h-6 text-emerald-700" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-emerald-700" />;
    }
  };

  return (
    <section id="vorteile" className="py-16 md:py-24 bg-[#F8F2E6]/80 backdrop-blur-md border-y border-[#E0D5C3]/80 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs uppercase tracking-wider font-bold text-[#2D5A43] bg-[#E5EDE8] px-3.5 py-1.5 rounded-full mb-3">
            2. Was löst es?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#14291E] leading-tight">
            Dieses E-Book räumt die größten Hürden deines Alltags aus dem Weg
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-3 leading-relaxed">
            Schluss mit Verunsicherung und Frust. Hier sind die 4 konkreten Lösungen, 
            die dir sofort neue Lebensqualität schenken:
          </p>
        </ScrollReveal>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {CORE_PILLARS.map((pillar, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1} direction={idx % 2 === 0 ? "left" : "right"}>
              <div className="relative p-7 sm:p-8 rounded-3xl bg-[#FAF6EE]/90 backdrop-blur-sm border border-[#DDD3C2] hover:border-[#2D5A43]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-neutral-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getPillarIcon(idx)}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2D5A43] bg-[#E3EBE6] px-3 py-1 rounded-full">
                    {pillar.highlightBadge}
                  </span>
                </div>

                <div className="text-xs font-mono text-[#527763] font-semibold mb-1">
                  SÄULE {pillar.number}
                </div>
                
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#172D20] mb-1">
                  {pillar.title}
                </h3>
                
                <p className="text-xs font-medium text-[#466553] mb-3">
                  {pillar.subtitle}
                </p>

                <p className="text-sm text-neutral-600 leading-relaxed mb-5">
                  {pillar.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-800 border-t border-[#EAE4DC] pt-4">
                  {pillar.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Highlight Result Box: Der Wochenplan für den sofortigen Start */}
        <ScrollReveal delay={0.2} direction="up">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1C3A2B] via-[#214332] to-[#142A1E] text-white p-8 sm:p-10 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-emerald-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Dein konkretes Endergebnis</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                Du weißt nach dem Lesen genau, wie du deinen Alltag mit Reizdarm 
                Schritt für Schritt entspannter gestaltest.
              </h3>

              <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
                Inklusive dem <strong>exklusiven Wochenplan für den sofortigen Start</strong>: 
                Kein langes Nachdenken, was zu tun ist. Du schlägst den Plan auf und hast vom ersten Tag 
                an Orientierung, Sicherheit und ein beruhigendes Gefühl im Bauch.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-emerald-200">
                <span className="flex items-center gap-1.5">
                  <CalendarCheck className="w-4 h-4 text-emerald-400" />
                  Strukturierter 7-Tage-Ablauf
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Sofortige Entlastung
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Ohne Überforderung
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 text-center">
              <span className="text-xs font-semibold text-emerald-200 uppercase tracking-wider mb-1">
                Einmaliger Sonderpreis
              </span>
              <div className="text-4xl font-display font-extrabold text-white mb-1">
                {PRICE} €
              </div>
              <span className="text-xs text-emerald-200/80 line-through mb-4">
                Regulär 49,00 €
              </span>
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-emerald-50 text-[#1C3A2B] font-bold text-sm py-3.5 px-6 rounded-xl shadow-lg transition"
              >
                <span>Jetzt sichern</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
