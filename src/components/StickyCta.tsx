import React, { useState, useEffect } from "react";
import { ArrowRight, BookOpen, ShieldCheck } from "lucide-react";
import { CHECKOUT_URL, PRICE } from "../data/productData";
import coverImg from "../assets/images/reizdarm_cover_1792178076208.jpg";

export const StickyCta: React.FC = () => {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 480) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 bg-[#FAF6EE]/95 backdrop-blur-md border-t border-[#DDD3C2] shadow-2xl py-3 px-4 transition-all duration-300 ${
        showSticky
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        {/* Left Info */}
        <div className="flex items-center gap-3">
          <img
            src={coverImg}
            alt="Reizdarm E-Book"
            className="w-10 h-13 object-cover rounded shadow-sm hidden sm:block border border-neutral-200"
          />
          <div>
            <div className="font-display font-bold text-sm text-[#1A3326] leading-tight truncate">
              Reizdarmsyndrom E-Book (PDF)
            </div>
            <div className="text-xs text-neutral-500 hidden sm:block">
              30 Seiten Praxisleitfaden • Sofortiger E-Mail-Download
            </div>
          </div>
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <div className="text-right">
            <span className="text-xs text-neutral-400 line-through mr-2 hidden sm:inline">
              49,00 €
            </span>
            <span className="text-lg sm:text-xl font-display font-extrabold text-[#2D5A43]">
              {PRICE} €
            </span>
          </div>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#2D5A43] hover:bg-[#204432] text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-md transition"
          >
            <span>Jetzt sichern</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
