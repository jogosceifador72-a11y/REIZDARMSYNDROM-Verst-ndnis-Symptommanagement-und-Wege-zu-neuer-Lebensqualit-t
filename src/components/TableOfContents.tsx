import React from "react";
import { BookOpen, Check, FileText, Sparkles, ChefHat, HeartHandshake, Eye } from "lucide-react";
import { CHAPTERS_OUTLINE, PRICE, CHECKOUT_URL } from "../data/productData";
import { ScrollReveal } from "./ScrollReveal";

interface TableOfContentsProps {
  onOpenPreview: () => void;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ onOpenPreview }) => {
  return (
    <section id="inhalt" className="py-16 md:py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs uppercase tracking-wider font-bold text-[#2D5A43] bg-[#E5EDE8] px-3.5 py-1.5 rounded-full mb-3">
            Inhaltsübersicht
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#14291E] leading-tight">
            Was genau steckt auf den 30 Seiten?
          </h2>
          <p className="text-base text-neutral-600 mt-3 leading-relaxed">
            Ein durchdachter Aufbau, der dich von der Ursachenanalyse bis zum 
            konkreten Wochenplan begleitet.
          </p>
        </ScrollReveal>

        {/* Chapters Cards */}
        <ScrollReveal delay={0.15}>
          <div className="space-y-4 max-w-4xl mx-auto mb-12">
            {CHAPTERS_OUTLINE.map((chapter, idx) => (
              <div
                key={idx}
                className="bg-[#FAF6EE]/90 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-[#DDD3C2] hover:border-[#2D5A43]/50 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#EAEFEA] text-[#2D5A43] font-bold text-xs flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-[#193224]">
                      {chapter.title}
                    </h3>
                  </div>
                  <div className="text-xs font-mono font-medium text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md self-start sm:self-auto border border-emerald-100">
                    {chapter.pages}
                  </div>
                </div>

                <div className="pl-0 sm:pl-11">
                  <div className="text-xs font-semibold text-[#4F735F] mb-1.5">
                    {chapter.tagline}
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {chapter.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Bonus Deliverables Box */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div className="p-5 rounded-2xl bg-[#FAF6EE]/90 backdrop-blur-sm border border-[#DDD3C2] shadow-sm flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex-shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-neutral-900">
                  Symptomtagebuch
                </h4>
                <p className="text-xs text-neutral-500 mt-1">
                  Druck- & ausfüllbare PDF-Vorlage zur schnellen Identifikation deiner Trigger.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF6EE]/90 backdrop-blur-sm border border-[#DDD3C2] shadow-sm flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex-shrink-0">
                <ChefHat className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-neutral-900">
                  2 Magenfreundliche Rezepte
                </h4>
                <p className="text-xs text-neutral-500 mt-1">
                  Leicht bekömmlich, schnell zubereitet und vollkommen Low-FODMAP-konform.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF6EE]/90 backdrop-blur-sm border border-[#DDD3C2] shadow-sm flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-sky-50 text-sky-700 border border-sky-200 flex-shrink-0">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-neutral-900">
                  7-Tage-Sofortstartplan
                </h4>
                <p className="text-xs text-neutral-500 mt-1">
                  Dein Schritt-für-Schritt Fahrplan für den direkten Einstieg ab Tag 1.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Action Button */}
        <ScrollReveal delay={0.25} className="text-center">
          <button
            onClick={onOpenPreview}
            className="inline-flex items-center gap-2 bg-[#2D5A43] hover:bg-[#204432] text-white text-sm font-bold px-7 py-3.5 rounded-xl shadow transition"
          >
            <Eye className="w-4 h-4" />
            <span>Kostenlose Leseprobe öffnen</span>
          </button>
        </ScrollReveal>

      </div>
    </section>
  );
};
