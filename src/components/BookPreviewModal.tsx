import React, { useState } from "react";
import { X, BookOpen, Check, ArrowRight, Sparkles, FileText, Download } from "lucide-react";
import { CHECKOUT_URL, PRICE, CHAPTERS_OUTLINE } from "../data/productData";
import coverImg from "../assets/images/reizdarm_cover_1792178076208.jpg";

interface BookPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookPreviewModal: React.FC<BookPreviewModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<"overview" | "fodmap" | "journal">("overview");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#FAF8F5] rounded-3xl shadow-2xl border border-[#D5CFC5] overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#214332] text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-700/50 flex items-center justify-center border border-emerald-500/30">
              <BookOpen className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold">
                Exklusiver Blick ins E-Book
              </h3>
              <p className="text-xs text-emerald-200">
                Reizdarmsyndrom • 30-seitiger wissenschaftlich fundierter Praxisleitfaden
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-emerald-200 hover:text-white rounded-full hover:bg-emerald-800/60 transition"
            aria-label="Modal schließen"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-[#E6E1D8] bg-[#F2EDE4] px-4 text-xs sm:text-sm font-semibold">
          <button
            onClick={() => setActiveTab("overview")}
            className={`py-3 px-4 border-b-2 transition-all ${
              activeTab === "overview"
                ? "border-[#2D5A43] text-[#2D5A43] bg-[#FAF8F5]"
                : "border-transparent text-neutral-600 hover:text-neutral-900"
            }`}
          >
            Inhaltsverzeichnis (5 Kapitel)
          </button>
          <button
            onClick={() => setActiveTab("fodmap")}
            className={`py-3 px-4 border-b-2 transition-all ${
              activeTab === "fodmap"
                ? "border-[#2D5A43] text-[#2D5A43] bg-[#FAF8F5]"
                : "border-transparent text-neutral-600 hover:text-neutral-900"
            }`}
          >
            Low-FODMAP-Vorschau
          </button>
          <button
            onClick={() => setActiveTab("journal")}
            className={`py-3 px-4 border-b-2 transition-all ${
              activeTab === "journal"
                ? "border-[#2D5A43] text-[#2D5A43] bg-[#FAF8F5]"
                : "border-transparent text-neutral-600 hover:text-neutral-900"
            }`}
          >
            Symptomtagebuch-Auszug
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-[#22332A]">
          {activeTab === "overview" && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white border border-[#E5DFD4] shadow-sm flex items-center gap-4">
                <img
                  src={coverImg}
                  alt="Cover"
                  className="w-16 h-22 object-cover rounded shadow-md border border-neutral-200"
                />
                <div>
                  <h4 className="font-display font-bold text-base text-[#1E3A2B]">
                    30 Seiten, die deinen Alltag erleichtern
                  </h4>
                  <p className="text-xs text-neutral-600 mt-1">
                    Klar strukturiert, sofort anwendbar, ohne unverständliches Mediziner-Latein.
                  </p>
                  <span className="inline-block mt-2 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    PDF Sofort-Download nach Kauf
                  </span>
                </div>
              </div>

              <div className="divide-y divide-[#EAE4DC] border border-[#E5DFD4] rounded-2xl bg-white overflow-hidden shadow-sm">
                {CHAPTERS_OUTLINE.map((ch, idx) => (
                  <div key={idx} className="p-4 hover:bg-[#FAF8F5] transition">
                    <div className="flex items-center justify-between text-xs font-semibold text-[#2D5A43] mb-1">
                      <span>{ch.number}</span>
                      <span className="text-neutral-400 font-mono">{ch.pages}</span>
                    </div>
                    <h5 className="font-bold text-sm text-[#1A2E24] mb-1">
                      {ch.title}
                    </h5>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {ch.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "fodmap" && (
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl">
                <h4 className="font-display font-bold text-[#1E3A2B] text-base mb-1">
                  Die 3 Phasen der Low-FODMAP-Methode
                </h4>
                <p className="text-xs text-neutral-700">
                  Kein dauerhafter Verzicht, sondern ein systematischer Neustart für deine Verdauung.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 bg-white rounded-xl border border-neutral-200 shadow-sm">
                  <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                    Phase 1 (2-6 Wochen)
                  </span>
                  <h5 className="font-bold text-sm text-neutral-900 mt-2 mb-1">
                    Elimination
                  </h5>
                  <p className="text-xs text-neutral-600">
                    Gezielte Reduktion stark blähungsfördernder FODMAPs. Dein Darm kommt endlich zur Ruhe.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-neutral-200 shadow-sm">
                  <span className="text-xs font-bold text-sky-700 bg-sky-100 px-2 py-0.5 rounded">
                    Phase 2 (3-8 Wochen)
                  </span>
                  <h5 className="font-bold text-sm text-neutral-900 mt-2 mb-1">
                    Wiedereinführung
                  </h5>
                  <p className="text-xs text-neutral-600">
                    Schrittweises Austesten einzelner Lebensmittelgruppen zur Identifikation deiner persönlichen Schwellenwerte.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-neutral-200 shadow-sm">
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    Phase 3 (Dauerhaft)
                  </span>
                  <h5 className="font-bold text-sm text-neutral-900 mt-2 mb-1">
                    Individuelle Balance
                  </h5>
                  <p className="text-xs text-neutral-600">
                    Ein entspannter, abwechslungsreicher Speiseplan, der dir maximale Lebensqualität zurückgibt.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-neutral-200 shadow-sm">
                <h5 className="font-bold text-xs uppercase tracking-wider text-neutral-500 mb-2">
                  Inklusive im E-Book
                </h5>
                <ul className="text-xs space-y-1.5 text-neutral-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Praktische Ampel-Einkaufsliste (Grün / Gelb / Rot)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>2 sanfte, alltagstaugliche Wohlfühlrezepte zum Nachkochen</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Tipps für Essen im Restaurant und unterwegs</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "journal" && (
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-2xl border border-neutral-200 shadow-sm">
                <h4 className="font-display font-bold text-base text-[#1E3A2B] mb-2">
                  Das Symptomtagebuch als dein Schlüssel
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  Viele Reizdarm-Betroffene wissen gar nicht genau, was ihnen schadet – weil Reaktionen 
                  oft erst 6 bis 24 Stunden später auftreten. Mit dieser im E-Book enthaltenen Vorlage 
                  bringst du Licht ins Dunkel.
                </p>

                <div className="border border-neutral-200 rounded-xl p-3 bg-[#FAF8F5] font-mono text-[11px] space-y-2 text-neutral-700">
                  <div className="font-bold text-neutral-900 border-b pb-1">
                    BEISPIEL-EINTRAG AUS DEM TAGEBUCH:
                  </div>
                  <div>• Uhrzeit / Mahlzeit: 08:30 Uhr | Haferflocken mit Reismilch & Blaubeeren</div>
                  <div>• Stresslevel (1-10): 3 (entspannter Morgen)</div>
                  <div>• Symptome nach 2h: Keine Beschwerden, Bauch weich</div>
                  <div>• Abendmahlzeit: 19:00 Uhr | Gemüsepfanne (mit Zwiebeln & Knoblauch)</div>
                  <div>• Symptome nach 4h: Starkes Völlegefühl, Blähungen (Trigger identifiziert!)</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer CTA */}
        <div className="p-4 sm:p-5 bg-white border-t border-[#E6E1D8] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="text-xs text-neutral-500">Einmaliger Sonderpreis:</div>
            <div className="text-2xl font-display font-bold text-[#2D5A43]">
              {PRICE} €{" "}
              <span className="text-xs text-neutral-400 font-sans line-through">
                49,00 €
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-semibold text-neutral-600 hover:text-neutral-900 border border-neutral-300 rounded-xl"
            >
              Schließen
            </button>
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#2D5A43] hover:bg-[#234734] text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-md transition"
            >
              <span>Vollständiges E-Book kaufen</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
