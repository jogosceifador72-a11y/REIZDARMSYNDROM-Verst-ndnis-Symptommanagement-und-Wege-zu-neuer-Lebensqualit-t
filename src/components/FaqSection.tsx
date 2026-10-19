import React, { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { FAQS, CHECKOUT_URL, PRICE } from "../data/productData";
import { ScrollReveal } from "./ScrollReveal";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#F8F2E6]/80 backdrop-blur-md border-t border-[#E0D5C3]/80 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs uppercase tracking-wider font-bold text-[#2D5A43] bg-[#E3EDE7] px-3.5 py-1.5 rounded-full mb-3">
            Fragen & Antworten
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#142A1E] leading-tight">
            Häufig gestellte Fragen (FAQ)
          </h2>
          <p className="text-base text-neutral-600 mt-3">
            Alles, was du vor dem Kauf des E-Books wissen musst.
          </p>
        </ScrollReveal>

        {/* Accordion List */}
        <ScrollReveal delay={0.15}>
          <div className="space-y-3.5 mb-14">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#DDD3C2] bg-[#FAF6EE]/90 backdrop-blur-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F3EFE7] transition"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-bold text-base sm:text-lg text-[#193223]">
                      {faq.question}
                    </span>
                    <div
                      className={`p-1.5 rounded-full bg-white text-[#2D5A43] border border-neutral-200 flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-[#2D5A43] text-white" : ""
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-neutral-700 text-sm sm:text-base leading-relaxed border-t border-[#EFEAE2] pt-4 bg-[#FDFBF7]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Final CTA Box */}
        <ScrollReveal delay={0.2}>
          <div className="text-center p-8 rounded-3xl bg-[#FAF6EE]/90 backdrop-blur-md border border-[#DDD3C2] shadow-sm">
            <h3 className="font-display text-2xl font-bold text-[#1A3325] mb-2">
              Bereit für ein neues Bauchgefühl?
            </h3>
            <p className="text-sm text-neutral-600 max-w-lg mx-auto mb-6">
              Sichere dir jetzt deinen Leitfaden für nur <strong>{PRICE} €</strong> und starte noch heute 
              mit deinem persönlichen 7-Tage-Wochenplan.
            </p>
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#2D5A43] hover:bg-[#204432] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-md transition"
            >
              <span>Jetzt E-Book herunterladen ({PRICE} €)</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
