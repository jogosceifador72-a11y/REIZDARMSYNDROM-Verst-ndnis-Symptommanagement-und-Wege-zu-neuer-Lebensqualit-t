import React, { useState } from "react";
import { CheckSquare, Square, AlertCircle, ArrowRight, HeartPulse, Sparkles } from "lucide-react";
import { CHECKOUT_URL, PRICE } from "../data/productData";
import { ScrollReveal } from "./ScrollReveal";

const SYMPTOMS = [
  {
    id: 1,
    label: "Ständiges Rätselraten: Du weißt nie, welche Mahlzeit heute wieder Beschwerden auslöst.",
  },
  {
    id: 2,
    label: "Unangenehmer Blähbauch, Völlegefühl oder krampfartige Schmerzen im Unterbauch.",
  },
  {
    id: 3,
    label: "Unberechenbare Verdauung (Durchfall, Verstopfung oder ständiger Wechsel).",
  },
  {
    id: 4,
    label: "Stress, Hektik oder Aufregung schlagen dir sofort spürbar auf den Magen-Darm-Trakt.",
  },
  {
    id: 5,
    label: "Du hast schon wahllose Diäten oder Nahrungsergänzungsmittel ohne echten Plan getestet.",
  },
  {
    id: 6,
    label: "Angst vor Restaurantbesuchen, Einladungen bei Freunden oder langen Reisen.",
  },
];

export const SymptomChecker: React.FC = () => {
  const [selected, setSelected] = useState<number[]>([1, 2, 4]);

  const toggleSymptom = (id: number) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    <section className="py-16 bg-[#F8F3E8]/80 backdrop-blur-md border-y border-[#E2D8C7]/80 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-wider text-[#2D5A43] bg-[#E8EFEA] px-3.5 py-1.5 rounded-full mb-3">
            <HeartPulse className="w-4 h-4 text-[#2D5A43]" />
            <span>Schneller Selbst-Check</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#152B1E] leading-tight">
            Erkennst du deinen Alltag hier wieder?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-2">
            Wähle die Punkte aus, die dir bekannt vorkommen. Ein Reizdarmsyndrom ist kein Schicksal, 
            mit dem du dich abfinden musst.
          </p>
        </ScrollReveal>

        {/* Interactive Checklist */}
        <ScrollReveal delay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
            {SYMPTOMS.map((item) => {
              const isChecked = selected.includes(item.id);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => toggleSymptom(item.id)}
                  className={`flex items-start text-left gap-3.5 p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isChecked
                      ? "bg-[#EAF3EC] border-[#2D5A43] shadow-sm text-[#1B3627]"
                      : "bg-[#FBF8F2]/90 backdrop-blur-sm border-[#DCD5C7] hover:border-[#2D5A43]/40 text-neutral-700"
                  }`}
                >
                  <div className="mt-0.5 flex-shrink-0">
                    {isChecked ? (
                      <div className="w-5 h-5 rounded-md bg-[#2D5A43] text-white flex items-center justify-center">
                        <CheckSquare className="w-4 h-4" />
                      </div>
                    ) : (
                      <Square className="w-5 h-5 text-neutral-300" />
                    )}
                  </div>
                  <span className="text-sm font-medium leading-snug">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Result & Recommendation Banner */}
        <ScrollReveal delay={0.25}>
          <div className="p-6 rounded-2xl bg-[#F6F1E5]/90 backdrop-blur-md border border-[#D9D0BE] shadow-sm">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="space-y-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold uppercase tracking-wider text-[#2D5A43]">
                  <Sparkles className="w-4 h-4" />
                  <span>
                    {selected.length} von 6 Symptomen ausgewählt
                  </span>
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-[#1A3325]">
                  {selected.length > 0
                    ? "Du bist nicht allein – und es gibt einen klaren Weg heraus."
                    : "Bereits ein einzelnes Symptom kann deinen Alltag stark belasten."}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 max-w-xl">
                  Genau für diese Hürden wurde der 30-seitige Leitfaden konzipiert: Er gibt dir 
                  Werkzeuge an die Hand, um Trigger aufzuspüren, die Ernährung schmerzfrei zu gestalten 
                  und dein Nervensystem zu beruhigen.
                </p>
              </div>

              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-center gap-2 bg-[#2D5A43] hover:bg-[#204231] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow transition"
              >
                <span>Jetzt Weg zur Linderung starten</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
