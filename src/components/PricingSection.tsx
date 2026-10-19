import React from "react";
import {
  Check,
  ShieldCheck,
  Zap,
  Lock,
  ArrowRight,
  Sparkles,
  Download,
  CreditCard,
  Gift,
} from "lucide-react";
import { CHECKOUT_URL, PRICE, ORIGINAL_PRICE } from "../data/productData";
import coverImg from "../assets/images/reizdarm_cover_1792178076208.jpg";
import { ScrollReveal } from "./ScrollReveal";

export const PricingSection: React.FC = () => {
  return (
    <section id="preis" className="py-16 md:py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs uppercase tracking-wider font-bold text-[#2D5A43] bg-[#E3EDE7] px-3.5 py-1.5 rounded-full mb-3">
            Sonderangebot • Sofort verfügbar
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#142A1E] leading-tight">
            Investiere heute in deine Darmgesundheit
          </h2>
          <p className="text-base text-neutral-600 mt-3 leading-relaxed">
            Ein kleiner Betrag für spürbar mehr Lebensfreude, Sicherheit und entspannte Mahlzeiten.
          </p>
        </ScrollReveal>

        {/* Pricing Box */}
        <ScrollReveal delay={0.15} direction="up">
          <div className="relative rounded-3xl bg-[#FAF6EE]/95 backdrop-blur-xl border-2 border-[#2D5A43] shadow-2xl overflow-hidden max-w-3xl mx-auto">
          
          {/* Top Banner */}
          <div className="bg-[#2D5A43] text-white py-3 px-6 text-center text-xs sm:text-sm font-bold tracking-wide flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-300" />
            <span>AKTION: Über 45% Rabatt zum Einführungspreis</span>
          </div>

          <div className="p-6 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Visual & What's included */}
              <div className="md:col-span-7 space-y-5">
                <div className="flex items-center gap-4">
                  <img
                    src={coverImg}
                    alt="Reizdarmsyndrom E-Book"
                    className="w-16 h-22 object-cover rounded-lg shadow-md border border-neutral-200 flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#163323] leading-snug">
                      Reizdarmsyndrom E-Book
                    </h3>
                    <p className="text-xs text-neutral-500">
                      Wissenschaftlich fundierter Praxisleitfaden (30 Seiten PDF)
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#EDE7DC] pt-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                    Das ist alles in deinem Kauf enthalten:
                  </div>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-800">
                    <li className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>
                        <strong>30-seitiges E-Book (PDF)</strong> – Verständlich, fundiert & praxiserprobt
                      </span>
                    </li>

                    <li className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>
                        <strong>3-Phasen-Low-FODMAP-Methode</strong> inkl. Einkaufs- & Lebensmittelliste
                      </span>
                    </li>

                    <li className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>
                        <strong>2 bekömmliche Rezeptideen</strong> für sofortiges Wohlbefinden
                      </span>
                    </li>

                    <li className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>
                        <strong>Praktisches Symptomtagebuch</strong> als ausfüllbare Vorlage
                      </span>
                    </li>

                    <li className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>
                        <strong>7-Tage-Sofortstart-Wochenplan</strong> für deinen optimalen Beginn
                      </span>
                    </li>

                    <li className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>
                        <strong>Sofortiger Download</strong> per E-Mail nach Zahlungsbestätigung
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Price & Button */}
              <div className="md:col-span-5 bg-[#FAF8F5] p-6 rounded-2xl border border-[#E4DDD0] text-center space-y-4">
                <span className="text-xs uppercase font-bold tracking-wider text-neutral-500">
                  Einmalige Zahlung
                </span>

                <div className="space-y-1">
                  <div className="text-neutral-400 text-sm line-through">
                    Regulär: {ORIGINAL_PRICE} €
                  </div>
                  <div className="text-4xl sm:text-5xl font-display font-extrabold text-[#1B3A29]">
                    {PRICE} €
                  </div>
                  <div className="text-xs text-emerald-700 font-semibold">
                    Kein Abonnement • Keine Folgekosten
                  </div>
                </div>

                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#2D5A43] hover:bg-[#204332] text-white font-bold text-base py-4 px-6 rounded-xl shadow-lg shadow-[#2D5A43]/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Jetzt bei Hotmart kaufen</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                {/* Hotmart guarantee and payment indicators */}
                <div className="pt-2 text-neutral-500 space-y-2 text-[11px]">
                  <div className="flex items-center justify-center gap-1.5 text-neutral-700 font-medium">
                    <Lock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Offizieller Hotmart-Checkout (256-Bit SSL)</span>
                  </div>
                  <p>
                    Zahlungsmethoden: PayPal, Kreditkarte, Klarna, Sofortüberweisung & mehr.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Guarantee Footer */}
          <div className="bg-[#F4EFE6] border-t border-[#E3DDD2] p-4 text-center text-xs text-neutral-600 flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              100% Sicherer Kauf
            </span>
            <span className="text-neutral-300">•</span>
            <span className="flex items-center gap-1.5 font-medium">
              <Download className="w-4 h-4 text-emerald-700" />
              Sofortiger E-Mail-Download
            </span>
            <span className="text-neutral-300">•</span>
            <span className="flex items-center gap-1.5 font-medium">
              <Gift className="w-4 h-4 text-emerald-700" />
              Inklusive Wochenplan & Tagebuch
            </span>
          </div>

        </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
