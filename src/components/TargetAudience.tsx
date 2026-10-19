import React from "react";
import { Check, X, Smartphone, Mail, ShieldAlert, ArrowRight } from "lucide-react";
import { CHECKOUT_URL, PRICE } from "../data/productData";
import { ScrollReveal } from "./ScrollReveal";

export const TargetAudience: React.FC = () => {
  return (
    <section id="zielgruppe" className="py-16 md:py-24 bg-[#F8F2E6]/80 backdrop-blur-md border-y border-[#E0D5C3]/80 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs uppercase tracking-wider font-bold text-[#2D5A43] bg-[#E5EDE8] px-3.5 py-1.5 rounded-full mb-3">
            3. Für wen ist es?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#14291E] leading-tight">
            Ist dieser Leitfaden das Richtige für dich?
          </h2>
          <p className="text-base text-neutral-600 mt-3 leading-relaxed">
            Ehrliche Klarheit: Wir möchten, dass du genau weißt, was dich erwartet 
            und ob dieser Leitfaden perfekt zu deinen Bedürfnissen passt.
          </p>
        </ScrollReveal>

        {/* 2-Column Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-14">
          
          {/* Für dich (Green card) */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="rounded-3xl p-7 sm:p-8 bg-[#F3F8F5]/95 backdrop-blur-sm border-2 border-emerald-300 shadow-sm relative overflow-hidden h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                <Check className="w-6 h-6 stroke-[3]" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                  Genau passend
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#153424]">
                  Für dich, wenn du...
                </h3>
              </div>
            </div>

            <ul className="space-y-4 text-sm sm:text-base text-[#1E3A2B]">
              <li className="flex items-start gap-3.5">
                <div className="mt-1 w-5 h-5 rounded-full bg-emerald-200 text-emerald-800 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>
                  <strong>Deine Verdauungsbeschwerden verstehen</strong> und ohne 
                  Komplikationen nachhaltig in den Griff bekommen möchtest.
                </span>
              </li>

              <li className="flex items-start gap-3.5">
                <div className="mt-1 w-5 h-5 rounded-full bg-emerald-200 text-emerald-800 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>
                  <strong>Betroffen oder Neueinsteiger</strong> bist und eine klare, 
                  beruhigende Orientierung im Informationsdschungel suchst.
                </span>
              </li>

              <li className="flex items-start gap-3.5">
                <div className="mt-1 w-5 h-5 rounded-full bg-emerald-200 text-emerald-800 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>
                  Eine <strong>praxisnahe Methode</strong> suchst, die du sofort und in deinem 
                  eigenen Tempo umsetzen kannst.
                </span>
              </li>
            </ul>
            </div>
          </ScrollReveal>

          {/* Nicht für dich (Neutral / Red card) */}
          <ScrollReveal direction="right" delay={0.15}>
            <div className="rounded-3xl p-7 sm:p-8 bg-[#FAF6F6]/95 backdrop-blur-sm border-2 border-rose-200 shadow-sm relative overflow-hidden h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-rose-500 text-white flex items-center justify-center font-bold">
                  <X className="w-6 h-6 stroke-[3]" />
                </div>
                <div>
                  <span className="text-xs font-bold text-rose-800 uppercase tracking-wider block">
                    Nicht geeignet
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#3B191B]">
                    Nicht für dich, wenn du...
                  </h3>
                </div>
              </div>

              <ul className="space-y-4 text-sm sm:text-base text-[#3C2022]">
                <li className="flex items-start gap-3.5">
                  <div className="mt-1 w-5 h-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center flex-shrink-0">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>
                    Eine <strong>„Wunderheilung“ über Nacht</strong> erwartest, ohne 
                    selbst kleine Anpassungen im Alltag vornehmen zu wollen.
                  </span>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="mt-1 w-5 h-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center flex-shrink-0">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>
                    <strong>Lange, rein theoretische Fachtexte</strong> und trockene 
                    Studien einem direkten, pragmatischen Praxisleitfaden vorziehst.
                  </span>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="mt-1 w-5 h-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center flex-shrink-0">
                    <X className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>
                    Einen Ersatz für eine notwendige akute ärztliche Notfallbehandlung suchst.
                  </span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

        </div>

        {/* Sofortzugang & Details Strip */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-4xl mx-auto rounded-2xl bg-[#FAF6EE]/90 backdrop-blur-md border border-[#DDD3C2] p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-neutral-800">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-white text-emerald-800 shadow-sm border border-neutral-200">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-neutral-900">Format: PDF</h4>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Lesbar auf Handy, Tablet & Computer ohne zusätzliche Software.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-white text-emerald-800 shadow-sm border border-neutral-200">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-neutral-900">Sofortige Lieferung</h4>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Per E-Mail direkt nach Zahlungsbestätigung zum Herunterladen.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-white text-amber-700 shadow-sm border border-neutral-200">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-neutral-900">Wichtiger Hinweis</h4>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Dieser Ratgeber ersetzt keine ärztliche Beratung oder Diagnose.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
